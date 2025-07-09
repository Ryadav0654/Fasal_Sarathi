import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useCallback, useEffect } from "react";
import { logout } from "../redux/slice/authThunk";
import {jwtDecode} from "jwt-decode";
import PropTypes from "prop-types";

PrivateRoute.propTypes = {
  children: PropTypes.node
}
const PrivateRoute = ({ children }) => {
  const isTokenExpired = useCallback((token) => {
    try {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000; // Convert milliseconds to seconds
      return decodedToken.exp < currentTime;
    } catch (error) {
      console.error(error)
      return true; // If there's an error decoding the token, consider it invalid
    }
  }, []);

  // Use this function to validate token on page load or route change
  const validateToken = useCallback(() => {
    const token = localStorage.getItem("accessToken");

    if (!token || isTokenExpired(token)) {
      return false; // Token is either invalid or expired
    }
    return true; // Token is valid
  }, [isTokenExpired]);

  const { accessToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!validateToken()) {
      dispatch(logout()); // Log out user if token is invalid or expired
    }
  }, [accessToken, dispatch, validateToken]);

  return accessToken && validateToken() ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
