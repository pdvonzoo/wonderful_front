import React from "react";
import { Link } from "react-router-dom";


const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Link style={{ marginLeft: '10px' }} to={{ pathname: "/" }}>Logo</Link>
        <Link style={{ marginLeft: '10px' }} to={{ pathname: "/signin" }}>sign in</Link>
        <Link style={{ marginLeft: '10px' }} to={{ pathname: "/signup" }}>sign up</Link>
        <Link style={{ marginLeft: '10px' }} to={{ pathname: "/userhistory" }}>My</Link>
        <Link style={{ marginLeft: '10px' }} to={{ pathname: "/error" }}>Error</Link>
        <Link style={{ marginLeft: '10px' }} to={{ pathname: "/admin" }}> admin</Link>
      </header>
      {children}
    </>
  );
};

export default Layout;
