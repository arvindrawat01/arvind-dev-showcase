import { motion } from "motion/react";
import { ArrowDown, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "./data";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-16"
    >
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-[360px] w-[360px] rounded-full bg-primary/10 blur-[120px]" />
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
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto hidden md:block"
          >
            <div className="relative grid size-56 place-items-center rounded-3xl border border-border bg-card shadow-[var(--shadow-glow)]">
              <span className="bg-[image:var(--gradient-primary)] bg-clip-text font-display text-7xl font-bold text-transparent">
                AR
              </span>
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