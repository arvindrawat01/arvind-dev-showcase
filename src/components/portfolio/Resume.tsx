import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { profile } from "./data";

export function Resume() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-[image:var(--gradient-primary)] p-10 text-center shadow-[var(--shadow-elegant)] sm:p-14">
          <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl">
            Interested in working together?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-primary-foreground/85">
            Download my resume to learn more about my background, skills, and
            projects.
          </p>
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="mt-7"
          >
            <a href={profile.resumeUrl} download>
              <Download className="size-4" /> Download Resume
            </a>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}