// Robust web language switching
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

  const uiText = {
    en: {
      home: 'Home', myFarm: 'My farm', todo: 'To-Do List', trend: 'Local Trend', feedback: 'Feedback',
      heroTitle: 'AgroKheti', heroSubtitle: 'by PSA Content Desk', heroDate: 'September 15, 2025', heroBtn: 'Helping Farmes to build better',
      formHeading: 'Enter the Form Detail', footerLinks: ['Home', 'Schemes', 'Market Prices', 'Contact'], footerCopy: '© 2025 AgroKheti. All rights reserved.', submit: 'Submit', searchPlaceholder: 'Search...'
    },
    hi: {
      home: 'होम', myFarm: 'मेरा खेत', todo: 'कार्य सूची', trend: 'स्थानीय रुझान', feedback: 'प्रतिक्रिया',
      heroTitle: 'एग्रोखेती', heroSubtitle: 'पीएसए कंटेंट डेस्क द्वारा', heroDate: '15 सितम्बर 2025', heroBtn: 'किसानों की मदद के लिए',
      formHeading: 'फॉर्म विवरण दर्ज करें', footerLinks: ['होम', 'योजनाएं', 'बाजार कीमतें', 'संपर्क'], footerCopy: '© 2025 एग्रोखेती। सर्वाधिकार सुरक्षित।', submit: 'सबमिट करें', searchPlaceholder: 'खोजें...'
    },
    pa: {
      home: 'ਮੁੱਖ ਪੰਨਾ', myFarm: 'ਮੇਰਾ ਖੇਤ', todo: 'ਕਰਨ ਵਾਲੀ ਸੂਚੀ', trend: 'ਸਥਾਨਕ ਰੁਝਾਨ', feedback: 'ਫੀਡਬੈਕ',
      heroTitle: 'ਐਗਰੋਖੇਤੀ', heroSubtitle: 'PSA ਸਮੱਗਰੀ ਡੈਸਕ ਦੁਆਰਾ', heroDate: '15 ਸਤੰਬਰ 2025', heroBtn: 'ਕਿਸਾਨਾਂ ਦੀ ਮਦਦ ਲਈ',
      formHeading: 'ਫਾਰਮ ਵੇਰਵਾ ਦਰਜ ਕਰੋ', footerLinks: ['ਮੁੱਖ ਪੰਨਾ', 'ਯੋਜਨਾਵਾਂ', 'ਬਾਜ਼ਾਰ ਕਿੰਮਤ', 'ਸੰਪਰਕ'], footerCopy: '© 2025 ਐਗਰੋਖੇਤੀ। ਸਭ ਅਧਿਕਾਰ ਰਾਖਵੇਂ।', submit: 'ਜਮ੍ਹਾਂ ਕਰੋ', searchPlaceholder: 'ਖੋਜੋ...'
    },
    mr: {
      home: 'मुख्यपृष्ठ', myFarm: 'माझा शेत', todo: 'काम सूची', trend: 'स्थानिक ट्रेंड', feedback: 'अभिप्राय',
      heroTitle: 'ॲग्रोखेती', heroSubtitle: 'पीएसए कंटेंट डेस्क द्वारे', heroDate: '22 सप्टेंबर, 2025', heroBtn: 'शेतकऱ्यांसाठी उत्तम मदत',
      formHeading: 'फॉर्म तपशील प्रविष्ट करा', footerLinks: ['मुख्यपृष्ठ', 'योजना', 'बाजारभाव', 'संपर्क'], footerCopy: '© 2025 ॲग्रोखेती. सर्व हक्क राखीव.', submit: 'सादर करा', searchPlaceholder: 'शोधा...',
    },
    gu: {
      home: 'ઘર', myFarm: 'મારું ખેતર', todo: 'કાર્ય સૂચિ', trend: 'સ્થાનિક વલણ', feedback: 'પ્રતિભાવ',
      heroTitle: 'એગ્રોખેતી', heroSubtitle: 'પીએસએ કન્ટેન્ટ ડેસ્ક દ્વારા', heroDate: '22 સપ્ટેમ્બર, 2025', heroBtn: 'ખેડૂતોને વધુ સારું બનાવવામાં મદદ',
      formHeading: 'ફોર્મ વિગતો દાખલ કરો', footerLinks: ['ઘર', 'યોજનાઓ', 'બજારના ભાવ', 'સંપર્ક'], footerCopy: '© 2025 એગ્રોખેતી. સર્વાધિકાર સુરક્ષિત.', submit: 'સબમિટ કરો', searchPlaceholder: 'શોધો...',
    },
    bn: {
      home: 'হোম', myFarm: 'আমার খামার', todo: 'করার তালিকা', trend: 'স্থানীয় ট্রেন্ড', feedback: 'ফিডব্যাক',
      heroTitle: 'অ্যাগ্রোখেতি', heroSubtitle: 'পিএসএ কন্টেন্ট ডেস্ক দ্বারা', heroDate: '22 সেপ্টেম্বর, 2025', heroBtn: 'কৃষকদের উন্নত করতে সাহায্য',
      formHeading: 'ফর্মের বিবরণ লিখুন', footerLinks: ['হোম', 'স্কিম', 'বাজার মূল্য', 'যোগাযোগ'], footerCopy: '© 2025 অ্যাগ্রোখেতি. সর্বস্বত্ব সংরক্ষিত।', submit: 'জমা দিন', searchPlaceholder: 'অনুসন্ধান...',
    },
    ta: {
      home: 'முகப்பு', myFarm: 'எனது பண்ணை', todo: 'செய்ய வேண்டியவை', trend: 'உள்ளூர் போக்கு', feedback: 'பின்னூட்டம்',
      heroTitle: 'அக்ரோகேதி', heroSubtitle: 'பிஎஸ்ஏ கன்டென்ட் டெஸ்க் மூலம்', heroDate: 'செப்டம்பர் 22, 2025', heroBtn: 'விவசாயிகளுக்கு மேம்படுத்த உதவும்',
      formHeading: 'படிவ விவரங்களை உள்ளிடவும்', footerLinks: ['முகப்பு', 'திட்டங்கள்', 'சந்தை விலைகள்', 'தொடர்பு'], footerCopy: '© 2025 அக்ரோகேதி. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.', submit: 'சமர்ப்பிக்கவும்', searchPlaceholder: 'தேடல்...',
    },
    te: {
      home: 'హోమ్', myFarm: 'నా పొలం', todo: 'చేయవలసినవి', trend: 'స్థానిక పోకడ', feedback: 'అభిప్రాయం',
      heroTitle: 'ఆగ్రోఖేతి', heroSubtitle: 'పీఎస్ఏ కంటెంట్ డెస్క్ ద్వారా', heroDate: 'సెప్టెంబర్ 22, 2025', heroBtn: 'రైతులకు మెరుగైన సహాయం',
      formHeading: 'ఫారం వివరాలు నమోదు చేయండి', footerLinks: ['హోమ్', 'పథకాలు', 'బజార్ ధరలు', 'సంప్రదించండి'], footerCopy: '© 2025 ఆగ్రోఖేతి. అన్ని హక్కులు రిజర్వ్ చేయబడినవి.', submit: 'సమర్పించు', searchPlaceholder: 'వెతకండి...',
    },
    kn: {
      home: 'ಮನೆ', myFarm: 'ನನ್ನ ಹೊಲ', todo: 'ಮಾಡಬೇಕಾದ ಕೆಲಸ', trend: 'ಸ್ಥಳೀಯ ಟ್ರೆಂಡ್', feedback: 'ಪ್ರತಿಕ್ರಿಯೆ',
      heroTitle: 'ಅಗ್ರಿಖೇತಿ', heroSubtitle: 'ಪಿಎಸ್ಎ ಕಂಟೆಂಟ್ ಡೆಸ್ಕ್ ಮೂಲಕ', heroDate: 'ಸೆಪ್ಟೆಂಬರ್ 22, 2025', heroBtn: 'ರೈತರಿಗೆ ಉತ್ತಮ ಸಹಾಯ ಮಾಡಲು',
      formHeading: 'ಫಾರ್ಮ್ ವಿವರಗಳನ್ನು ನಮೂದಿಸಿ', footerLinks: ['ಮನೆ', 'ಯೋಜನೆಗಳು', 'ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳು', 'ಸಂಪರ್ಕ'], footerCopy: '© 2025 ಅಗ್ರಿಖೇತಿ. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.', submit: 'ಸಲ್ಲಿಸಿ', searchPlaceholder: 'ಹುಡುಕಿ...',
    },
    ml: {
      home: 'ഹോം', myFarm: 'എന്റെ കൃഷി', todo: 'ചെയ്യേണ്ട കാര്യങ്ങൾ', trend: 'പ്രാദേശിക പ്രവണത', feedback: 'അഭിപ്രായം',
      heroTitle: 'അഗ്രോഖേതി', heroSubtitle: 'പിഎസ്എ കൺടെന്റ് ഡെസ്ക് വഴി', heroDate: 'സെപ്റ്റംബർ 22, 2025', heroBtn: 'കർഷകരെ മെച്ചപ്പെടുത്താൻ സഹായിക്കുക',
      formHeading: 'ഫോം വിശദാംശങ്ങൾ നൽകുക', footerLinks: ['ഹോം', 'പദ്ധതികൾ', 'വിപണി വിലകൾ', 'ബന്ധപ്പെടുക'], footerCopy: '© 2025 അഗ്രോഖേതി. എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം.', submit: 'സമർപ്പിക്കുക', searchPlaceholder: 'തിരയുക...',
    },
    or: {
      home: 'ମୁଖ୍ୟପୃଷ୍ଠା', myFarm: 'ମୋର କ୍ଷେତ', todo: 'କାର୍ଯ୍ୟ କରିବା ତାଲିକା', trend: 'ସ୍ଥାନୀୟ ଟ୍ରେଣ୍ଡ', feedback: 'ଫିଡବ୍ୟାକ',
      heroTitle: 'ଆଗ୍ରୋଖେତି', heroSubtitle: 'ପିଏସଏ କଣ୍ଟେଣ୍ଟ ଡେସ୍କ ଦ୍ୱାରା', heroDate: 'ସେପ୍ଟେମ୍ବର 22, 2025', heroBtn: 'ଚାଷୀମାନଙ୍କୁ ଉନ୍ନତ କରିବାରେ ସାହାଯ୍ୟ',
      formHeading: 'ଫର୍ମର ବିବରଣୀ ଦିଅନ୍ତୁ', footerLinks: ['ମୁଖ୍ୟପୃଷ୍ଠା', 'ଯୋଜନା', 'ବଜାର ମୂଲ୍ୟ', 'ଯୋଗାଯୋଗ'], footerCopy: '© 2025 ଆଗ୍ରୋଖେତି. ସର୍ବସତ୍ତ୍ବ ସଂରକ୍ଷିତ।', submit: 'ଦାଖଲ କରନ୍ତୁ', searchPlaceholder: 'ଖୋଜ...',
    },
    as: {
      home: 'গৃহ', myFarm: 'মোৰ পাম', todo: 'কৰিবলগীয়া তালিকা', trend: 'স্থানীয় প্ৰৱণতা', feedback: 'প্ৰতিক্ৰিয়া',
      heroTitle: 'এগ্ৰোখেতি', heroSubtitle: 'পিএছএ কন্টেন্ট ডেস্ক দ্বাৰা', heroDate: '22 ছেপ্টেম্বৰ, 2025', heroBtn: 'কৃষকসকলক উন্নত কৰাত সহায় কৰা',
      formHeading: 'ফৰ্মৰ বিৱৰণ দিয়ক', footerLinks: ['গৃহ', 'আঁচনি', 'বজাৰৰ দাম', 'যোগাযোগ'], footerCopy: '© 2025 এগ্ৰোখেতি. সকলো অধিকাৰ সংৰক্ষিত।', submit: 'দাখিল কৰক', searchPlaceholder: 'সন্ধান...',
    },
    ur: {
      home: 'صفحہ اول', myFarm: 'میرا کھیت', todo: 'کرنے کی فہرست', trend: 'مقامی رجحان', feedback: 'رائے',
      heroTitle: 'ایگروکھیتی', heroSubtitle: 'پی ایس اے کنٹینٹ ڈیسک کے ذریعے', heroDate: '22 ستمبر، 2025', heroBtn: 'کاشتکاروں کو بہتر بنانے میں مدد کرنا',
      formHeading: 'فارم کی تفصیل درج کریں', footerLinks: ['صفحہ اول', 'اسکیمیں', 'بازار کی قیمتیں', 'رابطہ'], footerCopy: '© 2025 ایگروکھیتی. تمام حقوق محفوظ ہیں۔', submit: 'جمع کرائیں', searchPlaceholder: 'تلاش کریں...',
    },
    sd: {
      home: 'گھر', myFarm: 'منهنجو کھیت', todo: 'ڪم جي فهرست', trend: 'مقامی رجحان', feedback: 'رايا',
      heroTitle: 'ايگروکھیتي', heroSubtitle: 'پي ايس اي ڪنٽينٽ ڊيسڪ جي طرفان', heroDate: '22 سيپٽمبر, 2025', heroBtn: 'هاري کي بهتر بڻائڻ ۾ مدد ڪريو',
      formHeading: 'فارم جا تفصيل داخل ڪريو', footerLinks: ['گھر', 'اسڪيمون', 'مارڪيٽ جا قدر', 'رابطو'], footerCopy: '© 2025 ايگروکھیتي. سڀ حق محفوظ آھن.', submit: 'جمع ڪرايو', searchPlaceholder: 'ڳولهيو...',
    },
    sa: {
      home: 'गृहम्', myFarm: 'मम क्षेत्रम्', todo: 'करणीयसूची', trend: 'स्थानीयप्रवृत्तिः', feedback: 'प्रतिपुष्टिः',
      heroTitle: 'कृषिभूमः', heroSubtitle: 'पीएसए विषयवस्तु-डेस्कद्वारा', heroDate: 'सेप्टेम्बर् 22, 2025', heroBtn: 'कृषकान् उन्नतं कर्तुं साहाय्यम्',
      formHeading: 'रूपस्य विवरणं प्रविशतु', footerLinks: ['गृहम्', 'योजनाः', 'आपणमूल्यानि', 'सम्पर्कः'], footerCopy: '© 2025 कृषिभूमः। सर्वे अधिकाराः सुरक्षिताः।', submit: 'प्रस्तुतम्', searchPlaceholder: 'अन्वेषणम्...',
    },
    ks: {
      home: 'گَرٕ', myFarm: 'میون کھیت', todo: 'کرنچۍ ہَنز فہرست', trend: 'مُقامی روٗج', feedback: 'رائے',
      heroTitle: 'ایگروکھیت', heroSubtitle: 'پی ایس اے کانٹینٹ ڈیسک سٕتی', heroDate: '۲۲ سَتَمبَر، ۲۰۲۵', heroBtn: 'زٔمین وٲلؠن بہتر بناونہٕ خاطرٕ مدد',
      formHeading: 'فارم چھُ تفصیل درج کرُن', footerLinks: ['گَرٕ', 'سکیمہٕ', 'بازارٕچ قٲمَتہٕ', 'رٲبطہٕ'], footerCopy: '© 2025 ایگروکھیت. سٲرِوٕے حقٕ چھِ محفوٗظ.', submit: 'جمع کرُن', searchPlaceholder: 'چھان چھوٚل...',
    },
    kok: {
      home: 'घर', myFarm: 'म्हाजें शेत', todo: 'करपाची वळेरी', trend: 'स्थानिक ट्रेंड', feedback: 'फीडबॅक',
      heroTitle: 'अग्रोखेती', heroSubtitle: 'पी.एस.ए. कंटेंट डेस्क वरवीं', heroDate: '22 सप्टेंबर, 2025', heroBtn: 'शेतकामत्यांक बरे करपाक मदत',
      formHeading: 'फॉर्म तपशील घालात', footerLinks: ['घर', 'योजना', 'बाजारभाव', 'संपर्क'], footerCopy: '© 2025 अग्रोखेती. सगळे हक्क राखून दवरल्यात.', submit: 'दिवा', searchPlaceholder: 'सोद...',
    },
    mai: {
      home: 'घर', myFarm: 'हमर खेत', todo: 'काजक सूची', trend: 'स्थानीय प्रवृत्ति', feedback: 'प्रतिक्रिया',
      heroTitle: 'एग्रोखेती', heroSubtitle: 'पीएसए कंटेंट डेस्क द्वारा', heroDate: '22 सितम्बर, 2025', heroBtn: 'किसान केँ नीक बनाबए में मदद',
      formHeading: 'फॉर्मक विवरण भरु', footerLinks: ['घर', 'योजना', 'बाजारक दाम', 'संपर्क'], footerCopy: '© 2025 एग्रोखेती. सर्वे अधिकार सुरक्षित अछि.', submit: 'जमा करु', searchPlaceholder: 'खोजु...',
    },
    ne: {
      home: 'गृह पृष्ठ', myFarm: 'मेरो फार्म', todo: 'गर्नुपर्ने काम', trend: 'स्थानीय प्रचलन', feedback: 'प्रतिक्रिया',
      heroTitle: 'एग्रोखेती', heroSubtitle: 'पीएसए कन्टेन्ट डेस्क द्वारा', heroDate: 'सेप्टेम्बर 22, 2025', heroBtn: 'किसानहरूलाई अझ राम्रो बनाउन मद्दत',
      formHeading: 'फारमको विवरण प्रविष्ट गर्नुहोस्', footerLinks: ['गृह पृष्ठ', 'योजना', 'बजार मूल्य', 'सम्पर्क'], footerCopy: '© 2025 एग्रोखेती. सबै अधिकार सुरक्षित छन्.', submit: 'पेश गर्नुहोस्', searchPlaceholder: 'खोज्नुहोस्...',
    },
  };
  
  const navElements = {
    home: document.querySelector(".nav-menu a[href='#']"),
    myFarm: document.querySelector(".nav-menu a[href='#my-farm']"),
    toDoList: document.querySelector(".nav-menu a[href='#to-do-list']"),
    localTrend: document.querySelector(".nav-menu a[href='#local-trend']"),
    feedback: document.querySelector(".nav-menu a[href='#feedback']"),
    search: document.querySelector(".search-bar"),
    websiteLanguage: document.querySelector("label[for='web-language']"),
    heroTitle: document.querySelector(".hero-content h2"),
    heroSubtitle: document.querySelector(".hero-content .subtitle"),
    heroDate: document.querySelector(".hero-content .date"),
    ctaButton: document.getElementById("show-form"),
    formHeading: document.querySelector(".form-heading"),
    voiceInputTitle: document.querySelector(".left-panel h3"),
    voiceInputSubtitle: document.querySelector(".left-panel p"),
    formDetailsHeading: document.querySelector(".right-panel h3"),
    submitBtn: document.querySelector(".submit-btn"),
    footerLogo: document.querySelector(".footer-logo span"),
    footerSchemes: document.querySelector(".footer-links a:nth-child(2)"),
    footerMarketPrices: document.querySelector(".footer-links a:nth-child(3)"),
    footerContact: document.querySelector(".footer-links a:nth-child(4)")
  };
  
  function updateWebsiteLabels(lang) {
    const labels = navTranslations[lang] || navTranslations.en;
    if (navElements.home) navElements.home.textContent = labels.home;
    if (navElements.myFarm) navElements.myFarm.textContent = labels.myFarm;
    if (navElements.toDoList) navElements.toDoList.textContent = labels.toDoList;
    if (navElements.localTrend) navElements.localTrend.textContent = labels.localTrend;
    if (navElements.feedback) navElements.feedback.textContent = labels.feedback;
    if (navElements.search) navElements.search.placeholder = labels.search;
    if (navElements.websiteLanguage) navElements.websiteLanguage.textContent = labels.websiteLanguage;
    if (navElements.heroTitle) heroTitle.textContent = labels.heroTitle;
    if (navElements.heroSubtitle) heroSubtitle.textContent = labels.heroSubtitle;
    if (navElements.heroDate) heroDate.textContent = labels.heroDate;
    if (navElements.ctaButton) ctaButton.textContent = labels.ctaButton;
    if (navElements.formHeading) formHeading.textContent = labels.formHeading;
    if (navElements.voiceInputTitle) navElements.voiceInputTitle.textContent = labels.voiceInputTitle;
    if (navElements.voiceInputSubtitle) navElements.voiceInputSubtitle.textContent = labels.voiceInputSubtitle;
    if (navElements.formDetailsHeading) navElements.formDetailsHeading.textContent = labels.formDetailsHeading;
    if (navElements.submitBtn) navElements.submitBtn.textContent = labels.submitBtn;
    if (navElements.footerLogo) navElements.footerLogo.textContent = labels.footerLogo;
    if (navElements.footerSchemes) navElements.footerSchemes.textContent = labels.footerSchemes;
    if (navElements.footerMarketPrices) navElements.footerMarketPrices.textContent = labels.footerMarketPrices;
    if (navElements.footerContact) navElements.footerContact.textContent = labels.footerContact;
  }
  
  const webLangSelect = document.getElementById("web-language");
  const formLangSelect = document.getElementById("form-language");
  
  function handleWebsiteLanguageChange(lang) {
    updateWebsiteLabels(lang);
    if (formLangSelect && formLangSelect.value !== lang) {
      formLangSelect.value = lang;
      if (typeof updateFormLabels === 'function' && typeof updateFormOptions === 'function') {
        updateFormLabels(lang);
        updateFormOptions(lang);
      }
    }
  }
  
  if (webLangSelect) {
    webLangSelect.addEventListener("change", function() {
      handleWebsiteLanguageChange(this.value);
    });
    handleWebsiteLanguageChange(webLangSelect.value);
  }
  
  if (formLangSelect) {
    formLangSelect.addEventListener("change", function() {
      if (webLangSelect.value !== this.value) {
        handleWebsiteLanguageChange(this.value);
      }
    });
  }
