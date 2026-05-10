import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

// ─── ФОТО ХЕДЕРА ──────────────────────────────────────────────
// Чтобы добавить своё фото: вставь URL ниже вместо null
// Пример: const HERO_IMAGE = "https://example.com/my-photo.jpg";
const HERO_IMAGE: string | null = null;
// ──────────────────────────────────────────────────────────────

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div
      ref={container}
      id="about"
      className="relative flex items-end justify-start h-screen overflow-hidden bg-neutral-950"
    >
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        {HERO_IMAGE ? (
          <>
            <img
              src={HERO_IMAGE}
              alt="Hero background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          </>
        ) : (
          <div className="absolute inset-0 w-full h-full">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
              <rect width="100%" height="100%" fill="#0a0a0a" />
              <rect x="60%" y="0" width="40%" height="55%" fill="#111" />
              <rect x="0" y="65%" width="35%" height="35%" fill="#111" />
              <circle cx="75%" cy="28%" r="18%" fill="none" stroke="#C8FF00" strokeWidth="1" opacity="0.15" />
              <circle cx="75%" cy="28%" r="10%" fill="none" stroke="#C8FF00" strokeWidth="0.5" opacity="0.1" />
              <line x1="60%" y1="0" x2="60%" y2="100%" stroke="#222" strokeWidth="1" />
              <line x1="0" y1="55%" x2="100%" y2="55%" stroke="#222" strokeWidth="1" />
              <rect x="62%" y="2%" width="12%" height="12%" fill="#C8FF00" opacity="0.08" />
              <rect x="76%" y="2%" width="6%" height="6%" fill="none" stroke="#C8FF00" strokeWidth="1" opacity="0.2" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
          </div>
        )}
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 px-8 md:px-16 pb-16 md:pb-24 max-w-4xl">
        <p className="text-[#C8FF00] text-xs uppercase tracking-[0.4em] mb-6 font-medium">
          Графический дизайнер
        </p>
        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tight leading-[0.85] text-white mb-8 uppercase">
          Кузнецов<br />
          <span className="text-[#C8FF00]">Александр</span>
        </h1>
        <p className="text-white/70 text-base md:text-lg max-w-md leading-relaxed">
          Создаю визуальные системы, которые говорят сами за себя — от логотипа до упаковки, от экрана до печати.
        </p>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 right-8 z-10 text-white/40 text-xs uppercase tracking-widest flex items-center gap-3"
      >
        <span>Скролл</span>
        <div className="w-8 h-px bg-white/40" />
      </motion.div>
    </div>
  );
}
