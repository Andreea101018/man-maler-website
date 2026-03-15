import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { Paintbrush, Building2, Home, Star, Shield, HandCoins, Handshake,Layers, Wrench, Hammer} from "lucide-react";

import heroImg from "@/assets/hero-bg.png";
import project1 from "@/assets/projects/proj53.jpg";
import project2 from "@/assets/projects/p5.jpg";
import project3 from "@/assets/projects/proj36.jpg";

import video1 from "@/assets/projects/video1.mp4";
import video2 from "@/assets/projects/video3.mp4";
import video3 from "@/assets/projects/video5.mp4";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";


export default function Index() {
  const { t } = useI18n();

const services = [
  {
    icon: Paintbrush,
    title: t("services.home.painting.title"),
    desc: t("services.home.painting.desc")
  },
  {
    icon: Wrench,
    title: t("services.home.renovation.title"),
    desc: t("services.home.renovation.desc")
  },
  {
    icon: Hammer,
    title: t("services.home.commercial.title"),
    desc: t("services.home.commercial.desc")
  }
];

  const projects = [
    { img: project1, key: "1" as const },
    { img: project2, key: "2" as const },
    { img: project3, key: "3" as const },
  ];

  const whyUs = [
    { icon: Star, key: "experience" as const },
    { icon: Shield, key: "quality" as const },
    { icon: HandCoins, key: "pricing" as const },
    { icon: Handshake, key: "reliable" as const },
  ];
const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

const nextImage = () => {
  if (selectedIndex === null) return;
  setSelectedIndex((selectedIndex + 1) % projects.length);
};

const prevImage = () => {
  if (selectedIndex === null) return;
  setSelectedIndex(
    (selectedIndex - 1 + projects.length) % projects.length
  );
};

/* Keyboard navigation */
useEffect(() => {
  const handleKey = (e: KeyboardEvent) => {
    if (selectedIndex === null) return;

    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "Escape") setSelectedIndex(null);
  };

  window.addEventListener("keydown", handleKey);

  return () => window.removeEventListener("keydown", handleKey);
}, [selectedIndex]);
return (
  <>
    <Helmet>
      <title>Maler i København | Professionel Maler på Sjælland | MAN MALER</title>

      <meta
        name="description"
        content="Professionel maler i København, Ballerup og Roskilde. Vi tilbyder indendørs maling, facademaling, renovering og erhvervsmaling på hele Sjælland."
      />

      <meta
        name="keywords"
        content="maler københavn, maler sjælland, maler ballerup, maler roskilde, facademaling, indendørs maling"
      />

      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://manmaler.dk/" />
    </Helmet>

    <main className="flex flex-col">
      {/* HERO */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0">
<img
  src={heroImg}
  alt="Professionel malerarbejde"
  loading="eager"
  fetchPriority="high"
  className="w-full h-full object-cover"
/>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        </div>

        <div className="relative z-10 max-w-3xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight text-primary-foreground"
          >
            {t("hero.title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl mb-10 text-primary-foreground/90"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              to="/kontakt"
              className="bg-primary hover:bg-cta-hover text-primary-foreground px-8 py-3.5 rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-lg"
            >
              {t("hero.cta")}
            </Link>
            <Link
              to="/ydelser"
              className="border-2 border-primary-foreground/80 text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-all"
            >
              {t("hero.services")}
            </Link>
          </motion.div>
        </div>
      </section>

{/* SERVICES */}
<section className="relative px-6 pb-24 gradient-warm">
  <div className="max-w-6xl mx-auto -mt-12 z-20 relative">
    <AnimatedSection>
      <div className="bg-card rounded-2xl shadow-xl p-10 md:p-14">
        <h2 className="text-3xl font-display font-semibold text-center mb-12 text-card-foreground">
          {t("services.title")}
        </h2>

<div className="grid md:grid-cols-3 gap-8 items-stretch">
  {services.map((service, i) => {
    const Icon = service.icon;

    return (
      <AnimatedSection key={i} delay={i * 0.1}>
        <div className="p-6 rounded-xl border border-border hover:-translate-y-2 hover:shadow-lg transition-all duration-300 group h-full flex flex-col">

          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
            <Icon className="text-primary" size={24} />
          </div>

          <h3 className="font-semibold mb-3 text-lg text-card-foreground">
            {service.title}
          </h3>

          <p className="text-muted-foreground flex-grow">
            {service.desc}
          </p>

        </div>
      </AnimatedSection>
    );
  })}
</div>

      </div>
    </AnimatedSection>
  </div>
</section>

{/* PROJECTS */}
<section className="py-24 px-6 bg-background">
  <div className="max-w-6xl mx-auto">

    <AnimatedSection>
      <h2 className="text-3xl font-display font-semibold text-center mb-12 text-foreground">
        {t("projects.title")}
      </h2>
    </AnimatedSection>

    <div className="grid md:grid-cols-3 gap-6">

      {projects.map((p, index) => (
        <AnimatedSection key={p.key} delay={index * 0.1}>

          <div className="rounded-xl overflow-hidden shadow-md group border border-border bg-card h-full flex flex-col">

            {/* IMAGE */}
            <div className="relative w-full h-64 overflow-hidden">
              <img
                src={p.img}
                alt={t(`projects.${p.key}.title` as any)}
                onClick={() => setSelectedIndex(index)}
                className="w-full h-full object-cover cursor-pointer group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5 flex flex-col flex-grow min-h-[130px]">

              <h3 className="font-display font-semibold text-lg mb-1 text-card-foreground">
                {t(`projects.${p.key}.title` as any)}
              </h3>

              <p className="text-muted-foreground text-sm flex-grow">
                {t(`projects.${p.key}.desc` as any)}
              </p>

            </div>

          </div>

        </AnimatedSection>
      ))}

    </div>

  </div>
</section>

{/* IMAGE MODAL */}
{selectedIndex !== null && (
  <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">

    {/* Close */}
    <button
      className="absolute top-6 right-8 text-white text-4xl"
      onClick={() => setSelectedIndex(null)}
    >
      ✕
    </button>

    {/* Previous */}
    <button
      className="absolute left-6 text-white text-5xl"
      onClick={prevImage}
    >
      ‹
    </button>

    {/* Image */}
    <img
      src={projects[selectedIndex].img}
      className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-xl"
    />

    {/* Next */}
    <button
      className="absolute right-6 text-white text-5xl"
      onClick={nextImage}
    >
      ›
    </button>

  </div>
)}

      {/* VIDEOS */}
      <section className="py-24 px-6 gradient-warm">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 text-foreground">
                {t("videos.title" as any)}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t("videos.subtitle" as any)}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
                      
                        { src: video1, key: "1" },
                        { src: video2, key: "2" },
                        { src: video3, key: "3" },
            ]
            .map((video, index) => (
              <AnimatedSection key={video.key} delay={index * 0.15}>
                <div className="rounded-2xl overflow-hidden shadow-lg border border-border bg-card group">
                  <div className="relative aspect-[9/16] bg-muted">
<video
  src={video.src}
  className="w-full h-full object-cover"
  controls
  preload="auto"
  playsInline
  muted
  autoPlay
/>
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-display font-semibold text-lg text-card-foreground">
                      {t(`videos.${video.key}.title` as any)}
                    </h3>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>


{/* WHY US */}
<section className="py-24 px-6 bg-card">
  <div className="max-w-6xl mx-auto">
    <AnimatedSection>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 text-card-foreground">
          {t("why.title")}
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {t("why.subtitle")}
        </p>
      </div>
    </AnimatedSection>

    <div className="grid md:grid-cols-4 gap-8 items-stretch">
      {whyUs.map((item, i) => {
        const Icon = item.icon;

        return (
          <AnimatedSection key={item.key} delay={i * 0.1}>
            <div className="text-center p-8 rounded-2xl bg-warm-surface hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">

              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <Icon className="text-primary" size={26} />
              </div>

              <h3 className="font-semibold mb-3 text-lg text-foreground">
                {t(`why.${item.key}.title` as any)}
              </h3>

              <p className="text-muted-foreground text-sm flex-grow">
                {t(`why.${item.key}.desc` as any)}
              </p>

            </div>
          </AnimatedSection>
        );
      })}
    </div>
  </div>
</section>

{/* TESTIMONIALS */}
<section className="py-24 px-6 gradient-warm">
  <div className="max-w-5xl mx-auto text-center">
    <AnimatedSection>
      <h2 className="text-3xl font-display font-semibold mb-12 text-foreground">
        {t("testimonials.title")}
      </h2>
    </AnimatedSection>

    <div className="grid md:grid-cols-2 gap-8 items-stretch">
      {["1", "2"].map((i) => (
        <AnimatedSection key={i} delay={Number(i) * 0.1}>
          <div className="bg-card p-8 rounded-2xl shadow-sm border border-border h-full flex flex-col">
            
            {/* Stars */}
            <div className="flex gap-1 mb-4 justify-center">
              {[...Array(5)].map((_, s) => (
                <Star key={s} size={16} className="text-primary fill-primary" />
              ))}
            </div>

            {/* Text */}
            <p className="italic mb-6 text-foreground leading-relaxed flex-grow">
              "{t(`testimonials.${i}.text` as any)}"
            </p>

            {/* Author */}
            <p className="font-semibold text-primary mt-auto">
              — {t(`testimonials.${i}.author` as any)}
            </p>

          </div>
        </AnimatedSection>
      ))}
    </div>
  </div>
</section>
{/* SEO SERVICES SECTION */}
<section className="py-24 px-6 bg-background border-t border-border">
  <div className="max-w-6xl mx-auto">

    {/* TITLE + AREA TEXT */}
    <AnimatedSection>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 text-foreground">
          {t("seo.serviceAreas.title")}
        </h2>

        <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          {t("seo.serviceAreas.text")}
        </p>
      </div>
    </AnimatedSection>

    {/* SERVICES TITLE */}
    <AnimatedSection>
      <h3 className="text-2xl font-semibold text-center mb-10 text-foreground">
        {t("seo.services.title")}
      </h3>
    </AnimatedSection>

    {/* SERVICES GRID */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

      {/* INTERIOR */}
      <AnimatedSection delay={0.05}>
        <div className="p-6 rounded-xl border border-border bg-card hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full flex flex-col">

          <div className="flex items-center gap-3 mb-4">
            <Paintbrush className="text-primary" size={22} />
            <h4 className="font-semibold text-lg text-card-foreground">
              {t("seo.services.interiorTitle")}
            </h4>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
            {t("seo.services.interior")}
          </p>

        </div>
      </AnimatedSection>

      {/* EXTERIOR */}
      <AnimatedSection delay={0.1}>
        <div className="p-6 rounded-xl border border-border bg-card hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full flex flex-col">

          <div className="flex items-center gap-3 mb-4">
            <Home className="text-primary" size={22} />
            <h4 className="font-semibold text-lg text-card-foreground">
              {t("seo.services.exteriorTitle")}
            </h4>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
            {t("seo.services.exterior")}
          </p>

        </div>
      </AnimatedSection>

      {/* RENOVATION */}
      <AnimatedSection delay={0.15}>
        <div className="p-6 rounded-xl border border-border bg-card hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full flex flex-col">

          <div className="flex items-center gap-3 mb-4">
            <Wrench className="text-primary" size={22} />
            <h4 className="font-semibold text-lg text-card-foreground">
              {t("seo.services.renovationTitle")}
            </h4>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
            {t("seo.services.renovation")}
          </p>

        </div>
      </AnimatedSection>

      {/* COMMERCIAL */}
      <AnimatedSection delay={0.2}>
        <div className="p-6 rounded-xl border border-border bg-card hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full flex flex-col">

          <div className="flex items-center gap-3 mb-4">
            <Building2 className="text-primary" size={22} />
            <h4 className="font-semibold text-lg text-card-foreground">
              {t("seo.services.commercialTitle")}
            </h4>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
            {t("seo.services.commercial")}
          </p>

        </div>
      </AnimatedSection>

    </div>

  </div>
</section>
      {/* CTA */}
      <section className="py-28 px-6 bg-primary">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center">
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
    </main>
  </>
);
}
