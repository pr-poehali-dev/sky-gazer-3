import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

// ─── ФОТО СЕКЦИИ "ПРОЦЕСС" ────────────────────────────────────
// Чтобы добавить своё фото: вставь URL ниже вместо null
// Пример: const PROMO_IMAGE = "https://example.com/my-photo.jpg";
const PROMO_IMAGE: string | null = null;
// ──────────────────────────────────────────────────────────────

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          {PROMO_IMAGE ? (
            <>
              <img
                src={PROMO_IMAGE}
                alt="Promo background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
            </>
          ) : (
            <div className="absolute inset-0 bg-neutral-950">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill="#080808" />
                <rect x="0" y="0" width="50%" height="50%" fill="#0f0f0f" />
                <rect x="50%" y="50%" width="50%" height="50%" fill="#0f0f0f" />
                <circle cx="50%" cy="50%" r="30%" fill="none" stroke="#C8FF00" strokeWidth="0.5" opacity="0.12" />
                <circle cx="50%" cy="50%" r="18%" fill="none" stroke="#C8FF00" strokeWidth="0.5" opacity="0.08" />
                <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#1a1a1a" strokeWidth="1" />
                <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#1a1a1a" strokeWidth="1" />
                <rect x="20%" y="20%" width="15%" height="15%" fill="none" stroke="#C8FF00" strokeWidth="0.5" opacity="0.15" />
                <rect x="65%" y="65%" width="15%" height="15%" fill="#C8FF00" opacity="0.04" />
                <line x1="0" y1="0" x2="100%" y2="100%" stroke="#151515" strokeWidth="1" />
              </svg>
              <div className="absolute inset-0 bg-black/60" />
            </div>
          )}
        </motion.div>
      </div>

      <h3 className="absolute top-12 left-8 md:left-16 text-white/60 uppercase z-10 text-xs tracking-[0.4em]">
        Процесс работы
      </h3>

      <p className="absolute bottom-12 left-8 md:left-16 right-8 md:right-16 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-5xl z-10 font-black leading-[0.85] uppercase tracking-tight">
        Дизайн — это не украшение.<br />
        <span style={{ WebkitTextStroke: "1px rgba(200,255,0,0.8)", color: "transparent" }}>
          Это язык.
        </span>
      </p>

      <div className="absolute bottom-12 right-8 md:right-16 z-10">
        <div className="w-px h-16 bg-white/20" />
      </div>
    </div>
  );
}
