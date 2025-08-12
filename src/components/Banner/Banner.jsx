import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import ImgWebsiteLandingPage from "../../assets/landing-page.png"; // Placeholder image - sesuaikan dengan gambar yang relevan
import ImgWebsiteDinamis from "../../assets/dinamis.png"; // Placeholder image - sesuaikan dengan gambar yang relevan
import ImgWebsiteEcommerce from "../../assets/ecommerce.png"; // Placeholder image - sesuaikan dengan gambar yang relevan
import { MdComputer } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { AiOutlineHighlight } from "react-icons/ai";
import "../../global.css";

// AboutSection kini akan didefinisikan di dalam Banner agar bisa mengakses useNavigate
const Banner = () => {
  const navigate = useNavigate(); // Inisialisasi useNavigate

  // Komponen AboutSection dipindahkan ke dalam Banner agar dapat menggunakan navigate
  const AboutSection = ({ title, description1, image }) => (
    <div className="flex flex-col md:flex-row items-center gap-6 my-12 font-normal">
      {/* Gambar di kiri dengan efek hover */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="relative group">
          <img
            src={image}
            alt="Service Image"
            className="max-w-[300px] w-full rounded-lg shadow-xl shadow-blue-700 transform transition-transform duration-300 group-hover:scale-105 group-hover:rotate-1"
          />
          <div className="absolute inset-0 rounded-lg shadow-lg group-hover:shadow-xl group-hover:shadow-blue-500/50 transition-all duration-300"></div>
        </div>
      </div>

      {/* Teks di kanan */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl font-bold" dangerouslySetInnerHTML={{ __html: title }} />

        <p className="text-sm text-gray-500 tracking-wide leading-5 my-4">{description1}</p>

        {/* Ikon */}
        <div className="flex gap-4 justify-center md:justify-start mt-6">
          <div className="p-4 rounded-full bg-purple-100 text-purple-500">
            <MdComputer size={24} />
          </div>
          <div className="p-4 rounded-full bg-orange-100 text-orange-500">
            <BiWorld size={24} />
          </div>
          <div className="p-4 rounded-full bg-green-100 text-green-500">
            <AiOutlineHighlight size={24} />
          </div>
        </div>

        {/* Tombol Order Now yang mengarah ke form */}
        {/* <button
          className="mt-6 px-6 py-3 bg-blue-700 text-white rounded-lg shadow-lg hover:bg-blue-900 transition duration-300"
          onClick={() => navigate('Form')} // Mengarahkan ke rute /contact
        >
          Order Now
        </button> */}
      </div>
    </div>
  );

  const sections = [
    {
      title: `Layanan <span class="text-yellow-300">Website Landing Page</span>.`,
      description1:
        "Kami merancang website satu halaman yang fokus pada konversi, dengan desain menawan dan Call-to-Action (CTA) yang kuat. Sempurna untuk kampanye pemasaran, peluncuran produk baru, atau pengumpulan data leads yang efektif.",
      image: ImgWebsiteLandingPage,
    },
    {
      title: `Layanan <span class="text-blue-600">Website Dinamis / Sistem</span>.`,
      description1:
        "Kami menyediakan solusi website interaktif dan berbasis database. Kelola konten dengan mudah (CMS), sistem akun pengguna, dan integrasikan fitur kustom seperti pendaftaran atau booking. Ideal untuk bisnis, pendidikan, atau komunitas yang dinamis.",
      image: ImgWebsiteDinamis,
    },
    {
      title: `Layanan <span class="text-indigo-600">Website E-commerce / Toko Online</span>.`,
      description1:
        "Platform toko online lengkap yang mempermudah Anda menjual produk secara digital. Dilengkapi fitur manajemen katalog, keranjang belanja, berbagai opsi pembayaran, dan sistem pengiriman untuk pengalaman belanja online yang nyaman bagi pelanggan Anda.",
      image: ImgWebsiteEcommerce,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {sections.map((section, index) => (
        <AboutSection key={index} {...section} />
      ))}
    </div>
  );
};

export default Banner;
