import { useI18n } from "@/lib/i18n";

export default function Cookies() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 py-20">

        <h1 className="text-3xl font-bold text-foreground mb-6">
          {t("legal.cookies.title")}
        </h1>

        <p className="text-muted-foreground mb-10">
          {t("legal.cookies.intro")}
        </p>

        <div className="prose prose-sm max-w-none text-muted-foreground space-y-8">

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              {t("legal.cookies.section1.title")}
            </h2>
            <p>{t("legal.cookies.section1.text")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              {t("legal.cookies.section2.title")}
            </h2>
            <p>{t("legal.cookies.section2.text")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              {t("legal.cookies.section3.title")}
            </h2>
            <p className="whitespace-pre-line">
              {t("legal.cookies.section3.text")}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              {t("legal.cookies.section4.title")}
            </h2>
            <p>{t("legal.cookies.section4.text")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              {t("legal.cookies.section5.title")}
            </h2>
            <p>{t("legal.cookies.section5.text")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              {t("legal.cookies.section6.title")}
            </h2>
            <p className="whitespace-pre-line">
              {t("legal.cookies.section6.text")}
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}