import { GraduationCap, Briefcase } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { education } from "./data";

export function Education() {
  return (
    <section id="education" className="bg-[image:var(--gradient-subtle)] py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="Education" title="Academic & professional journey" />
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]">
              <div className="grid size-12 place-items-center rounded-xl bg-accent text-accent-foreground">
                <GraduationCap className="size-6" />
              </div>
              <p className="mt-5 text-sm font-medium text-primary">
                Graduating {education.year}
              </p>
              <h3 className="mt-1 text-xl font-bold">{education.degree}</h3>
              <p className="mt-2 text-muted-foreground">{education.institution}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]">
              <div className="grid size-12 place-items-center rounded-xl bg-accent text-accent-foreground">
                <Briefcase className="size-6" />
              </div>
              <p className="mt-5 text-sm font-medium text-primary">Experience</p>
              <h3 className="mt-1 text-xl font-bold">Fresher</h3>
              <p className="mt-2 text-muted-foreground">{education.experience}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}