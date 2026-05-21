import { useEffect } from "react";
import { content } from "../Content";
import myCV from "../assets/cv_syada.pdf";

const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        
        {/* Background Kotak Biru di Kanan */}
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
        </div>

        {/* Kolom Pertama (Teks Kiri) - Padding dinaikkan dan diseimbangkan untuk keseimbangan */}
        <div className="pb-12 px-6 pt-16 md:pt-12 z-10" data-aos="fade-down">
          
          {/* NAMA DIPINDAH KE SINI - Flexbox untuk penyelarasan nama depan dan belakang yang seimbang */}
          <div className="flex flex-col mb-1 desktop-alignment">
            <h1 className="mb-0 desktop-leading">
              {hero.firstName}
            </h1>
            <h1 className="mb-0 leading-none">
              <span className="text-gray">{hero.LastName}</span>
            </h1>
          </div>
          
          {/* Posisi "Web Developer" - Jarak mb-2 pada h1 lama sudah seimbang */}
          <h2>{hero.title}</h2>
          
          {/* TOMBOL KUSTOM - Baris tombol flexbox dengan jarak seimbang */}
          <div className="flex items-center justify-end gap-6 mt-6 md:mt-8">
            <a href="#contact" className="btn inline-block">Contact Me</a>
            <a href={myCV} download="CV_Syada_Saleha.pdf" className="btn inline-block">Download CV </a>
          </div>

          {/* Bagian Konten Hero - Gap diperkecil dari gap-12 menjadi gap-6 agar atas-bawahnya lebih rapat */}
          <div className="flex flex-col gap-6 mt-6 md:mt-8">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                // Menghapus text-right agar tidak bentrok dengan justify
                className={`flex items-center w-80 gap-6 ${i === 1 && " flex-row-reverse"}  `}
              >
                {/* Bagian ini diperbesar dengan text-5xl (mobile) dan md:text-6xl (desktop) serta dibuat font-bold */}
                <h3 className="text-5xl md:text-6xl font-bold text-dark_primary drop-shadow-sm">
                  {content.count}
                </h3>
                
                {/* Tambahkan class text-justify di sini */}
                <p className="text-justify">{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Kolom Kedua (Gambar Profile) */}
        <div className="md:h-[37rem] h-96 z-10">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="..."
            className="h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;