import { content } from "../Content";

const Hireme = () => {
  const { Hireme } = content;

  return (
    <section className="bg-white" id="hireme">
      <div className="md:container px-5 py-14">
        
        {/* Bagian Judul */}
        <div className="text-center mb-12">
          <h2 className="title" data-aos="fade-down">
            {Hireme.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Hireme.subtitle}
          </h4>
        </div>

        {/* Layout Grid: 3 Kolom dalam 1 baris di desktop (lg:grid-cols-3) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {Hireme.awards_list.map((award, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="bg-bg_light_primary p-5 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left min-h-[120px]"
            >
              {/* Bagian Kiri: Ikon Piala/Awards */}
              <div className="flex-shrink-0 bg-white shadow-sm text-slate-700 p-3.5 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M18.75 4.236c.982.143 1.954.317 2.916.52a6.003 6.003 0 0 1-5.395 4.972m0 0a8.026 8.026 0 0 0-1.423-4.51c-.328-.454-.707-.862-1.125-1.226b-.005-.004a1.504 1.504 0 0 0-1.802 0l-.005.004c-.418.364-.797.772-1.125 1.226a8.026 8.026 0 0 0-1.423 4.51m5.007 0a7.454 7.454 0 0 1-.982 3.172M9.497 9.728a7.454 7.454 0 0 0 .981 3.172"
                  />
                </svg>
              </div>
              
              {/* Bagian Kanan: Konten Teks */}
              <div className="flex flex-col justify-center flex-grow mt-2 sm:mt-0">
                <h5 className="font-bold font-Poppins text-sm lg:text-base text-dark_primary leading-snug mb-1">
                  {award.name}
                </h5>
                
                {/* Penyelenggara & Tahun sejajar */}
                <div className="mt-1 leading-normal">
                  <span className="text-xs lg:text-sm font-semibold font-Poppins text-gray">
                    {award.issuer}
                  </span>
                  <span className="text-gray/40 mx-2 hidden sm:inline-block">|</span>
                  <span className="text-[11px] lg:text-xs font-medium font-Poppins text-gray/70 bg-white px-2 py-1 rounded-md inline-block whitespace-nowrap mt-1 lg:mt-0 shadow-sm">
                    {award.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Hireme;