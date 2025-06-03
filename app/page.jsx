'use client'; // Menandai komponen ini sebagai Client Component untuk memungkinkan interaktivitas sisi klien

// Import React untuk menggunakan fitur-fitur React seperti komponen fungsional
import React from 'react';

// Komponen fungsional untuk halaman beranda
export default function HomePage() {
  return (
    // Kontainer utama yang mengisi seluruh tinggi layar dan memusatkan konten
    // Menggunakan gradien latar belakang dari biru ke ungu
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center p-4">
      {/* Kartu konten utama dengan latar belakang putih, padding, sudut membulat, dan bayangan */}
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full text-center">
        {/* Judul utama aplikasi dengan ukuran font besar, tebal, dan warna abu-abu gelap */}
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Selamat Datang di Aplikasi Reservasi Ruangan
        </h1>
        {/* Paragraf penjelasan dengan ukuran font sedang dan warna abu-abu */}
        <p className="text-lg text-gray-600 mb-8">
          Halo! Silakan masuk sebagai Admin atau Client untuk melanjutkan.
        </p>

        {/* Kontainer untuk tombol-tombol, menggunakan flexbox untuk tata letak responsif */}
        {/* Tombol akan bertumpuk di layar kecil dan berdampingan di layar yang lebih besar */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {/* Tombol untuk masuk sebagai Admin */}
          {/* Menggunakan warna biru, teks putih, sudut membulat, dan efek hover */}
          <button
            className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold
                       transition-all duration-300 ease-in-out transform hover:scale-105
                       hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            onClick={() => console.log('Admin Login clicked')} // Placeholder untuk fungsi login Admin
          >
            Masuk sebagai Admin
          </button>

          {/* Tombol untuk masuk sebagai Client */}
          {/* Menggunakan warna ungu, teks putih, sudut membulat, dan efek hover */}
          <button
            className="px-6 py-3 bg-purple-600 text-white rounded-full font-semibold
                       transition-all duration-300 ease-in-out transform hover:scale-105
                       hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            onClick={() => console.log('Client Login clicked')} // Placeholder untuk fungsi login Client
          >
            Masuk sebagai Client
          </button>
        </div>
      </div>
    </div>
  );
}
