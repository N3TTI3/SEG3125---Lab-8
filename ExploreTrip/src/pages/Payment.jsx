import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackButton from "../components/BackButton";
import "../styles/Payment.css";

function formatCard(value) {
  return value
    .replace(/\D/g, "")
    .slice(0, 16)
    .replace(/(.{4})/g, "$1 ")
    .trim();
}

function formatExpiry(value) {
  const digits = value.replace(/\D/g, "").slice(0, 4);
  if (digits.length >= 3) return digits.slice(0, 2) + "/" + digits.slice(2);
  return digits;
}

function Payment() {
  const location = useLocation();
  const navigate = useNavigate();

  const { flight, travellers, user, departure, returnDate, tripType } =
    location.state || {};

  const [fields, setFields] = useState({
    cardName: user?.name || "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    billingAddress: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  if (!flight) {
    return (
      <div className="payment-page">
        <Navbar />
        <div className="payment-empty">
          <p>No booking found. Please select a flight first.</p>
          <button onClick={() => navigate("/flights")} className="pay-btn">
            Browse Flights
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  const total = flight.price * (travellers || 1);

  const validate = () => {
    const e = {};
    if (!fields.cardName.trim()) e.cardName = "Name on card is required.";
    const digits = fields.cardNumber.replace(/\s/g, "");
    if (digits.length !== 16) e.cardNumber = "Enter a valid 16-digit card number.";
    if (!/^\d{2}\/\d{2}$/.test(fields.expiry)) e.expiry = "Enter expiry as MM/YY.";
    if (!/^\d{3,4}$/.test(fields.cvv)) e.cvv = "Enter a 3 or 4 digit CVV.";
    if (!fields.billingAddress.trim()) e.billingAddress = "Billing address is required.";
    if (!fields.city.trim()) e.city = "City is required.";
    if (!fields.postalCode.trim()) e.postalCode = "Postal code is required.";
    if (!fields.country.trim()) e.country = "Country is required.";
    return e;
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "cardNumber") value = formatCard(value);
    if (name === "expiry") value = formatExpiry(value);
    if (name === "cvv") value = value.replace(/\D/g, "").slice(0, 4);
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }

    setLoading(true);
    // ── TODO: replace with real payment API call ──
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setConfirmed(true);
  };

  if (confirmed) {
    return (
      <div className="payment-page">
        <Navbar />
        <div className="payment-confirmed">
          <div className="confirmed-icon">✓</div>
          <h1 className="confirmed-title">You're all set!</h1>
          <p className="confirmed-sub">
            Booking confirmed for <strong>{flight.destination}</strong> on{" "}
            <strong>{flight.airline}</strong>.
          </p>
          <p className="confirmed-detail">
            A receipt for <strong>${total.toLocaleString()}</strong> will be
            sent to <strong>{user?.email}</strong>.
          </p>
          <button className="pay-btn" onClick={() => navigate("/")}>
            Back to Home
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="payment-page">
      <Navbar />
      <BackButton />

      <div className="payment-body">
        {/* ── Left: form ── */}
        <main className="payment-main">
          <h2 className="payment-section-title">Payment Details</h2>
          <p className="payment-sub">
            Booking as <strong>{user?.name}</strong> · {user?.email}
          </p>

          {/* Card details */}
          <fieldset className="payment-fieldset">
            <legend className="fieldset-legend">Card Information</legend>

            <div className="payment-field full">
              <label>Name on card</label>
              <input
                type="text"
                name="cardName"
                value={fields.cardName}
                onChange={handleChange}
                placeholder="Jane Smith"
                autoComplete="cc-name"
              />
              {errors.cardName && <span className="field-error">{errors.cardName}</span>}
            </div>

            <div className="payment-field full">
              <label>Card number</label>
              <div className="card-number-wrapper">
                <input
                  type="text"
                  name="cardNumber"
                  value={fields.cardNumber}
                  onChange={handleChange}
                  placeholder="1234 5678 9012 3456"
                  autoComplete="cc-number"
                  inputMode="numeric"
                />
                <span className="card-icons">💳</span>
              </div>
              {errors.cardNumber && <span className="field-error">{errors.cardNumber}</span>}
            </div>

            <div className="payment-field half">
              <label>Expiry date</label>
              <input
                type="text"
                name="expiry"
                value={fields.expiry}
                onChange={handleChange}
                placeholder="MM/YY"
                autoComplete="cc-exp"
                inputMode="numeric"
              />
              {errors.expiry && <span className="field-error">{errors.expiry}</span>}
            </div>

            <div className="payment-field half">
              <label>CVV</label>
              <input
                type="text"
                name="cvv"
                value={fields.cvv}
                onChange={handleChange}
                placeholder="123"
                autoComplete="cc-csc"
                inputMode="numeric"
              />
              {errors.cvv && <span className="field-error">{errors.cvv}</span>}
            </div>
          </fieldset>

          {/* Billing address */}
          <fieldset className="payment-fieldset">
            <legend className="fieldset-legend">Billing Address</legend>

            <div className="payment-field full">
              <label>Street address</label>
              <input
                type="text"
                name="billingAddress"
                value={fields.billingAddress}
                onChange={handleChange}
                placeholder="123 Main Street"
                autoComplete="street-address"
              />
              {errors.billingAddress && <span className="field-error">{errors.billingAddress}</span>}
            </div>

            <div className="payment-field half">
              <label>City</label>
              <input
                type="text"
                name="city"
                value={fields.city}
                onChange={handleChange}
                placeholder="Montréal"
                autoComplete="address-level2"
              />
              {errors.city && <span className="field-error">{errors.city}</span>}
            </div>

            <div className="payment-field half">
              <label>Postal code</label>
              <input
                type="text"
                name="postalCode"
                value={fields.postalCode}
                onChange={handleChange}
                placeholder="H2X 1Y4"
                autoComplete="postal-code"
              />
              {errors.postalCode && <span className="field-error">{errors.postalCode}</span>}
            </div>

            <div className="payment-field full">
              <label>Country</label>
              <input
                type="text"
                name="country"
                value={fields.country}
                onChange={handleChange}
                placeholder="Canada"
                autoComplete="country-name"
              />
              {errors.country && <span className="field-error">{errors.country}</span>}
            </div>
          </fieldset>

          <p className="payment-security-note">
            🔒 Your payment information is encrypted and never stored on our servers.
          </p>

          <button
            className={`pay-btn ${loading ? "loading" : ""}`}
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Processing…" : `Pay $${total.toLocaleString()}`}
          </button>
        </main>

        {/* ── Right: order summary ── */}
        <aside className="payment-sidebar">
          <h3 className="summary-heading">Order Summary</h3>

          <div className="summary-flight-card">
            <div className="summary-flag-dest">
              <span className="summary-flag">{flight.flag}</span>
              <div>
                <p className="summary-city">{flight.destination}</p>
                <p className="summary-country">{flight.country}</p>
              </div>
            </div>

            <div className="summary-route">
              <span className="summary-time">{flight.departure}</span>
              <span className="summary-dash">→</span>
              <span className="summary-time">{flight.arrival}</span>
            </div>
            <p className="summary-meta">{flight.duration} · {flight.stops}</p>
            <p className="summary-meta">{flight.airline} · {flight.flightNumber}</p>
          </div>

          <div className="summary-lines">
            <div className="summary-line">
              <span>Departure</span>
              <strong>{departure || "—"}</strong>
            </div>
            {tripType === "round-trip" && (
              <div className="summary-line">
                <span>Return</span>
                <strong>{returnDate || "—"}</strong>
              </div>
            )}
            <div className="summary-line">
              <span>Passengers</span>
              <strong>{travellers}</strong>
            </div>
            <div className="summary-line">
              <span>Price per person</span>
              <strong>${flight.price.toLocaleString()}</strong>
            </div>
            <div className="summary-line">
              <span>Cabin</span>
              <strong>{flight.cabin}</strong>
            </div>
            <div className="summary-line">
              <span>Baggage</span>
              <strong>{flight.baggage}</strong>
            </div>
          </div>

          <div className="summary-total-row">
            <span>Total</span>
            <strong>${total.toLocaleString()}</strong>
          </div>

          <p className="summary-cancel">{flight.cancellation}</p>
        </aside>
      </div>

      <Footer />
    </div>
  );
}

export default Payment;