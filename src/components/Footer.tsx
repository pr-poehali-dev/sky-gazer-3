import Icon from "@/components/ui/icon";

export default function Footer() {
  return (
    <div
      id="contact"
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div className="bg-neutral-950 py-8 px-8 md:px-16 h-full w-full flex flex-col justify-between">
            <div className="flex flex-col sm:flex-row gap-12 sm:gap-20">
              <div className="flex flex-col gap-3">
                <h3 className="mb-1 uppercase text-neutral-500 text-xs tracking-[0.3em]">Контакты</h3>
                <a
                  href="mailto:kuznecovcoast@gmail.com"
                  className="flex items-center gap-3 text-white hover:text-[#C8FF00] transition-colors duration-300 text-sm group"
                >
                  <Icon name="Mail" size={14} className="text-neutral-600 group-hover:text-[#C8FF00] transition-colors duration-300 shrink-0" />
                  kuznecovcoast@gmail.com
                </a>
                <a
                  href="https://t.me/exavilnes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white hover:text-[#C8FF00] transition-colors duration-300 text-sm group"
                >
                  <Icon name="Send" size={14} className="text-neutral-600 group-hover:text-[#C8FF00] transition-colors duration-300 shrink-0" />
                  @exavilnes
                </a>
                <a
                  href="tel:+79775862472"
                  className="flex items-center gap-3 text-white hover:text-[#C8FF00] transition-colors duration-300 text-sm group"
                >
                  <Icon name="Phone" size={14} className="text-neutral-600 group-hover:text-[#C8FF00] transition-colors duration-300 shrink-0" />
                  8 977 586 24 72
                </a>
              </div>

              <div className="flex flex-col gap-2 sm:ml-auto">
                <h3 className="mb-1 uppercase text-neutral-500 text-xs tracking-[0.3em]">Статус</h3>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#C8FF00] animate-pulse" />
                  <span className="text-[#C8FF00] text-sm">В поиске работы</span>
                </div>
                <p className="text-neutral-500 text-xs mt-1 max-w-[180px] leading-relaxed">
                  Открыт к предложениям о сотрудничестве
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
              <h1 className="text-[18vw] sm:text-[16vw] lg:text-[13vw] leading-[0.8] font-black tracking-tight uppercase">
                <span className="text-white">КУ<span style={{ marginLeft: "0.06em" }}>З</span>НЕЦОВ</span>
              </h1>
              <div className="text-right">
                <p className="text-neutral-600 text-xs uppercase tracking-widest">{new Date().getFullYear()}</p>
                <p className="text-neutral-600 text-xs uppercase tracking-widest">Graphic Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}