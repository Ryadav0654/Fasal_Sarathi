import { User } from "../models/user.model.js";
function generateUniqueUsername(name) {
    const baseUsername = name.replace(/\s+/g, '').toLowerCase(); // Remove spaces and convert to lowercase
    const randomSuffix = Math.floor(1000 + Math.random() * 9000); // Generate a random 4-digit number
    return `${baseUsername}${randomSuffix}`; // Combine name with random suffix
  }
  
  async function ensureUniqueUsername(name) {
    let username = generateUniqueUsername(name);
    let userExists = await User.findOne({ username });
  
    while (userExists) {
      // If username exists, generate another one
      username = generateUniqueUsername(name);
      userExists = await User.findOne({ username });
    }
  
    return username;
  }

export {ensureUniqueUsername};