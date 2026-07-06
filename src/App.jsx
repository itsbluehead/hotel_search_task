import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import HotelDetails from "./pages/HotelDetails.jsx";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels/:id" element={<HotelDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
