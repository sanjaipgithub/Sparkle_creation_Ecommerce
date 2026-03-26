import React, { useEffect, useState } from "react";
import Home from "./pages/Welcome";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import CustomerForm from "./components/CustomerForm";
import { Toaster } from "react-hot-toast";

export const WhatsAppNumber = "919600642964";

export default function App() {
  const [page, setPage] = useState("home");
  const [showForm, setShowForm] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const [cart, setCart] = useState(() => {
  try {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
});



const message = "Please tell us your queries?";


  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) setCart(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((p) => (p.id === id ? { ...p, qty: p.qty + 1 } : p))
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, qty: p.qty - 1 } : p))
        .filter((p) => p.qty > 0)
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const buyNow = (items) => {
    setSelectedItems(items);
    setShowForm(true);
  };

  return (
    <>
      <div className={showForm ? "blur-bg" : ""}>
        <Toaster position="top-right" />

        <nav className="navbar navbar-dark px-3">
          <h4 className="text-white">🦋 Sparkle Creation</h4>
          <div>
            <button className="btn btn-light mx-1" onClick={() => setPage("home")}>Home</button>
            <button className="btn btn-light mx-1" onClick={() => setPage("products")}>Products</button>
            <button className="btn btn-warning" onClick={() => setPage("cart")}>
              Cart ({cart.reduce((s,i)=>s+i.qty,0)})
            </button>

          </div>
        </nav>

        {page === "home" && <Home goToProducts={() => setPage("products")} />}
        {page === "products" && <Products addToCart={addToCart} buyNow={buyNow} />}
        {page === "cart" && (
          <Cart
            cart={cart}
            increaseQty={increaseQty}
            decreaseQty={decreaseQty}
            removeItem={removeItem}
            buyNow={buyNow}
              goToProducts={() => setPage("products")}  // ✅ ADD THIS

          />
        )}
      </div>
     <a
  href={`https://wa.me/${WhatsAppNumber}?text=${encodeURIComponent(message)}`}
  className="feedback-btn"
  target="_blank"
  rel="noopener noreferrer"
>
  💬
</a>

      {showForm && (
        <CustomerForm
          items={selectedItems}
          onClose={() => setShowForm(false)}
        />
      )}
    </>
  );
}