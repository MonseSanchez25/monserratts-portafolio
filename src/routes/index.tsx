import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { BarChart3, ShieldCheck, Briefcase, Languages, Mail, Linkedin, MapPin, Plane, Download, ExternalLink, ArrowRight, GraduationCap, Award, Menu, X, Quote, Target } from "lucide-react";
import { ui, experience, projects, skills, education, contact, type Lang } from "@/content/portfolio";
import cvEs from "@/assets/cv.pdf.asset.json";
import cvEn from "@/assets/resume.pdf.asset.json";

const TITLE = "Monserrat Tecuapacho Sánchez | Análisis de Datos, Calidad y Mejora Continua";
const DESC = "Portafolio de Monserrat Tecuapacho Sánchez, Ingeniera en Gestión Empresarial especializada en análisis de datos, calidad y mejora continua.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Person", name: "Monserrat Tecuapacho Sánchez", jobTitle: "Ingeniera en Gestión Empresarial", email: "mailto:tsmonse25@gmail.com", address: { "@type": "PostalAddress", addressLocality: "Tlaxcala", addressCountry: "MX" }, sameAs: ["https://www.linkedin.com/in/m0nsets25"] }) }],
  }),
  component: Index,
});

const icons = { chart: BarChart3, quality: ShieldCheck, pm: Briefcase, lang: Languages };

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("in")), { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="reveal mb-12">
        <p className="font-display text-xs uppercase tracking-[0.3em] text-accent">{eyebrow}</p>
        <h2 className="mt-3 text-3xl md:text-4xl">{title}</h2>
        <div className="mt-4 h-px w-24 bg-gradient-brand" />
      </div>
      {children}
    </section>
  );
}

function HeroGraphic() {
  return (
    <svg viewBox="0 0 420 320" className="w-full" role="img" aria-label="Gráfico abstracto de datos y objetivos">
      <defs>
        <linearGradient id="g" x1="0" x2="1"><stop offset="0" stopColor="var(--violet)" /><stop offset=".5" stopColor="var(--primary)" /><stop offset="1" stopColor="var(--accent)" /></linearGradient>
        <linearGradient id="a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="var(--primary)" stopOpacity=".35" /><stop offset="1" stopColor="var(--primary)" stopOpacity="0" /></linearGradient>
      </defs>
      {[60, 120, 180, 240].map((y) => <line key={y} x1="30" x2="400" y1={y} y2={y} stroke="var(--border)" />)}
      {[50, 95, 75, 140, 120, 185].map((h, i) => <rect key={i} x={50 + i * 58} y={270 - h} width="26" height={h} rx="5" fill="var(--secondary)" />)}
      <path d="M40 240 L100 205 L160 220 L220 150 L280 165 L340 95 L390 60 L390 270 L40 270 Z" fill="url(#a)" />
      <path className="animate-draw" d="M40 240 L100 205 L160 220 L220 150 L280 165 L340 95 L390 60" fill="none" stroke="url(#g)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="30" x2="400" y1="70" y2="70" stroke="var(--accent)" strokeDasharray="6 6" opacity=".7" />
      <text x="34" y="62" fill="var(--accent)" fontSize="11" fontFamily="Montserrat">TARGET</text>
      <circle cx="390" cy="60" r="14" fill="none" stroke="var(--accent)" opacity=".5"><animate attributeName="r" values="8;18;8" dur="3s" repeatCount="indefinite" /></circle>
      <circle cx="390" cy="60" r="6" fill="var(--accent)" />
    </svg>
  );
}

function Index() {
  const [lang, setLang] = useState<Lang>("es");
  const [open, setOpen] = useState(false);
  useReveal();
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  const L = (x: { es: string; en: string }) => x[lang];
  const nav = ["about", "experience", "projects", "skills", "education", "contact"] as const;
  const btn = "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";
  const primary = `${btn} bg-gradient-brand text-primary-foreground shadow-glow hover:-translate-y-0.5`;
  const ghost = `${btn} border border-border text-foreground hover:border-primary hover:bg-secondary`;

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-primary focus:px-3 focus:py-2">Skip</a>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5" aria-label="Principal">
          <a href="#top" className="font-display text-lg font-semibold"><span className="text-gradient">MTS</span><span className="ml-2 hidden text-sm text-muted-foreground sm:inline">Monserrat Tecuapacho</span></a>
          <ul className="hidden items-center gap-6 lg:flex">
            {nav.map((k) => <li key={k}><a href={`#${k}`} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{L(ui.nav[k])}</a></li>)}
          </ul>
          <div className="flex items-center gap-2">
            <div className="flex rounded-full border border-border p-0.5 text-xs" role="group" aria-label="Idioma / Language">
              {(["es", "en"] as Lang[]).map((l) => (
                <button key={l} onClick={() => setLang(l)} aria-pressed={lang === l} className={`rounded-full px-3 py-1 font-semibold uppercase transition-colors ${lang === l ? "bg-gradient-brand text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>{l}</button>
              ))}
            </div>
            <button className="p-2 lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>{open ? <X size={20} /> : <Menu size={20} />}</button>
          </div>
        </nav>
        {open && (
          <ul className="border-t border-border bg-background px-5 py-3 lg:hidden">
            {nav.map((k) => <li key={k}><a onClick={() => setOpen(false)} href={`#${k}`} className="block py-2 text-muted-foreground hover:text-foreground">{L(ui.nav[k])}</a></li>)}
          </ul>
        )}
      </header>

      <main id="main">
        {/* HERO */}
        <section id="top" className="relative pt-16">
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:py-28 lg:grid-cols-2">
            <div className="reveal">
              <p className="font-display text-sm text-muted-foreground">Monserrat Tecuapacho Sánchez · {L(ui.role)}</p>
              <h1 className="mt-4 text-5xl leading-tight md:text-6xl"><span className="text-gradient">{L(ui.heroTitle)}</span></h1>
              <p className="mt-4 font-display text-lg text-foreground/90">{L(ui.heroSub)}</p>
              <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">{L(ui.heroIntro)}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#experience" className={primary}>{L(ui.ctaJourney)} <ArrowRight size={16} /></a>
                <a href="#contact" className={ghost}>{L(ui.ctaContact)}</a>
              </div>
            </div>
            <div className="reveal panel p-6 shadow-glow">
              <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
                <span className="font-display uppercase tracking-widest">Data → Decision</span>
                <span className="flex gap-1.5"><i className="h-2 w-2 rounded-full bg-accent" /><i className="h-2 w-2 rounded-full bg-primary" /><i className="h-2 w-2 rounded-full bg-violet" /></span>
              </div>
              <HeroGraphic />
              <div className="mt-4 border-t border-border pt-4">
                <p className="text-xs uppercase tracking-widest text-accent">{L(ui.valueLabel)}</p>
                <p className="mt-2 text-sm leading-relaxed text-foreground/90">{L(ui.value)}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <Section id="about" eyebrow="01" title={L(ui.aboutTitle)}>
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="reveal space-y-5 leading-relaxed text-muted-foreground lg:col-span-3">
              {ui.aboutText.map((p, i) => <p key={i}>{L(p)}</p>)}
              <blockquote className="panel relative mt-8 p-6 text-foreground">
                <Quote className="absolute -top-3 left-5 bg-background text-accent" size={24} aria-hidden />
                <p className="font-display text-lg leading-snug">"{L(ui.quote)}"</p>
              </blockquote>
            </div>
            <div className="reveal lg:col-span-2">
              <h3 className="mb-4 text-sm uppercase tracking-widest text-muted-foreground">{L(ui.strengthsTitle)}</h3>
              <ul className="grid gap-2">
                {ui.strengths.map((s, i) => (
                  <li key={i} className="panel flex items-center gap-3 px-4 py-3 text-sm">
                    <span className="font-display text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>{L(s)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* EXPERIENCE */}
        <Section id="experience" eyebrow="02" title={L(ui.experienceTitle)}>
          <ol className="relative space-y-10 border-l border-border pl-8 md:pl-10">
            {experience.map((e, i) => (
              <li key={i} className="reveal relative">
                <span className="absolute -left-[41px] top-6 h-4 w-4 rounded-full bg-gradient-brand ring-4 ring-background md:-left-[49px]" aria-hidden />
                <article className="panel p-6 md:p-8">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-xl">{L(e.role)}</h3>
                    <span className="rounded-full border border-border px-3 py-1 text-xs text-accent">{L(e.period)}</span>
                  </div>
                  <p className="mt-1 text-primary">{e.org}</p>
                  <ul className="mt-5 space-y-2 text-sm leading-relaxed text-muted-foreground">
                    {e.items.map((it, j) => <li key={j} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{L(it)}</li>)}
                  </ul>
                </article>
              </li>
            ))}
          </ol>
        </Section>

        {/* PROJECTS */}
        <Section id="projects" eyebrow="03" title={L(ui.projectsTitle)}>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <article key={i} className="reveal panel group flex flex-col p-6 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-glow">
                <p className="text-xs uppercase tracking-widest text-accent">{L(p.tag)}</p>
                <h3 className="mt-3 text-lg leading-snug">{L(p.title)}</h3>
                <dl className="mt-5 flex-1 space-y-4 text-sm">
                  {([[ui.problem, p.problem], [ui.method, p.method], [ui.result, p.result]] as const).map(([k, v], j) => (
                    <div key={j}><dt className="font-display text-xs text-foreground">{L(k)}</dt><dd className="mt-1 leading-relaxed text-muted-foreground">{Array.isArray(v) ? v.map(L).join(" ") : L(v as { es: string; en: string })}</dd></div>
                  ))}
                </dl>
                <ul className="mt-5 flex flex-wrap gap-2">{p.tags.map((t) => <li key={t} className="rounded-md bg-secondary px-2 py-1 text-xs text-secondary-foreground">{t}</li>)}</ul>
                {p.link && <a href={p.link} target="_blank" rel="noopener noreferrer" className={`${ghost} mt-6 w-full`}>{L(ui.viewDoc)} <ExternalLink size={14} /></a>}
              </article>
            ))}
          </div>
        </Section>

        {/* SKILLS */}
        <Section id="skills" eyebrow="04" title={L(ui.skillsTitle)}>
          <div className="grid gap-6 sm:grid-cols-2">
            {skills.map((s, i) => {
              const Icon = icons[s.icon as keyof typeof icons];
              return (
                <div key={i} className="reveal panel p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-secondary text-primary"><Icon size={20} aria-hidden /></span>
                    <h3 className="text-lg">{L(s.title)}</h3>
                  </div>
                  {s.langs ? (
                    <ul className="mt-5 space-y-3">{s.langs.map(([n, lv], j) => <li key={j} className="flex items-center justify-between border-b border-border pb-2 text-sm"><span>{L(n)}</span><span className="font-display text-accent">{L(lv)}</span></li>)}</ul>
                  ) : (
                    <ul className="mt-5 flex flex-wrap gap-2">{s.items.map((it) => <li key={it} className="rounded-full border border-border px-3 py-1.5 text-sm text-muted-foreground">{it}</li>)}</ul>
                  )}
                </div>
              );
            })}
          </div>
        </Section>

        {/* EDUCATION */}
        <Section id="education" eyebrow="05" title={L(ui.educationTitle)}>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="reveal panel p-6">
              <GraduationCap className="text-primary" aria-hidden />
              <h3 className="mt-4 text-xl">{L(education.degree)}</h3>
              <p className="mt-1 text-muted-foreground">{education.school}</p>
              <p className="mt-3 font-display text-sm text-accent">{education.period}</p>
            </div>
            <div className="reveal space-y-4">
              <h3 className="text-sm uppercase tracking-widest text-muted-foreground">{L(ui.certsLabel)}</h3>
              {education.certs.map((c, i) => (
                <div key={i} className="panel flex gap-4 p-5">
                  <Award className="mt-0.5 shrink-0 text-accent" aria-hidden />
                  <div><p className="font-display text-sm leading-snug">{L(c.name)}</p><p className="mt-1 text-sm text-muted-foreground">{c.issuer} · {c.year}</p></div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* GOAL */}
        <section className="mx-auto max-w-6xl px-5 py-12">
          <div className="reveal relative overflow-hidden rounded-2xl border border-border bg-secondary p-8 md:p-12">
            <div className="bg-grid absolute inset-0 opacity-30" />
            <div className="relative">
              <p className="flex items-center gap-2 font-display text-xs uppercase tracking-[0.3em] text-accent"><Target size={16} aria-hidden /> {L(ui.goalTitle)}</p>
              <p className="mt-5 max-w-3xl font-display text-xl leading-relaxed md:text-2xl">{L(ui.goal)}</p>
              <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-background/60 px-4 py-2 text-sm"><Plane size={16} className="text-primary" aria-hidden /> {L(ui.mobility)}</p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <Section id="contact" eyebrow="06" title={L(ui.contactTitle)}>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="reveal">
              <p className="leading-relaxed text-muted-foreground">{L(ui.contactText)}</p>
              <ul className="mt-8 space-y-4 text-sm">
                <li className="flex items-center gap-3"><Mail size={18} className="text-primary" aria-hidden /><a href={`mailto:${contact.email}`} className="hover:text-accent">{contact.email}</a></li>
                <li className="flex items-center gap-3"><Linkedin size={18} className="text-primary" aria-hidden /><a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent">linkedin.com/in/m0nsets25</a></li>
                <li className="flex items-center gap-3"><MapPin size={18} className="text-primary" aria-hidden /><span><span className="text-muted-foreground">{L(ui.location)}:</span> Tlaxcala, México</span></li>
                <li className="flex items-center gap-3"><Plane size={18} className="text-primary" aria-hidden /><span><span className="text-muted-foreground">{L(ui.availability)}:</span> {L(ui.availabilityValue)}</span></li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={`mailto:${contact.email}`} className={primary}><Mail size={16} /> {L(ui.sendEmail)}</a>
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className={ghost}><Linkedin size={16} /> {L(ui.visitLinkedin)}</a>
              </div>
            </div>
            <div className="reveal panel p-6 md:p-8">
              <h3 className="flex items-center gap-2 text-lg"><Download size={18} className="text-accent" aria-hidden /> {L(ui.downloadCv)}</h3>
              <div className="mt-6 grid gap-3">
                {[[cvEs.url, ui.cvEs, "ES"], [cvEn.url, ui.cvEn, "EN"]].map(([url, label, code]) => (
                  <a key={code as string} href={url as string} target="_blank" rel="noopener noreferrer" download className="flex items-center justify-between rounded-xl border border-border p-4 transition-colors hover:border-primary hover:bg-secondary">
                    <span className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-brand font-display text-xs text-primary-foreground">{code as string}</span>{L(label as { es: string; en: string })}</span>
                    <Download size={16} className="text-muted-foreground" aria-hidden />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Monserrat Tecuapacho Sánchez · <span className="text-gradient font-display">{L(ui.heroTitle)}</span>
      </footer>
    </div>
  );
}
