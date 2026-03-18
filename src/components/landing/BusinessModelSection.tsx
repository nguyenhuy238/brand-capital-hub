import { useScrollReveal } from "./useScrollReveal";

const revenueStreams = [
  {
    title: "Chia sẻ lợi nhuận chiến dịch",
    desc: "Nền tảng nhận tỷ lệ trên Campaign EBITDA sau khi hoàn COGS và trừ chi phí trực tiếp, theo cơ chế BCC revenue-sharing.",
  },
  {
    title: "Phí quản lý tài sản ký quỹ",
    desc: "Phí vận hành/hoa hồng xử lý đơn hàng quy đổi từ vốn hàng hóa mà Brand ký quỹ vào chiến dịch.",
  },
  {
    title: "Phí vận hành marketing chiến dịch",
    desc: "Phí triển khai theo quy mô chiến dịch và gói hợp tác giữa dCreator với Brand và đối tác thực thi.",
  },
  {
    title: "Thặng dư gói ủng hộ",
    desc: "Gói ủng hộ được định giá cao hơn combo hàng góp vốn. Phần chênh lệch hợp lý tạo thành doanh thu nền tảng.",
  },
];

const logicRows = [
  ["GMV", "Tổng doanh thu chiến dịch"],
  ["COGS", "Giá vốn hàng hóa hoàn về cho phần vốn hàng"],
  ["Direct Costs", "Chi phí trực tiếp: vận hành, fulfillment, media, sản xuất"],
  ["Campaign EBITDA", "GMV - COGS - Direct Costs"],
  ["Revenue Sharing", "Chia theo tỷ lệ thỏa thuận giữa các bên"],
];

const BusinessModelSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="business-model" className="py-24 px-6 md:px-16 bg-background border-y border-border/60">
      <div
        ref={ref}
        className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="flex items-center gap-3 text-[11px] tracking-[3px] uppercase text-accent font-semibold mb-4">
          <span className="w-8 h-px bg-accent" />Business Model
        </div>

        <h2 className="font-display tracking-wide mb-6" style={{ fontSize: "clamp(34px, 5vw, 58px)", lineHeight: 1.08 }}>
          dCREATOR <span className="text-gradient">KIẾM TIỀN NHƯ THẾ NÀO?</span>
        </h2>

        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-5xl">
          dCreator là nền tảng B2B2C kết nối Brand - Creator - User, trong đó Brand dùng inventory làm vốn marketing,
          Creator dùng vốn hàng + cộng đồng fan để vận hành dự án, User nhận sản phẩm thật và quyền lợi đồng kiến tạo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 mt-10">
        {revenueStreams.map((item, index) => (
          <article key={item.title} className="bg-card border border-border p-7 md:p-8">
            <div className="text-[11px] tracking-[2px] uppercase text-pink-light font-semibold mb-3">
              Dòng doanh thu {String(index + 1).padStart(2, "0")}
            </div>
            <h3 className="font-display text-[24px] leading-tight tracking-wide mb-4 text-foreground">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </article>
        ))}
      </div>

      <div className="mt-10 bg-card border border-border rounded-xl overflow-hidden">
        <div className="px-6 py-4 border-b border-border bg-primary/[0.06]">
          <h3 className="font-display text-[24px] tracking-wide text-foreground">Công thức lợi nhuận chiến dịch</h3>
        </div>
        <div className="px-6 py-5 md:px-8 md:py-6">
          <div className="text-sm md:text-[15px] text-foreground mb-4">
            <span className="font-semibold">Campaign EBITDA</span> = <span className="font-semibold">GMV</span> - <span className="font-semibold">COGS</span> - <span className="font-semibold">Direct Costs</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {logicRows.map((row) => (
              <div key={row[0]} className="rounded-lg border border-border p-4 bg-background/70">
                <div className="text-[11px] tracking-[2px] uppercase text-pink-light font-semibold mb-2">{row[0]}</div>
                <div className="text-sm text-muted-foreground leading-relaxed">{row[1]}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-5 leading-relaxed">
            Ghi chú: Nếu Brand góp vốn bằng tiền, Brand có thể tham gia chia tỷ lệ lợi nhuận. Nếu Brand góp vốn chủ yếu bằng hàng,
            phần chia lợi nhuận có thể điều chỉnh theo thỏa thuận từng campaign.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BusinessModelSection;
