import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { profile } from "./data";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const contactItems = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
  { icon: MapPin, label: "Location", value: profile.location },
];

export function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    const result = schema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        fieldErrors[issue.path[0] as string] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);
    // Placeholder submit — open the user's mail client with prefilled content.
    setTimeout(() => {
      setSubmitting(false);
      form.reset();
      toast.success("Thanks for reaching out!", {
        description: "Your message has been prepared — I'll get back to you soon.",
      });
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
        `Portfolio message from ${result.data.name}`,
      )}&body=${encodeURIComponent(result.data.message + "\n\n— " + result.data.name + " (" + result.data.email + ")")}`;
    }, 500);
  };

  return (
    <section id="contact" className="bg-[image:var(--gradient-subtle)] py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Contact"
          title="Let's connect"
          description="Have an opportunity or just want to say hi? Drop me a message."
        />
        <div className="grid gap-8 md:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="grid gap-4">
              {contactItems.map((item) => {
                const content = (
                  <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)] transition-colors hover:border-primary/40">
                    <div className="grid size-11 place-items-center rounded-xl bg-accent text-accent-foreground">
                      <item.icon className="size-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="truncate font-medium">{item.value}</p>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a key={item.label} href={item.href}>
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8"
            >
              <div className="grid gap-5">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Your name" maxLength={100} />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name}</p>
                  )}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    maxLength={255}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email}</p>
                  )}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about the opportunity..."
                    maxLength={1000}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive">{errors.message}</p>
                  )}
                </div>
                <Button type="submit" size="lg" disabled={submitting}>
                  <Send className="size-4" />
                  {submitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}