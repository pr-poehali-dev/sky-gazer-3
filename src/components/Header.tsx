interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-50 px-6 py-5 mix-blend-normal ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white text-xs uppercase tracking-[0.3em] font-medium opacity-90">
          Portfolio
        </div>
        <nav className="flex gap-8">
          <a href="#about" className="text-white hover:text-[#C8FF00] transition-colors duration-300 uppercase text-xs tracking-widest">
            Обо мне
          </a>
          <a href="#works" className="text-white hover:text-[#C8FF00] transition-colors duration-300 uppercase text-xs tracking-widest">
            Работы
          </a>
          <a href="#contact" className="text-white hover:text-[#C8FF00] transition-colors duration-300 uppercase text-xs tracking-widest">
            Контакт
          </a>
        </nav>
      </div>
    </header>
  );
}
