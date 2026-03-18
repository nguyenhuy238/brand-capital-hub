import { useState } from "react";
import { useScrollReveal } from "./useScrollReveal";

const tabData: Record<string, { title: string; desc: string }[]> = {
  small: [
    { title: "Brand Đăng Ký Campaign", desc: "Trên Brand Portal, Brand chọn sản phẩm, mục tiêu (xả tồn, launch sản phẩm mới, tăng nhận diện...) và thống nhất cấu trúc góp vốn." },
    { title: "Góp Vốn Bằng Hàng Hóa", desc: 'Brand chuyển một lượng hàng vào kho NONE (None Retail Hub), được định giá thương mại và ghi nhận là "vốn hàng" cho campaign.' },
    { title: "Góp Thêm Tiền Marketing", desc: "Brand có thể góp thêm tiền mặt marketing để chạy media, sản xuất nội dung và thưởng thêm cho Creator." },
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
  "bg-primary text-primary-foreground border border-primary/20 shadow-[0_8px_18px_hsla(359,74%,52%,0.2)]",
  "bg-card text-foreground border border-border",
  "bg-primary/85 text-primary-foreground border border-primary/20",
  "bg-card text-foreground border border-border",
  "bg-primary text-primary-foreground border border-primary/20 shadow-[0_8px_18px_hsla(359,74%,52%,0.2)]",
];

const HowItWorksSection = () => {
  const [tab, setTab] = useState<"small" | "large">("small");
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="how" className="py-20 md:py-24 px-4 sm:px-6 lg:px-16 bg-dark2">
      <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="flex items-center gap-3 text-[11px] tracking-[3px] uppercase text-accent font-semibold mb-4">
          <span className="w-8 h-px bg-accent" />Cách Hoạt Động
        </div>
        <h2 className="font-display tracking-wide" style={{ fontSize: "clamp(42px, 6vw, 72px)", lineHeight: 1 }}>
          QUY TRÌNH <span className="text-gradient">ĐƠN GIẢN</span>
        </h2>

        {/* Tabs */}
        <div className="flex gap-1 bg-card p-1.5 rounded-full w-full md:w-fit mt-10 md:mt-12 mb-10 md:mb-12 border border-border overflow-x-auto">
          <button
            onClick={() => setTab("small")}
            className={`px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-[13px] sm:text-sm whitespace-nowrap font-medium tracking-wide transition-all ${tab === "small" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
          >
            Creator Nhỏ Lẻ
          </button>
          <button
            onClick={() => setTab("large")}
            className={`px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-[13px] sm:text-sm whitespace-nowrap font-medium tracking-wide transition-all ${tab === "large" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
          >
            Creator Lớn / Dự Án
          </button>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 md:gap-0">
          <div className="hidden md:block absolute top-7 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          {tabData[tab].map((s, i) => (
            <div key={`${tab}-${i}`} className="text-left md:text-center px-0 sm:px-3">
              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center md:mx-auto mb-4 md:mb-5 font-display text-[19px] md:text-[22px] tracking-wide relative z-10 hover:scale-110 transition-transform ${stepColors[i]}`}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <h4 className="text-[13px] sm:text-[14px] font-semibold text-foreground mb-2.5 leading-tight">{s.title}</h4>
              <p className="text-[12px] sm:text-[13px] text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
