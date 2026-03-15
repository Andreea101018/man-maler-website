import React, { createContext, useContext, useState, useCallback } from "react";

type Lang = "da" | "en";

const translations = {
  da: {
    "nav.home": "Forside",
    "nav.services": "Ydelser",
    "nav.projects": "Referencer",
    "nav.about": "Om os",
    "nav.contact": "Kontakt",
    "nav.cta": "Få et tilbud",

    "hero.title": "Professionel Maler i København og på Sjælland",
    "hero.subtitle": "Professionelt malerfirma i København, Ballerup, Roskilde, Hvidovre, Herlev, Glostrup, Lyngby, Gentofte, Greve, Køge og hele Sjælland. Vi udfører indendørs maling, udendørs maling, facademaling, spartling og renovering af lejligheder, huse og erhvervsejendomme.",
    "hero.cta": "Få et gratis tilbud",
    "hero.services": "Se vores ydelser",

    "services.title": "Professionelle Malerydelser i København og på Sjælland",
    "services.indoor.title": "Indendørs Maling",
    "services.indoor.desc": "Professionel indendørs maling af vægge, lofter, døre, paneler og træværk i lejligheder, huse og erhvervslokaler. Vi tilbyder spartling, tapetsering, klargøring af overflader og farverådgivning til kunder i København, Ballerup, Roskilde og hele Sjælland.",
    "services.outdoor.title": "Udendørs Maling",
    "services.outdoor.desc": "Udendørs maling og facademaling af huse, villaer, rækkehuse og erhvervsbygninger. Vi udfører maling af facade, vinduer, døre, hegn og træværk samt træbeskyttelse og vedligeholdelse i København, Roskilde, Greve, Køge og hele Sjælland.",
    "services.commercial.title": "Erhvervsløsninger",
    "services.commercial.desc": "Professionelt malerarbejde til kontorer, butikker, institutioner, ejendomme og virksomheder i København, Frederiksberg, Ballerup, Lyngby og hele Sjælland.",

    "services.home.painting.title": "Indendørs & Udendørs Maling",
"services.home.painting.desc": "Professionel maling af vægge, lofter, facader, vinduer og træværk til både boliger og erhverv.",

"services.home.renovation.title": "Renovering",
"services.home.renovation.desc": "Renoveringsarbejde inkl. spartling, reparation af overflader, klargøring før maling samt reparation og afslibning af trægulve.",

"services.home.commercial.title": "Erhvervsmaling",
"services.home.commercial.desc": "Professionelt malerarbejde til kontorer, butikker og erhvervslokaler med fokus på holdbare resultater.",

    "services.extended.hero.title": "Komplette Malerløsninger",
    "services.extended.hero.subtitle": "Fra små opgaver til store projekter – vi leverer kvalitetsmalerarbejde med professionelt resultat hver gang i København og på hele Sjælland.",
    "services.extended.hero.trust1": "Certificerede malere",
    "services.extended.hero.trust2": "Miljøvenlige materialer",
    "services.extended.hero.trust3": "Garanti på alt arbejde",
    "services.extended.category1.title": "Indendørs Maling",
    "services.extended.category1.item1": "Vægmaling i alle farver",
    "services.extended.category1.item2": "Loftsmaling og -behandling",
    "services.extended.category1.item3": "Træværk og paneler",
    "services.extended.category1.item4": "Tapetsering og vægbeklædning",
    "services.extended.category1.item5": "Spartling og klargøring",
    "services.extended.category1.item6": "Dekorative teknikker",
    "services.extended.category1.item7": "Farverådgivning",
    "services.extended.category1.item8": "Efterbehandling og finish",
    "services.extended.category2.title": "Udendørs Maling",
    "services.extended.category2.item1": "Facademaling",
    "services.extended.category2.item2": "Vinduer og døre",
    "services.extended.category2.item3": "Træbeskyttelse",
    "services.extended.category2.item4": "Tagmaling",
    "services.extended.category2.item5": "Hegn og stakitter",
    "services.extended.category2.item6": "Betonbehandling",
    "services.extended.category2.item7": "Rustbeskyttelse",
    "services.extended.category3.title": "Renovering",
    "services.extended.category3.item1": "Komplet boligrenovering",
    "services.extended.category3.item2": "Vandskadebehandling",
    "services.extended.category3.item3": "Skimmelbehandling",
    "services.extended.category3.item4": "Gulvbehandling",
    "services.extended.category3.item5": "Loftsrenovering",
    "services.extended.category3.item6": "Vådrumsbehandling",
    "services.extended.category3.item7": "Energirenovering",
    "services.extended.category4.title": "Erhverv",
    "services.extended.category4.item1": "Kontormaling",
    "services.extended.category4.item2": "Butiksmaling",
    "services.extended.category4.item3": "Industriel maling",
    "services.extended.category4.item4": "Ejendomsvedligeholdelse",
    "services.extended.category4.item5": "Institutioner",
    "services.extended.category4.item6": "Storprojekter",
    "services.extended.cta.title": "Klar til at komme i gang?",
    "services.extended.cta.subtitle": "Kontakt os i dag for en uforpligtende snak om dit projekt.",
    "services.extended.cta.button": "Kontakt os",

    "projects.title": "Vores Projekter",
    "projects.subtitle": "Se et udvalg af vores seneste arbejde og bliv inspireret.",


  "projects.1.title": "Maling af Lejlighed",
  "projects.1.desc": "Indvendig maling af lejlighed i København med maling af vægge, lofter og træværk samt spartling og klargøring af overflader.",

  "projects.2.title": "Forberedelse før Maling",
  "projects.2.desc": "Grundig afdækning og forberedelse af gulve og overflader for at sikre et professionelt resultat.",

  "projects.3.title": "Erhvervsmaling",
  "projects.3.desc": "Professionel maling af kontorer og erhvervslokaler med holdbare og flotte overflader.",


"projects.4.title": "Gulvbehandling",
"projects.4.desc": "Professionel behandling og finish af trægulv for et rent og holdbart resultat.",

"projects.5.title": "Malerarbejde i Gang",
"projects.5.desc": "Et kig på vores arbejdsproces under et malerprojekt.",

"projects.6.title": "Færdigt Resultat",
"projects.6.desc": "Et færdigmalet rum med rene linjer og et professionelt finish.",

    "videos.title": "Se Vores Arbejde i Praksis",
    "videos.subtitle": "Følg med i vores malerprocesser og se de professionelle resultater vi leverer til kunder på hele Sjælland.",
    "videos.1.title": "Malerprocessen",
    "videos.2.title": "I Arbejde",
"videos.3.title": "Malerarbejde i Gang",
"videos.4.title": "Fra Arbejdspladsen",
"videos.5.title": "Detaljemaling",
"videos.6.title": "Færdigt Gulv og Rum",


    "testimonials.title": "Hvad Siger Vores Kunder?",
    "testimonials.1.text": "Vi fik udført malerarbejde i vores lejlighed, og resultatet var fantastisk. Meget professionelt arbejde, grundigt udført og til tiden. Kan varmt anbefales.",


    "testimonials.1.author": "Mette H., København",
     "testimonials.2.author": "Lars P., Roskilde",
    "testimonials.2.text": "Vi fik malet hele facaden på vores villa, og resultatet er virkelig flot. Arbejdet blev udført professionelt, og kommunikationen var nem hele vejen igennem. Kan varmt anbefales.",

    "why.title": "Hvorfor Vælge MAN MALER?",
    "why.subtitle": "Vi leverer professionelt malerarbejde til private og erhverv i København, Ballerup, Roskilde, Hvidovre, Herlev, Glostrup, Lyngby, Gentofte, Greve og hele Sjælland.",
    "why.experience.title": "Erfaring & Ekspertise",
    "why.experience.desc": "Mange års erfaring med professionelt malerarbejde til private og erhverv på Sjælland.",
    "why.quality.title": "Kvalitetsmaterialer",
    "why.quality.desc": "Vi bruger kun de bedste og mest miljøvenlige materialer og teknikker.",
    "why.pricing.title": "Fair & Gennemsigtige Priser",
    "why.pricing.desc": "Konkurrencedygtige priser med gratis og uforpligtende tilbud.",
    "why.reliable.title": "Pålidelighed",
    "why.reliable.desc": "Vi overholder altid aftaler, deadlines og leverer til tiden.",

    "cta.title": "Klar til at forvandle dit hjem?",
    "cta.subtitle": "Kontakt os i dag for et gratis og uforpligtende tilbud på professionelt malerarbejde.",
    "cta.button": "Kontakt os nu",


"about.title": "Om MAN MALER",

"about.subtitle": "Professionelt malerarbejde bygget på præcision, pålidelighed og respekt for hvert eneste rum, vi arbejder i.",

"about.story.title": "Vores Historie",

"about.story.p1": "MAN MALER blev skabt med en klar vision: at levere malerarbejde og overfladebehandling af høj kvalitet til både private hjem og erhvervslokaler. Vi tror på, at godt håndværk begynder med respekt for rummet og afsluttes med et resultat, der holder i mange år.",

"about.story.p2": "Virksomheden drives af Ion og Victoria, som sammen står bag udviklingen af vores serviceområder. Ion har mange års erfaring inden for malerarbejde, overfladebehandling og renovering og har det primære ansvar for vores malerprojekter. Hans arbejde fokuserer på præcision, rene linjer og et professionelt finish – uanset om det gælder lejligheder, huse eller erhvervsejendomme.",

"about.story.p3": "Victoria bidrager med erfaring inden for service og drift og har været med til at opbygge virksomhedens struktur og kundeservice. MANMALER er en del af Nordisk Renhed og Bygg ApS, hvor både malerarbejde og rengøringsydelser oprindeligt blev udviklet. Efterhånden som virksomheden voksede, blev ydelserne opdelt i specialiserede områder – CleanSpell for rengøring og MANMALER for maler- og renoveringsarbejde – for at sikre bedre fokus og konstant høj kvalitet.",

"about.values.title": "Vores Værdier",

"about.values.1.title": "Præcision",
"about.values.1.desc": "Vi udfører hvert projekt med fokus på detaljer, rene overflader og professionelle afslutninger.",

"about.values.2.title": "Pålidelighed",
"about.values.2.desc": "Vi overholder aftaler, tidsplaner og leverer stabile resultater fra start til slut.",

"about.values.3.title": "Respekt for rummet",
"about.values.3.desc": "Vi behandler hvert hjem og hver arbejdsplads med omhu, så resultatet både ser godt ud og føles rigtigt.",

"about.area.title": "Dækningsområde",

"about.area.desc": "Vi udfører malerarbejde og renovering i København, Ballerup, Roskilde, Hvidovre, Herlev, Glostrup, Lyngby, Gentofte, Greve, Køge, Hillerød, Helsingør, Næstved og resten af Sjælland.",
"about.gallery.title": "Stemning fra vores arbejde",
"about.gallery.desc": "Hos MANMALER er godt håndværk også gode mennesker. Vi værdsætter samarbejde, godt humør og et positivt arbejdsmiljø – fordi glade mennesker skaber de bedste resultater for vores kunder.",
    "contact.title": "Kontakt Os",
    "contact.subtitle": "Vi ser frem til at høre fra dig. Send os en besked, og vi vender tilbage hurtigst muligt.",
    "contact.name": "Navn",
    "contact.email": "Email",
    "contact.message": "Besked",
    "contact.send": "Send besked",
    "contact.form.title": "Send os en besked",
    "contact.services.label": "Hvilke ydelser er du interesseret i?",
    "contact.services.placeholder": "Vælg en eller flere ydelser",
    "contact.services.selected": "ydelser valgt",
    "contact.services.error": "Vælg venligst mindst én ydelse",
    "contact.details.label": "Fortæl os mere om dit projekt",
    "contact.details.hint": "Beskriv gerne hvad vi kan hjælpe dig med – f.eks. størrelse, ønsker, tidspunkt eller andre detaljer.",
    "contact.details.placeholder": "F.eks. 'Vi skal have malet 3 værelser i vores lejlighed. Vi ønsker lyse farver og har brug for hjælp til farvevalg...'",
    "contact.success": "Tak for din henvendelse! Vi vender tilbage hurtigst muligt. ✓",
    "contact.error": "Der opstod en fejl. Prøv venligst igen.",
    "contact.response.time": "Vi svarer typisk indenfor 24 timer.",
    "contact.info.title": "Kontaktinformation",
    "contact.info.email": "info@manmaler.dk",
    "contact.info.address": "Energivej 27, 2750 Ballerup",
    "contact.info.hours": "Åbningstider",
    "contact.info.hours.weekdays": "Man-Fre: 08:00 – 16:00",
    "contact.success.title": "Tak for din henvendelse!",
"contact.success.description": "Vi har modtaget din besked og vender typisk tilbage inden for få timer.",
"contact.success.button": "Send en ny besked",

    "footer.company": "MANMALER",
    "footer.desc": "Professionel maler i København, Ballerup, Roskilde, Hvidovre, Herlev, Glostrup, Lyngby, Gentofte, Greve, Køge og hele Sjælland. Vi udfører indendørs maling, udendørs maling, facademaling, spartling, renovering og erhvervsmaling.",
    "footer.contact": "Kontakt",
    "footer.address": "Adresse",
    "footer.follow": "Følg os",
    "footer.rights": "Alle rettigheder forbeholdes.",
    "footer.operated": "MANMALER drives under Nordisk Renhed og Bygg ApS",
    "footer.legal": "Juridisk",
    "footer.terms": "Handelsbetingelser",
    "footer.privacy": "Privatlivspolitik",
    "footer.cookies": "Cookiepolitik",
    "footer.companyInfo": "Virksomhedsinfo",
"footer.companyName": "Nordisk Renhed og Bygg ApS",
"footer.cvr": "CVR",
"footer.hours": "Åbningstider",
"footer.hours.weekdays": "Man–Fre · 08:00–16:00",

"legal.terms.title": "Handelsbetingelser",

"legal.terms.intro": "Disse handelsbetingelser gælder for alle ydelser leveret af MAN MALER. Ved at bruge vores hjemmeside eller bestille vores tjenester accepterer du nedenstående vilkår.",

"legal.terms.section1.title": "Virksomhedsoplysninger",
"legal.terms.section1.text": "MAN MALER drives under Nordisk Renhed og Bygg ApS\nCVR: 45400018\nAdresse: Energivej 27, 2750 Ballerup\nEmail: info@manmaler.dk",

"legal.terms.section2.title": "Ydelser",
"legal.terms.section2.text": "MAN MALER leverer professionelle maler- og renoveringsydelser til både private og erhverv. Omfanget af den enkelte opgave aftales individuelt med kunden før arbejdet påbegyndes.",

"legal.terms.section3.title": "Bestilling og betaling",
"legal.terms.section3.text": "Bestilling kan ske via vores hjemmeside, email eller telefon. Priser aftales på forhånd og kan variere afhængigt af opgavens omfang. Betalingsbetingelser oplyses før arbejdet udføres.",

"legal.terms.section4.title": "Aflysning og ændringer",
"legal.terms.section4.text": "Hvis en aftale ønskes aflyst eller ændret, bedes kunden kontakte os så tidligt som muligt. Ved sen aflysning kan der i visse tilfælde opkræves et gebyr afhængigt af situationen.",

"legal.terms.section5.title": "Kundens ansvar",
"legal.terms.section5.text": "Kunden er ansvarlig for at sikre adgang til ejendommen på det aftalte tidspunkt. Eventuelle værdigenstande eller skrøbelige genstande bør sikres eller fjernes før arbejdet påbegyndes.",

"legal.terms.section6.title": "Ansvar",
"legal.terms.section6.text": "MAN MALER udfører alle opgaver med professionel omhu og faglighed. Vi er ikke ansvarlige for indirekte eller følgeskader, medmindre andet følger af gældende lovgivning. Eventuelle skader skal meddeles hurtigst muligt efter arbejdets udførelse.",

"legal.terms.section7.title": "Reklamation",
"legal.terms.section7.text": "Hvis du ikke er tilfreds med en udført ydelse, bedes du kontakte os hurtigst muligt, så vi kan vurdere situationen og om nødvendigt finde en løsning.",

"legal.terms.section8.title": "Brug af hjemmesiden",
"legal.terms.section8.text": "Indholdet på denne hjemmeside er udelukkende til generel information. MAN MALER forbeholder sig retten til at opdatere eller ændre hjemmesiden og dens indhold uden forudgående varsel.",

"legal.terms.section9.title": "Lovvalg",
"legal.terms.section9.text": "Disse handelsbetingelser er underlagt dansk lovgivning. Eventuelle tvister afgøres ved de danske domstole.",

"legal.terms.section10.title": "Kontakt",
"legal.terms.section10.text": "Hvis du har spørgsmål til disse handelsbetingelser, er du velkommen til at kontakte os via telefon eller email.",
"legal.privacy.title": "Privatlivspolitik",

"legal.privacy.intro": "Denne privatlivspolitik forklarer, hvordan MAN MALER indsamler og behandler personoplysninger i forbindelse med brugen af vores hjemmeside og vores tjenester.",

"legal.privacy.section1.title": "Dataansvarlig",
"legal.privacy.section1.text": "MAN MALER drives under Nordisk Renhed og Bygg ApS\nCVR: 45400018\nAdresse: Energivej 27, 2750 Ballerup\nEmail: info@manmaler.dk",
"legal.privacy.section2.title": "Hvilke personoplysninger indsamler vi?",
"legal.privacy.section2.text": "Vi indsamler kun personoplysninger, som du selv vælger at give os, for eksempel når du kontakter os via kontaktformularen, sender os en email eller ringer til os. Oplysningerne kan inkludere dit navn, emailadresse, telefonnummer samt andre oplysninger, som du vælger at skrive i din besked.",

"legal.privacy.section3.title": "Formål med behandlingen",
"legal.privacy.section3.text": "Vi bruger dine personoplysninger til at besvare henvendelser, udarbejde tilbud samt planlægge og udføre de aftalte maler- eller renoveringsopgaver.",

"legal.privacy.section4.title": "Opbevaring af personoplysninger",
"legal.privacy.section4.text": "Vi opbevarer dine personoplysninger kun så længe, det er nødvendigt for at opfylde formålet med behandlingen eller i det omfang, det er påkrævet i henhold til gældende lovgivning.",

"legal.privacy.section5.title": "Videregivelse af personoplysninger",
"legal.privacy.section5.text": "Vi videregiver ikke dine personoplysninger til tredjepart, medmindre det er nødvendigt for at levere vores tjenester eller er påkrævet ved lov.",

"legal.privacy.section6.title": "Dine rettigheder",
"legal.privacy.section6.text": "Du har ret til at få indsigt i de personoplysninger, vi behandler om dig. Du har også ret til at få rettet eller slettet dine oplysninger samt til at gøre indsigelse mod behandlingen af dine personoplysninger.",

"legal.privacy.section7.title": "Kontakt",
"legal.privacy.section7.text": "Hvis du har spørgsmål til denne privatlivspolitik, er du velkommen til at kontakte os via telefon eller email.",
"legal.cookies.title": "Cookiepolitik",

"legal.cookies.intro": "Denne cookiepolitik forklarer, hvordan MAN MALER bruger cookies og lignende teknologier på vores hjemmeside.",

"legal.cookies.section1.title": "Hvad er cookies?",
"legal.cookies.section1.text": "Cookies er små tekstfiler, der gemmes på din enhed, når du besøger en hjemmeside. Cookies bruges ofte til at sikre, at hjemmesiden fungerer korrekt, samt til at indsamle statistiske oplysninger om, hvordan hjemmesiden anvendes.",

"legal.cookies.section2.title": "Hvilke cookies bruger vi?",
"legal.cookies.section2.text": "MAN MALER bruger cookies til statistiske og analytiske formål. Disse cookies hjælper os med at forstå, hvordan besøgende bruger vores hjemmeside, så vi kan forbedre funktionalitet, indhold og brugeroplevelse.",

"legal.cookies.section3.title": "Analyseværktøjer",
"legal.cookies.section3.text": "Vi kan bruge analyseværktøjer såsom Google Analytics til at indsamle oplysninger, herunder:\n\n• Antallet af besøgende på hjemmesiden\n• Hvilke sider der besøges\n• Hvor længe besøgende opholder sig på hjemmesiden\n• Om en besøgende sender en kontaktforespørgsel\n\nOplysningerne anvendes kun i samlet og anonymiseret form og kan ikke bruges til at identificere dig som person.",

"legal.cookies.section4.title": "Samtykke til cookies",
"legal.cookies.section4.text": "Når du besøger vores hjemmeside første gang, bliver du bedt om at give samtykke til brugen af cookies. Du kan til enhver tid ændre eller trække dit samtykke tilbage.",

"legal.cookies.section5.title": "Sådan sletter eller blokerer du cookies",
"legal.cookies.section5.text": "Du kan altid slette eller blokere cookies via indstillingerne i din browser. Bemærk dog, at hvis du blokerer cookies, kan visse funktioner på hjemmesiden muligvis ikke fungere korrekt.",

"legal.cookies.section6.title": "Kontakt",
"legal.cookies.section6.text": "Hvis du har spørgsmål til vores brug af cookies, er du velkommen til at kontakte os:\n\nMAN MALER drives under Nordisk Renhed og Bygg ApS\nCVR: 45400018\nAdresse: Energivej 27, 2750 Ballerup\nEmail: info@manmaler.dk",
  "seo.text1": "Leder du efter en professionel maler i København eller på Sjælland? MAN MALER tilbyder professionelt malerarbejde i København, Ballerup, Roskilde, Hvidovre, Herlev, Glostrup, Lyngby, Gentofte, Greve, Køge, Hillerød, Helsingør og resten af Sjælland.",
"seo.serviceAreas.title": "Professionel maler i København og på Sjælland",

"seo.serviceAreas.text": "MAN MALER tilbyder professionelt malerarbejde i København, Frederiksberg, Ballerup, Herlev, Glostrup, Hvidovre, Rødovre, Taastrup, Albertslund, Lyngby, Gentofte, Roskilde, Greve, Køge, Hillerød, Helsingør, Næstved og resten af Sjælland. Vi udfører indendørs maling, udendørs maling, facademaling, renovering, spartling og erhvervsmaling for både private boliger og virksomheder.",

"seo.services.title": "Vores maler- og renoveringsydelser",

"seo.services.interior": "Maling af vægge, loftmaling, træværk, paneler, tapetsering, spartling og klargøring af overflader, dekorative malerteknikker, farverådgivning og professionel finish.",

"seo.services.exterior": "Facademaling, maling af vinduer og døre, træbeskyttelse, tagmaling, maling af hegn, betonbehandling og rustbeskyttelse.",

"seo.services.renovation": "Komplet boligrenovering, behandling af vandskader, skimmelbehandling, gulvbehandling, loftsrenovering, vådrumsbehandling og energirenovering.",

"seo.services.commercial": "Kontormaling, butiksmaling, industriel maling, ejendomsvedligeholdelse, institutioner og større malerprojekter.",
"seo.services.interiorTitle": "Indendørs maling",
"seo.services.exteriorTitle": "Udendørs maling",
"seo.services.renovationTitle": "Renovering",
"seo.services.commercialTitle": "Erhvervsmaling"},
  en: {
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.cta": "Get a quote",

    "hero.title": "Professional Painter in Copenhagen and Across Zealand",
    "hero.subtitle": "Professional painting company serving Copenhagen, Ballerup, Roskilde, Hvidovre, Herlev, Glostrup, Lyngby, Gentofte, Greve, Køge and across Zealand. We provide interior painting, exterior painting, facade painting, renovation and commercial painting for apartments, houses and businesses.",
    "hero.cta": "Get a free quote",
    "hero.services": "See our services",

    "services.title": "Professional Painting Services in Copenhagen and Zealand",
    "services.indoor.title": "Interior Painting",
    "services.indoor.desc": "Professional interior painting of walls, ceilings, doors, woodwork and panels in apartments, houses and commercial spaces. We also provide surface preparation, filling, wallpapering and color consultation across Copenhagen and Zealand.",
    "services.outdoor.title": "Exterior Painting",
    "services.outdoor.desc": "Exterior painting and facade painting for houses, villas, townhouses and commercial buildings. We paint facades, windows, doors, fences and woodwork and provide wood protection services across Copenhagen and Zealand.",
    "services.commercial.title": "Commercial Solutions",
    "services.commercial.desc": "Professional commercial painting for offices, retail stores, institutions and companies in Copenhagen, Frederiksberg, Ballerup, Lyngby and across Zealand.",
"services.home.painting.title": "Interior & Exterior Painting",
"services.home.painting.desc": "Professional painting of walls, ceilings, facades, windows and woodwork for homes and businesses.",

"services.home.renovation.title": "Renovation",
"services.home.renovation.desc": "Renovation work including surface repair, filling, preparation before painting and repair or sanding of wooden floors.",

"services.home.commercial.title": "Commercial Painting",
"services.home.commercial.desc": "Professional painting for offices, shops and commercial spaces with durable finishes.",
    

    "services.extended.hero.title": "Complete Painting Solutions",
    "services.extended.hero.subtitle": "From small tasks to large projects – we deliver quality painting with professional results every time in Copenhagen and across Zealand.",
    "services.extended.hero.trust1": "Certified painters",
    "services.extended.hero.trust2": "Eco-friendly materials",
    "services.extended.hero.trust3": "Warranty on all work",
    "services.extended.category1.title": "Interior Painting",
    "services.extended.category1.item1": "Wall painting in all colors",
    "services.extended.category1.item2": "Ceiling painting & treatment",
    "services.extended.category1.item3": "Woodwork and panels",
    "services.extended.category1.item4": "Wallpapering",
    "services.extended.category1.item5": "Filling and preparation",
    "services.extended.category1.item6": "Decorative techniques",
    "services.extended.category1.item7": "Color consultation",
    "services.extended.category1.item8": "Finishing touches",
    "services.extended.category2.title": "Exterior Painting",
    "services.extended.category2.item1": "Facade painting",
    "services.extended.category2.item2": "Windows and doors",
    "services.extended.category2.item3": "Wood protection",
    "services.extended.category2.item4": "Roof painting",
    "services.extended.category2.item5": "Fences",
    "services.extended.category2.item6": "Concrete treatment",
    "services.extended.category2.item7": "Rust protection",
    "services.extended.category3.title": "Renovation",
    "services.extended.category3.item1": "Complete home renovation",
    "services.extended.category3.item2": "Water damage treatment",
    "services.extended.category3.item3": "Mold treatment",
    "services.extended.category3.item4": "Floor treatment",
    "services.extended.category3.item5": "Ceiling renovation",
    "services.extended.category3.item6": "Wet room treatment",
    "services.extended.category3.item7": "Energy renovation",
    "services.extended.category4.title": "Commercial",
    "services.extended.category4.item1": "Office painting",
    "services.extended.category4.item2": "Retail painting",
    "services.extended.category4.item3": "Industrial painting",
    "services.extended.category4.item4": "Property maintenance",
    "services.extended.category4.item5": "Institutions",
    "services.extended.category4.item6": "Large projects",
    "services.extended.cta.title": "Ready to get started?",
    "services.extended.cta.subtitle": "Contact us today for a non-binding discussion about your project.",
    "services.extended.cta.button": "Contact us",

    "projects.title": "Our Projects",
    "projects.subtitle": "See a selection of our latest work and get inspired.",

  "projects.1.title": "Apartment Painting",
  "projects.1.desc": "Interior apartment painting project in Copenhagen including wall painting, ceiling painting and surface preparation.",

  "projects.2.title": "Room Preparation",
  "projects.2.desc": "Careful preparation of floors, walls and surfaces before painting to ensure a clean and professional result.",

  "projects.3.title": "Commercial Painting",
  "projects.3.desc": "Professional painting for offices and commercial spaces with durable finishes and attention to detail.",

"projects.4.title": "Floor Finishing",
"projects.4.desc": "Professional treatment and finishing of wooden floors for a clean and durable result.",

"projects.5.title": "Painting in Progress",
"projects.5.desc": "A look at our painting process while the work is being carried out.",

"projects.6.title": "Finished Room",
"projects.6.desc": "A completed interior painting project with clean lines and a professional finish.",

    "videos.title": "See Our Work in Action",
    "videos.subtitle": "Follow our painting processes and see the professional results we deliver to clients across Zealand.",
    "videos.1.title": "The Painting Process",
    "videos.2.title": "At Work",
"videos.3.title": "Painting in Progress",
"videos.4.title": "Work in Progress",
"videos.5.title": "Detail Painting Work",
"videos.6.title": "Finished Floor and Room",


    "testimonials.title": "What Our Clients Say",
    "testimonials.1.text": "The team delivered fantastic painting work in our apartment. Very professional, thorough and on time. Highly recommended!",
    "testimonials.1.author": "Mette H., Copenhagen",
   "testimonials.2.text": "We had our entire villa facade painted and the result is beautiful. The team was reliable, professional and easy to communicate with. Highly recommended.",
    "testimonials.2.author": "Lars P., Roskilde",

    "why.title": "Why Choose MANMALER?",
    "why.subtitle": "We deliver professional painting services for private homes and businesses in Copenhagen, Ballerup, Roskilde, Hvidovre, Herlev, Glostrup, Lyngby, Gentofte, Greve and across Zealand.",
    "why.experience.title": "Experience & Expertise",
    "why.experience.desc": "Many years of experience with professional painting for private and commercial clients in Zealand.",
    "why.quality.title": "Quality Materials",
    "why.quality.desc": "We only use the best and most eco-friendly materials and techniques.",
    "why.pricing.title": "Fair & Transparent Pricing",
    "why.pricing.desc": "Competitive prices with free, no-obligation quotes.",
    "why.reliable.title": "Reliability",
    "why.reliable.desc": "We always keep our agreements, meet deadlines and deliver on time.",

    "cta.title": "Ready to Transform Your Home?",
    "cta.subtitle": "Contact us today for a free, no-obligation quote on professional painting work.",
    "cta.button": "Contact us now",

"about.title": "About MANMALER",

"about.subtitle": "Professional painting and surface work built on precision, reliability and respect for every space we work in.",

"about.story.title": "Our Story",

"about.story.p1": "MAN MALER was created with a clear vision: to deliver high-quality painting and surface finishing for both private homes and commercial spaces. We believe great craftsmanship begins with respect for the space and ends with results that last for many years.",

"about.story.p2": "The company is run by Ion and Victoria, who together are behind the development of our service areas. Ion has many years of experience in painting, surface finishing and renovation work and is primarily responsible for our painting projects. His work focuses on precision, clean lines and professional finishes – whether in apartments, houses or commercial properties.",

"about.story.p3": "Victoria contributes with experience in service and operations and has helped build the company’s structure and customer service. MANMALER operates under Nordisk Renhed og Bygg ApS, where both painting and cleaning services originally developed. As the company grew, the services evolved into specialized areas – CleanSpell for cleaning and MANMALER for painting and renovation – ensuring better focus and consistently high quality.",

"about.values.title": "Our Values",

"about.values.1.title": "Precision",
"about.values.1.desc": "Every project is completed with attention to detail and clean, professional finishes.",

"about.values.2.title": "Reliability",
"about.values.2.desc": "We keep our agreements, respect timelines and deliver consistent results.",

"about.values.3.title": "Respect for the Space",
"about.values.3.desc": "We treat every home and workplace with care so the result both looks right and feels right.",

"about.area.title": "Coverage Area",

"about.area.desc": "We provide painting and renovation services in Copenhagen, Ballerup, Roskilde, Hvidovre, Herlev, Glostrup, Lyngby, Gentofte, Greve, Køge, Hillerød, Helsingør, Næstved and across Zealand.",
"about.gallery.title": "Moments From Our Work",
"about.gallery.desc": "At MAN MALER we believe great craftsmanship also comes from great people. We value teamwork, positivity and a good working atmosphere because happy professionals create the best results for our clients.",
    "contact.title": "Contact Us",
    "contact.subtitle": "We look forward to hearing from you. Send us a message and we'll get back to you as soon as possible.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send message",
    "contact.form.title": "Send us a message",
    "contact.services.label": "Which services are you interested in?",
    "contact.services.placeholder": "Select one or more services",
    "contact.services.selected": "services selected",
    "contact.services.error": "Please select at least one service",
    "contact.details.label": "Tell us more about your project",
    "contact.details.hint": "Describe what we can help you with – e.g. size, preferences, timeline or other details.",
    "contact.details.placeholder": "E.g. 'We need 3 rooms painted in our apartment. We'd like light colors and need help choosing shades...'",
    "contact.success": "Thank you for your inquiry! We'll get back to you as soon as possible. ✓",
    "contact.error": "An error occurred. Please try again.",
    "contact.response.time": "We typically respond within 24 hours.",
    "contact.info.title": "Contact Information",
    "contact.info.email": "info@manmaler.dk",
    "contact.info.address": "Energivej 27, 2750 Ballerup",
    "contact.info.hours": "Opening Hours",
    "contact.info.hours.weekdays": "Mon-Fri: 08:00 – 16:00",
    "contact.success.title": "Thank you for your message!",
"contact.success.description": "Your inquiry has been received. We usually reply within a few hours.",
"contact.success.button": "Send another message",

    "footer.company": "MANMALER",
    "footer.desc": "Professional painter in Copenhagen, Ballerup, Roskilde, Hvidovre, Herlev, Glostrup, Lyngby, Gentofte, Greve, Køge and across Zealand. We provide interior painting, exterior painting, facade painting, renovation and commercial painting services.",
    "footer.contact": "Contact",
    "footer.address": "Address",
    "footer.follow": "Follow us",
    "footer.rights": "All rights reserved.",
    "footer.operated": "MANMALER is operated by Nordisk Renhed og Bygg ApS",
    "footer.legal": "Legal",
    "footer.terms": "Terms & Conditions",
    "footer.privacy": "Privacy Policy",
    "footer.cookies": "Cookie Policy",
    "footer.companyInfo": "Company Info",
    "footer.companyName": "Nordisk Renhed og Bygg ApS",
    "footer.cvr": "CVR",
    "footer.hours": "Opening Hours",
    "footer.hours.weekdays": "Mon–Fri · 08:00–16:00",

"legal.terms.title": "Terms & Conditions",

"legal.terms.intro": "These Terms & Conditions apply to all services provided by MAN MALER. By using our website or booking our services, you agree to the terms described below.",

"legal.terms.section1.title": "Company Information",
"legal.terms.section1.text": "MAN MALER is operated under Nordisk Renhed og Bygg ApS\nCVR: 45400018\nAddress: Energivej 27, 2750 Ballerup, Denmark\nEmail: info@manmaler.dk",

"legal.terms.section2.title": "Services",
"legal.terms.section2.text": "MAN MALER provides professional painting and renovation services for both private and commercial clients. The scope of each project is agreed individually with the customer before the work begins.",

"legal.terms.section3.title": "Booking and payment",
"legal.terms.section3.text": "Bookings can be made via our website, email, or telephone. Prices are agreed in advance and may vary depending on the scope of the project. Payment terms will be communicated before the service is carried out.",

"legal.terms.section4.title": "Cancellation and changes",
"legal.terms.section4.text": "If you need to cancel or reschedule a booking, please contact us as early as possible. Late cancellations may result in a cancellation fee depending on the circumstances.",

"legal.terms.section5.title": "Customer responsibilities",
"legal.terms.section5.text": "The customer is responsible for ensuring that MAN MALER has access to the property at the agreed time and that any valuable or fragile items are secured prior to the service.",

"legal.terms.section6.title": "Liability",
"legal.terms.section6.text": "MAN MALER performs all services with professional care and attention. We are not liable for indirect or consequential damages unless required by applicable law. Any damage claims must be reported as soon as reasonably possible after the service.",

"legal.terms.section7.title": "Complaints",
"legal.terms.section7.text": "If you are not satisfied with a service, please contact us promptly so we can assess the situation and, where appropriate, resolve the issue.",

"legal.terms.section8.title": "Use of the website",
"legal.terms.section8.text": "The content on this website is provided for general information purposes only. MAN MALER reserves the right to update or modify the website and its content at any time.",

"legal.terms.section9.title": "Governing law",
"legal.terms.section9.text": "These Terms & Conditions are governed by Danish law. Any disputes shall be settled under the jurisdiction of the Danish courts.",

"legal.terms.section10.title": "Contact",
"legal.terms.section10.text": "If you have any questions regarding these Terms & Conditions, please contact us by phone or email.",
"legal.privacy.title": "Privacy Policy",

"legal.privacy.intro": "This privacy policy explains how MAN MALER collects and processes personal data in connection with the use of our website and our services.",

"legal.privacy.section1.title": "Data Controller",
"legal.privacy.section1.text": "MAN MALER is operated under Nordisk Renhed og Bygg ApS\nCVR: 45400018\nAddress: Energivej 27, 2750 Ballerup, Denmark\nEmail: info@manmaler.dk",
"legal.privacy.section2.title": "What personal data do we collect?",
"legal.privacy.section2.text": "We only collect personal data that you voluntarily provide, for example when you contact us through the contact form, send us an email, or call us by phone. The information may include your name, email address, phone number, and any information you choose to include in your message.",

"legal.privacy.section3.title": "Purpose of processing",
"legal.privacy.section3.text": "We use your personal data to respond to enquiries, provide quotations for our services, and plan and deliver the agreed painting or renovation services.",

"legal.privacy.section4.title": "Storage of personal data",
"legal.privacy.section4.text": "We store your personal data only for as long as necessary to fulfil the purpose for which it was collected or as required by applicable law.",

"legal.privacy.section5.title": "Disclosure of personal data",
"legal.privacy.section5.text": "We do not disclose your personal data to third parties unless this is necessary to provide our services or required by law.",

"legal.privacy.section6.title": "Your rights",
"legal.privacy.section6.text": "You have the right to access the personal data we hold about you, as well as to request correction or deletion of your data. You also have the right to object to the processing of your personal data.",

"legal.privacy.section7.title": "Contact",
"legal.privacy.section7.text": "If you have any questions regarding this privacy policy, please feel free to contact us by phone or email.",   
"legal.cookies.title": "Cookie Policy",

"legal.cookies.intro": "This cookie policy explains how MAN MALER uses cookies and similar technologies on our website.",

"legal.cookies.section1.title": "What are cookies?",
"legal.cookies.section1.text": "Cookies are small text files that are stored on your device when you visit a website. Cookies are commonly used to ensure that a website functions properly and to collect statistical information about how the website is used.",

"legal.cookies.section2.title": "Which cookies do we use?",
"legal.cookies.section2.text": "MAN MALER uses cookies for statistical and analytical purposes. These cookies help us understand how visitors use our website so we can improve functionality, content, and user experience.",

"legal.cookies.section3.title": "Analytics tools",
"legal.cookies.section3.text": "We may use analytics tools such as Google Analytics to collect information including:\n\n• The number of visitors to the website\n• Which pages are visited\n• How long visitors stay on the website\n• Whether a visitor submits a contact request\n\nThe collected information is used in aggregated and anonymised form and cannot be used to identify you as an individual.",

"legal.cookies.section4.title": "Consent to cookies",
"legal.cookies.section4.text": "When you visit our website for the first time, you will be asked to provide consent to the use of cookies. You can change or withdraw your consent at any time.",

"legal.cookies.section5.title": "How to delete or block cookies",
"legal.cookies.section5.text": "You can always delete or block cookies through your browser settings. Please note that blocking cookies may affect certain features of the website.",

"legal.cookies.section6.title": "Contact information",
"legal.cookies.section6.text": "If you have any questions regarding our use of cookies, please feel free to contact us:\n\nMAN MALER is operated under Nordisk Renhed og Bygg ApS\nCVR: 45400018\nAddress: Energivej 27, 2750 Ballerup, Denmark\nEmail: info@manmaler.dk",
  "seo.text1": "Looking for a professional painter in Copenhagen or Zealand? MAN MALER provides professional painting services in Copenhagen, Ballerup, Roskilde, Hvidovre, Herlev, Glostrup, Lyngby, Gentofte, Greve, Køge, Hillerød and Helsingør.",
"seo.serviceAreas.title": "Professional painter in Copenhagen and across Zealand",

"seo.serviceAreas.text": "MAN MALER provides professional painting services in Copenhagen, Frederiksberg, Ballerup, Herlev, Glostrup, Hvidovre, Rødovre, Taastrup, Albertslund, Lyngby, Gentofte, Roskilde, Greve, Køge, Hillerød, Helsingør, Næstved and across Zealand. We offer interior painting, exterior painting, facade painting, renovation and commercial painting for homes and businesses.",

"seo.services.title": "Our painting and renovation services",

"seo.services.interior": "Wall painting in all colors, ceiling painting and treatment, woodwork and panels, wallpapering, filling and preparation, decorative painting techniques, color consultation and finishing touches.",

"seo.services.exterior": "Facade painting, painting of windows and doors, wood protection, roof painting, fence painting, concrete treatment and rust protection.",

"seo.services.renovation": "Complete home renovation, water damage treatment, mold treatment, floor treatment, ceiling renovation, wet room treatment and energy renovation.",

"seo.services.commercial": "Office painting, retail painting, industrial painting, property maintenance, institutional painting and large commercial projects.",
"seo.services.interiorTitle": "Interior Painting",
"seo.services.exteriorTitle": "Exterior Painting",
"seo.services.renovationTitle": "Renovation",
"seo.services.commercialTitle": "Commercial Painting"
},
} as const;

type TranslationKey = keyof typeof translations.da;

interface I18nContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKey) => string;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("da");

  const t = useCallback(
    (key: TranslationKey): string => {
      return (translations[lang] as Record<string, string>)[key] || key;
    },
    [lang]
  );

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used within I18nProvider");
  return context;
}
