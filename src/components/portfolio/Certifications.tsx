import { Award } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { certifications } from "./data";

export function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading eyebrow="Certifications" title="Continuous learning" />
      <div className="grid gap-6 sm:grid-cols-3">
        {certifications.map((c, i) => (
          <Reveal key={c} delay={i * 0.08}>
            <div className="flex h-full items-center gap-4 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1">
              <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
                <Award className="size-5" />
              </div>
              <p className="font-medium leading-snug">{c}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}