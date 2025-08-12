import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import AppStore from "./components/AppStore/AppStore";
import Subscribe from "./components/Subscribe";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";
import Produk from "./components/Produk/Produk";
import Team from "./components/Team/Team"; // Impor komponen Team
import Source from "./components/Sourcee/Source";
import AdminDashboard from "./AdminDashboard"; // 🔥 Import Halaman Admin
import WaiconPopup from "./components/waicon.jsx";
import ProjectGalery from "./helper/project.jsx";
import Pricing from "./components/Pricing/Pricing";
import Form from "./components/Form/Form"; // Pastikan path import ini sudah benar


import AOS from "aos";
import "aos/dist/aos.css";


const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar />
        <Routes>
          {/* Rute ke Halaman Home */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <ProjectGalery/>
                <Services />
                <Banner />
                <AppStore />
                {/* <Testimonial /> */}
                {/* <Subscribe /> */}
                <Pricing />
                <Form />
                
              </>
            }
          />

          {/* Rute ke Halaman Produk Digital */}
          <Route path="/Produk" element={<Produk />} />

          {/* Rute ke Halaman Team */}
          <Route path="/Team" element={<Team />} />

          {/* Rute ke Halaman Source Code */}
          <Route path="/Source" element={<Source />} />

          {/* 🔥 Rute ke Halaman Admin */}
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
        <Footer />
        <WaiconPopup />
      </div>
    </Router>
  );
};

export default App;
