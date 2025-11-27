
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  // const dispatch = useDispatch();
  const { token, isAuthenticated } = useSelector((state) => state.auth);
  // ⭐️ Redirect only AFTER auth check
  if (!token || !isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}