import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import "../styles/Flights.css";

const FLIGHTS = [
  {
    id: 1,
    destination: "Paris",
    country: "France",
    airport: "Charles de Gaulle · CDG",
    airline: "Air France",
    departure: "08:15",
    arrival: "21:40",
    duration: "7h 25m",
    price: 489,
    stops: "Non-stop",
    flag: "🇫🇷",
    code: "CDG",
    flightNumber: "AF 346",
    aircraft: "Airbus A330-200",
    cabin: "Economy",
    baggage: "23kg checked + 12kg carry-on",
    meals: "Meal included",
    cancellation: "Free cancellation within 24h",
  },
  {
    id: 2,
    destination: "Tokyo",
    country: "Japan",
    airport: "Narita International · NRT",
    airline: "Japan Airlines",
    departure: "11:00",
    arrival: "14:30+1",
    duration: "13h 30m",
    price: 872,
    stops: "Non-stop",
    flag: "🇯🇵",
    code: "NRT",
    flightNumber: "JL 72",
    aircraft: "Boeing 787-9",
    cabin: "Economy",
    baggage: "23kg checked + 10kg carry-on",
    meals: "2 meals included",
    cancellation: "Free cancellation within 24h",
  },
  {
    id: 3,
    destination: "Berlin",
    country: "Germany",
    airport: "Brandenburg · BER",
    airline: "Lufthansa",
    departure: "09:45",
    arrival: "22:55",
    duration: "8h 10m",
    price: 411,
    stops: "1 stop · Frankfurt (1h 20m)",
    flag: "🇩🇪",
    code: "BER",
    flightNumber: "LH 472 / LH 182",
    aircraft: "Airbus A320 / A321",
    cabin: "Economy",
    baggage: "23kg checked + 8kg carry-on",
    meals: "Snack included",
    cancellation: "Non-refundable",
  },
  {
    id: 4,
    destination: "Amsterdam",
    country: "Netherlands",
    airport: "Schiphol · AMS",
    airline: "KLM",
    departure: "14:20",
    arrival: "03:35+1",
    duration: "7h 15m",
    price: 398,
    stops: "Non-stop",
    flag: "🇳🇱",
    code: "AMS",
    flightNumber: "KL 621",
    aircraft: "Boeing 777-200ER",
    cabin: "Economy",
    baggage: "23kg checked + 12kg carry-on",
    meals: "Meal included",
    cancellation: "Free cancellation within 24h",
  },
  {
    id: 5,
    destination: "London",
    country: "United Kingdom",
    airport: "Heathrow · LHR",
    airline: "British Airways",
    departure: "07:00",
    arrival: "19:05",
    duration: "6h 05m",
    price: 362,
    stops: "Non-stop",
    flag: "🇬🇧",
    code: "LHR",
    flightNumber: "BA 94",
    aircraft: "Boeing 777-200",
    cabin: "Economy",
    baggage: "23kg checked + 10kg carry-on",
    meals: "Meal included",
    cancellation: "Free cancellation within 24h",
  },
];

function Flights() {
  const today = new Date().toISOString().split("T")[0];

  const [filters, setFilters] = useState({
    departure: today,
    returnDate: "",
    travellers: 1,
    tripType: "round-trip",
  });

  const [selectedFlight, setSelectedFlight] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flights-page">
      <Navbar />

      <div className="flights-body">
        {/* Sidebar */}
        <aside className="flights-sidebar">
          <h2 className="section-title">Plan Your Trip</h2>

          <div className="trip-type-toggle">
            {["round-trip", "one-way"].map((type) => (
              <button
                key={type}
                className={`toggle-btn ${filters.tripType === type ? "active" : ""}`}
                onClick={() =>
                  setFilters((prev) => ({ ...prev, tripType: type }))
                }
              >
                {type === "round-trip" ? "Round Trip" : "One Way"}
              </button>
            ))}
          </div>

          <div className="filter-group">
            <label>Departure Date</label>
            <input
              type="date"
              name="departure"
              value={filters.departure}
              min={today}
              onChange={handleChange}
            />
          </div>

          {filters.tripType === "round-trip" && (
            <div className="filter-group">
              <label>Return Date</label>
              <input
                type="date"
                name="returnDate"
                value={filters.returnDate}
                min={filters.departure || today}
                onChange={handleChange}
              />
            </div>
          )}

          <div className="filter-group">
            <label>Travellers</label>
            <div className="traveller-control">
              <button
                className="count-btn"
                onClick={() =>
                  setFilters((prev) => ({
                    ...prev,
                    travellers: Math.max(1, prev.travellers - 1),
                  }))
                }
              >
                −
              </button>
              <span className="traveller-count">{filters.travellers}</span>
              <button
                className="count-btn"
                onClick={() =>
                  setFilters((prev) => ({
                    ...prev,
                    travellers: Math.min(9, prev.travellers + 1),
                  }))
                }
              >
                +
              </button>
            </div>
            <p className="traveller-label">
              {filters.travellers === 1
                ? "1 adult"
                : `${filters.travellers} adults`}
            </p>
          </div>

          <div className="sidebar-summary">
            <div className="summary-row">
              <span>Departure</span>
              <strong>{filters.departure || "—"}</strong>
            </div>
            {filters.tripType === "round-trip" && (
              <div className="summary-row">
                <span>Return</span>
                <strong>{filters.returnDate || "—"}</strong>
              </div>
            )}
            <div className="summary-row">
              <span>Passengers</span>
              <strong>{filters.travellers}</strong>
            </div>
          </div>
        </aside>

        {/* Flight List */}
        <main className="flights-main">
          <h2 className="section-title">Available Flights</h2>
          <p className="list-sub">
            {FLIGHTS.length} flights found · Prices per person, taxes included
          </p>

          <div className="flight-list">
            {FLIGHTS.map((flight) => {
              const isSelected = selectedFlight === flight.id;
              return (
                <div
                  key={flight.id}
                  className={`flight-card ${isSelected ? "selected" : ""}`}
                  onClick={() =>
                    setSelectedFlight(isSelected ? null : flight.id)
                  }
                >
                  {/* ── Summary row (always visible) ── */}
                  <div className="flight-summary-row">
                    <div className="flight-dest">
                      <span className="flight-flag">{flight.flag}</span>
                      <div>
                        <h3 className="flight-city">{flight.destination}</h3>
                        <p className="flight-country">{flight.country}</p>
                        <p className="flight-airport">{flight.airport}</p>
                      </div>
                    </div>

                    <div className="flight-times">
                      <div className="time-block">
                        <span className="time">{flight.departure}</span>
                        <span className="time-label">MTL</span>
                      </div>
                      <div className="flight-line">
                        <span className="stops-label">{flight.stops}</span>
                        <div className="line">
                          <span className="plane-icon">✈</span>
                        </div>
                        <span className="duration">{flight.duration}</span>
                      </div>
                      <div className="time-block">
                        <span className="time">{flight.arrival}</span>
                        <span className="time-label">{flight.code}</span>
                      </div>
                    </div>

                    <div className="flight-right">
                      <div className="flight-airline">{flight.airline}</div>
                      <div className="flight-price">
                        ${(flight.price * filters.travellers).toLocaleString()}
                      </div>
                      <div className="price-note">
                        {filters.travellers > 1
                          ? `$${flight.price} × ${filters.travellers}`
                          : "per person"}
                      </div>
                      <div className="expand-hint">
                        {isSelected ? "▲ Hide details" : "▼ View details"}
                      </div>
                    </div>
                  </div>

                  {/* ── Expanded details (visible when selected) ── */}
                  {isSelected && (
                    <div
                      className="flight-expanded"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="expanded-divider" />
                      <div className="expanded-grid">
                        <div className="expanded-item">
                          <span className="expanded-label">Flight number</span>
                          <span className="expanded-value">{flight.flightNumber}</span>
                        </div>
                        <div className="expanded-item">
                          <span className="expanded-label">Aircraft</span>
                          <span className="expanded-value">{flight.aircraft}</span>
                        </div>
                        <div className="expanded-item">
                          <span className="expanded-label">Cabin class</span>
                          <span className="expanded-value">{flight.cabin}</span>
                        </div>
                        <div className="expanded-item">
                          <span className="expanded-label">Baggage</span>
                          <span className="expanded-value">{flight.baggage}</span>
                        </div>
                        <div className="expanded-item">
                          <span className="expanded-label">Meals</span>
                          <span className="expanded-value">{flight.meals}</span>
                        </div>
                        <div className="expanded-item">
                          <span className="expanded-label">Cancellation</span>
                          <span className="expanded-value">{flight.cancellation}</span>
                        </div>
                      </div>

                      <div className="expanded-footer">
                        <div className="expanded-total">
                          <span>Total for {filters.travellers} {filters.travellers === 1 ? "passenger" : "passengers"}</span>
                          <strong>${(flight.price * filters.travellers).toLocaleString()}</strong>
                        </div>
                        <button className="book-btn">
                          Book Now →
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default Flights;