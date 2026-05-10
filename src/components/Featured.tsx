import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

function Lightbox({
  photos,
  initialIndex,
  onClose,
}: {
  photos: { label: string; src?: string }[];
  initialIndex: number;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(initialIndex);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setCurrent((p) => (p + 1) % photos.length);
      if (e.key === "ArrowLeft") setCurrent((p) => (p - 1 + photos.length) % photos.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [photos.length, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
      >
        <Icon name="X" size={24} />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); setCurrent((p) => (p - 1 + photos.length) % photos.length); }}
        className="absolute left-4 md:left-8 w-12 h-12 flex items-center justify-center text-white/40 hover:text-white transition-colors"
      >
        <Icon name="ChevronLeft" size={32} />
      </button>

      <motion.div
        key={current}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        className="w-full max-w-5xl mx-16 aspect-[4/3] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {photos[current].src ? (
          <img
            src={photos[current].src}
            alt={photos[current].label}
            className="w-full h-full object-contain"
          />
        ) : (
          <div className="w-full h-full bg-neutral-900 flex flex-col items-center justify-center gap-4">
            <Icon name="Image" size={56} className="text-white/10" />
            <p className="text-white/20 text-sm uppercase tracking-widest">{photos[current].label}</p>
          </div>
        )}
      </motion.div>

      <button
        onClick={(e) => { e.stopPropagation(); setCurrent((p) => (p + 1) % photos.length); }}
        className="absolute right-4 md:right-8 w-12 h-12 flex items-center justify-center text-white/40 hover:text-white transition-colors"
      >
        <Icon name="ChevronRight" size={32} />
      </button>

      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
        {photos.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
            className="w-1.5 h-1.5 rounded-full transition-all duration-200"
            style={{ backgroundColor: i === current ? "#C8FF00" : "rgba(255,255,255,0.2)" }}
          />
        ))}
      </div>

      <div className="absolute bottom-6 right-6 text-white/20 text-xs uppercase tracking-widest">
        {current + 1} / {photos.length}
      </div>
    </motion.div>
  );
}

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
  {
    number: "05",
    title: "Эксперименты\nи Творчество",
    description: "Личные проекты, арт-эксперименты, нестандартные решения — пространство без ограничений и брифов, где рождаются самые смелые идеи.",
    tags: ["Арт-проекты", "Motion", "Коллажи", "Шрифты"],
    accent: "#C8FF00",
    bg: "bg-neutral-950",
    textColor: "text-white",
    dark: true,
    experimental: true,
    photos: [
      { label: "Эксперимент 1" },
      { label: "Эксперимент 2" },
      { label: "Эксперимент 3" },
    ],
  },
];

function PhotoGallery({ photos, dark }: { photos: { label: string; src?: string }[]; dark: boolean }) {
  const [active, setActive] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            photos={photos}
            initialIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>

      <div className="flex-1 flex flex-col gap-3">
        <div className="relative aspect-[4/3] overflow-hidden group cursor-zoom-in" onClick={() => setLightboxIndex(active)}>
          <div className={`w-full h-full flex items-center justify-center ${dark ? "bg-neutral-800" : "bg-neutral-200"}`}>
            {photos[active].src ? (
              <img src={photos[active].src} alt={photos[active].label} className="w-full h-full object-cover" />
            ) : (
              <div className="text-center">
                <Icon name="Image" size={36} className={dark ? "text-white/10 mx-auto mb-2" : "text-neutral-300 mx-auto mb-2"} />
                <p className={`text-xs uppercase tracking-widest ${dark ? "text-white/20" : "text-neutral-300"}`}>
                  {photos[active].label}
                </p>
              </div>
            )}
          </div>

          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/60 px-3 py-1.5 flex items-center gap-2">
              <Icon name="Expand" size={14} className="text-white" />
              <span className="text-white text-xs uppercase tracking-wider">Открыть</span>
            </div>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); setActive((prev) => (prev - 1 + photos.length) % photos.length); }}
            className={`absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${dark ? "bg-white/10 text-white hover:bg-white/20" : "bg-black/10 text-black hover:bg-black/20"}`}
          >
            <Icon name="ChevronLeft" size={16} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setActive((prev) => (prev + 1) % photos.length); }}
            className={`absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${dark ? "bg-white/10 text-white hover:bg-white/20" : "bg-black/10 text-black hover:bg-black/20"}`}
          >
            <Icon name="ChevronRight" size={16} />
          </button>

          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setActive(i); }}
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
              onClick={() => { setActive(i); setLightboxIndex(i); }}
              className={`relative aspect-square overflow-hidden transition-all duration-200 group/thumb ${dark ? "bg-neutral-800" : "bg-neutral-200"}`}
              style={{ outline: active === i ? "2px solid #C8FF00" : "2px solid transparent" }}
            >
              {photo.src ? (
                <img src={photo.src} alt={photo.label} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className={`text-xs font-medium ${dark ? "text-white/20" : "text-neutral-300"}`}>{i + 1}</span>
                </div>
              )}
              <div className="absolute inset-0 bg-black/0 group-hover/thumb:bg-black/30 transition-colors duration-150" />
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

function ChapterBlock({ chapter, index }: { chapter: typeof chapters[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const experimental = "experimental" in chapter && chapter.experimental;

  return (
    <div
      ref={ref}
      id={experimental ? "works" : undefined}
      className={`${chapter.bg} py-20 px-8 md:px-16 lg:px-24 relative overflow-hidden`}
    >
      {experimental && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.06]"
            style={{ background: "radial-gradient(circle, #C8FF00, transparent 70%)" }}
          />
          <div
            className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full opacity-[0.04]"
            style={{ background: "radial-gradient(circle, #C8FF00, transparent 70%)" }}
          />
          <div className="absolute top-8 left-8 text-[#C8FF00]/5 text-[20vw] font-black leading-none select-none uppercase">
            ✦
          </div>
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.1 }}
        className={`w-full max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-20 relative z-10 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
      >
        <div className="flex-1 lg:pt-4">
          <div className="flex items-start mb-2">
            <span
              className="text-[7rem] font-black leading-none select-none"
              style={{ color: chapter.accent, opacity: experimental ? 0.25 : 0.12 }}
            >
              {chapter.number}
            </span>
          </div>
          <p
            className="text-xs uppercase tracking-[0.4em] mb-4 font-medium"
            style={{ color: chapter.dark ? chapter.accent : "#888" }}
          >
            {`Глава ${chapter.number}`}
          </p>
          <h2
            className={`text-4xl md:text-5xl font-black leading-[0.9] tracking-tight uppercase mb-6 whitespace-pre-line ${chapter.textColor}`}
          >
            {experimental
              ? <>
                  Эксперименты<br />
                  <span style={{ WebkitTextStroke: "2px #C8FF00", color: "transparent" }}>
                    и Творчество
                  </span>
                </>
              : chapter.title}
          </h2>
          <p className={`text-base leading-relaxed mb-8 max-w-sm ${chapter.dark ? "text-white/60" : "text-neutral-500"}`}>
            {chapter.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {chapter.tags.map((tag) => (
              <span
                key={tag}
                className={`text-xs uppercase tracking-wider px-3 py-1.5 border transition-colors duration-300 ${
                  chapter.dark
                    ? "border-white/20 text-white/50 hover:border-[#C8FF00] hover:text-[#C8FF00]"
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

export default function Featured() {
  return (
    <section>
      {chapters.map((chapter, index) => (
        <ChapterBlock key={chapter.number} chapter={chapter} index={index} />
      ))}
    </section>
  );
}