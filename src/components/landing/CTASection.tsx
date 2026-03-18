import { useScrollReveal } from "./useScrollReveal";

const CTASection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="cta" className="py-28 px-6 md:px-16 bg-background text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[110px] pointer-events-none" />

      <div ref={ref} className={`relative z-10 max-w-[700px] mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <h2 className="font-display leading-[0.95] mb-6" style={{ fontSize: "clamp(56px, 8vw, 96px)" }}>
          <span className="block text-foreground">SẴN SÀNG</span>
          <span className="block text-gradient">HỢP TÁC?</span>
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed mb-12">
          dCreator đang tìm kiếm các Brand tiên phong, Creator có tầm nhìn và Nhà đầu tư muốn đặt cược vào mô hình Social Commerce thế hệ mới tại Việt Nam.
        </p>
        <div className="flex gap-4 justify-center flex-wrap mb-12">
          <a href="mailto:hello@dcreator.vn" className="bg-primary text-primary-foreground px-10 py-4 rounded-full text-[15px] font-semibold shadow-[0_12px_30px_hsla(359,74%,52%,0.24)] hover:translate-y-[-2px] hover:shadow-[0_18px_34px_hsla(359,74%,52%,0.28)] transition-all inline-block">
            Liên Hệ Ngay
          </a>
          <a href="#hero" className="border border-border text-foreground px-10 py-4 rounded-full text-[15px] font-medium bg-card/65 hover:bg-card transition-all inline-block">
            Xem Lại Pitch
          </a>
        </div>
        <div className="flex gap-10 justify-center text-[13px] text-muted-foreground flex-wrap">
          <span>📧 <a href="mailto:hello@dcreator.vn" className="text-foreground hover:text-primary transition-colors">hello@dcreator.vn</a></span>
          <span>🌐 dcreator.vn</span>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
