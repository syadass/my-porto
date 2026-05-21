import { content } from "../Content";

const Testimonials = () => {
  // Panggil data Experience dari content
  const { Experience } = content;

  return (
    // Menambahkan className="bg-bg_light_primary" di sini
    <section id="experience" className="bg-bg_light_primary">
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">
          {Experience.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Experience.subtitle}
        </h4>
        <br />

        {/* Layout Grid: Kiri untuk Kerja, Kanan untuk Organisasi di Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
          
          {/* KOLOM KIRI: Pengalaman Kerja */}
          <div data-aos="fade-up">
            <h3 className="text-2xl font-Inria font-bold text-dark_primary mb-8 flex items-center gap-3">
              💼 Pengalaman Kerja
            </h3>
            {/* Garis vertikal timeline dengan warna emas */}
            <div className="flex flex-col gap-10 border-l-2 border-[#D4AF37] ml-3 pl-8">
              {Experience.work.map((item, i) => (
                <div key={i} className="relative">
                  {/* Titik (Dot) Timeline */}
                  <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full bg-[#D4AF37] border-4 border-bg_light_primary box-content"></span>
                  
                  <h4 className="text-xl font-bold font-Poppins text-dark_primary">{item.title}</h4>
                  <h6 className="text-[0.9rem] font-semibold text-gray mt-1 mb-3">
                    {item.company} <span className="mx-2">|</span> {item.year}
                  </h6>
                  <p className="font-Poppins text-[0.95rem] leading-relaxed text-slate-700">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* KOLOM KANAN: Pengalaman Organisasi */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-2xl font-Inria font-bold text-dark_primary mb-8 flex items-center gap-3">
              🤝 Pengalaman Organisasi
            </h3>
            {/* Garis vertikal timeline dengan warna emas */}
            <div className="flex flex-col gap-10 border-l-2 border-[#D4AF37] ml-3 pl-8">
              {Experience.organization.map((item, i) => (
                <div key={i} className="relative">
                  {/* Titik (Dot) Timeline */}
                  <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full bg-[#D4AF37] border-4 border-bg_light_primary box-content"></span>
                  
                  <h4 className="text-xl font-bold font-Poppins text-dark_primary">{item.title}</h4>
                  <h6 className="text-[0.9rem] font-semibold text-gray mt-1 mb-3">
                    {item.company} <span className="mx-2">|</span> {item.year}
                  </h6>
                  <p className="font-Poppins text-[0.95rem] leading-relaxed text-slate-700">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;