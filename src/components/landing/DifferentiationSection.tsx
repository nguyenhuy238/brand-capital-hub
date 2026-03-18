import { useScrollReveal } from "./useScrollReveal";

const differenceCards = [
  {
    title: "BRAND",
    desc: "Không còn phụ thuộc quảng cáo mù quáng. Brand góp vốn bằng hàng hóa hoặc ngân sách marketing, đo được ROI trên doanh thu thực tế của từng chiến dịch.",
  },
  {
    title: "CREATOR",
    desc: "Không sống bằng booking lẻ. Creator trở thành đồng sáng lập dự án bán hàng, tự chọn campaign phù hợp và nhận chia sẻ doanh thu dài hạn.",
  },
  {
    title: "USER",
    desc: "Không chỉ xem - like - ủng hộ. User xem - like - ủng hộ - nhận quà, được ghi nhận như một phần cộng đồng và của chính dự án.",
  },
  {
    title: "dCREATOR",
    desc: "Kiếm tiền từ giá trị thặng dư trên mỗi chiến dịch, không phải bán hàng hộ miễn phí. Nền tảng tập trung điều phối lợi ích công bằng cho cả ba bên.",
  },
];

const DifferentiationSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="difference" className="py-24 px-6 md:px-16 bg-dark2 border-y border-border/60">
      <div
        ref={ref}
        className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="flex items-center gap-3 text-[11px] tracking-[3px] uppercase text-accent font-semibold mb-4">
          <span className="w-8 h-px bg-accent" />Khác Biệt Cốt Lõi
        </div>

        <h2 className="font-display tracking-wide mb-6" style={{ fontSize: "clamp(34px, 5vw, 58px)", lineHeight: 1.08 }}>
          CÁCH dCREATOR GIẢI BÀI TOÁN
          <br />
          <span className="text-gradient">KHÁC BIỆT</span>
        </h2>
        <p className="font-display text-sm md:text-base tracking-wide text-muted-foreground/70 mb-6">
          dCreator = Social Commerce + O2O + Revenue-sharing trên “vốn hàng”
        </p>

        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-5xl mb-4">
          dCreator ra mắt như một hệ thống Social Commerce kết hợp mô hình O2O (Online-to-Offline), cho phép Brand -
          Creator - User tự tạo sân chơi chung để cùng chia sẻ rủi ro và lợi ích dựa trên doanh thu thực tế, thay vì phụ
          thuộc vào bên thứ 3.
        </p>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-5xl">
          Điểm thắng của dCreator nằm ở việc giải đúng điểm gãy mà nhiều đối thủ chưa chạm tới: bài toán dòng tiền đi cùng
          niềm tin của Brand, Creator và User trong cùng một mô hình hợp tác dài hạn.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-0.5 mt-10">
        {differenceCards.map((item, index) => (
          <article
            key={item.title}
            className="bg-card border border-border p-7 md:p-8 transition-all duration-300 hover:border-primary/35 hover:shadow-[0_10px_24px_hsla(359,74%,52%,0.12)]"
          >
            <div className="text-[11px] tracking-[2px] uppercase text-pink-light font-semibold mb-3">
              Giá trị {String(index + 1).padStart(2, "0")}
            </div>
            <h3 className="font-display text-[24px] leading-tight tracking-wide mb-4 text-foreground">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </article>
        ))}
      </div>

      <div className="mt-10 p-6 md:p-7 rounded-xl bg-accent/[0.08] border border-accent/20">
        <h3 className="font-display text-[24px] tracking-wide text-foreground mb-3">Tóm tắt</h3>
        <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed">
          dCreator kết nối ba bên trong cùng một cơ chế thắng chung: Brand có doanh thu đo được, Creator có thu nhập dài
          hạn, User nhận giá trị thật khi tham gia. Nền tảng phát triển bằng phần thặng dư tạo ra, nên lợi ích của dCreator
          gắn trực tiếp với kết quả thực của toàn hệ sinh thái.
        </p>
      </div>
    </section>
  );
};

export default DifferentiationSection;