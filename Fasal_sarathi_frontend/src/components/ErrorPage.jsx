import { Link } from 'react-router-dom';
import errorImage from '../assets/error.svg'; // Replace with your own error image or icon

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6">
      <div className="text-center max-w-lg">
        {/* Error Image */}
        <img 
          src={errorImage} 
          alt="Error" 
          className="w-48 h-48 mx-auto mb-6" 
        />
        
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Oops! Something went wrong
        </h1>
        
        {/* Error Message */}
        <p className="text-lg text-gray-600 mb-6">
          We’re sorry, but something went wrong. Please try again later or go back to the homepage.
        </p>
        
        {/* Button to return home */}
        <Link to="/" className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-green-600 transition duration-300">
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
