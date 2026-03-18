import { motion, type Easing } from "framer-motion";
import EcosystemDiagram from "./EcosystemDiagram";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" as Easing },
});

const stats = [
  { num: "3", label: "Bên cùng hưởng lợi" },
  { num: "B2B2C", label: "Mô Hình Kinh Doanh" },
];

const Hero = () => (
  <section
    id="hero"
    className="relative min-h-[100svh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-16 pt-24 md:pt-28 pb-16 md:pb-20"
    style={{
      backgroundImage:
        "linear-gradient(0deg, hsla(220,14%,86%,0.28) 1px, transparent 1px), linear-gradient(90deg, hsla(220,14%,86%,0.22) 1px, transparent 1px), linear-gradient(180deg, hsla(220,18%,96%,1) 0%, hsla(220,22%,93%,1) 100%)",
      backgroundSize: "48px 48px, 48px 48px, 100% 100%",
    }}
  >
    {/* BG radials */}
    <div className="absolute inset-0 pointer-events-none" style={{
      background:
        "radial-gradient(ellipse 68% 48% at 50% 36%, hsla(359,74%,52%,0.12) 0%, transparent 70%), radial-gradient(ellipse 52% 38% at 20% 82%, hsla(220,12%,74%,0.22) 0%, transparent 65%), radial-gradient(ellipse 42% 34% at 82% 18%, hsla(359,74%,52%,0.08) 0%, transparent 60%)"
    }} />

    <div className="relative z-10 text-center max-w-[1080px] w-full">
      <motion.div {...fadeUp()} className="inline-flex items-center gap-2.5 bg-card/70 border border-border px-4 sm:px-5 py-2 rounded-full text-[11px] sm:text-[12px] tracking-[1.5px] sm:tracking-[2px] uppercase text-foreground/75 mb-7 sm:mb-8">
        <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse-dot" />
        Social Commerce × O2O Platform · Vietnam
      </motion.div>

      <EcosystemDiagram />

      <motion.p {...fadeUp(0.2)} className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-[580px] mx-auto mt-6 sm:mt-7 mb-10 sm:mb-12 font-light px-1">
        dCreator nền tảng đầu tiên tại Việt Nam giúp Brand, Creator và Users cùng nhau hợp tác để bán hàng,
        thay vì chỉ quảng cáo đơn thuần.
      </motion.p>

      <motion.div {...fadeUp(0.3)} className="flex gap-3 sm:gap-4 justify-center flex-wrap">
        <a href="#solution" className="bg-primary text-primary-foreground w-full sm:w-auto px-6 sm:px-10 py-3.5 sm:py-4 rounded-full text-[14px] sm:text-[15px] font-semibold shadow-[0_12px_30px_hsla(359,74%,52%,0.25)] hover:translate-y-[-2px] hover:shadow-[0_18px_34px_hsla(359,74%,52%,0.28)] transition-all inline-block">
          Khám Phá Mô Hình
        </a>
        <a href="#cta" className="border border-border text-foreground w-full sm:w-auto px-6 sm:px-10 py-3.5 sm:py-4 rounded-full text-[14px] sm:text-[15px] font-medium bg-card/60 hover:bg-card transition-all inline-block">
          Liên Hệ Hợp Tác
        </a>
      </motion.div>

      <motion.div {...fadeUp(0.4)} className="grid grid-cols-2 gap-6 sm:gap-10 mt-14 md:mt-20 max-w-xl mx-auto">
        {stats.map((s, i) => (
          <div key={i} className="text-center">
            <div className="font-display text-[34px] sm:text-[42px] tracking-wide text-primary leading-none">{s.num}</div>
            <div className="text-[10px] sm:text-[11px] text-muted-foreground tracking-[1.2px] sm:tracking-[1.5px] uppercase mt-1.5">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </div>

    {/* Scroll hint */}
    <div className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground text-[11px] tracking-[2px] uppercase">
      <div className="w-px h-12 bg-gradient-to-b from-primary/60 to-transparent animate-scroll-line" />
    </div>
  </section>
);

export default Hero;
