import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BouncingCard from "../Produk/BouncingCard";
import photo1 from "../../assets/photo4.png";
import photo2 from "../../assets/shopping.png";
import photo3 from "../../assets/desain.png";
import photo4 from "../../assets/logo.png";
import photo5 from "../../assets/photo1.png";
import photo6 from "../../assets/photo2.png";
import photo7 from "../../assets/latahzan.png";
import photo8 from "../../assets/website.png";

const Produk = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
  };

  // Data Produk
  const products = [
    {
      imgSrc: photo1,
      category: "Source Code",
      title: "Website Sistem Sekolah",
      price: 25000,
      oldPrice: 50000,
      link: "https://wa.me/6282275373233?text=Halo,%20saya%20mau%20beli%20Website%20Sistem%20Sekolah",
    },
    {
      imgSrc: photo2,
      category: "Source Code",
      title: "E-Commerce Platform",
      price: 35000,
      oldPrice: 70000,
      link: "https://wa.me/6282275373233?text=Halo,%20saya%20mau%20beli%20E-Commerce%20Platform",
    },
    {
      imgSrc: photo3,
      category: "Design",
      title: "Template Desain UI/UX",
      price: 15000,
      oldPrice: 30000,
      link: "https://wa.me/6282275373233?text=Halo,%20saya%20mau%20beli%20Template%20Desain%20UI/UX",
    },
    {
      imgSrc: photo4,
      category: "Design",
      title: "Desain Logo Profesional",
      price: 10000,
      oldPrice: 20000,
      link: "https://wa.me/6282275373233?text=Halo,%20saya%20mau%20beli%20Desain%20Logo",
    },
    {
      imgSrc: photo5,
      category: "Source Code",
      title: "Landing Page Bisnis",
      price: 30000,
      oldPrice: 60000,
      link: "https://wa.me/6282275373233?text=Halo,%20saya%20mau%20beli%20Landing%20Page%20Bisnis",
    },
    {
      imgSrc: photo6,
      category: "Source Code",
      title: "Sistem Booking Hotel",
      price: 40000,
      oldPrice: 80000,
      link: "https://wa.me/6282275373233?text=Halo,%20saya%20mau%20beli%20Sistem%20Booking%20Hotel",
    },
    {
      imgSrc: photo7,
      category: "E-Book",
      title: "Buku Motivasi Latahzan",
      price: 20000,
      oldPrice: 40000,
      link: "https://wa.me/6282275373233?text=Halo,%20saya%20mau%20beli%20Buku%20Motivasi%20Latahzan",
    },
    {
      imgSrc: photo8,
      category: "Source Code",
      title: "Website Portofolio",
      price: 18000,
      oldPrice: 36000,
      link: "https://wa.me/6282275373233?text=Halo,%20saya%20mau%20beli%20Website%20Portofolio",
    },
  ];

  return (
    <div>
      <div className="text-center p-10 font-normal">
        <h1 className="font-bold text-4xl mb-4">Produk Digital Kami</h1>
        <h1 className="text-3xl">CODIFYHUB</h1>
      </div>

      {/* Grid Produk */}
      <section
        id="Projects"
        className="w-fit mx-auto px-10 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        <AnimatePresence>
          {products
            .filter(
              (product) => activeCategory === "all" || product.category.toLowerCase() === activeCategory
            )
            .map((product, index) => (
              <BouncingCard key={index} {...product} />
            ))}
        </AnimatePresence>
      </section>
    </div>
  );
};

export default Produk;
