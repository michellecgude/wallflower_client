// REACT
import React from "react";
import { Link } from "react-router-dom";

// CSS
import "./../styles/Homepage.scss";

// HORIZONTAL SCROLL
import HorizontalScroll from "@oberon-amsterdam/horizontal";
new HorizontalScroll();

export default function LandingPage() {
  return (
    <div>
      {/* <h1>Welcome to Wallflower.</h1>
      <Link to="/register">Register.</Link>
      <Link to="/login">Login.</Link>
      <Link to="/dashboard">Dashboard.</Link> */}

      <header>
        <div className="logo-container">
          <logo>
            <strong>Wallflower</strong>
          </logo>
        </div>
      </header>
      <div className="container">
        <div className="block">
          <h1 className="introduction-header-text">
            It's about time we move on and started healing from COVID together.
          </h1>
        </div>
        <div className="block">
          <h2 className="introduction-sub-text">
            Welcome to Wallflower.
            <br />
            Personalized care for the post COVID blues.
          </h2>
        </div>
        <div className="block">
          <h2 className="introduction-header-text">
            Everyone deserves treatment personalized for them...
          </h2>
        </div>
      </div>
    </div>
  );
}
