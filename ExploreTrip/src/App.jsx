import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Flights from "./pages/Flights";
import Contact from "./pages/Contact";
import PackageDetails from "./pages/PackageDetails";  
import Payment from "./pages/Payment";
   

function App() {
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