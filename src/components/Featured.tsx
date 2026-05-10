import { useScroll, useTransform, motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const chapters = [
  {
    number: "01",
    title: "Фирменный стиль\nи Брендинг",
    description: "Логотипы, айдентика, брендбуки. Создаю цельные визуальные системы, которые работают на всех носителях и узнаются с первого взгляда.",
    tags: ["Логотип", "Айдентика", "Брендбук", "Типографика"],
    accent: "#C8FF00",
    bg: "bg-white",
    textColor: "text-neutral-900",
    dark: false,
    photos: [
      { label: "Проект 1" },
      { label: "Проект 2" },
      { label: "Проект 3" },
    ],
  },
  {
    number: "02",
    title: "Веб и цифровой\nдизайн",
    description: "UI/UX для сайтов и приложений, адаптивные интерфейсы, дизайн-системы. От wireframe до пиксель-перфект макета.",
    tags: ["UI/UX", "Web Design", "Figma", "Design System"],
    accent: "#C8FF00",
    bg: "bg-neutral-950",
    textColor: "text-white",
    dark: true,
    photos: [
      { label: "Проект 1" },
      { label: "Проект 2" },
      { label: "Проект 3" },
    ],
  },
  {
    number: "03",
    title: "Реклама и\nсоциальные сети",
    description: "Баннеры, посты, Stories, рекламные кампании. Визуал, который останавливает скролл и заставляет нажать.",
    tags: ["SMM", "Баннеры", "Motion", "Кампании"],
    accent: "#C8FF00",
    bg: "bg-white",
    textColor: "text-neutral-900",
    dark: false,
    photos: [
      { label: "Проект 1" },
      { label: "Проект 2" },
      { label: "Проект 3" },
    ],
  },
  {
    number: "04",
    title: "Полиграфия\nи упаковка",
    description: "Журналы, каталоги, листовки, упаковка продуктов. Работаю с типографиями и знаю все тонкости допечатной подготовки.",
    tags: ["Упаковка", "Печать", "Каталоги", "Prepress"],
    accent: "#C8FF00",
    bg: "bg-neutral-100",
    textColor: "text-neutral-900",
    dark: false,
    photos: [
      { label: "Проект 1" },
      { label: "Проект 2" },
      { label: "Проект 3" },
    ],
  },
];

function PhotoGallery({ photos, dark }: { photos: { label: string }[]; dark: boolean }) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex-1 flex flex-col gap-3">
      <div className="relative aspect-[4/3] overflow-hidden group">
        <div
          className={`w-full h-full flex items-center justify-center ${dark ? "bg-neutral-800" : "bg-neutral-200"}`}
        >
          <div className="text-center">
            <Icon name="Image" size={36} className={dark ? "text-white/10 mx-auto mb-2" : "text-neutral-300 mx-auto mb-2"} />
            <p className={`text-xs uppercase tracking-widest ${dark ? "text-white/20" : "text-neutral-300"}`}>
              {photos[active].label}
            </p>
          </div>
        </div>
        <button
          onClick={() => setActive((prev) => (prev - 1 + photos.length) % photos.length)}
          className={`absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${dark ? "bg-white/10 text-white hover:bg-white/20" : "bg-black/10 text-black hover:bg-black/20"}`}
        >
          <Icon name="ChevronLeft" size={16} />
        </button>
        <button
          onClick={() => setActive((prev) => (prev + 1) % photos.length)}
          className={`absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${dark ? "bg-white/10 text-white hover:bg-white/20" : "bg-black/10 text-black hover:bg-black/20"}`}
        >
          <Icon name="ChevronRight" size={16} />
        </button>
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
          {photos.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="w-1.5 h-1.5 rounded-full transition-all duration-200"
              style={{ backgroundColor: i === active ? "#C8FF00" : dark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.15)" }}
            />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {photos.map((photo, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`relative aspect-square overflow-hidden transition-all duration-200 ${
              dark ? "bg-neutral-800" : "bg-neutral-200"
            }`}
            style={{ outline: active === i ? "2px solid #C8FF00" : "2px solid transparent" }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <span className={`text-xs font-medium ${dark ? "text-white/20" : "text-neutral-300"}`}>{i + 1}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function ChapterBlock({ chapter, index }: { chapter: typeof chapters[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className={`${chapter.bg} py-20 px-8 md:px-16 lg:px-24`}
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.1 }}
        className={`w-full max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-20 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
      >
        <div className="flex-1 lg:pt-4">
          <div className="flex items-start mb-2">
            <span
              className="text-[7rem] font-black leading-none select-none"
              style={{ color: chapter.accent, opacity: 0.12 }}
            >
              {chapter.number}
            </span>
          </div>
          <p
            className="text-xs uppercase tracking-[0.4em] mb-4 font-medium"
            style={{ color: chapter.dark ? chapter.accent : "#888" }}
          >
            Глава {chapter.number}
          </p>
          <h2
            className={`text-4xl md:text-5xl font-black leading-[0.9] tracking-tight uppercase mb-6 whitespace-pre-line ${chapter.textColor}`}
          >
            {chapter.title}
          </h2>
          <p className={`text-base leading-relaxed mb-8 max-w-sm ${chapter.dark ? "text-white/60" : "text-neutral-500"}`}>
            {chapter.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {chapter.tags.map((tag) => (
              <span
                key={tag}
                className={`text-xs uppercase tracking-wider px-3 py-1.5 border ${
                  chapter.dark
                    ? "border-white/20 text-white/50"
                    : "border-neutral-200 text-neutral-400"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <PhotoGallery photos={chapter.photos} dark={chapter.dark} />
      </motion.div>
    </div>
  );
}

function ExperimentsBlock() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  return (
    <div
      ref={containerRef}
      id="works"
      className="min-h-screen bg-neutral-950 flex items-center justify-center px-8 md:px-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          style={{ rotate }}
          className="text-[30vw] font-black text-white/[0.03] leading-none select-none uppercase"
        >
          05
        </motion.div>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9 }}
        className="relative z-10 text-center max-w-3xl"
      >
        <p className="text-[#C8FF00] text-xs uppercase tracking-[0.5em] mb-8 font-medium">
          Глава 05 · Опционально
        </p>
        <h2 className="text-5xl md:text-7xl font-black text-white uppercase leading-[0.85] tracking-tight mb-8">
          Эксперименты<br />
          <span className="text-white/20">&amp;</span>{" "}
          <span style={{ WebkitTextStroke: "2px #C8FF00", color: "transparent" }}>
            Творчество
          </span>
        </h2>
        <p className="text-white/40 text-base md:text-lg leading-relaxed mb-12 max-w-xl mx-auto">
          Личные проекты, арт-эксперименты, нестандартные решения — пространство без ограничений и брифов, где рождаются самые смелые идеи.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          {["Арт-проекты", "Генеративный дизайн", "Motion", "Коллажи", "Шрифты"].map((tag) => (
            <span
              key={tag}
              className="text-xs uppercase tracking-wider px-4 py-2 border border-white/10 text-white/30 hover:border-[#C8FF00] hover:text-[#C8FF00] transition-colors duration-300 cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-16 w-px h-16 bg-white/10 mx-auto" />
        <p className="text-white/20 text-xs uppercase tracking-widest mt-4">Скоро</p>
      </motion.div>
    </div>
  );
}

export default function Featured() {
  return (
    <section>
      {chapters.map((chapter, index) => (
        <ChapterBlock key={chapter.number} chapter={chapter} index={index} />
      ))}
      <ExperimentsBlock />
    </section>
  );
}
