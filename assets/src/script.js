/*
  File ini berisi JavaScript bersama untuk semua halaman.
  HTML cukup memberi class halaman, misalnya "page-smp-quiz",
  lalu script ini akan menyalakan fitur yang sesuai.
*/

// Data quiz SD dan SMP memakai daftar soal yang sama.
// q = pertanyaan, a = pilihan jawaban, c = index jawaban benar.
const sharedDewataQuestions = [
  {
    q: "Orang yang mengajar di sekolah adalah ...",
    a: ["Petani", "Guru"],
    c: 1,
  },
  {
    q: "Kita harus hidup ... dengan keluarga",
    a: ["Rukun", "Bertengkar"],
    c: 0,
  },
  {
    q: "Membersihkan kelas bersama disebut...",
    a: ["Gotong royong", "Bermain"],
    c: 0,
  },
  {
    q: "Ayah dan ibu adalah anggota...",
    a: ["Sekolah", "Keluarga"],
    c: 1,
  },
  {
    q: "Petani bekerja di...",
    a: ["Laut", "Sawah"],
    c: 1,
  },
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
        q: "Datang tepat waktu ke sekolah termasuk sikap...",
        a: ["Malas", "Disiplin"],
        c: 1,
      },
      {
        q: "Kita harus menghormati...",
        a: ["Guru", "Musuh"],
        c: 0,
      },
      {
        q: "Agar hidup damai, kita harus...",
        a: ["Bertengkar", "Rukun"],
        c: 1,
      },
      {
        q: "Mematuhi aturan membuat hidup menjadi...",
        a: ["Tertib", "Kacau"],
        c: 0,
      },
      {
        q: "Membantu teman adalah contoh sikap...",
        a: ["Baik", "Jahat"],
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
      "Domba",
      "Kelinci",
      "Burung",
    ],
    points: 50,
  },
  q2: {
    keywords: ["Cerah", "Hujan", "Mendung", "Badai"],
    points: 50,
  },
};

const smaEvaluationKey = {
  q1: {
    keywords: ["Menggunakan password yang kuat", "Menggunakan sandi yang kuat", "Memilih password yang sulit ditebak", "Menggunakan kombinasi huruf, angka, dan simbol", "Tidak menggunakan informasi pribadi sebagai password", "Rutin mengganti password", "Tidak membagikan password kepada orang lain", "Memanfaatkan autentikasi dua faktor", "Memastikan situs web aman sebelum memasukkan password", "Tidak menggunakan password yang sama untuk banyak akun", "Menggunakan manajer password untuk menyimpan password dengan aman"],
    points: 100,
  },
};

// Evaluasi SD memakai kata kunci untuk nama-nama arah mata angin (9 arah).
const sdEvaluationKey = {
  q1: {
    keywords: [
      "Ayah",
      "Ibu",
      "Kakak",
      "Adik",
      "Paman",
      "Bibi",
      "Kakek",
      "Nenek",
    ],
    points: 50,
  },
  q2: {
    keywords: [
      "Petani",
      "Dokter",
      "Guru",
      "Polisi",
      "Pemadam kebakaran",
      "Perawat",
      "Pengemudi",
      "Tukang",
      "Pedagang",
      "Seniman",
      "Musisi",
      "Atlet",
      "Ilmuwan",
      "Insinyur",
      "Pekerja sosial",
    ],
    points: 50,
  },
};

// Evaluasi SMP memakai kata kunci nama-nama dewa penjaga mata angin (9 elemen).
const smpEvaluationKey = {
  q1: {
    keywords: [
      "Datang tepat waktu",
      "Memakai seragam rapi",
      "Mengerjakan tugas dengan baik",
      "Berperilaku sopan",
      "Menghormati guru dan teman",
      "Mendengarkan guru saat belajar",
    ],
    points: 50,
  },
  // kata kunci sikap rukun
  q2: {
    keywords: [
      "Saling membantu",
      "Saling menghormati",
      "Saling mendukung",
      "Saling memaafkan",
      "Saling bekerja sama",
      "Saling menghargai",
      "Tidak memandang perbedaan",
      "Menerima perbedaan",
      "Tidak bertengkar",
      "Tidak berkelahi",
      "Tidak membully",
      "Tidak mengucilkan",
      "Tidak menyebarkan gosip",
      "Tidak menyebarkan kebencian",
      "Saling menolong",
    ],
    points: 50,
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

    // 1. Hitung berapa banyak jawaban yang benar
    const totalCorrect = pageConfig.questions.reduce((total, item, index) => {
      const selected = document.querySelector(
        `input[name="q${index}"]:checked`,
      );
      return selected && Number(selected.value) === item.c ? total + 1 : total;
    }, 0);

    const totalQuestions = pageConfig.questions.length;

    // 2. Rumus Sakti: Hitung skor skala 0-100
    const finalScore =
      totalQuestions > 0
        ? Math.round((totalCorrect / totalQuestions) * 100)
        : 0;

    // 3. Tentukan batas kelulusan (Contoh: jika threshold dinamis, atau pasang standar bawaan 70-80%)
    // Kita asumsikan jika benar minimal sesuai config threshold, dia lulus.
    // Atau jika mau dipukul rata, bisa pakai: finalScore >= 75
    const minimalScoreNeeded =
      totalQuestions > 0 ? (pageConfig.threshold / totalQuestions) * 100 : 75;

    // 4. Tampilkan hasil dengan format skor baru
    setResultText(
      finalScore >= minimalScoreNeeded
        ? pageConfig.goodTitle
        : pageConfig.badTitle,
      `Skor kamu ${finalScore}/100. (Benar ${totalCorrect} dari ${totalQuestions} soal)`,
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
    let correctAnswers = 0;

    // 1. Hitung total soal secara dinamis berdasarkan data kunci jawaban
    const totalQuestions = Object.keys(tkQuizAnswers).length;

    // 2. Periksa jawaban yang benar
    for (let i = 1; i <= totalQuestions; i++) {
      const questionName = `q${i}`;
      const selected = document.querySelector(
        `input[name="${questionName}"]:checked`,
      );
      if (selected && selected.value === tkQuizAnswers[questionName]) {
        correctAnswers++;
      }
    }

    // 3. Rumus Sakti: Berapapun soalnya, nilai maksimal tetap 100
    const finalScore =
      totalQuestions > 0
        ? Math.round((correctAnswers / totalQuestions) * 100)
        : 0;

    // 4. Atur teks hasil berdasarkan skor skala 0-100
    setText("resultScore", finalScore);
    setText(
      "resultTitle",
      finalScore >= 80 ? "Pintar Sekali! 🌟" : "Bagus! 👏",
    );
    setText(
      "resultIcon",
      finalScore >= 80 ? "⭐⭐⭐" : finalScore >= 50 ? "⭐⭐" : "⭐",
    );

    setText(
      "resultText",
      `Skor kamu ${finalScore}/100. (Benar ${correctAnswers} dari ${totalQuestions} soal) ${
        finalScore >= 60
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

  if (score >= 70) {
    setText("resultIcon", "⭐⭐⭐");
    setText("resultTitle", "Pintar Sekali!");
    setText("resultText", `Kamu mendapat ${score}/100! Kamu hebat!`);
  } else if (score >= 50) {
    setText("resultIcon", "⭐⭐");
    setText("resultTitle", "Lumayan!");
    setText(
      "resultText",
      `Kamu mendapat ${score}/100! Ayo belajar lagi untuk jadi lebih hebat!`,
    );
  } else {
    setText("resultIcon", "⭐");
    setText("resultTitle", "Bagus!");
    setText("resultText", `Kamu mendapat ${score}/100! Belajar lagi yuk!`);
  }

  showResult();
}

function showSmaEvaluationResult(form) {
  const score = calculateSmaEvaluationScore(form);
  // const maxScore = smaEvaluationKey.q1.points;
  if (score >= 70) {
    setText("resultIcon", "⭐⭐⭐");
    setText("resultTitle", "Pintar Sekali!");
    setText("resultText", `Kamu mendapat ${score}/100! Kamu hebat!`);
  } else if (score >= 50) {
    setText("resultIcon", "⭐⭐");
    setText("resultTitle", "Lumayan!");
    setText(
      "resultText",
      `Kamu mendapat ${score}/100! Ayo belajar lagi untuk jadi lebih hebat!`,
    );
  } else {
    setText("resultIcon", "⭐");
    setText("resultTitle", "Bagus!");
    setText("resultText", `Kamu mendapat ${score}/100! Belajar lagi yuk!`);
  }
  showResult();
}

function showSdEvaluationResult(form) {
  const score = calculateSdEvaluationScore(form);

  if (score >= 70) {
    setText("resultIcon", "⭐⭐⭐");
    setText("resultTitle", "Pintar Sekali!");
    setText("resultText", `Kamu mendapat ${score}/100! Kamu hebat!`);
  } else if (score >= 50) {
    setText("resultIcon", "⭐⭐");
    setText("resultTitle", "Lumayan!");
    setText(
      "resultText",
      `Kamu mendapat ${score}/100! Ayo belajar lagi untuk jadi lebih hebat!`,
    );
  } else {
    setText("resultIcon", "⭐");
    setText("resultTitle", "Bagus!");
    setText("resultText", `Kamu mendapat ${score}/100! Belajar lagi yuk!`);
  }

  showResult();
}

function showSmpEvaluationResult(form) {
  const score = calculateSmpEvaluationScore(form);

  if (score >= 70) {
    setText("resultIcon", "⭐⭐⭐");
    setText("resultTitle", "Pintar Sekali!");
    setText("resultText", `Kamu mendapat ${score}/100! Kamu hebat!`);
  } else if (score >= 50) {
    setText("resultIcon", "⭐⭐");
    setText("resultTitle", "Lumayan!");
    setText(
      "resultText",
      `Kamu mendapat ${score}/100! Ayo belajar lagi untuk jadi lebih hebat!`,
    );
  } else {
    setText("resultIcon", "⭐");
    setText("resultTitle", "Bagus!");
    setText("resultText", `Kamu mendapat ${score}/100! Belajar lagi yuk!`);
  }
  showResult();
}

function calculateSmpEvaluationScore(form) {
  const formData = new FormData(form);
  
  // mengambil isi dari textarea
  const jawabanTunggal = (formData.get("q1") || "").trim().toLowerCase();

  // 1. cari kata kunci contoh aturan sekolah di dalam kolom tersebut
  const matchAturan = smpEvaluationKey.q1.keywords.filter((keyword) =>
    jawabanTunggal.includes(keyword.trim().toLowerCase()),
  ).length;

  // 2. cari kata kunci contoh sikap rukun di dalam kolom yang SAMA
  const matchRukun = smpEvaluationKey.q2.keywords.filter((keyword) =>
    jawabanTunggal.includes(keyword.trim().toLowerCase()),
  ).length;

  // 3. batasi jumlah maksimal kata yang dihitung (Aturan sekolah maks 2, Sikap rukun maks 2)
  const efektifAturan = Math.min(matchAturan, 2);
  const efektifRukun = Math.min(matchRukun, 2);

  // 4. hitung skor proporsional (Masing-masing bernilai maksimal 50 poin)
  const scoreAturan = Math.round((efektifAturan / 2) * smpEvaluationKey.q1.points);
  const scoreRukun = Math.round((efektifRukun / 2) * smpEvaluationKey.q2.points);

  // SUDAH DIPERBAIKI: Memanggil nama variabel yang benar
  return scoreAturan + scoreRukun;
}

// Menghitung nilai evaluasi TK berdasarkan jawaban textarea.
function calculateTkEvaluationScore(form) {
  const formData = new FormData(form);

  // Mengambil isi dari satu-satunya textarea (name="q1")
  const jawabanTunggal = (formData.get("q1") || "").trim().toLowerCase();

  // 1. Cari kata kunci HEWAN di dalam kolom tersebut
  const matchHewan = tkEvaluationKey.q1.keywords.filter((keyword) =>
    jawabanTunggal.includes(keyword.trim().toLowerCase()),
  ).length;

  // 2. Cari kata kunci CUACA di dalam kolom yang SAMA
  const matchCuaca = tkEvaluationKey.q2.keywords.filter((keyword) =>
    jawabanTunggal.includes(keyword.trim().toLowerCase()),
  ).length;

  // 3. Batasi jumlah maksimal kata yang dihitung (Hewan maks 3, Cuaca maks 2)
  const efektifHewan = Math.min(matchHewan, 3);
  const efektifCuaca = Math.min(matchCuaca, 2);

  // 4. Hitung skor proporsional (Masing-masing bernilai maksimal 50 poin)
  const scoreHewan = Math.round((efektifHewan / 3) * tkEvaluationKey.q1.points);
  const scoreCuaca = Math.round((efektifCuaca / 2) * tkEvaluationKey.q2.points);

  // SUDAH DIPERBAIKI: Memanggil nama variabel yang benar
  return scoreHewan + scoreCuaca;
}

function calculateSmaEvaluationScore(form) {
  const formData = new FormData(form);
  // const formData = new FormData(form);

  // Mengambil isi dari satu-satunya textarea (name="q1")
  const jawabanTunggal = (formData.get("q1") || "").trim().toLowerCase();

  // 1. Cari kata kunci Keamanan akun di dalam kolom tersebut
  const matchAkun = smaEvaluationKey.q1.keywords.filter((keyword) =>
    jawabanTunggal.includes(keyword.trim().toLowerCase()),
  ).length;

  // 2. Cari kata kunci CUACA di dalam kolom yang SAMA
  // const matchCuaca = tkEvaluationKey.q2.keywords.filter((keyword) =>
  //   jawabanTunggal.includes(keyword.trim().toLowerCase()),
  // ).length;

  // 3. Batasi jumlah maksimal kata yang dihitung (keamanan akun maks 1)
  const efektifAkun = Math.min(matchAkun, 1);
  // const efektifCuaca = Math.min(matchCuaca, 2);

  // 4. Hitung skor proporsional (Masing-masing bernilai maksimal 50 poin)
  const scoreAkun = Math.round((efektifAkun / 1) * smaEvaluationKey.q1.points);
  // const scoreCuaca = Math.round((efektifCuaca / 2) * tkEvaluationKey.q2.points);

  // SUDAH DIPERBAIKI: Memanggil nama variabel yang benar
  return scoreAkun; // + scoreCuaca;
}

function calculateSdEvaluationScore(form) {
  const formData = new FormData(form);

  // mengambil isi dari textarea
  const jawabanTunggal = (formData.get("q1") || "").trim().toLowerCase();

  // 1. Cari kata kunci anggota keluarga di dalam kolom tersebut
  const matchKeluarga = sdEvaluationKey.q1.keywords.filter((keyword) =>
    jawabanTunggal.includes(keyword.trim().toLowerCase()),
  ).length;

  // 2. Cari kata kunci pekerjaan di dalam kolom yang SAMA
  const matchKerja = sdEvaluationKey.q2.keywords.filter((keyword) =>
    jawabanTunggal.includes(keyword.trim().toLowerCase()),
  ).length;

  // 3. Batasi jumlah maksimal kata yang dihitung (Keluarga maks 3, Pekerjaan maks 2)
  const efektifKeluarga = Math.min(matchKeluarga, 3);
  const efektifKerja = Math.min(matchKerja, 2);

  // 4. Hitung skor proporsional (Masing-masing bernilai maksimal 50 poin)
  const scoreKeluarga = Math.round(
    (efektifKeluarga / 3) * sdEvaluationKey.q1.points,
  );
  const scoreKerja = Math.round((efektifKerja / 2) * sdEvaluationKey.q2.points);

  // SUDAH DIPERBAIKI: Memanggil nama variabel yang benar
  return scoreKeluarga + scoreKerja;
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
