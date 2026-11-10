import { GameDefinition } from '../types';

export const gameDefinitions: GameDefinition[] = [
  {
    id: 'vocab-hunter',
    title: 'Vocabulary Hunter',
    subject: 'english',
    tagline: 'Lacak & Kuasai Kosa Kata Teknik',
    description: 'Tebak istilah bahasa Inggris berdasarkan definisi, petunjuk konteks industri, dan padanan artinya.',
    icon: 'Target',
    badgeColor: 'from-blue-500 to-cyan-400',
    difficulty: 'Beginner',
    durationMinutes: 3,
    xpBase: 50
  },
  {
    id: 'grammar-battle',
    title: 'Grammar Battle',
    subject: 'english',
    tagline: 'Duel Tata Bahasa SMK',
    description: 'Uji ketelitianmu memilih tenses, kalimat pasif, dan bentuk kata kerja dalam instruksi kerja.',
    icon: 'Swords',
    badgeColor: 'from-purple-500 to-indigo-500',
    difficulty: 'Intermediate',
    durationMinutes: 4,
    xpBase: 60
  },
  {
    id: 'word-match',
    title: 'Word Match Connect',
    subject: 'english',
    tagline: 'Hubungkan Pasangan Kata & Istilah',
    description: 'Cocokkan istilah bahasa Inggris kejuruan dengan arti bahasa Indonesia dan definisinya secepat mungkin.',
    icon: 'Sparkles',
    badgeColor: 'from-teal-400 to-emerald-500',
    difficulty: 'Beginner',
    durationMinutes: 3,
    xpBase: 45
  },
  {
    id: 'reading-detective',
    title: 'Reading Detective',
    subject: 'english',
    tagline: 'Investigasi Teks Prosedur & Insiden',
    description: 'Baca teks studi kasus teknis dan temukan detail kunci untuk memecahkan misteri laporan kerja.',
    icon: 'Search',
    badgeColor: 'from-sky-500 to-blue-600',
    difficulty: 'Intermediate',
    durationMinutes: 5,
    xpBase: 70
  },
  {
    id: 'arrange-sentence',
    title: 'Arrange the Sentence',
    subject: 'english',
    tagline: 'Susun Balik Kalimat Acak',
    description: 'Rangkai potongan kata acak menjadi kalimat standar kerja yang gramatis dan rapi.',
    icon: 'AlignLeft',
    badgeColor: 'from-violet-500 to-purple-600',
    difficulty: 'Intermediate',
    durationMinutes: 4,
    xpBase: 55
  },
  {
    id: 'math-speed',
    title: 'Math Speed Challenge',
    subject: 'mathematics',
    tagline: 'Kalkulasi Kilat Berpacu Waktu',
    description: 'Jawab soal hitung cepat aljabar, persentase, dan rumus praktis sebelum timer 60 detik habis!',
    icon: 'Zap',
    badgeColor: 'from-amber-400 to-orange-500',
    difficulty: 'Beginner',
    durationMinutes: 2,
    xpBase: 65
  },
  {
    id: 'formula-master',
    title: 'Formula Master',
    subject: 'mathematics',
    tagline: 'Cocokkan Rumus & Fungsinya',
    description: 'Pasangkan rumus matematika SMK (Trigonometri, SPLDV, Eksponen, Keuangan) dengan nama dan kasus pakainya.',
    icon: 'BookKey',
    badgeColor: 'from-amber-500 to-yellow-400',
    difficulty: 'Intermediate',
    durationMinutes: 3,
    xpBase: 50
  },
  {
    id: 'math-puzzle',
    title: 'Math Pattern Puzzle',
    subject: 'mathematics',
    tagline: 'Pecahkan Teka-Teki Pola Logika',
    description: 'Temukan angka hilang pada deret logika, pola geometri, dan teka-teki visual matematika.',
    icon: 'Puzzle',
    badgeColor: 'from-rose-500 to-orange-400',
    difficulty: 'Intermediate',
    durationMinutes: 4,
    xpBase: 65
  },
  {
    id: 'equation-solver',
    title: 'Equation Step Solver',
    subject: 'mathematics',
    tagline: 'Pilih Langkah Aljabar yang Benar',
    description: 'Analisis persamaan dan tentukan langkah penyelesaian matematis yang sah tahap demi tahap.',
    icon: 'CheckSquare',
    badgeColor: 'from-blue-600 to-indigo-700',
    difficulty: 'Advanced',
    durationMinutes: 4,
    xpBase: 75
  },
  {
    id: 'mixed-challenge',
    title: 'Mixed Subject Quest',
    subject: 'mixed',
    tagline: 'Misi Gabungan English + Matematika',
    description: 'Selesaikan studi kasus terintegrasi: membaca spesifikasi mesin berbahasa Inggris dan menghitung parameter teknisnya.',
    icon: 'Trophy',
    badgeColor: 'from-fuchsia-500 to-pink-500',
    difficulty: 'Advanced',
    durationMinutes: 5,
    xpBase: 90
  }
];

// --- 1. VOCABULARY HUNTER DATA (10 items) ---
export const vocabHunterItems = [
  {
    id: 'vh-1',
    word: 'Multimeter',
    category: 'Workshop Tools',
    definition: 'An instrument designed to measure electrical potential (voltage), current (amperes), and resistance (ohms).',
    indonesianMeaning: 'Alat ukur listrik serbaguna (tegangan, arus, dan hambatan).',
    sentenceExample: 'Before inspecting the power supply, check the voltage with a digital _______ .',
    options: ['Multimeter', 'Telescope', 'Thermometer', 'Barometer']
  },
  {
    id: 'vh-2',
    word: 'Troubleshooting',
    category: 'Workplace Skills',
    definition: 'A systematic approach to problem solving that is often used to find and resolve issues with complex machines or software.',
    indonesianMeaning: 'Proses pelacakan dan penyelesaian masalah teknis.',
    sentenceExample: 'The network technician spent three hours on _______ to restore the internet connection.',
    options: ['Troubleshooting', 'Brainstorming', 'Broadcasting', 'Benchmarking']
  },
  {
    id: 'vh-3',
    word: 'Calibration',
    category: 'Industrial Standards',
    definition: 'The process of checking or adjusting the accuracy of a measuring instrument against an established standard.',
    indonesianMeaning: 'Peneraan / kalibrasi ketepatan alat ukur.',
    sentenceExample: 'Annual _______ of all torque wrenches ensures precise bolt tightening.',
    options: ['Calibration', 'Combustion', 'Celebration', 'Calculation']
  },
  {
    id: 'vh-4',
    word: 'Maintenance',
    category: 'Workshop Terms',
    definition: 'The work of keeping something in proper condition through regular checking and repairs.',
    indonesianMeaning: 'Pemeliharaan / perawatan alat dan mesin berkala.',
    sentenceExample: 'Regular preventative _______ extends the operating lifespan of the CNC machine.',
    options: ['Maintenance', 'Management', 'Manufacture', 'Measurement']
  },
  {
    id: 'vh-5',
    word: 'Gears',
    category: 'Mechanical Engineering',
    definition: 'Toothed wheels that work together to alter the relation between the speed of a driving mechanism and the speed of the driven parts.',
    indonesianMeaning: 'Roda gigi transmisi.',
    sentenceExample: 'Lubricate the transmission _______ to prevent friction and excessive wear.',
    options: ['Gears', 'Wires', 'Pipes', 'Valves']
  },
  {
    id: 'vh-6',
    word: 'Bandwidth',
    category: 'Network & IT',
    definition: 'The maximum amount of data transmitted over an internet connection in a given amount of time.',
    indonesianMeaning: 'Lebar pita / kapasitas transfer data jaringan.',
    sentenceExample: 'Video conferencing requires high _______ for clear, uninterrupted video streaming.',
    options: ['Bandwidth', 'Bluetooth', 'Baseband', 'Backpack']
  },
  {
    id: 'vh-7',
    word: 'Solder',
    category: 'Electronics',
    definition: 'A low-melting alloy used to join less fusible metals, especially electrical circuit joints.',
    indonesianMeaning: 'Timah patri pelekat komponen elektronik.',
    sentenceExample: 'Heat the pad and component lead before applying the lead-free _______ .',
    options: ['Solder', 'Glue', 'Cement', 'Rubber']
  },
  {
    id: 'vh-8',
    word: 'Inspection',
    category: 'Quality Control',
    definition: 'A thorough examination or review to ensure products meet required quality and safety standards.',
    indonesianMeaning: 'Pemeriksaan / pengujian mutu barang.',
    sentenceExample: 'Every finished unit must pass quality _______ before being packaged for shipment.',
    options: ['Inspection', 'Invention', 'Interference', 'Inundation']
  },
  {
    id: 'vh-9',
    word: 'Backup',
    category: 'Data Management',
    definition: 'A duplicate copy of computer data kept in case the original is lost, damaged, or corrupted.',
    indonesianMeaning: 'Salinan data cadangan.',
    sentenceExample: 'Always create an external cloud _______ of the database before updating the server OS.',
    options: ['Backup', 'Backpack', 'Backdoor', 'Backfire']
  },
  {
    id: 'vh-10',
    word: 'Hydraulic',
    category: 'Applied Mechanics',
    definition: 'Operated by or involving the movement of liquids under pressure, such as oil in brakes or cranes.',
    indonesianMeaning: 'Sistem penggerak bertenaga tekanan cairan fluida.',
    sentenceExample: 'Heavy excavators use _______ cylinders to lift tons of rock with ease.',
    options: ['Hydraulic', 'Electronic', 'Magnetic', 'Acoustic']
  }
];

// --- 2. GRAMMAR BATTLE (10 items) ---
export const grammarBattleItems = [
  {
    id: 'gb-1',
    sentence: 'The supervisor _______ the blueprint when the power outage occurred.',
    options: ['was examining', 'examined', 'is examining', 'examines'],
    correctIndex: 0,
    rule: 'Past Continuous was happening when a simple past event interrupted ("occurred").'
  },
  {
    id: 'gb-2',
    sentence: 'Protective goggles _______ at all times while operating the grinding machine.',
    options: ['must be worn', 'must wear', 'must wearing', 'must be wear'],
    correctIndex: 0,
    rule: 'Modal passive formula: Modal + be + V3 ("must be worn").'
  },
  {
    id: 'gb-3',
    sentence: 'If you connect the battery with inverted polarity, the diode _______ .',
    options: ['will burn', 'burned', 'would burned', 'burning'],
    correctIndex: 0,
    rule: 'Conditional Type 1: If + present simple -> will + V1 ("will burn").'
  },
  {
    id: 'gb-4',
    sentence: 'Neither the technician nor the apprentices _______ able to locate the main valve yesterday.',
    options: ['were', 'was', 'is', 'are'],
    correctIndex: 0,
    rule: 'With "Neither... nor", the verb agrees with the closer subject ("the apprentices" = plural -> "were").'
  },
  {
    id: 'gb-5',
    sentence: 'This new fiber optic cable delivers _______ latency than the old coaxial wire.',
    options: ['lower', 'lowest', 'more low', 'less lower'],
    correctIndex: 0,
    rule: 'Comparative adjective for one-syllable "low" is "lower".'
  },
  {
    id: 'gb-6',
    sentence: 'Having _______ the diagnostic test, the IT team rebooted the core switch.',
    options: ['completed', 'complete', 'completing', 'completes'],
    correctIndex: 0,
    rule: 'Perfect participle clause: Having + V3 ("Having completed...").'
  },
  {
    id: 'gb-7',
    sentence: 'The programmer prefers writing code in Python _______ in Assembly.',
    options: ['to', 'than', 'from', 'rather'],
    correctIndex: 0,
    rule: 'The verb "prefer" is followed by the preposition "to" (prefer X to Y).'
  },
  {
    id: 'gb-8',
    sentence: 'Every applicant for the internship program _______ submit a portfolio.',
    options: ['has to', 'have to', 'are having to', 'having to'],
    correctIndex: 0,
    rule: 'Subject with "Every" takes a singular verb: "Every applicant has to...".'
  },
  {
    id: 'gb-9',
    sentence: 'The manual clearly states: "_______ the emergency lever downwards to shut down instantly."',
    options: ['Pull', 'Pulls', 'Pulled', 'Pulling'],
    correctIndex: 0,
    rule: 'Direct operational instructions use the imperative base form ("Pull").'
  },
  {
    id: 'gb-10',
    sentence: 'By the time the manager arrived, the team _______ the client presentation.',
    options: ['had finished', 'have finished', 'finishing', 'finished already'],
    correctIndex: 0,
    rule: 'Past Perfect ("had finished") denotes an action completed before another past event ("arrived").'
  }
];

// --- 3. WORD MATCH CONNECT (Pairs to match) ---
export const wordMatchPairs = [
  { id: 'wm-1', english: 'Voltage', indonesian: 'Tegangan Listrik (Volt)' },
  { id: 'wm-2', english: 'Current', indonesian: 'Arus Listrik (Ampere)' },
  { id: 'wm-3', english: 'Resistance', indonesian: 'Hambatan Listrik (Ohm)' },
  { id: 'wm-4', english: 'Torque', indonesian: 'Momen Gaya Putar' },
  { id: 'wm-5', english: 'Tolerance', indonesian: 'Batas Deviasi Ukuran' },
  { id: 'wm-6', english: 'Efficiency', indonesian: 'Tingkat Daya Guna / Efisiensi' },
  { id: 'wm-7', english: 'Compressor', indonesian: 'Mesin Pemampat Udara' },
  { id: 'wm-8', english: 'Lubricant', indonesian: 'Minyak Pelumas Mesin' }
];

// --- 4. READING DETECTIVE PASSAGES ---
export const readingDetectivePassages = [
  {
    id: 'rd-1',
    caseTitle: 'The Server Room Overheating Incident',
    passage: `On Monday morning at 08:15 AM, the automated monitoring system in the main data center triggered a Level-3 heat alarm. The temperature in Rack B had skyrocketed from the normal 20°C to an alarming 38°C in under 45 minutes.

Technician Raditya was immediately dispatched to investigate. Upon entering the room, he noticed that the primary air conditioning unit was running loudly, but the airflow vent near Rack B was completely obstructed by a stack of empty server packaging boxes left behind by the Friday installation crew. Furthermore, the auxiliary exhaust fans on Rack B were set to "ECO-Low" mode instead of "AUTO-Performance".

Raditya promptly cleared the airway obstruction and reset the exhaust fans to high speed. Within 20 minutes, the temperature dropped back down to 21°C, averting what could have been a catastrophic hardware failure.`,
    questions: [
      {
        question: 'What was the immediate physical cause of the heat buildup near Rack B?',
        options: [
          'The main power supply exploded',
          'Empty server packaging boxes were blocking the airflow vent',
          'The external room temperature outside was 50°C',
          'Someone turned off all electricity'
        ],
        correctIndex: 1,
        clue: 'Look at paragraph 2: "...vent near Rack B was completely obstructed by a stack of empty server packaging boxes..."'
      },
      {
        question: 'How long did it take for the temperature to stabilize back to 21°C after corrective action?',
        options: ['45 minutes', '20 minutes', '2 hours', '3 days'],
        correctIndex: 1,
        clue: 'Look at paragraph 3: "Within 20 minutes, the temperature dropped back down to 21°C..."'
      }
    ]
  },
  {
    id: 'rd-2',
    caseTitle: 'The CNC Lathe Tolerance Anomaly',
    passage: `During the production of aluminum motor shafts at SMK Machinery Workshop, Quality Control inspector Siti discovered that out of 50 newly manufactured shafts, 12 had an outer diameter exceeding the maximum permissible tolerance of ±0.02 mm.

Chief instructor Budi reviewed the CNC program code and found no logical errors in the coordinate parameters. However, upon inspecting the cutting tool insert, he discovered severe micro-chipping on the carbide tip, caused by the operator failing to apply synthetic coolant during high-speed turning. Without proper lubrication and cooling, the cutting tool expanded due to thermal friction, resulting in shafts cut thicker than intended.`,
    questions: [
      {
        question: 'Why did the shafts end up thicker than the designed blueprint specifications?',
        options: [
          'The G-code program had missing coordinates',
          'The carbide cutting tool expanded due to extreme friction and lack of coolant',
          'The aluminum raw material was counterfeit',
          'The lathe was rotating backwards'
        ],
        correctIndex: 1,
        clue: 'Look at the last sentence: "Without proper lubrication and cooling, the cutting tool expanded due to thermal friction..."'
      }
    ]
  }
];

// --- 5. ARRANGE THE SENTENCE DATA (10 items) ---
export const arrangeSentenceItems = [
  {
    id: 'as-1',
    scrambled: ['Always', 'safety', 'wear', 'inside', 'the', 'workshop', 'helmet'],
    correct: 'Always wear safety helmet inside the workshop',
    hint: 'Gunakan kata kerja imperatif di awal kalimat peringatan K3.'
  },
  {
    id: 'as-2',
    scrambled: ['disconnect', 'power', 'Before', 'repair,', 'the', 'cable'],
    correct: 'Before repair, disconnect the power cable',
    hint: 'Mulailah dengan frasa keterangan waktu "Before repair,".'
  },
  {
    id: 'as-3',
    scrambled: ['processes', 'requests', 'The', 'per', 'server', 'second', 'thousand'],
    correct: 'The server processes thousand requests per second',
    hint: 'Subjek kalimat ini adalah "The server".'
  },
  {
    id: 'as-4',
    scrambled: ['tested', 'The', 'brake', 'was', 'hydraulic', 'yesterday'],
    correct: 'The hydraulic brake was tested yesterday',
    hint: 'Bentuk pasif lampau: The hydraulic brake was tested...'
  },
  {
    id: 'as-5',
    scrambled: ['caliper', 'A', 'measures', 'outer', 'diameter', 'the', 'accurately'],
    correct: 'A caliper measures the outer diameter accurately',
    hint: 'Subjek "A caliper", kata kerja "measures".'
  },
  {
    id: 'as-6',
    scrambled: ['If', 'overheats,', 'turn', 'engine', 'off', 'immediately', 'the'],
    correct: 'If engine overheats, turn the off immediately', // or "If the engine overheats, turn off immediately"
    acceptedAlternatives: [
      'If the engine overheats, turn off immediately',
      'If engine overheats, turn off the engine immediately'
    ],
    hint: 'Kalimat kondisional tipe pengaman darurat.'
  },
  {
    id: 'as-7',
    scrambled: ['look', 'I', 'forward', 'meeting', 'to', 'in', 'you', 'person'],
    correct: 'I look forward to meeting you in person',
    hint: 'Frasa penutup formal surat lamaran kerja.'
  },
  {
    id: 'as-8',
    scrambled: ['Lubricate', 'bearings', 'all', 'reduce', 'friction', 'to'],
    correct: 'Lubricate all bearings to reduce friction',
    hint: 'Instruksi perawatan mesin: Lumasi semua bantalan...'
  },
  {
    id: 'as-9',
    scrambled: ['is', 'faster', 'much', 'NVMe', 'traditional', 'than', 'HDD'],
    correct: 'NVMe is much faster than traditional HDD',
    hint: 'Kalimat perbandingan kecepatan storage.'
  },
  {
    id: 'as-10',
    scrambled: ['Please', 'the', 'find', 'attached', 'report', 'inspection'],
    correct: 'Please find attached the inspection report',
    hint: 'Standar pembuka lampiran email bisnis.'
  }
];

// --- 6. MATH SPEED CHALLENGE QUESTIONS (12 questions) ---
export const mathSpeedItems = [
  { question: 'Berapakah 25% dari Rp200.000?', answer: '50000', options: ['Rp25.000', 'Rp50.000', 'Rp75.000', 'Rp100.000'], correctIndex: 1 },
  { question: 'Hitung: 2^4 + 3^2', answer: '25', options: ['23', '25', '27', '32'], correctIndex: 1 },
  { question: 'Jika 3x = 45, berapakah x?', answer: '15', options: ['12', '15', '18', '20'], correctIndex: 1 },
  { question: 'Berapa luas persegi dengan sisi 12 cm?', answer: '144', options: ['48 cm²', '120 cm²', '144 cm²', '169 cm²'], correctIndex: 2 },
  { question: 'Nilai dari √196 adalah...', answer: '14', options: ['12', '13', '14', '16'], correctIndex: 2 },
  { question: 'Jika diskon barang 20% dari Rp150.000, berapa harga setelah diskon?', answer: '120000', options: ['Rp110.000', 'Rp120.000', 'Rp130.000', 'Rp140.000'], correctIndex: 1 },
  { question: 'Hitung: 15 × 6 - 20', answer: '70', options: ['60', '70', '80', '90'], correctIndex: 1 },
  { question: 'Nilai dari 2^3 × 2^2 adalah...', answer: '32', options: ['16', '32', '64', '128'], correctIndex: 1 },
  { question: 'Berapakah nilai tan 45°?', answer: '1', options: ['0', '0.5', '1', '√3'], correctIndex: 2 },
  { question: 'Suku ke-4 dari barisan 2, 4, 8, ... adalah...', answer: '16', options: ['12', '14', '16', '18'], correctIndex: 2 },
  { question: 'Jika x + y = 10 dan x = 7, berapakah y?', answer: '3', options: ['2', '3', '4', '5'], correctIndex: 1 },
  { question: 'Berapakah 10% dari 500?', answer: '50', options: ['5', '50', '100', '500'], correctIndex: 1 }
];

// --- 7. FORMULA MASTER MATCHING PAIRS (8 pairs) ---
export const formulaMasterPairs = [
  {
    id: 'fm-1',
    name: 'Suku ke-n Barisan Aritmetika',
    formula: 'Un = a + (n - 1)b',
    application: 'Menghitung pertambahan produksi bertingkat atau nilai tabungan berkala konstan.'
  },
  {
    id: 'fm-2',
    name: 'Rumus Kuadratik ABC',
    formula: 'x = (-b ± √(b² - 4ac)) / (2a)',
    application: 'Mencari titik potong sumbu X atau lintasan proyektil optimum.'
  },
  {
    id: 'fm-3',
    name: 'Perbandingan Tangen (Tan)',
    formula: 'Tan θ = Depan / Samping',
    application: 'Mengukur tinggi antena atau menara dengan alat klinometer lapangan.'
  },
  {
    id: 'fm-4',
    name: 'Bunga Tunggal',
    formula: 'B = M × i × t',
    application: 'Menghitung beban bunga simpanan/pinjaman dengan modal pokok tetap.'
  },
  {
    id: 'fm-5',
    name: 'Determinan Matriks 2x2',
    formula: 'det = ad - bc',
    application: 'Uji syarat keterbalikan (invers) matriks dan penyelesaian sistem SPLDV.'
  },
  {
    id: 'fm-6',
    name: 'Permutasi Elemen',
    formula: 'P(n, r) = n! / (n - r)!',
    application: 'Menghitung variasi urutan sandi PIN atau susunan peringkat ranking kejuaraan.'
  },
  {
    id: 'fm-7',
    name: 'Diagonal Ruang Kubus',
    formula: 'd = s√3',
    application: 'Menghitung panjang jarak diagonal terjauh di dalam casing peralatan 3D.'
  },
  {
    id: 'fm-8',
    name: 'Suku ke-n Barisan Geometri',
    formula: 'Un = a · r^(n - 1)',
    application: 'Menghitung pertumbuhan eksponensial data traffic atau penyusutan nilai mesin.'
  }
];

// --- 8. MATH PUZZLE ITEMS (10 items) ---
export const mathPuzzleItems = [
  {
    id: 'mp-1',
    title: 'Pola Bilangan Fibonaci-Ganjil',
    sequenceDisplay: '3,  6,  11,  18,  27,  [ ? ]',
    options: ['36', '38', '40', '42'],
    correctIndex: 1,
    explanation: 'Selisih antar suku bertambah bilangan ganjil: +3, +5, +7, +9, maka berikutnya +11. 27 + 11 = 38.'
  },
  {
    id: 'mp-2',
    title: 'Pola Eksponensial Terbalik',
    sequenceDisplay: '64,  32,  16,  8,  [ ? ]',
    options: ['2', '4', '6', '1'],
    correctIndex: 1,
    explanation: 'Setiap suku dibagi 2. 8 / 2 = 4.'
  },
  {
    id: 'mp-3',
    title: 'Pola Persegi Kuadrat Sempurna',
    sequenceDisplay: '1,  4,  9,  16,  25,  [ ? ]',
    options: ['30', '34', '36', '49'],
    correctIndex: 2,
    explanation: 'Barisan kuadrat bilangan asli: 1², 2², 3², 4², 5², 6² = 36.'
  },
  {
    id: 'mp-4',
    title: 'Pola Operasi Silang Simbol',
    sequenceDisplay: 'Jika (2 ★ 3 = 13) dan (3 ★ 4 = 25), maka (4 ★ 5 = [ ? ])',
    options: ['35', '41', '45', '50'],
    correctIndex: 1,
    explanation: 'Aturan pola: a² + b² = hasil. 2² + 3² = 4 + 9 = 13. 3² + 4² = 9 + 16 = 25. Maka 4² + 5² = 16 + 25 = 41.'
  },
  {
    id: 'mp-5',
    title: 'Pola Deret Selang-Seling',
    sequenceDisplay: '5,  12,  7,  14,  9,  16,  [ ? ]',
    options: ['11', '18', '20', '21'],
    correctIndex: 0,
    explanation: 'Ada 2 barisan selang-seling: Suku ganjil (5, 7, 9, [11]) dan suku genap (12, 14, 16).'
  },
  {
    id: 'mp-6',
    title: 'Teka-Teki Sudut Segitiga',
    sequenceDisplay: 'Segitiga memiliki sudut 40° dan 75°. Berapakah sudut ketiganya [ ? ]',
    options: ['55°', '65°', '75°', '85°'],
    correctIndex: 1,
    explanation: 'Jumlah ketiga sudut segitiga selalu 180°. 180° - (40° + 75°) = 180° - 115° = 65°.'
  },
  {
    id: 'mp-7',
    title: 'Pola Faktorial Tersembunyi',
    sequenceDisplay: '1,  2,  6,  24,  120,  [ ? ]',
    options: ['240', '480', '720', '840'],
    correctIndex: 2,
    explanation: 'Perkalian bertingkat: ×2, ×3, ×4, ×5, maka berikutnya 120 × 6 = 720 (6!).'
  },
  {
    id: 'mp-8',
    title: 'Pola Roda Gigi Jam Logika',
    sequenceDisplay: 'Pukul 09.00 diputar 150° searah jarum jam menunjukkan pukul [ ? ]',
    options: ['11.00', '13.00 (1 siang)', '14.00 (2 siang)', '15.00 (3 sore)'],
    correctIndex: 2,
    explanation: 'Setiap 1 jam bernilai 30° (360° / 12). Maka 150° = 150 / 30 = 5 jam ke depan. 09.00 + 5 jam = 14.00.'
  },
  {
    id: 'mp-9',
    title: 'Pola Kubus Bilangan',
    sequenceDisplay: '1,  8,  27,  64,  [ ? ]',
    options: ['100', '125', '144', '216'],
    correctIndex: 1,
    explanation: 'Bilangan kubik: 1³, 2³, 3³, 4³, 5³ = 125.'
  },
  {
    id: 'mp-10',
    title: 'Pola Jumlah Digit Tertutup',
    sequenceDisplay: '19 (1+9=10), 28 (2+8=10), 37 (3+7=10), 46 (4+6=10), [ ? ]',
    options: ['54', '55', '63', '72'],
    correctIndex: 1,
    explanation: '55 memiliki jumlah digit 5 + 5 = 10.'
  }
];

// --- 9. EQUATION SOLVER STEPS ---
export const equationSolverScenarios = [
  {
    id: 'es-1',
    equationTitle: 'Selesaikan persamaan: 4(x - 3) + 6 = 22',
    currentStep: 'Persamaan awal: 4(x - 3) + 6 = 22',
    steps: [
      {
        prompt: 'Langkah 1: Apa tindakan terbaik pertama untuk membuka kurung?',
        options: [
          'Kalikan 4 ke dalam kurung menjadi: 4x - 12 + 6 = 22',
          'Bagi 22 dengan 6',
          'Kurangi kedua ruas dengan x',
          'Kuadratkan kedua ruas'
        ],
        correctIndex: 0,
        resultExpression: '4x - 6 = 22'
      },
      {
        prompt: 'Langkah 2: Setelah disederhanakan menjadi 4x - 6 = 22, apa langkah berikutnya?',
        options: [
          'Tambahkan 6 ke kedua ruas: 4x = 28',
          'Kurangi 6 dari kedua ruas: 4x = 16',
          'Bagi langsung dengan 6: 4x = 3.6',
          'Kalikan 4 dengan 22'
        ],
        correctIndex: 0,
        resultExpression: '4x = 28'
      },
      {
        prompt: 'Langkah 3: Dari 4x = 28, tentukan nilai x akhir!',
        options: [
          'x = 28 / 4 = 7',
          'x = 28 - 4 = 24',
          'x = 28 * 4 = 112',
          'x = 4 / 28 = 1/7'
        ],
        correctIndex: 0,
        resultExpression: 'x = 7 (Selesai!)'
      }
    ]
  },
  {
    id: 'es-2',
    equationTitle: 'Selesaikan pertidaksamaan: -3x + 9 ≤ 24',
    currentStep: 'Pertidaksamaan awal: -3x + 9 ≤ 24',
    steps: [
      {
        prompt: 'Langkah 1: Pindahkan konstanta +9 ke ruas kanan:',
        options: [
          '-3x ≤ 24 - 9  =>  -3x ≤ 15',
          '-3x ≤ 24 + 9  =>  -3x ≤ 33',
          'Bagi dulu dengan 9',
          'Ubah tanda menjadi ='
        ],
        correctIndex: 0,
        resultExpression: '-3x ≤ 15'
      },
      {
        prompt: 'Langkah 2: Bagi kedua ruas dengan bilangan negatif -3. Ingat aturan tanda pertidaksamaan!',
        options: [
          'Tanda berbalik menjadi ≥ : x ≥ 15 / (-3) => x ≥ -5',
          'Tanda tetap ≤ : x ≤ 15 / (-3) => x ≤ -5',
          'Tanda menjadi > : x > 5',
          'Tanda hilang'
        ],
        correctIndex: 0,
        resultExpression: 'x ≥ -5 (Selesai!)'
      }
    ]
  }
];

// --- 10. MIXED SUBJECT CHALLENGE ---
export const mixedSubjectMissions = [
  {
    id: 'msc-1',
    missionTitle: 'Mission: Server Room Power Budget Calculation',
    briefing: `You are the lead technician at an Indonesian cloud hosting facility. A new client from Singapore wants to install a server rack.

Read the English equipment specification below:
"Each high-density server unit consumes an average power of 450 Watts at peak load. The dedicated rack is supplied with a 220 Volt single-phase circuit breaker rated at 32 Amperes. The maximum continuous safe electrical load must not exceed 80% of the circuit breaker's rated capacity to avoid tripping."

Now solve the technical challenges based on the brief above:`,
    challenges: [
      {
        question: 'According to the brief, what is the maximum continuous safe load percentage for the circuit breaker?',
        options: ['50%', '75%', '80%', '100%'],
        correctIndex: 2,
        explanation: 'The text specifies: "must not exceed 80% of the circuit breaker\'s rated capacity".'
      },
      {
        question: 'Matematika: Berapakah kapasitas daya total aman maksimum dalam Watt? (P = V × I × 80% = 220 V × 32 A × 0,8)',
        options: ['4.500 Watt', '5.632 Watt', '7.040 Watt', '8.000 Watt'],
        correctIndex: 1,
        explanation: 'P_max = 220 × 32 × 0,8 = 7.040 × 0,8 = 5.632 Watt.'
      },
      {
        question: 'Matematika Terapan: Berapa jumlah server maksimal (450W per unit) yang aman dipasang tanpa melebihi batas 5.632 Watt?',
        options: ['10 unit', '12 unit', '15 unit', '18 unit'],
        correctIndex: 1,
        explanation: '5.632 / 450 ≈ 12,51 unit. Agar tidak melebihi kapasitas aman, dibulatkan ke bawah menjadi 12 unit.'
      }
    ]
  }
];

