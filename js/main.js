/* ============================================================
   BGT REALTY — MAIN.JS
   Interactions, routing, data, animations, blog, admin
   ============================================================ */

(function () {
  'use strict';

  /* ---- PROPERTY DATA ---- */
  var properties = {
    'vanam-valley': {
      title: 'Vanam Valley 2BHK Farmhouse', titleHi: 'वनम वैली 2BHK फार्महाउस',
      type: 'Farmhouse', typeHi: 'फार्महाउस',
      status: 'Launching Soon', statusHi: 'जल्द लॉन्च',
      location: 'Gangulpara Tekadi, Balaghat', locationHi: 'गागुलपारा टेकाड़ी, बालाघाट',
      price: 'Contact for Price', priceHi: 'कीमत के लिए संपर्क करें',
      area: 'Individual Plots + 2BHK', bhk: '2 BHK', badgeColor: '#2d5a27',
      images: ['images/vanam-villa.jpg', 'images/vanam-masterplan.jpg'],
      features: ['Swimming Pool', 'Club House', 'Gym', 'Lawn Tennis', 'Cricket Pitch', 'Badminton', 'Fishing Zone', 'Landscaped Gardens', '24x7 Security', 'Gated Community', 'Children Play Area'],
      featuresHi: ['स्विमिंग पूल', 'क्लब हाउस', 'जिम', 'लॉन टेनिस', 'क्रिकेट पिच', 'बैडमिंटन', 'फिशिंग ज़ोन', 'लैंडस्केप्ड गार्डन', '24x7 सुरक्षा', 'गेटेड कम्युनिटी', 'चिल्ड्रन प्ले एरिया'],
      desc: 'Luxury second homes amidst nature at Gangulpara Dam. A gated community featuring 25ft wide roads, world-class amenities, and breathtaking views. Perfect for weekend getaways and long-term investment in the lap of nature.',
      descHi: 'गंगुलपारा डैम पर प्रकृति के बीच लक्जरी सेकंड होम। 25 फ़ीट चौड़ी सड़कों, विश्व स्तरीय सुविधाओं और मनमोहक दृश्यों वाली गेटेड कम्युनिटी। वीकेंड गेटअवे और लंबे समय के निवेश के लिए एकदम सही।',
      idealFor: []
    },
    'gangulpara-holiday-homes': {
      title: 'Gangulpara Holiday Homes', titleHi: 'गंगुलपारा हॉलिडे होम्स',
      type: 'Farmhouse', typeHi: 'फार्महाउस',
      status: 'Upcoming', statusHi: 'आगामी',
      location: 'Gangulpara Dam, Balaghat', locationHi: 'गंगुलपारा डैम, बालाघाट',
      price: 'Contact for Price', priceHi: 'कीमत के लिए संपर्क करें',
      area: 'Holiday Plots + Farmhouse', bhk: '2 BHK', badgeColor: '#2d5a27',
      images: ['images/gangulpara-poster.jpg', 'images/vanam-masterplan.jpg'],
      features: ['Swimming Pool', 'Club House', 'Gym', 'Lawn Tennis', 'Cricket Pitch', 'Badminton', 'Fishing Zone', 'Landscaped Gardens', '24x7 Security', 'Gated Community', 'Children Play Area'],
      featuresHi: ['स्विमिंग पूल', 'क्लब हाउस', 'जिम', 'लॉन टेनिस', 'क्रिकेट पिच', 'बैडमिंटन', 'फिशिंग ज़ोन', 'लैंडस्केप्ड गार्डन', '24x7 सुरक्षा', 'गेटेड कम्युनिटी', 'चिल्ड्रन प्ले एरिया'],
      desc: 'Premium holiday homes near the scenic Gangulpara Dam. Enjoy the tranquility of nature with modern amenities. Ideal for families seeking a peaceful retreat away from city life, with excellent appreciation potential.',
      descHi: 'सुंदर गंगुलपारा डैम के पास प्रीमियम हॉलिडे होम। आधुनिक सुविधाओं के साथ प्रकृति की शांति का आनंद लें। शहर की भागदौड़ से दूर शांतिपूर्ण रिट्रीट चाहने वाले परिवारों के लिए आदर्श।',
      idealFor: []
    },
    'green-velly-dongaria': {
      title: 'Green Valley Dongaria Plots', titleHi: 'ग्रीन वैली डोंगरिया प्लॉट',
      type: 'Plot', typeHi: 'प्लॉट',
      status: 'Available', statusHi: 'उपलब्ध',
      location: 'Dongaria, Balaghat', locationHi: 'डोंगरिया, बालाघाट',
      price: '₹2,200/sqft', priceHi: '₹2,200/वर्ग फ़ीट',
      area: 'Commercial 2800sqft / Residential 1500sqft', bhk: 'N/A', badgeColor: '#1a6b3c',
      images: ['images/dongaria-plots.jpg'],
      features: ['Wide Roads', 'Drainage System', 'Street Lights', 'Boundary Wall', 'Garden Area', 'Water Supply', 'Electricity', 'Near Main Road', 'Clear Title', 'Ready for Construction'],
      featuresHi: ['चौड़ी सड़कें', 'ड्रेनेज सिस्टम', 'स्ट्रीट लाइट', 'बाउंड्री वॉल', 'गार्डन एरिया', 'पानी की सप्लाई', 'बिजली', 'मेन रोड के पास', 'क्लियर टाइटल', 'निर्माण के लिए तैयार'],
      desc: 'Prime plots in the fast-developing Dongaria area of Balaghat. Commercial plots starting at 2800sqft and residential plots from 1500sqft at just ₹2,200/sqft. Excellent connectivity and rapidly appreciating location.',
      descHi: 'बालाघाट के तेजी से विकसित हो रहे डोंगरिया क्षेत्र में प्राइम प्लॉट। कमर्शियल प्लॉट 2800 वर्ग फ़ीट से और रेजिडेंशियल प्लॉट 1500 वर्ग फ़ीट से मात्र ₹2,200/वर्ग फ़ीट में। उत्कृष्ट कनेक्टिविटी और तेजी से बढ़ती कीमतें।',
      idealFor: []
    },
    'waraseoni-flats': {
      title: 'Waraseoni 2 & 3 BHK Flats', titleHi: 'वारासिवनी 2 और 3 BHK फ्लैट',
      type: 'Flat', typeHi: 'फ्लैट',
      status: 'Ready to Move', statusHi: 'रेडी टू मूव',
      location: 'Waraseoni, Balaghat', locationHi: 'वारासिवनी, बालाघाट',
      price: 'Contact for Price', priceHi: 'कीमत के लिए संपर्क करें',
      area: '2 BHK & 3 BHK Options', bhk: '2 & 3 BHK', badgeColor: '#5a3a8c',
      images: ['images/waraseoni-flats.jpg', 'images/waraseoni-2bhk.jpg'],
      features: ['Modular Kitchen', 'Vitrified Flooring', 'Parking Space', 'Lift', '24x7 Water Supply', 'Power Backup', 'CCTV Security', 'Children Play Area', 'Near School & Hospital', 'Vastu Compliant'],
      featuresHi: ['मॉड्यूलर किचन', 'विट्रिफाइड फ्लोरिंग', 'पार्किंग स्पेस', 'लिफ्ट', '24x7 पानी की सप्लाई', 'पावर बैकअप', 'CCTV सुरक्षा', 'चिल्ड्रन प्ले एरिया', 'स्कूल और अस्पताल के पास', 'वास्तु अनुकूल'],
      desc: 'Modern, ready-to-move flats in the heart of Waraseoni. Choose from spacious 2BHK and 3BHK options with premium fittings, ample parking, and excellent amenities. Walking distance to schools, hospitals, and market.',
      descHi: 'वारासिवनी के दिल में आधुनिक, रेडी-टू-मूव फ्लैट। प्रीमियम फिटिंग्स, पर्याप्त पार्किंग और उत्कृष्ट सुविधाओं के साथ विशाल 2BHK और 3BHK विकल्पों में से चुनें। स्कूल, अस्पताल और बाज़ार से पैदल दूरी।',
      idealFor: []
    },
    'rampayli-road': {
      title: 'Rampayli Road Plots', titleHi: 'रामपायली रोड प्लॉट',
      type: 'Plot', typeHi: 'प्लॉट',
      status: 'Available', statusHi: 'उपलब्ध',
      location: 'Rampayli Road, Waraseoni', locationHi: 'रामपायली रोड, वारासिवनी',
      price: 'Commercial ₹2,250 / Residential ₹1,250/sqft', priceHi: 'कमर्शियल ₹2,250 / रेजिडेंशियल ₹1,250/वर्ग फ़ीट',
      area: 'Commercial & Residential', bhk: 'N/A', badgeColor: '#1a6b3c',
      images: ['images/rampayli-aerial.jpg'],
      features: ['NH Adjacent', 'Wide Roads', 'Commercial & Residential', 'Drainage System', 'Street Lights', 'Water Supply', 'Electricity', 'Clear Title', 'Bank Loan Available', 'Immediate Possession'],
      featuresHi: ['NH के बगल में', 'चौड़ी सड़कें', 'कमर्शियल और रेजिडेंशियल', 'ड्रेनेज सिस्टम', 'स्ट्रीट लाइट', 'पानी की सप्लाई', 'बिजली', 'क्लियर टाइटल', 'बैंक लोन उपलब्ध', 'तुरंत कब्ज़ा'],
      desc: 'Strategically located plots on Rampayli Road, Waraseoni. Commercial plots at ₹2,250/sqft and residential plots at ₹1,250/sqft. Adjacent to National Highway with excellent road connectivity. Ideal for both home construction and business investment.',
      descHi: 'रामपायली रोड, वारासिवनी पर रणनीतिक रूप से स्थित प्लॉट। कमर्शियल प्लॉट ₹2,250/वर्ग फ़ीट और रेजिडेंशियल प्लॉट ₹1,250/वर्ग फ़ीट पर। नेशनल हाइवे से सटे हुए। घर बनाने और व्यापार निवेश दोनों के लिए आदर्श।',
      idealFor: []
    },
    'jagantola-land': {
      title: 'Jagantola 4 Acre Land', titleHi: 'जगनटोला 4 एकड़ ज़मीन',
      type: 'Land', typeHi: 'ज़मीन',
      status: 'Available', statusHi: 'उपलब्ध',
      location: 'Jagantola, Ukwa, Balaghat', locationHi: 'जगनटोला, उकवा, बालाघाट',
      price: 'Contact for Price', priceHi: 'कीमत के लिए संपर्क करें',
      area: '4 Acres (250ft frontage)', bhk: 'N/A', badgeColor: '#6b4c1a',
      images: ['images/jagantola-land.jpg'],
      features: ['4 Acres Total', '250ft Road Frontage', 'Flat Terrain', 'Water Available', 'Electricity Nearby', 'Clear Title', 'Surrounded by Nature', 'Road Access', 'Near Ukwa Town', 'Scenic Views'],
      featuresHi: ['कुल 4 एकड़', '250 फ़ीट रोड फ्रंटेज', 'समतल भूमि', 'पानी उपलब्ध', 'बिजली पास में', 'क्लियर टाइटल', 'प्रकृति से घिरा', 'सड़क पहुँच', 'उकवा शहर के पास', 'सुंदर दृश्य'],
      desc: 'Expansive 4-acre land parcel in Jagantola, Ukwa with 250ft road frontage. Flat terrain surrounded by lush greenery, perfect for large-scale development. Ideal for farmhouse, eco resort, wellness retreat, plantation, or long-term investment.',
      descHi: '250 फ़ीट रोड फ्रंटेज के साथ जगनटोला, उकवा में विशाल 4 एकड़ भूमि। हरियाली से घिरी समतल ज़मीन, बड़े पैमाने के विकास के लिए एकदम सही। फार्महाउस, इको रिज़ॉर्ट, वेलनेस रिट्रीट, प्लांटेशन या दीर्घकालिक निवेश के लिए आदर्श।',
      idealFor: ['Farmhouse', 'Eco Resort', 'Wellness Retreat', 'Plantation', 'Long-term Investment'],
      idealForHi: ['फार्महाउस', 'इको रिज़ॉर्ट', 'वेलनेस रिट्रीट', 'प्लांटेशन', 'दीर्घकालिक निवेश']
    },
    'premium-plots-balaghat': {
      title: 'Premium Plots — Multi Location', titleHi: 'प्रीमियम प्लॉट — बहु स्थान',
      type: 'Plot', typeHi: 'प्लॉट',
      status: 'Available', statusHi: 'उपलब्ध',
      location: 'Garra, Dongaria, Devtola, Waraseoni', locationHi: 'गर्रा, डोंगरिया, देवटोला, वारासिवनी',
      price: '₹600 – ₹3,000/sqft', priceHi: '₹600 – ₹3,000/वर्ग फ़ीट',
      area: 'Multiple Options', bhk: 'N/A', badgeColor: '#1a6b3c',
      images: ['images/premium-plots.jpg'],
      features: ['Multiple Locations', 'Flexible Sizes', 'Clear Titles', 'Bank Loan Facility', 'Wide Roads', 'All Amenities', 'Gated Options', 'Investment Grade', 'Rapid Appreciation', 'Immediate Registry'],
      featuresHi: ['कई स्थान', 'लचीले आकार', 'क्लियर टाइटल', 'बैंक लोन सुविधा', 'चौड़ी सड़कें', 'सभी सुविधाएं', 'गेटेड विकल्प', 'निवेश ग्रेड', 'तेजी से मूल्य वृद्धि', 'तुरंत रजिस्ट्री'],
      desc: 'Premium plots available across prime locations: Garra Colony at ₹1,300/sqft, Dongaria at ₹2,200/sqft, Devtola at ₹3,000/sqft, and Waraseoni from ₹600 to ₹1,800/sqft. All plots come with clear titles and essential infrastructure. Choose the location that suits your budget and goals.',
      descHi: 'प्राइम लोकेशन पर प्रीमियम प्लॉट उपलब्ध: गर्रा कॉलोनी ₹1,300/वर्ग फ़ीट, डोंगरिया ₹2,200/वर्ग फ़ीट, देवटोला ₹3,000/वर्ग फ़ीट, और वारासिवनी ₹600 से ₹1,800/वर्ग फ़ीट। सभी प्लॉट क्लियर टाइटल और आवश्यक इंफ्रास्ट्रक्चर के साथ।',
      idealFor: []
    },
    'commercial-balaghat': {
      title: 'Commercial Space — Balaghat', titleHi: 'कमर्शियल स्पेस — बालाघाट',
      type: 'Commercial', typeHi: 'कमर्शियल',
      status: 'Available', statusHi: 'उपलब्ध',
      location: 'Balaghat City', locationHi: 'बालाघाट शहर',
      price: 'Contact for Price', priceHi: 'कीमत के लिए संपर्क करें',
      area: 'Commercial Space', bhk: 'N/A', badgeColor: '#8c3a3a',
      images: ['images/commercial-bgt.jpg'],
      features: ['Glass Frontage', 'Prime Location', 'High Footfall Area', 'Ample Parking', 'Power Backup', 'Modern Design', 'Multiple Floor Options', 'Lift Access', 'Fire Safety', 'CCTV Security'],
      featuresHi: ['ग्लास फ्रंटेज', 'प्राइम लोकेशन', 'हाई फुटफॉल एरिया', 'पर्याप्त पार्किंग', 'पावर बैकअप', 'मॉडर्न डिज़ाइन', 'मल्टीपल फ्लोर विकल्प', 'लिफ्ट एक्सेस', 'फायर सेफ्टी', 'CCTV सुरक्षा'],
      desc: 'Premium commercial spaces in the heart of Balaghat city with elegant glass frontage. Perfect for showrooms, offices, clinics, and retail businesses. High visibility location with excellent footfall. Modern construction with all contemporary amenities.',
      descHi: 'बालाघाट शहर के दिल में शानदार ग्लास फ्रंटेज के साथ प्रीमियम कमर्शियल स्पेस। शोरूम, ऑफिस, क्लिनिक और रिटेल बिज़नेस के लिए एकदम सही। उच्च विज़िबिलिटी लोकेशन। सभी आधुनिक सुविधाओं के साथ।',
      idealFor: []
    },
    'garra-colony': {
      title: 'Garra Colony Plots', titleHi: 'गर्रा कॉलोनी प्लॉट',
      type: 'Plot', typeHi: 'प्लॉट',
      status: 'Available', statusHi: 'उपलब्ध',
      location: 'Garra, Balaghat', locationHi: 'गर्रा, बालाघाट',
      price: '₹1,300/sqft', priceHi: '₹1,300/वर्ग फ़ीट',
      area: 'Residential Plots', bhk: 'N/A', badgeColor: '#1a6b3c',
      images: ['images/garra-colony.jpg'],
      features: ['Affordable Pricing', 'Wide Roads', 'Drainage System', 'Street Lights', 'Water Supply', 'Electricity', 'Clear Title', 'Bank Loan Available', 'Near Balaghat City', 'Growing Area'],
      featuresHi: ['किफायती कीमत', 'चौड़ी सड़कें', 'ड्रेनेज सिस्टम', 'स्ट्रीट लाइट', 'पानी की सप्लाई', 'बिजली', 'क्लियर टाइटल', 'बैंक लोन उपलब्ध', 'बालाघाट शहर के पास', 'विकासशील क्षेत्र'],
      desc: 'Affordable residential plots in the upcoming Garra Colony at just ₹1,300/sqft. Well-planned layout with wide roads, proper drainage, and all basic amenities. Close to Balaghat city center with excellent growth potential. Ideal for building your dream home.',
      descHi: 'आगामी गर्रा कॉलोनी में मात्र ₹1,300/वर्ग फ़ीट पर किफायती आवासीय प्लॉट। चौड़ी सड़कों, उचित ड्रेनेज और सभी बुनियादी सुविधाओं के साथ सुनियोजित लेआउट। बालाघाट शहर के केंद्र के करीब। अपने सपनों का घर बनाने के लिए आदर्श।',
      idealFor: []
    }
  };

  var propertyOrder = [
    'vanam-valley', 'gangulpara-holiday-homes', 'green-velly-dongaria',
    'waraseoni-flats', 'rampayli-road', 'jagantola-land',
    'premium-plots-balaghat', 'commercial-balaghat', 'garra-colony'
  ];

  /* ---- BLOG DATA ---- */
  var blogs = {
    'balaghat-investment': {
      title: 'Why Balaghat is the Next Big Real Estate Investment Destination',
      titleHi: 'बालाघाट अगला बड़ा रियल एस्टेट निवेश गंतव्य क्यों है',
      category: 'Investment Tips', categoryHi: 'निवेश टिप्स',
      categoryColor: '#2d5a27',
      date: 'August 2026', dateHi: 'अगस्त 2026', readTime: '5 min',
      gradient: 'linear-gradient(135deg,#1a3c2a,#2d5a27,#1a4a30)', icon: '<svg viewBox="0 0 48 48" fill="none" stroke="rgba(255,255,255,0.9)" stroke-width="1.5" class="blog-icon"><path d="M8 36l8-12 6 6 10-14 8 8"/><path d="M32 14h8v8"/></svg>',
      content: '<p>Balaghat, nestled in the eastern corner of Madhya Pradesh, is rapidly emerging as one of the most promising real estate investment destinations in central India. Strategically positioned as the gateway between Madhya Pradesh and Maharashtra, this district offers a unique combination of natural beauty, improving infrastructure, and remarkably affordable property prices that savvy investors are beginning to notice.</p><p>One of the strongest drivers of demand in the Balaghat region is its proximity to Kanha National Park, one of India\'s most celebrated tiger reserves. The growing eco-tourism industry has created significant demand for farmhouses, weekend retreats, and hospitality properties in the surrounding areas. Properties near Gangulpara Dam and the forest belt are increasingly sought after by buyers from Nagpur, Jabalpur, and even Bhopal who want a serene second home amidst nature.</p><p>The road infrastructure connecting Balaghat to major cities is undergoing substantial upgrades. The NH-44 corridor improvements and the Gondia-Balaghat highway modernization are reducing travel times significantly. What once felt like a remote district is now well within weekend-drive distance from Nagpur, making it attractive for both residential and investment purposes. The proposed railway line upgrades further strengthen the connectivity story.</p><p>Perhaps the most compelling argument for investing in Balaghat is the pricing advantage. Current property prices in Balaghat are approximately 60 to 70 percent lower than comparable locations in Nagpur, Jabalpur, and Bhopal. Residential plots that would cost lakhs per square foot in these cities are available at a fraction of the price here, presenting massive appreciation potential as the region develops. Early investors in similar tier-3 towns across India have historically seen returns of 3x to 5x over a decade.</p><p>The growing middle class in Balaghat is driving demand for quality housing, modern commercial spaces, and organized retail. Government initiatives for smart city development and industrial corridor planning are bringing new employment opportunities and infrastructure investment to the region. Dam-side and forest-adjacent land parcels are being recognized as premium assets for weekend homes, wellness retreats, and eco-resorts.</p><p>With over a decade of local expertise, BGT Realty has been at the forefront of identifying high-growth areas and helping investors make informed decisions. Our deep understanding of land records, title verification, and local market dynamics ensures that every investment is secure and well-positioned for growth. The conclusion is clear: early movers will benefit most as Balaghat follows the proven trajectory of towns like Wardha and Seoni, which saw significant appreciation after infrastructure improvements connected them to larger urban centers.</p>',
      contentHi: '<p>बालाघाट, मध्य प्रदेश के पूर्वी कोने में बसा, तेजी से मध्य भारत में सबसे आशाजनक रियल एस्टेट निवेश गंतव्यों में से एक के रूप में उभर रहा है। मध्य प्रदेश और महाराष्ट्र के बीच प्रवेश द्वार के रूप में रणनीतिक रूप से स्थित, यह जिला प्राकृतिक सुंदरता, बेहतर होती बुनियादी ढांचा और उल्लेखनीय रूप से सस्ती संपत्ति कीमतों का अनूठा संयोजन प्रदान करता है जिसे समझदार निवेशक पहचानने लगे हैं।</p><p>बालाघाट क्षेत्र में मांग के सबसे मजबूत कारणों में से एक कान्हा राष्ट्रीय उद्यान से इसकी निकटता है, जो भारत के सबसे प्रसिद्ध टाइगर रिजर्व में से एक है। बढ़ता हुआ इको-टूरिज्म उद्योग आसपास के क्षेत्रों में फार्महाउस, वीकेंड रिट्रीट और हॉस्पिटैलिटी प्रॉपर्टीज की महत्वपूर्ण मांग पैदा कर रहा है। गंगुलपारा डैम और वन पट्टी के पास की प्रॉपर्टीज नागपुर, जबलपुर और यहां तक कि भोपाल के खरीदारों द्वारा तेजी से मांगी जा रही हैं।</p><p>बालाघाट को प्रमुख शहरों से जोड़ने वाली सड़क अवसंरचना में पर्याप्त उन्नयन हो रहा है। NH-44 कॉरिडोर सुधार और गोंदिया-बालाघाट राजमार्ग आधुनिकीकरण यात्रा के समय को काफी कम कर रहा है। जो कभी दूरस्थ जिला लगता था, वह अब नागपुर से वीकेंड-ड्राइव की दूरी पर है। प्रस्तावित रेलवे लाइन उन्नयन कनेक्टिविटी की कहानी को और मजबूत करते हैं।</p><p>बालाघाट में निवेश के लिए शायद सबसे आकर्षक तर्क मूल्य लाभ है। बालाघाट में वर्तमान संपत्ति की कीमतें नागपुर, जबलपुर और भोपाल में तुलनीय स्थानों से लगभग 60 से 70 प्रतिशत कम हैं। आवासीय प्लॉट जो इन शहरों में लाखों प्रति वर्ग फ़ीट पर उपलब्ध हैं, यहां बहुत कम कीमत पर मिलते हैं। समान टियर-3 शहरों में शुरुआती निवेशकों ने ऐतिहासिक रूप से एक दशक में 3x से 5x तक का रिटर्न देखा है।</p><p>बालाघाट में बढ़ता मध्यम वर्ग गुणवत्तापूर्ण आवास, आधुनिक कमर्शियल स्पेस और संगठित रिटेल की मांग बढ़ा रहा है। स्मार्ट सिटी विकास और औद्योगिक कॉरिडोर योजना के लिए सरकारी पहल इस क्षेत्र में नए रोजगार और बुनियादी ढांचा निवेश ला रही हैं। डैम-साइड और वन-आसन्न भूमि पार्सल को वीकेंड होम, वेलनेस रिट्रीट और इको-रिज़ॉर्ट के लिए प्रीमियम संपत्ति के रूप में मान्यता मिल रही है।</p><p>एक दशक से अधिक के स्थानीय अनुभव के साथ, BGT Realty उच्च-विकास क्षेत्रों की पहचान करने और निवेशकों को सूचित निर्णय लेने में मदद करने में अग्रणी रहा है। निष्कर्ष स्पष्ट है: जल्दी कदम उठाने वालों को सबसे अधिक लाभ होगा क्योंकि बालाघाट वार्धा और सिवनी जैसे शहरों के सिद्ध प्रक्षेपवक्र का अनुसरण करता है।</p>'
    },
    'plot-buying-guide': {
      title: '5 Things to Check Before Buying a Plot in Madhya Pradesh',
      titleHi: 'मध्य प्रदेश में प्लॉट खरीदने से पहले 5 बातें जांचें',
      category: 'Buying Guide', categoryHi: 'खरीद गाइड',
      categoryColor: '#8B6914',
      date: 'July 2026', dateHi: 'जुलाई 2026', readTime: '4 min',
      gradient: 'linear-gradient(135deg,#5a4320,#8B6914,#6a5020)', icon: '<svg viewBox="0 0 48 48" fill="none" stroke="rgba(255,255,255,0.9)" stroke-width="1.5" class="blog-icon"><rect x="10" y="6" width="28" height="36" rx="2"/><path d="M16 16h16M16 22h16M16 28h10"/><path d="M16 12h8"/></svg>',
      content: '<h3>1. Verify the Title Deed</h3><p>The most critical step before purchasing any plot is verifying the title deed. You must ensure that the seller has a clear and marketable title to the property. Visit the sub-registrar office to check the complete ownership chain going back at least 30 years. Look for any encumbrances, pending litigation, or disputes associated with the land. A clean title deed means the property is free from any legal complications, and this should be your non-negotiable first step. Request certified copies of all relevant documents and have them reviewed by a qualified property lawyer before proceeding.</p><h3>2. Check RERA Registration</h3><p>Under the Real Estate Regulatory Authority Act, all plotted developments and layouts in Madhya Pradesh must be registered with MP RERA. Before investing in any plot within a colony or layout, verify the project\'s RERA registration on the official website rera.mp.gov.in. The RERA certificate confirms that the developer has obtained all necessary approvals, the project details are accurately represented, and there is a mechanism for grievance redressal. Be wary of any developer who cannot provide a valid RERA registration number, as purchasing in an unregistered project leaves you with limited legal protection.</p><h3>3. Assess Location and Infrastructure</h3><p>A plot\'s value is fundamentally tied to its location and the quality of surrounding infrastructure. Evaluate road connectivity to major highways and city centers, the availability of municipal water supply and electricity connections, and proximity to essential services like schools, hospitals, and markets. Research the local municipal authority\'s future development plans for the area, as upcoming road projects, commercial zones, or institutional developments can significantly impact property values. Visit the site at different times of day to assess traffic patterns, noise levels, and the general character of the neighborhood.</p><h3>4. Get Encumbrance Certificate</h3><p>An Encumbrance Certificate, commonly known as an EC, is a vital document that provides a complete record of all transactions and legal proceedings associated with a property over a specified period. You can obtain this certificate from the sub-registrar office where the property is registered. The EC reveals whether the property has been used as collateral for any loan, whether there are any pending mortgages, and whether all previous sales have been properly registered. A clean EC for at least the past 13 years gives you confidence that the property is free from hidden financial liabilities.</p><h3>5. Legal Due Diligence</h3><p>Always engage a registered local lawyer who specializes in property law to conduct thorough due diligence before finalizing any purchase. The lawyer should verify the land-use zone classification to ensure the plot is designated for your intended use, whether residential, commercial, or agricultural. A professional land survey should be conducted to verify that the physical boundaries of the plot match the measurements in the sale deed. Understand the complete stamp duty and registration process in Madhya Pradesh, including current rates and required documentation. The stamp duty in MP currently ranges from 7.5 to 10 percent depending on the municipality, plus registration charges. Having proper legal guidance through this process protects your investment and ensures a smooth transaction.</p>',
      contentHi: '<h3>1. टाइटल डीड सत्यापित करें</h3><p>किसी भी प्लॉट को खरीदने से पहले सबसे महत्वपूर्ण कदम टाइटल डीड का सत्यापन है। आपको यह सुनिश्चित करना होगा कि विक्रेता के पास संपत्ति का स्पष्ट और विपणन योग्य शीर्षक है। कम से कम 30 वर्ष पीछे जाकर पूर्ण स्वामित्व श्रृंखला की जांच करने के लिए उप-रजिस्ट्रार कार्यालय जाएं। भूमि से जुड़ी किसी भी बाधा, लंबित मुकदमेबाजी या विवादों की तलाश करें। स्वच्छ टाइटल डीड का अर्थ है कि संपत्ति किसी भी कानूनी जटिलता से मुक्त है। आगे बढ़ने से पहले सभी प्रासंगिक दस्तावेजों की प्रमाणित प्रतियां मांगें और उन्हें एक योग्य संपत्ति वकील से समीक्षा करवाएं।</p><h3>2. RERA पंजीकरण जांचें</h3><p>रियल एस्टेट विनियामक प्राधिकरण अधिनियम के तहत, मध्य प्रदेश में सभी प्लॉटेड डेवलपमेंट और लेआउट MP RERA के साथ पंजीकृत होने चाहिए। किसी भी कॉलोनी या लेआउट के भीतर प्लॉट में निवेश करने से पहले, आधिकारिक वेबसाइट rera.mp.gov.in पर प्रोजेक्ट का RERA पंजीकरण सत्यापित करें। RERA प्रमाणपत्र पुष्टि करता है कि डेवलपर ने सभी आवश्यक अनुमोदन प्राप्त कर लिए हैं। किसी भी ऐसे डेवलपर से सावधान रहें जो वैध RERA पंजीकरण संख्या प्रदान नहीं कर सकता।</p><h3>3. स्थान और बुनियादी ढांचे का आकलन करें</h3><p>एक प्लॉट का मूल्य मूल रूप से उसके स्थान और आसपास के बुनियादी ढांचे की गुणवत्ता से जुड़ा होता है। प्रमुख राजमार्गों और शहर केंद्रों से सड़क कनेक्टिविटी, नगरपालिका जल आपूर्ति और बिजली कनेक्शन की उपलब्धता, और स्कूलों, अस्पतालों और बाजारों जैसी आवश्यक सेवाओं से निकटता का मूल्यांकन करें। क्षेत्र के लिए स्थानीय नगरपालिका प्राधिकरण की भविष्य की विकास योजनाओं पर शोध करें। ट्रैफिक पैटर्न और शोर के स्तर का आकलन करने के लिए दिन के अलग-अलग समय पर साइट पर जाएं।</p><h3>4. एन्कम्ब्रेन्स सर्टिफिकेट प्राप्त करें</h3><p>एन्कम्ब्रेन्स सर्टिफिकेट, जिसे आमतौर पर EC के रूप में जाना जाता है, एक महत्वपूर्ण दस्तावेज है जो एक निर्दिष्ट अवधि में संपत्ति से जुड़े सभी लेनदेन और कानूनी कार्यवाही का पूरा रिकॉर्ड प्रदान करता है। आप यह प्रमाणपत्र उस उप-रजिस्ट्रार कार्यालय से प्राप्त कर सकते हैं जहां संपत्ति पंजीकृत है। EC से पता चलता है कि क्या संपत्ति को किसी ऋण के लिए संपार्श्विक के रूप में इस्तेमाल किया गया है, क्या कोई लंबित बंधक है। कम से कम पिछले 13 वर्षों के लिए स्वच्छ EC आपको विश्वास दिलाता है कि संपत्ति छिपी वित्तीय देनदारियों से मुक्त है।</p><h3>5. कानूनी उचित परिश्रम</h3><p>किसी भी खरीद को अंतिम रूप देने से पहले हमेशा संपत्ति कानून में विशेषज्ञता रखने वाले एक पंजीकृत स्थानीय वकील को संपूर्ण उचित परिश्रम करने के लिए नियुक्त करें। वकील को यह सत्यापित करना चाहिए कि प्लॉट आपके इच्छित उपयोग के लिए निर्दिष्ट है, चाहे वह आवासीय हो, कमर्शियल हो या कृषि। भौतिक सीमाओं को सत्यापित करने के लिए एक पेशेवर भूमि सर्वेक्षण किया जाना चाहिए। मध्य प्रदेश में पूर्ण स्टांप ड्यूटी और पंजीकरण प्रक्रिया को समझें। MP में स्टांप ड्यूटी वर्तमान में नगरपालिका के आधार पर 7.5 से 10 प्रतिशत तक है। उचित कानूनी मार्गदर्शन आपके निवेश की रक्षा करता है।</p>'
    },
    'vanam-valley-project': {
      title: "Vanam Valley: Balaghat's First Premium Gated Farmhouse Community",
      titleHi: 'वनम वैली: बालाघाट का पहला प्रीमियम गेटेड फार्महाउस कम्युनिटी',
      category: 'Project Update', categoryHi: 'प्रोजेक्ट अपडेट',
      categoryColor: '#3a6186',
      date: 'July 2026', dateHi: 'जुलाई 2026', readTime: '5 min',
      gradient: 'linear-gradient(135deg,#2a4a6a,#3a6186,#2a5070)', icon: '<svg viewBox="0 0 48 48" fill="none" stroke="rgba(255,255,255,0.9)" stroke-width="1.5" class="blog-icon"><path d="M24 6l18 14v20a2 2 0 01-2 2H8a2 2 0 01-2-2V20L24 6z"/><rect x="18" y="28" width="12" height="14"/><path d="M18 20h12"/></svg>',
      content: '<p>BGT Realty is proud to introduce Vanam Valley, our flagship project and Balaghat district\'s first-ever premium gated farmhouse community. Located at the picturesque Gaagulpara Tekadi near the renowned Gangulpara Dam, Vanam Valley represents a bold new vision for luxury living in the heart of central India. This is not just a real estate project; it is a lifestyle statement that brings the concept of curated second homes amidst nature to a region that has long deserved it.</p><p>The vision behind Vanam Valley is simple yet ambitious: to create luxury second homes where families can escape the noise and stress of urban life and reconnect with nature without sacrificing modern comforts. The community is designed around the natural landscape, preserving existing trees and water features while integrating contemporary architecture that blends seamlessly with the surroundings. The dam-side location provides breathtaking views of water and forested hills, creating an atmosphere of tranquility that is increasingly rare in modern India.</p><p>The master plan for Vanam Valley has been thoughtfully designed with 25-foot wide internal roads, ensuring comfortable access throughout the community. The gated entry with 24x7 security personnel and comprehensive CCTV surveillance provides peace of mind for homeowners, whether they are in residence or visiting on weekends. Every aspect of the infrastructure has been planned to international standards while remaining sensitive to the natural environment.</p><p>The 2BHK farmhouse units at Vanam Valley feature a distinctive Mediterranean-inspired architectural style with elegant blue arched windows and terracotta-toned exteriors. Each unit is designed to maximize natural light and cross-ventilation, with spacious living areas that open onto private garden spaces. The design philosophy emphasizes indoor-outdoor living, with covered verandas and sit-out areas that allow residents to enjoy the surrounding nature from the comfort of their homes.</p><p>The amenities at Vanam Valley are truly world-class and unprecedented for the Balaghat region. Residents will enjoy access to a swimming pool, fully equipped club house, modern gymnasium, lawn tennis court, cricket practice pitch, badminton court, and a dedicated fishing zone near the dam. The landscaped gardens feature walking trails, meditation spots, and a children\'s play area. Indoor recreation includes pool table, carrom, chess, and table tennis facilities. These amenities are designed to make Vanam Valley a complete destination where families can spend quality time together.</p><p>From an investment perspective, gated farmhouse communities near water bodies in Madhya Pradesh have shown consistent appreciation. The combination of limited supply, increasing demand for weekend homes from urban professionals in Nagpur and Jabalpur, and the improving connectivity to Balaghat positions Vanam Valley as a compelling investment opportunity. Early buyers will benefit from launch pricing and the ability to select premium plot locations within the community.</p><p>Vanam Valley is currently in the launching soon phase, and BGT Realty is accepting expressions of interest from serious buyers. Custom plot selection is available, allowing buyers to choose their preferred location within the community. For a personal site visit and detailed presentation, contact BGT Realty at 8319220955. Our team will be happy to walk you through the master plan, show you the actual site, and help you select the perfect plot for your dream farmhouse.</p>',
      contentHi: '<p>BGT Realty गर्व से वनम वैली प्रस्तुत करता है, हमारा फ्लैगशिप प्रोजेक्ट और बालाघाट जिले का पहला प्रीमियम गेटेड फार्महाउस कम्युनिटी। प्रसिद्ध गंगुलपारा डैम के पास सुरम्य गागुलपारा टेकाड़ी पर स्थित, वनम वैली मध्य भारत के दिल में लक्जरी लिविंग के लिए एक साहसिक नई दृष्टि का प्रतिनिधित्व करता है। यह सिर्फ एक रियल एस्टेट प्रोजेक्ट नहीं है; यह एक लाइफस्टाइल स्टेटमेंट है।</p><p>वनम वैली के पीछे की दृष्टि सरल लेकिन महत्वाकांक्षी है: ऐसे लक्जरी सेकंड होम बनाना जहां परिवार शहरी जीवन के शोर और तनाव से बचकर आधुनिक सुविधाओं का त्याग किए बिना प्रकृति से जुड़ सकें। कम्युनिटी को प्राकृतिक परिदृश्य के चारों ओर डिजाइन किया गया है। डैम-साइड लोकेशन पानी और जंगली पहाड़ियों के लुभावने दृश्य प्रदान करती है।</p><p>वनम वैली का मास्टर प्लान 25 फ़ीट चौड़ी आंतरिक सड़कों के साथ विचारपूर्वक डिजाइन किया गया है। 24x7 सुरक्षा कर्मियों और व्यापक CCTV निगरानी के साथ गेटेड एंट्री गृहस्वामियों को मन की शांति प्रदान करती है। बुनियादी ढांचे के हर पहलू को अंतरराष्ट्रीय मानकों के अनुसार योजनाबद्ध किया गया है।</p><p>वनम वैली में 2BHK फार्महाउस इकाइयां भूमध्यसागरीय-प्रेरित वास्तुशिल्प शैली की विशेषता रखती हैं जिसमें सुरुचिपूर्ण नीली मेहराबदार खिड़कियां और टेराकोटा-टोन्ड बाहरी हिस्से हैं। प्रत्येक इकाई को प्राकृतिक प्रकाश और क्रॉस-वेंटिलेशन को अधिकतम करने के लिए डिज़ाइन किया गया है, जिसमें विशाल रहने की जगहें हैं जो निजी उद्यान स्थानों पर खुलती हैं।</p><p>वनम वैली में सुविधाएं वास्तव में विश्व स्तरीय हैं। निवासी स्विमिंग पूल, पूरी तरह सुसज्जित क्लब हाउस, आधुनिक जिम, लॉन टेनिस कोर्ट, क्रिकेट प्रैक्टिस पिच, बैडमिंटन कोर्ट और डैम के पास एक समर्पित फिशिंग ज़ोन का आनंद लेंगे। लैंडस्केप्ड गार्डन में वॉकिंग ट्रेल्स, मेडिटेशन स्पॉट और चिल्ड्रन प्ले एरिया हैं। इनडोर मनोरंजन में पूल टेबल, कैरम, शतरंज और टेबल टेनिस सुविधाएं शामिल हैं।</p><p>निवेश के दृष्टिकोण से, मध्य प्रदेश में जल निकायों के पास गेटेड फार्महाउस कम्युनिटी ने लगातार मूल्य वृद्धि दिखाई है। सीमित आपूर्ति, नागपुर और जबलपुर के शहरी पेशेवरों से वीकेंड होम की बढ़ती मांग, और बालाघाट की बेहतर कनेक्टिविटी वनम वैली को एक आकर्षक निवेश अवसर बनाती है।</p><p>वनम वैली वर्तमान में लॉन्चिंग सून चरण में है, और BGT Realty गंभीर खरीदारों से रुचि की अभिव्यक्ति स्वीकार कर रहा है। व्यक्तिगत साइट विजिट और विस्तृत प्रस्तुति के लिए, BGT Realty से 8319220955 पर संपर्क करें।</p>'
    }
  };
  var blogOrder = ['balaghat-investment', 'plot-buying-guide', 'vanam-valley-project'];

  /* ---- DOM REFS ---- */
  var navbar = document.getElementById('navbar');
  var menuToggle = document.getElementById('menuToggle');
  var menuOverlay = document.getElementById('menuOverlay');
  var menuClose = document.getElementById('menuClose');
  var langToggle = document.getElementById('langToggle');
  var stripScroll = document.getElementById('stripScroll');
  var stripArrowL = document.getElementById('stripArrowL');
  var stripArrowR = document.getElementById('stripArrowR');
  var propertyDetail = document.getElementById('propertyDetail');
  var blogDetail = document.getElementById('blogDetail');
  var adminOverlay = document.getElementById('adminOverlay');
  var contactForm = document.getElementById('contactForm');
  var toast = document.getElementById('toast');

  /* ---- LANGUAGE ---- */
  function getLang() { return localStorage.getItem('bgt_lang') || 'en'; }
  function updateSelectOptions(lang) {
    document.querySelectorAll('select option[data-en]').forEach(function (opt) {
      opt.textContent = lang === 'hi' ? opt.getAttribute('data-hi') : opt.getAttribute('data-en');
    });
    // Update placeholder for location filter
    var locInput = document.getElementById('propLocationFilter');
    if (locInput) {
      locInput.placeholder = lang === 'hi' ? 'स्थान दर्ज करें...' : 'Enter location...';
    }
  }
  function setLang(lang) {
    document.documentElement.setAttribute('data-lang', lang);
    localStorage.setItem('bgt_lang', lang);
    updateSelectOptions(lang);
  }
  setLang(getLang());
  langToggle.addEventListener('click', function () {
    setLang(getLang() === 'en' ? 'hi' : 'en');
  });

  /* ---- NAVBAR SCROLL ---- */
  window.addEventListener('scroll', function () {
    if (window.scrollY > 100) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  }, { passive: true });

  /* ---- MENU ---- */
  function openMenu() { menuOverlay.classList.add('open'); document.body.style.overflow = 'hidden'; }
  function closeMenu() { menuOverlay.classList.remove('open'); document.body.style.overflow = ''; }
  menuToggle.addEventListener('click', openMenu);
  menuClose.addEventListener('click', closeMenu);
  menuOverlay.querySelectorAll('.menu-link').forEach(function (link) {
    link.addEventListener('click', function (e) {
      // Skip if this link is inside a dropdown (handled separately)
      if (this.closest('.menu-item-dropdown')) return;
      closeMenu();
      var href = this.getAttribute('href');
      if (href && href.startsWith('#') && !href.startsWith('#property/') && !href.startsWith('#blog/')) {
        e.preventDefault();
        var target = document.querySelector(href);
        if (target) setTimeout(function () { target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 350);
      }
    });
  });

  /* ---- SMOOTH SCROLL ---- */
  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[href^="#"]');
    if (!link) return;
    var href = link.getAttribute('href');
    if (href === '#' || href.startsWith('#property/') || href.startsWith('#blog/') || href === '#admin') return;
    var target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
    }
  });

  /* ---- PROPERTY STRIP ---- */
  var stripExpanded = false;
  var STRIP_LIMIT = 4;

  function buildStrip() {
    var html = '';
    propertyOrder.forEach(function (slug, i) {
      var p = properties[slug];
      var lazy = i >= 3 ? ' loading="lazy"' : '';
      var hiddenClass = (!stripExpanded && i >= STRIP_LIMIT) ? ' strip-card-hidden' : '';
      html += '<div class="strip-card' + hiddenClass + '" data-slug="' + slug + '" data-type="' + p.type.toLowerCase() + '" data-location="' + p.location.toLowerCase() + '">' +
        '<img src="' + p.images[0] + '" alt="' + p.title + '"' + lazy + '>' +
        '<div class="strip-card-overlay">' +
        '<span class="strip-card-badge" style="background:' + p.badgeColor + '"><span class="lang-en">' + p.type + '</span><span class="lang-hi">' + p.typeHi + '</span></span>' +
        '<span class="strip-card-location"><span class="lang-en">' + p.location + '</span><span class="lang-hi">' + p.locationHi + '</span></span>' +
        '<span class="strip-card-title"><span class="lang-en">' + p.title + '</span><span class="lang-hi">' + p.titleHi + '</span></span>' +
        '<span class="strip-card-price"><span class="lang-en">' + p.price + '</span><span class="lang-hi">' + p.priceHi + '</span></span>' +
        '</div></div>';
    });
    stripScroll.innerHTML = html;
    stripScroll.querySelectorAll('.strip-card').forEach(function (card) {
      card.addEventListener('click', function () { window.location.hash = 'property/' + this.getAttribute('data-slug'); });
    });
    updateViewMoreBtn();
  }

  function applyStripLimit() {
    var cards = stripScroll.querySelectorAll('.strip-card');
    var visibleCount = 0;
    cards.forEach(function (card) {
      // Skip cards hidden by filter
      if (card.style.display === 'none') return;
      visibleCount++;
      if (!stripExpanded && visibleCount > STRIP_LIMIT) {
        card.classList.add('strip-card-hidden');
      } else {
        card.classList.remove('strip-card-hidden');
      }
    });
    updateViewMoreBtn();
  }

  function updateViewMoreBtn() {
    var btn = document.getElementById('viewMorePropertiesBtn');
    if (!btn) return;
    // Count visible (not filtered-out) cards
    var cards = stripScroll.querySelectorAll('.strip-card');
    var visibleTotal = 0;
    cards.forEach(function (card) {
      if (card.style.display !== 'none') visibleTotal++;
    });
    // Hide button if 4 or fewer results
    var wrap = btn.closest('.strip-view-more-wrap');
    if (visibleTotal <= STRIP_LIMIT) {
      if (wrap) wrap.style.display = 'none';
    } else {
      if (wrap) wrap.style.display = 'flex';
    }
    // Update button text
    var enSpan = btn.querySelector('.lang-en');
    var hiSpan = btn.querySelector('.lang-hi');
    if (stripExpanded) {
      if (enSpan) enSpan.textContent = 'Show Less';
      if (hiSpan) hiSpan.textContent = 'कम दिखाएं';
    } else {
      if (enSpan) enSpan.textContent = 'View More Properties';
      if (hiSpan) hiSpan.textContent = 'और प्रॉपर्टीज देखें';
    }
  }

  buildStrip();

  // Strip wheel scroll
  stripScroll.addEventListener('wheel', function (e) {
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) { e.preventDefault(); this.scrollLeft += e.deltaY; }
  }, { passive: false });

  // Strip arrows
  var scrollAmt = 504;
  stripArrowR.addEventListener('click', function () { stripScroll.scrollBy({ left: scrollAmt, behavior: 'smooth' }); });
  stripArrowL.addEventListener('click', function () { stripScroll.scrollBy({ left: -scrollAmt, behavior: 'smooth' }); });
  function updateArrows() {
    stripArrowL.classList.toggle('hidden', stripScroll.scrollLeft < 10);
    stripArrowR.classList.toggle('hidden', stripScroll.scrollLeft >= stripScroll.scrollWidth - stripScroll.clientWidth - 10);
  }
  stripScroll.addEventListener('scroll', updateArrows, { passive: true });
  updateArrows();

  /* ---- PROPERTY DETAIL ---- */
  function openProperty(slug) {
    var p = properties[slug];
    if (!p) return;
    var waText = encodeURIComponent('Hi, I am interested in ' + p.title);
    var html = '<div class="pd-topbar"><a href="#" class="pd-back">&larr; <span class="lang-en">Back</span><span class="lang-hi">वापस</span></a>' +
      '<a href="https://wa.me/918319220955?text=' + waText + '" target="_blank" rel="noopener" class="btn btn-whatsapp btn-sm">&#128172; WhatsApp</a></div>' +
      '<div class="d-gallery">' +
        '<div class="d-main-img" onclick="openLightbox(\'' + slug + '\',0)">' +
          '<img src="' + p.images[0] + '" alt="' + p.title + '" id="mainImg-' + slug + '">' +
        '</div>' +
        (p.images.length > 1 ? '<div class="d-thumbs">' +
          p.images.map(function(img, i) { return '<img src="' + img + '" alt="View ' + (i+1) + '" class="d-thumb ' + (i === 0 ? 'active' : '') + '" onclick="switchImage(\'' + slug + '\',' + i + ',this)">'; }).join('') +
        '</div>' : '') +
      '</div>' +
      '<div class="pd-content">' +
      '<div class="pd-badges"><span class="pd-badge" style="background:' + p.badgeColor + '"><span class="lang-en">' + p.type + '</span><span class="lang-hi">' + p.typeHi + '</span></span><span class="pd-badge pd-badge-status"><span class="lang-en">' + p.status + '</span><span class="lang-hi">' + p.statusHi + '</span></span></div>' +
      '<h1 class="pd-title"><span class="lang-en">' + p.title + '</span><span class="lang-hi">' + p.titleHi + '</span></h1>' +
      '<p class="pd-location"><span class="lang-en">' + p.location + '</span><span class="lang-hi">' + p.locationHi + '</span></p>' +
      '<p class="pd-price"><span class="lang-en">' + p.price + '</span><span class="lang-hi">' + p.priceHi + '</span></p>' +
      '<div class="pd-info-bar"><div class="pd-info-item"><strong><span class="lang-en">' + p.type + '</span><span class="lang-hi">' + p.typeHi + '</span></strong><span><span class="lang-en">Type</span><span class="lang-hi">प्रकार</span></span></div><div class="pd-info-item"><strong>' + p.area + '</strong><span><span class="lang-en">Area</span><span class="lang-hi">क्षेत्रफल</span></span></div><div class="pd-info-item"><strong>' + p.bhk + '</strong><span>BHK</span></div><div class="pd-info-item"><strong><span class="lang-en">' + p.status + '</span><span class="lang-hi">' + p.statusHi + '</span></strong><span><span class="lang-en">Status</span><span class="lang-hi">स्थिति</span></span></div></div>' +
      '<p class="pd-desc"><span class="lang-en">' + p.desc + '</span><span class="lang-hi">' + p.descHi + '</span></p>' +
      '<h3 class="pd-section-title"><span class="lang-en">Features & Amenities</span><span class="lang-hi">सुविधाएं</span></h3><div class="pd-features">';
    p.features.forEach(function (f, i) { html += '<span class="pd-feature-pill"><span class="lang-en">' + f + '</span><span class="lang-hi">' + (p.featuresHi[i] || f) + '</span></span>'; });
    html += '</div>';
    if (p.idealFor && p.idealFor.length) {
      html += '<h3 class="pd-section-title"><span class="lang-en">Ideal For</span><span class="lang-hi">किसके लिए आदर्श</span></h3><div class="pd-ideal-for">';
      p.idealFor.forEach(function (f, i) { html += '<span class="pd-ideal-tag"><span class="lang-en">' + f + '</span><span class="lang-hi">' + (p.idealForHi ? p.idealForHi[i] : f) + '</span></span>'; });
      html += '</div>';
    }
    html += '<div class="pd-enquiry-form"><h3><span class="lang-en">Enquire About This Property</span><span class="lang-hi">इस प्रॉपर्टी के बारे में पूछें</span></h3><form class="contact-form" id="pdEnquiryForm"><div class="form-group"><input type="text" name="name" required placeholder=" "><label><span class="lang-en">Your Name</span><span class="lang-hi">आपका नाम</span></label></div><div class="form-group"><input type="tel" name="phone" required placeholder=" "><label><span class="lang-en">Phone Number</span><span class="lang-hi">फ़ोन नंबर</span></label></div><div class="form-group"><textarea name="message" rows="3" placeholder=" "></textarea><label><span class="lang-en">Message</span><span class="lang-hi">संदेश</span></label></div><button type="submit" class="btn btn-primary btn-full"><span class="lang-en">Send Enquiry</span><span class="lang-hi">पूछताछ भेजें</span></button></form></div>' +
      '<div class="pd-contact-bar"><a href="tel:+918319220955">&#128222; 8319220955</a><a href="tel:+918103014439">&#128222; 8103014439</a><a href="https://wa.me/918319220955?text=' + waText + '" target="_blank" rel="noopener">&#128172; WhatsApp</a></div>' +
      '<div class="contact-map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3699.123!2d80.186!3d21.814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDQ4JzUwLjQiTiA4MMKwMTEnMDkuNiJF!5e0!3m2!1sen!2sin!4v1" width="100%" height="220" style="border:0;border-radius:12px" allowfullscreen loading="lazy" title="Location Map"></iframe></div></div>' +
      '<div class="pd-mobile-bar"><a href="tel:+918319220955" class="btn-call">&#128222; <span class="lang-en">Call</span><span class="lang-hi">कॉल</span></a><a href="https://wa.me/918319220955?text=' + waText + '" target="_blank" rel="noopener" class="btn-wa">&#128172; WhatsApp</a></div>';
    propertyDetail.innerHTML = html;
    propertyDetail.classList.add('open');
    propertyDetail.scrollTop = 0;
    document.body.style.overflow = 'hidden';
    propertyDetail.querySelector('.pd-back').addEventListener('click', function (e) { e.preventDefault(); window.location.hash = ''; });
    var pdForm = document.getElementById('pdEnquiryForm');
    if (pdForm) pdForm.addEventListener('submit', function (e) { e.preventDefault(); showToast(getLang() === 'hi' ? 'पूछताछ भेजी गई!' : 'Enquiry sent!'); pdForm.reset(); });
  }
  function closeProperty() { propertyDetail.classList.remove('open'); propertyDetail.innerHTML = ''; document.body.style.overflow = ''; }

  /* ---- BLOG DETAIL ---- */
  function openBlog(slug) {
    var b = blogs[slug];
    if (!b) return;
    var isHi = getLang() === 'hi';
    var shareUrl = window.location.origin + window.location.pathname + '#blog/' + slug;
    var shareText = encodeURIComponent((isHi ? b.titleHi : b.title) + ' - BGT Realty Blog');
    var html = '<div class="bd-topbar"><a href="#" class="bd-back">&larr; <span class="lang-en">Back to Blog</span><span class="lang-hi">ब्लॉग पर वापस</span></a><div style="display:flex;gap:8px"><a href="https://wa.me/?text=' + shareText + '%20' + encodeURIComponent(shareUrl) + '" target="_blank" rel="noopener" class="btn btn-whatsapp btn-sm">&#128172; Share</a></div></div>' +
      '<div class="bd-hero-img blog-card-visual" style="background:' + b.gradient + '">' + b.icon + '</div>' +
      '<div class="bd-content">' +
      '<div class="bd-meta"><span class="blog-badge" style="background:rgba(0,0,0,0.06);color:' + b.categoryColor + '"><span class="lang-en">' + b.category + '</span><span class="lang-hi">' + b.categoryHi + '</span></span><span class="blog-card-meta"><span class="lang-en">' + b.date + '</span><span class="lang-hi">' + b.dateHi + '</span> &middot; ' + b.readTime + '</span></div>' +
      '<h1 class="bd-title"><span class="lang-en">' + b.title + '</span><span class="lang-hi">' + b.titleHi + '</span></h1>' +
      '<div class="bd-body"><span class="lang-en">' + b.content + '</span><span class="lang-hi">' + b.contentHi + '</span></div>' +
      '<div class="bd-share"><a href="https://wa.me/?text=' + shareText + '%20' + encodeURIComponent(shareUrl) + '" target="_blank" rel="noopener" class="bd-share-wa">&#128172; <span class="lang-en">Share on WhatsApp</span><span class="lang-hi">WhatsApp पर शेयर</span></a><button class="bd-share-copy" data-url="' + shareUrl + '">&#128203; <span class="lang-en">Copy Link</span><span class="lang-hi">लिंक कॉपी</span></button></div>';
    // Related posts
    html += '<div class="bd-related"><h3><span class="lang-en">Related Posts</span><span class="lang-hi">संबंधित पोस्ट</span></h3><div class="bd-related-grid">';
    blogOrder.filter(function (s) { return s !== slug; }).forEach(function (s) {
      var r = blogs[s];
      html += '<div class="blog-card" data-blog="' + s + '" style="cursor:pointer"><div class="blog-card-visual" style="background:' + r.gradient + ';height:160px">' + r.icon + '</div><div class="blog-card-body"><span class="blog-badge" style="background:rgba(0,0,0,0.06);color:' + r.categoryColor + '"><span class="lang-en">' + r.category + '</span><span class="lang-hi">' + r.categoryHi + '</span></span><h3 class="blog-card-title"><span class="lang-en">' + r.title + '</span><span class="lang-hi">' + r.titleHi + '</span></h3></div></div>';
    });
    html += '</div></div></div>';
    blogDetail.innerHTML = html;
    blogDetail.classList.add('open');
    blogDetail.scrollTop = 0;
    document.body.style.overflow = 'hidden';
    blogDetail.querySelector('.bd-back').addEventListener('click', function (e) { e.preventDefault(); window.location.hash = ''; });
    blogDetail.querySelectorAll('.blog-card[data-blog]').forEach(function (card) {
      card.addEventListener('click', function () { window.location.hash = 'blog/' + this.getAttribute('data-blog'); });
    });
    var copyBtn = blogDetail.querySelector('.bd-share-copy');
    if (copyBtn) copyBtn.addEventListener('click', function () {
      navigator.clipboard.writeText(this.getAttribute('data-url')).then(function () { showToast('Link copied!'); });
    });
  }
  function closeBlog() { blogDetail.classList.remove('open'); blogDetail.innerHTML = ''; document.body.style.overflow = ''; }

  // Blog card clicks on main page
  document.querySelectorAll('.blog-card[data-blog]').forEach(function (card) {
    card.addEventListener('click', function () { window.location.hash = 'blog/' + this.getAttribute('data-blog'); });
  });

  /* ---- ADMIN PANEL ---- */
  var ADMIN_USER = 'admin';
  var ADMIN_PASS = 'bgt@2026';
  var LS_KEY = 'bgt_properties';

  function getAdminProps() {
    try { return JSON.parse(localStorage.getItem(LS_KEY)) || []; } catch (e) { return []; }
  }
  function saveAdminProps(arr) { localStorage.setItem(LS_KEY, JSON.stringify(arr)); }
  function getStorageSize() {
    var total = 0;
    for (var k in localStorage) {
      if (localStorage.hasOwnProperty(k)) total += (localStorage[k].length + k.length) * 2;
    }
    return (total / 1024 / 1024).toFixed(1);
  }

  function showAdminLogin() {
    var html = '<div class="admin-login-wrap"><div class="admin-login-card" id="loginCard">' +
      '<img src="images/logo.png" alt="BGT Realty">' +
      '<h2>Team Login</h2>' +
      '<p class="admin-error" id="loginError">Invalid username or password</p>' +
      '<form id="loginForm">' +
      '<div class="form-group"><input type="text" name="username" value="admin" placeholder=" " autocomplete="username"><label>Username</label></div>' +
      '<div class="form-group"><input type="password" name="password" placeholder=" " autocomplete="current-password"><label>Password</label></div>' +
      '<button type="submit" class="btn btn-primary btn-full">Login</button>' +
      '</form>' +
      '<a href="#" class="admin-back-link">&larr; Back to Website</a>' +
      '</div></div>';
    adminOverlay.innerHTML = html;
    adminOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    document.getElementById('loginForm').addEventListener('submit', function (e) {
      e.preventDefault();
      var u = this.username.value.trim();
      var pw = this.password.value;
      if (u === ADMIN_USER && pw === ADMIN_PASS) {
        sessionStorage.setItem('bgt_admin', 'true');
        showAdminDashboard();
      } else {
        var card = document.getElementById('loginCard');
        var err = document.getElementById('loginError');
        err.classList.add('show');
        card.classList.add('shake');
        setTimeout(function () { card.classList.remove('shake'); }, 400);
      }
    });
    adminOverlay.querySelector('.admin-back-link').addEventListener('click', function (e) {
      e.preventDefault(); window.location.hash = '';
    });
  }

  function showAdminDashboard() {
    var props = getAdminProps();
    var active = props.filter(function (p) { return p.status === 'Active'; }).length;
    var sold = props.filter(function (p) { return p.status === 'Sold'; }).length;
    var html = '<div class="admin-dash"><div class="admin-topbar"><img src="images/logo.png" alt="BGT"><span class="admin-topbar-title">Admin Panel</span><div class="admin-topbar-actions"><a href="#" class="admin-view-site">View Site</a><button class="admin-logout">Logout</button></div></div>' +
      '<div class="admin-body">' +
      '<div class="admin-stats"><div class="admin-stat-card"><div class="num">' + props.length + '</div><div class="lbl">Total</div></div><div class="admin-stat-card"><div class="num">' + active + '</div><div class="lbl">Active</div></div><div class="admin-stat-card"><div class="num">' + sold + '</div><div class="lbl">Sold</div></div></div>' +
      '<button class="admin-add-btn" id="adminAddBtn">+ Add New Property</button>' +
      '<div class="admin-table-wrap"><table class="admin-table"><thead><tr><th>Img</th><th>Title</th><th>Type</th><th>Status</th><th>Actions</th></tr></thead><tbody id="adminTableBody"></tbody></table>' +
      '<div class="admin-card-list" id="adminCardList"></div></div>' +
      '<p class="admin-storage">Storage: ' + getStorageSize() + ' MB / 5 MB</p>' +
      '</div></div>';
    adminOverlay.innerHTML = html;

    function renderList() {
      var props2 = getAdminProps();
      var tbody = document.getElementById('adminTableBody');
      var cardList = document.getElementById('adminCardList');
      var thtml = '';
      var chtml = '';
      props2.forEach(function (p) {
        var src = (p.photos && p.photos[0]) ? p.photos[0] : '';
        var statusClass = p.status === 'Active' ? 'admin-status-active' : p.status === 'Sold' ? 'admin-status-sold' : 'admin-status-upcoming';
        thtml += '<tr><td>' + (src ? '<img class="thumb" src="' + src + '">' : '<div class="thumb"></div>') + '</td><td>' + escHtml(p.title) + '</td><td>' + escHtml(p.type) + '</td><td><span class="admin-status-pill ' + statusClass + '">' + escHtml(p.status) + '</span></td><td><div class="actions"><button class="btn-edit" data-id="' + p.id + '">Edit</button><button class="btn-del" data-id="' + p.id + '">Del</button></div></td></tr>';
        chtml += '<div class="admin-prop-card">' + (src ? '<img class="thumb" src="' + src + '">' : '<div class="thumb"></div>') + '<div class="admin-prop-card-info"><h4>' + escHtml(p.title) + '</h4><p>' + escHtml(p.type) + ' &middot; <span class="admin-status-pill ' + statusClass + '">' + escHtml(p.status) + '</span></p><div class="actions"><button class="btn-edit" data-id="' + p.id + '">Edit</button><button class="btn-del" data-id="' + p.id + '">Del</button></div></div></div>';
      });
      if (!props2.length) {
        thtml = '<tr><td colspan="5" style="text-align:center;padding:32px;color:rgba(26,26,26,0.3)">No properties added yet</td></tr>';
        chtml = '<p style="text-align:center;padding:32px;color:rgba(26,26,26,0.3)">No properties added yet</p>';
      }
      tbody.innerHTML = thtml;
      cardList.innerHTML = chtml;
      // Edit / Del handlers
      adminOverlay.querySelectorAll('.btn-edit').forEach(function (btn) {
        btn.addEventListener('click', function () { openPropModal(this.getAttribute('data-id')); });
      });
      adminOverlay.querySelectorAll('.btn-del').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var id = this.getAttribute('data-id');
          if (confirm('Delete this property?')) {
            var arr = getAdminProps().filter(function (x) { return x.id !== id; });
            saveAdminProps(arr);
            renderList();
          }
        });
      });
    }
    renderList();

    document.getElementById('adminAddBtn').addEventListener('click', function () { openPropModal(null); });
    adminOverlay.querySelector('.admin-view-site').addEventListener('click', function (e) { e.preventDefault(); window.location.hash = ''; });
    adminOverlay.querySelector('.admin-logout').addEventListener('click', function () { sessionStorage.removeItem('bgt_admin'); window.location.hash = ''; });

    function openPropModal(editId) {
      var existing = null;
      if (editId) existing = getAdminProps().find(function (x) { return x.id === editId; });
      var e = existing || {};
      var photos = e.photos || [];
      var modal = document.createElement('div');
      modal.className = 'admin-modal-bg';
      modal.innerHTML = '<div class="admin-modal"><h3>' + (editId ? 'Edit' : 'Add New') + ' Property</h3>' +
        '<div class="form-group"><input type="text" name="title" placeholder=" " value="' + escAttr(e.title || '') + '"><label>Title</label></div>' +
        '<div class="form-group"><select name="type"><option value="Plot"' + (e.type === 'Plot' ? ' selected' : '') + '>Plot</option><option value="Flat"' + (e.type === 'Flat' ? ' selected' : '') + '>Flat</option><option value="House"' + (e.type === 'House' ? ' selected' : '') + '>House</option><option value="Land"' + (e.type === 'Land' ? ' selected' : '') + '>Land</option><option value="Farmhouse"' + (e.type === 'Farmhouse' ? ' selected' : '') + '>Farmhouse</option><option value="Commercial"' + (e.type === 'Commercial' ? ' selected' : '') + '>Commercial</option></select></div>' +
        '<div class="form-group"><select name="listing"><option value="Sale"' + (e.listing === 'Sale' ? ' selected' : '') + '>Sale</option><option value="Rent"' + (e.listing === 'Rent' ? ' selected' : '') + '>Rent</option></select></div>' +
        '<div class="form-group"><input type="text" name="price" placeholder=" " value="' + escAttr(e.price || '') + '"><label>Price</label></div>' +
        '<div class="form-group"><input type="text" name="area" placeholder=" " value="' + escAttr(e.area || '') + '"><label>Area (sq.ft)</label></div>' +
        '<div class="form-group"><input type="text" name="bedrooms" placeholder=" " value="' + escAttr(e.bedrooms || '') + '"><label>Bedrooms</label></div>' +
        '<div class="form-group"><input type="text" name="bathrooms" placeholder=" " value="' + escAttr(e.bathrooms || '') + '"><label>Bathrooms</label></div>' +
        '<div class="form-group"><input type="text" name="location" placeholder=" " value="' + escAttr(e.location || '') + '"><label>Location</label></div>' +
        '<div class="form-group"><input type="text" name="landmark" placeholder=" " value="' + escAttr(e.landmark || '') + '"><label>Landmark</label></div>' +
        '<div class="form-group"><textarea name="description" rows="3" placeholder=" ">' + escHtml(e.description || '') + '</textarea><label>Description</label></div>' +
        '<div class="form-group"><input type="text" name="features" placeholder=" " value="' + escAttr((e.features || []).join(', ')) + '"><label>Features (comma-separated)</label></div>' +
        '<div class="photo-previews" id="photoPreviews"></div>' +
        '<div class="photo-upload-zone" id="photoZone"><p>Drag & drop photos or</p><span class="browse-btn">Browse</span><input type="file" id="photoInput" multiple accept="image/*"><p style="font-size:11px;margin-top:8px;color:rgba(26,26,26,0.3)">Max 5 photos, 2MB each</p></div>' +
        '<div class="form-group"><input type="text" name="contactPerson" placeholder=" " value="' + escAttr(e.contactPerson || '') + '"><label>Contact Person</label></div>' +
        '<div class="form-group"><input type="text" name="contactNumber" placeholder=" " value="' + escAttr(e.contactNumber || '8319220955') + '"><label>Contact Number</label></div>' +
        '<div class="form-group"><select name="status"><option value="Active"' + (e.status === 'Active' ? ' selected' : '') + '>Active</option><option value="Sold"' + (e.status === 'Sold' ? ' selected' : '') + '>Sold</option><option value="Upcoming"' + (e.status === 'Upcoming' ? ' selected' : '') + '>Upcoming</option></select></div>' +
        '<div class="admin-checkbox"><input type="checkbox" name="featured" id="featuredCb"' + (e.featured ? ' checked' : '') + '><label for="featuredCb">Featured Property</label></div>' +
        '<div class="admin-modal-actions"><button class="admin-modal-cancel">Cancel</button><button class="admin-modal-save">Save</button></div></div>';
      adminOverlay.appendChild(modal);

      var currentPhotos = photos.slice();
      renderPhotoPreviews();

      function renderPhotoPreviews() {
        var pp = modal.querySelector('#photoPreviews');
        pp.innerHTML = '';
        currentPhotos.forEach(function (src, i) {
          pp.innerHTML += '<div class="photo-preview"><img src="' + src + '"><button class="remove-photo" data-idx="' + i + '">&times;</button></div>';
        });
        pp.querySelectorAll('.remove-photo').forEach(function (btn) {
          btn.addEventListener('click', function () {
            currentPhotos.splice(parseInt(this.getAttribute('data-idx')), 1);
            renderPhotoPreviews();
          });
        });
      }

      // Photo upload
      var photoInput = modal.querySelector('#photoInput');
      var photoZone = modal.querySelector('#photoZone');
      photoZone.addEventListener('click', function (ev) { if (ev.target !== photoInput) photoInput.click(); });
      photoZone.addEventListener('dragover', function (ev) { ev.preventDefault(); this.classList.add('dragover'); });
      photoZone.addEventListener('dragleave', function () { this.classList.remove('dragover'); });
      photoZone.addEventListener('drop', function (ev) { ev.preventDefault(); this.classList.remove('dragover'); handleFiles(ev.dataTransfer.files); });
      photoInput.addEventListener('change', function () { handleFiles(this.files); this.value = ''; });

      function handleFiles(files) {
        Array.from(files).forEach(function (file) {
          if (currentPhotos.length >= 5) return;
          if (file.size > 2 * 1024 * 1024 || !file.type.startsWith('image/')) return;
          compressImage(file, function (dataUrl) {
            currentPhotos.push(dataUrl);
            renderPhotoPreviews();
          });
        });
      }

      function compressImage(file, cb) {
        var reader = new FileReader();
        reader.onload = function (ev) {
          var img = new Image();
          img.onload = function () {
            var max = 800;
            var w = img.width, h = img.height;
            if (w > max) { h = h * max / w; w = max; }
            var canvas = document.createElement('canvas');
            canvas.width = w; canvas.height = h;
            canvas.getContext('2d').drawImage(img, 0, 0, w, h);
            cb(canvas.toDataURL('image/jpeg', 0.7));
          };
          img.src = ev.target.result;
        };
        reader.readAsDataURL(file);
      }

      modal.querySelector('.admin-modal-cancel').addEventListener('click', function () { modal.remove(); });
      modal.addEventListener('click', function (ev) { if (ev.target === modal) modal.remove(); });
      modal.querySelector('.admin-modal-save').addEventListener('click', function () {
        var m = modal.querySelector('.admin-modal');
        var title = m.querySelector('[name=title]').value.trim();
        if (!title) { showToast('Title is required'); return; }
        var obj = {
          id: editId || Date.now().toString(36),
          title: title,
          type: m.querySelector('[name=type]').value,
          listing: m.querySelector('[name=listing]').value,
          price: m.querySelector('[name=price]').value.trim(),
          area: m.querySelector('[name=area]').value.trim(),
          bedrooms: m.querySelector('[name=bedrooms]').value.trim(),
          bathrooms: m.querySelector('[name=bathrooms]').value.trim(),
          location: m.querySelector('[name=location]').value.trim(),
          landmark: m.querySelector('[name=landmark]').value.trim(),
          description: m.querySelector('[name=description]').value.trim(),
          features: m.querySelector('[name=features]').value.split(',').map(function (s) { return s.trim(); }).filter(Boolean),
          photos: currentPhotos,
          contactPerson: m.querySelector('[name=contactPerson]').value.trim(),
          contactNumber: m.querySelector('[name=contactNumber]').value.trim() || '8319220955',
          status: m.querySelector('[name=status]').value,
          featured: m.querySelector('[name=featured]').checked
        };
        var arr = getAdminProps();
        if (editId) {
          arr = arr.map(function (x) { return x.id === editId ? obj : x; });
        } else {
          arr.push(obj);
        }
        try {
          saveAdminProps(arr);
        } catch (err) {
          showToast('Storage full! Remove some properties or photos.');
          return;
        }
        modal.remove();
        showToast(editId ? 'Property updated!' : 'Property added!');
        renderList();
      });
    }
  }

  function closeAdmin() { adminOverlay.classList.remove('open'); adminOverlay.innerHTML = ''; document.body.style.overflow = ''; }

  function escHtml(s) { var d = document.createElement('div'); d.textContent = s; return d.innerHTML; }
  function escAttr(s) { return String(s).replace(/"/g, '&quot;').replace(/</g, '&lt;'); }

  /* ---- HASH ROUTING ---- */
  function handleRoute() {
    var hash = window.location.hash.replace('#', '');
    closeProperty(); closeBlog(); closeAdmin();
    if (hash.startsWith('property/')) {
      openProperty(hash.replace('property/', ''));
    } else if (hash.startsWith('blog/')) {
      openBlog(hash.replace('blog/', ''));
    } else if (hash === 'admin') {
      if (sessionStorage.getItem('bgt_admin') === 'true') showAdminDashboard();
      else showAdminLogin();
    }
  }
  window.addEventListener('hashchange', handleRoute);
  handleRoute();

  /* ---- CONTACT FORM ---- */
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    showToast(getLang() === 'hi' ? 'धन्यवाद! हम जल्द ही आपसे संपर्क करेंगे।' : 'Thank you! We will get back to you soon.');
    contactForm.reset();
  });

  /* ---- TOAST ---- */
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(function () { toast.classList.remove('show'); }, 3000);
  }

  /* ---- SCROLL REVEAL ---- */
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(function (el) { revealObserver.observe(el); });

  /* ---- HERO ENTRANCE ---- */
  document.querySelectorAll('.reveal-hero').forEach(function (el, i) {
    setTimeout(function () { el.classList.add('visible'); }, 300 + i * 200);
  });

  /* ---- COUNTER ANIMATION ---- */
  var counterObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) { animateCounter(entry.target); counterObserver.unobserve(entry.target); }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.stat-number[data-target]').forEach(function (el) { counterObserver.observe(el); });

  function animateCounter(el) {
    var target = parseInt(el.getAttribute('data-target'), 10);
    var duration = 2000, startTime = null;
    function step(ts) {
      if (!startTime) startTime = ts;
      var p = Math.min((ts - startTime) / duration, 1);
      var ease = 1 - (1 - p) * (1 - p);
      el.textContent = Math.floor(ease * target);
      if (p < 1) requestAnimationFrame(step); else el.textContent = target;
    }
    requestAnimationFrame(step);
  }

  /* ---- FOOTER PROPERTY LINKS ---- */
  document.querySelectorAll('a[href^="#property/"]').forEach(function (link) {
    link.addEventListener('click', function (e) { e.preventDefault(); window.location.hash = this.getAttribute('href').replace('#', ''); });
  });

  /* ---- MENU DROPDOWN TOGGLE (Properties sub-links) ---- */
  document.querySelectorAll('.menu-item-dropdown').forEach(function (item) {
    var mainLink = item.querySelector('.menu-link');
    var chevron = item.querySelector('.menu-chevron');
    if (mainLink) {
      mainLink.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        item.classList.toggle('open');
      });
    }
  });

  /* ---- MENU DROPDOWN FILTER (close menu + scroll + filter) ---- */
  document.querySelectorAll('.menu-dropdown-link[data-filter]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var filterType = this.getAttribute('data-filter');
      closeMenu();
      // Set the filter dropdown to match
      var typeSelect = document.getElementById('propTypeFilter');
      if (typeSelect) typeSelect.value = filterType;
      // Apply filter
      filterProperties(filterType, '');
      // Scroll to properties
      var target = document.getElementById('properties-strip');
      if (target) setTimeout(function () { target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 350);
    });
  });

  /* ---- PROPERTY FILTER BAR ---- */
  function filterProperties(type, location) {
    var cards = document.querySelectorAll('#stripScroll .strip-card');
    var anyVisible = false;
    cards.forEach(function (card) {
      var cardType = (card.getAttribute('data-type') || '').toLowerCase();
      var cardLoc = (card.getAttribute('data-location') || '').toLowerCase();
      var typeMatch = !type || cardType === type;
      var locMatch = !location || cardLoc.indexOf(location) !== -1;
      if (typeMatch && locMatch) {
        card.style.display = '';
        card.classList.remove('strip-card-hidden');
        anyVisible = true;
      } else {
        card.style.display = 'none';
        card.classList.remove('strip-card-hidden');
      }
    });
    // If nothing matches, show all
    if (!anyVisible) {
      cards.forEach(function (card) { card.style.display = ''; });
    }
    // Re-apply the 4-card limit after filtering
    applyStripLimit();
  }

  var filterBtn = document.getElementById('propFilterSearchBtn');
  if (filterBtn) {
    filterBtn.addEventListener('click', function () {
      var type = (document.getElementById('propTypeFilter').value || '').toLowerCase();
      var loc = (document.getElementById('propLocationFilter').value || '').trim().toLowerCase();
      filterProperties(type, loc);
    });
  }
  // Also filter on Enter key in location input
  var locInput = document.getElementById('propLocationFilter');
  if (locInput) {
    locInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        filterBtn.click();
      }
    });
  }

  /* ---- VIEW MORE PROPERTIES BUTTON ---- */
  var viewMoreBtn = document.getElementById('viewMorePropertiesBtn');
  if (viewMoreBtn) {
    viewMoreBtn.addEventListener('click', function () {
      stripExpanded = !stripExpanded;
      applyStripLimit();
      if (!stripExpanded) {
        var target = document.getElementById('properties-strip');
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  /* ---- DESKTOP NAV DROPDOWN FILTER ---- */
  document.querySelectorAll('.nav-dropdown-link[data-filter]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var filterType = this.getAttribute('data-filter');
      var typeSelect = document.getElementById('propTypeFilter');
      if (typeSelect) typeSelect.value = filterType;
      filterProperties(filterType, '');
      var target = document.getElementById('properties-strip');
      if (target) setTimeout(function () { target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 100);
    });
  });

  /* ---- EXPOSE properties for gallery/lightbox ---- */
  window._bgtProperties = properties;

})();

/* ============================================================
   GALLERY — switchImage, Lightbox
   ============================================================ */
function switchImage(slug, idx, thumbEl) {
  var mainImg = document.getElementById('mainImg-' + slug);
  var prop = window._bgtProperties[slug];
  if (!mainImg || !prop || !prop.images[idx]) return;
  mainImg.style.opacity = '0';
  setTimeout(function () {
    mainImg.src = prop.images[idx];
    mainImg.style.opacity = '1';
  }, 200);
  var thumbs = thumbEl.parentElement.querySelectorAll('.d-thumb');
  thumbs.forEach(function (t) { t.classList.remove('active'); });
  thumbEl.classList.add('active');
}

var lightboxImages = [];
var lightboxIdx = 0;

function openLightbox(slug, idx) {
  var prop = window._bgtProperties[slug];
  if (!prop) return;
  lightboxImages = prop.images;
  lightboxIdx = idx;

  var lb = document.createElement('div');
  lb.className = 'd-lightbox';
  lb.id = 'lightbox';
  lb.innerHTML =
    '<button class="lb-close" onclick="closeLightbox()">\u2715</button>' +
    '<button class="lb-prev" onclick="lbNav(-1)">\u2039</button>' +
    '<img src="' + lightboxImages[idx] + '" alt="Property" class="lb-img" id="lbImg">' +
    '<button class="lb-next" onclick="lbNav(1)">\u203A</button>' +
    '<div class="lb-dots">' +
      lightboxImages.map(function (_, i) {
        return '<span class="lb-dot' + (i === idx ? ' active' : '') + '" onclick="lbGo(' + i + ')"></span>';
      }).join('') +
    '</div>';

  lb.addEventListener('click', function (e) {
    if (e.target === lb) closeLightbox();
  });

  // Touch swipe
  var lbTouchX = 0;
  lb.addEventListener('touchstart', function (e) { lbTouchX = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', function (e) {
    var diff = lbTouchX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) { lbNav(diff > 0 ? 1 : -1); }
  }, { passive: true });

  document.body.appendChild(lb);
  document.body.style.overflow = 'hidden';
  document.addEventListener('keydown', lbKeyHandler);
}

function closeLightbox() {
  var lb = document.getElementById('lightbox');
  if (lb) lb.remove();
  document.removeEventListener('keydown', lbKeyHandler);
}

function lbNav(dir) {
  lightboxIdx = (lightboxIdx + dir + lightboxImages.length) % lightboxImages.length;
  lbUpdate();
}

function lbGo(idx) {
  lightboxIdx = idx;
  lbUpdate();
}

function lbUpdate() {
  var img = document.getElementById('lbImg');
  if (img) {
    img.style.opacity = '0';
    setTimeout(function () {
      img.src = lightboxImages[lightboxIdx];
      img.style.opacity = '1';
    }, 150);
  }
  document.querySelectorAll('.lb-dot').forEach(function (d, i) {
    d.classList.toggle('active', i === lightboxIdx);
  });
}

function lbKeyHandler(e) {
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') lbNav(1);
  if (e.key === 'ArrowLeft') lbNav(-1);
}
