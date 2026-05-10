import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

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
          <img
            src="/images/spiral-circles.jpg"
            alt="Abstract design"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
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
