import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, MapPin } from "lucide-react";
import ab1 from "@/assets/ab1.png";
import ab2 from "@/assets/ab2.png";
import ab3 from "@/assets/ab3.png";

import foundersImg from "@/assets/vicion4.png";

export default function About() {
  const { t } = useI18n();

  const highlights = [
    "Professionel og pålidelig service",
    "Høj kvalitet og præcision",
    "Mange tilfredse kunder",
  ];

  const coverageCities = [
    "København", "Hedehusene", "Taastrup", "Roskilde", "Ballerup",
    "Glostrup", "Hvidovre", "Albertslund", "Ishøj", "Brøndby"
  ];
  return (
    <>
      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />

        <div className="relative max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              {t("about.title")}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t("about.subtitle")}
            </p>
          </AnimatedSection>
        </div>
      </section>

{/* STORY + IMAGE */}
<section className="py-28 px-6 bg-card">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

    {/* TEXT */}
    <AnimatedSection>
      <div className="max-w-3xl">

        <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6 text-card-foreground">
          {t("about.story.title")}
        </h2>

        <div className="space-y-4 text-muted-foreground leading-normal text-lg">
          <p>{t("about.story.p1")}</p>
          <p>{t("about.story.p2")}</p>
          <p>{t("about.story.p3")}</p>
        </div>

{/* Highlights */}
<div className="mt-8 pt-6 border-t border-border grid sm:grid-cols-2 md:grid-cols-3 gap-4">
  {highlights.map((text) => (
    <div
      key={text}
      className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-warm-surface text-sm font-medium text-foreground shadow-sm"
    >
      <CheckCircle size={18} className="text-primary" />
      {text}
    </div>
  ))}
</div>

      </div>
    </AnimatedSection>

    {/* IMAGE */}
    <AnimatedSection delay={0.2}>
      <div className="flex justify-center md:justify-end">

        <div className="flex flex-col items-center">

          <div className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={foundersImg}
              alt="Victoria og Ion – Grundlæggere"
              className="w-full h-auto object-cover"
            />
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            Victoria & Ion — Grundlæggere
          </p>

        </div>

      </div>
    </AnimatedSection>

  </div>
</section>

{/* VALUES */}
<section className="relative py-28 px-6 gradient-warm">
  <div className="max-w-6xl mx-auto">
    <AnimatedSection>
      <h2 className="text-3xl md:text-4xl font-display font-semibold text-center mb-16 text-foreground">
        {t("about.values.title")}
      </h2>
    </AnimatedSection>

    <div className="grid md:grid-cols-3 gap-10 items-stretch">
      {["1", "2", "3"].map((i, idx) => (
        <AnimatedSection key={i} delay={idx * 0.1}>
          <div className="bg-card p-10 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center border border-border h-full flex flex-col">

            <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
              {i}
            </div>

            <h3 className="font-semibold text-lg mb-4 text-card-foreground">
              {t(`about.values.${i}.title` as any)}
            </h3>

            <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
              {t(`about.values.${i}.desc` as any)}
            </p>

          </div>
        </AnimatedSection>
      ))}
    </div>
  </div>
</section>
{/* WORK GALLERY */}
<section className="py-20 px-6 bg-white">
  <div className="max-w-6xl mx-auto">

    <AnimatedSection>
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 text-foreground">
          {t("about.gallery.title")}
        </h2>

        <p className="text-muted-foreground max-w-2xl mx-auto">
          {t("about.gallery.desc")}
        </p>
      </div>
    </AnimatedSection>

    <AnimatedSection delay={0.2}>
      <div className="grid md:grid-cols-3 gap-6">

        {[ab1, ab2, ab3].map((img, i) => (
          <div
            key={i}
            className="rounded-2xl overflow-hidden shadow-lg group hover:-translate-y-1 transition-all duration-300"
          >
            <img
              src={img}
              alt={`work-${i + 1}`}
              className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>
        ))}

      </div>
    </AnimatedSection>

  </div>
</section>
{/* COVERAGE AREA */}
<section className="relative py-28 px-6 gradient-warm">
  <div className="max-w-5xl mx-auto">
    <AnimatedSection>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6 text-foreground">
          {t("about.area.title")}
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
          {t("about.area.desc")}
        </p>
      </div>
    </AnimatedSection>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      {coverageCities.map((city, i) => (
        <AnimatedSection key={city} delay={i * 0.05}>
          <div className="flex items-center gap-2 p-4 rounded-xl bg-white/70 backdrop-blur-sm hover:bg-white transition text-sm font-medium text-foreground shadow-sm">
            <MapPin size={16} className="text-primary flex-shrink-0" />
            {city}
          </div>
        </AnimatedSection>
      ))}
    </div>

    <AnimatedSection delay={0.5}>
      <p className="text-center mt-6 text-muted-foreground text-sm italic">
        + resten af Sjælland
      </p>
    </AnimatedSection>
  </div>
</section>

      {/* CTA */}
      <section className="relative py-28 px-6 overflow-hidden bg-primary">

        <AnimatedSection>
          <div className="relative max-w-4xl mx-auto text-center">

            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-primary-foreground">
              {t("cta.title")}
            </h2>

            <p className="text-lg mb-10 text-primary-foreground/90">
              {t("cta.subtitle")}
            </p>

            <Link
              to="/kontakt"
              className="inline-block bg-primary-foreground text-primary px-10 py-4 rounded-lg font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              {t("cta.button")}
            </Link>

          </div>
        </AnimatedSection>

      </section>
    </>
  );
}