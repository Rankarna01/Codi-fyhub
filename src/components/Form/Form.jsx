// src/components/CtaIklanPesan.jsx
import React from "react";
import { motion } from "framer-motion";

/**
 * Komponen CTA iklan "Pesan Sekarang" untuk CODIFYHUB
 * - Dominan biru tua
 * - Animasi glow, shine, dan hover 3D
 * - Link ke Google Form (buka tab baru)
 *
 * Pakai: <CtaIklanPesan googleFormUrl="https://forms.gle/xxxxx" />
 */
const CtaIklanPesan = ({ googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfbeN6TBZW0R-uBldoaxavgIu40CQVFY05ghMqAVA5Lpos3fA/viewform?usp=dialog" }) => {
  const openForm = () => window.open(googleFormUrl, "_blank", "noopener,noreferrer");

  return (
    <section className="relative overflow-hidden">
      {/* BG gradient + glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#12306b] via-[#0b1f45] to-[#070f26]" />
      <div className="absolute -top-40 -left-20 h-96 w-96 rounded-full blur-3xl opacity-30 bg-blue-700" />
      <div className="absolute -bottom-32 -right-16 h-80 w-80 rounded-full blur-3xl opacity-25 bg-indigo-700" />

      {/* Partikel halus */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-10 h-1 w-1 animate-pulse rounded-full bg-blue-300/60" />
        <div className="absolute left-1/3 top-1/2 h-1 w-1 animate-pulse rounded-full bg-cyan-300/60" />
        <div className="absolute right-24 top-16 h-1 w-1 animate-pulse rounded-full bg-sky-300/60" />
        <div className="absolute right-1/4 bottom-10 h-1 w-1 animate-pulse rounded-full bg-blue-300/60" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-5xl px-4 py-20 text-center text-white"
      >
        <p className="mb-3 text-sm font-semibold tracking-widest text-blue-300">
          LAYANAN KAMI
        </p>

        <h1 className="mx-auto mb-4 max-w-3xl text-4xl font-extrabold leading-tight md:text-5xl">
          Wujudkan Impian Digital Anda
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-[15px] text-blue-100/90">
          Solusi pembuatan <span className="font-semibold text-white">Website & Aplikasi</span> untuk bisnis Anda:
          <span className="mx-2 rounded-full bg-white/10 px-2 py-0.5 text-white">Landing Page</span>
          <span className="mx-1 rounded-full bg-white/10 px-2 py-0.5 text-white">Website Dinamis</span>
          <span className="mx-1 rounded-full bg-white/10 px-2 py-0.5 text-white">E-commerce</span>.
          Klik tombol di bawah untuk memesan sekarang.
        </p>

        {/* Kartu fitur mini */}
        <div className="mx-auto mb-8 grid max-w-3xl grid-cols-1 gap-3 px-4 sm:grid-cols-3">
          {[
            "Desain modern & responsive",
            "Integrasi Payment/WA/Analytics",
            "Garansi & support ramah",
          ].map((t, i) => (
            <motion.div
              key={t}
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-blue-100 shadow-[0_8px_35px_rgba(0,0,0,0.25)] backdrop-blur"
            >
              {t}
            </motion.div>
          ))}
        </div>

        {/* Tombol CTA */}
        <motion.button
          whileHover={{ scale: 1.04, rotate: -0.5 }}
          whileTap={{ scale: 0.98 }}
          onClick={openForm}
          className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-4 font-bold text-white"
          style={{
            background:
              "linear-gradient(135deg, rgba(30,64,175,1) 0%, rgba(29,78,216,1) 40%, rgba(59,130,246,1) 100%)",
            boxShadow:
              "0 10px 30px rgba(59,130,246,0.35), inset 0 -2px 8px rgba(255,255,255,0.15)",
          }}
          aria-label="Pesan sekarang di Google Form"
        >
          {/* Shine */}
          <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[120%]" />

          {/* Ring animasi */}
          <span className="absolute -inset-px rounded-full ring-2 ring-white/10 group-hover:ring-white/25" />
          <span className="mr-2 inline-flex h-2 w-2 animate-ping rounded-full bg-white/80" />
          Pesan Sekarang
          <svg
            className="ml-3 h-4 w-4 opacity-90 transition-transform group-hover:translate-x-0.5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
          </svg>
        </motion.button>

        {/* Subcopy kecil */}
        <p className="mt-4 text-xs text-blue-200/80">
          Balasan cepat di jam kerja. Form terbuka di tab baru.
        </p>
      </motion.div>
    </section>
  );
};

export default CtaIklanPesan;
   