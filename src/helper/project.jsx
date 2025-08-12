import React from "react";
// Import gambar-gambar secara eksplisit dari src/assets
import img1 from "../assets/1.png";
import img2 from "../assets/photo2.png";
import img3 from "../assets/photo3.png";
import img4 from "../assets/photo4.png";
import img5 from "../assets/photo5.png";
import img6 from "../assets/shopping.png";
import img7 from "../assets/12.png";
import img8 from "../assets/13.png";
import img9 from "../assets/photo9.png";
import img10 from "../assets/14.png";
// List gambar
const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const GalleryAutoScroll = () => {
  return (
    <div className="relative w-full overflow-hidden  py-6">
      <div className="flex gap-6 animate-scroll">
        {/* Duplikat gambar supaya looping terasa mulus */}
        {[...images, ...images].map((image, index) => (
          <div key={index} className="w-[250px] h-[180px] flex-shrink-0">
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover rounded-lg shadow-sm shadow-blue-600"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryAutoScroll;
