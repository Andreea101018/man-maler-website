import { useI18n } from "@/lib/i18n";

export default function Privacy() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 py-20">

        <h1 className="text-3xl font-bold text-foreground mb-6">
          {t("legal.privacy.title")}
        </h1>

        <p className="text-muted-foreground mb-10">
          {t("legal.privacy.intro")}
        </p>

        <div className="prose prose-sm max-w-none text-muted-foreground space-y-8">

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              {t("legal.privacy.section1.title")}
            </h2>
            <p className="whitespace-pre-line">
  {t("legal.privacy.section1.text")}
</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              {t("legal.privacy.section2.title")}
            </h2>
            <p>{t("legal.privacy.section2.text")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              {t("legal.privacy.section3.title")}
            </h2>
            <p>{t("legal.privacy.section3.text")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              {t("legal.privacy.section4.title")}
            </h2>
            <p>{t("legal.privacy.section4.text")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              {t("legal.privacy.section5.title")}
            </h2>
            <p>{t("legal.privacy.section5.text")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              {t("legal.privacy.section6.title")}
            </h2>
            <p>{t("legal.privacy.section6.text")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              {t("legal.privacy.section7.title")}
            </h2>
            <p>{t("legal.privacy.section7.text")}</p>
          </section>

        </div>
      </div>
    </div>
  );
}