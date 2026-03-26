import React from "react";
import productsData from "../data/ProductsData";
import ProductCard from "../components/ProductCards"; // ✅ FIXED

export default function Products({ addToCart, buyNow }) {

  const leftCategories = ["keychain", "gifts"];
  const rightCategories = ["clock", "custom", "accessories"];

  return (
    <div className="container mt-4">

      <h2 className="gradient-text text-center mb-5">
        ✨ Our Creations ✨
      </h2>

      <div className="row g-4">

        {/* LEFT */}
        <div className="col-md-6">
          {leftCategories.map((cat) => {
            const filtered = productsData.filter(p => p.category === cat);
            if (!filtered.length) return null;

            return (
              <div key={cat} className="category-box mb-4">
                <h4 className="category-title text-capitalize">{cat} ✨</h4>

                <div className="row g-3">
                  {filtered.map(item => (
                    <div className="col-md-6" key={item.id}>
                      <ProductCard
                        item={item}
                        addToCart={addToCart}
                        buyNow={buyNow}
                      />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT */}
        <div className="col-md-6">
          {rightCategories.map((cat) => {
            const filtered = productsData.filter(p => p.category === cat);
            if (!filtered.length) return null;

            return (
              <div key={cat} className="category-box mb-4">
                <h4 className="category-title text-capitalize">{cat} ✨</h4>

                <div className="row g-3">
                  {filtered.map(item => (
                    <div className="col-md-6" key={item.id}>
                      <ProductCard
                        item={item}
                        addToCart={addToCart}
                        buyNow={buyNow}
                      />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}