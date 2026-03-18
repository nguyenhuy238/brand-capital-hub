import { useScrollReveal } from "./useScrollReveal";

const rows = [
  ["Đảm bảo doanh thu cho Brand", "✗ Không cam kết ROI", "✓ Góp vốn theo doanh thu thực tế"],
  ["Thu nhập Creator ổn định", "~ Phụ thuộc thuật toán", "✓ Chia doanh thu dài hạn"],
  ["User đồng kiến tạo dự án", "✗ Chỉ là người xem thụ động", "✓ Nhận quyền lợi, được ghi danh"],
  ["Hạ tầng O2O (kho, giao nhận)", "✗ Không có", "✓ NONE Retail Hub sẵn có"],
  ["Rào cản gia nhập cho đối thủ", "✗ Thấp (app thuần túy)", "✓ Cao (O2O ecosystem)"],
  ["Mô hình kiếm tiền", "Quảng cáo / hoa hồng sàn", "✓ % thặng dư trên chiến dịch"],
];

const getIcon = (cell: string) => {
  if (cell.startsWith("✓")) return "text-emerald-400";
  if (cell.startsWith("✗")) return "text-red-400";
  if (cell.startsWith("~")) return "text-yellow-400";
  return "text-muted-foreground";
};

const ComparisonSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="why" className="py-20 md:py-24 px-4 sm:px-6 lg:px-16 bg-background">
      <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="flex items-center gap-3 text-[11px] tracking-[3px] uppercase text-accent font-semibold mb-4">
          <span className="w-8 h-px bg-accent" />Lợi Thế Cạnh Tranh
        </div>
        <h2 className="font-display tracking-wide" style={{ fontSize: "clamp(34px, 9vw, 72px)", lineHeight: 1 }}>
          TẠI SAO <span className="text-gradient">TỐT HƠN?</span>
        </h2>

        <p className="mt-6 text-xs text-muted-foreground md:hidden">Vuốt ngang để xem đầy đủ bảng so sánh.</p>

        <div className="overflow-x-auto mt-6 md:mt-12 rounded-xl border border-border">
          <table className="w-full text-xs sm:text-sm border-collapse min-w-[640px]">
            <thead>
              <tr>
                <th className="text-left p-3 sm:p-4 text-[11px] sm:text-[12px] tracking-[1.2px] sm:tracking-[1.5px] uppercase font-semibold text-muted-foreground border-b border-primary/20">Tiêu chí</th>
                <th className="text-left p-3 sm:p-4 text-[11px] sm:text-[12px] tracking-[1.2px] sm:tracking-[1.5px] uppercase font-semibold text-muted-foreground border-b border-primary/20">TikTok / Sàn TMĐT</th>
                <th className="text-left p-3 sm:p-4 text-[11px] sm:text-[12px] tracking-[1.2px] sm:tracking-[1.5px] uppercase font-semibold text-foreground border-b border-primary/20 bg-primary/[0.08]">✦ dCreator</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i}>
                  <td className="p-3 sm:p-4 border-b border-border text-foreground font-medium">{r[0]}</td>
                  <td className={`p-3 sm:p-4 border-b border-border ${getIcon(r[1])}`}>{r[1]}</td>
                  <td className={`p-3 sm:p-4 border-b border-border bg-primary/5 font-medium ${getIcon(r[2])}`}>{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
