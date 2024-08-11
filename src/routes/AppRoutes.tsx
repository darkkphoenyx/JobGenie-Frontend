import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

export default function AppRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
      <Footer />
    </>
  );
}
