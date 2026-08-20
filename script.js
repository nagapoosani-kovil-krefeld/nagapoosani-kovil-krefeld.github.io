const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const languageButtons = document.querySelectorAll("[data-language]");
const galleryRail = document.querySelector("[data-gallery-rail]");
const galleryItems = [...document.querySelectorAll("[data-gallery-item]")];
const galleryLightbox = document.querySelector("[data-gallery-lightbox]");
const lightboxImage = document.querySelector("[data-lightbox-image]");
const lightboxCaption = document.querySelector("[data-lightbox-caption]");
const lightboxCounter = document.querySelector("[data-lightbox-counter]");
let currentGalleryIndex = 0;

document.querySelector("[data-year]").textContent = new Date().getFullYear();

const tamilText = {
  "Zum Inhalt springen": "உள்ளடக்கத்திற்குச் செல்லவும்",
  "Tempel Krefeld": "ஆலயம் கிரேபில்ட்",
  "Unser Tempel": "எமது ஆலயம்",
  "Poojas": "பூஜைகள்",
  "Termine": "நேர அட்டவணை",
  "Galerie": "படத்தொகுப்பு",
  "Zukunft": "எதிர்காலம்",
  "Kontakt": "தொடர்பு",
  "Erster Besuch": "முதல் வருகை",
  "வணக்கம் · Herzlich willkommen": "வணக்கம் · அன்புடன் வரவேற்கிறோம்",
  "Sri Nagapoosani Ambaal Tempel Krefeld": "ஸ்ரீ நாகபூசணி அம்பாள் ஆலயம் கிரேபில்ட்",
  "Ein Ort des Glaubens, der tamilisch-hinduistischen Tradition und der Gemeinschaft.": "இறைவழிபாடும் சமூக ஒற்றுமையும் நிறைந்த புனிதத் தலம்.",
  "Wir heißen alle Menschen herzlich willkommen, unseren Tempel kennenzulernen, an Poojas teilzunehmen und unsere Gemeinschaft zu erleben.": "எமது ஆலயத்தை அறிந்துகொள்ளவும், பூஜைகளில் கலந்துகொள்ளவும், எமது சமூகத்தின் ஆன்மீக அனுபவத்தைப் பகிர்ந்துகொள்ளவும் அனைவரையும் அன்புடன் வரவேற்கிறோம்.",
  "Unseren Tempel entdecken": "எமது ஆலயத்தை அறிந்துகொள்ளுங்கள்",
  "Kontakt & Anfahrt": "தொடர்பு மற்றும் வழிகாட்டல்",
  "Möge ihr Segen allen zuteilwerden.": "அம்பாளின் அருள் அனைவருக்கும் கிடைக்கட்டும்.",
  "Mehr entdecken": "மேலும் அறிய",
  "Glaube · Tradition · Gemeinschaft": "நம்பிக்கை · பாரம்பரியம் · சமூகம்",
  "Unser Tempel und Sri Nagapoosani Ambaal": "எமது ஆலயமும் ஸ்ரீ நாகபூசணி அம்பாளும்",
  "Der Sri Nagapoosani Ambaal Tempel Krefeld ist ein Ort des Gebets, der tamilisch-hinduistischen Tradition und der Begegnung. Getragen vom Tamilischen Kulturverein Krefeld e.V. bietet der Tempel unserer Gemeinschaft einen gemeinsamen Ort für Poojas, religiöse Feste und kulturelles Leben. Auch Menschen, die unseren Glauben und unsere Tradition kennenlernen möchten, sind herzlich willkommen.": "கிரேபில்ட் ஸ்ரீ நாகபூசணி அம்பாள் ஆலயம் வழிபாடு, தமிழ் இந்து பாரம்பரியம் மற்றும் மக்களின் சந்திப்புக்கான இடமாகும். கிரேபில்ட் தமிழ் கலாசாரச் சங்கத்தால் நடத்தப்படும் இவ்வாலயம், பூஜைகள், சமய விழாக்கள் மற்றும் கலாசார நிகழ்வுகளுக்காக எமது சமூகத்தை ஒன்றிணைக்கிறது. எமது சமயத்தையும் பாரம்பரியத்தையும் அறிந்துகொள்ள விரும்பும் அனைவரையும் அன்புடன் வரவேற்கிறோம்.",
  "Im Mittelpunkt unseres Tempels steht Sri Nagapoosani Ambaal. Sie wird von unserer Gemeinschaft als schützende und segenspendende Göttin verehrt. Durch Gebete, Poojas und gemeinsame Feste bewahren wir unsere Traditionen und geben sie an die nächste Generation weiter.": "எமது ஆலயத்தின் பிரதான தெய்வமாக ஸ்ரீ நாகபூசணி அம்பாள் விளங்குகிறார். எமது சமூகத்தினர் அம்பாளை பாதுகாப்பும் அருளும் வழங்கும் தெய்வமாகப் போற்றி வழிபடுகின்றனர். அபிஷேகம், பூஜை, அர்ச்சனை மற்றும் விசேஷ வழிபாடுகள் வழியாக இந்த இறைநம்பிக்கை தலைமுறை தலைமுறையாகப் பேணிப் பாதுகாக்கப்படுகிறது. இன்றைய இளைய தலைமுறையினர் ஆலயப் பணிகளில் செயற்பாட்டுடன் பங்கேற்று, பொறுப்புகளை ஏற்று வருகின்றனர். அவர்களின் பங்களிப்பின் மூலம் ஆலயத்தின் வழிபாடு, சேவை மற்றும் சமூகப் பணி வருங்காலத்திலும் தொடர்ந்து வளர வேண்டும் என்பதே எமது நோக்கம்.",
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
  "Persönliche Gebete · Opfergaben": "தனிப்பட்ட பிரார்த்தனைகள் · காணிக்கைகள்",
  "Archanai – ein persönliches Gebet an Ambaal": "அர்ச்சனை – அம்பாளிடம் ஒரு தனிப்பட்ட பிரார்த்தனை",
  "Eine Archanai ist ein besonderer Moment der Hingabe an Sri Nagapoosani Ambaal. Gläubige können ihre Wünsche, Sorgen und ihren Dank vertrauensvoll vor Ambaal bringen und für sich und ihre Familie um Schutz, Kraft und Segen bitten.": "அர்ச்சனை என்பது ஸ்ரீ நாகபூசணி அம்பாளிடம் பக்தியுடன் ஒன்றிணையும் ஒரு விசேட தருணமாகும். அடியவர்கள் தங்களது விருப்பங்கள், கவலைகள் மற்றும் நன்றியை நம்பிக்கையுடன் அம்பாளிடம் சமர்ப்பித்து, தங்களுக்கும் தங்கள் குடும்பத்தினருக்கும் பாதுகாப்பு, வலிமை மற்றும் அருளை வேண்டலாம்.",
  "In der Hoffnung auf Ambaals Gnade werden die persönlichen Anliegen in die Verehrung eingebracht. Verschiedene Formen der Archanai können direkt am Empfang ausgewählt werden.": "அம்பாளின் அருளை நம்பி, தனிப்பட்ட வேண்டுதல்கள் வழிபாட்டில் இணைக்கப்படுகின்றன. பல்வேறு வகையான அர்ச்சனைகளை வரவேற்புப் பகுதியில் நேரடியாகத் தேர்ந்தெடுக்கலாம்.",
  "Mit Vertrauen und Hingabe": "நம்பிக்கையுடனும் பக்தியுடனும்",
  "Am Empfang erhältlich": "வரவேற்புப் பகுதியில் பெறலாம்",
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
  "Aktuelle Ankündigungen": "தற்போதைய அறிவிப்புகள்",
  "Monatliche Pooja-Übersicht als PDF": "மாதாந்த பூஜை விவரங்கள் – PDF",
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
  "Momente des Glaubens, der Hingabe und unserer lebendigen Tempelgemeinschaft.": "நம்பிக்கை, பக்தி மற்றும் எமது உயிரோட்டமான ஆலயச் சமூகத்தின் அழகிய தருணங்கள்.",
  "Weitere Momente aus unserem Tempel": "எமது ஆலயத்தின் மேலும் சில தருணங்கள்",
  "Moolasthanam": "மூலஸ்தானம்",
  "Die Göttin am Eingang des Tempels": "ஆலய நுழைவில் அருள்பாலிக்கும் அம்பாள்",
  "Diese Göttin sehen Besucherinnen und Besucher beim Betreten des Tempels. Hier findet das Abhishekam statt.": "ஆலயத்திற்குள் நுழையும் அடியவர்கள் முதலில் இந்த அம்பாளைத் தரிசிப்பார்கள். இங்குதான் அபிஷேகம் நடைபெறும்.",
  "Besondere Festtage": "விசேட திருவிழாக்கள்",
  "Sri Nagapoosani Ambaal an Festtagen": "திருவிழாக்களில் ஸ்ரீ நாகபூசணி அம்பாள்",
  "Diese Darstellung der Göttin wird an besonderen heiligen Tagen und unter anderem beim Theer getragen.": "விசேட புனித நாட்களிலும் தேர்த்திருவிழா உள்ளிட்ட நிகழ்வுகளிலும் இந்த அம்பாள் திருவுருவம் பவனியாக எடுத்துச் செல்லப்படும்.",
  "Ambaal im Festschmuck": "திருவிழா அலங்காரத்தில் அம்பாள்",
  "Pooja im Tempel": "ஆலயத்தில் பூஜை",
  "Deepa Aradhanai": "தீபாராதனை",
  "Festliche Verehrung": "விசேட திருவிழா வழிபாடு",
  "Traditionelle Tempelmusik": "பாரம்பரிய ஆலய இசை",
  "Gemeinschaft am Festtag": "திருவிழாவில் எமது சமூகம்",
  "Unsere gemeinsame Zukunft": "எமது கூட்டு எதிர்காலம்",
  "Die Vision eines eigenen Tempels": "சொந்த ஆலயத்திற்கான எமது கனவு",
  "Unser Sri Nagapoosani Ambaal Tempel befindet sich derzeit in einem angemieteten Gebäude in zentraler Lage der Krefelder Innenstadt. Der Tempel ist dadurch gut erreichbar, gleichzeitig stehen in der Umgebung jedoch nur begrenzte Parkmöglichkeiten zur Verfügung. Die derzeitigen Räumlichkeiten und der aktuelle Standort sind langfristig nicht passend für die Bedürfnisse einer wachsenden Tempelgemeinschaft und für größere religiöse Veranstaltungen. Dennoch ist dieser Ort für unsere Gemeinschaft sehr wertvoll.": "எமது ஸ்ரீ நாகபூசணி அம்பாள் ஆலயம் தற்போது கிரேபில்ட் நகர மத்தியில் உள்ள ஒரு வாடகைக் கட்டிடத்தில் இயங்குகிறது. மையப்பகுதியில் இருப்பதால் ஆலயத்தை எளிதில் அடைய முடிகிறது. இருப்பினும் அருகில் வாகன நிறுத்துமிடங்கள் மிகவும் குறைவு. வளர்ந்து வரும் ஆலயச் சமூகத்தின் தேவைகளுக்கும் பெரிய சமய நிகழ்வுகளுக்கும் தற்போதைய இடமும் கட்டிட வசதிகளும் நீண்டகாலத்திற்கு பொருத்தமானவை அல்ல. இருந்தாலும் இந்த இடம் எமது சமூகத்திற்கு மிகவும் மதிப்புமிக்கதாகும்.",
  "Unsere Vision ist es, ein geeignetes Grundstück in Krefeld zu erwerben und darauf einen eigenen hinduistischen Tempel zu errichten. Der neue Tempel soll ein würdevoller und dauerhafter Ort für Poojas, religiöse Feste, tamilisch-hinduistische Tradition, kulturelle Begegnung und unsere Gemeinschaft werden.": "கிரேபில்டில் பொருத்தமான நிலத்தை வாங்கி, அதில் எமக்கென ஒரு இந்து ஆலயத்தை அமைப்பதே எமது கனவு. புதிய ஆலயம் பூஜைகள், சமய விழாக்கள், தமிழ் இந்து பாரம்பரியம், கலாசாரச் சந்திப்புகள் மற்றும் எமது சமூகத்திற்கான கண்ணியமான, நிரந்தரமான இடமாக அமைய வேண்டும்.",
  "Damit möchten wir auch für kommende Generationen einen festen Ort schaffen, an dem unser Glaube und unsere Tradition bewahrt und weitergegeben werden können. Über alle weiteren Schritte und den Fortschritt des Projekts werden wir transparent informieren.": "இதன் மூலம் வருங்காலத் தலைமுறைகளுக்கும் எமது சமயமும் பாரம்பரியமும் பாதுகாக்கப்பட்டு பகிரப்படும் ஒரு நிலையான இடத்தை உருவாக்க விரும்புகிறோம். திட்டத்தின் அடுத்தடுத்த நடவடிக்கைகள் மற்றும் முன்னேற்றம் குறித்து வெளிப்படையாகத் தகவல் வழங்குவோம்.",
  "Besucht uns": "எம்மைச் சந்தியுங்கள்",
  "Kontakt und Anfahrt": "தொடர்பு மற்றும் வழிகாட்டல்",
  "Tamilischer Kulturverein Krefeld e.V.": "கிரேபில்ட் தமிழ் கலாசாரச் சங்கம் e.V.",
  "· Tempel": "· ஆலயம்",
  "· Tempelverwalterin": "· ஆலய நிர்வாகி",
  "· Tempelpriester": "· ஆலயக் குரு",
  "Route öffnen": "வழித்தடத்தைத் திறக்கவும்",
  "Impressum": "சட்ட அறிவிப்பு",
  "Datenschutz": "தரவுப் பாதுகாப்பு"
};

const englishText = {
  "Zum Inhalt springen": "Skip to content",
  "Tempel Krefeld": "Temple Krefeld",
  "Unser Tempel": "Our Temple",
  "Poojas": "Poojas",
  "Termine": "Schedule",
  "Galerie": "Gallery",
  "Zukunft": "Our Future",
  "Kontakt": "Contact",
  "Erster Besuch": "First Visit",
  "வணக்கம் · Herzlich willkommen": "வணக்கம் · Welcome",
  "Sri Nagapoosani Ambaal Tempel Krefeld": "Sri Nagapoosani Ambaal Temple Krefeld",
  "Ein Ort des Glaubens, der tamilisch-hinduistischen Tradition und der Gemeinschaft.": "A place of faith, Tamil Hindu tradition and community.",
  "Wir heißen alle Menschen herzlich willkommen, unseren Tempel kennenzulernen, an Poojas teilzunehmen und unsere Gemeinschaft zu erleben.": "We warmly welcome everyone to discover our temple, take part in Poojas and experience our community.",
  "Unseren Tempel entdecken": "Discover Our Temple",
  "Kontakt & Anfahrt": "Contact & Directions",
  "Möge ihr Segen allen zuteilwerden.": "May her blessings be with everyone.",
  "Mehr entdecken": "Discover More",
  "Glaube · Tradition · Gemeinschaft": "Faith · Tradition · Community",
  "Unser Tempel und Sri Nagapoosani Ambaal": "Our Temple and Sri Nagapoosani Ambaal",
  "Der Sri Nagapoosani Ambaal Tempel Krefeld ist ein Ort des Gebets, der tamilisch-hinduistischen Tradition und der Begegnung. Getragen vom Tamilischen Kulturverein Krefeld e.V. bietet der Tempel unserer Gemeinschaft einen gemeinsamen Ort für Poojas, religiöse Feste und kulturelles Leben. Auch Menschen, die unseren Glauben und unsere Tradition kennenlernen möchten, sind herzlich willkommen.": "The Sri Nagapoosani Ambaal Temple Krefeld is a place of prayer, Tamil Hindu tradition and gathering. Run by the Tamil Cultural Association Krefeld e.V., the temple provides our community with a shared place for Poojas, religious festivals and cultural life. Everyone who would like to learn about our faith and traditions is warmly welcome.",
  "Im Mittelpunkt unseres Tempels steht Sri Nagapoosani Ambaal. Sie wird von unserer Gemeinschaft als schützende und segenspendende Göttin verehrt. Durch Gebete, Poojas und gemeinsame Feste bewahren wir unsere Traditionen und geben sie an die nächste Generation weiter.": "At the heart of our temple is Sri Nagapoosani Ambaal. Our community worships her as a protective goddess who bestows her blessings. Through prayers, Poojas and shared festivals, we preserve our traditions and pass them on to the next generation.",
  "Verstehen und teilnehmen": "Understand and Participate",
  "Poojas einfach erklärt": "Poojas Simply Explained",
  "Abhishekam": "Abhishekam",
  "Beim Abhishekam wird Sri Nagapoosani Ambaal rituell gebadet und verehrt. Gläubige können bei jedem Abhishekam am Empfang für": "During Abhishekam, Sri Nagapoosani Ambaal is ritually bathed and worshipped. At every Abhishekam, devotees can purchase",
  "2 € Milch erwerben": "milk for €2",
  "und diese als Opfergabe bereitstellen.": "at reception and offer it to the goddess.",
  "Bei der Übergabe der Milch können die Gläubigen ihre persönlichen Wünsche und Gebete vorbringen. Mit der Opfergabe verbinden sie die Hoffnung, dass Sri Nagapoosani Ambaal ihre Bitten erhört und ihnen ihren Segen schenkt.": "When presenting the milk, devotees may express their personal wishes and prayers. Through this offering, they hope that Sri Nagapoosani Ambaal will hear their requests and grant them her blessings.",
  "Pooja": "Pooja",
  "Im Anschluss an das Abhishekam findet die gemeinsame Pooja statt. Die jeweiligen Beginnzeiten finden Sie im Wochenplan.": "The communal Pooja takes place after Abhishekam. The respective starting times can be found in the weekly schedule.",
  "Besondere heilige Tage": "Special Holy Days",
  "Dienstag und Freitag gelten in unserem Tempel als besondere heilige Tage. Das Abhishekam beginnt um 17:00 Uhr, die anschließende Pooja um 18:00 Uhr.": "Tuesday and Friday are considered special holy days at our temple. Abhishekam begins at 5:00 PM, followed by Pooja at 6:00 PM.",
  "Persönliche Gebete · Opfergaben": "Personal Prayers · Offerings",
  "Archanai – ein persönliches Gebet an Ambaal": "Archanai – a Personal Prayer to Ambaal",
  "Eine Archanai ist ein besonderer Moment der Hingabe an Sri Nagapoosani Ambaal. Gläubige können ihre Wünsche, Sorgen und ihren Dank vertrauensvoll vor Ambaal bringen und für sich und ihre Familie um Schutz, Kraft und Segen bitten.": "An Archanai is a special moment of devotion to Sri Nagapoosani Ambaal. Devotees can entrust their wishes, worries and gratitude to Ambaal and pray for protection, strength and blessings for themselves and their families.",
  "In der Hoffnung auf Ambaals Gnade werden die persönlichen Anliegen in die Verehrung eingebracht. Verschiedene Formen der Archanai können direkt am Empfang ausgewählt werden.": "With hope in Ambaal’s grace, personal intentions are included in the worship. Different forms of Archanai can be selected directly at reception.",
  "Mit Vertrauen und Hingabe": "With Trust and Devotion",
  "Am Empfang erhältlich": "Available at Reception",
  "Gemeinsam feiern": "Worship Together",
  "Pooja-Zeiten und Veranstaltungen": "Pooja Times and Events",
  "Tag": "Day",
  "Montag": "Monday",
  "Dienstag": "Tuesday",
  "Mittwoch": "Wednesday",
  "Donnerstag": "Thursday",
  "Freitag": "Friday",
  "17:00 Uhr": "5:00 PM",
  "17:30–18:00 Uhr": "5:30–6:00 PM",
  "ab 18:00 Uhr": "from 6:00 PM",
  "Die Zeiten für Samstag und Sonntag werden nach der Bestätigung durch unseren Priester ergänzt.": "The times for Saturday and Sunday will be added once they have been confirmed by our temple priest.",
  "Aktuelle Ankündigungen": "Current Announcements",
  "Monatliche Pooja-Übersicht als PDF": "Monthly Pooja Overview – PDF",
  "Offen für alle": "Open to Everyone",
  "Hinweise für den ersten Besuch": "Guidance for Your First Visit",
  "Niemand muss die Abläufe bereits kennen. Besucherinnen und Besucher können ruhig beobachten und respektvoll teilnehmen.": "You do not need to be familiar with the rituals beforehand. Visitors are welcome to observe quietly and participate respectfully.",
  "Alle Menschen sind herzlich willkommen – unabhängig von Herkunft oder Religion.": "Everyone is warmly welcome, regardless of their background or religion.",
  "Bitte die Schuhe vor dem Betreten des Gebetsbereichs ausziehen.": "Please remove your shoes before entering the prayer area.",
  "Bitte saubere und respektvolle Kleidung tragen.": "Please wear clean and respectful clothing.",
  "Mobiltelefone während der Pooja lautlos stellen.": "Please set mobile phones to silent during Pooja.",
  "Fotos und Videos nur nach vorheriger Erlaubnis aufnehmen.": "Please take photos and videos only with prior permission.",
  "Bei Fragen hilft die Tempelverwaltung beziehungsweise der Empfang gerne weiter.": "If you have any questions, the temple administration or reception will be happy to assist you.",
  "Einblicke": "A Glimpse Inside",
  "Bildergalerie": "Photo Gallery",
  "Momente des Glaubens, der Hingabe und unserer lebendigen Tempelgemeinschaft.": "Moments of faith, devotion and our vibrant temple community.",
  "Weitere Momente aus unserem Tempel": "More Moments from Our Temple",
  "Moolasthanam": "Moolasthanam",
  "Die Göttin am Eingang des Tempels": "The Goddess at the Temple Entrance",
  "Diese Göttin sehen Besucherinnen und Besucher beim Betreten des Tempels. Hier findet das Abhishekam statt.": "Visitors see this form of the goddess upon entering the temple. This is where Abhishekam takes place.",
  "Besondere Festtage": "Special Festival Days",
  "Sri Nagapoosani Ambaal an Festtagen": "Sri Nagapoosani Ambaal on Festival Days",
  "Diese Darstellung der Göttin wird an besonderen heiligen Tagen und unter anderem beim Theer getragen.": "This form of the goddess is carried in procession on special holy days, including during the Theer festival.",
  "Ambaal im Festschmuck": "Ambaal in Festive Adornment",
  "Pooja im Tempel": "Pooja at the Temple",
  "Deepa Aradhanai": "Deepa Aradhanai",
  "Festliche Verehrung": "Festival Worship",
  "Traditionelle Tempelmusik": "Traditional Temple Music",
  "Gemeinschaft am Festtag": "Community on a Festival Day",
  "Unsere gemeinsame Zukunft": "Our Shared Future",
  "Die Vision eines eigenen Tempels": "Our Vision for a Permanent Temple",
  "Unser Sri Nagapoosani Ambaal Tempel befindet sich derzeit in einem angemieteten Gebäude in zentraler Lage der Krefelder Innenstadt. Der Tempel ist dadurch gut erreichbar, gleichzeitig stehen in der Umgebung jedoch nur begrenzte Parkmöglichkeiten zur Verfügung. Die derzeitigen Räumlichkeiten und der aktuelle Standort sind langfristig nicht passend für die Bedürfnisse einer wachsenden Tempelgemeinschaft und für größere religiöse Veranstaltungen. Dennoch ist dieser Ort für unsere Gemeinschaft sehr wertvoll.": "Our Sri Nagapoosani Ambaal Temple is currently located in rented premises in central Krefeld. This makes the temple easy to reach, but parking nearby is limited. In the long term, the current premises and location are not suitable for the needs of our growing temple community or for larger religious events. Nevertheless, this place remains very valuable to our community.",
  "Unsere Vision ist es, ein geeignetes Grundstück in Krefeld zu erwerben und darauf einen eigenen hinduistischen Tempel zu errichten. Der neue Tempel soll ein würdevoller und dauerhafter Ort für Poojas, religiöse Feste, tamilisch-hinduistische Tradition, kulturelle Begegnung und unsere Gemeinschaft werden.": "Our vision is to purchase a suitable plot of land in Krefeld and build our own Hindu temple. The new temple will be a dignified and permanent home for Poojas, religious festivals, Tamil Hindu tradition, cultural exchange and our community.",
  "Damit möchten wir auch für kommende Generationen einen festen Ort schaffen, an dem unser Glaube und unsere Tradition bewahrt und weitergegeben werden können. Über alle weiteren Schritte und den Fortschritt des Projekts werden wir transparent informieren.": "In this way, we aim to create a lasting place for future generations where our faith and traditions can be preserved and passed on. We will provide transparent updates about the next steps and the progress of the project.",
  "Besucht uns": "Visit Us",
  "Kontakt und Anfahrt": "Contact and Directions",
  "Tamilischer Kulturverein Krefeld e.V.": "Tamil Cultural Association Krefeld e.V.",
  "· Tempel": "· Temple",
  "· Tempelverwalterin": "· Temple Administrator",
  "· Tempelpriester": "· Temple Priest",
  "Route öffnen": "Open Directions",
  "Impressum": "Legal Notice",
  "Datenschutz": "Privacy Policy"
};

const tamilAttributes = {
  "Zur Startseite": "முகப்புப் பக்கத்திற்குச் செல்லவும்",
  "Logo des Sri Nagapoosani Ambaal Tempels Krefeld": "கிரேபில்ட் ஸ்ரீ நாகபூசணி அம்பாள் ஆலயத்தின் சின்னம்",
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
  "Aktuelle Ankündigungen als PDF öffnen": "தற்போதைய அறிவிப்புகளை PDF வடிவில் திறக்கவும்",
  "Archanai – ein persönliches Gebet an Ambaal": "அர்ச்சனை – அம்பாளிடம் ஒரு தனிப்பட்ட பிரார்த்தனை",
  "Moolasthanam der Sri Nagapoosani Ambaal im Tempel Krefeld": "கிரேபில்ட் ஆலயத்தில் ஸ்ரீ நாகபூசணி அம்பாளின் மூலஸ்தானம்",
  "Sri Nagapoosani Ambaal während eines besonderen Festtages im Tempel Krefeld": "கிரேபில்ட் ஆலயத்தின் விசேட திருவிழாவில் ஸ்ரீ நாகபூசணி அம்பாள்",
  "Bildergalerie steuern": "படத்தொகுப்பை இயக்கவும்",
  "In der Bilderreihe zurück": "படவரிசையில் பின்னால் செல்லவும்",
  "In der Bilderreihe weiter": "படவரிசையில் முன்னால் செல்லவும்",
  "Weitere Einblicke aus unserem Tempel": "எமது ஆலயத்தின் மேலும் சில தரிசனங்கள்",
  "Ambaal im Festschmuck groß öffnen": "திருவிழா அலங்காரத்தில் அம்பாளின் படத்தைப் பெரிதாகத் திறக்கவும்",
  "Pooja im Tempel groß öffnen": "ஆலயப் பூஜை படத்தைப் பெரிதாகத் திறக்கவும்",
  "Deepa Aradhanai groß öffnen": "தீபாராதனை படத்தைப் பெரிதாகத் திறக்கவும்",
  "Festliche Verehrung groß öffnen": "விசேட வழிபாட்டு படத்தைப் பெரிதாகத் திறக்கவும்",
  "Traditionelle Tempelmusik groß öffnen": "பாரம்பரிய ஆலய இசைப் படத்தைப் பெரிதாகத் திறக்கவும்",
  "Gemeinschaft am Festtag groß öffnen": "திருவிழா சமூகப் படத்தைப் பெரிதாகத் திறக்கவும்",
  "Bildergalerie in Großansicht": "படத்தொகுப்பைப் பெரிய காட்சியில் காணவும்",
  "Galerie schließen": "படத்தொகுப்பை மூடவும்",
  "Vorheriges Bild": "முந்தைய படம்",
  "Nächstes Bild": "அடுத்த படம்",
  "Festlich geschmückte Sri Nagapoosani Ambaal im Tempel Krefeld": "கிரேபில்ட் ஆலயத்தில் திருவிழா அலங்காரத்தில் ஸ்ரீ நாகபூசணி அம்பாள்",
  "Tempelpriester während einer Pooja vor Sri Nagapoosani Ambaal": "ஸ்ரீ நாகபூசணி அம்பாள் முன் பூஜை செய்யும் ஆலயக் குரு",
  "Tempelpriester bei der Deepa Aradhanai vor Sri Nagapoosani Ambaal": "ஸ்ரீ நாகபூசணி அம்பாள் முன் தீபாராதனை செய்யும் ஆலயக் குரு",
  "Zwei Tempelpriester während der festlichen Verehrung von Sri Nagapoosani Ambaal": "ஸ்ரீ நாகபூசணி அம்பாளுக்கு விசேட வழிபாடு செய்யும் இரு ஆலயக் குருக்கள்",
  "Musiker mit Nadaswaram und Thavil im Tempel Krefeld": "கிரேபில்ட் ஆலயத்தில் நாதஸ்வரம் மற்றும் தவில் இசைக்கலைஞர்கள்",
  "Tempelgemeinschaft während eines besonderen Festtages": "விசேட திருவிழாவின் போது ஆலயச் சமூகம்",
  "Rechtliche Hinweise": "சட்ட அறிவிப்புகள்"
};

const englishAttributes = {
  "Zur Startseite": "Go to homepage",
  "Logo des Sri Nagapoosani Ambaal Tempels Krefeld": "Logo of the Sri Nagapoosani Ambaal Temple Krefeld",
  "Hauptnavigation": "Main navigation",
  "Soziale Medien im Kopfbereich": "Social media in the header",
  "Instagram öffnen": "Open Instagram",
  "Facebook öffnen": "Open Facebook",
  "YouTube öffnen": "Open YouTube",
  "Sprachauswahl": "Language selection",
  "Menü öffnen": "Open menu",
  "Mobile Navigation": "Mobile navigation",
  "Soziale Medien": "Social media",
  "Darstellung von Sri Nagapoosani Ambaal": "Depiction of Sri Nagapoosani Ambaal",
  "Sri Nagapoosani Ambaal mit der schützenden Nagagestalt": "Sri Nagapoosani Ambaal with the protective form of the Naga",
  "Zum nächsten Abschnitt": "Go to the next section",
  "Regelmäßiger Wochenplan": "Regular weekly schedule",
  "Aktuelle Ankündigungen als PDF öffnen": "Open current announcements as a PDF",
  "Archanai – ein persönliches Gebet an Ambaal": "Archanai – a personal prayer to Ambaal",
  "Moolasthanam der Sri Nagapoosani Ambaal im Tempel Krefeld": "Moolasthanam of Sri Nagapoosani Ambaal at the Krefeld temple",
  "Sri Nagapoosani Ambaal während eines besonderen Festtages im Tempel Krefeld": "Sri Nagapoosani Ambaal during a special festival day at the Krefeld temple",
  "Bildergalerie steuern": "Control photo gallery",
  "In der Bilderreihe zurück": "Move back through the photo row",
  "In der Bilderreihe weiter": "Move forward through the photo row",
  "Weitere Einblicke aus unserem Tempel": "More glimpses from our temple",
  "Ambaal im Festschmuck groß öffnen": "Open Ambaal in festive adornment in a large view",
  "Pooja im Tempel groß öffnen": "Open Pooja at the temple in a large view",
  "Deepa Aradhanai groß öffnen": "Open Deepa Aradhanai in a large view",
  "Festliche Verehrung groß öffnen": "Open festival worship in a large view",
  "Traditionelle Tempelmusik groß öffnen": "Open traditional temple music in a large view",
  "Gemeinschaft am Festtag groß öffnen": "Open the festival community photo in a large view",
  "Bildergalerie in Großansicht": "Photo gallery in large view",
  "Galerie schließen": "Close gallery",
  "Vorheriges Bild": "Previous image",
  "Nächstes Bild": "Next image",
  "Festlich geschmückte Sri Nagapoosani Ambaal im Tempel Krefeld": "Sri Nagapoosani Ambaal in festive adornment at the Krefeld temple",
  "Tempelpriester während einer Pooja vor Sri Nagapoosani Ambaal": "Temple priest during a Pooja before Sri Nagapoosani Ambaal",
  "Tempelpriester bei der Deepa Aradhanai vor Sri Nagapoosani Ambaal": "Temple priest performing Deepa Aradhanai before Sri Nagapoosani Ambaal",
  "Zwei Tempelpriester während der festlichen Verehrung von Sri Nagapoosani Ambaal": "Two temple priests during the festival worship of Sri Nagapoosani Ambaal",
  "Musiker mit Nadaswaram und Thavil im Tempel Krefeld": "Musicians playing Nadaswaram and Thavil at the Krefeld temple",
  "Tempelgemeinschaft während eines besonderen Festtages": "Temple community during a special festival day",
  "Rechtliche Hinweise": "Legal information"
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
  ta: "ஸ்ரீ நாகபூசணி அம்பாள் ஆலயம் கிரேபில்ட்",
  en: "Sri Nagapoosani Ambaal Temple Krefeld"
};
const pageDescriptions = {
  de: "Sri Nagapoosani Ambaal Tempel Krefeld – ein Ort des Glaubens, der tamilisch-hinduistischen Tradition und der Gemeinschaft.",
  ta: "கிரேபில்ட் ஸ்ரீ நாகபூசணி அம்பாள் ஆலயம் – நம்பிக்கை, தமிழ் இந்து பாரம்பரியம் மற்றும் சமூக ஒற்றுமைக்கான ஓர் இடம்.",
  en: "Sri Nagapoosani Ambaal Temple Krefeld – a place of faith, Tamil Hindu tradition and community."
};

function replaceTextNode(node, language) {
  const source = originalText.get(node);
  const key = source.trim();
  const dictionaries = { ta: tamilText, en: englishText };
  const replacement = language === "de" ? key : (dictionaries[language]?.[key] || key);
  if (!replacement) return;
  const leading = source.match(/^\s*/)?.[0] || "";
  const trailing = source.match(/\s*$/)?.[0] || "";
  node.nodeValue = `${leading}${replacement}${trailing}`;
}

function applyLanguage(language) {
  const selected = ["de", "ta", "en"].includes(language) ? language : "de";
  document.documentElement.lang = selected;
  document.documentElement.dataset.language = selected;
  textNodes.forEach((node) => replaceTextNode(node, selected));

  attributedElements.forEach((element) => {
    const attributes = originalAttributes.get(element);
    const dictionaries = { ta: tamilAttributes, en: englishAttributes };
    Object.entries(attributes).forEach(([name, source]) => {
      element.setAttribute(name, selected === "de" ? source : (dictionaries[selected]?.[source] || source));
    });
  });

  document.title = pageTitles[selected];
  document.querySelector('meta[name="description"]').setAttribute("content", pageDescriptions[selected]);
  languageButtons.forEach((button) => {
    const active = button.dataset.language === selected;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  if (galleryLightbox?.open) updateLightbox(currentGalleryIndex);

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

function updateLightbox(index) {
  if (!galleryItems.length) return;
  currentGalleryIndex = (index + galleryItems.length) % galleryItems.length;
  const item = galleryItems[currentGalleryIndex];
  const sourceImage = item.querySelector("img");
  const sourceCaption = item.querySelector("span");
  lightboxImage.src = sourceImage.currentSrc || sourceImage.src;
  lightboxImage.alt = sourceImage.alt;
  lightboxCaption.textContent = sourceCaption.textContent;
  lightboxCounter.textContent = `${currentGalleryIndex + 1} / ${galleryItems.length}`;
}

function openLightbox(index) {
  updateLightbox(index);
  if (!galleryLightbox.open) galleryLightbox.showModal();
}

galleryItems.forEach((item, index) => {
  item.addEventListener("click", () => openLightbox(index));
});

document.querySelector("[data-gallery-prev]")?.addEventListener("click", () => {
  galleryRail.scrollBy({ left: -galleryRail.clientWidth * 0.82, behavior: "smooth" });
});

document.querySelector("[data-gallery-next]")?.addEventListener("click", () => {
  galleryRail.scrollBy({ left: galleryRail.clientWidth * 0.82, behavior: "smooth" });
});

document.querySelector("[data-gallery-close]")?.addEventListener("click", () => galleryLightbox.close());
document.querySelector("[data-lightbox-prev]")?.addEventListener("click", () => updateLightbox(currentGalleryIndex - 1));
document.querySelector("[data-lightbox-next]")?.addEventListener("click", () => updateLightbox(currentGalleryIndex + 1));

galleryLightbox?.addEventListener("click", (event) => {
  if (event.target === galleryLightbox) galleryLightbox.close();
});

document.addEventListener("keydown", (event) => {
  if (!galleryLightbox?.open) return;
  if (event.key === "ArrowLeft") updateLightbox(currentGalleryIndex - 1);
  if (event.key === "ArrowRight") updateLightbox(currentGalleryIndex + 1);
});

let galleryTouchStartX = 0;
galleryLightbox?.addEventListener("touchstart", (event) => {
  galleryTouchStartX = event.changedTouches[0].clientX;
}, { passive: true });
galleryLightbox?.addEventListener("touchend", (event) => {
  const distance = event.changedTouches[0].clientX - galleryTouchStartX;
  if (Math.abs(distance) < 45) return;
  updateLightbox(currentGalleryIndex + (distance < 0 ? 1 : -1));
}, { passive: true });

let storedLanguage = "de";
try { storedLanguage = window.localStorage.getItem("temple-language") || "de"; } catch (_) {}
applyLanguage(storedLanguage);
