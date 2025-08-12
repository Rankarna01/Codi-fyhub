// src/Pricing.jsx
import React from 'react';

// Data untuk setiap paket pricing
const pricingPlans = [
  {
    title: 'PAKET LANDING PAGE',
    price: 'RP 650.000',
    details: 'Cocok untuk: usaha kecil/menengah, personal branding, promosi event, freelancer, company profile sederhana.',
    features: [
      'Landing page maks 4 Menu',
      'Gratis Domain .my.id, .web.id',
      'Desain responsif Dan Modern',
      'Gratis Desain Banner',
      'Website Bergaransi selamanya',
      'Formulir kontak (Contact Form / WhatsApp button)',
      'Peta lokasi Google Maps',
      'Integrasi media sosial',
    ],
    headerColor: 'from-blue-600 to-indigo-800',
  },
  {
    title: 'PAKET DINAMIS / SISTEM',
    price: 'Mulai RP 1.500.000',
    details: 'Cocok untuk: Perusahaan, lembaga pendidikan, organisasi, portal berita, website komunitas.',
    features: [
      'Panel admin (CMS) untuk kelola konten',
      'Multi-halaman (Tentang Kami, Layanan, Blog, Galeri, Kontak, dll.)',
      'Sistem login & manajemen pengguna',
      'Formulir interaktif (pendaftaran, booking, request penawaran)',
      'Maksimal 3 x revisi',
      'Free Domain .my.id, .store, .dll',
    ],
    headerColor: 'from-blue-600 to-indigo-800',
  },
  {
    title: 'PAKET E-COMMERCE / TOKO ONLINE',
    price: 'RP 2.500.000',
    details: 'Cocok untuk: UMKM, brand fashion, toko elektronik, produk digital.',
    features: [
      'Katalog produk lengkap (foto, harga, deskripsi)',
      'Keranjang belanja',
      'Sistem pembayaran (transfer bank, e-wallet, payment gateway)',
      'Manajemen stok & pesanan',
      'Dashboard admin untuk kelola produk dan pesanan',
      'Pengaturan ongkos kirim (integrasi dengan jasa kurir)',
      'Include fitur Landing page dan dinamis',
    ],
    headerColor: 'from-blue-600 to-indigo-800',
  },
];

// Komponen PricingCard
const PricingCard = ({ plan }) => {
  return (
    <div className="flex flex-col w-full max-w-sm bg-blue-900 rounded-3xl shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
      {/* Header dengan background gradient */}
      <div className={`p-8 text-center rounded-t-3xl bg-gradient-to-r ${plan.headerColor}`}>
        <h3 className="text-xl font-bold uppercase text-white">{plan.title}</h3>
        <p className="mt-2 text-3xl font-extrabold text-white">{plan.price}</p>
        <p className="mt-2 text-xs italic text-gray-200">{plan.details}</p>
      </div>

      {/* Bagian isi dengan daftar fitur */}
      <div className="p-8 flex-grow">
        <ul className="space-y-4 text-gray-300">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start space-x-2">
              <svg
                className="h-5 w-5 mt-1 text-white flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer dengan tombol */}
      <div className="p-8 text-center border-t border-blue-800">
        <button className="w-full bg-white text-blue-900 font-bold py-3 px-8 rounded-full shadow-md transition-colors hover:bg-gray-200">
          ORDER NOW
        </button>
      </div>
    </div>
  );
};

// Komponen utama yang merender semua kartu
const Pricing = () => {
  return (
    <div className="bg-gray-900 py-16 px-8">
      <div className="container mx-auto">
        {/* Tambahan judul di sini */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white">
            Pilihan Paket Lengkap Layanan Kami
          </h2>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;