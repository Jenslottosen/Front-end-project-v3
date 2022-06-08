import "./App.css";
import { Routes, Route } from "react-router-dom";
import Country from "./components/Country";
import Home from "./components/Home";
import FavoriteCountries from "./components/FavoriteCountries";
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:countryname" element={<Country />} />
        <Route path="/favorites" element={<FavoriteCountries />} />
      </Routes>
    </>
  );
}
