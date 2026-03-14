import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useI18n } from "@/lib/i18n";
import AnimatedSection from "@/components/AnimatedSection";


/* Featured images */
import proj53 from "@/assets/projects/proj53.jpg";
import proj5 from "@/assets/projects/p5.jpg";
import proj9 from "@/assets/projects/proj36.jpg";
import proj14 from "@/assets/projects/proj51.jpg";
import proj21 from "@/assets/projects/pic16.jpg";
import proj33 from "@/assets/projects/pic6.jpg";

import video1 from "@/assets/projects/video1.mp4";
import video2 from "@/assets/projects/video4.mp4";
import video3 from "@/assets/projects/video3.mp4";
import video4 from "@/assets/projects/video5.mp4";
import video5 from "@/assets/projects/video6.mp4";
import video6 from "@/assets/projects/video2.mp4";

export default function Projects() {
  const { t } = useI18n();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  /* Featured projects */
  const featuredProjects = [
    { img: proj53, key: "1" },
    { img: proj5, key: "2" },
    { img: proj9, key: "3" },
    { img: proj14, key: "4" },
    { img: proj21, key: "5" },
    { img: proj33, key: "6" }
  ];

  const videos = [
  { src: video1, key: "1" },
  { src: video2, key: "2" },
  { src: video3, key: "3" },
  { src: video4, key: "4" },
  { src: video5, key: "5" },
  { src: video6, key: "6" }
];

  /* Load ALL images automatically */
  const allImagesFromFolder = Object.values(
    import.meta.glob("@/assets/projects/*.jpg", { eager: true })
  ).map((img: any) => img.default);

  /* Remove featured images from gallery */
const featuredImageNames = featuredProjects.map((p) =>
  p.img.split("/").pop()
);

const galleryImages = allImagesFromFolder.filter((img) => {
  const name = img.split("/").pop();
  return !featuredImageNames.includes(name);
});

  /* Modal images */
  const modalImages = [
    ...featuredProjects.map((p) => p.img),
    ...galleryImages
  ];

  const nextImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % modalImages.length);
  };

  const prevImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(
      (selectedIndex - 1 + modalImages.length) % modalImages.length
    );
  };

  useEffect(() => {
  const handleKey = (e: KeyboardEvent) => {
    if (selectedIndex === null) return;

    if (e.key === "ArrowRight") {
      nextImage();
    }

    if (e.key === "ArrowLeft") {
      prevImage();
    }

    if (e.key === "Escape") {
      setSelectedIndex(null);
    }
  };

  window.addEventListener("keydown", handleKey);

  return () => {
    window.removeEventListener("keydown", handleKey);
  };
}, [selectedIndex]);

  return (
    <div>
      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />

        <div className="relative max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              {t("projects.title")}
            </h1>

            <p className="text-lg text-muted-foreground">
              {t("projects.subtitle")}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-stretch">

          {featuredProjects.map((project, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>

              <div className="rounded-xl overflow-hidden shadow-md group border border-border bg-card h-full flex flex-col">

                {/* IMAGE */}
                <div className="relative w-full h-64 overflow-hidden flex-shrink-0">
                  <img
                    src={project.img}
                    alt={`project-${project.key}`}
                    onClick={() => setSelectedIndex(i)}
                    className="w-full h-full object-cover cursor-pointer group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-5 flex flex-col flex-grow min-h-[130px]">

<h3 className="font-display font-semibold text-lg text-card-foreground mb-1">
  {t(`projects.${project.key}.title` as any)}
</h3>

<p className="text-muted-foreground text-sm flex-grow">
  {t(`projects.${project.key}.desc` as any)}
</p>

                </div>

              </div>

            </AnimatedSection>
          ))}

        </div>
      </section>


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
            {videos.map((video, index) => (
              <AnimatedSection key={video.key} delay={index * 0.15}>
                <div className="rounded-2xl overflow-hidden shadow-lg border border-border bg-card group">
                  <div className="relative aspect-[9/16] bg-muted">
                    <video
                      src={video.src}
                      className="w-full h-full object-cover"
                      controls
                      preload="metadata"
                      playsInline
                      muted
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

      {/* Gallery */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl font-display font-bold mb-12 text-center">
            All Projects
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="rounded-lg overflow-hidden cursor-pointer group"
                onClick={() => setSelectedIndex(i + featuredProjects.length)}
              >
                <img
                  src={img}
                  alt={`gallery-${i}`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Modal Viewer */}
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
            src={modalImages[selectedIndex]}
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
              className="inline-block bg-primary-foreground text-primary px-10 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition"
            >
              {t("cta.button")}
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
