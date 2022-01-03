import React from "react";
import Navbar from "./Navbar";
import "../styles/global.css";
import Footer from "./Footer";
import Hero from "./Hero";
import HomeCard from "./HomeCard";

function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />

      {children}
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
