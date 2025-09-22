//Dropdown operation translations
const formOptions = {
  en: {
    location: ["Select Location", "Auto-detect GPS", "District A", "District B", "District C"],
    landSize: ["<1 acre", "1–5 acres", "5+ acres"],
    crop: ["Wheat", "Rice", "Maize", "Soybean"],
    soilType: ["Sandy", "Clay", "Loamy", "Black"],
    soilCharacter: ["Select Soil Character", "Not Sure", "Black", "Red", "Yellow", "Brown", "High Fertility", "Low Fertility"],
    irrigation: ["Canal", "Tube Well", "Rainfed", "Pond"],
    sowing: ["Manual", "Machine"],
    cropStage: ["Select Stage", "Seedling", "Vegetative", "Flowering", "Harvesting"],
    problem: ["Select Problem", "Fertilizer Issue", "Irrigation Issue", "Disease", "Pest", "Other"]
  },
  hi: {
    location: ["स्थान चुनें", "ऑटो-डिटेक्ट GPS", "जिला A", "जिला B", "जिला C"],
    landSize: ["<1 एकड़", "1–5 एकड़", "5+ एकड़"],
    crop: ["गेहूं", "चावल", "मक्का", "सोयाबीन"],
    soilType: ["रेतीली", "चिकनी", "दोमट", "काली"],
    soilCharacter: ["मिट्टी का चरित्र चुनें", "सुनिश्चित नहीं", "काली", "लाल", "पीली", "भूरी", "उच्च उर्वरता", "कम उर्वरता"],
    irrigation: ["नहर", "ट्यूबवेल", "वर्षा आधारित", "तालाब"],
    sowing: ["हाथ से", "मशीन से"],
    cropStage: ["चरण चुनें", "पौध", "वनस्पति", "फूल आना", "कटाई"],
    problem: ["समस्या चुनें", "खाद की समस्या", "सिंचाई की समस्या", "रोग", "कीट", "अन्य"]
  },
  pa: {
    location: ["ਟਿਕਾਣਾ ਚੁਣੋ", "ਆਟੋ-ਡਿਟੈਕਟ GPS", "ਜ਼ਿਲਾ A", "ਜ਼ਿਲਾ B", "ਜ਼ਿਲਾ C"],
    landSize: ["<1 ਏਕੜ", "1–5 ਏਕੜ", "5+ ਏਕੜ"],
    crop: ["ਗੰਧੁਮ", "ਚੌਲ", "ਮੱਕੀ", "ਸੋਯਾਬੀਨ"],
    soilType: ["ਰੇਤਲੀ", "ਚਿਕਣੀ", "ਦੋਮਟ", "ਕਾਲੀ"],
    soilCharacter: ["ਮਿੱਟੀ ਦਾ ਅੱਖਰ ਚੁਣੋ", "ਯਕੀਨੀ ਨਹੀਂ", "ਕਾਲਾ", "ਲਾਲ", "ਪੀਲਾ", "ਭੂਰਾ", "ਉੱਚ ਉਪਜਾਊ ਸ਼ਕਤੀ", "ਘੱਟ ਉਪਜਾਊ ਸ਼ਕਤੀ"],
    irrigation: ["ਨਹਿਰ", "ਟਿਊਬਵੈਲ", "ਵਰਖਾ ਆਧਾਰਿਤ", "ਪੋੰਡ"],
    sowing: ["ਹੱਥ ਨਾਲ", "ਮਸ਼ੀਨ ਨਾਲ"],
    cropStage: ["ਸਟੇਜ ਚੁਣੋ", "ਪੌਦਾ", "ਸਬਜ਼ੀ", "ਫੁੱਲ", "ਕਟਾਈ"],
    problem: ["ਸਮੱਸਿਆ ਚੁਣੋ", "ਖਾਦ ਮੁੱਦਾ", "ਸਿੰਚਾਈ ਮੁੱਦਾ", "ਰੋਗ", "ਕੀਟ", "ਹੋਰ"]
  },
  ml: {
    location: ["സ്ഥലം തിരഞ്ഞെടുക്കുക", "ഓട്ടോ-ഡിറ്റക്റ്റ് GPS", "ജില്ല A", "ജില്ല B", "ജില്ല C"],
    landSize: ["<1 ഏക്കർ", "1–5 ഏക്കർ", "5+ ഏക്കർ"],
    crop: ["ഗോതമ്പ്", "അരി", "ചോളം", "സോയാബീൻ"],
    soilType: ["മണലിൽ", "കളിമണ്ണ്", "പശിമരാശി", "കറുപ്പ്"],
    soilCharacter: ["മണ്ണിന്റെ സ്വഭാവം തിരഞ്ഞെടുക്കുക", "ഉറപ്പില്ല", "കറുപ്പ്", "ചുവപ്പ്", "മഞ്ഞ", "തവിട്ട്", "ഉയർന്ന ഫലഭൂയിഷ്ഠത", "കുറഞ്ഞ ഫലഭൂയിഷ്ഠത"],
    irrigation: ["കനാൽ", "കുഴൽക്കിണർ", "മഴയെ ആശ്രയിച്ചുള്ള", "കുളം"],
    sowing: ["കൈകൊണ്ട്", "മെഷീൻ കൊണ്ട്"],
    cropStage: ["ഘട്ടം തിരഞ്ഞെടുക്കുക", "വിത്ത്", "സസ്യങ്ങൾ", "പൂവിടൽ", "വിളവെടുപ്പ്"],
    problem: ["പ്രശ്നം തിരഞ്ഞെടുക്കുക", "വളം പ്രശ്നം", "നനയ്ക്കൽ പ്രശ്നം", "രോഗം", "കീടം", "മറ്റുള്ളവ"]
  },
  //...add more languages as needed
};

const selects = {
  location: document.getElementById("location"),
  landSize: document.getElementById("land-size"),
  crop: document.getElementById("crop"),
  soilType: document.getElementById("soil-type"),
  soilCharacter: document.getElementById("soil-character"),
  irrigation: document.getElementById("irrigation"),
  sowing: document.getElementById("sowing"),
  cropStage: document.getElementById("crop-stage"),
  problem: document.getElementById("problem")
};

function updateFormOptions(lang) {
  const opts = formOptions[lang] || formOptions.en;
  Object.keys(selects).forEach(key => {
    const select = selects[key];
    if (!select) return;
    //Remove all options
    while (select.options.length) select.remove(0);
    opts[key].forEach(val => {
      const option = document.createElement("option");
      option.textContent = val;
      select.appendChild(option);
    });
  });
}

//Form label translations for supported languages
const formLabels = {
  en: {
    location: "Location",
    landSize: "Land Size",
    crop: "Crop",
    soilType: "Soil Type",
    soilCharacter: "Soil Character",
    irrigation: "Irrigation Source",
    sowing: "Sowing Type",
    sowingDate: "Sowing Date",
    cropStage: "Crop Stage",
    problem: "Current Problem",
    uploadImage: "Upload Image"
  },
  hi: {
    location: "स्थान",
    landSize: "भूमि का आकार",
    crop: "फसल",
    soilType: "मिट्टी का प्रकार",
    soilCharacter: "मिट्टी का चरित्र",
    irrigation: "सिंचाई स्रोत",
    sowing: "बुवाई प्रकार",
    sowingDate: "बुवाई की तिथि",
    cropStage: "फसल का चरण",
    problem: "वर्तमान समस्या",
    uploadImage: "छवि अपलोड करें"
  },
  pa: {
    location: "ਟਿਕਾਣਾ",
    landSize: "ਜ਼ਮੀਨ ਦਾ ਆਕਾਰ",
    crop: "ਫ਼ਸਲ",
    soilType: "ਮਿੱਟੀ ਦੀ ਕਿਸਮ",
    soilCharacter: "ਮਿੱਟੀ ਦਾ ਅੱਖਰ",
    irrigation: "ਸਿੰਚਾਈ ਸਰੋਤ",
    sowing: "ਬਿਜਾਈ ਕਿਸਮ",
    sowingDate: "ਬਿਜਾਈ ਦੀ ਮਿਤੀ",
    cropStage: "ਫ਼ਸਲ ਦਾ ਪੜਾਅ",
    problem: "ਮੌਜੂਦਾ ਸਮੱਸਿਆ",
    uploadImage: "ਚਿੱਤਰ ਅੱਪਲੋਡ ਕਰੋ"
  },
  mr: {
        location: "स्थान",
        landSize: "जमिनीचा आकार",
        crop: "पिक",
        soilType: "मातीचा प्रकार",
        soilCharacter: "मातीचा प्रकार",
        irrigation: "सिंचन स्रोत",
        sowing: "पेरणी प्रकार",
        sowingDate: "पेरणीची तारीख",
        cropStage: "पिकाचा टप्पा",
        problem: "सध्याची समस्या",
        uploadImage: "फोटो अपलोड करा"
    },
    gu: {
        location: "સ્થાન",
        landSize: "જમીનનું કદ",
        crop: "પાક",
        soilType: "માટીનો પ્રકાર",
        soilCharacter: "માટીનો પ્રકાર",
        irrigation: "સિંચાઈ સ્ત્રોત",
        sowing: "વાવણી પ્રકાર",
        sowingDate: "વાવણીની તારીખ",
        cropStage: "પાકનો તબક્કો",
        problem: "હાલની સમસ્યા",
        uploadImage: "ફોટો અપલોડ કરો"
    },
    bn: {
        location: "অবস্থান",
        landSize: "জমির আকার",
        crop: "ফসল",
        soilType: "মাটির ধরন",
        soilCharacter: "মাটির চরিত্র",
        irrigation: "সেচের উৎস",
        sowing: "বপনের ধরন",
        sowingDate: "বপনের তারিখ",
        cropStage: "ফসল পর্যায়",
        problem: "বর্তমান সমস্যা",
        uploadImage: "ছবি আপলোড করুন"
    },
    ta: {
        location: "இடம்",
        landSize: "நில அளவு",
        crop: "பயிர்",
        soilType: "மண் வகை",
        soilCharacter: "மண் தன்மை",
        irrigation: "நீர்ப்பாசன மூலம்",
        sowing: "விதைப்பு வகை",
        sowingDate: "விதைப்பு தேதி",
        cropStage: "பயிர் நிலை",
        problem: "தற்போதைய சிக்கல்",
        uploadImage: "படம் பதிவேற்றம்"
    },
    te: {
        location: "స్థానం",
        landSize: "భూమి పరిమాణం",
        crop: "పంట",
        soilType: "మట్టి రకం",
        soilCharacter: "నేల లక్షణం",
        irrigation: "పారిశుధ్య మూలం",
        sowing: "విత్తన రకం",
        sowingDate: "విత్తన తేదీ",
        cropStage: "పంట దశ",
        problem: "ప్రస్తుత సమస్య",
        uploadImage: "చిత్రం అప్‌లోడ్ చేయండి"
    },
    kn: {
        location: "ಸ್ಥಳ",
        landSize: "ಭೂಮಿ ಗಾತ್ರ",
        crop: "ಬೆಳೆ",
        soilType: "ಮಣ್ಣು ಪ್ರಕಾರ",
        soilCharacter: "ಮಣ್ಣಿನ ಗುಣಲಕ್ಷಣ",
        irrigation: "ನೀರಾವರಿ ಮೂಲ",
        sowing: "ಬಿತ್ತನೆ ಪ್ರಕಾರ",
        sowingDate: "ಬಿತ್ತನೆ ದಿನಾಂಕ",
        cropStage: "ಬೆಳೆ ಹಂತ",
        problem: "ಪ್ರಸ್ತುತ ಸಮಸ್ಯೆ",
        uploadImage: "ಚಿತ್ರ ಅಪ್ಲೋಡ್ ಮಾಡಿ"
    },
    ml: {
        location: "സ്ഥലം",
        landSize: "ഭൂമി വലിപ്പം",
        crop: "വിള",
        soilType: "മണ്ണിന്റെ തരം",
        soilCharacter: "മണ്ണിന്റെ സ്വഭാവം",
        irrigation: "നനയ്ക്കൽ ഉറവിടം",
        sowing: "വിത്ത് തരം",
        sowingDate: "വിത്ത് തീയതി",
        cropStage: "വിള ഘട്ടം",
        problem: "നിലവിലെ പ്രശ്നം",
        uploadImage: "ചിത്രം അപ്‌ലോഡ് ചെയ്യുക"
    },
    or: {
        location: "ଅବସ୍ଥାନ",
        landSize: "ଜମିର ଆକାର",
        crop: "ଫସଲ",
        soilType: "ମାଟିର ପ୍ରକାର",
        soilCharacter: "ମାଟିର ପ୍ରକାର",
        irrigation: "ସିଞ୍ଚନ ଉତ୍ସ",
        sowing: "ବିଜ ବିଜାଇ ପ୍ରକାର",
        sowingDate: "ବିଜ ବିଜାଇ ତାରିଖ",
        cropStage: "ଫସଲର ପର୍ଯ୍ୟାୟ",
        problem: "ସାମ୍ପ୍ରତିକ ସମସ୍ୟା",
        uploadImage: "ଫଟୋ ଅପଲୋଡ କରନ୍ତୁ"
    },
    as: {
        location: "অৱস্থান",
        landSize: "মাটিৰ আকাৰ",
        crop: "শস্য",
        soilType: "মাটিৰ ধৰণ",
        soilCharacter: "মাটিৰ চৰিত্ৰ",
        irrigation: "সেচৰ উৎস",
        sowing: "বপন ধৰণ",
        sowingDate: "বপনৰ তাৰিখ",
        cropStage: "শস্যৰ স্তৰ",
        problem: "বৰ্তমানৰ সমস্যা",
        uploadImage: "ছবি আপলোড কৰক"
    },
    ur: {
        location: "مقام",
        landSize: "زمین کا سائز",
        crop: "فصل",
        soilType: "مٹی کی قسم",
        soilCharacter: "مٹی کی قسم",
        irrigation: "آبپاشی کا ذریعہ",
        sowing: "بوائی کی قسم",
        sowingDate: "بوائی کی تاریخ",
        cropStage: "فصل کا مرحلہ",
        problem: "موجودہ مسئلہ",
        uploadImage: "تصویر اپ لوڈ کریں"
    },
    sd: {
        location: "جاءِ",
        landSize: "زمين جو سائيز",
        crop: "فصل",
        soilType: "مٽي جو قسم",
        soilCharacter: "مٽي جو قسم",
        irrigation: "آبپاشي جو ذريعو",
        sowing: "پوک جو قسم",
        sowingDate: "پوک جي تاريخ",
        cropStage: "فصل جو مرحلو",
        problem: "هاڻوڪو مسئلو",
        uploadImage: "تصوير اپلوڊ ڪريو"
    },
    sa: {
        location: "स्थानम्",
        landSize: "भूमेः आकारः",
        crop: "कृषिः",
        soilType: "मृत्तिका प्रकारः",
        soilCharacter: "मृत्तिकायाः लक्षणम्",
        irrigation: "सिंचन स्रोतः",
        sowing: "बीजन प्रकारः",
        sowingDate: "बीजनस्य तिथिः",
        cropStage: "सस्यस्य अवस्था",
        problem: "वर्तमानसमस्या",
        uploadImage: "चित्रं प्रेषयतु"
    },
    ks: {
        location: "جای",
        landSize: "زمین چھ سائز",
        crop: "فصل",
        soilType: "مٹی چھ قسم",
        soilCharacter: "مٹی چھ صفت",
        irrigation: "آبپاشی چھ ذریعہ",
        sowing: "بوائی چھ قسم",
        sowingDate: "بوائی ہند چھ تاریخ",
        cropStage: "فصل چھ مرحلہ",
        problem: "اوسنیٚ مسئلہ",
        uploadImage: "فوٹو اپ لوڈ کریو"
    },
    kok: {
        location: "सुवात",
        landSize: "भूमीचे आकार",
        crop: "पिक",
        soilType: "मातीचा प्रकार",
        soilCharacter: "मातीची प्रकृती",
        irrigation: "सिंचन स्रोत",
        sowing: "पेरणी प्रकार",
        sowingDate: "पेरणीची तारीख",
        cropStage: "पिकाचो टप्पो",
        problem: "सद्य समस्या",
        uploadImage: "फोटो अपलोड करा"
    },
    mai: {
        location: "स्थान",
        landSize: "भूमि के आकार",
        crop: "फसल",
        soilType: "माटि के प्रकार",
        soilCharacter: "माटीक चरित्र",
        irrigation: "सिंचाई स्रोत",
        sowing: "बुआई प्रकार",
        sowingDate: "बुआईक तिथि",
        cropStage: "फसलक चरण",
        problem: "वर्तमान समस्या",
        uploadImage: "फोटो अपलोड करू"
    },
    ne: {
        location: "स्थान",
        landSize: "जग्गाको आकार",
        crop: "बाली",
        soilType: "माटोको प्रकार",
        soilCharacter: "माटोको प्रकार",
        irrigation: "सिचाइ स्रोत",
        sowing: "बिउ छर्ने प्रकार",
        sowingDate: "बिउ छर्ने मिति",
        cropStage: "बालीको चरण",
        problem: "हालको समस्या",
        uploadImage: "फोटो अपलोड गर्नुहोस्"
    }
};

const formLangSelect = document.getElementById("form-language");
const labels = {
  location: document.querySelector("label[for='location']"),
  landSize: document.querySelector("label[for='land-size']"),
  crop: document.querySelector("label[for='crop']"),
  soilType: document.querySelector("label[for='soil-type']"),
  soilCharacter: document.querySelector("label[for='soil-character']"),
  irrigation: document.querySelector("label[for='irrigation']"),
  sowing: document.querySelector("label[for='sowing']"),
  sowingDate: document.querySelector("label[for='sowing-date']"),
  cropStage: document.querySelector("label[for='crop-stage']"),
  problem: document.querySelector("label[for='problem']"),
  uploadImage: document.querySelector("label[for='image']")
};

function updateFormLabels(lang) {
  const l = formLabels[lang] || formLabels.en;
  labels.location.textContent = l.location;
  labels.landSize.textContent = l.landSize;
  labels.crop.textContent = l.crop;
  labels.soilType.textContent = l.soilType;
  labels.soilCharacter.textContent = l.soilCharacter;
  labels.irrigation.textContent = l.irrigation;
  labels.sowing.textContent = l.sowing;
  labels.sowingDate.textContent = l.sowingDate;
  labels.cropStage.textContent = l.cropStage;
  labels.problem.textContent = l.problem;
  labels.uploadImage.textContent = l.uploadImage;
}

if (formLangSelect) {
  formLangSelect.addEventListener("change", function() {
    updateFormLabels(this.value);
    updateFormOptions(this.value);
  });
  updateFormLabels(formLangSelect.value);
  updateFormOptions(formLangSelect.value);
}
