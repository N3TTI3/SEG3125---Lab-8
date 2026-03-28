import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Flights from "./pages/Flights";
import Contact from "./pages/Contact";
import PackageDetails from "./pages/PackageDetails";
import Payment from "./pages/Payment";
import { useEffect } from "react";
import "./styles/App.css";

function App() {useEffect(() => {
  window.googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        includedLanguages: "en,fr,es",
        autoDisplay: false,      // prevents the top banner from showing
      },
      "google_translate_element"
    );
  };

  const script = document.createElement("script");
  script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  script.async = true;
  document.body.appendChild(script);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/package-details" element={<PackageDetails />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;