import React from "react";
import Vector from "../../assets/vector3.png";
import "../../global.css"; // Pastikan file global.css ada

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-950 dark:text-white duration-200 font-normal overflow-hidden">
      {/* Background Falling Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="falling-star"
            style={{
              left: `${Math.random() * 100}vw`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 lg:gap-16">
          {/* Text Content Section */}
          <div
            data-aos="zoom-out"
            data-aos-duration="400"
            data-aos-once="true"
            className="flex flex-col gap-6 text-center md:text-left"
          >
            <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              Wujudkan Website Impian Anda, Bersama{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-editprimary to-editsecondary">
                C0DIFY
              </span>{" "}
              HUB
            </h1>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-lg mx-auto md:mx-0">
              Kami menyediakan jasa pembuatan logo, desain website, dan pembuatan website custom. 
              Dapatkan solusi digital kreatif yang mengoptimalkan identitas dan fungsionalitas online Anda!
            </p>
            <button
              onClick={scrollToServices}
              className="bg-gradient-to-r from-editprimary to-editsecondary hover:scale-105 duration-200 text-white py-2 px-6 rounded-full self-center md:self-start"
            >
              Produk Kami
            </button>
          </div>

          {/* Image Section */}
          <div
            className="flex justify-center items-center"
            data-aos="zoom-in"
            data-aos-duration="300"
            data-aos-once="true"
          >
            <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full">
              <img
                src={Vector}
                alt="vector img"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
