import { motion } from "motion/react";
import { ArrowDown, Github, Linkedin, Mail, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "./data";
import portrait from "@/assets/arvind-portrait.jpg.asset.json";

const techStack = ["Java", "Python", "React", "MongoDB", "Git"];

const stats = [
  { value: "BCA", label: "Graduate '26" },
  { value: "5+", label: "Technologies" },
  { value: "1+", label: "Projects" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-16"
    >
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.75, 0.5] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-0 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.18, 1], opacity: [0.4, 0.65, 0.4] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute right-0 bottom-0 h-[360px] w-[360px] rounded-full bg-primary/10 blur-[120px]"
        />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 py-20">
        <div className="grid items-center gap-12 md:grid-cols-[1fr_auto]">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium text-muted-foreground"
            >
              <span className="size-2 animate-pulse rounded-full bg-primary" />
              Available for opportunities
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-6 text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl"
            >
              Hi, I'm {profile.name}
              <br />
              <span className="text-gradient">{profile.role}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              {profile.tagline}. Passionate about writing clean code and building
              real-world software.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mt-6 flex flex-wrap gap-2"
            >
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur transition-colors hover:border-primary/40 hover:text-foreground"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button size="lg" asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="mt-8 flex items-center gap-4 text-muted-foreground"
            >
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-foreground">
                <Github className="size-5" />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-foreground">
                <Linkedin className="size-5" />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email" className="transition-colors hover:text-foreground">
                <Mail className="size-5" />
              </a>
              <span className="flex items-center gap-1.5 text-sm">
                <MapPin className="size-4" /> {profile.location}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.34 }}
              className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-border pt-6"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-2xl font-bold text-foreground">{s.value}</div>
                  <div className="mt-0.5 text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto hidden md:block"
          >
            <div className="relative">
              {/* floating chips */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-10 top-6 z-10 flex items-center gap-1.5 rounded-xl border border-border bg-card/80 px-3 py-2 text-xs font-medium shadow-[var(--shadow-card)] backdrop-blur"
              >
                <Sparkles className="size-3.5 text-primary" /> Open to work
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-8 bottom-8 z-10 rounded-xl border border-border bg-card/80 px-3 py-2 text-xs font-medium shadow-[var(--shadow-card)] backdrop-blur"
              >
                {"</>"} Clean code
              </motion.div>

              <div className="relative grid size-64 place-items-center overflow-hidden rounded-[2rem] border border-border bg-card shadow-[var(--shadow-glow)]">
                <div className="absolute inset-0 bg-[image:var(--gradient-primary)] opacity-10" />
                <div className="absolute inset-px rounded-[calc(2rem-1px)] bg-grid opacity-40" />
                <span className="relative bg-[image:var(--gradient-primary)] bg-clip-text font-display text-8xl font-bold text-transparent">
                  AR
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <a
          href="#about"
          className="mt-16 hidden items-center justify-center gap-2 text-xs font-medium text-muted-foreground md:flex"
        >
          <ArrowDown className="size-4 animate-bounce" /> Scroll to explore
        </a>
      </div>
    </section>
  );
}