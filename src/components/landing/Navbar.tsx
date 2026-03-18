const navLinks = [
  { href: "#problem", label: "Vấn Đề" },
  { href: "#solution", label: "Giải Pháp" },
  { href: "#how", label: "Cách Hoạt Động" },
  { href: "#why", label: "Lợi Thế" },
  { href: "#cta", label: "Liên Hệ" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-16 py-5 flex items-center justify-between backdrop-blur-xl bg-background/85 border-b border-border/80">
      <span className="font-display text-[28px] tracking-[3px] text-primary">
        dCreator
      </span>
      <div className="hidden md:flex items-center gap-9">
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
    </nav>
  );
};

export default Navbar;
