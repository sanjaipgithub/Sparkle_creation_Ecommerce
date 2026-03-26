import React from "react";

export default function Cart({
  cart,
  increaseQty,
  decreaseQty,
  removeItem,
  buyNow,
  goToProducts,
}) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="container mt-4">
      <h2 className="gradient-text text-center mb-4">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <div className="text-center mt-5">
          <h4>Your cart is empty 😔</h4>
          <p>Add some beautiful creations ✨</p>
        </div>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="cart-card d-flex align-items-center justify-content-between p-3 mb-3"
            >
              {/* IMAGE */}
              <div className="d-flex align-items-center gap-3">
                <img src={item.image} alt={item.name} className="cart-img" />

                <div>
                  <h5 className="mb-1">{item.name}</h5>

                  <small className="text-muted">Product ID: #{item.id}</small>

                  <p className="price mb-1">₹{item.price}</p>

                  <small>Qty: {item.qty}</small>
                </div>
              </div>

              {/* ACTIONS */}
              <div className="text-end">
                <div className="mb-2">
                  <button
                    className="btn btn-sm btn-outline-dark"
                    onClick={() => decreaseQty(item.id)}
                  >
                    -
                  </button>
                  <button
                    className="btn btn-sm btn-outline-dark mx-1"
                    onClick={() => increaseQty(item.id)}
                  >
                    +
                  </button>
                </div>

                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="text-end mt-4">
            <h3>
              Total: <span className="price">₹{total}</span>
            </h3>

            <button className="btn btn-dark me-2" onClick={() => buyNow(cart)}>
              Buy All
            </button>

            <button
              className="btn btn-outline-primary fw-bold"
              onClick={goToProducts}
            >
              🛍 Continue Shopping
            </button>
          </div>
        </>
      )}
    </div>
  );
}
