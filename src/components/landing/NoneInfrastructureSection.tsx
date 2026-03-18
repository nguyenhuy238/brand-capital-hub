import { useScrollReveal } from "./useScrollReveal";

const infrastructurePoints = [
  "Chuỗi điểm chạm vật lý None Retail Hub: trải nghiệm, nhận hàng, fan-meeting.",
  "Kho, POS và vận hành bán lẻ O2O có sẵn để dCreator triển khai nhanh.",
  "Fulfillment minh bạch: kiểm soát đóng gói, giao nhận, đối soát đơn hàng.",
  "Tạo rào cản gia nhập thực tế so với mô hình app thuần traffic.",
];

const NoneInfrastructureSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="none-ecosystem" className="py-20 px-6 md:px-16 bg-background border-y border-border/60">
      <div
        ref={ref}
        className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="flex items-center gap-3 text-[11px] tracking-[3px] uppercase text-accent font-semibold mb-4">
          <span className="w-8 h-px bg-accent" />Đối Tác Hạ Tầng
        </div>

        <h2 className="font-display tracking-wide mb-5" style={{ fontSize: "clamp(30px, 4.5vw, 52px)", lineHeight: 1.08 }}>
          NONE / NONE RETAIL HUB LÀ <span className="text-gradient">ASSET CHIẾN LƯỢC</span>
        </h2>

        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-5xl">
          NONE không chỉ là đối tác logistics. Đây là lớp hạ tầng O2O xuyên suốt giúp dCreator vận hành campaign từ ký quỹ hàng,
          tồn kho, giao nhận đến trải nghiệm cộng đồng ngoài đời thực.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 mt-8">
        {infrastructurePoints.map((point, index) => (
          <article key={point} className="bg-card border border-border p-6 md:p-7">
            <div className="text-[11px] tracking-[2px] uppercase text-pink-light font-semibold mb-3">NONE {String(index + 1).padStart(2, "0")}</div>
            <p className="text-sm text-muted-foreground leading-relaxed">{point}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default NoneInfrastructureSection;
