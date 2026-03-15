import { useI18n } from "@/lib/i18n";
import { Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import logo3 from "@/assets/logo3.png";

function TikTokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.51a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.4a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.05a8.24 8.24 0 004.76 1.5V7.12a4.83 4.83 0 01-1-.43z" />
    </svg>
  );
}

export default function Footer() {
  const { t } = useI18n();

  const navLinks = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.services"), href: "/ydelser" },
    { name: t("nav.projects"), href: "/referencer" },
    { name: t("nav.about"), href: "/om-os" },
    { name: t("nav.contact"), href: "/kontakt" },
  ];

  const socials = [
    { icon: Instagram, href: "https://www.instagram.com/manmaler.dk/", label: "Instagram" },
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61579050129336", label: "Facebook" },
    { icon: TikTokIcon, href: "https://www.tiktok.com/@malerhusetdk", label: "TikTok" },
  ];

  return (
    <footer className="bg-[#1F1F1F] text-white border-t border-gray-800">

      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-5 gap-14">

        {/* Brand */}
        <div className="flex flex-col items-center text-center">
          <Link to="/" className="mb-3">
            <img
              src={logo3}
              alt="Man Maler"
              className="h-20 w-auto rounded-sm"
            />
          </Link>

          <div className="w-12 h-[2px] bg-orange-500 mb-3"></div>

          <p className="text-gray-300 text-sm leading-relaxed max-w-[240px]">
            {t("footer.desc")}
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-300">
            Navigation
          </h4>

          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="text-gray-200 hover:text-orange-500 transition text-sm"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-300">
            {t("footer.contact")}
          </h4>

          <p className="text-gray-200 text-sm">
            Email: info@manmaler.dk
          </p>

          <p className="text-gray-200 text-sm mt-2">
            {t("footer.address")}: Energivej 27, 2750 Ballerup
          </p>
        </div>

{/* Company Info */}
<div>
  <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-300">
    {t("footer.companyInfo")}
  </h4>

  <p className="text-gray-200 text-sm font-medium">
    {t("footer.companyName")}
  </p>

  <p className="text-gray-200 text-sm mt-2">
    {t("footer.cvr")}: 45400018
  </p>

  <p className="text-gray-300 text-sm mt-4">
    {t("footer.hours")}
  </p>

  <p className="text-gray-200 text-sm">
    {t("footer.hours.weekdays")}
  </p>
</div>

        {/* Social */}
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-300">
            {t("footer.follow")}
          </h4>

          <div className="flex gap-3">
            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-200 hover:bg-orange-500 hover:text-white transition"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

      </div>

      {/* Legal Links */}
      <div className="max-w-6xl mx-auto px-6 pb-4 flex flex-wrap justify-center gap-4 text-sm text-gray-400">
        <Link to="/terms" className="hover:text-orange-500 transition">
          {t("footer.terms")}
        </Link>

        <span>·</span>

        <Link to="/privacy" className="hover:text-orange-500 transition">
          {t("footer.privacy")}
        </Link>

        <span>·</span>

        <Link to="/cookies" className="hover:text-orange-500 transition">
          {t("footer.cookies")}
        </Link>
      </div>

      {/* Bottom bar */}
      <div className="text-center py-5 border-t border-footer-border text-sm text-footer-muted space-y-1">
        <p>© {new Date().getFullYear()} MANMALER. {t("footer.rights")}</p>
        <p className="text-xs">{t("footer.operated" as any)}</p>
      </div>

    </footer>
  );
}