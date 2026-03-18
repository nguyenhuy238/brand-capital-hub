import { useScrollReveal } from "./useScrollReveal";

const cards = [
  {
    icon: "🏢", type: "brand", who: "Brand / Nhãn hàng",
    title: "ĐỐT TIỀN QUẢNG CÁO KHÔNG ĐO ĐƯỢC ROI",
    desc: "Chi phí booking và quảng cáo ngày càng tăng cao nhưng không có cam kết đầu ra. Brand không thể chắc chắn đầu tư marketing sẽ bán được hàng — dòng tiền bị \"đốt\" mà không có gì đảm bảo.",
  },
  {
    icon: "✍️", type: "creator", who: "Creator / Nhà sáng tạo",
    title: "SỐNG BẰNG BOOKING LẺ, KHÔNG CÓ THU NHẬP ỔN ĐỊNH",
    desc: "Creator có kỹ năng, cá tính, tệp fan — nhưng không có quyền mặc cả. Thu nhập phụ thuộc booking ngắn hạn, dễ \"đứt dòng\". Creator lớn có tầm nhìn nhưng luôn \"thiếu vốn\" cho dự án.",
  },
  {
    icon: "👥", type: "user", who: "User / Người dùng Gen Z/Y",
    title: "MUỐN THUỘC VỀ, KHÔNG CHỈ XEM & MUA",
    desc: "Gen Z/Y không chỉ muốn \"xem\" hay \"mua\" — họ muốn \"thuộc về\" cộng đồng, được tạo ra giá trị cùng Creator. Ủng hộ phải đi kèm giá trị thực: sản phẩm chính hãng, ưu đãi, được ghi danh.",
  },
];

const iconBg: Record<string, string> = {
  brand: "bg-primary/20",
  creator: "bg-accent/20",
  user: "bg-secondary/20",
};

const ProblemSection = () => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section id="problem" className="py-24 px-6 md:px-16 bg-dark2">
      <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="flex items-center gap-3 text-[11px] tracking-[3px] uppercase text-accent font-semibold mb-4">
          <span className="w-8 h-px bg-accent" />Vấn Đề
        </div>
        <h2 className="font-display tracking-wide text-center" style={{ fontSize: "clamp(42px, 6vw, 72px)", lineHeight: 1 }}>
          <span className="text-gradient">VẤN ĐỀ VÀ GIẢI PHÁP SÁNG TẠO</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 mt-16">
        {cards.map((c, i) => {
          const { ref: cRef, isVisible: cVis } = useScrollReveal();
          return (
            <div
              key={i}
              ref={cRef}
              className={`bg-dark3 p-8 md:p-10 relative overflow-hidden group transition-all duration-700 ${cVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-primary scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-400" />
              <div className={`w-11 h-11 rounded-[10px] flex items-center justify-center text-[22px] mb-5 ${iconBg[c.type]}`}>{c.icon}</div>
              <div className="text-[11px] tracking-[2px] uppercase text-pink-light font-semibold mb-4">{c.who}</div>
              <h3 className="font-display text-[26px] tracking-wide text-foreground mb-4 leading-tight">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-12 p-8 bg-accent/[0.08] border border-accent/20 rounded-xl text-sm md:text-[15px] text-muted-foreground leading-relaxed text-center">
        ⚠️ Vấn đề cốt lõi: Các nền tảng hiện tại (TikTok, sàn TMĐT, affiliate...) chỉ tối ưu thuật toán cho chính họ — không tạo ra sân chơi để Brand – Creator – User cùng chia sẻ rủi ro và lợi ích.
      </div>
    </section>
  );
};

export default ProblemSection;
