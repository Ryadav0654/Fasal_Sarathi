import "./App.css";
import { BrowserRouter, Route, Routes,  Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserInputForm from "./pages/UserInputForm";
import Container from "./components/Container/Container";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useSelector } from "react-redux";
import { PrivateRoute } from "./components/index.js";
import HistoryPage from "./pages/History.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Gallery from "./pages/Gallery.jsx";
import Feedback from "./pages/Feedback.jsx";

function App() {
  const accessToken = useSelector((state) => state.auth.accessToken);

  const AuthRoute = ({ children }) => {
    return !accessToken ? children : <Navigate to="/" />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={
            <AuthRoute>
              <Login />
            </AuthRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <AuthRoute>
              <Signup />
            </AuthRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
                <Dashboard />            
            </PrivateRoute>
          }
        />
        <Route
          path="/gallery"
          element={
            <Container>
              <Gallery />          
            </Container>
          }
        />
        <Route
          path="/feedback"
          element={
            <Container>
              <Feedback />
            </Container>          
          }
        />

        <Route
          path="/user-input-form"
          element={
            <PrivateRoute>
              <Container>
                <UserInputForm />
              </Container>
            </PrivateRoute>
          }
        />
        <Route
          path="/history"
          element={
            <PrivateRoute>
              <Container>
                <HistoryPage/>
              </Container>
            </PrivateRoute>
          }
        />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
