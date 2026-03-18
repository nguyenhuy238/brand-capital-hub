import { useScrollReveal } from "./useScrollReveal";

const segments = [
  {
    title: "Brand / Seller (B2B)",
    desc: "SME và local brand ngành mỹ phẩm, thời trang, F&B đóng gói, lifestyle, gia dụng. Có sản phẩm tốt nhưng yếu branding, thiếu cashflow, chi phí ads cao.",
  },
  {
    title: "Creator (B2C - nguồn cung nội dung)",
    desc: "Micro & Mid Creator 10k-200k followers trên TikTok, YouTube, Facebook. Có cộng đồng niche, muốn làm dự án lớn nhưng thiếu vốn và thu nhập chưa ổn định.",
  },
  {
    title: "User / Fan (B2C - cầu tiêu dùng)",
    desc: "Gen Z và young Millennials 18-24 tuổi. Quen mua hàng theo idol, pre-order, donate, nhưng muốn minh bạch và nhận sản phẩm thật kèm quyền lợi cụ thể.",
  },
];

const MarketSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="market" className="py-24 px-6 md:px-16 bg-dark2 border-y border-border/60">
      <div
        ref={ref}
        className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="flex items-center gap-3 text-[11px] tracking-[3px] uppercase text-accent font-semibold mb-4">
          <span className="w-8 h-px bg-accent" />Thị Trường Mục Tiêu
        </div>

        <h2 className="font-display tracking-wide mb-6" style={{ fontSize: "clamp(34px, 5vw, 58px)", lineHeight: 1.08 }}>
          TAM & <span className="text-gradient">KHÁCH HÀNG CHÍNH</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 mt-10">
          <article className="bg-card border border-border p-8 md:p-9">
            <div className="text-[11px] tracking-[2px] uppercase text-pink-light font-semibold mb-3">Quy mô</div>
            <h3 className="font-display text-[30px] leading-tight tracking-wide text-foreground">~39 tỷ USD</h3>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              TAM TMDT Việt Nam (2025). Social Commerce chiếm khoảng 60-65% hành vi mua sắm của Gen Z.
            </p>
          </article>

          <article className="bg-card border border-border p-8 md:p-9">
            <div className="text-[11px] tracking-[2px] uppercase text-pink-light font-semibold mb-3">Bài toán</div>
            <h3 className="font-display text-[30px] leading-tight tracking-wide text-foreground">Dòng tiền + Niềm tin</h3>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              Cả Brand, Creator và User đều cần một mô hình minh bạch lợi ích và gắn chặt với doanh thu thực.
            </p>
          </article>

          <article className="bg-card border border-border p-8 md:p-9">
            <div className="text-[11px] tracking-[2px] uppercase text-pink-light font-semibold mb-3">Phân khúc đầu</div>
            <h3 className="font-display text-[30px] leading-tight tracking-wide text-foreground">SME + Micro/Mid Creator</h3>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              Nhóm có nhu cầu pilot cao và ra quyết định nhanh, phù hợp để tạo case study tăng trưởng ban đầu.
            </p>
          </article>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 mt-10">
        {segments.map((item, index) => (
          <article key={item.title} className="bg-card border border-border p-7 md:p-8">
            <div className="text-[11px] tracking-[2px] uppercase text-pink-light font-semibold mb-3">
              ICP {String(index + 1).padStart(2, "0")}
            </div>
            <h3 className="font-display text-[22px] leading-tight tracking-wide mb-4 text-foreground">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default MarketSection;
