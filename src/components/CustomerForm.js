import React, { useState } from "react";
import toast from "react-hot-toast";
import {WhatsAppNumber} from "../App";


export default function CustomerForm({ items, onClose }) {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    street: "",
    landmark: "",
    state: "",
    country: "",
    pincode: "",
    payment: "Cash on Delivery",
    note: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // ✅ REGEX
  const regex = {
    name: /^[A-Za-z ]{3,}$/,
    phone: /^[6-9]\d{9}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    pincode: /^\d{6}$/,
  };

  // ✅ VALIDATION FUNCTION
  const validate = () => {
    let newErrors = {};

    if (!regex.name.test(form.name)) {
      newErrors.name = "Enter valid name (min 3 letters)";
    }

    if (!regex.phone.test(form.phone)) {
      newErrors.phone = "Enter valid 10-digit phone";
    }

    if (form.email && !regex.email.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!form.street) {
      newErrors.street = "Street required";
    }

    if (!regex.pincode.test(form.pincode)) {
      newErrors.pincode = "Enter valid 6-digit pincode";
    }

    if (!form.state) {
      newErrors.state = "State required";
    }

    if (!form.country) {
      newErrors.country = "Country required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ SUBMIT
  const handleSubmit = () => {
    if (!validate()) {
      toast.error("Please enter all the required details");
      return;
    }

    setLoading(true);

    const orderId = "SPK" + Date.now().toString().slice(-6);

    const productList = items.map(item =>
      `• ${item.name}
   🆔 ID: ${item.id}
   ₹${item.price} x ${item.qty}`
    ).join("\n\n");

    const message = `✨ Sparkle Creation Order ✨

🆔 Order ID: ${orderId}

👤 Name: ${form.name}
📞 Phone: ${form.phone}
📧 Email: ${form.email}

📍 Address:
${form.street}
${form.landmark}
${form.state} - ${form.pincode}
${form.country}

🛍 Products:
${productList}

📝 Note: ${form.note}

💰 Payment: ${form.payment}`;

    toast.loading("Redirecting to WhatsApp...", { id: "order" });

    setTimeout(() => {
      window.open(
        `https://wa.me/${WhatsAppNumber}?text=${encodeURIComponent(message)}`,
        "_blank"
      );

      toast.success("Opening WhatsApp 🚀", { id: "order" });

      setLoading(false);
      onClose();
    }, 1200);
  };

  // ✅ INPUT HANDLER
  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
    setErrors({ ...errors, [field]: "" }); // clear error
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">

        <button className="close-btn" onClick={onClose}>✖</button>

        <h4 className="text-center mb-3">✨ Order Details</h4>

        {/* PRODUCTS */}
        <div className="selected-products mb-3">
          {items.map((item) => (
            <div key={item.id} className="d-flex align-items-center mb-2">
              <img src={item.image} className="form-img me-2" alt="" />
              <div>
                <strong>{item.name}</strong>
                <div>₹{item.price} x {item.qty}</div>
                <small className="text-muted">ID: {item.id}</small>
              </div>
            </div>
          ))}
        </div>

        {/* SUMMARY */}
        <h5>🧾 Order Summary</h5>
        <p>Total Items: {items.length}</p>
        <p>Total Price: ₹{items.reduce((s, i) => s + i.price * i.qty, 0)}</p>
        <hr />

        {/* FORM */}
        <div className="form-grid">

          <div>
            <input className="form-control" placeholder="Name"
              onChange={(e) => handleChange("name", e.target.value)} />
            <small className="text-danger">{errors.name}</small>
          </div>

          <div>
            <input className="form-control" placeholder="Phone"
              onChange={(e) => handleChange("phone", e.target.value)} />
            <small className="text-danger">{errors.phone}</small>
          </div>

          <div>
            <input className="form-control" placeholder="Email"
              onChange={(e) => handleChange("email", e.target.value)} />
            <small className="text-danger">{errors.email}</small>
          </div>

          <div>
            <input className="form-control" placeholder="Pincode"
              onChange={(e) => handleChange("pincode", e.target.value)} />
            <small className="text-danger">{errors.pincode}</small>
          </div>

          <div>
            <input className="form-control" placeholder="State"
              onChange={(e) => handleChange("state", e.target.value)} />
            <small className="text-danger">{errors.state}</small>
          </div>

          <div>
            <input className="form-control" placeholder="Country"
              onChange={(e) => handleChange("country", e.target.value)} />
            <small className="text-danger">{errors.country}</small>
          </div>

        </div>

        <textarea className="form-control mt-2" placeholder="Street"
          onChange={(e) => handleChange("street", e.target.value)} />
        <small className="text-danger">{errors.street}</small>

        <textarea className="form-control mt-2" placeholder="Landmark (optional)"
          onChange={(e) => handleChange("landmark", e.target.value)} />

        <textarea className="form-control mt-2" placeholder="Custom Message (optional)"
          onChange={(e) => handleChange("note", e.target.value)} />

        <br />

        <select className="form-control mb-3"
          onChange={(e) => handleChange("payment", e.target.value)}>
          {/* <option>Cash on Delivery</option> */}
          <option>UPI</option>
        </select>

        {/* BUTTON */}
        <button
          className="btn btn-dark w-100 mb-2"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Processing..." : "Confirm Order"}
        </button>

        <button className="btn btn-outline-secondary w-100" onClick={onClose}>
          Cancel
        </button>

      </div>
    </div>
  );
}