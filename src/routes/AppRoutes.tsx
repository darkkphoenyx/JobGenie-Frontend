import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { useRef } from "react";
import Blogs from "../pages/Blogs";
import CareerTips from "../pages/CareerTips";
import Recruiter from "../pages/Recruiter";

export default function AppRoutes() {
  const parentRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <Navbar paRrf={parentRef} />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/recruiter" element={<Recruiter />}></Route>
        <Route path="/careertips" element={<CareerTips />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
      </Routes>
      <Footer />
    </>
  );
}
