import { useScrollReveal } from "./useScrollReveal";

const goals = [
  "Trở thành hạ tầng Social Commerce & O2O mặc định cho dự án sáng tạo tại Việt Nam.",
  "Giúp Creator đứng trên chân tài chính từ cộng đồng thay vì chỉ phụ thuộc booking ngắn hạn.",
  "Giúp Brand xem marketing như đầu tư vốn hàng có kiểm soát, thay vì chi phí quảng cáo mù mờ.",
];

const VisionSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="vision" className="py-24 px-6 md:px-16 bg-background border-y border-border/60">
      <div
        ref={ref}
        className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="flex items-center gap-3 text-[11px] tracking-[3px] uppercase text-accent font-semibold mb-4">
          <span className="w-8 h-px bg-accent" />Tầm Nhìn
        </div>

        <h2 className="font-display tracking-wide mb-6" style={{ fontSize: "clamp(34px, 5vw, 58px)", lineHeight: 1.08 }}>
          XÂY HẠ TẦNG MỚI CHO <span className="text-gradient">NỀN KINH TẾ CREATOR</span>
        </h2>

        <div className="max-w-5xl">
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
            dCreator hướng tới trở thành lớp hạ tầng kết nối hàng hóa, cộng đồng và sáng tạo nội dung trong cùng một mô hình
            doanh thu minh bạch.
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Mọi MV, mini series, show hoặc dự án cộng đồng đều có thể gọi vốn qua hàng hóa và cộng đồng fan theo cơ chế
            kiểm soát được lợi ích cho cả Brand, Creator, User.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 mt-10">
        {goals.map((item, index) => (
          <article key={item} className="bg-card border border-border p-7 md:p-8">
            <div className="text-[11px] tracking-[2px] uppercase text-pink-light font-semibold mb-3">Mục tiêu {String(index + 1).padStart(2, "0")}</div>
            <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default VisionSection;
