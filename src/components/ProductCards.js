import React from "react";
import toast from "react-hot-toast";
import {WhatsAppNumber} from "../App";

export default function ProductCard({ item, addToCart, buyNow }) {
  return (
    <div className="card colorful-card p-2 text-center">

      {/* IMAGE */}
      <img src={item.image} className="card-img-top" alt={item.name} />

      <div className="card-body">

        {/* NAME */}
        <h5 className="fw-bold">{item.name}</h5>

        {/* CAPTION */}
        {item.caption && (
          <p className="caption">{item.caption}</p>
        )}

        {/* DESCRIPTION */}
        {item.description && (
          <p className="description">{item.description}</p>
        )}

        {/* PRICE / ENQUIRY */}
        {item.price ? (
          <p className="price">₹{item.price}</p>
        ) : (
          <p className="text-danger fw-bold">Contact on WhatsApp</p>
        )}

        {/* BUTTONS */}
        <div className="d-flex justify-content-center gap-2">

          {!item.custom && (
            <button
              className="btn btn-outline-dark"
              onClick={() => {
                addToCart(item);
                toast.success("Added to cart 🛒");
              }}
            >
              Add
            </button>
          )}

          <button
            className="btn btn-dark"
            onClick={() => {
              if (item.custom) {
                window.open(
                  `https://wa.me/${WhatsAppNumber}?text=Hi, I want details about ${item.name}`,
                  "_blank"
                );
              } else {
                buyNow([{ ...item, qty: 1 }]);
              }
            }}
          >
            {item.custom ? "Enquire" : "Buy"}
          </button>

        </div>

      </div>
    </div>
  );
}