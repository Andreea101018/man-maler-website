import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import AnimatedSection from "@/components/AnimatedSection";
import { Mail, MapPin, Clock, CheckCircle, Instagram, Facebook, ChevronDown, X, Loader2 } from "lucide-react";
import { toast } from "sonner";

function TikTokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.51a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.4a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.05a8.24 8.24 0 004.76 1.5V7.12a4.83 4.83 0 01-1-.43z" />
    </svg>
  );
}

const SERVICE_KEYS = [
  "services.extended.category1.title",
  "services.extended.category2.title",
  "services.extended.category3.title",
  "services.extended.category4.title",
] as const;

export default function Contact() {
  const { t } = useI18n();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sending, setSending] = useState(false);

  const serviceOptions = SERVICE_KEYS.map((key) => ({
    key,
    label: t(key as any),
  }));

  const toggleService = (label: string) => {
    setSelectedServices((prev) =>
      prev.includes(label) ? prev.filter((s) => s !== label) : [...prev, label]
    );
  };

  const removeService = (label: string) => {
    setSelectedServices((prev) => prev.filter((s) => s !== label));
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;

  if (selectedServices.length === 0) {
    toast.error(t("contact.services.error" as any));
    return;
  }

  setSending(true);

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        message: form.message,
        services: selectedServices,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to send email");
    }

    toast.success(t("contact.success" as any));

    setForm({
      name: "",
      email: "",
      message: "",
    });

    setSelectedServices([]);

  } catch (err) {
    console.error("Contact form error:", err);
    toast.error(t("contact.error" as any));
  } finally {
    setSending(false);
  }
};

  const infoItems = [
    { icon: Mail, title: "Email", value: t("contact.info.email") },
    { icon: MapPin, title: t("footer.address"), value: t("contact.info.address") },
    { icon: Clock, title: t("contact.info.hours"), value: `${t("contact.info.hours.weekdays")}` },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="relative max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              {t("contact.title")}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("contact.subtitle")}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-28 px-6 bg-card">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          {/* FORM */}
          <AnimatedSection>
            <div className="bg-card p-10 rounded-3xl shadow-xl border border-border">
              <h2 className="text-2xl font-display font-semibold mb-6 text-card-foreground">
                {t("contact.form.title" as any)}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">{t("contact.name")}</label>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">{t("contact.email")}</label>
                  <input
                    type="email"
                    required
                    maxLength={255}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none transition"
                  />
                </div>

                {/* Services Multi-Select Dropdown */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    {t("contact.services.label" as any)} <span className="text-destructive">*</span>
                  </label>

                  {/* Selected services chips */}
                  {selectedServices.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {selectedServices.map((service) => (
                        <span
                          key={service}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium"
                        >
                          {service}
                          <button
                            type="button"
                            onClick={() => removeService(service)}
                            className="hover:bg-primary/20 rounded-full p-0.5 transition"
                          >
                            <X size={14} />
                          </button>
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none transition flex items-center justify-between text-left"
                    >
                      <span className={selectedServices.length === 0 ? "text-muted-foreground" : "text-foreground"}>
                        {selectedServices.length === 0
                          ? t("contact.services.placeholder" as any)
                          : `${selectedServices.length} ${t("contact.services.selected" as any)}`}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`text-muted-foreground transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {dropdownOpen && (
                      <div className="mt-2 w-full bg-card border border-border rounded-xl shadow-lg overflow-hidden">
                        {serviceOptions.map((option) => {
                          const isSelected = selectedServices.includes(option.label);
                          return (
                            <button
                              key={option.key}
                              type="button"
                              onClick={() => {
                                toggleService(option.label);
                                setDropdownOpen(false);
                              }}
                              className={`w-full px-4 py-3 text-left text-sm transition flex items-center gap-3 hover:bg-accent ${
                                isSelected ? "bg-primary/5 text-primary font-medium" : "text-foreground"
                              }`}
                            >
                              <div
                                className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition ${
                                  isSelected ? "bg-primary border-primary" : "border-input"
                                }`}
                              >
                                {isSelected && <CheckCircle size={14} className="text-primary-foreground" />}
                              </div>
                              {option.label}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>

                {/* Message / Details */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    {t("contact.details.label" as any)} <span className="text-destructive">*</span>
                  </label>
                  <p className="text-xs text-muted-foreground mb-2">
                    {t("contact.details.hint" as any)}
                  </p>
                  <textarea
                    required
                    rows={5}
                    maxLength={1000}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder={t("contact.details.placeholder" as any)}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none transition resize-none placeholder:text-muted-foreground/60"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-primary text-primary-foreground py-3.5 rounded-xl font-semibold hover:bg-cta-hover hover:scale-[1.02] hover:shadow-lg transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {sending && <Loader2 size={18} className="animate-spin" />}
                  {t("contact.send")}
                </button>
              </form>

              <div className="mt-6 text-sm text-muted-foreground flex items-center gap-2">
                <CheckCircle size={16} className="text-primary" />
                {t("contact.response.time" as any)}
              </div>
            </div>
          </AnimatedSection>

          {/* INFO PANEL */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-10">
              <h2 className="text-2xl font-display font-semibold text-card-foreground">
                {t("contact.info.title")}
              </h2>

              <div className="space-y-6">
                {infoItems.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-start gap-5 p-6 rounded-2xl bg-warm-surface hover:bg-warm-surface-hover transition">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="text-primary" size={22} />
                      </div>
                      <div>
                        <p className="font-semibold mb-1 text-foreground">{item.title}</p>
                        <p className="text-muted-foreground text-sm">{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social Media CTA */}
              <div className="p-8 rounded-2xl bg-primary text-primary-foreground">
                <h3 className="font-semibold text-lg mb-3">Følg os på sociale medier</h3>
                <p className="text-primary-foreground/90 mb-5 text-sm">
                  Se vores seneste projekter og få inspiration.
                </p>
                <div className="flex gap-3">
                  {[
                    { icon: Instagram, href: "https://www.instagram.com/manmaler.dk/", label: "Instagram" },
                    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61579050129336", label: "Facebook" },
                    { icon: TikTokIcon, href: "https://www.tiktok.com/@malerhusetdk", label: "TikTok" },
                  ].map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/30 transition"
                        aria-label={social.label}
                      >
                        <Icon size={18} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
