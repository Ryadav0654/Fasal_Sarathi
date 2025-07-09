
import { Input } from "../components/index.js";
import { useForm } from "react-hook-form";
const FeedbackForm = () => {
  const { register, handleSubmit } = useForm();

  const feedbackHandler = (data) => {
    console.log("feedback-data: ", data);
  };

  return (
    <div className="w-full lg:w-4/5 xl:w-4/5 bg-green-400 h-full rounded-3xl py-6 px-4 lg:py-6 lg:px-10 md:px-8 mx-5 lg:mx-10">
    <h1 className="text-3xl lg:text-5xl font-extrabold text-center">
      Give Feedback
    </h1>
  
   
    <div className="w-full pt-8 flex justify-center">
      <form onSubmit={handleSubmit(feedbackHandler)} className="w-full">
        <div className="px-2 lg:px-10 pb-2">
          
          <textarea
            name="feedback"
            cols={10}
            rows={10}
            {...register("feedback", {
              required: true,
              maxLength: 500,
            })}
            className="rounded-xl p-5 text-black font-medium mb-3 lg:mb-6 w-full h-32 lg:h-48"
            placeholder="Enter Your Feedback"
          ></textarea>
  
      
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
         
            <div>
              <Input
                type="text"
                placeholder="Enter Your Name"
                className="rounded-lg px-3 py-2 text-black font-medium w-full"
                label="Name"
                {...register("name", {
                  required: true,
                  maxLength: 50,
                })}
              />
            </div>
  
          
            <div>
              <Input
                type="text"
                placeholder="Enter Your Occupation"
                className="rounded-lg px-3 py-2 text-black font-medium w-full"
                label="Occupation"
                {
                  ...register("occupation", {
                    required: true,
                    maxLength: 50,
                  })
                }
              />
            </div>
  
            
            <div>
              <Input
                type="text"
                placeholder="Enter Your State"
                className="rounded-lg px-3 py-2 text-black font-medium w-full"
                label="State"
                {
                  ...register("state", {
                    required: true,})
                }
              />
            </div>
          </div>
  
          <div className="flex justify-center mt-5">
            <Input
              type="submit"
              className="bg-[#06a751] rounded-md lg:rounded-lg border-none px-7 py-3 lg:py-2 text-xl text-white hover:bg-[#034633FF] lg:mt-5"
              
            />
          </div>
        </div>
      </form>
    </div>
  </div>
  )  
};

export default FeedbackForm;
