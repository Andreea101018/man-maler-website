import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

export default function Header() {
  const location = useLocation();
  const { lang, setLang, t } = useI18n();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.services"), href: "/ydelser" },
    { name: t("nav.projects"), href: "/referencer" },
    { name: t("nav.about"), href: "/om-os" },
    { name: t("nav.contact"), href: "/kontakt" },
  ];

  return (
    <header className="bg-[#F8F3EC] border-b border-[#E6DFD6] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-1">

        <Link to="/" className="flex items-center -my-4">
          <img src={logo} alt="Man Maler" className="h-24 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                className={`px-5 py-2 rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-primary/15 text-primary font-semibold"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          {/* Language Switch */}
          <div className="flex items-center bg-muted rounded-full p-1 text-xs font-semibold">
            <button
              onClick={() => setLang("da")}
              className={`px-3 py-1 rounded-full transition ${
                lang === "da"
                  ? "bg-card shadow text-primary"
                  : "text-muted-foreground"
              }`}
            >
              DA
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1 rounded-full transition ${
                lang === "en"
                  ? "bg-card shadow text-primary"
                  : "text-muted-foreground"
              }`}
            >
              EN
            </button>
          </div>

          {/* CTA */}
          <Link
            to="/kontakt"
            className="hidden md:inline-block bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-semibold hover:bg-cta-hover transition"
          >
            {t("nav.cta")}
          </Link>

          {/* Mobile Menu */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-card overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-lg transition ${
                    location.pathname === item.href
                      ? "bg-primary/15 text-primary font-semibold"
                      : "text-muted-foreground hover:bg-muted"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/kontakt"
                onClick={() => setMobileOpen(false)}
                className="bg-primary text-primary-foreground px-4 py-3 rounded-lg font-semibold text-center mt-2"
              >
                {t("nav.cta")}
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
