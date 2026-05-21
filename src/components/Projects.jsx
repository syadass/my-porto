import { content } from "../Content";
import { useState, useRef, useEffect } from "react";

const Projects = () => {
  const { Projects } = content;
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [dotCount, setDotCount] = useState(0);

  // Menghitung jumlah dot secara dinamis
  const calculateDots = () => {
    if (scrollRef.current) {
      const { scrollWidth, clientWidth } = scrollRef.current;
      const pages = Math.ceil(scrollWidth / clientWidth);
      setDotCount(pages > 1 ? pages : 0);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(calculateDots, 100);
    window.addEventListener("resize", calculateDots);
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", calculateDots);
    };
  }, [Projects.project_content]);

  // --- LOGIKA SCROLL YANG SUDAH DIPERBAIKI ---
  const handleScroll = () => {
    if (scrollRef.current && dotCount > 1) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const maxScrollLeft = scrollWidth - clientWidth;
      
      if (maxScrollLeft > 0) {
        const scrollPercentage = scrollLeft / maxScrollLeft;
        const newIndex = Math.round(scrollPercentage * (dotCount - 1));
        setActiveIndex(newIndex);
      }
    }
  };

  const scrollToPage = (index) => {
    if (scrollRef.current && dotCount > 1) {
      const { scrollWidth, clientWidth } = scrollRef.current;
      const maxScrollLeft = scrollWidth - clientWidth;
      const targetScrollLeft = (index / (dotCount - 1)) * maxScrollLeft;
      
      scrollRef.current.scrollTo({
        left: targetScrollLeft,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };
  // -------------------------------------------

  return (
    <section className="bg-white" id="projects">
      <div className="md:container px-5 py-14">
        
        {/* Bagian Judul */}
        <div className="text-center mb-12">
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
        </div>

        {/* Layout Flex Horizontal Scroll */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
        >
          {Projects.project_content.map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay={i * 200}
              className="shrink-0 w-[85vw] sm:w-[350px] lg:w-[calc(33.333%-1rem)] snap-start bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col group cursor-pointer"
            >
              {/* Gambar / Screenshot Project */}
              <div className="overflow-hidden rounded-xl mb-5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Info Project */}
              <div className="flex flex-col gap-2 px-1 flex-grow">
                <h5 className="font-bold font-Inria text-xl sm:text-2xl text-dark_primary line-clamp-2">
                  {item.title}
                </h5>
                <p className="font-Poppins text-[0.95rem] text-slate-600 leading-relaxed mb-3 line-clamp-3">
                  {item.desc}
                </p>
                
                {/* --- BAGIAN TAGAR DITAMBAHKAN DI SINI --- */}
                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                    {item.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="bg-slate-100 text-slate-600 border border-slate-200 text-[11px] sm:text-xs font-medium font-Poppins px-2.5 py-1 rounded-md"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
                {/* ---------------------------------------- */}

                {/* Teks penanda link (didorong ke bawah dengan mt-auto jika tag tidak ada) */}
                <div className={`pt-4 border-t border-slate-100 flex justify-between items-center text-dark_primary font-bold font-Poppins text-sm ${!item.tags && "mt-auto"}`}>
                  <span>View Project</span>
                  <span className="group-hover:translate-x-2 transition-transform duration-300">
                    →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Indikator "Bulat-Bulat" (Dots) */}
        {dotCount > 0 && (
          <div className="flex justify-center items-center gap-3 mt-8" data-aos="fade-up">
            {Array.from({ length: dotCount }).map((_, i) => (
              <div
                key={i}
                onClick={() => scrollToPage(i)}
                className={`h-3 rounded-full cursor-pointer transition-all duration-300 ${
                  activeIndex === i 
                    ? "bg-dark_primary w-10" 
                    : "bg-slate-300 w-3 hover:bg-slate-400"
                }`}
              ></div>
            ))}
          </div>
        )}
        
      </div>
    </section>
  );
};

export default Projects;