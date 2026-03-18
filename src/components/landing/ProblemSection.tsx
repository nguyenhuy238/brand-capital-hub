import { useScrollReveal } from "./useScrollReveal";

const cards = [
  {
    icon: "🏢", type: "brand", who: "Brand / Nhãn hàng",
    title: "ĐỐT TIỀN QUẢNG CÁO KHÔNG ĐO ĐƯỢC ROI",
    desc: "Chi phí booking và quảng cáo ngày càng tăng cao nhưng không có cam kết đầu ra. Brand không thể chắc chắn đầu tư marketing sẽ bán được hàng — dòng tiền bị \"đốt\" mà không có gì đảm bảo.",
  },
  {
    icon: "🎬", type: "creatorLarge", who: "dCreator lớn",
    title: "CÓ TẦM NHÌN VÀ CỘNG ĐỒNG, NHƯNG LUÔN THIẾU VỐN",
    desc: "Có ý tưởng và cộng đồng nhưng thiếu vốn → phải phụ thuộc tài trợ từ brand, dễ mất tự do sáng tạo hoặc giảm chất lượng để chạy theo ngân sách ngắn hạn.",
  },
  {
    icon: "✍️", type: "creatorSmall", who: "dCreator nhỏ",
    title: "SỐNG BẰNG BOOKING LẺ, THU NHẬP DỄ ĐỨT DÒNG",
    desc: "Có kỹ năng và tệp người xem riêng nhưng thiếu quyền mặc cả, thu nhập phụ thuộc vào booking ngắn hạn → dòng tiền không ổn định, chi phí sản xuất cao nhưng giá trị nhận lại thấp.",
  },
  {
    icon: "👥", type: "user", who: "User / Người dùng Gen Z/Y",
    title: "MUỐN THUỘC VỀ, KHÔNG CHỈ XEM & MUA",
    desc: "Gen Z/Y không chỉ muốn \"xem\" hay \"mua\" — họ muốn \"thuộc về\" cộng đồng, được tạo ra giá trị cùng Creator. Ủng hộ phải đi kèm giá trị thực: sản phẩm chính hãng, ưu đãi, được ghi danh.",
  },
];

const iconBg: Record<string, string> = {
  brand: "bg-primary/20",
  creatorLarge: "bg-accent/20",
  creatorSmall: "bg-accent/20",
  user: "bg-secondary/20",
};

type ProblemCardProps = {
  icon: string;
  type: string;
  who: string;
  title: string;
  desc: string;
  index: number;
};

const ProblemCard = ({ icon, type, who, title, desc, index }: ProblemCardProps) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`bg-dark3 p-8 md:p-10 relative overflow-hidden group transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-primary scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-400" />
      <div className={`w-11 h-11 rounded-[10px] flex items-center justify-center text-[22px] mb-5 ${iconBg[type]}`}>{icon}</div>
      <div className="text-[11px] tracking-[2px] uppercase text-pink-light font-semibold mb-4">{who}</div>
      <h3 className="font-display text-[26px] tracking-wide text-foreground mb-4 leading-tight">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
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
        <p className="mt-6 text-center text-2xl md:text-3xl font-bold italic text-foreground">Thị trường hiện nay : </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-0.5 mt-6">
        {cards.map((c, i) => (
          <ProblemCard
            key={i}
            icon={c.icon}
            type={c.type}
            who={c.who}
            title={c.title}
            desc={c.desc}
            index={i}
          />
        ))}
      </div>

      <div className="mt-12 p-8 bg-accent/[0.08] border border-accent/20 rounded-xl text-sm md:text-[15px] text-muted-foreground leading-relaxed text-center">
        ⚠️ Vấn đề cốt lõi: Các nền tảng hiện tại (TikTok, sàn TMĐT, affiliate...) chỉ tối ưu thuật toán cho chính họ — không tạo ra sân chơi để Brand – Creator – User cùng chia sẻ rủi ro và lợi ích.
      </div>
    </section>
  );
};

export default ProblemSection;
