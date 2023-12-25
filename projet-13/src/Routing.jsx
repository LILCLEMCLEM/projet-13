import React from "react";

import App from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./pages/Signup";
import UserPage from "./pages/User";
import Logout from "./components/logout";

function AppRoute() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default AppRoute;
