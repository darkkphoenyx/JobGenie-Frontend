import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import About from "../pages/About";
import Navbar from "../components/navbar/Navbar";

export default function AppRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </>
  );
}
