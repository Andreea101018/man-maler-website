import { useI18n } from "@/lib/i18n";

export default function Terms() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 py-20">

        <h1 className="text-3xl font-bold text-foreground mb-6">
          {t("legal.terms.title")}
        </h1>

        <p className="text-muted-foreground mb-10">
          {t("legal.terms.intro")}
        </p>

        <div className="prose prose-sm max-w-none text-muted-foreground space-y-8">

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              {t("legal.terms.section1.title")}
            </h2>
            <p className="whitespace-pre-line">
              {t("legal.terms.section1.text")}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              {t("legal.terms.section2.title")}
            </h2>
            <p>{t("legal.terms.section2.text")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              {t("legal.terms.section3.title")}
            </h2>
            <p>{t("legal.terms.section3.text")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              {t("legal.terms.section4.title")}
            </h2>
            <p>{t("legal.terms.section4.text")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              {t("legal.terms.section5.title")}
            </h2>
            <p>{t("legal.terms.section5.text")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              {t("legal.terms.section6.title")}
            </h2>
            <p>{t("legal.terms.section6.text")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              {t("legal.terms.section7.title")}
            </h2>
            <p>{t("legal.terms.section7.text")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              {t("legal.terms.section8.title")}
            </h2>
            <p>{t("legal.terms.section8.text")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              {t("legal.terms.section9.title")}
            </h2>
            <p>{t("legal.terms.section9.text")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              {t("legal.terms.section10.title")}
            </h2>
            <p>{t("legal.terms.section10.text")}</p>
          </section>

        </div>
      </div>
    </div>
  );
}