import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Weather from "./components/Weather";
import FadeInWrapper from "./components/FadeInWrapper";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <FadeInWrapper>
              <Main />
            </FadeInWrapper>
          }
        />
        <Route
          path="/weather"
          element={
            <FadeInWrapper>
              <Weather />
            </FadeInWrapper>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}
