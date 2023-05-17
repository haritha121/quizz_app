import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Dashboard from "./components/Dashboard/Dashboard";
import MyRedirect from "./components/Redirect/MyRedirect";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<MyRedirect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
