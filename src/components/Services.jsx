import { content } from "../Content";

const Services = () => {
  // Panggil data About Me dari content
  const { aboutMe } = content;

  return (
    <section id="services">
      <div className="md:container px-5 py-14">
        {/* Judul Seksi (Disesuaikan menjadi 'About Me') */}
        <h2 className="title" data-aos="fade-down">
          {aboutMe.title}
        </h2>
        
        {/* Subjudul (Disesuaikan) */}
        <h4 className="subtitle" data-aos="fade-down">
          {aboutMe.subtitle}
        </h4> {/* <-- Sudah diperbaiki menjadi </h4> */}
        <br />
        
        {/* Seksi Deskripsi (Animasi data-aos: fade-right) */}
        <p className="font-Poppins text-lg leading-relaxed max-w-3xl" data-aos="fade-right">
          {aboutMe.description}
        </p>
        
        {/* Seksi Statistik */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 mt-16" data-aos="fade-up">
          {aboutMe.stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              {/* Nomor besar dengan font Paprika dan warna emas modern */}
              <span className="text-8xl font-Paprika font-bold text-[#D4AF37]">
                {stat.count}
              </span> {/* <-- Sudah diperbaiki menjadi </span> */}
              
              {/* Label di bawah nomor */}
              <span className="font-Poppins text-dark_primary text-center">
                {stat.text}
              </span> {/* <-- Sudah diperbaiki menjadi </span> */}
            </div>
          ))}
        </div>
        
        {/* Seksi Pendidikan */}
        <div className="mt-16 space-y-10" data-aos="fade-up">
          <div className="flex items-center gap-4">
            {/* Ikon Pendidikan dengan aksen emas */}
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#EAF2FA] text-[#D4AF37]">
              🎓
            </span>
            <h3 className="title">Pendidikan</h3>
          </div>
          
          {/* Tata letak grid dua kolom untuk daftar pendidikan */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
            {aboutMe.education.map((edu, i) => (
              <div key={i} className="space-y-3 pb-6 border-b border-gray/20">
                {/* Tahun dengan warna gray kustom Anda */}
                <span className="font-Poppins text-gray">{edu.year}</span>
                {/* Nama Pendidikan dengan font Inria kustom Anda */}
                <h4 className="font-Inria text-2xl font-semibold">{edu.title}</h4>
                {/* Institusi */}
                <p className="font-Poppins text-dark_primary">{edu.institution}</p>
                {/* IPK dengan warna emas, jika ada */}
                {edu.ipk && <span className="font-Poppins text-[#D4AF37]">IPK {edu.ipk}</span>}
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Services;