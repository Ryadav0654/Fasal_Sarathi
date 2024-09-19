import { asyncHandler } from "../utils/asyncHandeler.js"
import axios from "axios"
import { User } from "../models/user.model.js";
import {ensureUniqueUsername} from "../utils/randomUserName.js"
import { generateAccessAndRefereshTokens } from "../utils/generateTokens.js";

const googleAuthRedirect = asyncHandler(async(req,res)=>{
    console.log("this is the first hit");
    const redirectUrl = req?.query?.redirectUrl;
    const redirectUri = `${process.env.BACKEND_URL}/auth/google/callback`;
    const clientId = process.env.GOOGLE_CLIENT_ID;
    const scope = 'profile email';
    const responseType = 'code';
    const googleAuthUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}&state=${encodeURIComponent(redirectUrl)}&prompt=consent`;
    console.log(googleAuthUrl)
    res.redirect(googleAuthUrl);
})

const googleAuthCallback= asyncHandler(async(req,res)=>{
    console.log("this is the second hit ");
    const redirectUrl = req.query.state;
    console.log(redirectUrl);
    
    const code = req.query.code;
    if(!code){
        throw new Error("The code is not provided by google ");
    }
    try {
        // Exchange authorization code for access token
        const tokenResponse = await axios.post('https://oauth2.googleapis.com/token', null, {
        params: {
            code,
            client_id: process.env.GOOGLE_CLIENT_ID,
            client_secret: process.env.GOOGLE_CLIENT_SECRET,  // Required here
            redirect_uri: `${process.env.BACKEND_URL}/auth/google/callback`,
            grant_type: 'authorization_code',
        },
        });
     console.log("this is the third hit ")
    //  console.log(tokenResponse.data);
     
    const { access_token } = tokenResponse.data;
    if(!access_token){
        throw new Error("access_token not recived from google ");
        
    }

    // Get user info from Google
    const userInfoResponse = await axios.get('https://www.googleapis.com/oauth2/v2/userinfo', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    if(!userInfoResponse){
        throw new Error("Error while getting userInfoResponse from google api ");
        
    }
    // console.log(userInfoResponse);
    
    const { id, email, name,picture } = userInfoResponse.data;

    // Find or create user in database
    let user = await User.findOne({ email });
    if (!user) {
      let username = await ensureUniqueUsername(name)
      console.log(username)
      user = new User({ googleId: id, email, fullName: name,username,picture });
      await user.save();
    }
    console.log(user)
    // console.log(user._id)

    // Generate JWT token
    const {accessToken,refreshToken} = await generateAccessAndRefereshTokens(user._id);

    // Set cookie and redirect
    const options = {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Use HTTPS in production
      sameSite: 'Strict',
    };
    // console.log(accessToken );
    
    res
       .status(200)
       .cookie("refreshToken", refreshToken, options)
       .cookie('accessToken', accessToken, options)
       .redirect(redirectUrl&&redirectUrl!=`${process.env.FRONTEND_URL}/login` ? `${decodeURIComponent(redirectUrl)}?status=success` : `${process.env.FRONTEND_URL}/?status=success`);
  } catch (error) {
    console.error('OAuth Error:', error);
      res
        .status(500)
        .redirect(redirectUrl&&redirectUrl!=`${process.env.FRONTEND_URL}/login` ? `${decodeURIComponent(redirectUrl)}?status=failure` : `${process.env.FRONTEND_URL}/?status=failure`)
  }
})




const registerUser = asyncHandler( async (req, res) => {
  // get user details from frontend
  // validation - not empty
  // check if user already exists: username, email
  // check for images, check for avatar
  // upload them to cloudinary, avatar
  // create user object - create entry in db
  // remove password and refresh token field from response
  // check for user creation
  // return res
 console.log("this is register hit ")

  const {fullName, email,  password } = req.body
  //console.log("email: ", email);
  let username = await ensureUniqueUsername(fullName)
  if (
      [fullName, email, username, password].some((field) => field?.trim() === "")
  ) {
      throw new Error("All fields are required")
  }

  const existedUser = await User.findOne({
      $or: [{ username }, { email }]
  })

  if (existedUser) {
      throw new Error("User with email or username already exists")
  }
  //console.log(req.files);

  

  
  const user = await User.create({
      fullName,
      email, 
      password,
      passwordSet:true,
      username: username.toLowerCase()
  })

  const createdUser = await User.findById(user._id).select(
      "-password -refreshToken"
  )

  if (!createdUser) {
      throw new Error("Something went wrong while registering the user")
  }

  return res.status(201).json(createdUser)

} )

const loginUser = asyncHandler(async (req, res) =>{
  // req body -> data
  // username or email
  //find the user
  //password check
  //access and referesh token
  //send cookie

  const {email, password} = req.body
  console.log(email);

  if ( !email) {
      throw new Error("username or email is required")
  }
  
  // Here is an alternative of above code based on logic discussed in video:
  // if (!(username || email)) {
  //     throw new ApiError(400, "username or email is required")
      
  // }

  const user = await User.findOne({
      email
  })

  if (!user) {
      throw new Error("User does not exist")
  }
  if(user.passwordSet==false){
    throw new Error("User password is not set , maybe initial signup from google");
    
  }
  console.log(user);
  

 const isPasswordValid = await user.isPasswordCorrect(password)

 if (!isPasswordValid) {
  throw new Error("Invalid user credentials")
  }

 const {accessToken, refreshToken} = await generateAccessAndRefereshTokens(user._id)

  const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

  const options = {
      httpOnly: true,
      secure: true
  }

  return res
  .status(200)
  .cookie("accessToken", accessToken, options)
  .cookie("refreshToken", refreshToken, options)
  .json(  {user: loggedInUser, accessToken, refreshToken})
})

const logoutUser = asyncHandler(async(req, res) => {
  await User.findByIdAndUpdate(
      req.user._id,
      {
          $unset: {
              refreshToken: 1 // this removes the field from document
          }
      },
      {
          new: true
      }
  )

  const options = {
      httpOnly: true,
      secure: true
  }

  return res
  .status(200)
  .clearCookie("accessToken", options)
  .clearCookie("refreshToken", options)
  .json({})
})

const getCurrUser=asyncHandler(async(req,res)=>{
    const userId=req.user._id;
    if(!userId){
        throw new Error("userId is not present");  
    }
    const user = await User.findById(userId)
    if (!user) {
        throw new Error("User does not exist")
    }
    const {accessToken, refreshToken} = await generateAccessAndRefereshTokens(user._id)

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(  {user: loggedInUser, accessToken, refreshToken})   
})




export {googleAuthCallback,googleAuthRedirect,registerUser,loginUser,logoutUser,getCurrUser};