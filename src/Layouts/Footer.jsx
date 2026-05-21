import { content } from "../Content";

const Footer = () => {
  const { Footer } = content;

  return (
    <footer className="bg-[#5A1515] py-5 border-t border-white/20">
      <div className="container mx-auto px-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 font-DMSans">
          
          {/* Sisi Kiri: Nama & Copyright - Dipaksa putih dengan !text-white */}
          <p className="flex items-center gap-2 !text-white/60">
            <span className="font-Poppins font-bold tracking-wider">SYADA SALEHA</span> 
            <span className="opacity-60">|</span> 
            <span>{Footer.text}</span>
          </p>

          {/* Sisi Kanan: Lokasi & Tool - Dipaksa putih dengan !text-white */}
          <p className="tracking-wide !text-white/60">
            Semarang • React & Tailwind
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;