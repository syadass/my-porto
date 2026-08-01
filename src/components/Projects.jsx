import { useEffect, useRef, useState } from "react";
import { content } from "../Content";

const Projects = () => {
  const { Projects } = content;

  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [dotCount, setDotCount] = useState(0);

  // Menghitung jumlah dot secara dinamis
  const calculateDots = () => {
    if (!scrollRef.current) return;

    const { scrollWidth, clientWidth } = scrollRef.current;
    const pages = Math.ceil(scrollWidth / clientWidth);

    setDotCount(pages > 1 ? pages : 0);
  };

  useEffect(() => {
    const timeoutId = setTimeout(calculateDots, 100);

    window.addEventListener("resize", calculateDots);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", calculateDots);
    };
  }, [Projects.project_content]);

  // Handle scroll
  const handleScroll = () => {
    if (!scrollRef.current || dotCount <= 1) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const maxScrollLeft = scrollWidth - clientWidth;

    if (maxScrollLeft <= 0) return;

    const scrollPercentage = scrollLeft / maxScrollLeft;
    const newIndex = Math.round(scrollPercentage * (dotCount - 1));

    setActiveIndex(newIndex);
  };

  // Klik indikator
  const scrollToPage = (index) => {
    if (!scrollRef.current || dotCount <= 1) return;

    const { scrollWidth, clientWidth } = scrollRef.current;
    const maxScrollLeft = scrollWidth - clientWidth;

    const targetScrollLeft = (index / (dotCount - 1)) * maxScrollLeft;

    scrollRef.current.scrollTo({
      left: targetScrollLeft,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  return (
    <section id="projects" className="bg-white scroll-mt-6">
      <div className="md:container px-5 py-14">
        {/* Judul */}
        <div className="text-center mb-6">
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>

          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
        </div>

        {/* Daftar Project */}
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
              className="group shrink-0 w-[85vw] sm:w-[350px] lg:w-[calc(33.333%-1rem)] snap-start rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Gambar */}
              <div className="mb-5 overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Informasi */}
              <div className="flex flex-col gap-2 px-1 flex-grow">
                <h5 className="font-Inria text-xl sm:text-2xl font-bold text-dark_primary line-clamp-2">
                  {item.title}
                </h5>

                <p className="font-Poppins text-[0.95rem] leading-relaxed text-slate-600 line-clamp-3">
                  {item.desc}
                </p>

                {/* Tags */}
                {item.tags?.length > 0 && (
                  <div className="mt-auto mb-4 flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="rounded-md border border-slate-200 bg-slate-100 px-2.5 py-1 font-Poppins text-[11px] sm:text-xs font-medium text-slate-600"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Footer */}
                <div
                  className={`flex items-center justify-between border-t border-slate-100 pt-4 font-Poppins text-sm font-bold text-dark_primary ${
                    !item.tags?.length ? "mt-auto" : ""
                  }`}
                >
                  <span>View Project</span>

                  <span className="transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Dots */}
        {dotCount > 0 && (
          <div
            className="mt-8 flex items-center justify-center gap-3"
            data-aos="fade-up"
          >
            {Array.from({ length: dotCount }).map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToPage(i)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  activeIndex === i
                    ? "w-10 bg-dark_primary"
                    : "w-3 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;