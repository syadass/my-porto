import { content } from "../Content";

const Skills = () => {
  const { skills } = content;

  return (
    <section
      className="min-h-fit bg-bg_light_primary scroll-mt-6"
      id="skills"
    >
      <div className="md:container px-5 py-14">
        {/* Judul Utama (Center) */}
        <div className="text-center">
          <h2 className="title" data-aos="fade-down">
            {skills.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {skills.subtitle}
          </h4>
        </div>
        <br />

        {/* Layout Vertikal (Hard Skills di atas, Soft Skills di bawah) */}
        <div className="flex flex-col gap-14 mt-6 max-w-5xl mx-auto">
          
          {/* --- BAGIAN HARD SKILLS --- */}
          <div>
            {/* Judul Kategori Kiri */}
            <h3 
              data-aos="fade-right" 
              className="text-2xl font-Inria font-bold text-dark_primary mb-6 text-left"
            >
              Hard Skills
            </h3>
            
            {/* Isi Skill (Center) */}
            <div className="flex flex-wrap justify-center gap-4">
              {skills.hard_skills?.map((skill, i) => (
                <div
                  key={`hard-${i}`}
                  data-aos="fade-up"
                  data-aos-delay={(i % 5) * 100} // Delay singkat agar cepat muncul
                  data-aos-offset="0" // Agar baris bawah langsung terlihat
                  className="bg-white group flex w-fit items-center gap-3 rounded-2xl border-2 border-slate-200 py-3 px-5 hover:border-[#D4AF37] hover:shadow-sm transition-all duration-300"
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-7 md:w-8 duration-200 group-hover:scale-125"
                  />
                  <h6 className="font-bold text-dark_primary text-[0.85rem] md:text-sm whitespace-nowrap">
                    {skill.name}
                  </h6>
                </div>
              ))}
            </div>
          </div>

          {/* --- BAGIAN SOFT SKILLS --- */}
          <div>
            {/* Judul Kategori Kiri */}
            <h3 
              data-aos="fade-right" 
              className="text-2xl font-Inria font-bold text-dark_primary mb-6 text-left"
            >
              Soft Skills
            </h3>
            
            {/* Isi Skill (Center) */}
            <div className="flex flex-wrap justify-center gap-4">
              {skills.soft_skills?.map((skill, i) => (
                <div
                  key={`soft-${i}`}
                  data-aos="fade-up"
                  data-aos-delay={(i % 5) * 100} // Delay singkat agar cepat muncul
                  data-aos-offset="0" // Agar baris bawah langsung terlihat
                  className="bg-white group flex w-fit items-center gap-3 rounded-2xl border-2 border-slate-200 py-3 px-5 hover:border-[#D4AF37] hover:shadow-sm transition-all duration-300"
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-7 md:w-8 duration-200 group-hover:scale-125"
                  />
                  <h6 className="font-bold text-dark_primary text-[0.85rem] md:text-sm whitespace-nowrap">
                    {skill.name}
                  </h6>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;