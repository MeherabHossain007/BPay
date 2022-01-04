import React from "react";
import Navbar from "./Navbar";
import "../styles/global.css";
import Footer from "./Footer";

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
