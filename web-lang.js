document.addEventListener('DOMContentLoaded', function() {
    function qs(sel) { return document.querySelector(sel); }
    function qsa(sel) { return Array.from(document.querySelectorAll(sel)); }

    const webLangSelect = qs('#web-language');
    const formLangSelect = qs('#form-language');
    const navLinks = qsa('.nav-menu li a');
    const heroTitle = qs('.hero-content h2');
    const heroSubtitle = qs('.hero-content .subtitle');
    const heroDate = qs('.hero-content .date');
    const heroBtn = qs('#show-form');
    const formHeading = qs('.form-heading');
    const footerLinks = qsa('.footer-links a');
    const footerCopy = qs('.footer-copy');
    const submitBtn = qs('.submit-btn');
    const searchBar = qs('.search-bar');
    const websiteLangLabel = qs("label[for='web-language']");
    const voiceInputTitle = qs(".left-panel h3");
    const voiceInputSubtitle = qs(".left-panel p");
    const formDetailsHeading = qs(".right-panel h3");
  
    const uiText = {
      en: {
        home: 'Home', myFarm: 'My farm', todo: 'To-Do List', trend: 'Local Trend', feedback: 'Feedback',
        websiteLanguage: "Website Language:",
        heroTitle: 'AgroKheti', heroSubtitle: 'by PSA Content Desk', heroDate: 'September 15, 2025', heroBtn: 'Helping Farmers to build better',
        formHeading: 'Enter the Form Detail', footerLinks: ['Home', 'Schemes', 'Market Prices', 'Contact'], footerCopy: '© 2025 AgroKheti. All rights reserved.', submit: 'Submit', searchPlaceholder: 'Search...',
        voiceInputTitle: "Voice Input", voiceInputSubtitle: "Record your details in your local language.", formDetailsHeading: "Farm Details"
      },
      hi: {
        home: 'होम', myFarm: 'मेरा खेत', todo: 'कार्य सूची', trend: 'स्थानीय रुझान', feedback: 'फीडबैक',
        websiteLanguage: "वेबसाइट भाषा:",
        heroTitle: 'एग्रोखेती', heroSubtitle: 'पी.एस.ए. कंटेंट डेस्क द्वारा', heroDate: '22 सितम्बर 2025', heroBtn: 'किसानों को बेहतर बनाने में मदद',
        formHeading: 'फॉर्म विवरण दर्ज करें', footerLinks: ['होम', 'योजनाएं', 'बाजार कीमतें', 'संपर्क'], footerCopy: '© 2025 एग्रोखेती। सर्वाधिकार सुरक्षित।', submit: 'सबमिट करें', searchPlaceholder: 'खोजें...',
        voiceInputTitle: "ध्वनि इनपुट", voiceInputSubtitle: "अपनी जानकारी अपनी स्थानीय भाषा में रिकॉर्ड करें।", formDetailsHeading: "खेत का विवरण"
      },
      pa: {
        home: 'ਮੁੱਖ ਪੰਨਾ', myFarm: 'ਮੇਰਾ ਖੇਤ', todo: 'ਕਰਨ ਵਾਲੀ ਸੂਚੀ', trend: 'ਸਥਾਨਕ ਰੁਝਾਨ', feedback: 'ਫੀਡਬੈਕ',
        websiteLanguage: "ਵੈਬਸਾਈਟ ਭਾਸ਼ਾ:",
        heroTitle: 'ਐਗਰੋਖੇਤੀ', heroSubtitle: 'PSA ਸਮੱਗਰੀ ਡੈਸਕ ਦੁਆਰਾ', heroDate: '22 ਸਤੰਬਰ 2025', heroBtn: 'ਕਿਸਾਨਾਂ ਨੂੰ ਬਿਹਤਰ ਬਣਾਉਣ ਵਿੱਚ ਮਦਦ',
        formHeading: 'ਫਾਰਮ ਵੇਰਵੇ ਦਰਜ ਕਰੋ', footerLinks: ['ਮੁੱਖ ਪੰਨਾ', 'ਯੋਜਨਾਵਾਂ', 'ਬਜ਼ਾਰ ਕੀਮਤਾਂ', 'ਸੰਪਰਕ'], footerCopy: '© 2025 ਐਗਰੋਖੇਤੀ। ਸਭ ਅਧਿਕਾਰ ਰਾਖਵੇਂ।', submit: 'ਸਪੁਰਦ ਕਰੋ', searchPlaceholder: 'ਖੋਜੋ...',
        voiceInputTitle: "ਅਵਾਜ਼ ਇਨਪੁਟ", voiceInputSubtitle: "ਆਪਣੇ ਵੇਰਵੇ ਆਪਣੀ ਸਥਾਨਕ ਭਾਸ਼ਾ ਵਿੱਚ ਰਿਕਾਰਡ ਕਰੋ।", formDetailsHeading: "ਖੇਤ ਦੇ ਵੇਰਵੇ"
      },
      mr: {
        home: 'मुख्यपृष्ठ', myFarm: 'माझा शेत', todo: 'काम सूची', trend: 'स्थानिक ट्रेंड', feedback: 'अभिप्राय',
        websiteLanguage: "वेबसाइट भाषा:",
        heroTitle: 'ॲग्रोखेती', heroSubtitle: 'पीएसए कंटेंट डेस्क द्वारे', heroDate: '22 सप्टेंबर, 2025', heroBtn: 'शेतकऱ्यांसाठी उत्तम मदत',
        formHeading: 'फॉर्म तपशील प्रविष्ट करा', footerLinks: ['मुख्यपृष्ठ', 'योजना', 'बाजारभाव', 'संपर्क'], footerCopy: '© 2025 ॲग्रोखेती. सर्व हक्क राखीव.', submit: 'सादर करा', searchPlaceholder: 'शोधा...',
        voiceInputTitle: "व्हॉइस इनपुट", voiceInputSubtitle: "आपले तपशील आपल्या स्थानिक भाषेत रेकॉर्ड करा.", formDetailsHeading: "शेतीचे तपशील"
      },
      gu: {
        home: 'ઘર', myFarm: 'મારું ખેતર', todo: 'કાર્ય સૂચિ', trend: 'સ્થાનિક વલણ', feedback: 'પ્રતિભાવ',
        websiteLanguage: "વેબસાઇટ ભાષા:",
        heroTitle: 'એગ્રોખેતી', heroSubtitle: 'પીએસએ કન્ટેન્ટ ડેસ્ક દ્વારા', heroDate: '22 સપ્ટેમ્બર, 2025', heroBtn: 'ખેડૂતોને વધુ સારું બનાવવામાં મદદ',
        formHeading: 'ફોર્મ વિગતો દાખલ કરો', footerLinks: ['ઘર', 'યોજનાઓ', 'બજારના ભાવ', 'સંપર્ક'], footerCopy: '© 2025 એગ્રોખેતી. સર્વાધિકાર સુરક્ષિત.', submit: 'સબમિટ કરો', searchPlaceholder: 'શોધો...',
        voiceInputTitle: "વોઇસ ઇનપુટ", voiceInputSubtitle: "તમારી વિગતો તમારી સ્થાનિક ભાષામાં રેકોર્ડ કરો.", formDetailsHeading: "ખેતીની વિગતો"
      },
      bn: {
        home: 'হোম', myFarm: 'আমার খামার', todo: 'করার তালিকা', trend: 'স্থানীয় ট্রেন্ড', feedback: 'ফিডব্যাক',
        websiteLanguage: "ওয়েবসাইট ভাষা:",
        heroTitle: 'অ্যাগ্রোখেতি', heroSubtitle: 'পিএসএ কন্টেন্ট ডেস্ক দ্বারা', heroDate: '22 সেপ্টেম্বর, 2025', heroBtn: 'কৃষকদের উন্নত করতে সাহায্য',
        formHeading: 'ফর্মের বিবরণ লিখুন', footerLinks: ['হোম', 'স্কিম', 'বাজার মূল্য', 'যোগাযোগ'], footerCopy: '© 2025 অ্যাগ্রোখেতি. সর্বস্বত্ব সংরক্ষিত।', submit: 'জমা দিন', searchPlaceholder: 'অনুসন্ধান...',
        voiceInputTitle: "ভয়েস ইনপুট", voiceInputSubtitle: "আপনার স্থানীয় ভাষায় আপনার বিবরণ রেকর্ড করুন।", formDetailsHeading: "খামারের বিবরণ"
      },
      ta: {
        home: 'முகப்பு', myFarm: 'எனது பண்ணை', todo: 'செய்ய வேண்டியவை', trend: 'உள்ளூர் போக்கு', feedback: 'பின்னூட்டம்',
        websiteLanguage: "இணையதள மொழி:",
        heroTitle: 'அக்ரோகேதி', heroSubtitle: 'பிஎஸ்ஏ கன்டென்ட் டெஸ்க் மூலம்', heroDate: 'செப்டம்பர் 22, 2025', heroBtn: 'விவசாயிகளுக்கு மேம்படுத்த உதவும்',
        formHeading: 'படிவ விவரங்களை உள்ளிடவும்', footerLinks: ['முகப்பு', 'திட்டங்கள்', 'சந்தை விலைகள்', 'தொடர்பு'], footerCopy: '© 2025 அக்ரோகேதி. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.', submit: 'சமர்ப்பிக்கவும்', searchPlaceholder: 'தேடல்...',
        voiceInputTitle: "குரல் உள்ளீடு", voiceInputSubtitle: "உங்கள் உள்ளூர் மொழியில் உங்கள் விவரங்களை பதிவு செய்யவும்.", formDetailsHeading: "பண்ணை விவரங்கள்"
      },
      te: {
        home: 'హోమ్', myFarm: 'నా పొలం', todo: 'చేయవలసినవి', trend: 'స్థానిక పోకడ', feedback: 'అభిప్రాయం',
        websiteLanguage: "వెబ్‌సైట్ భాష:",
        heroTitle: 'ఆగ్రోఖేతి', heroSubtitle: 'పీఎస్ఏ కంటెంట్ డెస్క్ ద్వారా', heroDate: 'సెప్టెంబర్ 22, 2025', heroBtn: 'రైతులకు మెరుగైన సహాయం',
        formHeading: 'ఫారం వివరాలు నమోదు చేయండి', footerLinks: ['హోమ్', 'పథకాలు', 'బజార్ ధరలు', 'సంప్రదించండి'], footerCopy: '© 2025 ఆగ్రోఖేతి. అన్ని హక్కులు రిజర్వ్ చేయబడినవి.', submit: 'సమర్పించు', searchPlaceholder: 'వెతకండి...',
        voiceInputTitle: "వాయిస్ ఇన్పుట్", voiceInputSubtitle: "మీ వివరాలను మీ స్థానిక భాషలో రికార్డ్ చేయండి.", formDetailsHeading: "పొలం వివరాలు"
      },
      kn: {
        home: 'ಮನೆ', myFarm: 'ನನ್ನ ಹೊಲ', todo: 'ಮಾಡಬೇಕಾದ ಕೆಲಸ', trend: 'ಸ್ಥಳೀಯ ಟ್ರೆಂಡ್', feedback: 'ಪ್ರತಿಕ್ರಿಯೆ',
        websiteLanguage: "ವೆಬ್ಸೈಟ್ ಭಾಷೆ:",
        heroTitle: 'ಅಗ್ರಿಖೇತಿ', heroSubtitle: 'ಪಿಎಸ್ಎ ಕಂಟೆಂಟ್ ಡೆಸ್ಕ್ ಮೂಲಕ', heroDate: 'ಸೆಪ್ಟೆಂಬರ್ 22, 2025', heroBtn: 'ರೈತರಿಗೆ ಉತ್ತಮ ಸಹಾಯ ಮಾಡಲು',
        formHeading: 'ಫಾರ್ಮ್ ವಿವರಗಳನ್ನು ನಮೂದಿಸಿ', footerLinks: ['ಮನೆ', 'ಯೋಜನೆಗಳು', 'ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳು', 'ಸಂಪರ್ಕ'], footerCopy: '© 2025 ಅಗ್ರಿಖೇತಿ. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.', submit: 'ಸಲ್ಲಿಸಿ', searchPlaceholder: 'ಹುಡುಕಿ...',
        voiceInputTitle: "ಧ್ವನಿ ಇನ್ಪುಟ್", voiceInputSubtitle: "ನಿಮ್ಮ ಸ್ಥಳೀಯ ಭಾಷೆಯಲ್ಲಿ ನಿಮ್ಮ ವಿವರಗಳನ್ನು ರೆಕಾರ್ಡ್ ಮಾಡಿ.", formDetailsHeading: "ಫಾರ್ಮ್ ವಿವರಗಳು"
      },
      ml: {
        home: 'ഹോം', myFarm: 'എന്റെ കൃഷി', todo: 'ചെയ്യേണ്ട കാര്യങ്ങൾ', trend: 'പ്രാദേശിക പ്രവണത', feedback: 'അഭിപ്രായം',
        websiteLanguage: "വെബ്സൈറ്റ് ഭാഷ:",
        heroTitle: 'അഗ്രോഖേതി', heroSubtitle: 'പിഎസ്എ കൺടെന്റ് ഡെസ്ക് വഴി', heroDate: 'സെപ്റ്റംബർ 22, 2025', heroBtn: 'കർഷകരെ മെച്ചപ്പെടുത്താൻ സഹായിക്കുക',
        formHeading: 'ഫോം വിശദാംശങ്ങൾ നൽകുക', footerLinks: ['ഹോം', 'പദ്ധതികൾ', 'വിപണി വിലകൾ', 'ബന്ധപ്പെടുക'], footerCopy: '© 2025 അഗ്രോഖേതി. എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം.', submit: 'സമർപ്പിക്കുക', searchPlaceholder: 'തിരയുക...',
        voiceInputTitle: "വോയ്‌സ് ഇൻപുട്ട്", voiceInputSubtitle: "നിങ്ങളുടെ പ്രാദേശിക ഭാഷയിൽ നിങ്ങളുടെ വിവരങ്ങൾ രേഖപ്പെടുത്തുക.", formDetailsHeading: "കൃഷിഭൂമിയുടെ വിവരങ്ങൾ"
      },
      or: {
        home: 'ମୁଖ୍ୟପୃଷ୍ଠା', myFarm: 'ମୋର କ୍ଷେତ', todo: 'କାର୍ଯ୍ୟ କରିବା ତାଲିକା', trend: 'ସ୍ଥାନୀୟ ଟ୍ରେଣ୍ଡ', feedback: 'ଫିଡବ୍ୟାକ',
        websiteLanguage: "ୱେବସାଇଟ ଭାଷା:",
        heroTitle: 'ଆଗ୍ରୋଖେତି', heroSubtitle: 'ପିଏସଏ କଣ୍ଟେଣ୍ଟ ଡେସ୍କ ଦ୍ୱାରା', heroDate: 'ସେପ୍ଟେମ୍ବର 22, 2025', heroBtn: 'ଚାଷୀମାନଙ୍କୁ ଉନ୍ନତ କରିବାରେ ସାହାଯ୍ୟ',
        formHeading: 'ଫର୍ମର ବିବରଣୀ ଦିଅନ୍ତୁ', footerLinks: ['ମୁଖ୍ୟପୃଷ୍ଠା', 'ଯୋଜନା', 'ବଜାର ମୂଲ୍ୟ', 'ଯୋଗାଯୋଗ'], footerCopy: '© 2025 ଆଗ୍ରୋଖେତି. ସର୍ବସତ୍ତ୍ବ ସଂରକ୍ଷିତ।', submit: 'ଦାଖଲ କରନ୍ତୁ', searchPlaceholder: 'ଖୋଜ...',
        voiceInputTitle: "ଭଏସ ଇନପୁଟ", voiceInputSubtitle: "ଆପଣଙ୍କ ସ୍ଥାନୀୟ ଭାଷାରେ ଆପଣଙ୍କ ବିବରଣୀ ରେକର୍ଡ କରନ୍ତୁ।", formDetailsHeading: "କ୍ଷେତର ବିବରଣୀ"
      },
      as: {
        home: 'গৃহ', myFarm: 'মোৰ পাম', todo: 'কৰিবলগীয়া তালিকা', trend: 'স্থানীয় প্ৰৱণতা', feedback: 'প্ৰতিক্ৰিয়া',
        websiteLanguage: "ৱেবছাইটৰ ভাষা:",
        heroTitle: 'এগ্ৰোখেতি', heroSubtitle: 'পিএছএ কন্টেন্ট ডেস্ক দ্বাৰা', heroDate: '22 ছেপ্টেম্বৰ, 2025', heroBtn: 'কৃষকসকলক উন্নত কৰাত সহায় কৰা',
        formHeading: 'ফৰ্মৰ বিৱৰণ দিয়ক', footerLinks: ['গৃহ', 'আঁচনি', 'বজাৰৰ দাম', 'যোগাযোগ'], footerCopy: '© 2025 এগ্ৰোখেতি. সকলো অধিকাৰ সংৰক্ষিত।', submit: 'দাখিল কৰক', searchPlaceholder: 'সন্ধান...',
        voiceInputTitle: "ভইচ ইনপুট", voiceInputSubtitle: "আপোনাৰ স্থানীয় ভাষাত আপোনাৰ বিৱৰণ ৰেকৰ্ড কৰক।", formDetailsHeading: "পামৰ বিৱৰণ"
      },
      ur: {
        home: 'صفحہ اول', myFarm: 'میرا کھیت', todo: 'کرنے کی فہرست', trend: 'مقامی رجحان', feedback: 'رائے',
        websiteLanguage: "ویب سائٹ کی زبان:",
        heroTitle: 'ایگروکھیتی', heroSubtitle: 'پی ایس اے کنٹینٹ ڈیسک کے ذریعے', heroDate: '22 ستمبر، 2025', heroBtn: 'کاشتکاروں کو بہتر بنانے میں مدد کرنا',
        formHeading: 'فارم کی تفصیل درج کریں', footerLinks: ['صفحہ اول', 'اسکیمیں', 'بازار کی قیمتیں', 'رابطہ'], footerCopy: '© 2025 ایگروکھیتی. تمام حقوق محفوظ ہیں۔', submit: 'جمع کرائیں', searchPlaceholder: 'تلاش کریں...',
        voiceInputTitle: "صوتی ان پٹ", voiceInputSubtitle: "اپنی تفصیلات اپنی مقامی زبان میں ریکارڈ کریں۔", formDetailsHeading: "کھیت کی تفصیلات"
      },
      sd: {
        home: 'گھر', myFarm: 'منهنجو کھیت', todo: 'ڪم جي فهرست', trend: 'مقامی رجحان', feedback: 'رايا',
        websiteLanguage: "ويب سائيٽ جي ٻولي:",
        heroTitle: 'ايگروکھیتي', heroSubtitle: 'پي ايس اي ڪنٽينٽ ڊيسڪ جي طرفان', heroDate: '22 سيپٽمبر, 2025', heroBtn: 'هاري کي بهتر بڻائڻ ۾ مدد ڪريو',
        formHeading: 'فارم جا تفصيل داخل ڪريو', footerLinks: ['گھر', 'اسڪيمون', 'مارڪيٽ جا قدر', 'رابطو'], footerCopy: '© 2025 ايگروکھیتي. سڀ حق محفوظ آھن.', submit: 'جمع ڪرايو', searchPlaceholder: 'ڳولهيو...',
        voiceInputTitle: "آواز جي داخلا", voiceInputSubtitle: "پنهنجا تفصيل پنهنجي مقامي ٻولي ۾ رڪارڊ ڪريو.", formDetailsHeading: "کھیت جا تفصيل"
      },
      sa: {
        home: 'गृहम्', myFarm: 'मम क्षेत्रम्', todo: 'करणीयसूची', trend: 'स्थानीयप्रवृत्तिः', feedback: 'प्रतिपुष्टिः',
        websiteLanguage: "जालपुटभाषा:",
        heroTitle: 'कृषिभूमः', heroSubtitle: 'पीएसए विषयवस्तु-डेस्कद्वारा', heroDate: 'सेप्टेम्बर् 22, 2025', heroBtn: 'कृषकान् उन्नतं कर्तुं साहाय्यम्',
        formHeading: 'रूपस्य विवरणं प्रविशतु', footerLinks: ['गृहम्', 'योजनाः', 'आपणमूल्यानि', 'सम्पर्कः'], footerCopy: '© 2025 कृषिभूमः। सर्वे अधिकाराः सुरक्षिताः।', submit: 'प्रस्तुतम्', searchPlaceholder: 'अन्वेषणम्...',
        voiceInputTitle: "ध्वनि-निवेशः", voiceInputSubtitle: "स्वतः विवरणं स्वभाषया अभिलेखयतु।", formDetailsHeading: "कृषिक्षेत्रविवरणानि"
      },
      ks: {
        home: 'گَرٕ', myFarm: 'میون کھیت', todo: 'کرنچۍ ہَنز فہرست', trend: 'مُقامی روٗج', feedback: 'رائے',
        websiteLanguage: "ویب سائٹ چھہِ زبان:",
        heroTitle: 'ایگروکھیت', heroSubtitle: 'پی ایس اے کانٹینٹ ڈیسک سٕتی', heroDate: '۲۲ سَتَمبَر، ۲۰۲۵', heroBtn: 'زٔمین وٲلؠن بہتر بناونہٕ خاطرٕ مدد',
        formHeading: 'فارم چھُ تفصیل درج کرُن', footerLinks: ['گَرٕ', 'سکیمہٕ', 'بازارٕچ قٲمَتہٕ', 'رٲبطہٕ'], footerCopy: '© 2025 ایگروکھیت. سٲرِوٕے حقٕ چھِ محفوٗظ.', submit: 'جمع کرُن', searchPlaceholder: 'چھان چھوٚل...',
        voiceInputTitle: "آواز دٲخل کرُن", voiceInputSubtitle: "تۄہندِ تفصِیل تہِ پٲٹھی چھِ ریکارڈ کرِتھ یٕم کٔشیٖرؠ زَبانہِ مَنٛز۔", formDetailsHeading: "کھیت چھِ تفصیل"
      },
      kok: {
        home: 'घर', myFarm: 'म्हाजें शेत', todo: 'करपाची वळेरी', trend: 'स्थानिक ट्रेंड', feedback: 'फीडबॅक',
        websiteLanguage: "वेबसाइट भास:",
        heroTitle: 'अग्रोखेती', heroSubtitle: 'पी.एस.ए. कंटेंट डेस्क वरवीं', heroDate: '22 सप्टेंबर, 2025', heroBtn: 'शेतकामत्यांक बरे करपाक मदत',
        formHeading: 'फॉर्म तपशील घालात', footerLinks: ['घर', 'योजना', 'बाजारभाव', 'संपर्क'], footerCopy: '© 2025 अग्रोखेती. सगळे हक्क राखून दवरल्यात.', submit: 'दिवा', searchPlaceholder: 'सोद...',
        voiceInputTitle: "आवाज घालप", voiceInputSubtitle: "तुमची माहिती तुमच्या स्थानिक भाशेंत रेकॉर्ड करा.", formDetailsHeading: "शेताचे तपशील"
      },
      mai: {
        home: 'घर', myFarm: 'हमर खेत', todo: 'काजक सूची', trend: 'स्थानीय प्रवृत्ति', feedback: 'प्रतिक्रिया',
        websiteLanguage: "वेबसाइटक भाषा:",
        heroTitle: 'एग्रोखेती', heroSubtitle: 'पीएसए कंटेंट डेस्क द्वारा', heroDate: '22 सितम्बर, 2025', heroBtn: 'किसान केँ नीक बनाबए में मदद',
        formHeading: 'फॉर्मक विवरण भरु', footerLinks: ['घर', 'योजना', 'बाजारक दाम', 'संपर्क'], footerCopy: '© 2025 एग्रोखेती. सर्वे अधिकार सुरक्षित अछि.', submit: 'जमा करु', searchPlaceholder: 'खोजु...',
        voiceInputTitle: "आवाज इनपुट", voiceInputSubtitle: "अपन विवरण अपन स्थानीय भाषामे रिकॉर्ड करु।", formDetailsHeading: "खेतक विवरण"
      },
      ne: {
        home: 'गृह पृष्ठ', myFarm: 'मेरो फार्म', todo: 'गर्नुपर्ने काम', trend: 'स्थानीय प्रचलन', feedback: 'प्रतिक्रिया',
        websiteLanguage: "वेबसाइटको भाषा:",
        heroTitle: 'एग्रोखेती', heroSubtitle: 'पीएसए कन्टेन्ट डेस्क द्वारा', heroDate: 'सेप्टेम्बर 22, 2025', heroBtn: 'किसानहरूलाई अझ राम्रो बनाउन मद्दत',
        formHeading: 'फारमको विवरण प्रविष्ट गर्नुहोस्', footerLinks: ['गृह पृष्ठ', 'योजना', 'बजार मूल्य', 'सम्पर्क'], footerCopy: '© 2025 एग्रोखेती. सबै अधिकार सुरक्षित छन्.', submit: 'पेश गर्नुहोस्', searchPlaceholder: 'खोज्नुहोस्...',
        voiceInputTitle: "आवाज इनपुट", voiceInputSubtitle: "आफ्नो विवरण आफ्नो स्थानीय भाषामा रेकर्ड गर्नुहोस्।", formDetailsHeading: "फार्म विवरण"
      }
    };
  
    function applyUIText(lang) {
      const t = uiText[lang] || uiText.en;
      if (navLinks[0]) navLinks[0].textContent = t.home;
      if (navLinks[1]) navLinks[1].textContent = t.myFarm;
      if (navLinks[2]) navLinks[2].textContent = t.todo;
      if (navLinks[3]) navLinks[3].textContent = t.trend;
      if (navLinks[4]) navLinks[4].textContent = t.feedback;
      if (websiteLangLabel) websiteLangLabel.textContent = t.websiteLanguage;
      if (heroTitle) heroTitle.textContent = t.heroTitle;
      if (heroSubtitle) heroSubtitle.textContent = t.heroSubtitle;
      if (heroDate) heroDate.textContent = t.heroDate;
      if (heroBtn) heroBtn.textContent = t.heroBtn;
      if (formHeading) formHeading.textContent = t.formHeading;
      if (footerLinks.length && t.footerLinks) footerLinks.forEach((el,i)=> el.textContent = t.footerLinks[i] || el.textContent);
      if (footerCopy) footerCopy.textContent = t.footerCopy;
      if (submitBtn) submitBtn.textContent = t.submit;
      if (searchBar) searchBar.placeholder = t.searchPlaceholder;
      if (voiceInputTitle) voiceInputTitle.textContent = t.voiceInputTitle;
      if (voiceInputSubtitle) voiceInputSubtitle.textContent = t.voiceInputSubtitle;
      if (formDetailsHeading) formDetailsHeading.textContent = t.formDetailsHeading;
      document.documentElement.lang = lang;
    }
  
    function syncAll(lang) {
      applyUIText(lang);
      if (formLangSelect && formLangSelect.value !== lang) {
        formLangSelect.value = lang;
        if (typeof window.updateFormLabels === 'function') window.updateFormLabels(lang);
        if (typeof window.updateFormOptions === 'function') window.updateFormOptions(lang);
      }
      if (webLangSelect && webLangSelect.value !== lang) webLangSelect.value = lang;
    }
  
    if (webLangSelect) webLangSelect.addEventListener('change', function(){ syncAll(this.value); });
    if (formLangSelect) formLangSelect.addEventListener('change', function(){ syncAll(this.value); });
  
    const initial = (webLangSelect && webLangSelect.value) || (formLangSelect && formLangSelect.value) || 'en';
    syncAll(initial);
  });
