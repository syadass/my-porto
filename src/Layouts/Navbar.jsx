import { useState, useEffect } from "react";

// Memindahkan navItems ke luar komponen adalah praktik yang baik 
// agar tidak dibuat ulang (re-render) setiap kali state berubah
const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#services" },
  { name: "Skills", link: "#skills" },
  { name: "Experiences", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Awards", link: "#hireme" },
  { name: "Contact", link: "#contact" },
];

const Navbar = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Menambahkan offset (misal 150px) agar status aktif berubah 
      // sedikit sebelum section benar-benar menyentuh paling atas layar
      const scrollPosition = window.scrollY + 150;

      navItems.forEach((item, index) => {
        // Mengambil ID section tanpa tanda "#" (contoh: "services")
        const sectionId = item.link.substring(1);
        const section = document.getElementById(sectionId);

        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          // Mengecek apakah posisi scroll saat ini berada di dalam area section tersebut
          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActive(index);
          }
        }
      });
    };

    // Mendaftarkan event listener saat komponen dipasang
    window.addEventListener("scroll", handleScroll);
    
    // Memanggil fungsi sekali saat pertama kali render untuk set posisi awal
    handleScroll();

    // Membersihkan event listener saat komponen dilepas (cleanup)
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-[999] bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container flex items-center justify-between py-4">
        
        {/* Bagian Kiri: Logo / Nama */}
        <a href="#home" className="text-2xl font-bold font-Paprika text-dark_primary">
          Syada S.
        </a>

        {/* Bagian Kanan: Menu Navigasi Teks */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <a
              key={i}
              href={item.link}
              onClick={() => setActive(i)}
              className={`font-Poppins font-medium text-[0.95rem] transition-all duration-300 sm:cursor-pointer 
              ${
                i === active
                  ? "text-dark_primary border-b-2 border-dark_primary pb-1" 
                  : "text-gray hover:text-dark_primary" 
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>
        
      </div>
    </header>
  );
};

export default Navbar;