import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import PrivacyPolicyHome from "./pages/PrivacyPolicyHome";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyHome />} />
      </Routes>
    </>
  );
};

export default App;
