import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import img1 from "../../assets/1.png";
import img2 from "../../assets/photo2.png";
import img3 from "../../assets/photo3.png";
import img4 from "../../assets/photo4.png";
import img5 from "../../assets/photo5.png";

const images = [img1, img2, img3, img4, img5];

const whatsappLink = (type) => {
  const message = encodeURIComponent(`Halo, saya ingin membuat ${type}. Bisa dibantu?`);
  return `https://wa.me/6282275373233?text=${message}`;
};

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 200) {
        setIsVisible(true);
        controls.start({ y: 0, opacity: 1 });
      } else {
        setIsVisible(false);
        controls.start({ y: -100, opacity: 0 });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <motion.div
      className="w-full h-screen flex flex-col justify-center items-center bg-black text-white text-center px-6 text-normal"
      initial={{ opacity: 0, y: -100 }}
      animate={controls}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1 className="text-4xl md:text-5xl font-bold">Raih Kesuksesan  <span className="text-blue-600">dengan Website </span> Berkelas</h1>
      <p className="mt-4 text-lg max-w-2xl">
        Website yang dirancang dengan hati, dikembangkan dengan keahlian, dan dioptimalkan untuk pengalaman pengguna yang luar biasa.
      </p>
      <a href={whatsappLink("Landing Page")} className="mt-4 bg-blue-500 hover:bg-blue-900 text-white px-6 py-3 rounded-lg inline-block">
            Buat Website mu sekarang!
          </a>
      <div className="mt-8 flex gap-4 overflow-hidden">
        {images.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`Gallery ${index}`}
            className="w-48 h-32 object-cover rounded-lg shadow-md"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default HeroSection;
