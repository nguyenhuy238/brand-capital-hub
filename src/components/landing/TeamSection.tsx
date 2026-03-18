import { useScrollReveal } from "./useScrollReveal";

const teamFacts = [
  "Đội ngũ 6 thành viên: 3 Marketing - 3 IT từ FPT University.",
  "Marketing phụ trách research, business model, product concept, go-to-market.",
  "IT phụ trách luồng hệ thống, kiến trúc nền tảng, prototype kết nối O2O NONE.",
];

const credibility = [
  "Đã khảo sát và phỏng vấn thực tế Creator, Brand, User.",
  "Được review bởi giảng viên và mentor có nền tảng Marketing, Startup, Law, IT.",
  "Đã kết nối đối tác NONE: POS, kho bãi, không gian vật lý, kinh nghiệm O2O.",
  "Tham gia hoạt động thực tế Social Commerce và Vietnam Sales & Marketing Camp.",
  "Có thành viên thuộc Top 10 sinh viên xuất sắc CNTT nhận học bổng quốc tế NITOR.",
];

const TeamSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="team" className="py-24 px-6 md:px-16 bg-dark2 border-y border-border/60">
      <div
        ref={ref}
        className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="flex items-center gap-3 text-[11px] tracking-[3px] uppercase text-accent font-semibold mb-4">
          <span className="w-8 h-px bg-accent" />Đội Ngũ Sáng Lập
        </div>

        <h2 className="font-display tracking-wide mb-6" style={{ fontSize: "clamp(34px, 5vw, 58px)", lineHeight: 1.08 }}>
          NĂNG LỰC <span className="text-gradient">THỰC THI</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 mt-10">
        <article className="bg-card border border-border p-8 md:p-10">
          <div className="text-[11px] tracking-[2px] uppercase text-pink-light font-semibold mb-3">Team Core</div>
          <h3 className="font-display text-[24px] leading-tight tracking-wide mb-4 text-foreground">FPT University · 6 Thành Viên</h3>
          <ul className="flex flex-col gap-2.5">
            {teamFacts.map((item) => (
              <li key={item} className="text-sm text-muted-foreground leading-relaxed pl-5 relative before:content-['-'] before:absolute before:left-0 before:text-primary">
                {item}
              </li>
            ))}
          </ul>
        </article>

        <article className="bg-card border border-border p-8 md:p-10">
          <div className="text-[11px] tracking-[2px] uppercase text-pink-light font-semibold mb-3">Credibility</div>
          <h3 className="font-display text-[24px] leading-tight tracking-wide mb-4 text-foreground">Bằng chứng năng lực ban đầu</h3>
          <ul className="flex flex-col gap-2.5">
            {credibility.map((item) => (
              <li key={item} className="text-sm text-muted-foreground leading-relaxed pl-5 relative before:content-['-'] before:absolute before:left-0 before:text-primary">
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default TeamSection;
