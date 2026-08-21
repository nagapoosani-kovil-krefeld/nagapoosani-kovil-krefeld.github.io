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
  "Tempel Krefeld": "கிறிபில்ட் ஆலயம்",
  "Unser Tempel": "எமது ஆலயம்",
  "Poojas": "பூஜை முறைகள்",
  "Termine": "வழிபாட்டு நேரங்கள்",
  "Galerie": "படத்தொகுப்பு",
  "Zukunft": "எமது கனவு",
  "Kontakt": "தொடர்பு மற்றும் முகவரி",
  "Erster Besuch": "முதல் வருகை",
  "வணக்கம் · Herzlich willkommen": "வணக்கம் · அன்புடன் வரவேற்கிறோம்",
  "Sri Nagapoosani Ambaal Tempel Krefeld": "ஸ்ரீ நாகபூசணி அம்பாள் ஆலயம் கிறிபில்ட்",
  "Ein Ort des Glaubens, der Verehrung und der Gemeinschaft.": "இறைவழிபாடும் சமூக ஒற்றுமையும் நிறைந்த புனிதத் தலம்.",
  "Wir heißen alle Menschen herzlich willkommen, unseren Tempel kennenzulernen, an Poojas teilzunehmen und unsere Gemeinschaft zu erleben.": "எமது ஆலயத்திற்கு வருகை தந்து, ஸ்ரீ நாகபூசணி அம்பாளை தரிசித்து, பக்தியுடன் வழிபட்டு திருவருள் பெற அனைவரையும் அன்போடு வரவேற்கின்றோம்.",
  "Unseren Tempel entdecken": "எமது ஆலயத்தைப் பற்றி அறிய",
  "Kontakt & Anfahrt": "தொடர்பு · வருகை வழி",
  "Möge ihr Segen allen zuteilwerden.": "அம்பாளின் திருவருள் அனைவருக்கும் கிடைக்கட்டும்.",
  "Mehr entdecken": "மேலும் அறிய",
  "Glaube · Verehrung · Gemeinschaft": "இறைநம்பிக்கை · வழிபாடு · சமூக ஒற்றுமை",
  "Unser Tempel und Sri Nagapoosani Ambaal": "அம்பாளின் அருளில் எமது ஆலயம்",
  "Der Sri Nagapoosani Ambaal Tempel Krefeld ist ein Ort des Gebets, der Gottesverehrung und der Begegnung. Getragen vom Tamilischen Kulturverein Krefeld e.V. finden hier regelmäßige Poojas, besondere Gottesdienste, religiöse Feste und kulturelle Veranstaltungen statt. Menschen aller Generationen kommen hier zusammen, um ihren Glauben zu leben und Gemeinschaft zu erfahren. Auch Gäste sind herzlich willkommen.": "கிறிபில்ட் ஸ்ரீ நாகபூசணி அம்பாள் ஆலயம் ஒரு வழிபாட்டுத் தலம் மட்டுமல்ல; எமது மக்களின் ஆன்மீக வாழ்க்கையோடு இணைந்த ஒரு முக்கியமான இடமாகவும் விளங்குகிறது. கிறிபில்ட் தமிழ் கலாசாரச் சங்கம் e.V. நிர்வகிக்கும் இவ்வாலயத்தில் தினசரி பூஜைகள், விசேஷ வழிபாடுகள், சமய விழாக்கள் மற்றும் கலாசார நிகழ்வுகள் நடைபெற்று வருகின்றன. பெரியோர்கள் முதல் இளைய தலைமுறையினர் வரை அனைவரும் ஒன்றிணைந்து, சமய அறிவையும் சமூக உறவையும் பகிர்ந்து கொள்ளும் இடமாகவும் எமது ஆலயம் திகழ்கிறது. ஆலயத்திற்கு வருகை தரும் அனைவரையும் அன்புடன் வரவேற்கிறோம்.",
  "Im Mittelpunkt unseres Tempels steht Sri Nagapoosani Ambaal. Gläubige verehren sie als schützende und segenspendende Göttin und bringen ihre Wünsche, Sorgen und ihren Dank vertrauensvoll vor Ambaal. Sie bitten um Gesundheit, Schutz, innere Ruhe und Wohlergehen für sich und ihre Familien sowie um Frieden, Gerechtigkeit und Zusammenhalt. Durch Abhishekam, Poojas, Archanai und besondere Verehrungen wird dieser Glaube von Generation zu Generation weitergetragen. Einige Angehörige der jüngeren Generation beteiligen sich bereits an den Aufgaben des Tempels und übernehmen schrittweise Verantwortung. Für die Zukunft wünschen wir uns, dass sich weitere junge Menschen anschließen und das religiöse, soziale und gemeinschaftliche Leben des Tempels weitertragen.": "எமது ஆலயத்தின் பிரதான தெய்வமாக ஸ்ரீ நாகபூசணி அம்பாள் எழுந்தருளி அருள்பாலித்து வருகின்றார். தம்மை நம்பிக்கையுடன் நாடி வருவோருக்கு தாயின் அரவணைப்பைப் போன்று நலம், பாதுகாப்பு, மனநிம்மதி மற்றும் வாழ்வில் வளம் கிடைக்கும் என்ற நம்பிக்கையுடன் பக்தர்கள் வழிபடுகின்றனர். மனதில் தாங்கி வரும் வேண்டுதல்கள், கவலைகள் மற்றும் நன்றிகளை திருவடிகளில் சமர்ப்பித்து, வாழ்க்கைப் பயணத்தில் துணையும் வழிகாட்டுதலும் வேண்டுகின்றனர். அதேபோல் உலகில் அநீதி அகன்று நீதி நிலைக்கவும், துன்பங்கள் குறைந்து மக்கள் அமைதியுடனும் ஒற்றுமையுடனும் வாழவும் அம்பாளை வேண்டிப் பிரார்த்திக்கின்றனர். அபிஷேகம், பூஜை, அர்ச்சனை மற்றும் விசேஷ வழிபாடுகள் வழியாக இந்த இறைநம்பிக்கை தலைமுறை தலைமுறையாகப் பேணிப் பாதுகாக்கப்படுகிறது. இளைய தலைமுறையைச் சேர்ந்த சிலர் ஆலயப் பணிகளில் பங்கேற்று, படிப்படியாகப் பொறுப்புகளை ஏற்று வருகின்றனர். வருங்காலத்தில் மேலும் பல இளைஞர்கள் இணைந்து, ஆலயத்தின் வழிபாடு, சேவை மற்றும் சமூகப் பணிகளை தொடர்ந்து முன்னெடுத்து செல்ல வேண்டும் என்பதே எமது விருப்பம்.",
  "Verstehen und teilnehmen": "அறிந்துகொண்டு பங்கேற்கவும்",
  "Poojas einfach erklärt": "பூஜை மற்றும் வழிபாட்டு முறைகள்",
  "Abhishekam": "அபிஷேகம்",
  "Beim Abhishekam wird Sri Nagapoosani Ambaal rituell gebadet und verehrt. Gläubige können am Empfang": "அபிஷேகத்தின் போது ஸ்ரீ நாகபூசணி அம்பாளுக்கு அபிஷேகம் செய்து விசேஷ வழிபாடு நடைபெறும். விரும்பும் பக்தர்கள் வரவேற்பிடத்தில்",
  "für 2 € Milch für das Abhishekam erhalten": "2 € செலுத்தி பால் பெற்றுக்கொண்டு",
  "und sie als Opfergabe darbringen.": "அதனை அபிஷேகத்திற்கான காணிக்கையாக வழங்கலாம்.",
  "Bei der Übergabe der Milch können die Gläubigen ihre persönlichen Wünsche und Gebete vorbringen. Mit der Opfergabe verbinden sie die Hoffnung, dass Sri Nagapoosani Ambaal ihre Bitten erhört und ihnen ihren Segen schenkt.": "பாலை அபிஷேகத்திற்காக வழங்கும் போது தங்கள் வேண்டுதல்களையும் பிரார்த்தனைகளையும் மனதில் கொண்டு அம்பாளை வேண்டிக்கொள்ளலாம். தங்கள் வேண்டுதல்களை அம்பாள் ஏற்று அருள்புரிவார் என்ற நம்பிக்கையுடன் பக்தர்கள் இக்காணிக்கையை வழங்குகின்றனர்.",
  "Pooja": "பூஜை",
  "Im Anschluss an das Abhishekam findet die gemeinsame Pooja statt. Dabei werden Mantras rezitiert sowie Deepa Aradhanai und besondere Verehrungen durchgeführt. Zum Abschluss erhalten die Gläubigen Vibhuti und Prasadam. Die jeweiligen Beginnzeiten finden Sie im Wochenplan.": "அபிஷேகம் நிறைவடைந்த பின்னர் பொதுப் பூஜை நடைபெறும். மந்திரங்கள் ஓதப்பட்டு, தீபாராதனை மற்றும் விசேஷ வழிபாடுகள் நடைபெறும். பக்தர்கள் அம்பாளை தரிசித்து, பூஜையின் நிறைவில் திருநீறு மற்றும் பிரசாதம் பெற்றுக்கொள்ளலாம். அன்றைய பூஜை ஆரம்ப நேரத்தை வார அட்டவணையில் காணலாம்.",
  "Im Anschluss an das Abhishekam findet die gemeinsame Pooja statt. Dabei werden Mantras rezitiert sowie Deepa Aradhanai und besondere Verehrungen durchgeführt. Zum Abschluss erhalten die Gläubigen Vibhuti und Prasadam.": "அபிஷேகம் நிறைவடைந்த பின்னர் பொதுப் பூஜை நடைபெறும். மந்திரங்கள் ஓதப்பட்டு, தீபாராதனை மற்றும் விசேஷ வழிபாடுகள் நடைபெறும். பக்தர்கள் அமைதியாக அம்பாளை தரிசித்து வழிபாட்டில் கலந்து கொள்ளலாம்.",
  "Die jeweiligen Beginnzeiten finden Sie im Wochenplan.": "பூஜையின் நிறைவில் தீபாராதனையை தரிசித்து, திருநீறு மற்றும் பிரசாதம் பெற்றுக்கொள்ளலாம்.",
  "​": "அன்றைய பூஜை ஆரம்ப நேரத்தை வார அட்டவணையில் காணலாம்.",
  "Besondere heilige Tage": "விசேட பூஜை நாட்கள்",
  "Dienstag und Freitag gelten in unserem Tempel als besondere heilige Tage. Das Abhishekam beginnt um 17:00 Uhr, die anschließende Pooja um 18:00 Uhr.": "செவ்வாய்க்கிழமையும் வெள்ளிக்கிழமையும் எமது ஆலயத்தின் விசேட வழிபாட்டு நாட்களாகும். இவ்விரு நாட்களிலும் அபிஷேகம் மாலை 17:00 மணிக்கும், அதனைத் தொடர்ந்து பூஜை 18:00 மணிக்கும் ஆரம்பமாகும்.",
  "Persönliche Gebete · Opfergaben": "தனிப்பட்ட வேண்டுதல்கள் · காணிக்கைகள்",
  "Archanai – ein persönliches Gebet an Ambaal": "அர்ச்சனை – அம்பாளுக்கான தனிப்பட்ட வழிபாடு",
  "Eine Archanai ist ein besonderer Moment der Hingabe an Sri Nagapoosani Ambaal. Gläubige können ihre Wünsche, Sorgen und ihren Dank vertrauensvoll vor Ambaal bringen und für sich und ihre Familie um Schutz, Kraft und Segen bitten.": "அர்ச்சனை என்பது ஸ்ரீ நாகபூசணி அம்பாளுக்குச் செய்யப்படும் தனிப்பட்ட வழிபாடாகும். பக்தர்கள் தங்கள் வேண்டுதல்கள், கவலைகள் மற்றும் நன்றிகளை அம்பாளின் திருவடிகளில் சமர்ப்பித்து, தமக்கும் தங்கள் குடும்பத்தினருக்கும் நலம், பாதுகாப்பு, மனவலிமை மற்றும் திருவருள் வேண்டிக்கொள்ளலாம்.",
  "In der Hoffnung auf Ambaals Gnade werden die persönlichen Anliegen in die Verehrung eingebracht. Verschiedene Formen der Archanai können direkt am Empfang ausgewählt werden.": "அம்பாளின் அருளை நாடி தங்கள் தனிப்பட்ட வேண்டுதல்களுக்காக அர்ச்சனை செய்யலாம். தேவைக்கேற்ற அர்ச்சனை வகைகளை ஆலய வரவேற்பிடத்தில் நேரடியாகத் தெரிவு செய்யலாம்.",
  "Mit Vertrauen und Hingabe": "நம்பிக்கையோடும் பக்தியோடும்",
  "Am Empfang erhältlich": "வரவேற்பிடத்தில் தெரிவு செய்யலாம்",
  "Gemeinsam feiern": "ஒன்றிணைந்து வழிபடுவோம்",
  "Pooja-Zeiten und Veranstaltungen": "எமது ஆலய வழிபாட்டு நேரங்கள்",
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
  "Offen für alle": "அனைவரும் அன்புடன் வரவேற்கப்படுகிறார்கள்",
  "Hinweise für den ersten Besuch": "முதல் முறை வருபவர்களுக்கு",
  "Niemand muss die Abläufe bereits kennen. Besucherinnen und Besucher können ruhig beobachten und respektvoll teilnehmen.": "ஆலய வழிபாட்டு முறைகள் தெரியாவிட்டாலும் கவலைப்பட தேவையில்லை. அமைதியாகக் கவனித்து, மரியாதையுடன் வழிபாட்டில் கலந்து கொள்ளலாம்.",
  "Alle Menschen sind herzlich willkommen – unabhängig von Herkunft oder Religion.": "பின்னணி அல்லது மத வேறுபாடு பாராமல் அனைவரும் அன்புடன் வரவேற்கப்படுகிறார்கள்.",
  "Bitte die Schuhe vor dem Betreten des Gebetsbereichs ausziehen.": "வழிபாட்டு இடத்திற்குள் செல்லும் முன் காலணிகளை வெளியே கழற்றி வைக்கவும்.",
  "Bitte saubere und respektvolle Kleidung tragen.": "ஆலயத்திற்கேற்ற சுத்தமான உடை அணியவும்.",
  "Mobiltelefone während der Pooja lautlos stellen.": "பூஜை நடைபெறும் போது கைப்பேசிகளை மௌன நிலையில் வைத்திருக்கவும்.",
  "Fotos und Videos nur nach vorheriger Erlaubnis aufnehmen.": "முன் அனுமதி பெற்ற பின்னரே புகைப்படங்கள் மற்றும் காணொளிகளை எடுக்கவும்.",
  "Bei Fragen hilft die Tempelverwaltung beziehungsweise der Empfang gerne weiter.": "உதவி தேவைப்பட்டால் ஆலய நிர்வாகத்தையோ வரவேற்பிடத்தையோ அணுகலாம்.",
  "Einblicke": "ஆலயக் காட்சிகள்",
  "Bildergalerie": "படத்தொகுப்பு",
  "Momente des Glaubens, der Hingabe und unserer lebendigen Tempelgemeinschaft.": "இறைநம்பிக்கை, பக்தி மற்றும் எமது ஆலயக் குடும்பத்தின் அழகிய தருணங்கள்.",
  "Weitere Momente aus unserem Tempel": "எமது ஆலயத்தின் மேலும் சில காட்சிகள்",
  "Moolasthanam": "மூலஸ்தானம்",
  "Sri Nagapoosani Ambaal im Moolasthanam": "மூலஸ்தானத்தில் அருள்பாலிக்கும் ஸ்ரீ நாகபூசணி அம்பாள்",
  "Sri Nagapoosani Ambaal – der erste Blick beim Betreten des Tempels": "ஆலயத்தில் முதலில் தரிசிக்கப்படும் ஸ்ரீ நாகபூசணி அம்பாள்",
  "Diese Göttin sehen Besucherinnen und Besucher beim Betreten des Tempels. Hier findet das Abhishekam statt.": "ஆலயத்திற்குள் நுழையும் போது அடியவர்கள் முதலில் அம்பாளை இங்கே தரிசிக்கிறார்கள். இவ்விடத்திலேயே அபிஷேகம் நடைபெறுகிறது.",
  "Besondere Festtage": "விசேட திருநாட்கள்",
  "Sri Nagapoosani Ambaal an Festtagen": "விசேட திருநாட்களில் ஸ்ரீ நாகபூசணி அம்பாள்",
  "Diese Darstellung der Göttin wird an besonderen heiligen Tagen und unter anderem beim Theer getragen.": "விசேட திருநாட்களிலும் தேர்த்திருவிழா போன்ற நிகழ்வுகளிலும் இந்த அம்பாள் திருவுருவம் பவனியாக எடுத்துச் செல்லப்படுகிறது.",
  "Ambaal im Aadipooram-Alankaram": "ஆடிப்பூர அலங்காரத்தில் அம்பாள்",
  "Pooja im Tempel": "ஆலயப் பூஜை",
  "Deepa Aradhanai": "தீபாராதனை",
  "Festliche Verehrung": "திருவிழா வழிபாடு",
  "Nadaswaram · Thavil Musik": "நாதஸ்வரம் · தவில் இசை",
  "Gemeinschaft am Festtag": "திருநாளில் எமது ஆலயச் சமூகம்",
  "Unsere gemeinsame Zukunft": "எமது எதிர்காலப் பயணம்",
  "Die Vision eines eigenen Tempels": "சொந்த ஆலயத்திற்கான எமது கனவு",
  "Unser Sri Nagapoosani Ambaal Tempel befindet sich derzeit in einem angemieteten Gebäude in zentraler Lage der Krefelder Innenstadt. Der Tempel ist dadurch gut erreichbar, gleichzeitig stehen in der Umgebung jedoch nur begrenzte Parkmöglichkeiten zur Verfügung. Die derzeitigen Räumlichkeiten und der aktuelle Standort sind langfristig nicht passend für die Bedürfnisse einer wachsenden Tempelgemeinschaft und für größere religiöse Veranstaltungen. Dennoch ist dieser Ort für unsere Gemeinschaft sehr wertvoll.": "எமது ஸ்ரீ நாகபூசணி அம்பாள் ஆலயம் தற்போது கிறிபில்ட் நகர மத்தியில் உள்ள ஒரு வாடகைக் கட்டிடத்தில் இயங்கி வருகிறது. நகர மத்தியில் அமைந்துள்ளதால் பக்தர்கள் ஆலயத்தை எளிதாக அடைய முடிகிறது. இருப்பினும் வாகன நிறுத்துமிடங்களின் பற்றாக்குறையும், வளர்ந்து வரும் எமது ஆலயக் குடும்பத்தின் தேவைகளும், பெரிய சமய மற்றும் திருவிழா நிகழ்வுகளை நடத்துவதற்கான இடவசதி குறைபாடும் எதிர்காலத்தை நோக்கி புதிய இடம் ஒன்றின் தேவையை உணர்த்துகின்றன. இருந்தாலும் தற்போதைய இந்த ஆலயம் எமது சமூகத்தின் ஆன்மிக வாழ்வில் மிக முக்கியமான இடத்தை வகிக்கிறது.",
  "Unsere Vision ist es, ein geeignetes Grundstück in Krefeld zu erwerben und darauf einen eigenen hinduistischen Tempel zu errichten. Der neue Tempel soll ein würdevoller und dauerhafter Ort für Poojas, religiöse Feste, kulturelle Veranstaltungen und gemeinschaftliches Leben werden.": "கிறிபில்டில் பொருத்தமான நிலம் ஒன்றைப் பெற்று, அதில் எமக்கென ஒரு சொந்த இந்து ஆலயத்தை அமைப்பதே எமது நீண்டகால கனவாகும். புதிய ஆலயம் பூஜைகள், திருவிழாக்கள், சமய நிகழ்வுகள், கலாசார நிகழ்வுகள் மற்றும் சமூக ஒன்றுகூடல்கள் நடைபெறும் நிரந்தரமான ஆன்மிக இல்லமாக அமைய வேண்டும் என்பதே எமது விருப்பம்.",
  "Unser Glaube und das religiöse Leben unseres Tempels sollen auch für kommende Generationen erhalten bleiben. Dafür möchten wir einen dauerhaften spirituellen Mittelpunkt schaffen. Über alle weiteren Schritte und den Fortschritt des Projekts werden wir transparent informieren.": "எமது இறைநம்பிக்கையும் ஆலய வழிபாடும் வருங்காலத் தலைமுறைகளுக்கும் தொடர்ந்து நிலைத்திருக்க வேண்டும். அதற்கான ஒரு நிரந்தரமான ஆன்மிக மையமாக இந்த புதிய ஆலயம் அமைய வேண்டும் என்று நாம் விரும்புகிறோம். இந்த முயற்சியின் அடுத்தடுத்த கட்டங்கள் மற்றும் முன்னேற்றங்கள் குறித்து எமது பக்தர்களுக்கும் சமூகத்தினருக்கும் தொடர்ந்து தகவல் வழங்கப்படும்.",
  "Besucht uns": "ஆலயத்திற்கு வருகை தாருங்கள்",
  "Kontakt und Anfahrt": "ஆலயத் தொடர்பு மற்றும் முகவரி",
  "Tamilischer Kulturverein Krefeld e.V.": "கிறிபில்ட் தமிழ் கலாசாரச் சங்கம் e.V.",
  "· Tempel": "· ஆலயம்",
  "· Tempelverwalterin": "· ஆலய நிர்வாகி",
  "· Tempelpriester": "· ஆலயக் குரு",
  "Route öffnen": "ஆலயத்திற்கு வழிகாட்டி",
  "Route planen": "ஆலயத்திற்கு வழிகாட்டி",
  "Navigation auswählen": "வழிகாட்டி செயலியைத் தேர்ந்தெடுக்கவும்",
  "Wählen Sie Ihre bevorzugte Karten-App.": "நீங்கள் பயன்படுத்த விரும்பும் வரைபட செயலியைத் தேர்ந்தெடுக்கவும்.",
  "Impressum": "சட்ட அறிவிப்பு",
  "Datenschutz": "தனியுரிமை"
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
  "Ein Ort des Glaubens, der Verehrung und der Gemeinschaft.": "A sacred place of worship, faith and community.",
  "Wir heißen alle Menschen herzlich willkommen, unseren Tempel kennenzulernen, an Poojas teilzunehmen und unsere Gemeinschaft zu erleben.": "We warmly welcome everyone to discover our temple, take part in Poojas and experience our community.",
  "Unseren Tempel entdecken": "Discover Our Temple",
  "Kontakt & Anfahrt": "Contact & Directions",
  "Möge ihr Segen allen zuteilwerden.": "May her blessings be with everyone.",
  "Mehr entdecken": "Discover More",
  "Glaube · Verehrung · Gemeinschaft": "Faith · Worship · Community",
  "Unser Tempel und Sri Nagapoosani Ambaal": "Our Temple and Sri Nagapoosani Ambaal",
  "Der Sri Nagapoosani Ambaal Tempel Krefeld ist ein Ort des Gebets, der Gottesverehrung und der Begegnung. Getragen vom Tamilischen Kulturverein Krefeld e.V. finden hier regelmäßige Poojas, besondere Gottesdienste, religiöse Feste und kulturelle Veranstaltungen statt. Menschen aller Generationen kommen hier zusammen, um ihren Glauben zu leben und Gemeinschaft zu erfahren. Auch Gäste sind herzlich willkommen.": "The Sri Nagapoosani Ambaal Temple Krefeld is a place of prayer, worship and community. Run by the Tamil Cultural Association Krefeld e.V., the temple hosts regular Poojas, special worship services, religious festivals and cultural events. People of all generations come together here to practise their faith and experience community. Visitors are warmly welcome.",
  "Im Mittelpunkt unseres Tempels steht Sri Nagapoosani Ambaal. Gläubige verehren sie als schützende und segenspendende Göttin und bringen ihre Wünsche, Sorgen und ihren Dank vertrauensvoll vor Ambaal. Sie bitten um Gesundheit, Schutz, innere Ruhe und Wohlergehen für sich und ihre Familien sowie um Frieden, Gerechtigkeit und Zusammenhalt. Durch Abhishekam, Poojas, Archanai und besondere Verehrungen wird dieser Glaube von Generation zu Generation weitergetragen. Einige Angehörige der jüngeren Generation beteiligen sich bereits an den Aufgaben des Tempels und übernehmen schrittweise Verantwortung. Für die Zukunft wünschen wir uns, dass sich weitere junge Menschen anschließen und das religiöse, soziale und gemeinschaftliche Leben des Tempels weitertragen.": "At the heart of our temple is Sri Nagapoosani Ambaal. Devotees worship her as a protective and blessing-giving goddess and bring their wishes, worries and gratitude before Ambaal with trust. They pray for health, protection, inner peace and well-being for themselves and their families, as well as for peace, justice and unity. Through Abhishekam, Poojas, Archanai and special forms of worship, this faith is carried forward from generation to generation. Some members of the younger generation already take part in temple responsibilities and are gradually taking on greater responsibility. For the future, we hope that more young people will join and help carry forward the religious, social and community life of the temple.",
  "Verstehen und teilnehmen": "Understand and Participate",
  "Poojas einfach erklärt": "Poojas Simply Explained",
  "Abhishekam": "Abhishekam",
  "Beim Abhishekam wird Sri Nagapoosani Ambaal rituell gebadet und verehrt. Gläubige können am Empfang": "During Abhishekam, Sri Nagapoosani Ambaal is ritually bathed and worshipped. Devotees may obtain",
  "für 2 € Milch für das Abhishekam erhalten": "milk for the Abhishekam for €2",
  "und sie als Opfergabe darbringen.": "at reception and present it as an offering.",
  "Bei der Übergabe der Milch können die Gläubigen ihre persönlichen Wünsche und Gebete vorbringen. Mit der Opfergabe verbinden sie die Hoffnung, dass Sri Nagapoosani Ambaal ihre Bitten erhört und ihnen ihren Segen schenkt.": "When presenting the milk, devotees may express their personal wishes and prayers. Through this offering, they hope that Sri Nagapoosani Ambaal will hear their requests and grant them her blessings.",
  "Pooja": "Pooja",
  "Im Anschluss an das Abhishekam findet die gemeinsame Pooja statt. Dabei werden Mantras rezitiert sowie Deepa Aradhanai und besondere Verehrungen durchgeführt. Zum Abschluss erhalten die Gläubigen Vibhuti und Prasadam.": "The communal Pooja takes place after Abhishekam. Mantras are recited, followed by Deepa Aradhanai and other special forms of worship. At the end, devotees receive Vibhuti and Prasadam.",
  "Die jeweiligen Beginnzeiten finden Sie im Wochenplan.": "The respective starting times can be found in the weekly schedule.",
  "​": "​",
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
  "Sri Nagapoosani Ambaal – der erste Blick beim Betreten des Tempels": "Sri Nagapoosani Ambaal – the first sight upon entering the temple",
  "Diese Göttin sehen Besucherinnen und Besucher beim Betreten des Tempels. Hier findet das Abhishekam statt.": "Visitors see this form of the goddess upon entering the temple. This is where Abhishekam takes place.",
  "Besondere Festtage": "Special Festival Days",
  "Sri Nagapoosani Ambaal an Festtagen": "Sri Nagapoosani Ambaal on Festival Days",
  "Diese Darstellung der Göttin wird an besonderen heiligen Tagen und unter anderem beim Theer getragen.": "This form of the goddess is carried in procession on special holy days, including during the Theer festival.",
  "Ambaal im Aadipooram-Alankaram": "Ambaal in Aadipooram Adornment",
  "Pooja im Tempel": "Pooja at the Temple",
  "Deepa Aradhanai": "Deepa Aradhanai",
  "Festliche Verehrung": "Festival Worship",
  "Nadaswaram · Thavil Musik": "Nadaswaram · Thavil Music",
  "Gemeinschaft am Festtag": "Community on a Festival Day",
  "Unsere gemeinsame Zukunft": "Our Shared Future",
  "Die Vision eines eigenen Tempels": "Our Vision for a Permanent Temple",
  "Unser Sri Nagapoosani Ambaal Tempel befindet sich derzeit in einem angemieteten Gebäude in zentraler Lage der Krefelder Innenstadt. Der Tempel ist dadurch gut erreichbar, gleichzeitig stehen in der Umgebung jedoch nur begrenzte Parkmöglichkeiten zur Verfügung. Die derzeitigen Räumlichkeiten und der aktuelle Standort sind langfristig nicht passend für die Bedürfnisse einer wachsenden Tempelgemeinschaft und für größere religiöse Veranstaltungen. Dennoch ist dieser Ort für unsere Gemeinschaft sehr wertvoll.": "Our Sri Nagapoosani Ambaal Temple is currently located in rented premises in central Krefeld. This makes the temple easy to reach, but parking nearby is limited. In the long term, the current premises and location are not suitable for the needs of our growing temple community or for larger religious events. Nevertheless, this place remains very valuable to our community.",
  "Unsere Vision ist es, ein geeignetes Grundstück in Krefeld zu erwerben und darauf einen eigenen hinduistischen Tempel zu errichten. Der neue Tempel soll ein würdevoller und dauerhafter Ort für Poojas, religiöse Feste, kulturelle Veranstaltungen und gemeinschaftliches Leben werden.": "Our vision is to purchase a suitable plot of land in Krefeld and build our own Hindu temple. The new temple should become a dignified and permanent home for Poojas, religious festivals, cultural events and community gatherings.",
  "Unser Glaube und das religiöse Leben unseres Tempels sollen auch für kommende Generationen erhalten bleiben. Dafür möchten wir einen dauerhaften spirituellen Mittelpunkt schaffen. Über alle weiteren Schritte und den Fortschritt des Projekts werden wir transparent informieren.": "Our faith and the religious life of our temple should continue for future generations. We hope to create a permanent spiritual home for this purpose. We will provide transparent updates about the next steps and the progress of the project.",
  "Besucht uns": "Visit Us",
  "Kontakt und Anfahrt": "Contact and Directions",
  "Tamilischer Kulturverein Krefeld e.V.": "Tamil Cultural Association Krefeld e.V.",
  "· Tempel": "· Temple",
  "· Tempelverwalterin": "· Temple Administrator",
  "· Tempelpriester": "· Temple Priest",
  "Route öffnen": "Open Directions",
  "Route planen": "Get Directions",
  "Navigation auswählen": "Choose Navigation",
  "Wählen Sie Ihre bevorzugte Karten-App.": "Choose your preferred maps app.",
  "Impressum": "Legal Notice",
  "Datenschutz": "Privacy Policy"
};

const tamilAttributes = {
  "Zur Startseite": "முகப்புப் பக்கத்திற்குச் செல்லவும்",
  "Logo des Sri Nagapoosani Ambaal Tempels Krefeld": "கிறிபில்ட் ஸ்ரீ நாகபூசணி அம்பாள் ஆலயத்தின் சின்னம்",
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
  "Moolasthanam der Sri Nagapoosani Ambaal im Tempel Krefeld": "கிறிபில்ட் ஆலயத்தில் ஸ்ரீ நாகபூசணி அம்பாளின் மூலஸ்தானம்",
  "Sri Nagapoosani Ambaal während eines besonderen Festtages im Tempel Krefeld": "கிறிபில்ட் ஆலயத்தின் விசேட திருவிழாவில் ஸ்ரீ நாகபூசணி அம்பாள்",
  "Bildergalerie steuern": "படத்தொகுப்பை இயக்கவும்",
  "In der Bilderreihe zurück": "படவரிசையில் பின்னால் செல்லவும்",
  "In der Bilderreihe weiter": "படவரிசையில் முன்னால் செல்லவும்",
  "Weitere Einblicke aus unserem Tempel": "எமது ஆலயத்தின் மேலும் சில தரிசனங்கள்",
  "Ambaal im Aadipooram-Alankaram groß öffnen": "ஆடிப்பூர அலங்காரத்தில் அம்பாளின் படத்தைப் பெரிதாகத் திறக்கவும்",
  "Pooja im Tempel groß öffnen": "ஆலயப் பூஜை படத்தைப் பெரிதாகத் திறக்கவும்",
  "Deepa Aradhanai groß öffnen": "தீபாராதனை படத்தைப் பெரிதாகத் திறக்கவும்",
  "Festliche Verehrung groß öffnen": "விசேட வழிபாட்டு படத்தைப் பெரிதாகத் திறக்கவும்",
  "Nadaswaram · Thavil Musik groß öffnen": "நாதஸ்வரம் மற்றும் தவில் இசைப் படத்தைப் பெரிதாகத் திறக்கவும்",
  "Gemeinschaft am Festtag groß öffnen": "திருவிழா சமூகப் படத்தைப் பெரிதாகத் திறக்கவும்",
  "Bildergalerie in Großansicht": "படத்தொகுப்பைப் பெரிய காட்சியில் காணவும்",
  "Galerie schließen": "படத்தொகுப்பை மூடவும்",
  "Vorheriges Bild": "முந்தைய படம்",
  "Nächstes Bild": "அடுத்த படம்",
  "Sri Nagapoosani Ambaal im Aadipooram-Alankaram im Tempel Krefeld": "கிறிபில்ட் ஆலயத்தில் ஆடிப்பூர அலங்காரத்தில் ஸ்ரீ நாகபூசணி அம்பாள்",
  "Tempelpriester während einer Pooja vor Sri Nagapoosani Ambaal": "ஸ்ரீ நாகபூசணி அம்பாள் முன் பூஜை செய்யும் ஆலயக் குரு",
  "Tempelpriester bei der Deepa Aradhanai vor Sri Nagapoosani Ambaal": "ஸ்ரீ நாகபூசணி அம்பாள் முன் தீபாராதனை செய்யும் ஆலயக் குரு",
  "Zwei Tempelpriester während der festlichen Verehrung von Sri Nagapoosani Ambaal": "ஸ்ரீ நாகபூசணி அம்பாளுக்கு விசேட வழிபாடு செய்யும் இரு ஆலயக் குருக்கள்",
  "Musiker mit Nadaswaram und Thavil im Tempel Krefeld": "கிறிபில்ட் ஆலயத்தில் நாதஸ்வரம் மற்றும் தவில் இசைக்கலைஞர்கள்",
  "Tempelgemeinschaft während eines besonderen Festtages": "விசேட திருவிழாவின் போது ஆலயச் சமூகம்",
  "Routenplaner schließen": "வழிகாட்டியை மூடவும்",
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
  "Ambaal im Aadipooram-Alankaram groß öffnen": "Open Ambaal in Aadipooram adornment in a large view",
  "Pooja im Tempel groß öffnen": "Open Pooja at the temple in a large view",
  "Deepa Aradhanai groß öffnen": "Open Deepa Aradhanai in a large view",
  "Festliche Verehrung groß öffnen": "Open festival worship in a large view",
  "Nadaswaram · Thavil Musik groß öffnen": "Open Nadaswaram and Thavil music in a large view",
  "Gemeinschaft am Festtag groß öffnen": "Open the festival community photo in a large view",
  "Bildergalerie in Großansicht": "Photo gallery in large view",
  "Galerie schließen": "Close gallery",
  "Vorheriges Bild": "Previous image",
  "Nächstes Bild": "Next image",
  "Sri Nagapoosani Ambaal im Aadipooram-Alankaram im Tempel Krefeld": "Sri Nagapoosani Ambaal in Aadipooram adornment at the Krefeld temple",
  "Tempelpriester während einer Pooja vor Sri Nagapoosani Ambaal": "Temple priest during a Pooja before Sri Nagapoosani Ambaal",
  "Tempelpriester bei der Deepa Aradhanai vor Sri Nagapoosani Ambaal": "Temple priest performing Deepa Aradhanai before Sri Nagapoosani Ambaal",
  "Zwei Tempelpriester während der festlichen Verehrung von Sri Nagapoosani Ambaal": "Two temple priests during the festival worship of Sri Nagapoosani Ambaal",
  "Musiker mit Nadaswaram und Thavil im Tempel Krefeld": "Musicians playing Nadaswaram and Thavil at the Krefeld temple",
  "Tempelgemeinschaft während eines besonderen Festtages": "Temple community during a special festival day",
  "Routenplaner schließen": "Close route planner",
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
  ta: "ஸ்ரீ நாகபூசணி அம்பாள் ஆலயம் கிறிபில்ட்",
  en: "Sri Nagapoosani Ambaal Temple Krefeld"
};
const pageDescriptions = {
  de: "Sri Nagapoosani Ambaal Tempel Krefeld – ein Ort des Glaubens, der Verehrung und der Gemeinschaft.",
  ta: "கிறிபில்ட் ஸ்ரீ நாகபூசணி அம்பாள் ஆலயம் – இறைவழிபாடும் சமூக ஒற்றுமையும் நிறைந்த புனிதத் தலம்.",
  en: "Sri Nagapoosani Ambaal Temple Krefeld – a sacred place of worship, faith and community."
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

const routePlannerButton = document.querySelector("[data-route-planner]");
const routeDialog = document.querySelector("[data-route-dialog]");
const routeDialogClose = document.querySelector("[data-route-close]");

function updateRouteOptionsForDevice() {
  if (!routeDialog) return;
  const ua = navigator.userAgent || "";
  const isAndroid = /Android/i.test(ua);
  const appleMapsLink = routeDialog.querySelector('a[href*="maps.apple.com"]');
  if (appleMapsLink) appleMapsLink.hidden = isAndroid;
}

routePlannerButton?.addEventListener("click", () => {
  updateRouteOptionsForDevice();
  if (routeDialog && !routeDialog.open) routeDialog.showModal();
});
routeDialogClose?.addEventListener("click", () => routeDialog?.close());
routeDialog?.addEventListener("click", (event) => {
  if (event.target === routeDialog) routeDialog.close();
});
routeDialog?.querySelectorAll(".route-options a").forEach((link) => {
  link.addEventListener("click", () => routeDialog.close());
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
