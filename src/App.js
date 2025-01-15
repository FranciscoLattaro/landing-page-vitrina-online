import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView/HomeView.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomeView />} />
      </Routes>
    </Router>
  );
};

export default App;
