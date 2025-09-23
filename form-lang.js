// Dropdown operation translations
const formOptions = {
    en: {
        location: ["Select Location", "Auto-detect GPS", "District A", "District B", "District C"],
        landSize: ["<1 acre", "1-5 acres", "5+ acres"],
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
        landSize: ["<1 एकड़", "1-5 एकड़", "5+ एकड़"],
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
        landSize: ["<1 ਏਕੜ", "1-5 ਏਕੜ", "5+ ਏਕੜ"],
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
        landSize: ["<1 ഏക്കർ", "1-5 ഏക്കർ", "5+ ഏക്കർ"],
        crop: ["ഗോതമ്പ്", "അരി", "ചോളം", "സോയാബീൻ"],
        soilType: ["മണലിൽ", "കളിമണ്ണ്", "പശിമരാശി", "കറുപ്പ്"],
        soilCharacter: ["മണ്ണിന്റെ സ്വഭാവം തിരഞ്ഞെടുക്കുക", "ഉറപ്പില്ല", "കറുപ്പ്", "ചുവപ്പ്", "മഞ്ഞ", "തവിട്ട്", "ഉയർന്ന ഫലഭൂയിഷ്ഠത", "കുറഞ്ഞ ഫലഭൂയിഷ്ഠത"],
        irrigation: ["കനാൽ", "കുഴൽക്കിണർ", "മഴയെ ആശ്രയിച്ചുള്ള", "കുളം"],
        sowing: ["കൈകൊണ്ട്", "മെഷീൻ കൊണ്ട്"],
        cropStage: ["ഘട്ടം തിരഞ്ഞെടുക്കുക", "വിത്ത്", "സസ്യങ്ങൾ", "പൂവിടൽ", "വിളവെടുപ്പ്"],
        problem: ["പ്രശ്നം തിരഞ്ഞെടുക്കുക", "വളം പ്രശ്നം", "നനയ്ക്കൽ പ്രശ്നം", "രോഗം", "കീടം", "മറ്റുള്ളവ"]
    },
    mr: {
        location: ["स्थान निवडा", "ऑटो-डिटेक्ट GPS", "जिल्हा A", "जिल्हा B", "जिल्हा C"],
        landSize: ["<1 एकर", "1–5 एकर", "5+ एकर"],
        crop: ["गहू", "तांदूळ", "मका", "सोयाबीन"],
        soilType: ["वाळूची", "चिकणमाती", "पोयटा माती", "काळी"],
        soilCharacter: ["मातीचा प्रकार निवडा", "माहित नाही", "काळी", "लाल", "पिवळी", "तपकिरी", "उच्च सुपीक", "कमी सुपीक"],
        irrigation: ["कालवा", "ट्यूबवेल", "पावसावर अवलंबून", "तलाव"],
        sowing: ["हाताने", "मशीनने"],
        cropStage: ["टप्पा निवडा", "रोपण", "वनस्पति", "फुलांची", "कापणी"],
        problem: ["समस्या निवडा", "खताचा प्रश्न", "सिंचनाचा प्रश्न", "रोग", "कीटक", "इतर"]
    },
    gu: {
        location: ["સ્થાન પસંદ કરો", "ઓટો-ડિટેક્ટ GPS", "જિલ્લો A", "જિલ્લો B", "જિલ્લો C"],
        landSize: ["<1 એકર", "1–5 એકર", "5+ એકર"],
        crop: ["ઘઉં", "ચોખા", "મકાઈ", "સોયાબીન"],
        soilType: ["રેતાળ", "ચીકણી", "ગોરાડુ", "કાળી"],
        soilCharacter: ["માટીનો પ્રકાર પસંદ કરો", "ખબર નથી", "કાળી", "લાલ", "પિળી", "ભૂરી", "ઉચ્ચ ફળદ્રુપતા", "ઓછી ફળદ્રુપતા"],
        irrigation: ["નહેર", "ટ્યુબવેલ", "વરસાદ આધારિત", "તળાવ"],
        sowing: ["હાથથી", "મશીનથી"],
        cropStage: ["તબક્કો પસંદ કરો", "બીજ", "વૃક્ષારોપણ", "ફૂલ", "લણણી"],
        problem: ["સમસ્યા પસંદ કરો", "ખાતરનો મુદ્દો", "સિંચાઈનો મુદ્દો", "રોગ", "જંતુ", "અન્ય"]
    },
    bn: {
        location: ["অবস্থান নির্বাচন করুন", "অটো-ডিটেক্ট GPS", "জেলা A", "জেলা B", "জেলা C"],
        landSize: ["<1 একর", "1–5 একর", "5+ একর"],
        crop: ["গম", "ধান", "ভুট্টা", "সয়াবিন"],
        soilType: ["বেলে", "কাদামাটি", "দোআঁশ", "কালো"],
        soilCharacter: ["মাটির চরিত্র নির্বাচন করুন", "নিশ্চিত না", "কালো", "লাল", "হলুদ", "বাদামী", "উচ্চ উর্বরতা", "নিম্ন উর্বরতা"],
        irrigation: ["খাল", "টিউবওয়েল", "বৃষ্টি নির্ভর", "পুকুর"],
        sowing: ["ম্যানুয়াল", "মেশিন"],
        cropStage: ["পর্যায় নির্বাচন করুন", "চারা", "উদ্ভিজ্জ", "ফুল", "ফসল কাটা"],
        problem: ["সমস্যা নির্বাচন করুন", "সার সমস্যা", "সেচ সমস্যা", "রোগ", "পোকামাকড়", "অন্যান্য"]
    },
    ta: {
        location: ["இடம் தேர்வு செய்யவும்", "தானாக கண்டறிதல் GPS", "மாவட்டம் A", "மாவட்டம் B", "மாவட்டம் C"],
        landSize: ["<1 ஏக்கர்", "1–5 ஏக்கர்", "5+ ஏக்கர்"],
        crop: ["கோதுமை", "அரிசி", "சோளம்", "சோயாபீன்"],
        soilType: ["மணல்", "களிமண்", "வண்டல்", "கருப்பு"],
        soilCharacter: ["மண் தன்மையை தேர்வு செய்யவும்", "உறுதியாக இல்லை", "கருப்பு", "சிவப்பு", "மஞ்சள்", "பழுப்பு", "அதிக வளத்தன்மை", "குறைந்த வளத்தன்மை"],
        irrigation: ["கால்வாய்", "ஆழ்துளை கிணறு", "மழைநீர்", "குளம்"],
        sowing: ["கையால்", "இயந்திரம்"],
        cropStage: ["பயிர் வளர்ச்சியை தேர்வு செய்யவும்", "விதைப்பு", "தாவர வளர்ச்சி", "பூப்பு", "அறுவடை"],
        problem: ["பிரச்சனையை தேர்வு செய்யவும்", "உரப் பிரச்சனை", "நீர்ப்பாசனப் பிரச்சனை", "நோய்", "பூச்சி", "மற்றவை"]
    },
    te: {
        location: ["స్థానం ఎంచుకోండి", "ఆటో-డిటెక్ట్ GPS", "జిల్లా A", "జిల్లా B", "జిల్లా C"],
        landSize: ["<1 ఎకరం", "1–5 ఎకరాలు", "5+ ఎకరాలు"],
        crop: ["గోధుమ", "బియ్యం", "మొక్కజొన్న", "సోయాబీన్"],
        soilType: ["ఇసుక", "బంకమట్టి", "లోమీ", "నలుపు"],
        soilCharacter: ["నేల లక్షణం ఎంచుకోండి", "ఖచ్చితంగా తెలియదు", "నలుపు", "ఎరుపు", "పసుపు", "గోధుమ", "అధిక సారవంతం", "తక్కువ సారవంతం"],
        irrigation: ["కాలువ", "బోరు బావి", "వర్షాధారం", "చెరువు"],
        sowing: ["మాన్యువల్", "యంత్రం"],
        cropStage: ["దశను ఎంచుకోండి", "నారు", "కూరగాయలు", "పూత", "కోత"],
        problem: ["సమస్యను ఎంచుకోండి", "ఎరువుల సమస్య", "నీటిపారుదల సమస్య", "వ్యాధి", "తెగులు", "ఇతర"]
    },
    kn: {
        location: ["ಸ್ಥಳ ಆಯ್ಕೆಮಾಡಿ", "ಆಟೋ-ಡಿಟೇಕ್ಟ್ GPS", "ಜಿಲ್ಲೆ A", "ಜಿಲ್ಲೆ B", "ಜಿಲ್ಲೆ C"],
        landSize: ["<1 ಎಕರೆ", "1–5 ಎಕರೆ", "5+ ಎಕರೆ"],
        crop: ["ಗೋಧಿ", "ಅಕ್ಕಿ", "ಮೆಕ್ಕೆಜೋಳ", "ಸೋಯಾಬೀನ್"],
        soilType: ["ಮರಳು", "ಕ್ಲೇ", "ಲೋಮಿ", "ಕಪ್ಪು"],
        soilCharacter: ["ಮಣ್ಣಿನ ಗುಣಲಕ್ಷಣ ಆಯ್ಕೆಮಾಡಿ", "ಖಚಿತವಾಗಿಲ್ಲ", "ಕಪ್ಪು", "ಕೆಂಪು", "ಹಳದಿ", "ಕಂದು", "ಹೆಚ್ಚಿನ ಫಲವತ್ತತೆ", "ಕಡಿಮೆ ಫಲವತ್ತತೆ"],
        irrigation: ["ಕಾಲುವೆ", "ಕೊಳವೆ ಬಾವಿ", "ಮಳೆ ಆಧಾರಿತ", "ಕೆರೆ"],
        sowing: ["ಕೈಯಿಂದ", "ಯಂತ್ರದಿಂದ"],
        cropStage: ["ಹಂತವನ್ನು ಆಯ್ಕೆಮಾಡಿ", "ಸಸಿ", "ಸಸ್ಯಕ", "ಹೂಬಿಡುವುದು", "ಕೊಯ್ಲು"],
        problem: ["ಸಮಸ್ಯೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ", "ಗೊಬ್ಬರ ಸಮಸ್ಯೆ", "ನೀರಾವರಿ ಸಮಸ್ಯೆ", "ರೋಗ", "ಕೀಟ", "ಇತರೆ"]
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
    or: {
        location: ["ଅବସ୍ଥାନ ଚୟନ କରନ୍ତୁ", "ଅଟୋ-ଡିଟେକ୍ଟ GPS", "ଜିଲ୍ଲା A", "ଜିଲ୍ଲା B", "ଜିଲ୍ଲା C"],
        landSize: ["<1 ଏକର", "1–5 ଏକର", "5+ ଏକର"],
        crop: ["ଗହମ", "ଧାନ", "ମକା", "ସୋୟାବିନ୍"],
        soilType: ["ବାଲି", "ମାଟି", "ଦୋମଟ", "କଳା"],
        soilCharacter: ["ମାଟିର ପ୍ରକାର ଚୟନ କରନ୍ତୁ", "ନିଶ୍ଚିତ ନୁହେଁ", "କଳା", "ଲାଲ", "ହଳଦିଆ", "ବାଦାମୀ", "ଉଚ୍ଚ ଉର୍ବରତା", "କମ୍ ଉର୍ବରତା"],
        irrigation: ["କେନାଲ", "ଟ୍ୟୁବୱେଲ", "ବର୍ଷା ଉପରେ ନିର୍ଭର", "ପୋଖରୀ"],
        sowing: ["ହାତରେ", "ମେସିନରେ"],
        cropStage: ["ପର୍ଯ୍ୟାୟ ଚୟନ କରନ୍ତୁ", "ଚାରା", "ଉଦ୍ଭିଦ", "ଫୁଲ ଧରିବା", "ଅମଳ"],
        problem: ["ସମସ୍ୟା ଚୟନ କରନ୍ତୁ", "ସାର ସମସ୍ୟା", "ଜଳସେଚନ ସମସ୍ୟା", "ରୋଗ", "କୀଟ", "ଅନ୍ୟ"]
    },
    as: {
        location: ["অৱস্থান বাছক", "অটো-ডিটেক্ট GPS", "জিলা A", "জিলা B", "জিলা C"],
        landSize: ["<1 একৰ", "1–5 একৰ", "5+ একৰ"],
        crop: ["ঘেঁহু", "ধান", "মাকৈ", "ছয়াবিন"],
        soilType: ["বালি", "চিনামাটি", "দোআঁশ", "কলা"],
        soilCharacter: ["মাটিৰ চৰਿਤ্ৰ বাছক", "নিশ্চিত নহয়", "কলা", "ৰঙা", "হালধীয়া", "মুগা", "উচ্চ উর্বৰতা", "কম উর্বৰতা"],
        irrigation: ["খাল", "টিউবৱেল", "বৰষুণৰ ওপৰত নিৰ্ভৰশীল", "পুখুৰী"],
        sowing: ["হাতেৰে", "যন্ত্ৰৰে"],
        cropStage: ["স্তৰ বাছক", "গছপুলি", "উদ্ভিদ", "ফুলা", "শস্য চপোৱা"],
        problem: ["সমস্যা বাছক", "সাৰৰ সমস্যা", "জলসিঞ্চনৰ সমস্যা", "ৰোগ", "কীট", "অন্যান্য"]
    },
    ur: {
        location: ["مقام منتخب کریں", "آٹو-ڈیٹیکٹ GPS", "ضلع A", "ضلع B", "ضلع C"],
        landSize: ["<1 ایکڑ", "1–5 ایکڑ", "5+ ایکڑ"],
        crop: ["گندم", "چاول", "مکئی", "سویابین"],
        soilType: ["ریتیلی", "چکنی مٹی", "دومٹ", "کالی"],
        soilCharacter: ["مٹی کی قسم منتخب کریں", "یقینی نہیں", "کالی", "سرخ", "پیلی", "بھوری", "اعلی زرخیزی", "کم زرخیزی"],
        irrigation: ["نہر", "ٹیوب ویل", "بارش پر منحصر", "تالاب"],
        sowing: ["ہاتھ سے", "مشین سے"],
        cropStage: ["مرحلہ منتخب کریں", "پودا", "سبزیوں کا", "پھولوں کا", "کٹائی"],
        problem: ["مسئلہ منتخب کریں", "کھاد کا مسئلہ", "آبپاشی کا مسئلہ", "بیماری", "کیڑے", "دیگر"]
    },
    sd: {
        location: ["جاءِ", "آٽو-ڊيٽيڪٽ GPS", "ضلع A", "ضلع B", "ضلع C"],
        landSize: ["<1 ايڪڙ", "1–5 ايڪڙ", "5+ ايڪڙ"],
        crop: ["ڪڻڪ", "چانور", "مڪئي", "سويابين"],
        soilType: ["واريء", "چيڪني", "دومٽ", "ڪاري"],
        soilCharacter: ["مٽي جو قسم چونڊيو", "پڪ ناهي", "ڪاري", "لال", "پيلي", "گهرڙي", "وڌيڪ زرخيز", "گهٽ زرخيز"],
        irrigation: ["واهه", "ٽيوب ويل", "برساتي", "تلاءُ"],
        sowing: ["هٿ سان", "مشين سان"],
        cropStage: ["مرحلو چونڊيو", "ٻوٽو", "وڌندڙ", "گل", "ڪٽائي"],
        problem: ["مسئلو چونڊيو", "ڀاڻ جو مسئلو", "آبپاشي جو مسئلو", "بيماري", "ڪيڙا", "ٻيا"]
    },
    sa: {
        location: ["स्थानं चिनोतु", "स्वयं-अन्वेषण GPS", "मण्डलम् A", "मण्डलम् B", "मण्डलम् C"],
        landSize: ["<1 एकरम्", "1–5 एकरम्", "5+ एकरम्"],
        crop: ["गोधूमः", "तण्डुलः", "मक्का", "सोयाबीन"],
        soilType: ["सिकतामयम्", "मृत्तिका", "लोमी", "कृष्णम्"],
        soilCharacter: ["मृत्तिकायाः लक्षणं चिनोतु", "निश्चितं नास्ति", "कृष्णम्", "रक्तम्", "पीतम्", "पलाशि", "उच्चा उर्वरता", "न्यूनोर्वरता"],
        irrigation: ["नदी", "कूपः", "वर्षाश्रितः", "सरसः"],
        sowing: ["हस्तेन", "यन्त्रेण"],
        cropStage: ["अवस्थां चिनोतु", "बीजकम्", "वनस्पतिः", "पुष्पम्", "सस्यच्छेदः"],
        problem: ["समस्यां चिनोतु", "उर्वरकसम्बंधी", "सिंचनसम्बंधी", "रोगः", "कीटः", "अन्यत्"]
    },
    ks: {
        location: ["جای چھون", "آٹو-ڈیٹیکٹ GPS", "ضلعہ A", "ضلعہ B", "ضلعہ C"],
        landSize: ["<1 ایکڑ", "1–5 ایکڑ", "5+ ایکڑ"],
        crop: ["گومہ", "چانور", "مکئی", "سویابین"],
        soilType: ["ریتہ", "مٹی", "دومٹ", "سیاہ"],
        soilCharacter: ["مٹی چھ صفت چھون", "یقینی نہ", "سیاہ", "لعل", "زرد", "نارنجی", "اچھ زرخیزی", "کم زرخیزی"],
        irrigation: ["نہر", "ٹیوب ویل", "وارژہ", "کول"],
        sowing: ["دستہ", "مشینہ"],
        cropStage: ["مرحلہ چھون", "نول", "واہن", "وؤل", "کوش"],
        problem: ["مسئلہ چھون", "کھادُک مسئلہ", "آبپاشی ہند مسئلہ", "بیماری", "کیٚوٕ", "بییہ"]
    },
    kok: {
        location: ["सुवात निवडात", "ऑटो-डिटेक्ट GPS", "जिल्हा A", "जिल्हा B", "जिल्हा C"],
        landSize: ["<1 एकर", "1–5 एकर", "5+ एकर"],
        crop: ["गव", "तांदूळ", "मको", "सोयाबीन"],
        soilType: ["रेवाळ", "चिकणमाती", "पोयटा माती", "काळो"],
        soilCharacter: ["मातीची प्रकृती निवडात", "खात्री ना", "काळो", "तांबडो", "हळडो", "भुऱ्या", "व्हड उर्वरता", "उणे उर्वरता"],
        irrigation: ["न्हंय", "बोअरवेल", "पावस", "तळे"],
        sowing: ["हत्तान", "यंत्रान"],
        cropStage: ["पायरी निवडात", "रोपो", "वनस्पत", "फुला", "कापणी"],
        problem: ["समस्या निवडात", "सारें समस्या", "जल समस्या", "रोग", "कीड", "अनीक"]
    },
    mai: {
        location: ["स्थान चुनु", "ऑटो-डिटेक्ट GPS", "जिला A", "जिला B", "जिला C"],
        landSize: ["<1 एकड़", "1–5 एकड़", "5+ एकड़"],
        crop: ["गेहूं", "चाउर", "मकै", "सोयाबीन"],
        soilType: ["रेतीला", "चिखला", "दोमट", "काली"],
        soilCharacter: ["माटीक चरित्र चुनु", "निश्चित नहि", "काली", "लाल", "पियर", "भूरी", "उच्च उर्वरता", "कम उर्वरता"],
        irrigation: ["नहर", "ट्यूबवेल", "वर्षा पर आधारित", "तालाब"],
        sowing: ["हाथ से", "मशीन से"],
        cropStage: ["चरण चुनु", "पौधा", "वनस्पति", "फूल देना", "कटाई"],
        problem: ["समस्या चुनु", "खादक समस्या", "सिंचाईक समस्या", "रोग", "कीट", "दोसर"]
    },
    ne: {
        location: ["स्थान छान्नुहोस्", "अटो-डिटेक्ट GPS", "जिल्ला A", "जिल्ला B", "जिल्ला C"],
        landSize: ["<1 एकड", "1–5 एकड", "5+ एकड"],
        crop: ["गहुँ", "चामल", "मकै", "सोयाबीन"],
        soilType: ["बालुवा", "माटो", "दोमट", "कालो"],
        soilCharacter: ["माटोको प्रकार छान्नुहोस्", "निश्चित छैन", "कालो", "रातो", "पहेंलो", "खैरो", "उच्च उर्वरता", "कम उर्वरता"],
        irrigation: ["नहर", "ट्युबवेल", "वर्षा", "पोखरी"],
        sowing: ["हातले", "मेसिनले"],
        cropStage: ["चरण छान्नुहोस्", "बिरुवा", "वनस्पति", "फूल फुल्ने", "काट्ने"],
        problem: ["समस्या छान्नुहोस्", "मलको समस्या", "सिंचाइको समस्या", "रोग", "कीरा", "अन्य"]
    }
};

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
        landSize: "ഭൂമി ವലിപ്പം",
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
        soilCharacter: "মাটিৰ চৰਿਤ্ৰ",
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

function updateFormOptions(lang) {
    const opts = formOptions[lang] || formOptions.en;
    Object.keys(selects).forEach(key => {
        const select = selects[key];
        if (!select) return;
        while (select.options.length) select.remove(0);
        opts[key].forEach(val => {
            const option = document.createElement("option");
            option.textContent = val;
            select.appendChild(option);
        });
    });
}

function updateFormLabels(lang) {
    const l = formLabels[lang] || formLabels.en;
    for (const key in labels) {
        if (labels[key]) {
            labels[key].textContent = l[key];
        }
    }
}

const formLangSelect = document.getElementById("form-language");
const webLangSelect = document.getElementById("web-language");

function handleFormLanguageChange(lang) {
    updateFormLabels(lang);
    updateFormOptions(lang);

    if (webLangSelect && webLangSelect.value !== lang) {
        webLangSelect.value = lang;
        if (typeof updateWebsiteLabels === 'function') {
            updateWebsiteLabels(lang);
        }
    }
}


if (formLangSelect) {
    formLangSelect.addEventListener("change", function() {
        handleFormLanguageChange(this.value);
    });

    handleFormLanguageChange(formLangSelect.value);
}
