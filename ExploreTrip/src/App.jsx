import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Flights from "./pages/Flights";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flights" element={<Flights />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;