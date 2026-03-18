import { useScrollReveal } from "./useScrollReveal";

const swotData = [
  {
    letter: "S", tag: "Strengths · Điểm Mạnh", title: "LỢI THẾ CỐT LÕI", type: "s",
    items: [
      "Inventory as Capital — mô hình độc quyền giải quyết đau dòng tiền cho Brand & Creator",
      "O2O Ecosystem — NONE Retail Hub tạo rào cản gia nhập cao với app thuần túy",
      "Retention Loop — cơ chế Xu Thưởng giữ chân User lâu dài",
      "Minh bạch dòng tiền — Brand, Creator, User đều thấy được doanh thu thực tế",
    ],
  },
  {
    letter: "O", tag: "Opportunities · Cơ Hội", title: "THỊ TRƯỜNG ĐANG MỞ", type: "o",
    items: [
      'Kinh tế khó khăn — Brand càng cần tiết kiệm, càng tìm đến mô hình Barter của dCreator',
      "Luật Quảng cáo mới — siết chặt booking truyền thống, Partnership/Affiliate lên ngôi",
      "Social Commerce bùng nổ — Việt Nam chưa có player toàn diện như dCreator",
      'Gen Z thống trị — thế hệ muốn "thuộc về" và "đồng kiến tạo" đang chiếm lĩnh',
    ],
  },
  {
    letter: "W", tag: "Weaknesses · Điểm Yếu", title: "CẦN HOÀN THIỆN", type: "w",
    items: [
      "Phụ thuộc vào đối tác NONE O2O trong giai đoạn đầu",
      "Cần đào tạo Brand & Creator hiểu mô hình mới",
      "Cần thời gian xây dựng trust và track record ban đầu",
    ],
  },
  {
    letter: "T", tag: "Threats · Thách Thức", title: "RỦI RO CẦN LƯU Ý", type: "t",
    items: [
      "Các nền tảng lớn (TikTok Shop, Shopee) có thể copy một phần mô hình",
      "Khó khăn quản lý hàng tồn kho và logistics khi scale nhanh",
      'Cần định nghĩa rõ hơn về mặt pháp lý của mô hình "Inventory as Capital"',
    ],
  },
];

const typeStyles: Record<string, { bg: string; tagBg: string; tagText: string; letterColor: string }> = {
  s: { bg: "bg-primary/[0.12]", tagBg: "bg-primary/30", tagText: "text-lavender", letterColor: "text-violet" },
  o: { bg: "bg-emerald-500/[0.08]", tagBg: "bg-emerald-500/20", tagText: "text-emerald-300", letterColor: "text-emerald-400" },
  w: { bg: "bg-red-500/[0.08]", tagBg: "bg-red-500/20", tagText: "text-red-300", letterColor: "text-red-400" },
  t: { bg: "bg-yellow-500/[0.08]", tagBg: "bg-yellow-500/20", tagText: "text-yellow-200", letterColor: "text-yellow-400" },
};

const SwotSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="swot" className="py-24 px-6 md:px-16 bg-dark2">
      <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="flex items-center gap-3 text-[11px] tracking-[3px] uppercase text-accent font-semibold mb-4">
          <span className="w-8 h-px bg-accent" />SWOT Analysis
        </div>
        <h2 className="font-display tracking-wide" style={{ fontSize: "clamp(42px, 6vw, 72px)", lineHeight: 1 }}>
          ĐIỂM MẠNH & <span className="text-gradient">CƠ HỘI</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 mt-12">
        {swotData.map((s, i) => {
          const st = typeStyles[s.type];
          return (
            <div key={i} className={`${st.bg} p-10 relative overflow-hidden`}>
              <span className={`font-display text-[80px] absolute right-8 top-2 opacity-[0.12] tracking-tight ${st.letterColor}`}>{s.letter}</span>
              <span className={`inline-block px-3.5 py-1 rounded-full text-[11px] font-bold tracking-[2px] uppercase mb-5 ${st.tagBg} ${st.tagText}`}>{s.tag}</span>
              <h3 className="font-display text-[22px] tracking-wide text-foreground mb-4">{s.title}</h3>
              <ul className="flex flex-col gap-2.5">
                {s.items.map((item, j) => (
                  <li key={j} className="text-sm text-muted-foreground leading-relaxed pl-5 relative before:content-['→'] before:absolute before:left-0 before:text-violet before:text-xs">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SwotSection;
