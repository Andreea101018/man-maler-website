import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, Paintbrush, Wrench, Layers, Hammer } from "lucide-react";
import interiorImg from "@/assets/interior.png";
import exteriorImg from "@/assets/exterior.png";
import renovationImg from "@/assets/renovation.png";
import commercialImg from "@/assets/commercial.png";

export default function Services() {
  const { t } = useI18n();

  const categories = [
    { icon: Paintbrush, key: "category1", items: 8, image: interiorImg },
    { icon: Layers, key: "category2", items: 7, image: exteriorImg },
    { icon: Wrench, key: "category3", items: 7, image: renovationImg },
    { icon: Hammer, key: "category4", items: 6, image: commercialImg },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="relative max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              {t("services.extended.hero.title")}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              {t("services.extended.hero.subtitle")}
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  {t(`services.extended.hero.trust${i}` as any)}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SERVICE CATEGORIES */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-6xl mx-auto space-y-16">

          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <AnimatedSection key={index}>
                <div className="bg-card rounded-3xl shadow-xl border border-border p-10">

                  {/* Service Image */}
                  <div className="mb-8 overflow-hidden rounded-2xl">
                    <img
                      src={category.image}
                      alt={t(`services.extended.${category.key}.title` as any)}
                      className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  {/* Title */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="text-primary" size={28} />
                    </div>

                    <h2 className="text-2xl md:text-3xl font-display font-semibold text-card-foreground">
                      {t(`services.extended.${category.key}.title` as any)}
                    </h2>
                  </div>

                  {/* Items */}
                  <div className="grid md:grid-cols-2 gap-4">
                    {Array.from({ length: category.items }).map((_, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <CheckCircle
                          size={18}
                          className="text-primary flex-shrink-0 mt-1"
                        />

                        <span>
                          {t(`services.extended.${category.key}.item${i + 1}` as any)}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>
              </AnimatedSection>
            );
          })}

        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 px-6 overflow-hidden bg-primary">
        <AnimatedSection>
          <div className="relative max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-primary-foreground">
              {t("services.extended.cta.title")}
            </h2>
            <p className="text-lg mb-10 text-primary-foreground/90">
              {t("services.extended.cta.subtitle")}
            </p>
            <Link
              to="/kontakt"
              className="inline-block bg-primary-foreground text-primary px-10 py-4 rounded-lg font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              {t("services.extended.cta.button")}
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
