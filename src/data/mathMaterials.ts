import { LearningMaterial } from '../types';

export const mathMaterials: LearningMaterial[] = [
  {
    id: 'mat-01',
    subject: 'mathematics',
    category: 'Algebra',
    title: 'Bilangan Berpangkat (Eksponen) & Bentuk Akar',
    description: 'Pahami sifat-sifat eksponen dan cara menyederhanakan bentuk akar dalam perhitungan teknik dan komputasi digital.',
    difficulty: 'Beginner',
    estimatedMinutes: 20,
    xpReward: 60,
    iconName: 'Hash',
    objectives: [
      'Menguasai 7 sifat utama operasi bilangan berpangkat bulat positif, negatif, dan pecahan.',
      'Menyederhanakan dan merasionalkan penyebut pecahan bentuk akar kuadrat.',
      'Menerapkan perhitungan eksponensial dalam notasi ilmiah dan kalkulasi kapasitas data (Byte, KB, MB, GB).'
    ],
    introduction: 'Dalam ilmu informatika dan kelistrikan, eksponen digunakan di mana-mana: mulai dari sistem biner (2^n), perhitungan frekuensi clock processor (GHz = 10^9 Hz), hingga konversi satuan mikrofarad (10^-6 F). Memahami operasi eksponen adalah pintu gerbang menuju pemikiran komputasional.',
    sections: [
      {
        title: 'Sifat-Sifat Utama Bilangan Berpangkat',
        content: 'Untuk a, b bilangan real dan m, n bilangan bulat:\n1. a^m × a^n = a^(m+n)\n2. a^m ÷ a^n = a^(m-n)\n3. (a^m)^n = a^(m×n)\n4. (a × b)^n = a^n × b^n\n5. (a / b)^n = a^n / b^n (dengan b ≠ 0)\n6. a^0 = 1 (untuk a ≠ 0)\n7. a^(-n) = 1 / (a^n)',
        formula: 'a^m \\times a^n = a^{m+n} \\quad \\text{dan} \\quad a^{-n} = \\frac{1}{a^n}',
        example: {
          question: 'Sederhanakan bentuk: (2^4 × 2^3) / 2^5',
          solution: 'Langkah 1: Kalikan pembilang -> 2^(4+3) = 2^7\nLangkah 2: Bagi dengan penyebut -> 2^(7-5) = 2^2\nLangkah 3: Hitung hasil akhir -> 2^2 = 4.',
          notes: 'Karena basisnya sama-sama 2, cukup operasikan pangkatnya.'
        }
      },
      {
        title: 'Merasionalkan Penyebut Bentuk Akar',
        content: 'Bentuk pecahan dengan penyebut akar, seperti a / √b, tidak lazim dalam penulisan standar. Kalikan pembilang dan penyebut dengan sekawannya.',
        formula: '\\frac{a}{\\sqrt{b}} = \\frac{a}{\\sqrt{b}} \\times \\frac{\\sqrt{b}}{\\sqrt{b}} = \\frac{a\\sqrt{b}}{b}',
        example: {
          question: 'Rasionalkan bentuk: 6 / √3',
          solution: '(6 / √3) × (√3 / √3) = (6√3) / 3 = 2√3.'
        }
      }
    ],
    practiceQuestions: [
      {
        id: 'mat-01-q1',
        question: 'Berapakah nilai sederhana dari (3^3 × 3^4) / 3^5?',
        options: ['3', '9', '27', '81'],
        correctIndex: 1,
        explanation: '3^(3 + 4 - 5) = 3^2 = 9.'
      },
      {
        id: 'mat-01-q2',
        question: 'Bentuk rasional dari 10 / √5 adalah...',
        options: ['2√5', '5√2', '10√5', '2'],
        correctIndex: 0,
        explanation: '10/√5 dikalikan (√5/√5) = 10√5 / 5 = 2√5.'
      }
    ],
    summary: [
      'Pangkat pada perkalian basis sama dijumlahkan, sedangkan pada pembagian dikurangkan.',
      'Bilangan berpangkat nol selalu bernilai 1 jika basisnya tidak nol.',
      'Merasionalkan akar dilakukan dengan mengalikan bentuk sekawan pada pembilang dan penyebut.'
    ],
    relatedIds: ['mat-02', 'mat-07']
  },
  {
    id: 'mat-02',
    subject: 'mathematics',
    category: 'Linear Equations',
    title: 'Persamaan & Pertidaksamaan Linear Satu Variabel',
    description: 'Menemukan nilai variabel yang tidak diketahui dalam masalah biaya operasional, batas beban mekanik, dan pemrograman logika.',
    difficulty: 'Beginner',
    estimatedMinutes: 20,
    xpReward: 65,
    iconName: 'Equal',
    objectives: [
      'Menyelesaikan persamaan bentuk ax + b = c dengan tepat.',
      'Menyelesaikan pertidaksamaan linear dan menggambarkan interval himpunan penyelesaiannya.',
      'Memahami aturan pembalikan tanda ketidaksamaan ketika dikali atau dibagi dengan bilangan negatif.'
    ],
    introduction: 'Ketika merancang sensor suhu atau sistem batas alarm overload, kita menentukan ambang batas matematika seperti: "Beban total tidak boleh melebihi 750 kg" (Total Load ≤ 750). Pertidaksamaan linear adalah fondasi logika validasi sistem.',
    sections: [
      {
        title: 'Langkah Penyelesaian Persamaan Linear',
        content: '1. Kumpulkan semua suku bervariabel di satu ruas (kiri) dan suku konstanta di ruas lain (kanan).\n2. Lakukan operasi hitung penjumlahan/pengurangan seimbang di kedua ruas.\n3. Bagi kedua ruas dengan koefisien variabel.',
        formula: 'ax + b = c \\iff ax = c - b \\iff x = \\frac{c - b}{a}',
        example: {
          question: 'Selesaikan persamaan: 5x - 8 = 2x + 7',
          solution: 'Langkah 1: Pindahkan 2x ke kiri -> 5x - 2x - 8 = 7\nLangkah 2: 3x - 8 = 7\nLangkah 3: Tambah kedua ruas dengan 8 -> 3x = 15\nLangkah 4: Bagi kedua ruas dengan 3 -> x = 5.'
        }
      },
      {
        title: 'Pertidaksamaan Linear & Aturan Negatif',
        content: 'Hati-hati! Jika kedua ruas pertidaksamaan dikalikan atau dibagi dengan bilangan negatif, ARAH TANDA PERTIDAKSAMAAN HARUS DIBALIK (contoh: < menjadi >, ≥ menjadi ≤).',
        example: {
          question: 'Selesaikan: -4x + 6 < 18',
          solution: '-4x < 18 - 6\n-4x < 12\nBagi kedua ruas dengan -4 (tanda berbalik):\nx > 12 / -4\nx > -3.'
        }
      }
    ],
    practiceQuestions: [
      {
        id: 'mat-02-q1',
        question: 'Nilai x yang memenuhi persamaan 4(x - 2) = 3x + 1 adalah...',
        options: ['7', '8', '9', '11'],
        correctIndex: 2,
        explanation: '4x - 8 = 3x + 1 -> 4x - 3x = 1 + 8 -> x = 9.'
      },
      {
        id: 'mat-02-q2',
        question: 'Himpunan penyelesaian dari -3x ≥ 15 adalah...',
        options: ['x ≥ -5', 'x ≤ -5', 'x ≥ 5', 'x ≤ 5'],
        correctIndex: 1,
        explanation: 'Ketika dibagi dengan bilangan negatif (-3), tanda ≥ berubah menjadi ≤. Maka x ≤ -5.'
      }
    ],
    summary: [
      'Persamaan linear memiliki pangkat tertinggi variabel 1.',
      'Perubahan tanda wajib dilakukan saat pertidaksamaan dibagi atau dikali dengan angka negatif.'
    ],
    relatedIds: ['mat-01', 'mat-03', 'mat-05']
  },
  {
    id: 'mat-03',
    subject: 'mathematics',
    category: 'Linear Equations',
    title: 'Sistem Persamaan Linear Dua Variabel (SPLDV)',
    description: 'Metode eliminasi dan substitusi untuk menentukan harga satuan barang, percampuran material, dan arus percabangan rangkaian listrik.',
    difficulty: 'Intermediate',
    estimatedMinutes: 22,
    xpReward: 70,
    iconName: 'Grid',
    objectives: [
      'Menyusun model matematika SPLDV dari permasalahan nyata bengkel atau toko.',
      'Menggunakan metode gabungan (eliminasi dan substitusi) secara efisien.',
      'Memeriksa kebenaran solusi dengan memasukkan kembali nilai variabel ke dalam persamaan asli.'
    ],
    introduction: 'Sebuah bengkel membeli 3 kaleng oli mesin dan 2 filter udara seharga Rp250.000. Keesokan harinya, mereka membeli 2 kaleng oli dan 4 filter seharga Rp220.000. Berapa harga 1 kaleng oli? Masalah seperti ini diselesaikan menggunakan SPLDV.',
    sections: [
      {
        title: 'Bentuk Umum SPLDV',
        content: 'a1*x + b1*y = c1\na2*x + b2*y = c2',
        formula: '\\begin{cases} a_1 x + b_1 y = c_1 \\\\ a_2 x + b_2 y = c_2 \\end{cases}',
        example: {
          question: 'Tentukan x dan y dari sistem:\n(1) 2x + 3y = 12\n(2) 4x - y = 10',
          solution: 'Langkah Eliminasi: Samakan koefisien x dengan mengalikan Persamaan (1) dengan 2:\n4x + 6y = 24\n4x - y = 10\n---------------- - (kurangkan)\n7y = 14  =>  y = 2.\n\nSubstitusi y = 2 ke Persamaan (2):\n4x - 2 = 10  =>  4x = 12  =>  x = 3.\nMaka solusinya: x = 3, y = 2.'
        }
      }
    ],
    practiceQuestions: [
      {
        id: 'mat-03-q1',
        question: 'Diberikan sistem persamaan x + y = 10 dan 2x - y = 5. Nilai x yang memenuhi adalah...',
        options: ['3', '5', '7', '8'],
        correctIndex: 1,
        explanation: 'Jumlahkan kedua persamaan: (x + y) + (2x - y) = 10 + 5 -> 3x = 15 -> x = 5.'
      }
    ],
    summary: [
      'Metode eliminasi menghilangkan salah satu variabel dengan menyamakan koefisiennya.',
      'Metode substitusi menggantikan variabel dengan ekspresi persamaan lainnya.'
    ],
    relatedIds: ['mat-02', 'mat-04', 'mat-10']
  },
  {
    id: 'mat-04',
    subject: 'mathematics',
    category: 'Algebra',
    title: 'Persamaan Kuadrat & Rumus ABC',
    description: 'Menentukan akar-akar persamaan kuadrat, pemfaktoran, nilai diskriminan, dan lintasan parabola proyektil.',
    difficulty: 'Intermediate',
    estimatedMinutes: 24,
    xpReward: 75,
    iconName: 'PieChart',
    objectives: [
      'Menentukan akar persamaan kuadrat dengan metode pemfaktoran dan Rumus ABC.',
      'Menghitung nilai diskriminan (D = b^2 - 4ac) untuk menentukan jenis akar.',
      'Menggambar sketsa kurva fungsi kuadrat dan titik optimumnya (puncak/maksimum).'
    ],
    introduction: 'Lintasan lemparan bola, lengkungan jembatan gantung, atau percepatan kendaraan bermotor sering kali dimodelkan oleh persamaan berderajat dua (kuadrat). Titik puncak kurva menentukan tinggi maksimum atau efisiensi bahan bakar terbaik.',
    sections: [
      {
        title: 'Bentuk Umum & Rumus ABC (Kuadratik)',
        content: 'Bentuk umum: ax^2 + bx + c = 0, dengan a ≠ 0.\nRumus ABC:\nx1,2 = (-b ± √(b^2 - 4ac)) / (2a)',
        formula: 'x_{1,2} = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}',
        example: {
          question: 'Tentukan akar-akar dari: x^2 - 5x + 6 = 0',
          solution: 'Faktorkan mencari 2 angka yang jika dikali = 6 dan dijumlah = -5:\nAngka tersebut adalah -2 dan -3.\n(x - 2)(x - 3) = 0\nMaka x1 = 2 dan x2 = 3.'
        }
      },
      {
        title: 'Arti Nilai Diskriminan (D)',
        content: 'D = b^2 - 4ac:\n- Jika D > 0: Memiliki dua akar real yang berbeda (memotong sumbu X di 2 titik).\n- Jika D = 0: Memiliki dua akar kembar/sama (menyinggung sumbu X).\n- Jika D < 0: Tidak memiliki akar real (grafik melayang di atas atau di bawah sumbu X).'
      }
    ],
    practiceQuestions: [
      {
        id: 'mat-04-q1',
        question: 'Nilai diskriminan dari persamaan x^2 - 6x + 9 = 0 adalah...',
        options: ['-36', '0', '18', '36'],
        correctIndex: 1,
        explanation: 'D = b^2 - 4ac = (-6)^2 - 4(1)(9) = 36 - 36 = 0 (memiliki akar kembar x = 3).'
      }
    ],
    summary: [
      'Rumus ABC dapat digunakan untuk menyelesaikan semua jenis persamaan kuadrat.',
      'Diskriminan D menentukan apakah grafik memotong sumbu X di dua titik, menyinggung, atau tidak memotong sama sekali.'
    ],
    relatedIds: ['mat-01', 'mat-03']
  },
  {
    id: 'mat-05',
    subject: 'mathematics',
    category: 'Sequences and Series',
    title: 'Barisan & Deret Aritmetika dalam Perencanaan Produksi',
    description: 'Menghitung suku ke-n dan jumlah total n suku pertama untuk estimasi kapasitas pabrik, penyusutan alat, dan cicilan bertingkat.',
    difficulty: 'Intermediate',
    estimatedMinutes: 20,
    xpReward: 70,
    iconName: 'ListOrdered',
    objectives: [
      'Menentukan beda (b) dan suku pertama (a) dari suatu barisan aritmetika.',
      'Menggunakan rumus suku ke-n: Un = a + (n - 1)b.',
      'Menghitung jumlah n suku pertama: Sn = n/2 (2a + (n - 1)b).'
    ],
    introduction: 'Sebuah lini perakitan SMK menargetkan produksi 100 unit pada bulan pertama, dan meningkat secara konsisten sebesar 20 unit setiap bulan berikutnya. Berapa unit yang diproduksi pada bulan ke-12? Berapa total seluruh unit dalam satu tahun? Pertanyaan ini dijawab dengan Deret Aritmetika.',
    sections: [
      {
        title: 'Rumus Suku ke-n (Un) dan Jumlah Deret (Sn)',
        content: 'Suku ke-n:\nUn = a + (n - 1)b\n\nJumlah n suku pertama:\nSn = (n / 2) × (a + Un) = (n / 2) × [2a + (n - 1)b]',
        formula: 'U_n = a + (n - 1)b \\quad \\text{dan} \\quad S_n = \\frac{n}{2}[2a + (n - 1)b]',
        example: {
          question: 'Diketahui suku pertama a = 5 dan beda b = 3. Tentukan suku ke-10 (U10)!',
          solution: 'U10 = 5 + (10 - 1) × 3 = 5 + 9 × 3 = 5 + 27 = 32.'
        }
      }
    ],
    practiceQuestions: [
      {
        id: 'mat-05-q1',
        question: 'Suatu barisan aritmetika memiliki a = 4 dan beda b = 5. Suku ke-7 barisan tersebut adalah...',
        options: ['29', '34', '39', '44'],
        correctIndex: 1,
        explanation: 'U7 = 4 + (7 - 1) × 5 = 4 + 30 = 34.'
      },
      {
        id: 'mat-05-q2',
        question: 'Jumlah 10 suku pertama dari deret 2 + 5 + 8 + 11 + ... adalah...',
        options: ['145', '155', '165', '175'],
        correctIndex: 1,
        explanation: 'a = 2, b = 3, n = 10. S10 = (10/2) * [2(2) + (9)(3)] = 5 * [4 + 27] = 5 * 31 = 155.'
      }
    ],
    summary: [
      'Barisan aritmetika memiliki selisih (beda) antarsuku yang konstan.',
      'Sangat berguna untuk pemodelan pertambahan produksi linear dan budgeting proyek.'
    ],
    relatedIds: ['mat-06', 'mat-09']
  },
  {
    id: 'mat-06',
    subject: 'mathematics',
    category: 'Sequences and Series',
    title: 'Barisan & Deret Geometri: Pertumbuhan & Peluruhan',
    description: 'Menghitung rasio pengali bertingkat, perkembangbiakan data traffic, dan depresiasi nilai mesin industri.',
    difficulty: 'Intermediate',
    estimatedMinutes: 20,
    xpReward: 70,
    iconName: 'TrendingUp',
    objectives: [
      'Menentukan rasio (r) barisan geometri: r = Un / U(n-1).',
      'Menggunakan rumus suku ke-n: Un = a * r^(n - 1).',
      'Menghitung jumlah n suku pertama untuk r > 1 dan r < 1.'
    ],
    introduction: 'Data traffic website yang sedang viral atau pembelahan sel virus sering melipatgandakan jumlahnya (berlipat dua, tiga, dst). Begitu pula harga jual mesin pabrik yang menyusut 10% setiap tahun. Masalah ini mengikuti kaidah Barisan Geometri.',
    sections: [
      {
        title: 'Rumus Barisan Geometri',
        content: 'Suku ke-n:\nUn = a × r^(n-1)\n\nJumlah Deret hingga suku ke-n (untuk r ≠ 1):\nSn = a(r^n - 1) / (r - 1)  [jika r > 1]\nSn = a(1 - r^n) / (1 - r)  [jika r < 1]',
        formula: 'U_n = a \\cdot r^{n-1} \\quad \\text{dan} \\quad S_n = \\frac{a(r^n - 1)}{r - 1}',
        example: {
          question: 'Tentukan suku ke-5 dari barisan: 3, 6, 12, 24, ...',
          solution: 'Suku pertama a = 3.\nRasio r = 6 / 3 = 2.\nU5 = 3 × 2^(5 - 1) = 3 × 2^4 = 3 × 16 = 48.'
        }
      }
    ],
    practiceQuestions: [
      {
        id: 'mat-06-q1',
        question: 'Suku pertama suatu barisan geometri adalah 2 dan rasionya 3. Nilai suku ke-4 adalah...',
        options: ['18', '24', '54', '162'],
        correctIndex: 2,
        explanation: 'U4 = 2 * (3)^(4-1) = 2 * 3^3 = 2 * 27 = 54.'
      }
    ],
    summary: [
      'Barisan geometri memiliki rasio pengali tetap antarsuku yang berdekatan.',
      'Pertumbuhan eksponensial lebih cepat melesat dibanding pertumbuhan aritmetika biasa.'
    ],
    relatedIds: ['mat-01', 'mat-05', 'mat-09']
  },
  {
    id: 'mat-07',
    subject: 'mathematics',
    category: 'Trigonometry',
    title: 'Perbandingan Trigonometri Segitiga Siku-siku',
    description: 'Definisi dasar Sinus, Cosinus, dan Tangen (Demi-Sami-Desa) serta sudut-sudut istimewa.',
    difficulty: 'Beginner',
    estimatedMinutes: 22,
    xpReward: 65,
    iconName: 'Triangle',
    objectives: [
      'Menghafal singkatan jitu De-Mi (Sin), Sa-Mi (Cos), De-Sa (Tan).',
      'Menghafal nilai trigonometri sudut istimewa: 0°, 30°, 45°, 60°, 90°.',
      'Menghitung panjang sisi yang tidak diketahui dengan teorema Pythagoras dan rumus trigonometri.'
    ],
    introduction: 'Trigonometri adalah bahasa matematika yang menghubungkan panjang sisi segitiga dengan besaran sudutnya. Bagi teknisi bangunan, mekanik mesin, maupun programmer game visual 3D, trigonometri dipakai untuk menghitung vektor gaya dan proyeksi grafis.',
    sections: [
      {
        title: 'Aturan Dasar De-Mi, Sa-Mi, De-Sa',
        content: 'Pada segitiga siku-siku dengan sudut acuan θ:\n- Sisi depan sudut (De)\n- Sisi samping sudut (Sa)\n- Sisi miring / hipotenusa (Mi)\n\nSin θ = Depan / Miring (De/Mi)\nCos θ = Samping / Miring (Sa/Mi)\nTan θ = Depan / Samping (De/Sa)',
        formula: '\\sin\\theta = \\frac{\\text{Depan}}{\\text{Miring}}, \\quad \\cos\\theta = \\frac{\\text{Samping}}{\\text{Miring}}, \\quad \\tan\\theta = \\frac{\\text{Depan}}{\\text{Samping}}',
        example: {
          question: 'Jika sisi depan = 3 cm dan sisi samping = 4 cm pada segitiga siku-siku, berapakah tan θ dan sin θ?',
          solution: 'Sisi miring = √(3^2 + 4^2) = √(9 + 16) = √25 = 5 cm.\nTan θ = 3 / 4 = 0,75.\nSin θ = 3 / 5 = 0,6.'
        }
      },
      {
        title: 'Tabel Sudut Istimewa',
        content: '- Sin 30° = 1/2, Cos 30° = 1/2 √3, Tan 30° = 1/3 √3\n- Sin 45° = 1/2 √2, Cos 45° = 1/2 √2, Tan 45° = 1\n- Sin 60° = 1/2 √3, Cos 60° = 1/2, Tan 60° = √3'
      }
    ],
    practiceQuestions: [
      {
        id: 'mat-07-q1',
        question: 'Nilai dari sin 30° + cos 60° adalah...',
        options: ['0', '1/2', '1', '√3'],
        correctIndex: 2,
        explanation: 'Sin 30° = 1/2 dan Cos 60° = 1/2. Maka 1/2 + 1/2 = 1.'
      }
    ],
    summary: [
      'Ingat rumus jitu: Sin = De/Mi, Cos = Sa/Mi, Tan = De/Sa.',
      'Teorema Pythagoras (a^2 + b^2 = c^2) selalu berlaku pada segitiga siku-siku.'
    ],
    relatedIds: ['mat-08', 'mat-10']
  },
  {
    id: 'mat-08',
    subject: 'mathematics',
    category: 'Trigonometry',
    title: 'Sudut Elevasi & Pengukuran Lapangan',
    description: 'Aplikasi klinometer untuk mengukur tinggi tiang pemancar, gedung, atau kemiringan instalasi pipa tanpa harus memanjat.',
    difficulty: 'Intermediate',
    estimatedMinutes: 20,
    xpReward: 70,
    iconName: 'Maximize2',
    objectives: [
      'Membedakan sudut elevasi (melihat ke atas) dan sudut depresi (melihat ke bawah).',
      'Menggunakan fungsi Tangen (Tan) untuk mengukur ketinggian obyek tak terjangkau.',
      'Memperhitungkan tinggi mata pengamat dalam kalkulasi akhir.'
    ],
    introduction: 'Seorang teknisi jaringan wireless SMK berdiri sejauh 20 meter dari tiang pemancar WiFi. Dengan klinometer, ia melihat puncak antena dengan sudut elevasi 45°. Jika tinggi pengamat 1,6 meter, berapa tinggi total tiang antena tersebut? Masalah ini dapat dipecahkan dengan mudah.',
    sections: [
      {
        title: 'Pemodelan Klinometer',
        content: 'Tinggi obyek (T) = (Jarak pengamat × Tan θ) + Tinggi mata pengamat\n\nKarena Tan 45° = 1, maka tinggi antena di atas mata pengamat sama persis dengan jaraknya berdiri!',
        formula: 'T = (x \\cdot \\tan\\theta) + h_{\\text{pengamat}}',
        example: {
          question: 'Jarak ke pohon = 15 m, sudut elevasi = 30°, tinggi mata = 1,5 m. Berapa tinggi pohon? (Gunakan tan 30° = 1/√3 ≈ 0,577)',
          solution: 'Tinggi di atas mata = 15 × 0,577 = 8,655 m.\nTinggi total pohon = 8,655 + 1,5 = 10,155 meter.'
        }
      }
    ],
    practiceQuestions: [
      {
        id: 'mat-08-q1',
        question: 'Siswa SMK mengamati puncak tiang bendera dengan sudut elevasi 45° dari jarak 12 meter. Jika tinggi mata siswa adalah 1,5 meter, maka tinggi tiang bendera adalah...',
        options: ['12,0 meter', '13,5 meter', '15,0 meter', '24,5 meter'],
        correctIndex: 1,
        explanation: 'Tan 45° = 1. Tinggi = (12 * 1) + 1,5 = 13,5 meter.'
      }
    ],
    summary: [
      'Gunakan Tangen untuk menghubungkan jarak horizontal (samping) dan tinggi vertikal (depan).',
      'Jangan lupa menambahkan tinggi mata pengamat ke hasil perkalian samping.'
    ],
    relatedIds: ['mat-07', 'mat-10']
  },
  {
    id: 'mat-09',
    subject: 'mathematics',
    category: 'Financial Mathematics',
    title: 'Bunga Tunggal, Bunga Majemuk & Angsuran SMK',
    description: 'Kalkulasi literasi finansial: simpanan bank, modal usaha bengkel, bunga pinjaman, dan perhitungan cicilan bulanan.',
    difficulty: 'Advanced',
    estimatedMinutes: 24,
    xpReward: 80,
    iconName: 'DollarSign',
    objectives: [
      'Menghitung Bunga Tunggal: B = M × i × t.',
      'Menghitung Modal Akhir Bunga Majemuk: Mn = M × (1 + i)^n.',
      'Memahami konsep Anuitas (Angsuran Pokok + Bunga) pada pembiayaan peralatan industri.'
    ],
    introduction: 'Lulusan SMK dipersiapkan tidak hanya menjadi pekerja terampil, tetapi juga wirausahawan (technopreneur). Menguasai matematika keuangan melindungi modal bisnismu dari kerugian akibat bunga kredit tersembunyi dan membantu menghitung titik impas investasi alat.',
    sections: [
      {
        title: 'Bunga Tunggal vs Bunga Majemuk',
        content: 'Bunga Tunggal dihitung hanya dari modal awal tetap setiap periode.\nBunga Majemuk (bunga-berbunga) menghitung bunga dari total saldo terakhir (modal + akumulasi bunga sebelumnya).',
        formula: 'M_n = M(1 + i)^n \\quad (\\text{Bunga Majemuk})',
        example: {
          question: 'Modal Rp10.000.000 disimpan di bank dengan bunga tunggal 6% per tahun. Berapa total saldo setelah 2 tahun?',
          solution: 'Bunga = 10.000.000 × 6% × 2 = Rp1.200.000.\nTotal saldo = 10.000.000 + 1.200.000 = Rp11.200.000.'
        }
      }
    ],
    practiceQuestions: [
      {
        id: 'mat-09-q1',
        question: 'Modal Rp5.000.000 dibungakan dengan bunga tunggal 10% per tahun. Berapa besar bunga yang didapat setelah 3 tahun?',
        options: ['Rp500.000', 'Rp1.000.000', 'Rp1.500.000', 'Rp2.000.000'],
        correctIndex: 2,
        explanation: 'Bunga = M * i * t = 5.000.000 * 0,10 * 3 = Rp1.500.000.'
      }
    ],
    summary: [
      'Bunga majemuk membuat tabungan bertumbuh jauh lebih pesat dalam jangka panjang.',
      'Selalu samakan satuan suku bunga (i) dengan satuan waktu (t) sebelum menghitung.'
    ],
    relatedIds: ['mat-05', 'mat-06']
  },
  {
    id: 'mat-10',
    subject: 'mathematics',
    category: 'Applied Mathematics',
    title: 'Operasi Matriks & Invers Ordo 2x2',
    description: 'Penjumlahan, perkalian matriks, determinan, dan invers matriks yang dipakai pada grafika komputer, transformasi koordinat, dan sistem persamaan.',
    difficulty: 'Advanced',
    estimatedMinutes: 24,
    xpReward: 85,
    iconName: 'Cpu',
    objectives: [
      'Melakukan operasi penjumlahan, pengurangan, dan perkalian dua matriks.',
      'Menghitung determinan matriks ordo 2x2 (ad - bc).',
      'Menentukan matriks invers ordo 2x2 untuk menyelesaikan persamaan sistem matriks.'
    ],
    introduction: 'Dalam game development dan animasi 3D, rotasi objek, translasi, dan skala dihitung menggunakan perkalian matriks. Begitu pula dalam enkripsi data modern (kriptografi Hill Cipher), matriks digunakan untuk mengacak pesan teks.',
    sections: [
      {
        title: 'Determinan & Invers Matriks Ordo 2x2',
        content: 'Jika Matriks A = [[a, b], [c, d]]:\nDeterminan: det(A) = ad - bc\nInvers: A^(-1) = (1 / det(A)) × [[d, -b], [-c, a]]\n(dengan syarat det(A) ≠ 0).',
        formula: 'A^{-1} = \\frac{1}{ad - bc} \\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix}',
        example: {
          question: 'Tentukan determinan dari A = [[4, 2], [3, 2]]',
          solution: 'det(A) = (4 × 2) - (2 × 3) = 8 - 6 = 2.'
        }
      }
    ],
    practiceQuestions: [
      {
        id: 'mat-10-q1',
        question: 'Jika matriks B = [[5, 3], [2, 1]], maka nilai determinan det(B) adalah...',
        options: ['-1', '1', '11', '13'],
        correctIndex: 0,
        explanation: 'det(B) = (5 * 1) - (3 * 2) = 5 - 6 = -1.'
      }
    ],
    summary: [
      'Perkalian dua matriks dilakukan dengan mengalikan baris matriks pertama dengan kolom matriks kedua.',
      'Matriks yang memiliki determinan = 0 disebut matriks singular dan tidak memiliki invers.'
    ],
    relatedIds: ['mat-03', 'mat-04']
  },
  {
    id: 'mat-11',
    subject: 'mathematics',
    category: 'Statistics',
    title: 'Statistika: Penyajian Data & Diagram Frekuensi',
    description: 'Membaca dan membuat tabel distribusi frekuensi, histogram, poligon, serta ogive untuk laporan kendali mutu (Quality Control).',
    difficulty: 'Intermediate',
    estimatedMinutes: 20,
    xpReward: 65,
    iconName: 'BarChart',
    objectives: [
      'Menentukan jangkauan (range), banyak kelas (aturan Sturgess), dan panjang kelas.',
      'Membaca histogram dan diagram lingkaran (pie chart) dalam laporan produksi.',
      'Menginterpretasikan data distribusi frekuensi kumulatif.'
    ],
    introduction: 'Dalam proses manufaktur SMK, seorang teknisi Quality Control mengukur diameter 100 baut yang diproduksi. Hasil pengukuran disajikan dalam histogram untuk melihat apakah terdapat kecenderungan cacat produksi melebihi batas toleransi.',
    sections: [
      {
        title: 'Komponen Distribusi Frekuensi',
        content: '1. Batas Kelas (Class Limit): Nilai ujung bawah dan ujung atas suatu kelas interval.\n2. Tepi Kelas (Class Boundary): Tepi bawah = batas bawah - 0,5 ; Tepi atas = batas atas + 0,5.\n3. Titik Tengah (Midpoint): xi = 1/2 (batas bawah + batas atas).'
      }
    ],
    practiceQuestions: [
      {
        id: 'mat-11-q1',
        question: 'Pada kelas interval 40 - 49, berapakah tepi bawah kelas tersebut?',
        options: ['39,0', '39,5', '40,0', '40,5'],
        correctIndex: 1,
        explanation: 'Tepi bawah = Batas bawah - 0,5 = 40 - 0,5 = 39,5.'
      }
    ],
    summary: [
      'Statistika deskriptif membantu mengubah sekumpulan data mentah menjadi informasi visual yang mudah dipahami.',
      'Histogram menampilkan frekuensi data dalam bentuk batang yang saling berimpit berdasarkan tepi kelas.'
    ],
    relatedIds: ['mat-12', 'mat-13']
  },
  {
    id: 'mat-12',
    subject: 'mathematics',
    category: 'Statistics',
    title: 'Ukuran Pemusatan Data: Mean, Median, Modus',
    description: 'Menghitung rata-rata hitung, nilai tengah, dan nilai yang paling sering muncul pada data tunggal maupun data kelompok.',
    difficulty: 'Intermediate',
    estimatedMinutes: 22,
    xpReward: 70,
    iconName: 'Activity',
    objectives: [
      'Menghitung Mean (rata-rata) data tunggal dan data berbobot.',
      'Menentukan letak Median (kuartil tengah) pada urutan data.',
      'Menemukan Modus (data dengan frekuensi tertinggi).'
    ],
    introduction: 'Berapa rata-rata konsumsi bahan bakar armada kendaraan operasional? Berapa waktu tunggu rata-rata (latency) respon server? Mean, Median, dan Modus adalah tiga indikator utama untuk merangkum performa suatu sistem.',
    sections: [
      {
        title: 'Rumus Dasar Mean Data Tunggal',
        content: 'Mean (x̄) = (x1 + x2 + ... + xn) / n = Σx / n\n\nUntuk data berfrekuensi:\nMean (x̄) = Σ(fi × xi) / Σfi',
        formula: '\\bar{x} = \\frac{\\sum f_i x_i}{\\sum f_i}',
        example: {
          question: 'Hitung nilai rata-rata dari: 70, 80, 85, 90, 75.',
          solution: 'Jumlah total = 70 + 80 + 85 + 90 + 75 = 400.\nBanyaknya data n = 5.\nMean = 400 / 5 = 80.'
        }
      }
    ],
    practiceQuestions: [
      {
        id: 'mat-12-q1',
        question: 'Diberikan data nilai uji kompetensi: 6, 7, 8, 8, 8, 9, 10. Modus dari data tersebut adalah...',
        options: ['7', '8', '8,5', '9'],
        correctIndex: 1,
        explanation: 'Angka 8 muncul sebanyak 3 kali (terbanyak), sehingga modusnya adalah 8.'
      }
    ],
    summary: [
      'Mean sensitif terhadap nilai ekstrem (pencilan/outlier).',
      'Median lebih tahan terhadap nilai ekstrem karena hanya melihat posisi tengah.',
      'Modus menunjukkan kecenderungan paling populer dari data.'
    ],
    relatedIds: ['mat-11', 'mat-13']
  },
  {
    id: 'mat-13',
    subject: 'mathematics',
    category: 'Probability',
    title: 'Peluang, Permutasi & Kombinasi',
    description: 'Menghitung kemungkinan keberhasilan pengujian sistem, variasi kode password sandi, dan peluang penarikan sampel.',
    difficulty: 'Advanced',
    estimatedMinutes: 24,
    xpReward: 80,
    iconName: 'Shuffle',
    objectives: [
      'Menghitung nilai faktorial n! = n × (n - 1) × ... × 1.',
      'Membedakan Permutasi (urutan diperhatikan: ranking, PIN sandi) dan Kombinasi (urutan bebas: tim kerja).',
      'Menghitung peluang suatu kejadian P(A) = n(A) / n(S).'
    ],
    introduction: 'Mengapa kombinasi password 6 digit angka sangat mudah ditebak dibanding kombinasi huruf dan angka? Teori Peluang dan Kaidah Pencacahan memberikan dasar matematis bagi analisis keamanan siber dan pengujian acak keandalan mesin.',
    sections: [
      {
        title: 'Permutasi vs Kombinasi',
        content: 'Permutasi (Urutan penting: AB ≠ BA):\nP(n, r) = n! / (n - r)!\n\nKombinasi (Urutan tidak penting: AB = BA):\nC(n, r) = n! / [r! × (n - r)!]',
        formula: 'P(n, r) = \\frac{n!}{(n - r)!} \\quad \\text{dan} \\quad C(n, r) = \\frac{n!}{r!(n - r)!}',
        example: {
          question: 'Dari 5 teknisi terbaik SMK, akan dipilih 3 orang untuk membentuk tim delegasi lomba. Berapa banyak cara pemilihan tim tersebut?',
          solution: 'Karena urutan tidak penting, gunakan kombinasi:\nC(5, 3) = 5! / (3! × 2!) = (5 × 4 × 3!) / (3! × 2 × 1) = 20 / 2 = 10 cara.'
        }
      }
    ],
    practiceQuestions: [
      {
        id: 'mat-13-q1',
        question: 'Sebuah koin seimbang dilempar satu kali. Peluang munculnya sisi gambar adalah...',
        options: ['1/4', '1/3', '1/2', '1'],
        correctIndex: 2,
        explanation: 'Ruang sampel S = {Angka, Gambar}, n(S) = 2. Kejadian gambar n(A) = 1. P(A) = 1/2.'
      },
      {
        id: 'mat-13-q2',
        question: 'Berapakah nilai dari 5! (5 faktorial)?',
        options: ['20', '60', '120', '720'],
        correctIndex: 2,
        explanation: '5! = 5 * 4 * 3 * 2 * 1 = 120.'
      }
    ],
    summary: [
      'Permutasi memperhatikan posisi atau urutan jabatan/sandi.',
      'Kombinasi hanya memperhatikan anggota kelompok tanpa memandang urutan penyebutan.',
      'Peluang selalu bernilai antara 0 (mustahil) sampai 1 (pasti terjadi).'
    ],
    relatedIds: ['mat-11', 'mat-12']
  },
  {
    id: 'mat-14',
    subject: 'mathematics',
    category: 'Geometry',
    title: 'Geometri Dimensi Tiga: Jarak & Sudut Ruang',
    description: 'Menghitung jarak titik ke garis, titik ke bidang, dan volume material pada kubus, balok, dan prisma teknik.',
    difficulty: 'Intermediate',
    estimatedMinutes: 22,
    xpReward: 75,
    iconName: 'Box',
    objectives: [
      'Menentukan panjang diagonal bidang dan diagonal ruang kubus/balok.',
      'Menghitung jarak tegak lurus dari titik sudut ke bidang ruang.',
      'Menerapkan geometri ruang dalam konstruksi rangka baja dan casing server.'
    ],
    introduction: 'Dalam merancang casing komputer rackmount atau struktur rangka atap bengkel, pemahaman ruang tiga dimensi sangat penting agar komponen dapat terpasang presisi tanpa berbenturan dengan dinding kabinet.',
    sections: [
      {
        title: 'Diagonal Bidang & Ruang Kubus',
        content: 'Untuk kubus dengan panjang rusuk s:\n- Panjang diagonal sisi/bidang = s√2\n- Panjang diagonal ruang = s√3\n- Luas permukaan = 6 × s^2\n- Volume = s^3',
        formula: 'd_{\\text{bidang}} = s\\sqrt{2}, \\quad d_{\\text{ruang}} = s\\sqrt{3}',
        example: {
          question: 'Sebuah wadah kontroler berbentuk kubus memiliki panjang rusuk 10 cm. Berapakah panjang kabel lurus terjauh yang menghubungkan dua sudut ruang yang berseberangan?',
          solution: 'Panjang terjauh adalah diagonal ruang = s√3 = 10√3 cm ≈ 17,32 cm.'
        }
      }
    ],
    practiceQuestions: [
      {
        id: 'mat-14-q1',
        question: 'Kubus dengan panjang rusuk 8 cm memiliki panjang diagonal sisi sebesar...',
        options: ['8 cm', '8√2 cm', '8√3 cm', '16 cm'],
        correctIndex: 1,
        explanation: 'Diagonal sisi kubus memiliki rumus s√2, sehingga panjangnya 8√2 cm.'
      }
    ],
    summary: [
      'Diagonal bidang adalah garis diagonal pada satu permukaan datar kubus.',
      'Diagonal ruang menghubungkan dua sudut yang menyeberangi inti ruang tiga dimensi.'
    ],
    relatedIds: ['mat-01', 'mat-07']
  },
  {
    id: 'mat-15',
    subject: 'mathematics',
    category: 'Applied Mathematics',
    title: 'Aplikasi Matematika Kejuruan: Rasio & Skala Gambar Teknik',
    description: 'Menerapkan perbandingan senilai dan berbalik nilai pada roda gigi (gear ratio), pembacaan skala gambar arsitektur CAD, dan konsumsi daya.',
    difficulty: 'Beginner',
    estimatedMinutes: 18,
    xpReward: 60,
    iconName: 'Tool',
    objectives: [
      'Menghitung ukuran nyata dari cetak biru (blueprint) menggunakan skala 1 : N.',
      'Menghitung perbandingan senilai (misal: jumlah bahan bakar vs jarak tempuh).',
      'Menghitung perbandingan berbalik nilai (misal: rasio gigi roda transmisi vs RPM putaran mesin).'
    ],
    introduction: 'Seorang drafter teknik membaca denah instalasi kabel jaringan berskala 1 : 200. Jika panjang jalur kabel pada denah adalah 8,5 cm, berapa panjang kabel fisik yang harus dipesan? Rasio dan proporsi adalah alat hitung harian di bengkel.',
    sections: [
      {
        title: 'Perhitungan Skala Cetak Biru (Blueprint)',
        content: 'Skala = Jarak pada Gambar / Jarak Sebenarnya\nJarak Sebenarnya = Jarak pada Gambar × Angka Skala\n\nPerbandingan Berbalik Nilai:\nPada roda gigi mesin: (Gigi 1 × RPM 1) = (Gigi 2 × RPM 2).\nSemakin banyak jumlah gigi roda pengikut, semakin lambat putarannya namun semakin besar torsinya.',
        example: {
          question: 'Skala 1 : 200, panjang pada kertas = 8,5 cm. Hitung jarak nyata dalam meter!',
          solution: 'Jarak nyata = 8,5 cm × 200 = 1.700 cm = 17 meter.'
        }
      }
    ],
    practiceQuestions: [
      {
        id: 'mat-15-q1',
        question: 'Pada gambar teknik dengan skala 1 : 50, sebatang pipa digambar sepanjang 6 cm. Panjang pipa sebenarnya adalah...',
        options: ['1,2 meter', '3 meter', '30 meter', '300 meter'],
        correctIndex: 1,
        explanation: 'Panjang sebenarnya = 6 cm * 50 = 300 cm = 3 meter.'
      }
    ],
    summary: [
      'Skala mempermudah penyajian obyek besar ke dalam media kertas atau monitor.',
      'Perbandingan senilai bertambah seirama, sedangkan perbandingan berbalik nilai bergerak berlawanan arah.'
    ],
    relatedIds: ['mat-02', 'mat-07']
  }
];

