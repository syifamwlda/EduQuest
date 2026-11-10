import { LearningMaterial } from '../types';

export const englishMaterials: LearningMaterial[] = [
  {
    id: 'eng-01',
    subject: 'english',
    category: 'Grammar Fundamentals',
    title: 'Parts of Speech in Technical Context',
    description: 'Pahami 8 kelas kata dasar dalam bahasa Inggris dan penggunaannya dalam instruksi kerja serta manual SMK.',
    difficulty: 'Beginner',
    estimatedMinutes: 15,
    xpReward: 50,
    iconName: 'Layers',
    objectives: [
      'Mengidentifikasi 8 jenis Parts of Speech (Noun, Verb, Adjective, Adverb, Pronoun, Preposition, Conjunction, Interjection).',
      'Mengenali fungsi kata dalam kalimat petunjuk teknis atau SOP industri.',
      'Menyusun kalimat sederhana menggunakan kombinasi part of speech yang tepat.'
    ],
    introduction: 'Dalam dunia industri dan teknologi, instruksi kerja (Standard Operating Procedure) dan buku panduan perangkat ditulis dalam bahasa Inggris dengan struktur yang baku. Memahami kelas kata (Parts of Speech) adalah fondasi utama agar kamu tidak salah mengartikan istilah teknis.',
    sections: [
      {
        title: '1. Noun (Kata Benda) & Verb (Kata Kerja)',
        content: 'Noun merujuk pada alat, komponen, atau konsep (contoh: resistor, wrench, software). Verb menunjukkan aksi kerja atau proses operasi (contoh: connect, calculate, inspect, execute).',
        example: {
          question: 'Analisis kalimat: "The technician inspects the circuit board carefully."',
          solution: '"Technician" = Noun, "inspects" = Verb, "the circuit board" = Noun phrase, "carefully" = Adverb.',
          notes: 'Perhatikan bahwa inspects mendapat akhiran -s karena subjeknya tunggal (The technician).'
        },
        vocabulary: [
          { term: 'Circuit', meaning: 'Rangkaian listrik/elektronika', context: 'The circuit must be grounded before testing.' },
          { term: 'Calibrate', meaning: 'Mengalibrasi/mengukur ketepatan', context: 'We calibrate the sensor every morning.' }
        ]
      },
      {
        title: '2. Adjective & Adverb dalam Deskripsi Spesifikasi',
        content: 'Adjective menjelaskan sifat benda (contoh: high-voltage, portable, durable). Adverb menjelaskan bagaimana aksi kerja dilakukan (contoh: securely, efficiently, gradually).',
        keyPoints: [
          'Adjective diletakkan sebelum noun: "a durable cable".',
          'Adverb biasanya berakhiran -ly dan menjelaskan verb: "tighten the bolt securely".'
        ]
      }
    ],
    practiceQuestions: [
      {
        id: 'eng-01-q1',
        question: 'Dalam kalimat: "The mechanic carefully repaired the transmission yesterday", kata "carefully" termasuk kelas kata apa?',
        options: ['Adjective', 'Adverb', 'Verb', 'Noun'],
        correctIndex: 1,
        explanation: '"Carefully" adalah Adverb (kata keterangan cara) yang menjelaskan bagaimana kata kerja "repaired" dilakukan.'
      },
      {
        id: 'eng-01-q2',
        question: 'Pilihlah Noun (kata benda) teknis yang tepat untuk melengkapi: "Always wear safety _______ inside the workshop."',
        options: ['goggles', 'safely', 'protect', 'wearing'],
        correctIndex: 0,
        explanation: '"Goggles" (kacamata pengaman) adalah Noun yang dibutuhkan sebagai objek pelindung diri.'
      }
    ],
    summary: [
      'Parts of Speech adalah 8 pilar dasar pembentukan kalimat bahasa Inggris.',
      'Noun dan Verb adalah inti kalimat teknis, sementara Adjective dan Adverb memberikan spesifikasi dan cara kerja yang presisi.'
    ],
    relatedIds: ['eng-02', 'eng-06']
  },
  {
    id: 'eng-02',
    subject: 'english',
    category: 'Grammar Fundamentals',
    title: 'Simple Present Tense for Workshop SOP & Facts',
    description: 'Kuasai pola Simple Present Tense untuk menyatakan fakta ilmiah, fungsi alat, dan instruksi rutin bengkel/laboratorium.',
    difficulty: 'Beginner',
    estimatedMinutes: 18,
    xpReward: 60,
    iconName: 'Clock',
    objectives: [
      'Memahami fungsi Simple Present Tense untuk kebiasaan dan fakta umum.',
      'Menerapkan aturan verb + s/es pada subjek orang ketiga tunggal (He/She/It/The machine).',
      'Membuat kalimat positif, negatif, dan tanya dalam konteks kerja kejuruan.'
    ],
    introduction: 'Simple Present Tense digunakan untuk mendeskripsikan spesifikasi mesin, prosedur rutin harian, serta kebenaran ilmiah yang selalu berlaku. Contoh: "Water boils at 100 degrees Celsius" atau "This server processes 1,000 requests per second."',
    sections: [
      {
        title: 'Rumus Dasar Simple Present Tense',
        content: 'Kalimat Verbal:\n(+) Subject + Verb 1 (s/es) + Object/Complement\n(-) Subject + do/does not + Verb 1 + Object\n(?) Do/Does + Subject + Verb 1?\n\nCatatan: Gunakan Does/Verb+s hanya untuk He, She, It, atau Singular Noun.',
        formula: 'S + V1(s/es) + O / C',
        example: {
          question: 'Ubah ke kalimat negatif: "The electric motor generates high torque."',
          solution: '"The electric motor does not generate high torque."',
          notes: 'Ketika ada auxiliary "does not", kata kerja kembali ke bentuk dasar "generate" tanpa akhiran -s.'
        }
      },
      {
        title: 'Aplikasi dalam Prosedur Kejuruan',
        content: 'Dalam bidang IT maupun Teknik Mesin, dokumentasi teknis mendeskripsikan apa yang terjadi saat tombol ditekan.',
        keyPoints: [
          'The router assigns IP addresses automatically.',
          'The thermostat regulates engine temperature.',
          'Technicians wear anti-static wristbands before handling microchips.'
        ]
      }
    ],
    practiceQuestions: [
      {
        id: 'eng-02-q1',
        question: 'Pilihlah bentuk kata kerja yang benar: "The cooling fan _______ automatically when the CPU temperature reaches 70°C."',
        options: ['activate', 'activates', 'activating', 'activated'],
        correctIndex: 1,
        explanation: 'Subjek "The cooling fan" adalah singular (it), sehingga kata kerja memerlukan akhiran -s ("activates").'
      },
      {
        id: 'eng-02-q2',
        question: 'Bentuk kalimat tanya yang benar untuk: "They inspect the backup servers daily" adalah...',
        options: [
          'Does they inspect the backup servers daily?',
          'Do they inspect the backup servers daily?',
          'Are they inspect the backup servers daily?',
          'Have they inspect the backup servers daily?'
        ],
        correctIndex: 1,
        explanation: 'Untuk subjek "They", kata bantu tanya yang benar dalam Simple Present adalah "Do".'
      }
    ],
    summary: [
      'Gunakan Simple Present Tense untuk fakta teknis, rutinitas, dan spesifikasi alat.',
      'Perhatikan akhiran -s/-es pada kata kerja dengan subjek tunggal.'
    ],
    relatedIds: ['eng-01', 'eng-03', 'eng-06']
  },
  {
    id: 'eng-03',
    subject: 'english',
    category: 'Grammar Fundamentals',
    title: 'Simple Past Tense for Incident & Maintenance Reports',
    description: 'Pelajari penulisan laporan kejadian (troubleshooting log) dan laporan perbaikan menggunakan Simple Past Tense.',
    difficulty: 'Intermediate',
    estimatedMinutes: 20,
    xpReward: 65,
    iconName: 'History',
    objectives: [
      'Membedakan Regular dan Irregular Verbs bentuk lampau.',
      'Menulis laporan insiden atau riwayat perawatan (maintenance history).',
      'Menggunakan kata keterangan waktu lampau (yesterday, last week, two hours ago).'
    ],
    introduction: 'Ketika terjadi gangguan teknis atau setelah menyelesaikan perbaikan (troubleshooting), teknisi wajib mengisi log book atau tiket laporan. Segala kegiatan yang telah selesai harus ditulis dalam Simple Past Tense.',
    sections: [
      {
        title: 'Pola Kalimat Simple Past',
        content: 'Bentuk verbal menggunakan Verb 2 untuk kalimat positif, dan "did not + Verb 1" untuk kalimat negatif.\nContoh regular: replace -> replaced, test -> tested.\nContoh irregular: write -> wrote, find -> found, shut -> shut.',
        formula: 'S + V2 + O / S + did not + V1 + O',
        example: {
          question: 'Buat laporan maintenance: (Yesterday / we / replace / the worn-out gear).',
          solution: 'Yesterday, we replaced the worn-out gear.',
          notes: 'Replace adalah regular verb yang cukup ditambah -d menjadi replaced.'
        }
      }
    ],
    practiceQuestions: [
      {
        id: 'eng-03-q1',
        question: '"The server _______ unexpectedly at 02:00 AM due to a sudden power outage."',
        options: ['crash', 'crashed', 'crashes', 'crashing'],
        correctIndex: 1,
        explanation: 'Kejadian terjadi pada jam 02:00 lampau, maka digunakan kata kerja lampau "crashed".'
      }
    ],
    summary: [
      'Simple Past Tense adalah standar bahasa penulisan work log dan laporan troubleshooting teknis.',
      'Pastikan mengenali bentuk V2 baik yang beraturan (-ed) maupun yang tidak beraturan.'
    ],
    relatedIds: ['eng-02', 'eng-05']
  },
  {
    id: 'eng-04',
    subject: 'english',
    category: 'Grammar Fundamentals',
    title: 'Present Continuous Tense in Progress Monitoring',
    description: 'Mengungkapkan proses kerja yang sedang berjalan secara real-time pada dashboard sistem atau lini produksi.',
    difficulty: 'Beginner',
    estimatedMinutes: 15,
    xpReward: 50,
    iconName: 'Activity',
    objectives: [
      'Memahami struktur To Be (is/am/are) + Verb-ing.',
      'Menggambarkan status pekerjaan yang sedang berlangsung saat ini.',
      'Membedakan kata kerja statif (stative verbs) yang tidak lazim menggunakan continuous form.'
    ],
    introduction: 'Dalam memonitor server, mesin pabrik, atau perakitan sistem, status "in progress" sering dilaporkan dalam Present Continuous: "The system is updating the database now" atau "The technician is soldering the connector."',
    sections: [
      {
        title: 'Formula Present Continuous',
        content: '(+) S + is/am/are + V-ing\n(-) S + is/am/are + not + V-ing\n(?) Is/Am/Are + S + V-ing?',
        formula: 'S + is/am/are + V-ing',
        keyPoints: [
          'I -> am',
          'He, She, It, Singular -> is',
          'You, We, They, Plural -> are'
        ]
      }
    ],
    practiceQuestions: [
      {
        id: 'eng-04-q1',
        question: '"Please wait a minute. The software _______ the latest security patch right now."',
        options: ['download', 'downloads', 'is downloading', 'was downloading'],
        correctIndex: 2,
        explanation: 'Keterangan "right now" menunjukkan aktivitas yang sedang berlangsung sekarang, menggunakan "is downloading".'
      }
    ],
    summary: [
      'Present Continuous Tense menunjukkan kegiatan yang sedang terjadi saat ini.',
      'Sangat penting saat memberikan update langsung kepada supervisor atau klien.'
    ],
    relatedIds: ['eng-02', 'eng-05']
  },
  {
    id: 'eng-05',
    subject: 'english',
    category: 'Grammar Fundamentals',
    title: 'Passive Voice in Industrial & Technical Manuals',
    description: 'Pelajari Passive Voice yang mendominasi lebih dari 70% teks manual teknis, SOP, dan jurnal rekayasa.',
    difficulty: 'Intermediate',
    estimatedMinutes: 22,
    xpReward: 75,
    iconName: 'Repeat',
    objectives: [
      'Memahami mengapa Passive Voice diutamakan dalam teks teknis (fokus pada proses dan objek, bukan pelakunya).',
      'Mengubah kalimat aktif menjadi pasif dengan rumus Subject + Be + V3 (Past Participle).',
      'Membaca dan menulis instruksi keselamatan kerja pasif.'
    ],
    introduction: 'Dalam manual teknis pabrik atau buku pedoman servis kendaraan, kamu akan jarang menemukan "Someone must press the button". Melainkan: "The emergency button must be pressed immediately." Passive voice membuat kalimat terdengar objektif, profesional, dan fokus pada tindakan.',
    sections: [
      {
        title: 'Rumus Utama Passive Voice',
        content: 'Kunci Passive Voice adalah TO BE + V3 (Past Participle).\n\n1. Simple Present Passive:\nS + is/am/are + V3\nContoh: The oil is changed every 5,000 km.\n\n2. Simple Past Passive:\nS + was/were + V3\nContoh: The motherboard was damaged by power surge.\n\n3. Modal Passive:\nS + modal (must/should/can) + be + V3\nContoh: Helmets must be worn at all times.',
        formula: 'Object (Active) -> Subject (Passive) + Be + V3 + (by Agent)',
        example: {
          question: 'Ubah menjadi kalimat pasif: "The engineer tested the hydraulic brake system."',
          solution: '"The hydraulic brake system was tested by the engineer."',
          notes: 'Karena kalimat aktif berupa Simple Past ("tested"), maka bentuk pasifnya menggunakan was/were + V3 ("was tested").'
        }
      }
    ],
    practiceQuestions: [
      {
        id: 'eng-05-q1',
        question: 'Pilihlah bentuk pasif yang tepat: "Before disassembling, the power supply cord _______ disconnected."',
        options: ['must', 'must be', 'must is', 'must being'],
        correctIndex: 1,
        explanation: 'Setelah modal verb seperti "must", bentuk pasif membutuhkan "be + V3", sehingga menjadi "must be disconnected".'
      },
      {
        id: 'eng-05-q2',
        question: 'Kalimat "The network configuration was updated yesterday" memiliki subjek kalimat pasif yang dikenai tindakan. Apa kata kerja utamanya?',
        options: ['network', 'configuration', 'was', 'updated'],
        correctIndex: 3,
        explanation: '"Updated" adalah Past Participle (V3) yang merupakan inti dari aksi pasif tersebut.'
      }
    ],
    summary: [
      'Passive Voice fokus pada apa yang dikerjakan, bukan siapa yang mengerjakan.',
      'Struktur dasar: To Be disesuaikan dengan tenses + Verb 3.'
    ],
    relatedIds: ['eng-02', 'eng-03', 'eng-08']
  },
  {
    id: 'eng-06',
    subject: 'english',
    category: 'Functional Texts',
    title: 'Procedure Text: User Manuals & Workshop Guides',
    description: 'Pelajari struktur teks prosedur, kata perintah (imperatives), serta sequence markers dalam buku petunjuk alat.',
    difficulty: 'Intermediate',
    estimatedMinutes: 20,
    xpReward: 70,
    iconName: 'FileText',
    objectives: [
      'Mengidentifikasi Generic Structure teks prosedur: Goal, Materials/Tools, and Steps.',
      'Menggunakan kata kerja imperatif (Action Verbs) seperti Connect, Insert, Remove, Tighten.',
      'Menggunakan Sequence Adverbs (First, Next, Then, After that, Finally) dengan runtut.'
    ],
    introduction: 'Buku panduan merakit PC, mengoperasikan mesin bubut CNC, atau membongkar silinder motor adalah contoh nyata dari Procedure Text. Setiap lulusan SMK harus mampu membaca dan menyusun panduan langkah kerja yang runtut dan tidak membingungkan.',
    sections: [
      {
        title: 'Generic Structure & Language Features',
        content: '1. Goal / Aim: Menyatakan tujuan panduan (e.g., How to Install RAM on a Laptop).\n2. Tools & Materials: Daftar alat yang dibutuhkan (e.g., Phillips screwdriver, anti-static wrist strap, DDR4 RAM module).\n3. Steps / Methods: Urutan instruksi terperinci menggunakan kata kerja imperatif.',
        keyPoints: [
          'Gunakan Imperative Sentences: "Tighten the screw firmly", bukan "You must tighten".',
          'Gunakan Temporal Conjunctions: "First", "Secondly", "Subsequently", "Finally".'
        ]
      }
    ],
    practiceQuestions: [
      {
        id: 'eng-06-q1',
        question: 'Dalam sebuah teks manual: "_______, align the CPU notch with the socket indicator. Then, press down gently." Kata sambung urutan pertama yang tepat adalah...',
        options: ['Finally', 'First', 'Meanwhile', 'Although'],
        correctIndex: 1,
        explanation: '"First" adalah penanda urutan pertama (sequence marker) dalam langkah kerja.'
      }
    ],
    summary: [
      'Procedure text memandu pembaca menyelesaikan pekerjaan teknis selangkah demi selangkah.',
      'Gunakan kata kerja aksi langsung tanpa subjek berlebihan.'
    ],
    relatedIds: ['eng-01', 'eng-08']
  },
  {
    id: 'eng-07',
    subject: 'english',
    category: 'Grammar Fundamentals',
    title: 'Conditional Sentences: Safety & Troubleshooting',
    description: 'Pelajari kalimat pengandaian (Type 0, Type 1, dan Type 2) untuk analisis resiko, warning label, dan penyebab kerusakan sistem.',
    difficulty: 'Intermediate',
    estimatedMinutes: 22,
    xpReward: 75,
    iconName: 'HelpCircle',
    objectives: [
      'Memahami Conditional Type 0 untuk hukum alam dan reaksi alat otomatis (If S + V1, S + V1).',
      'Memahami Conditional Type 1 untuk kemungkinan nyata di masa depan (If S + V1, S + will + V1).',
      'Menerapkannya dalam rambu keselamatan dan troubleshooting logika.'
    ],
    introduction: 'Dalam troubleshooting: "If the red LED blinks continuously, the power supply unit is malfunctioning." Memahami kalimat kondisional memungkinkan kamu menganalisis sebab-akibat dengan akurat.',
    sections: [
      {
        title: 'Tipe-tipe Conditional',
        content: 'Type 0 (Fakta pasti/Hukum Sains):\nIf you heat water to 100°C, it boils.\nIf you press the emergency button, the conveyor belt stops.\n\nType 1 (Kemungkinan nyata / Peringatan kerja):\nIf you do not wear protective gloves, you will burn your fingers.\nIf the server load exceeds 90%, the alert system will notify the admin.',
        formula: 'Type 0: If + Simple Present, Simple Present | Type 1: If + Simple Present, will + Verb 1'
      }
    ],
    practiceQuestions: [
      {
        id: 'eng-07-q1',
        question: '"If you _______ the wrong voltage setting, the motherboard will get damaged."',
        options: ['select', 'selected', 'will select', 'selecting'],
        correctIndex: 0,
        explanation: 'Klausa if pada Conditional Type 1 menggunakan Simple Present ("select"), sedangkan klausa hasil menggunakan will + V1.'
      }
    ],
    summary: [
      'Conditional Type 0 dipakai untuk reaksi otomatis dan fakta.',
      'Conditional Type 1 dipakai untuk konsekuensi kerja dan peringatan keselamatan.'
    ],
    relatedIds: ['eng-02', 'eng-05']
  },
  {
    id: 'eng-08',
    subject: 'english',
    category: 'Workplace English',
    title: 'Job Application Letter & Curriculum Vitae for SMK Graduates',
    description: 'Panduan lengkap menyusun surat lamaran kerja dan CV profesional bahasa Inggris untuk melamar di industri modern.',
    difficulty: 'Advanced',
    estimatedMinutes: 25,
    xpReward: 85,
    iconName: 'Briefcase',
    objectives: [
      'Mengenal struktur baku Application Letter: Salutation, Opening, Body/Qualifications, Closing, Sign-off.',
      'Menulis pengalaman Praktik Kerja Lapangan (PKL / Internship) dengan bahasa Inggris yang impresif.',
      'Menghindari kesalahan umum pada format CV ATS-friendly.'
    ],
    introduction: 'Banyak perusahaan multinasional dan startup teknologi di Indonesia meminta berkas lamaran dalam bahasa Inggris. Melalui materi ini, kamu akan belajar cara menonjolkan keahlian kejuruanmu, sertifikat kompetensi, dan pengalaman PKL secara meyakinkan.',
    sections: [
      {
        title: 'Komponen Surat Lamaran Kerja (Cover Letter)',
        content: '1. Applicant Info & Date\n2. Employer Details\n3. Salutation (Dear Hiring Manager, / Dear Mr. Pratama,)\n4. Opening Paragraph: Menyebutkan posisi yang dilamar dan sumber info lowongan.\n5. Body Paragraph: Menjelaskan jurusan SMK, kompetensi teknis, serta pengalaman PKL.\n6. Closing: Mengajukan sesi interview dengan sopan.\n7. Complimentary Close (Sincerely, / Yours faithfully,).',
        example: {
          question: 'Contoh kalimat pembuka:',
          solution: '"I am writing to express my strong interest in the Junior Web Developer position advertised on your company career page. As a recent graduate of SMK Negeri 1 Jakarta majoring in Software Engineering, I have acquired solid hands-on experience in modern frontend development."',
          notes: 'Gunakan kata kerja aktif dan sebutkan jurusanmu dengan jelas.'
        }
      }
    ],
    practiceQuestions: [
      {
        id: 'eng-08-q1',
        question: 'Frasa penutup yang paling sopan dan profesional dalam surat lamaran kerja bahasa Inggris adalah...',
        options: [
          'Call me as soon as possible.',
          'I look forward to the opportunity to discuss my qualifications in an interview.',
          'Please give me this job because I need money.',
          'See you later at the company.'
        ],
        correctIndex: 1,
        explanation: '"I look forward to the opportunity to discuss my qualifications..." adalah penutup formal yang menunjukkan antusiasme dan kesopanan tinggi.'
      }
    ],
    summary: [
      'Surat lamaran kerja mencerminkan profesionalitas dan etika komunikasi.',
      'Jelaskan keahlian teknis dan pengalaman PKL secara spesifik dan terukur.'
    ],
    relatedIds: ['eng-09', 'eng-10']
  },
  {
    id: 'eng-09',
    subject: 'english',
    category: 'Job Interview English',
    title: 'Acing the Job Interview in English',
    description: 'Teknik menjawab pertanyaan wawancara kerja yang paling sering diajukan dengan metode STAR (Situation, Task, Action, Result).',
    difficulty: 'Advanced',
    estimatedMinutes: 25,
    xpReward: 90,
    iconName: 'UserCheck',
    objectives: [
      'Menjawab pertanyaan "Tell me about yourself" dengan ringkas dan terfokus pada keahlian.',
      'Menerapkan metode STAR untuk menceritakan pengalaman menyelesaikan masalah teknis saat PKL.',
      'Mengajukan pertanyaan berbobot kepada pewawancara di akhir sesi.'
    ],
    introduction: 'Wawancara kerja seringkali menjadi momen penentu. Mengetahui cara menyampaikan kelebihan diri, mengatasi kegugupan, dan memilih kosa kata yang sopan akan membuatmu unggul dibanding kandidat lainnya.',
    sections: [
      {
        title: 'Pertanyaan Favorit & Cara Menjawabnya',
        content: '1. "Tell me about yourself":\nFokuskan pada latar belakang pendidikan SMK, minat kejuruan, dan proyek terbaik yang pernah kamu kerjakan.\n2. "What are your greatest strengths?":\nHubungkan kemampuan teknis (hard skills) dengan etos kerja (soft skills), misalnya kedisiplinan dan rasa ingin tahu yang tinggi.',
        dialogue: [
          { speaker: 'Interviewer', text: 'Why should we hire you for this technician position?', translation: 'Mengapa kami harus merekrut Anda untuk posisi teknisi ini?' },
          { speaker: 'Applicant', text: 'During my six months of internship, I successfully diagnosed and repaired over 50 electrical units with zero safety incidents. I am ready to bring that precision to your team.', translation: 'Selama enam bulan PKL, saya berhasil mendiagnosis dan memperbaiki lebih dari 50 unit kelistrikan tanpa ada kecelakaan kerja. Saya siap membawa ketelitian tersebut ke tim Anda.' }
        ]
      }
    ],
    practiceQuestions: [
      {
        id: 'eng-09-q1',
        question: 'Ketika interviewer bertanya: "Do you have any questions for us?", jawaban manakah yang paling profesional?',
        options: [
          '"No, I want to go home now."',
          '"What are the opportunities for professional training and skill development in this role?"',
          '"How much salary will you give me right away?"',
          '"Is this company really good?"'
        ],
        correctIndex: 1,
        explanation: 'Menanyakan kesempatan pelatihan dan pengembangan menunjukkan komitmen belajar dan dedikasi jangka panjang.'
      }
    ],
    summary: [
      'Gunakan metode STAR untuk menjawab pertanyaan berbasis perilaku dan pengalaman.',
      'Pertahankan kontak mata, intonasi percaya diri, dan sikap hormat.'
    ],
    relatedIds: ['eng-08', 'eng-10']
  },
  {
    id: 'eng-10',
    subject: 'english',
    category: 'Workplace English',
    title: 'Professional Email & Technical Communication',
    description: 'Etika penulisan email bisnis, konfirmasi jadwal rapat, dan pengiriman invoice/laporan proyek.',
    difficulty: 'Intermediate',
    estimatedMinutes: 20,
    xpReward: 70,
    iconName: 'Mail',
    objectives: [
      'Membuat Subject Line yang jelas dan menarik perhatian rekan kerja atau klien.',
      'Menggunakan salam pembuka formal dan informal yang tepat sasaran.',
      'Melampirkan dokumen dan meminta tindak lanjut (call to action) dengan sopan.'
    ],
    introduction: 'Email adalah saluran komunikasi resmi utama di dunia kerja. Email yang berantakan atau tanpa subjek bisa diabaikan atau bahkan dinilai tidak profesional oleh manajer dan klien luar negeri.',
    sections: [
      {
        title: 'Anatomi Email Profesional',
        content: '1. Clear Subject Line: [Project Name] Maintenance Report - Nov 2026\n2. Professional Salutation: Dear Mr. Tan, / Hi Sarah,\n3. State the Purpose: "I am writing to update you on..."\n4. Supporting Details in Bullet Points\n5. Call to Action / Attachment: "Please find attached the diagnostic report."\n6. Professional Sign-off: "Best regards, [Your Name]".'
      }
    ],
    practiceQuestions: [
      {
        id: 'eng-10-q1',
        question: 'Frasa yang lazim digunakan untuk memberi tahu bahwa berkas penting telah disertakan dalam email adalah...',
        options: [
          '"Look at the thing I threw inside."',
          '"Please find attached the required schematic diagram."',
          '"The file is somewhere in your computer."',
          '"Open the file right away."'
        ],
        correctIndex: 1,
        explanation: '"Please find attached..." adalah standar formal internasional untuk memberitahukan lampiran dokumen.'
      }
    ],
    summary: [
      'Subjek email harus spesifik dan mencerminkan inti pesan.',
      'Gunakan bahasa yang ringkas, jelas, dan santun.'
    ],
    relatedIds: ['eng-08', 'eng-09']
  },
  {
    id: 'eng-11',
    subject: 'english',
    category: 'Reading Comprehension',
    title: 'Reading Technical Specifications & Data Sheets',
    description: 'Membedah lembar spesifikasi teknis (data sheet) komponen, parameter daya, dan toleransi operasional.',
    difficulty: 'Intermediate',
    estimatedMinutes: 18,
    xpReward: 65,
    iconName: 'BookOpen',
    objectives: [
      'Membaca tabel spesifikasi elektronika atau mesin dengan teliti.',
      'Menemukan batas toleransi maksimum dan minimum (Maximum Ratings).',
      'Menarik kesimpulan kesesuaian komponen untuk suatu pekerjaan instalasi.'
    ],
    introduction: 'Data sheet adalah dokumen resmi pabrikan yang merinci karakteristik elektrik, mekanik, dan termal suatu produk. Membaca data sheet dengan benar mencegah kerusakan fatal akibat kelebihan beban (overload).',
    sections: [
      {
        title: 'Istilah Kunci dalam Data Sheet',
        content: '- Input Voltage / Output Voltage\n- Power Consumption (Watt)\n- Operating Temperature Range (°C)\n- Dimensions & Net Weight\n- Certifications (CE, RoHS, ISO9001)',
        vocabulary: [
          { term: 'Tolerance', meaning: 'Batas toleransi deviasi nilai komponen', context: 'The resistor has a tolerance of ±5%.' },
          { term: 'Dissipation', meaning: 'Pelepasan daya panas', context: 'Ensure proper heat dissipation with a heat sink.' }
        ]
      }
    ],
    practiceQuestions: [
      {
        id: 'eng-11-q1',
        question: 'Jika data sheet menuliskan: "Operating Temperature: -10°C to +60°C", apa arti informasi tersebut?',
        options: [
          'Perangkat hanya dapat menyala pada suhu tepat 60°C.',
          'Perangkat dapat beroperasi dengan aman antara suhu minus 10°C hingga 60°C.',
          'Perangkat akan meleleh pada suhu di atas 0°C.',
          'Suhu ruangan harus selalu dibekukan.'
        ],
        correctIndex: 1,
        explanation: 'Rentang tersebut menandakan batas temperatur operasional aman bagi alat.'
      }
    ],
    summary: [
      'Selalu cek tabel Absolute Maximum Ratings sebelum menyambungkan catu daya.',
      'Perhatikan satuan metrik dan toleransi komponen.'
    ],
    relatedIds: ['eng-01', 'eng-12']
  },
  {
    id: 'eng-12',
    subject: 'english',
    category: 'English for Technology',
    title: 'Cybersecurity & Cloud Computing Terminology',
    description: 'Kosa kata dan istilah penting seputar keamanan siber, enkripsi, firewall, dan infrastruktur komputasi awan.',
    difficulty: 'Advanced',
    estimatedMinutes: 20,
    xpReward: 75,
    iconName: 'Shield',
    objectives: [
      'Memahami istilah-istilah ancaman siber (Phishing, Malware, Ransomware, DDoS).',
      'Mengenal konsep komputasi awan (SaaS, PaaS, IaaS, Scalability).',
      'Menjelaskan protokol keamanan data dalam diskusi tim IT.'
    ],
    introduction: 'Di era transformasi digital, keamanan sistem informasi menjadi tanggung jawab setiap personil teknis. Penguasaan istilah siber internasional mutlak diperlukan untuk membaca log ancaman keamanan jaringan.',
    sections: [
      {
        title: 'Ancaman Siber & Solusi Keamanan',
        content: 'Phishing: Upaya penipuan untuk mencuri data sensitif.\nRansomware: Malware pemeras yang mengenkripsi berkas pengguna.\nFirewall: Sistem pengaman yang memfilter lalu lintas jaringan masuk dan keluar.\nEncryption: Pengacakan data agar hanya dapat dibaca oleh pemilik kunci dekripsi.',
        vocabulary: [
          { term: 'Vulnerability', meaning: 'Celah kerentanan sistem', context: 'The patch fixes a high-risk security vulnerability.' },
          { term: 'Redundancy', meaning: 'Pencadangan ganda untuk menghindari downtime', context: 'Cloud architecture uses data redundancy across regions.' }
        ]
      }
    ],
    practiceQuestions: [
      {
        id: 'eng-12-q1',
        question: 'Istilah untuk serangan siber di mana pelaku membanjiri server dengan jutaan lalu lintas palsu agar layanan down adalah...',
        options: ['Phishing', 'DDoS Attack', 'Trojan', 'Cookie Injection'],
        correctIndex: 1,
        explanation: 'DDoS (Distributed Denial of Service) bertujuan melumpuhkan ketersediaan server dengan membanjirinya dengan trafik masif.'
      }
    ],
    summary: [
      'Keamanan data membutuhkan pemahaman istilah enkripsi, autentikasi dua faktor, dan arsitektur awan.',
      'Gunakan password yang kuat dan lakukan pembaruan sistem secara berkala.'
    ],
    relatedIds: ['eng-01', 'eng-11']
  },
  {
    id: 'eng-13',
    subject: 'english',
    category: 'Speaking Practice',
    title: 'Giving & Asking for Technical Directions in the Workshop',
    description: 'Percakapan praktis meminta bantuan, menunjukkan lokasi perlengkapan, dan memberi petunjuk operasional di lingkungan bengkel.',
    difficulty: 'Beginner',
    estimatedMinutes: 16,
    xpReward: 55,
    iconName: 'Compass',
    objectives: [
      'Menggunakan preposisi tempat (next to, opposite, on the top shelf, behind).',
      'Meminta bantuan dengan sopan (Could you please show me..., Excuse me, where is...).',
      'Memberikan instruksi arah tata letak bengkel dan jalur evakuasi.'
    ],
    introduction: 'Bekerja sama dalam satu ruang kerja yang luas menuntut komunikasi lisan yang cepat dan tepat. Ketika rekan kerja asing atau tamu industri menanyakan lokasi panel darurat atau rak perkakas, kamu bisa membimbing mereka dengan percaya diri.',
    sections: [
      {
        title: 'Frasa Kunci Menanyakan & Menunjukkan Lokasi',
        content: '- "Excuse me, where can I find the digital multimeter?"\n- "It is located in Cabinet B, on the third shelf, right next to the oscilloscope."\n- "Go straight down the main corridor, turn left, and the emergency shower is just opposite the welding booth."',
        dialogue: [
          { speaker: 'Junior Technician', text: 'Excuse me, could you tell me where the emergency shut-off valve is located?', translation: 'Permisi, bisakah Anda memberi tahu saya di mana lokasi katup pemutus darurat?' },
          { speaker: 'Supervisor', text: 'Sure! Walk past the milling machines, and it is on the red pillar on your right.', translation: 'Tentu! Berjalanlah melewati mesin frais, katup itu ada di tiang merah sebelah kananmu.' }
        ]
      }
    ],
    practiceQuestions: [
      {
        id: 'eng-13-q1',
        question: 'Kalimat manakah yang paling tepat untuk menanyakan keberadaan kotak P3K secara santun?',
        options: [
          '"Where first aid?"',
          '"Excuse me, could you please tell me where the first-aid kit is located?"',
          '"Give me medicine right now!"',
          '"You have the box?"'
        ],
        correctIndex: 1,
        explanation: '"Could you please tell me where... is located" adalah cara bertanya yang sangat sopan dan profesional.'
      }
    ],
    summary: [
      'Gunakan modal "could" dan kata "excuse me" saat menyapa rekan kerja.',
      'Preposisi spasial yang presisi menghindari kesalahpahaman di area kerja beresiko tinggi.'
    ],
    relatedIds: ['eng-01', 'eng-06']
  },
  {
    id: 'eng-14',
    subject: 'english',
    category: 'Grammar Fundamentals',
    title: 'Degrees of Comparison: Benchmarking Products & Performance',
    description: 'Membandingkan kecepatan prosesor, konsumsi bahan bakar, daya tahan material, dan efisiensi mesin.',
    difficulty: 'Beginner',
    estimatedMinutes: 16,
    xpReward: 55,
    iconName: 'BarChart2',
    objectives: [
      'Memahami Positive Degree (as... as).',
      'Menggunakan Comparative Degree (-er / more than) untuk 2 objek.',
      'Menggunakan Superlative Degree (-est / most) untuk performa terbaik.',
      'Menyajikan perbandingan spesifikasi alat secara logis.'
    ],
    introduction: 'Dalam memilih komponen komputer atau onderdil mesin, kita terus menerus membandingkan: mana yang lebih cepat, lebih hemat energi, atau paling tahan lama. Pemahaman Degrees of Comparison memungkinkanmu menyajikan analisis komparatif.',
    sections: [
      {
        title: 'Aturan Pembentukan Komparasi',
        content: '1. Satu suku kata:\nfast -> faster -> fastest\nstrong -> stronger -> strongest\n\n2. Dua suku kata atau lebih:\nefficient -> more efficient -> most efficient\nreliable -> more reliable -> most reliable\n\n3. Bentuk tidak beraturan:\ngood -> better -> best\nbad -> worse -> worst',
        example: {
          question: 'Bandingkan SSD vs HDD dalam kecepatan:',
          solution: 'An NVMe SSD is significantly faster than a traditional mechanical hard disk drive (HDD).',
          notes: 'Gunakan "faster than" karena "fast" adalah kata sifat satu suku kata.'
        }
      }
    ],
    practiceQuestions: [
      {
        id: 'eng-14-q1',
        question: '"This carbon steel alloy is much _______ than conventional aluminum for heavy frame construction."',
        options: ['strong', 'stronger', 'strongest', 'more strong'],
        correctIndex: 1,
        explanation: 'Kata "than" menandakan bentuk komparatif. Sifat 1 suku kata "strong" menjadi "stronger".'
      }
    ],
    summary: [
      'Gunakan perbandingan untuk menjustifikasi rekomendasi teknis kepada pelanggan atau pimpinan.',
      'Jangan menggabungkan "more" dengan kata sifat berakhiran "-er" (hindari "more faster").'
    ],
    relatedIds: ['eng-01', 'eng-11']
  },
  {
    id: 'eng-15',
    subject: 'english',
    category: 'Reading Comprehension',
    title: 'Report Text: Sustainable Energy & Modern Automotive Tech',
    description: 'Menganalisis teks laporan ilmiah mengenai teknologi kendaraan listrik (EV) dan panel surya industri.',
    difficulty: 'Advanced',
    estimatedMinutes: 24,
    xpReward: 80,
    iconName: 'Cpu',
    objectives: [
      'Mengidentifikasi General Classification dan Description dalam Report Text.',
      'Menemukan ide pokok paragraf dan detail pendukung fakta ilmiah.',
      'Memperluas kosa kata teknologi ramah lingkungan dan konversi energi.'
    ],
    introduction: 'Industri global saat ini bertransformasi ke arah energi baru terbarukan dan kendaraan listrik ramah lingkungan. Teks laporan ilmiah (Report Text) memberikan gambaran faktual tentang cara kerja sel baterai lithium-ion dan motor induksi listrik.',
    sections: [
      {
        title: 'Struktur Report Text',
        content: 'Report Text bertujuan mendeskripsikan fenomena alam, teknologi, atau benda secara umum berdasarkan fakta ilmiah.\n1. General Classification: Mengklasifikasikan subjek yang dibahas ke dalam kelompok besarnya.\n2. Description: Menguraikan bagian-bagian, fungsi, dan karakteristik khususnya.'
      }
    ],
    practiceQuestions: [
      {
        id: 'eng-15-q1',
        question: 'Tujuan komunikatif utama dari sebuah Report Text tentang "Electric Vehicles" adalah...',
        options: [
          'Menceritakan pengalaman pribadi berbelanja mobil listrik.',
          'Menyajikan informasi faktual ilmiah tentang klasifikasi dan cara kerja kendaraan listrik.',
          'Membujuk pembaca agar segera membeli mobil tertentu hari ini.',
          'Menghibur pembaca dengan dongeng petualangan mobil balap.'
        ],
        correctIndex: 1,
        explanation: 'Report Text berfokus menyajikan fakta objektif dan ilmiah kepada pembaca tanpa opini subjektif.'
      }
    ],
    summary: [
      'Report text menyajikan pengetahuan umum berdasarkan riset ilmiah.',
      'Sering menggunakan Simple Present Tense dan istilah teknis khusus (technical terms).'
    ],
    relatedIds: ['eng-01', 'eng-02', 'eng-11']
  }
];

