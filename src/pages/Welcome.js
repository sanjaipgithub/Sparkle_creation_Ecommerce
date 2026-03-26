import React from "react";

export default function Welcome({ goToProducts }) {
  return (
    <div className="hero premium-hero">
      <div className="container text-center">

        {/* BRAND */}
        <h1 className="brand-title">
          <span className="butterfly">🦋</span> Sparkle Creation
        </h1>

        {/* TAGLINE */}
        <p className="tagline">
          💝 Crafted with Love, Designed to Last Forever ♾️
        </p>

        {/* SUB TEXT */}
        <p className="sub-tag">
          We turn your emotions into timeless resin art ✨  
          <br />
          Every piece tells your story 💖
        </p>

        {/* CTA BUTTON */}
        <button className="premium-btn mt-4" onClick={goToProducts}>
          Explore Creations 🛍
        </button>

        {/* TRUST */}
        <div className="trust-box mt-4">
          <p>⭐ 100+ Happy Customers</p>
          <p>💖 Handmade with Passion</p>
          <p>🚚 Pan India Delivery</p>
        </div>

      </div>
    </div>
  );
}