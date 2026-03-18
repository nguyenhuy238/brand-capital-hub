import { useScrollReveal } from "./useScrollReveal";

const QuoteBanner = () => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div ref={ref} className={`py-20 px-6 md:px-16 bg-card text-center relative overflow-hidden transition-all duration-700 border-y border-border ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
      <span className="absolute font-serif-display text-[300px] text-primary/[0.09] -top-16 left-10 leading-none pointer-events-none select-none">"</span>
      <blockquote className="font-serif-display italic text-foreground leading-[1.4] max-w-[780px] mx-auto mb-6" style={{ fontSize: "clamp(22px, 3vw, 38px)" }}>
        "dCreator là nền tảng đầu tiên tại Việt Nam biến{" "}
        <span className="text-gradient not-italic font-bold">Hàng hóa thành Vốn</span>{" "}
        đầu tư cho Nội dung Sáng tạo."
      </blockquote>
      
    </div>
  );
};

export default QuoteBanner;
