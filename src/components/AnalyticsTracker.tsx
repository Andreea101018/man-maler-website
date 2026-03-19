import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GA_ID = "G-K9W1BRJP8M";
const ADS_ID = "AW-18018377910";

export default function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    if ((window as any).gtag) {
      (window as any).gtag("config", GA_ID, {
        page_path: location.pathname,
      });

      (window as any).gtag("config", ADS_ID, {
        page_path: location.pathname,
      });
    }
  }, [location]);

  return null;
}