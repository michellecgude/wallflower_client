// REACT
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

// LOADING SCREEN COMPONENT
// import LoadingScreen from "./LoadingScreen";

// CSS
import "./../styles/Homepage.scss";

// REACT-GSAP
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { Reveal, Tween } from "react-gsap";

// OTHER
import HorizontalScroll from "@oberon-amsterdam/horizontal";

// HORIZONTAL SCROLL
new HorizontalScroll({
  scrollAmount: 3000,
  scrollAmountStep: 1000,
  ignoreScroll: null,
});

// GSAP TEXT PLUGIN
gsap.registerPlugin(TextPlugin);

export default function LandingPage() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => setLoading(false, 6000));
  // }, []);

  return (
    <>
      {/* {loading === false ? ( */}
      <div>
        {/* <h1>Welcome to Wallflower.</h1>
      <Link to="/register">Register.</Link>
      <Link to="/login">Login.</Link>
      <Link to="/dashboard">Dashboard.</Link> */}

        {/* <header>
        <div className="logo-container">
          <logo>
            <strong>Wallflower</strong>
          </logo>
        </div>
      </header> */}

        <div className="container">
          <div className="intro-block">
            <Reveal>
              <Tween from={{ opacity: 0 }} duration={4}>
                <h1 className="introduction-header-text">
                  It's about time we move on and started healing from COVID
                  together.
                </h1>
              </Tween>
              <Tween from={{ delay: 2, opacity: 0 }} duration={4}>
                <h2 className="introduction-sub-text">
                  Welcome to Wallflower.
                  <br />
                  Personalized care for the post COVID blues.
                </h2>
              </Tween>
            </Reveal>
          </div>
          <div className="block"></div>
          <div className="block">
            <h2 className="introduction-motto-text">
              It doesn't matter whether you're...
              <br />
            </h2>
            <h3> </h3>
          </div>
          <div className="block"></div>
        </div>
      </div>
      {/* ) : ( */}
      {/* <LoadingScreen /> */}
      {/* )} */}
    </>
  );
}
