// import { Route, Routes, useLocation } from "react-router-dom";
// import HomePage from "../pages/HomePage";
// import Navbar from "../components/navbar/Navbar";
// import Footer from "../components/footer/Footer";
// import { useEffect } from "react";
// import Blogs from "../pages/Blogs";
// import CareerTips from "../pages/CareerTips";
// import Recruiter from "../pages/Recruiter";
// import Login from "../pages/Login";
// import RegistrationPage from "../pages/RegistrationPage";

// export default function AppRoutes() {
//   const location = useLocation();

//   useEffect(() => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   }, [location]);

//   // List of paths where you want to hide Navbar and Footer
//   const noNavbarFooterRoutes = ["/login", "/register"];

//   // Check if the current path is in the list
//   const hideNavbarFooter = noNavbarFooterRoutes.includes(location.pathname);

//   return (
//     <>
//       {!hideNavbarFooter && <Navbar />}
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/recruiter" element={<Recruiter />} />
//         <Route path="/careertips" element={<CareerTips />} />
//         <Route path="/blogs" element={<Blogs />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<RegistrationPage />} />
//       </Routes>
//       {!hideNavbarFooter && <Footer />}
//     </>
//   );
// }

import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { useEffect } from "react";
import Blogs from "../pages/Blogs";
import CareerTips from "../pages/CareerTips";
import Recruiter from "../pages/Recruiter";
import Login from "../pages/Login";
import RegistrationPage from "../pages/RegistrationPage";

export default function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Using requestAnimationFrame to ensure smooth scrolling
      window.requestAnimationFrame(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    };

    // Call handleScroll immediately
    handleScroll();

    // Optional: Add a small delay if needed
    const timer = setTimeout(handleScroll, 100);

    return () => clearTimeout(timer);
  }, [location]);

  // List of paths where you want to hide Navbar and Footer
  const noNavbarFooterRoutes = ["/login", "/register"];

  // Check if the current path is in the list
  const hideNavbarFooter = noNavbarFooterRoutes.includes(location.pathname);

  return (
    <>
      {!hideNavbarFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recruiter" element={<Recruiter />} />
        <Route path="/careertips" element={<CareerTips />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegistrationPage />} />
      </Routes>
      {!hideNavbarFooter && <Footer />}
    </>
  );
}

