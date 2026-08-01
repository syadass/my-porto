import { content } from "../Content";

const Services = () => {
  // Panggil data About Me dari content
  const { aboutMe } = content;

  return (
    <section id="services" className="scroll-mt-6">
      <div className="md:container px-5 py-14">
        {/* Judul Seksi */}
        <h2 className="title" data-aos="fade-down">
          {aboutMe.title}
        </h2>

        {/* Subjudul */}
        <h4 className="subtitle" data-aos="fade-down">
          {aboutMe.subtitle}
        </h4>

        <br />

        {/* Deskripsi */}
        <p
          className="font-Poppins text-lg leading-relaxed max-w-3xl"
          data-aos="fade-right"
        >
          {aboutMe.description}
        </p>

        {/* Pendidikan (margin top disesuaikan karena statistik di atasnya dihapus) */}
        <div className="mt-12 space-y-10" data-aos="fade-up">
          <div className="flex items-center gap-4">
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#EAF2FA] text-[#D4AF37]">
              🎓
            </span>

            <h3 className="title">Pendidikan</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
            {aboutMe.education.map((edu, i) => (
              <div
                key={i}
                className="space-y-3 pb-6 border-b border-gray/20"
              >
                <span className="font-Poppins text-gray">{edu.year}</span>

                <h4 className="font-Inria text-2xl font-semibold">
                  {edu.title}
                </h4>

                <p className="font-Poppins text-dark_primary">
                  {edu.institution}
                </p>

                {/* Keterangan IPK dikembalikan di sini */}
                {edu.ipk && (
                  <span className="font-Poppins text-[#D4AF37]">
                    IPK {edu.ipk}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;