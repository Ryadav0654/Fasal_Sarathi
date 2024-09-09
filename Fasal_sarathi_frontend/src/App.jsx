import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserInputForm from "./pages/UserInputForm";
import Container from "./components/Container/Container";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Routes>
        <Route
          path="/user-input-form"
          element={
            <Container>
              <UserInputForm />
            </Container>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
