import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView/HomeView.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeView />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
};

export default App;
