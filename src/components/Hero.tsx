import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

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
      className="relative flex items-end justify-start h-screen overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        <img
          src="https://cdn.poehali.dev/projects/819b0f3f-e30c-411b-b80e-f9ab198e7f93/files/72951b67-5b8b-4d7d-afb2-5aff8173786b.jpg"
          alt="Designer workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
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