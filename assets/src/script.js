/*
  File ini berisi JavaScript bersama untuk semua halaman.
  HTML cukup memberi class halaman, misalnya "page-smp-quiz",
  lalu script ini akan menyalakan fitur yang sesuai.
*/

// Data quiz SD dan SMP memakai daftar soal yang sama.
// q = pertanyaan, a = pilihan jawaban, c = index jawaban benar.
const sharedDewataQuestions = [
  {
    q: "1. 🌞 Apa pusat tata surya?",
    a: ["Bulan", "Matahari"],
    c: 1,
  },
  {
    q: "2. 🪐 Planet bercincin terkenal adalah...",
    a: ["Saturnus", "Merkurius"],
    c: 0,
  },
  {
    q: "3. 🌱 Menanam pohon membantu menjaga...",
    a: ["Lingkungan", "Mainan"],
    c: 0,
  },
  {
    q: "4. 💧 Kita harus menggunakan air dengan...",
    a: ["Boros", "Hemat"],
    c: 1,
  },
  {
    q: "5. 🗑️ Sampah sebaiknya dibuang ke...",
    a: ["Sungai", "Tempat sampah"],
    c: 1,
  },
  // {
  //   q: "6. Ini adalah arah barat laut, dewa siapakah di barat laut?",
  //   a: ["Dewa sangkara", "Dewa iswara"],
  //   c: 0,
  // },
  // {
  //   q: "7. Ini adalah arah utara, dewa siapakah di utara?",
  //   a: ["Dewa brahma", "Dewa wisnu"],
  //   c: 1,
  // },
  // {
  //   q: "8. Ini adalah arah timur laut, dewa siapakah di timur laut?",
  //   a: ["Dewa sambhu", "Dewa maheswara"],
  //   c: 0,
  // },
  // {
  //   q: "9. Ini adalah tengah, dewa siapakah di tengah?",
  //   a: ["Dewa brahma", "Dewa siwa"],
  //   c: 1,
  // },
  // {
  //   q: "10. Ini adalah dewa iswara, apakah warnanya?",
  //   a: ["Merah", "Putih"],
  //   c: 1,
  // },
  // {
  //   q: "11. Ini adalah dewa maheswara, apakah warnanya?",
  //   a: ["Merah Muda", "Kuning"],
  //   c: 0,
  // },
  // {
  //   q: "12. Ini adalah dewa brahma, apakah warnanya?",
  //   a: ["Merah", "Hitam"],
  //   c: 0,
  // },
  // {
  //   q: "13. Ini adalah dewa rudra, apakah warnanya?",
  //   a: ["Putih", "Jingga"],
  //   c: 1,
  // },
  // {
  //   q: "14. Ini adalah dewa mahadewa, apakah warnanya?",
  //   a: ["Kuning", "Abu-Abu"],
  //   c: 0,
  // },
  // {
  //   q: "15. Ini adalah dewa sangkara, apakah warnanya?",
  //   a: ["Hijau", "Kuning"],
  //   c: 0,
  // },
  // {
  //   q: "16. Ini adalah dewa wisnu, apakah warnanya?",
  //   a: ["Hitam", "Putih"],
  //   c: 0,
  // },
  // {
  //   q: "17. Ini adalah dewa sambhu, apakah warnanya?",
  //   a: ["Abu-Abu", "Merah Muda"],
  //   c: 0,
  // },
  // {
  //   q: "18. Ini adalah dewa siwa, apakah warnanya?",
  //   a: ["Warna-Warni", "Merah"],
  //   c: 0,
  // },
];

const quizPages = {
  "page-sd-quiz": {
    questions: sharedDewataQuestions,
    color: "blue",
    button: "from-blue-500 to-blue-400",
    threshold: 4,
    goodTitle: "Pintar sekali!",
    badTitle: "Tetap semangat!",
  },
  // "page-smp-quiz": {
  //   questions: sharedDewataQuestions,
  //   color: "purple",
  //   button: "from-purple-500 to-purple-400",
  //   threshold: 4,
  //   goodTitle: "Pemahamanmu bagus!",
  //   badTitle: "Ayo ulangi materi!",
  // },
  "page-smp-quiz": {
    questions: [
      {
        q: "1. 🌞 Cahaya matahari termasuk komponen...",
        a: ["Biotik", "Abiotik"],
        c: 1,
      },
      {
        q: "2. 🌱 Tumbuhan membutuhkan air untuk...",
        a: ["Hidup", "Bermain"],
        c: 0,
      },
      {
        q: "3. 🗑️ Membuang sampah sembarangan dapat menyebabkan...",
        a: ["Lingkungan bersih", "Pencemaran"],
        c: 1,
      },
      {
        q: "4. 🌍 Ekosistem adalah hubungan antara...",
        a: ["Makhluk hidup dan lingkungannya", "Kendaraan dan jalan"],
        c: 0,
      },
      {
        q: "5. 💧 Menghemat air membantu menjaga...",
        a: ["Lingkungan", "Kemacetan"],
        c: 0,
      },
    ],
    // questions: sharedDewataQuestions,
    color: "purple",
    button: "from-purple-500 to-purple-400",
    threshold: 4,
    goodTitle: "Pemahamanmu bagus!",
    badTitle: "Ayo ulangi materi!",
  },
  "page-sma-quiz": {
    questions: [
      {
        q: "1. 💻 AI merupakan singkatan dari...",
        a: ["Artificial Intelligence", "Automatic Internet"],
        c: 0,
      },
      {
        q: "2. 🔒 Password yang baik sebaiknya...",
        a: ["Mudah ditebak", "Kombinasi huruf, angka, dan simbol"],
        c: 1,
      },
      {
        q: "3. 🌐 Internet dapat memberikan dampak...",
        a: ["Positif dan negatif", "Negatif saja"],
        c: 0,
      },
      {
        q: "4. 📱 Data pribadi harus dijaga agar tidak...",
        a: ["Disalahgunakan", "Dipelajari"],
        c: 0,
      },
      {
        q: "5. ⚠️ Link mencurigakan sebaiknya...",
        a: ["Langsung dibuka", "Dihindari"],
        c: 1,
      },
      // {
      //   q: "6. Ini adalah dewa Sangkara, apakah senjatanya?",
      //   a: ["Angkus", "Cakra"],
      //   c: 0,
      // },
      // {
      //   q: "7. Ini adalah dewa Wisnu, apakah senjatanya?",
      //   a: ["Cakra", "Padma"],
      //   c: 0,
      // },
      // {
      //   q: "8. Ini adalah dewa Sambhu, apakah senjatanya?",
      //   a: ["Trisula", "Cakra"],
      //   c: 0,
      // },
      // {
      //   q: "9. Ini adalah dewa Siwa, apakah senjatanya?",
      //   a: ["Padma", "Gada"],
      //   c: 0,
      // },
      // {
      //   q: "10. Ini adalah arah timur, dewa siapakah di timur?",
      //   a: ["Dewa Brahma", "Dewa Iswara"],
      //   c: 1,
      // },
      // {
      //   q: "11. Ini adalah arah tenggara, dewa siapakah di tenggara?",
      //   a: ["Dewa Maheswara", "Dewa Wisnu"],
      //   c: 0,
      // },
      // {
      //   q: "12. Ini adalah arah selatan, dewa siapakah di selatan?",
      //   a: ["Dewa Wisnu", "Dewa Brahma"],
      //   c: 1,
      // },
      // {
      //   q: "13. Ini adalah arah barat daya, dewa siapakah di barat daya?",
      //   a: ["Dewa Mahadewa", "Dewa Rudra"],
      //   c: 1,
      // },
      // {
      //   q: "14. Ini adalah arah barat, dewa siapakah di barat?",
      //   a: ["Dewa Siwa", "Dewa Mahadewa"],
      //   c: 1,
      // },
      // {
      //   q: "15. Ini adalah arah barat laut, dewa siapakah di barat laut?",
      //   a: ["Dewa Sangkara", "Dewa Iswara"],
      //   c: 0,
      // },
      // {
      //   q: "16. Ini adalah arah utara, dewa siapakah di utara?",
      //   a: ["Dewa Brahma", "Dewa Wisnu"],
      //   c: 1,
      // },
      // {
      //   q: "17. Ini adalah arah timur laut, dewa siapakah di timur laut?",
      //   a: ["Dewa Sambhu", "Dewa Maheswara"],
      //   c: 0,
      // },
      // {
      //   q: "18. Ini adalah tengah, dewa siapakah di tengah?",
      //   a: ["Dewa Brahma", "Dewa Siwa"],
      //   c: 1,
      // },
      // {
      //   q: "19. Ini adalah dewa Iswara, apakah warnanya?",
      //   a: ["Merah", "Putih"],
      //   c: 1,
      // },
      // {
      //   q: "20. Ini adalah dewa Maheswara, apakah warnanya?",
      //   a: ["Merah Muda", "Kuning"],
      //   c: 0,
      // },
      // {
      //   q: "21. Ini adalah dewa Brahma, apakah warnanya?",
      //   a: ["Merah", "Hitam"],
      //   c: 0,
      // },
      // {
      //   q: "22. Ini adalah dewa Rudra, apakah warnanya?",
      //   a: ["Putih", "Jingga"],
      //   c: 1,
      // },
      // {
      //   q: "23. Ini adalah dewa Mahadewa, apakah warnanya?",
      //   a: ["Kuning", "Abu-Abu"],
      //   c: 0,
      // },
      // {
      //   q: "24. Ini adalah dewa Sangkara, apakah warnanya?",
      //   a: ["Hijau", "Kuning"],
      //   c: 0,
      // },
      // {
      //   q: "25. Ini adalah dewa Wisnu, apakah warnanya?",
      //   a: ["Hitam", "Putih"],
      //   c: 0,
      // },
      // {
      //   q: "26. Ini adalah dewa Sambhu, apakah warnanya?",
      //   a: ["Abu-Abu", "Merah Muda"],
      //   c: 0,
      // },
      // {
      //   q: "27. Ini adalah dewa Siwa, apakah warnanya?",
      //   a: ["Warna-Warni", "Merah"],
      //   c: 0,
      // },
    ],
    color: "orange",
    button: "from-orange-500 to-orange-400",
    threshold: 4, //minimal score
    goodTitle: "Pemahamanmu kuat!",
    badTitle: "Mari baca materi lagi!",
  },
};

// Quiz TK masih ditulis langsung di HTML, jadi di sini cukup kunci jawabannya.
const tkQuizAnswers = {
  q1: "a",
  q2: "b",
  q3: "a",
  q4: "a",
  q5: "a",
  // q6: "a",
  // q7: "a",
  // q8: "a",
  // q9: "a",
};

// Evaluasi TK memakai kata kunci. Semakin banyak kata kunci cocok,
// semakin tinggi skor yang diberikan.
const tkEvaluationKey = {
  q1: {
    keywords: [
      "Kucing",
      "Ayam",
      "Ikan",
      "Bebek",
      "Kuda",
      "Sapi",
      "Cerah",
      "Hujan",
      "Mendung"
    ],
    points: 9,
  },
  // q2: {
  //   keywords: [
  //     ["satu", 1, "one", "sake"],
  //     ["dua", 2, "two", "due"],
  //     ["tiga", 3, "three", "telu"],
  //     ["empat", 4, "four"],
  //     ["lima", 5, "five", "lime"],
  //     ["enam", 6, "six", "enem"],
  //     ["tujuh", 7, "seven", "pitu", "pituq"],
  //     ["delapan", 8, "eight", "baluq"],
  //     ["sembilan", 9, "nine", "siwaq"],
  //   ],
  //   points: 6,
  // },
};

const smaEvaluationKey = {
  q1: {
    keywords: [
     "Menggunakan password yang kuat", "Menggunakan sandi yang kuat"
    ],
    points: 100,
  },
  // q2: {
  //   keywords: [
  //     ["putih", "kesucian", "kejujuran", "jujur"],
  //     ["merah muda", "kasih sayang"],
  //     ["merah", "semangat"],
  //     ["jingga", "keberanian", "berani"],
  //     ["kuning", "kebijaksanaan", "bijaksana"],
  //     ["hijau", "kepedulian", "peduli"],
  //     ["hitam", "tanggung jawab", "bertanggung jawab"],
  //     ["biru", "ketenangan", "tenang"],
  //     ["panca warna", "keseimbangan", "seimbang"],
  //   ],
  // },
};

// Evaluasi SD memakai kata kunci untuk nama-nama arah mata angin (9 arah).
const sdEvaluationKey = {
  q1: {
    keywords: [
      // 1. Timur
      "Merkurius",
      // 2. Tenggara
      "Venus",
      "Bumi",
      "Mars",
      "Jupiter",
      "Saturnus",
      "Uranus",
      "Neptunus",
    ],
    points: 8,
  },
};

// Evaluasi SMP memakai kata kunci nama-nama dewa penjaga mata angin (9 elemen).
const smpEvaluationKey = {
  q1: {
    keywords: [
      // Isi kunci jawaban di sini, contoh: "iswara", "brahma", "wisnu", dll. (9 elemen)
      "Biotik",
    ],
    points: 100,
  },
};

// Jalankan semua fitur setelah HTML selesai dibaca browser.
document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initGeneratedQuiz();
  initTkQuiz();
  initEvaluation();
  initSmaMaterialVideos();
  initImageFallbacks();
  initResultCloseButtons();
});

/* Mobile menu */
function initMobileMenu() {
  const nav = document.querySelector(".hindu-nav");
  const menuButton = nav?.querySelector("button.md\\:hidden");
  const desktopLinks = nav?.querySelectorAll("ul a");

  if (!nav || !menuButton || !desktopLinks?.length) return;

  menuButton.type = "button";
  menuButton.setAttribute("aria-label", "Buka menu");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.textContent = "☰";

  const backdrop = document.createElement("div");
  backdrop.className = "site-offcanvas-backdrop";

  const panel = document.createElement("aside");
  panel.className = "site-offcanvas";
  panel.setAttribute("aria-hidden", "true");

  const header = document.createElement("div");
  header.className = "site-offcanvas-header";

  const title = document.createElement("span");
  title.textContent = "Menu";

  const closeButton = document.createElement("button");
  closeButton.type = "button";
  closeButton.className = "site-offcanvas-close";
  closeButton.setAttribute("aria-label", "Tutup menu");
  closeButton.textContent = "×";

  header.append(title, closeButton);
  panel.append(header);

  function closeMenu() {
    panel.classList.remove("is-open");
    backdrop.classList.remove("is-open");
    document.body.classList.remove("offcanvas-open");
    panel.setAttribute("aria-hidden", "true");
    menuButton.setAttribute("aria-expanded", "false");
  }

  desktopLinks.forEach((link) => {
    const clone = link.cloneNode(true);
    clone.className = "";
    clone.addEventListener("click", closeMenu);
    panel.append(clone);
  });

  document.body.append(backdrop, panel);

  function openMenu() {
    panel.classList.add("is-open");
    backdrop.classList.add("is-open");
    document.body.classList.add("offcanvas-open");
    panel.setAttribute("aria-hidden", "false");
    menuButton.setAttribute("aria-expanded", "true");
    closeButton.focus();
  }

  menuButton.addEventListener("click", openMenu);
  closeButton.addEventListener("click", closeMenu);
  backdrop.addEventListener("click", closeMenu);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}

/* Quiz yang dibuat dari data JavaScript: SD, SMP, dan SMA */
function initGeneratedQuiz() {
  const pageConfig = Object.entries(quizPages).find(([pageClass]) =>
    document.body.classList.contains(pageClass),
  )?.[1];
  const form = document.getElementById("quizForm");

  if (!pageConfig || !form) return;

  form.innerHTML =
    pageConfig.questions
      .map((item, index) => renderQuestionCard(item, index, pageConfig))
      .join("") +
    `<button type="submit" class="w-full bg-gradient-to-r ${pageConfig.button} text-white py-6 rounded-3xl text-3xl font-hindu font-bold btn-cartoon shadow-2xl">Selesai Quiz</button>`;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const score = pageConfig.questions.reduce((total, item, index) => {
      const selected = document.querySelector(
        `input[name="q${index}"]:checked`,
      );
      return selected && Number(selected.value) === item.c ? total + 1 : total;
    }, 0);

    setResultText(
      score >= pageConfig.threshold
        ? pageConfig.goodTitle
        : pageConfig.badTitle,
      `Skor kamu ${score}/${pageConfig.questions.length}.`,
    );
    showResult();
  });
}

// Membuat satu kartu soal lengkap dengan semua pilihan jawabannya.
function renderQuestionCard(item, index, pageConfig) {
  return `
    <div class="p-6 bg-${pageConfig.color}-100 rounded-2xl border-4 border-${pageConfig.color}-300">
      <h3 class="text-2xl font-hindu font-bold mb-6 text-center">${item.q}</h3>
      <div class="space-y-4">
        ${item.a
          .map(
            (answer, option) => `
          <label class="block p-4 border-2 border-${pageConfig.color}-300 rounded-xl cursor-pointer hover:bg-${pageConfig.color}-200">
            <input type="radio" name="q${index}" value="${option}" class="mr-4 w-6 h-6" />
            <span class="font-cartoon text-xl">${answer}</span>
          </label>
        `,
          )
          .join("")}
      </div>
      ${pageConfig.cardVideo ? renderCardVideo(pageConfig.cardVideo) : ""}
    </div>
  `;
}

// Dipakai halaman yang membutuhkan video kecil di dalam kartu.
function renderCardVideo(video) {
  return `
    <div class="card-video">
      <div class="video-frame p-2">
        <video autoplay loop controls class="w-full h-32 rounded-2xl object-cover">
          <source src="${video.src}" type="video/mp4" />
          ${video.label}
        </video>
      </div>
    </div>
  `;
}

/* Quiz TK yang soalnya masih ada langsung di HTML */
function initTkQuiz() {
  if (!document.body.classList.contains("page-tk-quiz")) return;

  const form = document.getElementById("quizForm");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let score = 0;

    for (let i = 1; i <= 5; i++) {
      const questionName = `q${i}`;
      const selected = document.querySelector(
        `input[name="${questionName}"]:checked`,
      );
      if (selected && selected.value === tkQuizAnswers[questionName]) {
        score++;
      }
    }

    setText("resultScore", score);
    setText("resultTitle", score >= 7 ? "Pintar Sekali! 🌟" : "Bagus! 👏");
    setText("resultIcon", score >= 8 ? "⭐⭐⭐" : score >= 5 ? "⭐⭐" : "⭐");
    setText(
      "resultText",
      `Kamu mendapat ${score}/5 jawaban benar! ${
        score >= 3
          ? "Mantap Kamu Hebat! 🙏"
          : "Belajar lagi yuk, pasti bisa! 💪"
      }`,
    );
    showResult();
  });
}

/* Evaluasi */
function initEvaluation() {
  const form = document.getElementById("evalForm");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (document.body.classList.contains("page-tk-evaluasi")) {
      showTkEvaluationResult(form);
      return;
    }

    if (document.body.classList.contains("page-sma-evaluasi")) {
      showSmaEvaluationResult(form);
      return;
    }

    if (document.body.classList.contains("page-smp-evaluasi")) {
      showSmpEvaluationResult(form);
      return;
    }

    if (document.body.classList.contains("page-sd-evaluasi")) {
      showSdEvaluationResult(form);
      return;
    }

    showResult();
  });
}

function showTkEvaluationResult(form) {
  const score = calculateTkEvaluationScore(form);

  if (score >= 7) {
    setText("resultIcon", "⭐⭐⭐");
    setText("resultTitle", "Pintar Sekali!");
    setText("resultText", `Kamu mendapat ${score}/9! Kamu hebat!`);
  } else {
    setText("resultIcon", "⭐⭐");
    setText("resultTitle", "Bagus!");
    setText("resultText", `Kamu mendapat ${score}/9! Belajar lagi yuk!`);
  }

  showResult();
}

function showSmaEvaluationResult(form) {
  const score = calculateSmaEvaluationScore(form);
  // const maxScore = smaEvaluationKey.q1.points;
  const title =
    score >= 8
      ? "Pemahamanmu sangat baik!"
      : score >= 5
        ? "Jawabanmu sudah cukup baik"
        : "Ayo lengkapi lagi jawabanmu";

  setResultText(
    title,
    `Skor evaluasi kamu ${score}/100 ${
      score >= 8
        ? "Kamu sudah mengenali senjata dan nilai karakter Nawa Sangga."
        : "Coba cek kembali materi senjata dewata dan makna warna Nawa Sangga."
    }`,
  );
  showResult();
}

function showSdEvaluationResult(form) {
  const score = calculateSdEvaluationScore(form);

  const title =
    score >= 7
      ? "Pemahamanmu sangat baik!"
      : score >= 4
        ? "Jawabanmu sudah cukup baik"
        : "Ayo lengkapi lagi jawabanmu";

  setResultText(
    title,
    `Kamu mendapat ${score}/8 jawaban benar! ${
      score >= 4
        ? "Kamu anak Hindu yang hebat! 🙏"
        : "Belajar lagi yuk, pasti bisa! 💪"
    }`,
  );
  showResult();
}

function showSmpEvaluationResult(form) {
  const score = calculateSmpEvaluationScore(form);

  const title =
    score >= 100
      ? "Pemahamanmu sangat baik!"
      : score >= 4
        ? "Jawabanmu sudah cukup baik"
        : "Ayo lengkapi lagi jawabanmu";

  setResultText(
    title,
    `Kamu mendapat ${score}/100 jawaban benar! ${
      score >= 7
        ? "Yuk Belajar Lagi"
        : "Jangan Menyerah"
    }`,
  );
  showResult();
}

function calculateSmpEvaluationScore(form) {
  const formData = new FormData(form);
  const q1Answer = formData.get("q1") || "";

  return getKeywordScore(
    q1Answer,
    smpEvaluationKey.q1.keywords,
    smpEvaluationKey.q1.points,
  );
}

// Menghitung nilai evaluasi TK berdasarkan jawaban textarea.
function calculateTkEvaluationScore(form) {
  const formData = new FormData(form);
  const q1Answer = formData.get("q1") || "";
  // const q2Answer = formData.get("q2") || "";

  return (
    getKeywordScore(
      q1Answer,
      tkEvaluationKey.q1.keywords,
      tkEvaluationKey.q1.points,
    )
    // getKeywordScore(
    //   q2Answer,
    //   tkEvaluationKey.q2.keywords,
    //   tkEvaluationKey.q2.points,
    // )
  );
}

function calculateSmaEvaluationScore(form) {
  const formData = new FormData(form);
  const q1Answer = formData.get("q1") || "";
  // const q2Answer = formData.get("q2") || "";

  return (
    getKeywordScore(
      q1Answer,
      smaEvaluationKey.q1.keywords,
      smaEvaluationKey.q1.points,
    )
    // +
    // getKeywordScore(
    //   q2Answer,
    //   smaEvaluationKey.q2.keywords,
    //   smaEvaluationKey.q2.points,
    // )
  );
}

function calculateSdEvaluationScore(form) {
  const formData = new FormData(form);
  const q1Answer = formData.get("q1") || "";

  return getKeywordScore(
    q1Answer,
    sdEvaluationKey.q1.keywords,
    sdEvaluationKey.q1.points,
  );
}

// Mengubah jumlah kata kunci yang cocok menjadi skor.
function getKeywordScore(answer, keywords, maxPoints) {
  const normalizedAnswer = normalizeAnswer(answer);
  const normalizedKeywordGroups = keywords
    .map((keyword) => (Array.isArray(keyword) ? keyword : [keyword]))
    .map((group) => [...new Set(group.map(normalizeAnswer).filter(Boolean))])
    .filter((group) => group.length);

  if (!normalizedAnswer || !normalizedKeywordGroups.length) return 0;

  const matchedCount = normalizedKeywordGroups.filter((group) =>
    group.some((keyword) => normalizedAnswer.includes(keyword)),
  ).length;

  return Math.min(
    maxPoints,
    Math.round((matchedCount / normalizedKeywordGroups.length) * maxPoints),
  );
}

function normalizeAnswer(value) {
  return String(value).trim().toLowerCase();
}

/* Fitur tambahan halaman */
function initSmaMaterialVideos() {
  return;
}

// Jika gambar utama gagal dimuat, pakai gambar cadangan.
function initImageFallbacks() {
  document.querySelectorAll("img[data-fallback-src]").forEach((image) => {
    image.addEventListener("error", () => {
      if (image.dataset.fallbackUsed === "true") {
        if (image.dataset.finalFallbackSrc) {
          image.dataset.fallbackUsed = "final";
          image.src = image.dataset.finalFallbackSrc;
        }
        return;
      }

      if (image.dataset.fallbackUsed === "final") return;

      image.dataset.fallbackUsed = "true";
      image.src = image.dataset.fallbackSrc;
    });
  });
}

function initResultCloseButtons() {
  document.querySelectorAll("[data-close-result]").forEach((button) => {
    button.addEventListener("click", closeResult);
  });
}

/* Helper kecil yang dipakai banyak fitur */
function setResultText(title, text) {
  setText("resultTitle", title);
  setText("resultText", text);
}

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) element.textContent = value;
}

function showResult() {
  const result = document.getElementById("result");
  if (result) result.style.display = "block";
}

function closeResult() {
  const result = document.getElementById("result");
  const form =
    document.getElementById("quizForm") || document.getElementById("evalForm");

  if (result) result.style.display = "none";
  form?.reset();
}
