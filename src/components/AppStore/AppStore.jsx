import React, { useState } from "react";

// Import gambar-gambar secara eksplisit dari src/assets
import img1 from "../../assets/wesco.png";
import img2 from "../../assets/solaria.png";
import img3 from "../../assets/inventaris-kemang.png";
import img4 from "../../assets/bakolide.png";
import img5 from "../../assets/informasi-desa.png";
import img6 from "../../assets/latahzan-reborn.png";
import img7 from "../../assets/Pringsewu.png";
import img8 from "../../assets/tomoni.png";
import img9 from "../../assets/kapdssr.png";
import img10 from "../../assets/14.png";
import "../../global.css"; // Pastikan file global.css ada

// Data proyek yang lebih lengkap
const projectData = [
  {
    id: 1,
    img: img1,
    name: "Wesco | Sistem Pengelolaan Tanki Delivery Pertamina",
    description: "Wesco adalah sistem digital yang dirancang untuk memantau, mengelola, dan mengoptimalkan proses distribusi bahan bakar menggunakan armada tanki milik Pertamina. Sistem ini membantu memastikan pengiriman bahan bakar berjalan tepat waktu, akurat, dan aman sesuai standar operasional yang berlaku.",
    category: "website-dinamis",
    link: "#", // Ganti dengan link proyek sebenarnya
  },
  {
    id: 2,
    img: img2,
    name: "Company Profile Solaria Indonesia",
    description: "Portofolio online yang elegan dan responsif untuk desainer grafis, menonjolkan karya-karya terbaik.",
    category: "website-landing-page",
    link: "https://www.solariaresto.co.id/", // Ganti dengan link proyek sebenarnya
  },
  {
    id: 3,
    img: img3,
    name: "Sistem Inventaris Barang Kabupaten Kemang",
    description: "Website Sistem Inventaris Barang Kabupaten Kemang adalah sebuah sistem yang saya buat untuk membantu pemerintah daerah dalam mengelola inventaris barang. Sistem ini dirancang untuk memudahkan pencatatan, pengelolaan, dan pelaporan inventaris barang secara efisien. ",
    category: "website-dinamis",
    link: "https://kecamatankemangkabbogor.site/", // Ganti dengan link proyek sebenarnya
  },
  {
    id: 4,
    img: img4,
    name: "Sistem Informasi Bakoelide",
    description: "Website ini merupakan website yang saya buat waktu saya magang di PT DIGITAL KREATIF INDONESIA, sebuah perusahaan yang bergerak di bidang digital marketing. Website ini dirancang untuk memberikan informasi tentang layanan yang ditawarkan oleh PT agency, serta untuk mempromosikan produk dan layanan mereka kepada klien potensial.",
    category: "website-dinamis",
    link: "https://bakoelide.com/", // Ganti dengan link proyek sebenarnya
  },
  {
    id: 5,
    img: img5,
    name: "Sistem Informasi Desa Singgamanik",
    description: "Website Sistem Informasi Desa Singgamanik adalah sebuah sistem yang saya buat untuk membantu pemerintah desa dalam mengelola informasi dan layanan publik. Sistem ini dirancang untuk memudahkan warga desa dalam mengakses informasi terkait layanan publik, seperti administrasi kependudukan, kesehatan, pendidikan, dan lain-lain.",
    category: "website-dinamis",
    link: "#", // Ganti dengan link proyek sebenarnya
  },
  {
    id: 6,
    img: img6,
    name: "Website Latahzan Reborn",
    description: "Website Latahzan Reborn Adalah sebuah website yang saya buat untuk Team Basket Latahzan Reborn, sebuah tim basket yang berbasis di Medan. Website ini dirancang untuk memberikan informasi tentang tim, jadwal pertandingan, dan berita terkini seputar dunia basket. ",
    category: "website-landing-page",
    link: "https://latahzan-reborn.vercel.app/", // Ganti dengan link proyek sebenarnya
  },
  {
    id: 7,
    img: img7,
    name: "Website Pringsewu Tani Digital",
    description: "Website Pringsewu Tani Digital adalah sebuah website yang di buat untuk mempromosikan produk pertanian lokal di Kabupaten Pringsewu, Lampung. Website ini dirancang untuk memberikan informasi tentang produk pertanian, harga, dan cara pemesanan.",
    category: "website-landing-page",
    link: "https://pringsewu-tani-digital.vercel.app/", // Ganti dengan link proyek sebenarnya
  },
  {
    id: 8,
    img: img8,
    name: "Website Tomoni | Kursus Jepang",
    description: "Website Tomoni adalah platform kursus bahasa Jepang yang menyediakan berbagai materi pembelajaran, mulai dari dasar hingga tingkat lanjutan. Dirancang untuk membantu siswa belajar bahasa jepang pelatihan keahlian kerja dan pengiriman resmi magang ke Jepang.",
    category: "website-landing-page",
    link: "https://lpk-tomoni-medann.vercel.app/", // Ganti dengan link proyek sebenarnya
  },
  {
    id: 9,
    img: img9,
    name: "Website Kapdssr | Company Profile Jasa Akuntan Publik & Perpajakan",
    description: "Company Profile Kapdssr adalah website yang dirancang untuk memberikan informasi tentang jasa akuntan publik dan perpajakan yang ditawarkan oleh Kapdssr. Website ini menyediakan informasi tentang layanan, tim, dan kontak untuk memudahkan klien dalam mengakses layanan akuntansi dan perpajakan.",
    category: "website-landing-page",
    link: "https://kapdssr.com/", // Ganti dengan link proyek sebenarnya
  },
  // {
  //   id: 10,
  //   img: img10,
  //   name: "Sistem CRM Pelanggan",
  //   description: "Aplikasi Customer Relationship Management untuk melacak interaksi dan data pelanggan secara terpusat.",
  //   category: "website-dinamis",
  //   link: "#", // Ganti dengan link proyek sebenarnya
  // },
];

const ProjectGallery = () => { // Mengganti nama komponen dari Gallery menjadi ProjectGallery
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all'); // State untuk filtering

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  // Logika filtering proyek
  const filteredProjects = activeCategory === 'all'
    ? projectData
    : projectData.filter(project => project.category === activeCategory);

  return (
    <>
      <div className="bg-gray-950 dark:bg-gray-950 text-white py-16 font-normal">
        <div className="container mx-auto px-4">
          {/* Judul Bagian */}
          <div className="text-center mb-12">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-editprimary to-editsecondary font-bold uppercase tracking-wider">
              Galeri Proyek Kami
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 mt-2">
              Projek Projek Terbaru Kami
            </h1>
            <p className="text-base text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Jelajahi berbagai proyek website yang telah kami kembangkan, mulai dari landing page, sistem dinamis, hingga toko online.
            </p>
          </div>

          {/* Tombol Filtering */}
          <div className="flex justify-center flex-wrap gap-4 mb-12">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === 'all' ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-700 text-gray-300 hover:bg-blue-500 hover:text-white'
              }`}
            >
              Semua Proyek
            </button>
            <button
              onClick={() => setActiveCategory('website-landing-page')}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === 'website-landing-page' ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-700 text-gray-300 hover:bg-blue-500 hover:text-white'
              }`}
            >
              Website Landing Page
            </button>
            <button
              onClick={() => setActiveCategory('website-dinamis')}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === 'website-dinamis' ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-700 text-gray-300 hover:bg-blue-500 hover:text-white'
              }`}
            >
              Website Dinamis/Sistem
            </button>
            <button
              onClick={() => setActiveCategory('website-ecommerce')}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === 'website-ecommerce' ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-700 text-gray-300 hover:bg-blue-500 hover:text-white'
              }`}
            >
              Website E-commerce/Toko
            </button>
          </div>

          {/* Grid Proyek */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="relative group overflow-hidden rounded-lg bg-gray-800 dark:bg-gray-900 border border-gray-700 shadow-lg cursor-pointer transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                >
                  <img
                    src={project.img}
                    alt={project.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    onClick={() => handleImageClick(project.img)} // Klik gambar untuk modal
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors duration-300"
                      >
                        Kunjungi Proyek
                      </a>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center text-gray-400 text-lg">
                Tidak ada proyek dalam kategori ini.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal untuk Zoom Out */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div className="relative">
            <img
              src={selectedImage}
              alt="Selected Project"
              className="max-w-full max-h-[90vh] rounded-lg shadow-lg"
            />
            <button
              className="absolute top-2 right-2 text-white text-2xl bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-700 transition-colors"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectGallery; // Mengganti nama export
