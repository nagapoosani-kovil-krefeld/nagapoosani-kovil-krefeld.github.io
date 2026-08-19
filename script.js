const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const languageNote = document.querySelector("[data-language-note]");
const languageButtons = document.querySelectorAll("[data-language]");

document.querySelector("[data-year]").textContent = new Date().getFullYear();

const tamilText = {
  "Zum Inhalt springen": "உள்ளடக்கத்திற்குச் செல்லவும்",
  "Tempel Krefeld": "ஆலயம் கிரெஃபெல்ட்",
  "Unser Tempel": "எமது ஆலயம்",
  "Poojas": "பூஜைகள்",
  "Termine": "நேர அட்டவணை",
  "Galerie": "படத்தொகுப்பு",
  "Zukunft": "எதிர்காலம்",
  "Kontakt": "தொடர்பு",
  "Erster Besuch": "முதல் வருகை",
  "வணக்கம் · Herzlich willkommen": "வணக்கம் · அன்புடன் வரவேற்கிறோம்",
  "Sri Nagapoosani Ambaal Tempel Krefeld": "ஸ்ரீ நாகபூசணி அம்பாள் ஆலயம் கிரெஃபெல்ட்",
  "Ein Ort des Glaubens, der tamilisch-hinduistischen Tradition und der Gemeinschaft.": "நம்பிக்கை, தமிழ் இந்து பாரம்பரியம் மற்றும் சமூக ஒற்றுமைக்கான ஓர் இடம்.",
  "Wir heißen alle Menschen herzlich willkommen, unseren Tempel kennenzulernen, an Poojas teilzunehmen und unsere Gemeinschaft zu erleben.": "எமது ஆலயத்தை அறிந்துகொள்ளவும், பூஜைகளில் கலந்துகொள்ளவும், எமது சமூகத்தின் ஆன்மீக அனுபவத்தைப் பகிர்ந்துகொள்ளவும் அனைவரையும் அன்புடன் வரவேற்கிறோம்.",
  "Unseren Tempel entdecken": "எமது ஆலயத்தை அறிந்துகொள்ளுங்கள்",
  "Kontakt & Anfahrt": "தொடர்பு மற்றும் வழிகாட்டல்",
  "Möge ihr Segen allen zuteilwerden.": "அம்பாளின் அருள் அனைவருக்கும் கிடைக்கட்டும்.",
  "Mehr entdecken": "மேலும் அறிய",
  "Glaube · Tradition · Gemeinschaft": "நம்பிக்கை · பாரம்பரியம் · சமூகம்",
  "Unser Tempel und Sri Nagapoosani Ambaal": "எமது ஆலயமும் ஸ்ரீ நாகபூசணி அம்பாளும்",
  "Der Sri Nagapoosani Ambaal Tempel Krefeld ist ein Ort des Gebets, der tamilisch-hinduistischen Tradition und der Begegnung. Getragen vom Tamilischen Kulturverein Krefeld e.V. bietet der Tempel unserer Gemeinschaft einen gemeinsamen Ort für Poojas, religiöse Feste und kulturelles Leben. Auch Menschen, die unseren Glauben und unsere Tradition kennenlernen möchten, sind herzlich willkommen.": "கிரெஃபெல்ட் ஸ்ரீ நாகபூசணி அம்பாள் ஆலயம் வழிபாடு, தமிழ் இந்து பாரம்பரியம் மற்றும் மக்களின் சந்திப்புக்கான இடமாகும். கிரெஃபெல்ட் தமிழ் கலாசாரச் சங்கத்தால் நடத்தப்படும் இவ்வாலயம், பூஜைகள், சமய விழாக்கள் மற்றும் கலாசார நிகழ்வுகளுக்காக எமது சமூகத்தை ஒன்றிணைக்கிறது. எமது சமயத்தையும் பாரம்பரியத்தையும் அறிந்துகொள்ள விரும்பும் அனைவரையும் அன்புடன் வரவேற்கிறோம்.",
  "Im Mittelpunkt unseres Tempels steht Sri Nagapoosani Ambaal. Sie wird von unserer Gemeinschaft als schützende und segenspendende Göttin verehrt. Durch Gebete, Poojas und gemeinsame Feste bewahren wir unsere Traditionen und geben sie an die nächste Generation weiter.": "எமது ஆலயத்தின் பிரதான தெய்வமாக ஸ்ரீ நாகபூசணி அம்பாள் விளங்குகிறார். எமது சமூகத்தினர் அம்பாளை பாதுகாப்பும் அருளும் வழங்கும் தெய்வமாகப் போற்றி வழிபடுகின்றனர். பிரார்த்தனைகள், பூஜைகள் மற்றும் ஒன்றிணைந்த விழாக்கள் மூலம் எமது பாரம்பரியத்தைப் பேணிப் பாதுகாத்து அடுத்த தலைமுறைக்கு எடுத்துச் செல்கிறோம்.",
  "Verstehen und teilnehmen": "அறிந்துகொண்டு பங்கேற்கவும்",
  "Poojas einfach erklärt": "பூஜைகள் – எளிய விளக்கம்",
  "Abhishekam": "அபிஷேகம்",
  "Beim Abhishekam wird Sri Nagapoosani Ambaal rituell gebadet und verehrt. Gläubige können bei jedem Abhishekam am Empfang für": "அபிஷேகத்தின் போது ஸ்ரீ நாகபூசணி அம்பாளுக்கு புனித நீராட்டுச் செய்து வழிபாடு நடைபெறும். ஒவ்வொரு அபிஷேகத்தின்போதும் அடியவர்கள் வரவேற்புப் பகுதியில்",
  "2 € Milch erwerben": "2 € செலுத்தி பாலைப் பெறலாம்",
  "und diese als Opfergabe bereitstellen.": "அந்தப் பாலை அம்பாளுக்கான காணிக்கையாக வழங்கலாம்.",
  "Bei der Übergabe der Milch können die Gläubigen ihre persönlichen Wünsche und Gebete vorbringen. Mit der Opfergabe verbinden sie die Hoffnung, dass Sri Nagapoosani Ambaal ihre Bitten erhört und ihnen ihren Segen schenkt.": "பாலை ஒப்படைக்கும் போது அடியவர்கள் தங்களது தனிப்பட்ட வேண்டுதல்களையும் பிரார்த்தனைகளையும் சமர்ப்பிக்கலாம். ஸ்ரீ நாகபூசணி அம்பாள் தங்களது வேண்டுதல்களுக்கு செவிசாய்த்து அருள்புரிவார் என்ற நம்பிக்கையுடன் இந்தக் காணிக்கை வழங்கப்படுகிறது.",
  "Pooja": "பூஜை",
  "Im Anschluss an das Abhishekam findet die gemeinsame Pooja statt. Die jeweiligen Beginnzeiten finden Sie im Wochenplan.": "அபிஷேகத்தைத் தொடர்ந்து கூட்டுப் பூஜை நடைபெறும். ஒவ்வொரு நாளுக்குமான ஆரம்ப நேரத்தை வார அட்டவணையில் காணலாம்.",
  "Besondere heilige Tage": "விசேட புனித நாட்கள்",
  "Dienstag und Freitag gelten in unserem Tempel als besondere heilige Tage. Das Abhishekam beginnt um 17:00 Uhr, die anschließende Pooja um 18:00 Uhr.": "செவ்வாய்க்கிழமையும் வெள்ளிக்கிழமையும் எமது ஆலயத்தில் விசேட புனித நாட்களாகக் கருதப்படுகின்றன. அபிஷேகம் 17:00 மணிக்கும், அதனைத் தொடர்ந்து பூஜை 18:00 மணிக்கும் ஆரம்பமாகும்.",
  "Gemeinsam feiern": "ஒன்றிணைந்து வழிபடுவோம்",
  "Pooja-Zeiten und Veranstaltungen": "பூஜை நேரங்களும் நிகழ்வுகளும்",
  "Tag": "நாள்",
  "Montag": "திங்கட்கிழமை",
  "Dienstag": "செவ்வாய்க்கிழமை",
  "Mittwoch": "புதன்கிழமை",
  "Donnerstag": "வியாழக்கிழமை",
  "Freitag": "வெள்ளிக்கிழமை",
  "17:00 Uhr": "17:00 மணி",
  "17:30–18:00 Uhr": "17:30–18:00 மணி",
  "ab 18:00 Uhr": "18:00 மணி முதல்",
  "Die Zeiten für Samstag und Sonntag werden nach der Bestätigung durch unseren Priester ergänzt.": "சனி மற்றும் ஞாயிற்றுக்கிழமை நேரங்கள் எமது ஆலயக் குருவின் உறுதிப்படுத்தலுக்குப் பின்னர் சேர்க்கப்படும்.",
  "Offen für alle": "அனைவருக்கும் திறந்தது",
  "Hinweise für den ersten Besuch": "முதல் வருகைக்கான வழிகாட்டல்கள்",
  "Niemand muss die Abläufe bereits kennen. Besucherinnen und Besucher können ruhig beobachten und respektvoll teilnehmen.": "ஆலய வழிபாட்டு முறைகளை முன்கூட்டியே அறிந்திருக்க வேண்டிய அவசியமில்லை. வருகையாளர்கள் அமைதியாகக் கவனித்து, மரியாதையுடன் கலந்துகொள்ளலாம்.",
  "Alle Menschen sind herzlich willkommen – unabhängig von Herkunft oder Religion.": "இனம் அல்லது மதம் பாராமல் அனைவரும் அன்புடன் வரவேற்கப்படுகிறார்கள்.",
  "Bitte die Schuhe vor dem Betreten des Gebetsbereichs ausziehen.": "வழிபாட்டுப் பகுதிக்குள் நுழைவதற்கு முன் காலணிகளைக் கழற்றவும்.",
  "Bitte saubere und respektvolle Kleidung tragen.": "சுத்தமான மற்றும் மரியாதையான உடைகளை அணியவும்.",
  "Mobiltelefone während der Pooja lautlos stellen.": "பூஜை நடைபெறும் போது கைப்பேசிகளை மௌன நிலையில் வைத்திருக்கவும்.",
  "Fotos und Videos nur nach vorheriger Erlaubnis aufnehmen.": "முன் அனுமதி பெற்ற பின்னரே புகைப்படங்கள் மற்றும் காணொளிகளை எடுக்கவும்.",
  "Bei Fragen hilft die Tempelverwaltung beziehungsweise der Empfang gerne weiter.": "கேள்விகள் இருந்தால் ஆலய நிர்வாகத்தையோ வரவேற்புப் பகுதியையோ அணுகலாம்.",
  "Einblicke": "ஆலயத் தரிசனங்கள்",
  "Bildergalerie": "படத்தொகுப்பு",
  "Moolasthanam": "மூலஸ்தானம்",
  "Die Göttin am Eingang des Tempels": "ஆலய நுழைவில் அருள்பாலிக்கும் அம்பாள்",
  "Diese Göttin sehen Besucherinnen und Besucher beim Betreten des Tempels. Hier findet das Abhishekam statt.": "ஆலயத்திற்குள் நுழையும் அடியவர்கள் முதலில் இந்த அம்பாளைத் தரிசிப்பார்கள். இங்குதான் அபிஷேகம் நடைபெறும்.",
  "Besondere Festtage": "விசேட திருவிழாக்கள்",
  "Sri Nagapoosani Ambaal an Festtagen": "திருவிழாக்களில் ஸ்ரீ நாகபூசணி அம்பாள்",
  "Diese Darstellung der Göttin wird an besonderen heiligen Tagen und unter anderem beim Theer getragen.": "விசேட புனித நாட்களிலும் தேர்த்திருவிழா உள்ளிட்ட நிகழ்வுகளிலும் இந்த அம்பாள் திருவுருவம் பவனியாக எடுத்துச் செல்லப்படும்.",
  "Unsere gemeinsame Zukunft": "எமது கூட்டு எதிர்காலம்",
  "Die Vision eines eigenen Tempels": "சொந்த ஆலயத்திற்கான எமது கனவு",
  "Unser Sri Nagapoosani Ambaal Tempel befindet sich derzeit in einem angemieteten Gebäude in zentraler Lage der Krefelder Innenstadt. Der Tempel ist dadurch gut erreichbar, gleichzeitig stehen in der Umgebung jedoch nur begrenzte Parkmöglichkeiten zur Verfügung. Die derzeitigen Räumlichkeiten und der aktuelle Standort sind langfristig nicht passend für die Bedürfnisse einer wachsenden Tempelgemeinschaft und für größere religiöse Veranstaltungen. Dennoch ist dieser Ort für unsere Gemeinschaft sehr wertvoll.": "எமது ஸ்ரீ நாகபூசணி அம்பாள் ஆலயம் தற்போது கிரெஃபெல்ட் நகர மத்தியில் உள்ள ஒரு வாடகைக் கட்டிடத்தில் இயங்குகிறது. மையப்பகுதியில் இருப்பதால் ஆலயத்தை எளிதில் அடைய முடிகிறது. இருப்பினும் அருகில் வாகன நிறுத்துமிடங்கள் மிகவும் குறைவு. வளர்ந்து வரும் ஆலயச் சமூகத்தின் தேவைகளுக்கும் பெரிய சமய நிகழ்வுகளுக்கும் தற்போதைய இடமும் கட்டிட வசதிகளும் நீண்டகாலத்திற்கு பொருத்தமானவை அல்ல. இருந்தாலும் இந்த இடம் எமது சமூகத்திற்கு மிகவும் மதிப்புமிக்கதாகும்.",
  "Unsere Vision ist es, ein geeignetes Grundstück in Krefeld zu erwerben und darauf einen eigenen hinduistischen Tempel zu errichten. Der neue Tempel soll ein würdevoller und dauerhafter Ort für Poojas, religiöse Feste, tamilisch-hinduistische Tradition, kulturelle Begegnung und unsere Gemeinschaft werden.": "கிரெஃபெல்டில் பொருத்தமான நிலத்தை வாங்கி, அதில் எமக்கென ஒரு இந்து ஆலயத்தை அமைப்பதே எமது கனவு. புதிய ஆலயம் பூஜைகள், சமய விழாக்கள், தமிழ் இந்து பாரம்பரியம், கலாசாரச் சந்திப்புகள் மற்றும் எமது சமூகத்திற்கான கண்ணியமான, நிரந்தரமான இடமாக அமைய வேண்டும்.",
  "Damit möchten wir auch für kommende Generationen einen festen Ort schaffen, an dem unser Glaube und unsere Tradition bewahrt und weitergegeben werden können. Über alle weiteren Schritte und den Fortschritt des Projekts werden wir transparent informieren.": "இதன் மூலம் வருங்காலத் தலைமுறைகளுக்கும் எமது சமயமும் பாரம்பரியமும் பாதுகாக்கப்பட்டு பகிரப்படும் ஒரு நிலையான இடத்தை உருவாக்க விரும்புகிறோம். திட்டத்தின் அடுத்தடுத்த நடவடிக்கைகள் மற்றும் முன்னேற்றம் குறித்து வெளிப்படையாகத் தகவல் வழங்குவோம்.",
  "Besucht uns": "எம்மைச் சந்தியுங்கள்",
  "Kontakt und Anfahrt": "தொடர்பு மற்றும் வழிகாட்டல்",
  "Tamilischer Kulturverein Krefeld e.V.": "கிரெஃபெல்ட் தமிழ் கலாசாரச் சங்கம் e.V.",
  "· Tempel": "· ஆலயம்",
  "· Tempelverwalterin": "· ஆலய நிர்வாகி",
  "· Tempelpriester": "· ஆலயக் குரு",
  "Route öffnen": "வழித்தடத்தைத் திறக்கவும்",
  "Impressum": "சட்ட அறிவிப்பு",
  "Datenschutz": "தரவுப் பாதுகாப்பு"
};

const tamilAttributes = {
  "Zur Startseite": "முகப்புப் பக்கத்திற்குச் செல்லவும்",
  "Logo des Sri Nagapoosani Ambaal Tempels Krefeld": "கிரெஃபெல்ட் ஸ்ரீ நாகபூசணி அம்பாள் ஆலயத்தின் சின்னம்",
  "Hauptnavigation": "முதன்மை வழிசெலுத்தல்",
  "Soziale Medien im Kopfbereich": "தலைப்புப் பகுதியில் சமூக ஊடகங்கள்",
  "Instagram öffnen": "Instagram-ஐத் திறக்கவும்",
  "Facebook öffnen": "Facebook-ஐத் திறக்கவும்",
  "YouTube öffnen": "YouTube-ஐத் திறக்கவும்",
  "Sprachauswahl": "மொழித் தேர்வு",
  "Menü öffnen": "பட்டியலைத் திறக்கவும்",
  "Mobile Navigation": "கைபேசி வழிசெலுத்தல்",
  "Soziale Medien": "சமூக ஊடகங்கள்",
  "Darstellung von Sri Nagapoosani Ambaal": "ஸ்ரீ நாகபூசணி அம்பாளின் திருவுருவம்",
  "Sri Nagapoosani Ambaal mit der schützenden Nagagestalt": "நாக வடிவத்தின் பாதுகாப்புடன் ஸ்ரீ நாகபூசணி அம்பாள்",
  "Zum nächsten Abschnitt": "அடுத்த பகுதிக்குச் செல்லவும்",
  "Regelmäßiger Wochenplan": "வழக்கமான வாராந்திர நேர அட்டவணை",
  "Moolasthanam der Sri Nagapoosani Ambaal im Tempel Krefeld": "கிரெஃபெல்ட் ஆலயத்தில் ஸ்ரீ நாகபூசணி அம்பாளின் மூலஸ்தானம்",
  "Sri Nagapoosani Ambaal während eines besonderen Festtages im Tempel Krefeld": "கிரெஃபெல்ட் ஆலயத்தின் விசேட திருவிழாவில் ஸ்ரீ நாகபூசணி அம்பாள்",
  "Rechtliche Hinweise": "சட்ட அறிவிப்புகள்"
};

const textNodes = [];
const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
  acceptNode(node) {
    if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) return NodeFilter.FILTER_REJECT;
    return NodeFilter.FILTER_ACCEPT;
  }
});
while (textWalker.nextNode()) textNodes.push(textWalker.currentNode);

const originalText = new WeakMap(textNodes.map((node) => [node, node.nodeValue]));
const translatedAttributes = ["aria-label", "alt", "title"];
const attributedElements = [...document.querySelectorAll("[aria-label], [alt], [title]")];
const originalAttributes = new WeakMap(
  attributedElements.map((element) => [
    element,
    Object.fromEntries(translatedAttributes.filter((name) => element.hasAttribute(name)).map((name) => [name, element.getAttribute(name)]))
  ])
);

const pageTitles = {
  de: "Sri Nagapoosani Ambaal Tempel Krefeld",
  ta: "ஸ்ரீ நாகபூசணி அம்பாள் ஆலயம் கிரெஃபெல்ட்"
};
const pageDescriptions = {
  de: "Sri Nagapoosani Ambaal Tempel Krefeld – ein Ort des Glaubens, der tamilisch-hinduistischen Tradition und der Gemeinschaft.",
  ta: "கிரெஃபெல்ட் ஸ்ரீ நாகபூசணி அம்பாள் ஆலயம் – நம்பிக்கை, தமிழ் இந்து பாரம்பரியம் மற்றும் சமூக ஒற்றுமைக்கான ஓர் இடம்."
};

function replaceTextNode(node, language) {
  const source = originalText.get(node);
  const key = source.trim();
  const replacement = language === "ta" ? tamilText[key] : key;
  if (!replacement) return;
  const leading = source.match(/^\s*/)?.[0] || "";
  const trailing = source.match(/\s*$/)?.[0] || "";
  node.nodeValue = `${leading}${replacement}${trailing}`;
}

function applyLanguage(language) {
  const selected = language === "ta" ? "ta" : "de";
  document.documentElement.lang = selected;
  document.documentElement.dataset.language = selected;
  textNodes.forEach((node) => replaceTextNode(node, selected));

  attributedElements.forEach((element) => {
    const attributes = originalAttributes.get(element);
    Object.entries(attributes).forEach(([name, source]) => {
      element.setAttribute(name, selected === "ta" ? (tamilAttributes[source] || source) : source);
    });
  });

  document.title = pageTitles[selected];
  document.querySelector('meta[name="description"]').setAttribute("content", pageDescriptions[selected]);
  languageButtons.forEach((button) => {
    const active = button.dataset.language === selected;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  try { window.localStorage.setItem("temple-language", selected); } catch (_) {}
}

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 24);
});

menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  mobileMenu.classList.toggle("open", !open);
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false");
    mobileMenu.classList.remove("open");
  });
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.language));
});

document.querySelectorAll("[data-language-pending]").forEach((button) => {
  button.addEventListener("click", () => {
    languageNote.textContent = document.documentElement.lang === "ta"
      ? "ஆங்கில மொழிபெயர்ப்பு பின்னர் செயல்படுத்தப்படும்."
      : "Englisch wird nach Freigabe der deutschen Texte aktiviert.";
    languageNote.classList.add("visible");
    window.clearTimeout(window.languageNoteTimer);
    window.languageNoteTimer = window.setTimeout(() => languageNote.classList.remove("visible"), 3200);
  });
});

let storedLanguage = "de";
try { storedLanguage = window.localStorage.getItem("temple-language") || "de"; } catch (_) {}
applyLanguage(storedLanguage);
