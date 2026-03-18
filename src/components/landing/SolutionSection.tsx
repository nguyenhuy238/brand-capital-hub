import { useScrollReveal } from "./useScrollReveal";

const revenueCards = [
  { who: "BRAND", desc: "Góp vốn bằng hàng hóa hoặc tiền marketing. Đẩy được hàng, đo được ROI, không cần \"đốt tiền\" mù quáng.", color: "text-primary" },
  { who: "dCREATOR", desc: "Thu % thặng dư trên mỗi chiến dịch. Điều phối dữ liệu, dòng tiền và toàn bộ hệ sinh thái.", color: "text-foreground" },
  { who: "CREATOR", desc: "Nhận chia sẻ doanh thu dài hạn thay vì fee ngắn hạn. Tự do chọn dự án phù hợp.", color: "text-primary" },
];

const revenueBg = ["bg-card border border-border", "bg-card border border-border", "bg-card border border-border"];

const SolutionSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="solution" className="py-24 px-6 md:px-16 bg-background">
      <div ref={ref} className={`grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div>
          <div className="flex items-center gap-3 text-[11px] tracking-[3px] uppercase text-accent font-semibold mb-4">
            <span className="w-8 h-px bg-accent" />Giải Pháp
          </div>
          <h2 className="font-display tracking-wide mb-8" style={{ fontSize: "clamp(42px, 6vw, 72px)", lineHeight: 1 }}>
            MỘT SÂN CHƠI<br /><span className="text-gradient">BA BÊN CÙNG THẮNG</span>
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            dCreator xây dựng hệ thống Social Commerce kết hợp O2O — cho phép Brand, Creator, User tự tạo sân chơi để cùng chia sẻ rủi ro và lợi ích xung quanh doanh thu thực tế.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-6">
            Đối tác hạ tầng NONE Retail Hub cung cấp chuỗi cửa hàng vật lý, kho vận, POS và hệ thống bán lẻ O2O — dCreator không cần tự xây từ đầu.
          </p>
          <div className="bg-card border-l-[3px] border-primary px-6 py-5 rounded-r-lg">
            <p className="text-foreground italic text-[15px] leading-relaxed">
              Brand không "đốt tiền quảng cáo" — họ góp vốn bằng hàng hóa. Creator không nhận fee ngắn hạn — họ là đồng sáng lập dự án bán hàng. User không chỉ "like" — họ nhận quà và được ghi danh.
            </p>
          </div>
        </div>

        {/* Orbital visual */}
        <div className="relative h-[380px] hidden md:block">
          <div className="absolute w-[280px] h-[280px] top-1/2 left-1/2 rounded-full border border-dashed border-border animate-spin-slow" />
          <div className="absolute w-[180px] h-[180px] top-1/2 left-1/2 rounded-full border border-dashed border-border animate-spin-slow-reverse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90px] h-[90px] rounded-full bg-card border border-primary/25 text-primary flex items-center justify-center font-display text-4xl tracking-widest z-10 shadow-[0_12px_24px_hsla(359,74%,52%,0.18)]">
            d
          </div>
          <span className="absolute top-[15%] left-1/2 -translate-x-1/2 px-3.5 py-2 rounded-full text-[11px] font-bold tracking-[1.5px] uppercase bg-card border border-border">Brand</span>
          <span className="absolute bottom-[15%] right-[15%] px-3.5 py-2 rounded-full text-[11px] font-bold tracking-[1.5px] uppercase bg-card border border-border">Creator</span>
          <span className="absolute bottom-[15%] left-[15%] px-3.5 py-2 rounded-full text-[11px] font-bold tracking-[1.5px] uppercase bg-card border border-border">User</span>
        </div>
      </div>

      {/* Revenue cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 mt-5">
        {revenueCards.map((c, i) => (
          <div key={i} className={`${revenueBg[i]} p-8 text-center`}>
            <div className={`font-display text-4xl tracking-widest mb-3 ${c.color}`}>{c.who}</div>
            <p className="text-[13px] text-muted-foreground leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SolutionSection;
