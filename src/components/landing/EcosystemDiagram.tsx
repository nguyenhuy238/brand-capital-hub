import { motion, type Easing } from "framer-motion";
import { BadgeDollarSign, ShoppingBag, Sparkles, Users } from "lucide-react";

const fadeIn = {
	initial: { opacity: 0, y: 24, scale: 0.98 },
	animate: { opacity: 1, y: 0, scale: 1 },
	transition: { duration: 0.8, delay: 0.12, ease: "easeOut" as Easing },
};

const nodeBase =
	"absolute w-[160px] md:w-[190px] rounded-2xl border border-border bg-card/95 px-2.5 py-2.5 text-center backdrop-blur-sm shadow-[0_8px_24px_hsla(224,28%,12%,0.08)]";

const EcosystemDiagram = () => (
	<motion.div
		{...fadeIn}
		className="relative mx-auto mb-8 w-full max-w-[940px]"
		aria-label="Biểu đồ hệ sinh thái Brand Creator User"
	>
		<div className="relative aspect-[19/10] w-full overflow-visible rounded-[28px] border border-border bg-[radial-gradient(circle_at_50%_40%,hsla(359,74%,52%,0.10)_0%,hsla(220,24%,96%,0.96)_54%,hsla(220,20%,92%,1)_100%)] px-4 py-6 md:px-8 md:py-7">
			<div className="absolute inset-5 rounded-[24px] border border-border/80 [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_100%)]" />
			<div className="absolute inset-0 bg-[linear-gradient(0deg,hsla(220,12%,86%,0.25)_1px,transparent_1px),linear-gradient(90deg,hsla(220,12%,86%,0.2)_1px,transparent_1px)] bg-[size:28px_28px] opacity-40" />

			<motion.div
				className="absolute left-1/2 top-[49%] h-[62%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10"
				animate={{ rotate: 360 }}
				transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
			>
				<span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-primary/70" />
				<span className="absolute bottom-[18%] left-[4%] h-1.5 w-1.5 rounded-full bg-primary/60" />
				<span className="absolute bottom-[18%] right-[4%] h-1.5 w-1.5 rounded-full bg-primary/60" />
			</motion.div>

			<svg
				viewBox="0 0 120 70"
				className="absolute inset-0 h-full w-full"
				role="img"
				aria-hidden="true"
			>
				<defs>
					<linearGradient id="triangleLine" x1="10%" x2="90%" y1="10%" y2="90%">
						<stop offset="0%" stopColor="hsla(224,10%,52%,0.72)" />
						<stop offset="100%" stopColor="hsla(359,74%,52%,0.88)" />
					</linearGradient>
					<radialGradient id="orbitGlow" cx="50%" cy="50%" r="50%">
						<stop offset="0%" stopColor="hsla(359,74%,52%,0.2)" />
						<stop offset="100%" stopColor="hsla(359,74%,52%,0)" />
					</radialGradient>
				</defs>

				<circle cx="60" cy="36" r="26" fill="url(#orbitGlow)" />
				<circle cx="60" cy="36" r="28" fill="none" stroke="hsla(220,12%,56%,0.2)" strokeWidth="0.5" strokeDasharray="0.4 2" />

				<path d="M60 12 L24 56 L96 56 Z" fill="none" stroke="url(#triangleLine)" strokeWidth="0.62" />
				<path d="M24 56 Q60 61 96 56" fill="none" stroke="hsla(359,74%,52%,0.22)" strokeWidth="0.38" strokeDasharray="0.8 1.5" />

				<circle cx="60" cy="12" r="1.2" fill="hsla(359,74%,52%,0.95)" />
				<circle cx="24" cy="56" r="1.2" fill="hsla(220,14%,42%,0.72)" />
				<circle cx="96" cy="56" r="1.2" fill="hsla(220,14%,42%,0.72)" />
			</svg>

			<motion.div className="absolute left-1/2 top-[8%] -translate-x-1/2" animate={{ y: [0, -4, 0] }} transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}>
				<div className={nodeBase}>
					<p className="flex items-center justify-center gap-1.5 text-[9px] tracking-[1.5px] text-foreground/85"><ShoppingBag className="h-3 w-3 text-primary" />BRAND</p>
					<p className="text-[10px] font-medium text-muted-foreground leading-tight">Inventory &amp; margin</p>
					<p className="mt-0.5 text-[9px] leading-tight text-muted-foreground">Cung cấp hàng hóa chất lượng &amp; chia sẻ doanh thu tự động.</p>
				</div>
			</motion.div>

			<motion.div className="absolute left-[20%] top-[67%] -translate-x-1/2 -translate-y-1/2 md:left-[4%] md:-translate-x-[72%]" animate={{ y: [0, 3, 0] }} transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}>
				<div className={nodeBase}>
					<p className="flex items-center justify-center gap-1.5 text-[9px] tracking-[1.5px] text-foreground/85"><Users className="h-3 w-3 text-primary" />USER</p>
					<p className="text-[10px] font-medium text-muted-foreground leading-tight">Experience &amp; value</p>
					<p className="mt-0.5 text-[9px] leading-tight text-muted-foreground">Trải nghiệm mua sắm 020 liền mạch với giá gốc Member.</p>
				</div>
			</motion.div>

			<motion.div className="absolute left-[76%] top-[67%] -translate-x-1/2 -translate-y-1/2" animate={{ y: [0, 2, 0] }} transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut" }}>
				<div className={nodeBase}>
					<p className="flex items-center justify-center gap-1.5 text-[9px] tracking-[1.5px] text-foreground/85"><BadgeDollarSign className="h-3 w-3 text-primary" />CREATORS</p>
					<p className="text-[10px] font-medium text-muted-foreground leading-tight">Content &amp; influence</p>
					<p className="mt-0.5 text-[9px] leading-tight text-muted-foreground">Biến review thành thu nhập qua mạng lưới affiliate thông minh.</p>
				</div>
			</motion.div>

			<div className="absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2">
				<motion.div
					className="relative flex h-20 w-20 items-center justify-center rounded-full border border-primary/35 bg-card shadow-[0_12px_26px_hsla(359,74%,52%,0.16)]"
					animate={{ boxShadow: ["0 12px 26px hsla(359,74%,52%,0.16)", "0 18px 34px hsla(359,74%,52%,0.24)", "0 12px 26px hsla(359,74%,52%,0.16)"] }}
					transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
				>
					<span className="font-display text-5xl leading-none text-primary">d</span>
					<motion.div
						className="absolute -inset-2 rounded-full border border-primary/25"
						animate={{ scale: [1, 1.09, 1], opacity: [0.45, 0.2, 0.45] }}
						transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
					/>
					<Sparkles className="absolute -right-1 -top-1 h-4 w-4 text-primary/80" />
				</motion.div>
			</div>

			<div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-border bg-card/85 px-4 py-2 text-center backdrop-blur-sm">
				<p className="text-[10px] tracking-[2px] text-muted-foreground uppercase">Social Commerce O2O Loop</p>
			</div>
		</div>
	</motion.div>
);

export default EcosystemDiagram;
