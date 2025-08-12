import React from "react";
import Img2 from "../../assets/landing-page.png"; // Placeholder image - pertimbangkan mengganti dengan ikon/gambar relevan
import Img3 from "../../assets/dinamis.png"; // Placeholder image - pertimbangkan mengganti dengan ikon/gambar relevan
import Img4 from "../../assets/ecommerce.png"; // Placeholder image - pertimbangkan mengganti dengan ikon/gambar relevan
import "../../global.css"; // Pastikan file global.css ada dan berisi definisi warna kustom seperti editprimary dan editsecondary

const ServicesData = [
  {
    id: 1,
    img: Img2, // Gunakan gambar placeholder yang ada, bisa diganti dengan ikon/gambar yang lebih relevan
    name: "Website Landing Page",
    description:
      "Website satu halaman yang fokus mengkonversi pengunjung menjadi pelanggan potensial. Dirancang dengan desain menarik dan Call-to-Action (CTA) yang kuat, sangat ideal untuk kampanye pemasaran, peluncuran produk, atau pengumpulan leads yang efektif.",
  },
  {
    id: 2,
    img: Img3, // Gunakan gambar placeholder yang ada, bisa diganti dengan ikon/gambar yang lebih relevan
    name: "Website Dinamis / Sistem",
    description:
      "Solusi website interaktif dan berbasis database yang memungkinkan pengelolaan konten kompleks (CMS), akun pengguna, dan integrasi fitur kustom (misal: booking, pendaftaran). Ideal untuk kebutuhan bisnis, pendidikan, atau komunitas yang terus berkembang.",
  },
  {
    id: 3,
    img: Img4, // Gunakan gambar placeholder yang ada, bisa diganti dengan ikon/gambar yang lebih relevan
    name: "Website E-commerce / Toko Online",
    description:
      "Platform toko online lengkap yang memfasilitasi penjualan produk secara digital dengan mudah. Dilengkapi fitur manajemen katalog, keranjang belanja, berbagai opsi pembayaran, dan sistem pengiriman untuk pengalaman belanja yang mulus bagi pelanggan Anda.",
  },
];

const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-16 font-normal bg-gray-950 text-white"> {/* Tambahkan warna background untuk tema gelap */}
        <div className="container mx-auto">
          {/* Judul Bagian Layanan */}
          <div className="text-center mb-16 max-w-[600px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-editprimary to-editsecondary font-bold uppercase tracking-wider">
              Layanan Kami
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 mt-2">
              Wujudkan Impian Digital Anda
            </h1>
            <p className="text-base text-gray-400 leading-relaxed">
              Kami menawarkan berbagai layanan pengembangan website profesional untuk membantu bisnis Anda berkembang di dunia digital.
            </p>
          </div>

          {/* Grid Layanan */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8 place-items-center">
            {ServicesData.map((service) => (
              <div
                key={service.id}
                data-aos="zoom-in"
                data-aos-duration="300"
                className="relative rounded-3xl bg-gray-800 dark:bg-gray-900 border border-gray-700 shadow-xl duration-high group max-w-[320px] transform hover:-translate-y-3 hover:shadow-2xl transition-all"
              >
                {/* Bagian Gambar/Ikon */}
                <div className="h-[120px] flex justify-center items-center -mt-10"> {/* Sesuaikan margin-top jika gambar terlalu tinggi */}
                  <img
                    src={service.img}
                    alt={service.name}
                    className="max-w-[200px] w-full block mx-auto object-contain
                    group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>

                {/* Bagian Konten Teks */}
                <div className="p-6 text-center">
                  <h1 className="text-xl font-bold mb-3 group-hover:text-white">
                    {service.name}
                  </h1>
                  <p className="text-gray-400 group-hover:text-white duration-high text-sm line-clamp-4">
                    {service.description}
                  </p>
                </div>

                {/* Efek Hover tambahan */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-editprimary to-editsecondary -z-10"></div>
                <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-editsecondary transition-colors duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
