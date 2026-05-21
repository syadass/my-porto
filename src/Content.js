// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import mysql from "./assets/images/Skills/mysql.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import arduino from "./assets/images/Skills/arduino.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import project4 from "./assets/images/projects/img4.png"; // Tambahkan import gambar ke-4

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
    title: "Web Developer",
    firstName: "SYADA",
    LastName: "SALEHA, S.T.",
    btnText: "Hubungi Saya",
    image: Hero_person,
    hero_content: [
      {
        count: "2+",
        text: "Tahun Pengalaman di Organisasi & Proyek",
      },
      {
        count: "10+",
        text: "Proyek & Acara yang Pernah Ditangani",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Figma",
        para: "Desain UI/UX & Prototipe",
        logo: figma,
      },
      {
        name: "Node js",
        para: "Pengembangan Back-end",
        logo: nodejs,
      },
      {
        name: "React js",
        para: "Pengembangan Front-end",
        logo: reactjs,
      },
      {
        name: "MySQL",
        para: "Manajemen Basis Data",
        logo: mysql,
      },
      {
        name: "Protokol IoT",
        para: "MQTT & WebSockets",
        logo: arduino,
      },
    ],
    icon: MdArrowForward,
  },
  aboutMe: {
    title: "About Me",
    subtitle: "GET TO KNOW ME",
    description: "Lulusan S1 Teknik Komputer Universitas Diponegoro dengan IPK 3,91 yang memiliki kompetensi di bidang pengembangan perangkat lunak dan teknologi Internet of Things (IoT). Menguasai pengembangan aplikasi full-stack menggunakan Node.js, React.js, dan MySQL, serta implementasi komunikasi data real-time melalui protokol MQTT dan WebSocket. Memiliki kemampuan dalam desain UI/UX menggunakan Figma serta pengalaman organisasi yang mendukung keterampilan kepemimpinan, komunikasi, dan kolaborasi tim.",
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
        desc: "Bertanggung jawab sebagai IoT Network Engineer dalam mengatur komunikasi data real-time antara perangkat keras dan antarmuka web menggunakan Node.js, MQTT, dan WebSocket untuk tugas akhir.",
        link: "https://github.com/syadass", 
      },
      {
        title: "UI/UX Web Edukom",
        image: project2,
        desc: "Merancang desain antarmuka (UI/UX) menggunakan Figma untuk platform edukasi masyarakat terkait teknologi pada proyek magang di Dinkominfo.",
        link: "https://github.com/syadass", 
      },
      {
        title: "Aplikasi Android Berita",
        image: project3,
        desc: "Mengembangkan aplikasi mobile pembaca berita berbasis Android menggunakan React Native dan integrasi RESTful API sebagai tugas akhir praktikum individu.",
        link: "https://github.com/syadass", 
      },
      {
        title: "Web Dolantix",
        image: project4,
        desc: "Berkontribusi dalam pengembangan frontend menggunakan React.js untuk platform pemesanan tiket event secara online pada proyek kelompok praktikum.",
        link: "https://github.com/syadass", 
      },
    ],
  },
  Experience: {
    title: "Experiences",
    subtitle: "PROFESSIONAL JOURNEY", 
    work: [
      {
        title: "Desainer UI/UX (E-Government)",
        company: "Dinas Komunikasi dan Informatika Kab. Pekalongan",
        year: "Jan 2025 - Feb 2025",
      },
      {
        title: "Tutor Privat",
        company: "Pekerja Lepas",
        year: "Jan 2024 - Sekarang",
      },
      {
        title: "Social Media Content Writer",
        company: "Yayasan Traditional Games Returns",
        year: "2022 - 2023",
      }
    ],
    organization: [
      {
        title: "Kepala Bidang Annisa",
        company: "UPK Kerohanian Islam Izzati Fakultas Teknik",
        year: "2025",
      },
      {
        title: "Staff Ahli Bidang Annisa",
        company: "UPK Kerohanian Islam Izzati Fakultas Teknik",
        year: "2024",
      },
      {
        title: "Staff Muda Bidang Annisa",
        company: "UPK Kerohanian Islam Izzati Fakultas Teknik",
        year: "2023",
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
        name: "Penerima Beasiswa Bright Batch 8",
        issuer: "Yayasan Baitul Maal BRILIAN",
        year: "2023",
      },
      {
        name: "Penerima Beasiswa Smart",
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