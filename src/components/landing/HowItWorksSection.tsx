import { useState } from "react";
import { useScrollReveal } from "./useScrollReveal";

const tabData: Record<string, { title: string; desc: string }[]> = {
  small: [
    { title: "Brand Đăng Ký Chiến Dịch", desc: "Brand chọn sản phẩm, mục tiêu và hình thức góp vốn qua Brand Portal." },
    { title: "Hàng Vào Kho NONE O2O", desc: "Toàn bộ hàng vào hạ tầng NONE — kho, đóng gói, giao nhận minh bạch." },
    { title: "dCreator Thiết Kế Camp", desc: 'Hàng hóa biến thành "vốn" cho các dự án sáng tạo: phim, video, livestream...' },
    { title: "Creator Tạo Nội Dung", desc: 'Creator kêu gọi fan "ủng hộ" — user trả tiền và nhận sản phẩm thật kèm quyền lợi fan.' },
    { title: "Chia Doanh Thu Đa Bên", desc: "Doanh thu chia lại cho Creator · dCreator · NONE theo tỷ lệ thỏa thuận." },
  ],
  large: [
    { title: "Creator Đề Xuất Dự Án", desc: "Creator mang ý tưởng (MV, mini series, show...) và tệp fan lên dCreator." },
    { title: "Kết Nối Brand Phù Hợp", desc: 'dCreator tìm brand phù hợp, quy đổi ngân sách marketing thành "vốn hàng".' },
    { title: "Thiết Kế Gói Ủng Hộ", desc: "Combo sản phẩm + quyền lợi fan: vé sự kiện, credit, hậu trường, meet & greet..." },
    { title: "Creator Triển Khai Nội Dung", desc: "Creator tạo nội dung, fan mua gói ủng hộ qua dCreator — nhận sản phẩm thật." },
    { title: "Doanh Thu Dài Hạn", desc: "Creator vừa hoàn thành dự án vừa xây nguồn doanh thu bền vững lâu dài." },
  ],
};

const stepColors = [
  "bg-primary/90 shadow-[0_0_20px_hsla(263,70%,50%,0.4)]",
  "bg-[hsla(271,81%,46%,0.9)] shadow-[0_0_20px_hsla(271,81%,46%,0.4)]",
  "bg-secondary/90 shadow-[0_0_20px_hsla(280,60%,55%,0.4)]",
  "bg-[hsla(292,76%,49%,0.9)] shadow-[0_0_20px_hsla(292,76%,49%,0.4)]",
  "bg-accent/90 shadow-[0_0_20px_hsla(330,80%,55%,0.4)]",
];

const HowItWorksSection = () => {
  const [tab, setTab] = useState<"small" | "large">("small");
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="how" className="py-24 px-6 md:px-16 bg-dark2">
      <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="flex items-center gap-3 text-[11px] tracking-[3px] uppercase text-accent font-semibold mb-4">
          <span className="w-8 h-px bg-accent" />Cách Hoạt Động
        </div>
        <h2 className="font-display tracking-wide" style={{ fontSize: "clamp(42px, 6vw, 72px)", lineHeight: 1 }}>
          QUY TRÌNH <span className="text-gradient">ĐƠN GIẢN</span>
        </h2>

        {/* Tabs */}
        <div className="flex gap-1 bg-foreground/5 p-1.5 rounded-full w-fit mt-12 mb-12">
          <button
            onClick={() => setTab("small")}
            className={`px-7 py-3 rounded-full text-sm font-medium tracking-wide transition-all ${tab === "small" ? "bg-gradient-primary text-primary-foreground" : "text-muted-foreground"}`}
          >
            Creator Nhỏ Lẻ
          </button>
          <button
            onClick={() => setTab("large")}
            className={`px-7 py-3 rounded-full text-sm font-medium tracking-wide transition-all ${tab === "large" ? "bg-gradient-primary text-primary-foreground" : "text-muted-foreground"}`}
          >
            Creator Lớn / Dự Án
          </button>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-0">
          <div className="hidden md:block absolute top-7 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-violet to-transparent" />
          {tabData[tab].map((s, i) => (
            <div key={`${tab}-${i}`} className="text-center px-3">
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5 font-display text-[22px] tracking-wide relative z-10 hover:scale-110 transition-transform ${stepColors[i]}`}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <h4 className="text-[13px] font-semibold text-foreground mb-2.5 leading-tight">{s.title}</h4>
              <p className="text-[12px] text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
