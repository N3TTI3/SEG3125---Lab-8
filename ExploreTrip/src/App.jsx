import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Flights from "./pages/Flights";
import Contact from "./pages/Contact";
import PackageDetails from "./pages/PackageDetails";  

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/package-details" element={<PackageDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;