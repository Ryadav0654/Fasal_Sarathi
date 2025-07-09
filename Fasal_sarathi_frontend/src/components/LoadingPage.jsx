import "./LoadingPage.css"; // We'll style this in a separate CSS file
import logo from "../assets/logo.png"; // Replace this with your actual logo

const LoadingPage = () => {
  return (
    <div className="loading-overlay">
      <div className="loading-container">
        <img src={logo} alt="Fasal Sarathi Logo" className="loading-logo" />
        <div className="spinner"></div> {/* Animation */}
      </div>
    </div>
  );
};

export default LoadingPage;
