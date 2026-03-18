import { useScrollReveal } from "./useScrollReveal";

const reasons = [
  {
    title: "Kinh tế thắt chặt ngân sách",
    desc: "Brand buộc phải tối ưu dòng tiền và tồn kho, không thể tiếp tục đốt ngân sách quảng cáo không gắn với doanh thu.",
  },
  {
    title: "Creator Economy tăng nhanh",
    desc: "Creator tăng mạnh nhưng thu nhập còn mỏng và ngắn hạn. Mô hình chia sẻ doanh thu là nhu cầu cấp thiết.",
  },
  {
    title: "Gen Z/Y muốn đồng kiến tạo",
    desc: "Người dùng không chỉ xem hay mua, mà muốn thuộc về dự án, nhận giá trị thật và được ghi nhận đóng góp.",
  },
  {
    title: "Hạ tầng O2O đã sẵn sàng",
    desc: "NONE / None Retail Hub cùng mạng lưới logistics đủ khả năng vận hành kho, POS, giao nhận và trải nghiệm offline.",
  },
];

const WhyNowSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="why-now" className="py-20 md:py-24 px-4 sm:px-6 lg:px-16 bg-background border-y border-border/60">
      <div
        ref={ref}
        className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="flex items-center gap-3 text-[11px] tracking-[3px] uppercase text-accent font-semibold mb-4">
          <span className="w-8 h-px bg-accent" />Why Now
        </div>
        <h2 className="font-display tracking-wide mb-6" style={{ fontSize: "clamp(30px, 8vw, 58px)", lineHeight: 1.08 }}>
          TẠI SAO LẠI CHỌN <span className="text-gradient">THỜI ĐIỂM NÀY?</span>
        </h2>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-4xl">
          dCreator ra đời đúng điểm gãy của thị trường: nhu cầu tối ưu dòng tiền, nhu cầu thu nhập bền vững cho Creator,
          và nhu cầu đồng kiến tạo của cộng đồng.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 mt-8 md:mt-10">
        {reasons.map((item, index) => (
          <article key={item.title} className="bg-card border border-border p-5 sm:p-7 md:p-8">
            <div className="text-[11px] tracking-[2px] uppercase text-pink-light font-semibold mb-3">
              Động lực {String(index + 1).padStart(2, "0")}
            </div>
            <h3 className="font-display text-[21px] md:text-[24px] leading-tight tracking-wide mb-4 text-foreground">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </article>
        ))}
      </div>

      <div className="mt-10 p-6 md:p-7 rounded-xl bg-accent/[0.08] border border-accent/20">
        <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed">
          "dCreator là nền tảng đầu tiên tại Việt Nam biến Hàng hóa thành Vốn đầu tư cho Nội dung Sáng tạo."
        </p>
      </div>
    </section>
  );
};

export default WhyNowSection;
