import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { projects } from "./data";

export function Projects() {
  return (
    <section id="projects" className="bg-[image:var(--gradient-subtle)] py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="Selected work that reflects my interests and skills."
        />
        <div className="grid gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="group block overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:border-primary/40 hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="grid md:grid-cols-[1.3fr_1fr]">
                  <div className="p-8 sm:p-10">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-bold">{p.name}</h3>
                      <ArrowUpRight className="size-6 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                    </div>
                    <p className="mt-4 leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="relative hidden items-center justify-center bg-[image:var(--gradient-primary)] p-10 md:flex">
                    <span className="font-display text-5xl font-bold text-primary-foreground/90">
                      {"</>"}
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}