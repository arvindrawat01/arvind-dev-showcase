import { Code2, Rocket, GraduationCap } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { profile, activities } from "./data";

const highlights = [
  { icon: GraduationCap, label: "BCA Graduate", value: "2026" },
  { icon: Code2, label: "Core Languages", value: "Java · Python" },
  { icon: Rocket, label: "Status", value: "Open to work" },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading eyebrow="About Me" title="A bit about who I am" />
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {profile.about}
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {activities.map((a) => (
              <span
                key={a}
                className="rounded-full border border-border bg-secondary px-3 py-1 text-sm text-secondary-foreground"
              >
                {a}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid gap-4">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]"
              >
                <div className="grid size-11 place-items-center rounded-xl bg-accent text-accent-foreground">
                  <h.icon className="size-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{h.label}</p>
                  <p className="font-semibold">{h.value}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}