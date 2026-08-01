// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import mysql from "./assets/images/Skills/mysql.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import arduino from "./assets/images/Skills/arduino.png";
import canva from "./assets/images/Skills/canva.png";
import komunikasi from "./assets/images/Skills/komunikasi.png";
import bahasa from "./assets/images/Skills/bahasa.png";
import kepemimpinan from "./assets/images/Skills/kepemimpinan.png";
import solving from "./assets/images/Skills/solving.png";
import teamwork from "./assets/images/Skills/teamwork.png";
import office from "./assets/images/Skills/office.png";
import excel from "./assets/images/Skills/excel.png";
import word from "./assets/images/Skills/word.png";
import cpp from "./assets/images/Skills/c++.png";
import websocket from "./assets/images/Skills/websocket.png";
import mqtt from "./assets/images/Skills/mqtt.png";
import js from "./assets/images/Skills/js.png";
import waktu from "./assets/images/Skills/waktu.png";

import project1 from "./assets/images/Projects/img1.png";
import project2 from "./assets/images/Projects/img2.png";
import project3 from "./assets/images/Projects/img3.png";
import project4 from "./assets/images/Projects/img4.png";
import project5 from "./assets/images/Projects/img5.png"

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram, BsLinkedin } from "react-icons/bs"; 
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#experience",
      icon: RiProjectorLine, 
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#hireme",
      icon: RiProjectorLine, 
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Fresh Graduate in Computer Engineering",
    firstName: "SYADA",
    LastName: "SALEHA, S.T.",
    btnText: "Hubungi Saya",
    image: Hero_person,
    hero_content: [
      {
        count: "3+",
        text: "Proyek Berbasis Web, Mobile & IoT",
      },
      {
        count: "3+",
        text: "Tahun Pengalaman Organisasi & Pengembangan Software",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    
    // --- Kategori Hard Skills ---
    hard_skills: [
      {
        name: "Figma",
        para: "Desain UI/UX & Prototipe",
        logo: figma,
      },
      {
        name: "Canva",
        para: "Desain Grafis Konten",
        logo: canva,
      },
      {
        name: "JavaScript",
        para: "Pemrograman Tingkat Dasar",
        logo: js, 
      },
      {
        name: "React.js",
        para: "Pengembangan Front-end",
        logo: reactjs,
      },
      {
        name: "Node.js",
        para: "Pengembangan Back-end",
        logo: nodejs,
      },
      {
        name: "MySQL",
        para: "Manajemen Basis Data",
        logo: mysql,
      },
      {
        name: "C++",
        para: "Pemrograman Tingkat Dasar",
        logo: cpp, 
      },
      {
        name: "Arduino",
        para: "MQTT & WebSockets",
        logo: arduino,
      },
      {
        name: "MQTT",
        para: "Pengolahan & Analisis Data",
        logo: mqtt,
      },
      {
        name: "WebSocket",
        para: "Pengolahan & Analisis Data",
        logo: websocket,
      },
      {
        name: "Microsoft Office",
        para: "Administrasi & Dokumen",
        logo: office,
      },
      {
        name: "Microsoft Word",
        para: "Pengolahan Kata",
        logo: word,
      },
      {
        name: "Microsoft Excel",
        para: "Pengolahan & Analisis Data",
        logo: excel,
      },
    ],

    // --- Kategori Soft Skills ---
    soft_skills: [
      {
        name: "Komunikasi",
        para: "Penyampaian Ide & Informasi",
        logo: komunikasi, 
      },
      {
        name: "Kolaborasi Tim",
        para: "Kerja Sama Tim",
        logo: teamwork, 
      },
      {
        name: "Kepemimpinan",
        para: "Manajemen Anggota Tim",
        logo: kepemimpinan, 
      },
      {
        name: "Pemecahan Masalah",
        para: "Pemecahan Masalah Kritis",
        logo: solving, 
      },
      {
        name: "Manajemen Waktu",
        para: "Pemecahan Masalah Kritis",
        logo: waktu, 
      },
    ],
    icon: MdArrowForward,
  }, // <--- Ini koma yang terlewat!

  aboutMe: {
    title: "About Me",
    subtitle: "GET TO KNOW ME",
    description: "Lulusan S1 Teknik Komputer Universitas Diponegoro dengan IPK 3,91 yang memiliki kompetensi di bidang teknologi informasi, pengembangan aplikasi, dan pengelolaan basis data. Berpengalaman mengembangkan aplikasi berbasis web menggunakan Node.js, React.js, dan MySQL, serta mengimplementasikan sistem Internet of Things (IoT) dengan komunikasi data real-time menggunakan MQTT dan WebSocket. Memiliki kemampuan analitis, pemecahan masalah, komunikasi, serta kolaborasi tim yang didukung oleh pengalaman organisasi dan berbagai proyek akademik.",
    stats: [
      {
        count: "3.91",
        text: "IPK / 4.00",
      },
      {
        count: "475",
        text: "TOEFL",
      },
    ],
    education: [
      {
        year: "2022 - 2026",
        title: "S1 Teknik Komputer",
        institution: "Universitas Diponegoro",
        ipk: "3.91",
      },
      {
        year: "2019 - 2022",
        title: "MIPA",
        institution: "MAN Kabupaten Pekalongan",
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "FEATURED WORKS",
    project_content: [
      {
        title: "Sistem Web SCADA Furnace",
        image: project1,
        desc: "Sistem web pemantauan dan komunikasi data real-time untuk furnace di laboratorium.",
        link: "https://github.com/syadass",
        tags: ["Node.js", "MQTT", "WebSocket"],
      },
      {
        title: "UI/UX Web Edukom",
        image: project2,
        desc: "Desain antarmuka (UI/UX) platform edukasi teknologi untuk masyarakat menggunakan Figma.",
        link: "https://www.figma.com/design/8s13ZkaLFX3Zz6H8QqGQtU/EduKom-User?node-id=1-2&t=QQvWAXAccRR4QRLp-1",
        tags: ["Figma", "UI/UX"],
      },
      {
        title: "News App",
        image: project3,
        desc: "Aplikasi mobile pembaca berita berbasis Android dengan integrasi RESTful API.",
        link: "https://github.com/syadass",
        tags: ["React Native", "Android", "RESTful API"],
      },
      {
        title: "RecipeZ",
        image: project4,
        desc: "Web pengelola resep makanan dan minuman.",
        link: "https://recipez-tim.vercel.app/",
        tags: ["React.js", "Tailwind CSS", "JavaScript"],
      },
      {
        title: "Desa Digital",
        image: project5,
        desc: "Web pembuatan surat untuk kepentingan masyarakat desa.",
        link: "https://recipez-tim.vercel.app/",
        tags: ["React.js", "Tailwind CSS"],
      },
    ],
  },
  Experience: {
    title: "Experiences",
    subtitle: "PROFESSIONAL JOURNEY", 
    work: [
      {
        title: "Staff E-Government (Magang)",
        company: "Dinas Komunikasi dan Informatika Kab. Pekalongan",
        year: "Jan 2025 - Feb 2025",
        desc: "• Memproduksi prototipe UI/UX website layanan publik dengan Figma.\n• Menyusun dokumentasi teknis berupa wireframe dan user flow."
      },
      {
        title: "Tutor Privat",
        company: "Pekerja Lepas",
        year: "Jan 2024 - Sekarang",
        desc: "• Mengelola bimbingan belajar mandiri untuk 10+ siswa SD dan SMP.\n• Merancang materi pembelajaran terpersonalisasi."
      },
      {
        title: "Social Media Content Writer",
        company: "Yayasan Traditional Games Returns",
        year: "2022 - 2023",
        desc: "• Menyusun brief konten edukatif secara rutin setiap bulan.\n• Melakukan riset topik untuk menjaga relevansi konten."
      }
    ],
    organization: [
      {
        title: "Kepala Bidang Annisa",
        company: "UPK Kerohanian Islam Izzati Fakultas Teknik",
        year: "2025",
        desc: "• Memimpin 7 staf dalam pelaksanaan program kerja strategis.\n• Mengawasi keberhasilan 5 program kerja utama."
      },
      {
        title: "Staff Ahli Bidang Annisa",
        company: "UPK Kerohanian Islam Izzati Fakultas Teknik",
        year: "2024",
        desc: "• Mengeksekusi 6 kegiatan kajian kemuslimahan bersama tim.\n• Mengelola kolaborasi program kerja dengan lembaga dakwah jurusan."
      },
      {
        title: "Staff Muda Bidang Annisa",
        company: "UPK Kerohanian Islam Izzati Fakultas Teknik",
        year: "2023",
        desc: "• Mengelola perencanaan dan publikasi konten Syiar Online.\n• Merancang desain konten mingguan menggunakan aplikasi desain."
      }
    ]
  },
  Hireme: {
    title: "Awards",
    subtitle: "HONORS & AWARDS", 
    awards_list: [
      {
        name: "Juara 2 Karya Tulis Ilmiah Al Qur'an",
        issuer: "Musabaqoh Tilawatil Qur'an Mahasiswa Universitas Diponegoro",
        year: "2025",
      },
      {
        name: "Awardee Bright Scholarship Batch 8",
        issuer: "Yayasan Baitul Maal BRILIAN",
        year: "2023",
      },
      {
        name: "Awardee Smart Scholarship Perguruan Tinggi",
        issuer: "Yayasan Baitul Maal BRILIAN",
        year: "2022",
      }
    ]
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "syadasaleha04@gmail.com",
        icon: GrMail,
        link: "mailto:syadasaleha04@gmail.com",
      },
      {
        text: "0853-2546-0763",
        icon: MdCall,
        link: "https://wa.me/6285325460763",
      },
      {
        text: "Syada Saleha",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/syada-saleha-4443b93a8/",
      },
      {
        text: "syadass",
        icon: BsInstagram, 
        link: "https://instagram.com/syadass",
      },
    ],
  },
  Footer: {
    text: "Semua Hak Cipta Dilindungi © 2026",
  },
};