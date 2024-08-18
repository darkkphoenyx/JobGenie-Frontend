import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { useRef } from "react";
import Blogs from "../pages/Blogs";
import CareerTips from "../pages/CareerTips";
import Recruiter from "../pages/Recruiter";
import Login from "../pages/Login";
import RegistrationPage from "../pages/RegistrationPage";

export default function AppRoutes() {
  const parentRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // List of paths where you want to hide Navbar and Footer
  const noNavbarFooterRoutes = ["/login", "/registrationPage"];

  // Check if the current path is in the list
  const hideNavbarFooter = noNavbarFooterRoutes.includes(location.pathname);

  return (
    <>
      {!hideNavbarFooter && <Navbar paRrf={parentRef} />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recruiter" element={<Recruiter />} />
        <Route path="/careertips" element={<CareerTips />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registrationPage" element={<RegistrationPage />} />
      </Routes>
      {!hideNavbarFooter && <Footer />}
    </>
  );
}
