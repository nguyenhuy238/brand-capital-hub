import { useScrollReveal } from "./useScrollReveal";

const invites = [
  {
    title: "Brand / Seller",
    subtitle: "Tối ưu tồn kho và ngân sách marketing",
    cta: "Chạy 01 campaign pilot dùng hàng hóa làm vốn marketing, đo trực tiếp theo doanh thu.",
  },
  {
    title: "Creator / KOL / KOC",
    subtitle: "Làm dự án dài hơi, có doanh thu chia sẻ",
    cta: "Đề xuất 01 dự án (MV, mini series, show, hoạt động cộng đồng...) để dCreator thiết kế gói ủng hộ và chia sẻ doanh thu.",
  },
  {
    title: "Đối tác hạ tầng",
    subtitle: "O2O, logistics, thanh toán, công nghệ",
    cta: "Cùng tích hợp hệ thống kho, giao nhận, thanh toán và vận hành để scale mô hình trên diện rộng.",
  },
];

const StrategicInviteSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="strategic-invite" className="py-24 px-6 md:px-16 bg-dark2 border-y border-border/60">
      <div
        ref={ref}
        className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="flex items-center gap-3 text-[11px] tracking-[3px] uppercase text-accent font-semibold mb-4">
          <span className="w-8 h-px bg-accent" />Lời Mời Hợp Tác
        </div>

        <h2 className="font-display tracking-wide mb-6" style={{ fontSize: "clamp(34px, 5vw, 58px)", lineHeight: 1.08 }}>
          PILOT CÙNG <span className="text-gradient">dCREATOR</span>
        </h2>

        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-5xl">
          dCreator đã hoàn thiện mô hình, hạ tầng O2O cùng NONE và quy trình campaign mẫu. Chúng tôi sẵn sàng triển khai pilot
          thực tế với các đối tác chiến lược.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 mt-10">
        {invites.map((item, index) => (
          <article key={item.title} className="bg-card border border-border p-7 md:p-8 flex flex-col">
            <div className="text-[11px] tracking-[2px] uppercase text-pink-light font-semibold mb-3">
              Đối tác {String(index + 1).padStart(2, "0")}
            </div>
            <h3 className="font-display text-[24px] leading-tight tracking-wide mb-2 text-foreground">{item.title}</h3>
            <p className="text-sm text-foreground/80 mb-4">{item.subtitle}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.cta}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default StrategicInviteSection;
