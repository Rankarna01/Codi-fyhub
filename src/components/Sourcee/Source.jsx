import React from "react";
import photo1 from "../../assets/photo4.png";
import grid from "../../assets/1.png";
import shopping from "../../assets/shopping.png";
import { FaStar, FaGithub } from "react-icons/fa"; // Menggunakan react-icons

export default function Source() {
  const openSourceData = [
    {
      id: 1,
      title: "Website Manajemen Sekolah",
      description:
        "Website dengan tampilan Dashboard Admin dan Users. Fitur meliputi manajemen mahasiswa, data guru, mata pelajaran, absensi, dan informasi sekolah.",
      stars: "3,813",
      forks: "822",
      image: photo1,
      author: "Rendkrisna19",
      link: "https://github.com/Rendkrisna19/manajemen-sekolah",
    },
    {
      id: 2,
      title: "Template Grid Layout Tailwind CSS",
      description:
        "Tampilan layout modern menggunakan Tailwind CSS, cocok untuk grid foto produk Anda.",
      stars: "3,813",
      forks: "822",
      image: grid,
      author: "Rankarna10",
      link: "https://github.com/Rankarna01/grid-tailwind",
    },
    {
      id: 3,
      title: "Template Grid Layout Tailwind CSS",
      description:
        "Tampilan layout modern menggunakan Tailwind CSS, cocok untuk grid foto produk Anda.",
      stars: "3,813",
      forks: "822",
      image: shopping,
      author: "Rankarna10",
      link: "https://lynk.id/codifyhub/wajMPXb",
    },
    {
      id: 4,
      title: "Website Manajemen Sekolah",
      description:
        "Website dengan tampilan Dashboard Admin dan Users. Fitur meliputi manajemen mahasiswa, data guru, mata pelajaran, absensi, dan informasi sekolah.",
      stars: "3,813",
      forks: "822",
      image: photo1,
      author: "Rendkrisna19",
      link: "https://github.com/Rendkrisna19/manajemen-sekolah",
    },
    {
      id: 5,
      title: "Template Grid Layout Tailwind CSS",
      description:
        "Tampilan layout modern menggunakan Tailwind CSS, cocok untuk grid foto produk Anda.",
      stars: "3,813",
      forks: "822",
      image: grid,
      author: "Rankarna10",
      link: "https://github.com/Rankarna01/grid-tailwind",
    },
    {
      id: 6,
      title: "Template Grid Layout Tailwind CSS",
      description:
        "Tampilan layout modern menggunakan Tailwind CSS, cocok untuk grid foto produk Anda.",
      stars: "3,813",
      forks: "822",
      image: shopping,
      author: "Rankarna10",
      link: "https://lynk.id/codifyhub/wajMPXb",
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      {/* Judul Halaman */}
      <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">
        Semua Info Open Source
      </h1>
      <p className="text-base md:text-lg text-gray-300 mb-6 text-center">
        Temukan open source yang sesuai dengan kebutuhan Anda.
      </p>

      {/* Grid Card Open Source */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {openSourceData.map((item) => (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <div className="max-w-sm w-full bg-white text-black p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl mx-auto">
              {/* Gambar dengan efek hover */}
              <div className="overflow-hidden rounded-lg w-full h-48">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded transition-transform duration-300 hover:scale-110"
                />
              </div>

              {/* Detail */}
              <h2 className="text-lg font-bold mt-4 hover:text-blue-600">
                {item.title}
              </h2>
              <p className="text-gray-700 mt-2 text-sm">{item.description}</p>
              <p className="text-sm text-gray-500 mt-1">By {item.author}</p>

              {/* Stars & Forks */}
              <div className="flex justify-between items-center mt-3 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <FaGithub className="text-black" />
                  {item.stars}
                </span>
                <span className="flex items-center gap-1">
                  <FaStar className="text-yellow-500" />
                  {item.forks}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
