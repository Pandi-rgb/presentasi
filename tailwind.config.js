/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html",
    "./assets/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        saffron: "#FF9933",
        gold: "#FFD700",
        hinduRed: "#CC0000",
        lotusPink: "#FF69B4",
        cadangan1: "oklch(74.6% 0.16 232.661)",
        cadangan2: "oklch(82.8% 0.111 230.318)",
        cadangan3: "oklch(90.1% 0.058 230.902)",
      },
      fontFamily: {
        hindu: ["Baloo Bhai 2", "cursive"],
        cartoon: ["Comic Neue", "cursive"],
      },
      animation: {
        "bounce-slow": "bounce 2s infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        glow: {
          "0%": { boxShadow: "0 0 5px #FFD700" },
          "100%": { boxShadow: "0 0 20px #FFD700, 0 0 30px #FF9933" },
        },
      },
    },
  },
  plugins: [],
};

// tailwind.config = {
//   theme: {
//     extend: {
//       colors: {
//         saffron: "#FF9933",
//         gold: "#FFD700",
//         hinduRed: "#CC0000",
//         lotusPink: "#FF69B4",
//       },
//       fontFamily: {
//         hindu: ["Baloo Bhai 2", "cursive"],
//         cartoon: ["Comic Neue", "cursive"],
//       },
//       animation: {
//         "bounce-slow": "bounce 2s infinite",
//         glow: "glow 2s ease-in-out infinite alternate",
//       },
//       keyframes: {
//         glow: {
//           "0%": { boxShadow: "0 0 5px #FFD700" },
//           "100%": { boxShadow: "0 0 20px #FFD700, 0 0 30px #FF9933" },
//         },
//       },
//     },
//   },
// };
