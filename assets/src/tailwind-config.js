// Konfigurasi Tailwind bersama untuk semua halaman.
// File ini harus dimuat sebelum CDN Tailwind di setiap HTML.
window.tailwind = window.tailwind || {};
window.tailwind.config = {
  theme: {
    extend: {
      colors: {
        saffron: "#FF9933",
        gold: "#FFD700",
        hinduRed: "#CC0000",
        lotusPink: "#FF69B4",
      },
      fontFamily: {
        hindu: ["Baloo Bhai 2", "cursive"],
        cartoon: ["Comic Neue", "cursive"],
      },
    },
  },
};
