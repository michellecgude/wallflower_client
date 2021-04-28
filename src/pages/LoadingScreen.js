import React from "react";

import "./../styles/LoadingScreen.scss";

export default function LoadingScreen() {
  return (
    <div className="container">
      <h1 className="loading-text">
        It's about time we move on and started{" "}
        <span id="loading-span-text">healing</span> from COVID together.
      </h1>
    </div>
  );
}
