import { CommunityPost } from '../types';

export const initialCommunityPosts: CommunityPost[] = [
  {
    id: 'post-1',
    authorId: 'demo-user-2',
    authorName: 'Siti Nurhaliza',
    authorMajor: 'Teknik Komputer & Jaringan (TKJ)',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    subject: 'english',
    title: 'Tips Lolos Interview Magang PKL di Perusahaan Multinasional IT',
    content: 'Halo teman-teman SMK! Minggu lalu alhamdulillah aku selesai interview magang bahasa Inggris di perusahaan cloud provider. Kuncinya ada di metode STAR: Situation (jelaskan proyek sekolahmu), Task (tanggung jawabmu), Action (perintah CLI/konfigurasi yang kamu ketik), dan Result (persentase downtime yang berhasil dicegah). Jangan takut aksen medok, yang penting komunikatif dan percaya diri!',
    tags: ['Interview', 'PKL', 'CareerTips', 'EnglishVocational'],
    formulaOrCode: `// STAR Method Checklist:
1. Situation: "During our school computer lab setup..."
2. Task: "I was assigned to configure VLAN routing..."
3. Action: "I implemented sub-interfaces on the Cisco 2901..."
4. Result: "Achieved 100% network isolation with zero latency."`,
    likes: 24,
    likedByUser: false,
    bookmarkedByUser: true,
    createdAt: '2026-11-09T14:20:00Z',
    commentCount: 7
  },
  {
    id: 'post-2',
    authorId: 'demo-user-1',
    authorName: 'Raditya Pratama',
    authorMajor: 'Rekayasa Perangkat Lunak (RPL)',
    authorAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
    subject: 'mathematics',
    title: 'Catatan Kilat: Menghitung Invers Matriks 2x2 Tanpa Mumet',
    content: 'Kemarin banyak yang nanya rumus kilat determinan dan invers matriks buat coding transformasi grafis 2D. Kuncinya cukup tukar posisi diagonal utama (a dan d) terus kasih tanda minus pada b dan c! Jangan lupa cek determinan ad - bc jangan sampai 0 biar tidak divide-by-zero error di kodingan.',
    tags: ['MatematikaSMK', 'Matriks', 'GameDev', 'Aljabar'],
    formulaOrCode: `A = [[a, b], [c, d]]
det(A) = ad - bc

if (det === 0) throw new Error("Matriks singular! Tak ada invers.");
A_inv = (1 / det) * [[d, -b], [-c, a]];`,
    likes: 19,
    likedByUser: true,
    bookmarkedByUser: false,
    createdAt: '2026-11-08T18:10:00Z',
    commentCount: 4
  },
  {
    id: 'post-3',
    authorId: 'demo-user-3',
    authorName: 'Budi Santoso',
    authorMajor: 'Teknik Kendaraan Ringan Otomotif (TKRO)',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    subject: 'mathematics',
    title: 'Penerapan Perbandingan Berbalik Nilai pada Gear Ratio Transmisi',
    content: 'Di bengkel mesin, gear ratio menentukan antara kecepatan putar (RPM) dan tenaga torsi. Rumusnya: N1 * RPM1 = N2 * RPM2. Kalau gigi roda penggerak 15 gigi dan roda gigi yang digerakkan 45 gigi (rasio 1:3), putaran RPM turun sepertiganya tapi tenaga torsi dorongnya naik 3 kali lipat!',
    tags: ['Otomotif', 'RasioGigi', 'MatematikaTerapan', 'FisikaTeknik'],
    formulaOrCode: `N1 × RPM1 = N2 × RPM2
Gear Ratio = N2 / N1
Torque_out = Torque_in × Gear Ratio`,
    likes: 31,
    likedByUser: false,
    bookmarkedByUser: false,
    createdAt: '2026-11-07T11:45:00Z',
    commentCount: 11
  }
];

