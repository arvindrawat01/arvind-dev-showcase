import { motion } from "motion/react";

const blobs = [
  {
    color: "var(--aura-violet)",
    className: "-top-32 -left-24 h-[40rem] w-[40rem]",
    animate: { x: [0, 60, 0], y: [0, -40, 0] },
    duration: 19,
  },
  {
    color: "var(--aura-blue)",
    className: "top-1/4 -right-32 h-[38rem] w-[38rem]",
    animate: { x: [0, -50, 0], y: [0, 50, 0] },
    duration: 23,
  },
  {
    color: "var(--aura-pink)",
    className: "bottom-0 left-1/4 h-[36rem] w-[36rem]",
    animate: { x: [0, 40, 0], y: [0, -30, 0] },
    duration: 21,
  },
  {
    color: "var(--aura-cyan)",
    className: "top-1/2 left-0 h-[30rem] w-[30rem]",
    animate: { x: [0, 50, 0], y: [0, 30, 0] },
    duration: 26,
  },
  {
    color: "var(--aura-amber)",
    className: "-bottom-24 right-1/4 h-[28rem] w-[28rem]",
    animate: { x: [0, -40, 0], y: [0, -40, 0] },
    duration: 24,
  },
];

export function AuroraBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* solid theme base */}
      <div className="absolute inset-0 bg-background" />

      {/* colorful drifting orbs */}
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          animate={b.animate}
          transition={{ duration: b.duration, repeat: Infinity, ease: "easeInOut" }}
          style={{ backgroundColor: b.color }}
          className={`absolute rounded-full opacity-25 blur-[130px] dark:opacity-30 ${b.className}`}
        />
      ))}

      {/* subtle grid texture */}
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]" />

      {/* soft vignette for readability */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,color-mix(in_oklab,var(--background)_55%,transparent))]" />
    </div>
  );
}
