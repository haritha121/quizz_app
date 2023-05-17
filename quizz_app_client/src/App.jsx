import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Dashboard from "./components/Dashboard/Dashboard";
import MyRedirect from "./components/Redirect/MyRedirect";
import axios from "axios";
import store from "./store/index";

function App() {
  useEffect(() => {
    if (localStorage.getItem("_ID")) {
      axios
        .get(`/api/users/${localStorage.getItem("_ID")}`)
        .then((res) => {
          store.dispatch({
            user: res.data.user,
            type: "set_user",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

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
