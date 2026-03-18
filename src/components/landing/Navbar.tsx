import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#problem", label: "Vấn Đề" },
  { href: "#solution", label: "Giải Pháp" },
  { href: "#none-ecosystem", label: "NONE O2O" },
  { href: "#how", label: "Cách Hoạt Động" },
  { href: "#why-now", label: "Why Now" },
  { href: "#market", label: "Thị Trường" },
  { href: "#business-model", label: "Mô Hình" },
  { href: "#team", label: "Đội Ngũ" },
  { href: "#vision", label: "Tầm Nhìn" },
  { href: "#strategic-invite", label: "Hợp Tác" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-16 py-4 md:py-5 backdrop-blur-xl bg-background/85 border-b border-border/80">
      <div className="flex items-center justify-between">
        <span className="font-display text-[24px] sm:text-[28px] tracking-[2px] sm:tracking-[3px] text-primary">
          dCreator
        </span>

        <div className="hidden xl:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-muted-foreground text-[13px] font-medium tracking-[1.5px] uppercase hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#cta"
            className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-[13px] font-semibold tracking-wide hover:brightness-95 transition-all"
          >
            Liên Hệ
          </a>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <a
            href="#cta"
            className="bg-primary text-primary-foreground px-4 sm:px-5 py-2 rounded-full text-[12px] font-semibold tracking-wide hover:brightness-95 transition-all"
          >
            Liên Hệ
          </a>
          <button
            type="button"
            aria-label={isMenuOpen ? "Đóng menu" : "Mở menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-border bg-card/70 text-foreground"
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="xl:hidden mt-4 rounded-2xl border border-border bg-card/95 p-3">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setIsMenuOpen(false)}
                className="px-3 py-2.5 rounded-xl text-[12px] font-medium tracking-[1.2px] uppercase text-muted-foreground bg-background hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
