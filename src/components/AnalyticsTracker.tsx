import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GA_ID = "G-K9W1BRJP8M";

export default function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    if ((window as any).gtag) {
      (window as any).gtag("config", GA_ID, {
        page_path: location.pathname,
      });
    }
  }, [location]);

  return null;
}