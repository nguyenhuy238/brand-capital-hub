import { useScrollReveal } from "./useScrollReveal";

const gapCards = [
  {
    title: "NỀN TẢNG HIỆN TẠI",
    desc: "TikTok, sàn TMĐT, affiliate... tối ưu thuật toán và doanh thu cho chính nền tảng, không được thiết kế để Brand - Creator - User cùng chia sẻ rủi ro và lợi ích.",
  },
  {
    title: "SÀN TMĐT",
    desc: "Mạnh về tối ưu bán hàng và chuyển đổi, nhưng không giải bài toán vốn nội dung và cộng đồng cho creator lẫn brand.",
  },
  {
    title: "NỀN TẢNG NỘI DUNG",
    desc: "Tối ưu view, reach và quảng cáo, nhưng không xử lý tồn kho, vận hành O2O và bài toán dòng tiền thực của các chiến dịch bán hàng.",
  },
  {
    title: "AGENCY / BOOKING",
    desc: "Tập trung fee ngắn hạn theo từng deal, chưa tạo được cơ chế doanh thu dài hạn và bền vững cho creator trong một hệ sinh thái chung.",
  },
];

const WhyCurrentSolutionsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="why-now" className="py-24 px-6 md:px-16 bg-background border-y border-border/60">
      <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="flex items-center gap-3 text-[11px] tracking-[3px] uppercase text-accent font-semibold mb-4">
          <span className="w-8 h-px bg-accent" />Khoảng Trống Thị Trường
        </div>

        <h2 className="font-display tracking-wide mb-6" style={{ fontSize: "clamp(34px, 5vw, 58px)", lineHeight: 1.08 }}>
          VÌ SAO CÁC GIẢI PHÁP HIỆN TẠI
          <br />
          <span className="text-gradient">CHƯA GIẢI QUYẾT ĐƯỢC?</span>
        </h2>

        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-5xl">
          Điểm nghẽn cốt lõi nằm ở chỗ: phần lớn giải pháp hiện tại chỉ xử lý một vấn đề cho từng nhóm riêng lẻ,
          thay vì tạo ra một mô hình chung để cả Brand - Creator - User cùng đầu tư, cùng chịu rủi ro và cùng hưởng
          lợi dựa trên doanh thu thực tế.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-0.5 mt-10">
        {gapCards.map((item, index) => (
          <article
            key={item.title}
            className="bg-card border border-border p-7 md:p-8 transition-all duration-300 hover:border-primary/35 hover:shadow-[0_10px_24px_hsla(359,74%,52%,0.12)]"
          >
            <div className="text-[11px] tracking-[2px] uppercase text-pink-light font-semibold mb-3">
              Lỗ hổng {String(index + 1).padStart(2, "0")}
            </div>
            <h3 className="font-display text-[24px] leading-tight tracking-wide mb-4 text-foreground">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </article>
        ))}
      </div>

      <div className="mt-10 p-6 md:p-7 rounded-xl bg-accent/[0.08] border border-accent/20">
        <h3 className="font-display text-[24px] tracking-wide text-foreground mb-3">Tóm tắt</h3>
        <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed">
          Thị trường đang thiếu một mô hình dùng chính hàng hóa của Brand làm "vốn chung" để Creator biến nội dung thành
          doanh thu thật, còn User nhận giá trị thật khi tham gia. Khi chưa có cơ chế chia sẻ lợi ích theo kết quả thực,
          mọi bên vẫn bị mắc kẹt trong các mục tiêu ngắn hạn.
        </p>
      </div>
    </section>
  );
};

export default WhyCurrentSolutionsSection;
