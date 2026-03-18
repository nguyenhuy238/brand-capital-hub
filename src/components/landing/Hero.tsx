import { motion, type Easing } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" as Easing },
});

const stats = [
  { num: "3", label: "Bên cùng hưởng lợi" },
  { num: "O2O", label: "Online to Offline" },
  { num: "∞", label: "Vòng lặp doanh thu" },
];

const Hero = () => (
  <section
    id="hero"
    className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-16 pt-28 pb-20"
    style={{
      backgroundImage:
        "linear-gradient(45deg, hsla(280,60%,55%,0.07) 1px, transparent 1px), linear-gradient(-45deg, hsla(280,60%,55%,0.07) 1px, transparent 1px)",
      backgroundSize: "50px 50px",
    }}
  >
    {/* BG radials */}
    <div className="absolute inset-0 pointer-events-none" style={{
      background:
        "radial-gradient(ellipse 80% 60% at 50% 40%, hsla(263,70%,50%,0.35) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 20% 80%, hsla(330,80%,55%,0.2) 0%, transparent 60%), radial-gradient(ellipse 40% 30% at 80% 20%, hsla(280,60%,55%,0.25) 0%, transparent 60%)"
    }} />

    <div className="relative z-10 text-center max-w-[900px]">
      <motion.div {...fadeUp()} className="inline-flex items-center gap-2.5 bg-primary/15 border border-primary/30 px-5 py-2 rounded-full text-[12px] tracking-[2px] uppercase text-lavender mb-8">
        <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse-dot" />
        Social Commerce × O2O Platform · Vietnam
      </motion.div>

      <motion.h1 {...fadeUp(0.1)} className="font-display leading-[0.95] tracking-tight mb-2" style={{ fontSize: "clamp(64px, 10vw, 120px)" }}>
        <span className="block text-foreground">BIẾN HÀNG HÓA</span>
        <span className="block text-gradient">THÀNH VỐN</span>
        <span className="block text-foreground">SÁNG TẠO</span>
      </motion.h1>

      <motion.p {...fadeUp(0.2)} className="text-lg text-muted-foreground leading-relaxed max-w-[580px] mx-auto mt-7 mb-12 font-light">
        dCreator là nền tảng đầu tiên tại Việt Nam kết nối{" "}
        <strong className="text-lavender font-semibold">Brand · Creator · User</strong> trong một hệ sinh thái Social Commerce O2O —
        nơi hàng hóa trở thành vốn đầu tư cho nội dung sáng tạo.
      </motion.p>

      <motion.div {...fadeUp(0.3)} className="flex gap-4 justify-center flex-wrap">
        <a href="#solution" className="bg-gradient-primary text-primary-foreground px-10 py-4 rounded-full text-[15px] font-semibold shadow-[0_0_40px_hsla(280,60%,55%,0.4)] hover:translate-y-[-3px] hover:shadow-[0_0_60px_hsla(280,60%,55%,0.6)] transition-all inline-block">
          Khám Phá Mô Hình
        </a>
        <a href="#cta" className="border border-primary/40 text-lavender px-10 py-4 rounded-full text-[15px] font-medium hover:bg-primary/10 hover:border-violet transition-all inline-block">
          Liên Hệ Hợp Tác
        </a>
      </motion.div>

      <motion.div {...fadeUp(0.4)} className="flex gap-8 md:gap-16 justify-center mt-20 flex-wrap">
        {stats.map((s, i) => (
          <div key={i} className="flex items-center gap-8 md:gap-16">
            {i > 0 && <div className="w-px h-12 bg-primary/20 hidden md:block" style={{ marginLeft: i > 0 ? 0 : undefined }} />}
            <div className="text-center">
              <div className="font-display text-[42px] tracking-wide text-gradient leading-none">{s.num}</div>
              <div className="text-[11px] text-muted-foreground tracking-[1.5px] uppercase mt-1.5">{s.label}</div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>

    {/* Scroll hint */}
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground text-[11px] tracking-[2px] uppercase">
      <span>scroll</span>
      <div className="w-px h-12 bg-gradient-to-b from-violet to-transparent animate-scroll-line" />
    </div>
  </section>
);

export default Hero;
