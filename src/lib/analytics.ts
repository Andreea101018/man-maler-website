export function loadGoogleAnalytics() {
  if ((window as any).gtag) return;

  const GA_ID = "G-K9W1BRJP8M";
  const ADS_ID = "AW-18018377910";

  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  script.async = true;
  document.head.appendChild(script);

  const scriptInline = document.createElement("script");
  scriptInline.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;

    gtag('js', new Date());

    gtag('config', '${GA_ID}');
    gtag('config', '${ADS_ID}'); // 🔥 AICI era lipsa
  `;
  document.head.appendChild(scriptInline);
}