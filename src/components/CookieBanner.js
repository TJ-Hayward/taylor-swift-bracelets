import "../styles/CookieBanner.css";
import React from "react";
function CookieBanner() {
  return (
    <div className="cookies-banner-container">
      <div className="cookies-banner-text">
        This website uses cookies to save the number of letters you have when you return or refresh
        the website. By using this website you concent to the use of cookies.
      </div>
    </div>
  );
}

export default CookieBanner;
