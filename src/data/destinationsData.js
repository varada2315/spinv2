// Comprehensive Destination & Famous Spots Data from User Document
export const destinationsData = {
  // --- INTERNATIONAL (22 DESTINATIONS) ---
  'bali': {
    id: 'bali',
    name: 'Indonesia (Bali)',
    category: 'International',
    heroImage: encodeURI('/images/Bali Ulun Danu Temple.jpg?v=5'),
    heroObjectPosition: 'center center',
    tagline: 'Island of Gods with Sacred Temples, Terraces & Beach Clubs',
    description: 'Explore Bali’s iconic sea temples, lush green rice terraces, active volcanic treks, and world-famous beach clubs.',
    spots: [
      { name: 'Bali Swing', image: encodeURI('/images/Bali swing , bali.jpg'), desc: 'Thrilling jungle swing soaring high over emerald palm trees, rice terraces, and river valleys.' },
      { name: 'Tanah Lot Temple', image: encodeURI('/images/Tanah Lot temple , bali.jpg'), desc: 'Ancient Hindu offshore rock shrine with spectacular waves and ocean sunset views.' },
      { name: 'Nusa Penida (Kelingking Beach)', image: encodeURI('/images/Nusa Penida , bali.jpg.jpeg'), desc: 'Iconic T-Rex shaped cliff overlooking secluded white sand beach and turquoise ocean water.' },
      { name: 'Handara Gate', image: encodeURI('/images/Handara Gate , bali.jpg.jpeg'), desc: 'Traditional Hindu split gate framed against lush green Bedugul mountains and mist.' },
      { name: 'Gili Island (Beach Horse Riding)', image: encodeURI('/images/Gili island , Bali , horse riding near beach.jpg.jpeg'), desc: 'Unforgettable sunset horse riding experience along pristine white sand beaches and crystal waters.' },
      { name: 'Finns Beach Club', image: encodeURI('/images/Finns Beach Club , Bali.jpg.jpeg'), desc: 'World-renowned oceanfront bamboo beach club in Canggu featuring infinity pools, daybeds, and DJ sunsets.' }
    ]
  },
  'uae': {
    id: 'uae',
    name: 'UAE (Dubai & Abu Dhabi)',
    category: 'International',
    heroImage: encodeURI('/images/Dubai Skyline Burj Khalifa.jpg'),
    tagline: 'Futuristic Skyscrapers, Luxury Desert Safaris & Grand Mosques',
    description: 'Experience record-breaking architectural marvels, golden sand dunes, luxury shopping, and family theme parks.',
    spots: [
      { name: 'Palm Jumeirah', image: encodeURI('/images 2/Palm Jumeirah , Dubai.jpg.jpeg'), desc: 'World-famous man-made palm island featuring luxury oceanfront resorts, beach clubs, and Aquaventure Waterpark.' },
      { name: 'Burj Khalifa', image: encodeURI('/images 2/Burj Khalifa Dubai.jpg.jpeg'), desc: 'World’s tallest building featuring high-speed observation elevators and 360-degree panoramic skyline views.' },
      { name: 'Desert Safari', image: encodeURI('/images/desert safari , dubai.jpg'), desc: 'Thrilling Arabian desert adventure with dune bashing, quad biking, camel rides, and traditional Bedouin BBQ dinner.' },
      { name: 'Museum of the Future', image: encodeURI('/images/The Museum of the Future , dubai.jpg.jpeg'), desc: 'Architectural and technological marvel showcasing futuristic innovation, Arabic calligraphy, and immersive exhibits.' },
      { name: 'Miracle Garden', image: encodeURI('/images/Miracle garden , dubai.jpg'), desc: 'World’s largest natural flower garden displaying 150 million blooming flowers crafted into spectacular floral sculptures.' },
      { name: 'Ferrari World', image: encodeURI('/images/Ferrari World , dubai.jpg'), desc: 'Iconic red-roofed thrill theme park on Yas Island featuring Formula Rossa, the world’s fastest roller coaster.' }
    ]
  },
  'vietnam': {
    id: 'vietnam',
    name: 'Vietnam',
    category: 'International',
    heroImage: encodeURI('/images/Ba Na Hills Golden Bridge , Vietnam.jpg'),
    tagline: 'Ba Na Hills Golden Bridge, Ha Long Bay & Lantern Towns',
    description: 'Immerse in dramatic karst bay cruises, giant mountain bridge hands, French colonial architecture, ancient heritage towns, and mountain rice terraces.',
    spots: [
      { name: 'Ba Na Hills & Golden Bridge', image: encodeURI('/images/Ba Na Hills Golden Bridge , Vietnam.jpg'), desc: 'Giant stone hands holding a golden pedestrian bridge 1,400 meters above sea level in Da Nang.' },
      { name: 'Ha Long Bay', image: '/images/679ec5e6-ed39-409d-8783-0fdb0b0c0bd7.jpg', desc: 'UNESCO World Heritage bay featuring thousands of towering limestone karsts and emerald cruise waters.' },
      { name: 'Hoi An Ancient Town', image: '/images/36da974a-4f73-4b96-aff4-6bff28aa7c00.jpg', desc: 'UNESCO World Heritage town illuminated by thousands of colorful silk lanterns along the Thu Bon River.' },
      { name: 'Kiss Bridge, Phu Quoc', image: '/images/e51ee7de-7564-44a5-8114-15eaab8cc278.jpg', desc: 'Iconic architectural masterpiece in Sunset Town, Phu Quoc featuring two bridges coming together with a romantic gap.' },
      { name: 'Rice Terraces, Sapa', image: '/images/704e7fbc-7ff7-449a-9405-49e5b83b52be.jpg', desc: 'Lush green cascading mountain terraces and ethnic hill-tribe villages in Sapa.' },
      { name: 'Grand World, Phu Quoc', image: '/images/be829009-4c81-4cb2-b35f-5143edf96278.jpg', desc: 'The city that never sleeps featuring Venice-style canals, bamboo legend structures, and nightly water laser shows.' }
    ]
  },
  'thailand': {
    id: 'thailand',
    name: 'Thailand',
    category: 'International',
    heroImage: encodeURI('/images/Thailand Phi Phi Islands.jpg'),
    tagline: 'Land of Smiles with Turquoise Islands, Temples & Elephant Sanctuaries',
    description: 'Discover crystal clear island lagoons, ornate royal temples, vibrant night markets, and ethical elephant sanctuaries.',
    spots: [
      { name: 'Walking Street, Bangkok', image: encodeURI('/images/walking street , Bangkok , Thailand.jpg.jpeg'), desc: 'Vibrant neon-lit entertainment hub with bustling night markets, street food stalls, and nightlife.' },
      { name: 'Railay Beach, Krabi', image: encodeURI('/images/Railay Beach , Krabi.jpg'), desc: 'Secluded peninsula surrounded by towering limestone cliffs, turquoise lagoon waters, and rock climbing routes.' },
      { name: 'Chiang Mai', image: encodeURI('/images/Chiang Mai , Thailand.jpg'), desc: 'Cultural northern mountain capital famous for ethical elephant sanctuaries, night bazaars, and ancient temples.' },
      { name: 'Wat Arun (Temple of Dawn)', image: encodeURI('/images/Wat Arun (Temple of Dawn) , Thailand.jpg'), desc: 'Iconic riverside temple on the Chao Phraya River decorated with intricate porcelain mosaics and central spire.' },
      { name: 'Phi Phi Island', image: encodeURI('/images/Phi Phi Isalnd , Thailand.jpg'), desc: 'Famous Maya Bay limestone cliffs, emerald lagoons, snorkeling reefs, and speedboat excursions.' },
      { name: 'Wat Rong Khun (White Temple)', image: encodeURI('/images/Wat Rong Khun , Thailand.jpg.jpeg'), desc: 'Striking all-white contemporary temple artwork in Chiang Rai covered in glass mirrors.' }
    ]
  },
  'singapore': {
    id: 'singapore',
    name: 'Singapore',
    category: 'International',
    heroImage: encodeURI('/images/Singapore Marina Bay Sands.jpg'),
    heroObjectPosition: 'center center',
    tagline: 'Garden City of the Future with Supertrees & SkyParks',
    description: 'Experience futuristic urban nature, world-class theme parks, rooftop infinity pools, and diverse culinary night markets.',
    spots: [
      { name: 'Marina Bay Sands', image: encodeURI('/images/Marina Bay Sands , singapore.jpg.jpeg'), desc: 'Iconic architectural triple-tower hotel with 57th-floor rooftop SkyPark, observation deck, and infinity pool.' },
      { name: 'Gardens by the Bay', image: encodeURI('/images/Gardens by the bay , singapore.jpg'), desc: 'Futuristic urban nature park featuring illuminated Supertree structures and world’s largest glass greenhouses.' },
      { name: 'Merlion Park', image: encodeURI('/images/Merlion  park , singapore.jpg.jpeg'), desc: 'National icon half-lion half-fish statue spouting water with scenic panoramic views of Marina Bay.' },
      { name: 'Sentosa Island', image: encodeURI('/images/sentosa island , singapore.jpg.jpeg'), desc: 'Premier island resort destination featuring Universal Studios, golden beaches, cable cars, and luxury resorts.', objectPosition: 'center 68%' },
      { name: 'Jewel Changi Airport', image: encodeURI('/images/Jewel Changi Airport , singapore.jpg.jpeg'), desc: 'World-famous dome complex housing the 40-meter Rain Vortex, the world’s tallest indoor waterfall surrounded by lush canopy park.' },
      { name: 'Singapore Flyer', image: encodeURI('/images/singapore Flyer.jpg.jpeg'), desc: 'Giant 165-meter tall observation wheel offering breathtaking 360-degree views across Marina Bay and neighboring islands.' }
    ]
  },
  'malaysia': {
    id: 'malaysia',
    name: 'Malaysia',
    category: 'International',
    heroImage: encodeURI('/images/Petronas Twin Towers , Kuala Lumpur , Malaysia.jpg'),
    tagline: 'Petronas Twin Towers, Batu Caves, Langkawi & Genting Highlands',
    description: 'Explore futuristic twin towers, sacred rainbow cave temples, thrilling theme parks, and spectacular rainforest sky bridges.',
    spots: [
      { name: 'Genting Highlands', image: encodeURI('/images/Genting Highlands , Malaysia.jpg'), desc: 'Exciting mountain hill resort featuring Awana SkyWay cable cars, indoor & outdoor theme parks, and cool mountain breezes.' },
      { name: 'Sunway Lagoon Theme Park', image: encodeURI('/images/Sunway Lagoon Theme Park , Malaysia.jpg'), desc: 'Multi-park entertainment wonderland featuring the world’s largest surf beach, twisting water rides, and theme park thrills.' },
      { name: 'Kek Lok Si Temple, Penang', image: encodeURI('/images/Kek Lok Si Temple , Penang , Malaysia.jpg'), desc: 'Majestic hillside Buddhist temple complex in Penang featuring the seven-tier Pagoda of Ten Thousand Buddhas and towering Guanyin statue.' },
      { name: 'Langkawi Sky Bridge', image: encodeURI('/images/Langkawi Sky Bridge , Malaysia.jpg'), desc: 'World-famous 125-meter curved pedestrian cable-stayed bridge suspended high above Mount Mat Cincang rainforest and Andaman Sea.' },
      { name: 'Petronas Twin Towers, Kuala Lumpur', image: encodeURI('/images/Petronas Twin Towers , Kuala Lumpur , Malaysia.jpg'), desc: 'The iconic 88-story landmark rising 452 meters into the sky with high-tech double-decker skybridge.' },
      { name: 'Batu Caves', image: encodeURI('/images/Batu Caves , Malaysia.jpg'), desc: 'Monumental 140-foot golden Lord Murugan statue and 272 vibrant rainbow steps leading into sacred limestone cavern temples.' }
    ]
  },
  'japan': {
    id: 'japan',
    name: 'Japan',
    category: 'International',
    heroImage: encodeURI('/images/Fushimi Inari Shrine , Kyoto , Japan.jpg'),
    tagline: 'Mount Fuji, Fushimi Inari Torii Gates & Arashiyama Bamboo',
    description: 'Step into a land where iconic snow-capped Mount Fuji meets vermilion shrine gates, serene bamboo groves, samurai castles, and Disneyland magic.',
    spots: [
      { name: 'Fushimi Inari Shrine, Kyoto', image: encodeURI('/images/Fushimi Inari Shrine , Kyoto , Japan.jpg'), desc: 'Iconic Shinto shrine featuring thousands of vivid vermilion Senbon Torii gates winding up sacred Mount Inari.' },
      { name: 'Arashiyama Bamboo Grove, Kyoto', image: encodeURI('/images/Arashiyama Bamboo Grove , Kyoto , Japan.jpg'), desc: 'Mesmerizing walking path enveloped by towering green bamboo stalks swaying gracefully in the Kyoto breeze.' },
      { name: 'Osaka Castle', image: encodeURI('/images/Osaka Castle , Japan.jpg'), desc: 'Majestic 16th-century samurai fortress keep surrounded by massive defensive stone walls, moats, and lush park gardens.' },
      { name: 'Tokyo Disneyland', image: encodeURI('/images/Tokyo Disneyland , Japan.jpg'), desc: 'Magical world-class fairy tale kingdom featuring the iconic Cinderella Castle, themed lands, parades, and attractions.' },
      { name: 'Chidorigafuchi Moat & Cherry Blossoms, Tokyo', image: encodeURI('/images/Chidorigafuchi Moat & Cherry Blossoms , Tokyo , Japan.jpg'), desc: 'Scenic Imperial Palace waterway lined with hundreds of blooming pink Sakura trees with rowers floating beneath blossom canopies.' },
      { name: 'Mount Fuji & Lake Kawaguchiko', image: encodeURI('/images/Mount Fuji & Lake Kawaguchiko , Japan.jpg'), desc: 'Iconic snow-capped sacred volcano rising symmetrically over the tranquil waters of Lake Kawaguchiko framed by cherry blossoms.' }
    ]
  },
  'schengen': {
    id: 'schengen',
    name: 'Schengen (Europe)',
    category: 'International',
    heroImage: encodeURI('/images 2/Eiffel Tower , paris , france.jpg.jpeg'),
    tagline: 'Eiffel Tower, Swiss Castles, Rome & European Wonders',
    description: 'Traverse 29 European countries seamlessly from romantic Paris landmarks to Alpine lakes, Roman wonders, and Mediterranean coasts.',
    spots: [
      { name: 'Eiffel Tower, Paris (France)', image: encodeURI('/images 2/Eiffel Tower , paris , france.jpg.jpeg'), desc: 'Iconic wrought-iron lattice tower in Paris, France offering breathtaking city panoramas and romantic illuminations.' },
      { name: 'Oberhofen Castle, Switzerland', image: encodeURI('/images/Oberhofen Castle , Switzerland.jpg'), desc: 'Fairytale 13th-century lakeside fortress on Lake Thun surrounded by majestic Swiss Alpine peaks and gardens.' },
      { name: 'Colosseum in Rome, Italy', image: encodeURI('/images/Colosseum in Rome , Italy.jpg'), desc: 'Magnificent ancient Roman amphitheater in Rome, an iconic wonder of architectural engineering and history.' },
      { name: 'Mykonos, Greece', image: encodeURI('/images/Mykonos , Greece.jpg'), desc: 'Iconic whitewashed Cycladic seaside haven with crystal clear turquoise Aegean waters and vibrant waterfronts.' },
      { name: 'Séville, Spain', image: encodeURI('/images/Séville , Spain.jpg'), desc: 'Breathtaking Andalusian jewel featuring monumental Gothic architecture, royal palaces, and rich Spanish culture.' },
      { name: 'Brandenburg Gate in Berlin, Germany', image: encodeURI('/images/Brandenburg Gate , Berlin , Germany.jpg'), desc: 'Historic 18th-century neoclassical monument and triumphal arch symbolizing European unity and German heritage.' }
    ]
  },
  'sri-lanka': {
    id: 'sri-lanka',
    name: 'Sri Lanka',
    category: 'International',
    heroImage: encodeURI('/images/Sigiriya Rock Fortress , Sri Lanka.jpg'),
    tagline: 'Sigiriya Rock, Ella Nine Arch Bridge, Galle Fort & Mirissa Beach',
    description: 'Experience ancient rock palaces, UNESCO cave temples, colonial ocean forts, and palm-fringed tropical beaches.',
    spots: [
      { name: 'Mirissa Beach', image: encodeURI('/images/Mirissa Beach , Sri Lanka.jpg'), desc: 'Tropical crescent bay featuring iconic Coconut Tree Hill, turquoise surf waters, and golden palm-lined beaches.' },
      { name: 'Dambulla Cave Temple', image: encodeURI('/images/Dambulla Cave Temple , Sri Lanka.jpg'), desc: 'UNESCO World Heritage sacred cave monastery complex with magnificent rock-cut murals and Buddha statues.' },
      { name: 'Polonnaruwa Ancient City', image: encodeURI('/images/Polonnaruwa Ancient City , Sri Lanka.jpg'), desc: 'Ancient medieval royal capital showcasing circular Vatadage stone relic houses and monumental sculptures.' },
      { name: 'Sigiriya Rock Fortress', image: encodeURI('/images/Sigiriya Rock Fortress , Sri Lanka.jpg'), desc: 'Iconic 200m ancient monolithic palace fortress rising over emerald jungle canopy with lion paw gate.' },
      { name: 'Ella & Nine Arch Bridge', image: encodeURI('/images/Ella & Nine Arch Bridge , Sri Lanka.jpg'), desc: 'Colonial viaduct stone railway bridge nestled amidst lush green tea plantation hills in scenic Ella.' },
      { name: 'Galle Fort', image: encodeURI('/images/Galle Fort , Sri Lanka.jpg'), desc: 'UNESCO World Heritage 16th-century coastal stone fortress overlooking the Indian Ocean with iconic clock tower.' }
    ]
  },
  'philippines': {
    id: 'philippines',
    name: 'Philippines',
    category: 'International',
    heroImage: encodeURI('/images/Coron, Philippines.jpg.jpeg'),
    tagline: 'Coron Lagoons, Chocolate Hills & Underground River',
    description: 'Explore 7,000+ tropical islands featuring turquoise karst lakes, subterranean rivers, chocolate-colored hills, and historic Spanish citadels.',
    spots: [
      { name: 'Coron Island, Palawan', image: encodeURI('/images/Coron, Philippines.jpg.jpeg'), desc: 'Pristine crystal-clear turquoise lakes, towering limestone karst cliffs, and world-renowned sunken shipwreck diving.' },
      { name: 'Chocolate Hills, Bohol', image: encodeURI('/images/Chocolate Hills , Bohol, Philippines.jpg.jpeg'), desc: 'Fascinating natural geological monument of over 1,200 symmetrical conical hills turning chocolate brown in the dry season.' },
      { name: 'Puerto Princesa Underground River', image: encodeURI('/images 2/Puerto Princesa Subterranean River National Park philippines.jpg.jpeg'), desc: 'New 7 Wonders of Nature navigable subterranean river cave featuring colossal stalactite chambers and crystal emerald waters.' },
      { name: 'Cebu Taoist Temple', image: encodeURI('/images/Cebu Taoist Temple , Philippines.webp'), desc: 'Colorful multi-tiered pagoda temple perched 300 meters above sea level overlooking Cebu City and Mactan island.' },
      { name: 'Fort Santiago, Intramuros', image: encodeURI('/images/Fort Santiago Philippines.avif'), desc: 'Historic 16th-century Spanish stone citadel and defense fortress in the heart of Intramuros walled city.' },
      { name: 'Central Visayas Island Coast', image: encodeURI('/images/Central Visayas, Philippines.jpg.jpeg'), desc: 'Tropical island paradise in Central Visayas famous for turquoise sandbar beaches, coral marine sanctuaries, and whale sharks.' }
    ]
  },
  'georgia': {
    id: 'georgia',
    name: 'Georgia',
    category: 'International',
    heroImage: encodeURI('/images 2/Holy Trinity Cathedral , georgia.jpg.jpeg'),
    heroObjectPosition: 'center top',
    tagline: 'Caucasus Mountains, Trinity Church & Ancient Heritage',
    description: 'Immerse in ancient Orthodox cathedrals overlooking snow-capped Caucasus peaks, emerald river canyons, and romantic Black Sea boulevards.',
    spots: [
      { name: 'Holy Trinity Cathedral', image: encodeURI('/images 2/Holy Trinity Cathedral , georgia.jpg.jpeg'), desc: 'Majestic Sameba Cathedral rising over Elia Hill in Tbilisi, one of the largest Orthodox church complexes in the world with gleaming golden domes.', objectPosition: 'center top' },
      { name: 'Narikala Fortress', image: encodeURI('/images/Narikala Fortress , Georgia.webp'), desc: 'Ancient 4th-century hilltop fortress overlooking Tbilisi Old Town, the Mtkvari River, and the Mother of Georgia statue.' },
      { name: 'Chronicle of Georgia', image: encodeURI('/images/Chronicles of Georgia.webp'), desc: 'Towering 30-meter stone monument on Mount Keeni overlooking the Tbilisi Sea, depicting biblical scenes and royal Georgian history.' },
      { name: 'Gudauri', image: encodeURI('/images/Gudauri , Georgia.jpg.jpeg'), desc: 'Breathtaking Greater Caucasus alpine mountain resort famous for year-round snow peaks, the Russia-Georgia Friendship Monument, and paragliding.' },
      { name: 'Martvili Canyon', image: encodeURI('/images/Martvili Canyon , Georgia.webp'), desc: 'Enchanting natural emerald canyon with turquoise waters, cascading waterfalls, mossy limestone gorges, and boat excursions.' },
      { name: 'Ali & Nino Statue', image: encodeURI('/images/Ali & Nino Statue , Georgia.jpg.jpeg'), desc: 'Iconic 8-meter kinetic metal love sculpture in Batumi Boulevard portraying the tragic romance of a Muslim boy and Christian Georgian princess.' }
    ]
  },
  'kazakhstan': {
    id: 'kazakhstan',
    name: 'Kazakhstan',
    category: 'International',
    heroImage: encodeURI('/images/Charyn Canyon , Kazakhstan.jpg.jpeg'),
    tagline: 'Charyn Canyons, Kolsai Lakes & Futuristic Architecture',
    description: 'Discover Central Asia’s gem featuring dramatic red canyon valleys, turquoise mountain lakes, and futuristic capitals.',
    spots: [
      { name: 'Charyn Canyon', image: encodeURI('/images/Charyn Canyon , Kazakhstan.jpg.jpeg'), desc: 'Dramatic 90-meter-deep red sandstone gorge known as the Valley of Castles, carved by the Charyn River over millions of years.' },
      { name: 'Kolsai Lakes', image: encodeURI('/images/Kolsai Lakes , Kazakhstan.jpg.jpeg'), desc: 'A cascade of pristine turquoise alpine lakes nestled in the northern Tien Shan mountain ranges surrounded by pine forests.' },
      { name: 'Ascension Cathedral', image: encodeURI('/images/Ascension Cathedral , Almaty , kazakhstan.webp'), desc: 'Iconic brightly painted wooden Russian Orthodox cathedral in Panfilov Park, Almaty, constructed entirely without nails.' },
      { name: 'Khan Shatyr', image: encodeURI('/images/Khan Shatyr in Astana , kazakhstan.jpg.jpeg'), desc: 'Futuristic 150-meter transparent tent structure in Astana featuring an indoor shopping oasis, entertainment center, and tropical beach resort.' },
      { name: 'Ak Orda Presidential Palace', image: encodeURI('/images/Ak Orda Presidential Palace , kazakhstan.jpg.jpeg'), desc: 'Grand official presidential residence in Astana crowned with a majestic blue and gold dome topped with a golden spire.' },
      { name: 'Palace of Peace and Reconciliation', image: encodeURI('/images 2/Palace of Peace and Reconciliation , kazakhastan.jpg.jpeg'), desc: 'Striking 62-meter pyramid designed by Norman Foster in Astana as a global center for religious understanding and cultural unity.', objectPosition: 'center 5%' }
    ]
  },
  'maldives': {
    id: 'maldives',
    name: 'Maldives',
    category: 'International',
    heroImage: encodeURI('/images/Luxury Overwater Villas & Sunset , Maldives.jpg'),
    tagline: 'Luxury Overwater Villas, Coral Reefs & Romantic Candlelight Dinners',
    description: 'Unwind in pure luxury on private coral atolls surrounded by crystal turquoise lagoons, clear kayaking, and vibrant marine reefs.',
    spots: [
      { name: 'Romantic Beachfront Candlelight Dinner', image: encodeURI('/images/Maldives Candle light dinner.jpg.jpeg?v=6'), desc: 'Intimate private dinner setup within a heart of warm lanterns on white coral sand under vibrant sunset skies.', objectPosition: '65% 92%' },
      { name: 'Scuba Diving & Coral Reefs', image: encodeURI('/images/Scuba Diving & Coral Reefs , Maldives.jpg'), desc: 'World-class scuba diving through deep blue waters and thriving coral pinnacles filled with schools of tropical fish.' },
      { name: 'Crystal Clear Kayaking & Lagoons', image: encodeURI('/images/Crystal Clear Kayaking & Lagoons , Maldives.jpg'), desc: 'Glide over shallow transparent lagoons and vibrant coral gardens in a see-through glass kayak.' },
      { name: 'Luxury Overwater Villas & Sunset', image: encodeURI('/images/Luxury Overwater Villas & Sunset , Maldives.jpg'), desc: 'Iconic thatched-roof overwater bungalows perched on stilts over calm turquoise waters catching golden hour rays.' },
      { name: 'Private Yacht & Speedboat Cruise', image: encodeURI('/images/Private Yacht & Speedboat Cruise , Maldives.jpg'), desc: 'Exclusive speedboat and yacht charters sailing across sparkling azure atolls and private sandbanks.' },
      { name: 'Sandbank Islands & Water Sports', image: encodeURI('/images 2/Sandbank Islands & Water Sports - maldives.jpg.jpeg'), desc: 'Secluded white sandbar atolls surrounded by electric turquoise waters offering exhilarating speedboat watersports and private picnics.' }
    ]
  },
  'azerbaijan': {
    id: 'azerbaijan',
    name: 'Azerbaijan (Baku)',
    category: 'International',
    heroImage: encodeURI('/images/Flame Towers , azerbaijan.jpg.jpeg'),
    tagline: 'Flame Towers, Caspian Sea Boulevards & Medieval Old Towns',
    description: 'Immerse in the Land of Fire, where futuristic curved architecture meets medieval stone palaces along the breezy Caspian Sea.',
    spots: [
      { name: 'Flame Towers', image: encodeURI('/images/Flame Towers , azerbaijan.jpg.jpeg'), desc: 'Trio of iconic flame-shaped skyscrapers dominating the Baku skyline with spectacular LED illumination reflecting the land of fire.' },
      { name: 'Heydar Aliyev Center', image: encodeURI('/images/Heydar Aliyev Center , azerbaijan.jpg.jpeg'), desc: "Zaha Hadid's fluid architectural masterpiece celebrated worldwide for its flowing curved lines and modern cultural exhibition halls." },
      { name: 'Baku Boulevard', image: encodeURI('/images/Baku Boulevard , azerbaijan.jpg.jpeg'), desc: 'Sprawling scenic promenade along the Caspian Sea waterfront featuring palm-lined pathways, Little Venice canals, and sunset breezes.' },
      { name: 'Palace of the Shirvanshahs', image: encodeURI('/images 2/Palace of Shirvanshahs azerbaijan.JPG.jpeg'), desc: '15th-century royal palace complex in the heart of Icherisheher (Old City), a UNESCO World Heritage gem of medieval Islamic architecture.' },
      { name: 'Teze Pir Mosque', image: encodeURI('/images/Teze Pir Mosque , azerbaijan.jpg.jpeg'), desc: 'Magnificent early 20th-century mosque in Baku adorned with twin golden minarets, marble calligraphy, and ornate prayer halls.' },
      { name: 'Baku Eye', image: encodeURI('/images/Baku Eye , azerbaijan.jpg.jpeg'), desc: 'Giant 60-meter seaside Ferris wheel offering 360-degree panoramic views across Baku Bay and the Caspian Sea horizon.', objectPosition: 'center 75%' }
    ]
  },
  'turkey': {
    id: 'turkey',
    name: 'Turkey',
    category: 'International',
    heroImage: encodeURI('/images/Cappadocia Hot Air Balloons , Turkey.jpg'),
    tagline: 'Cappadocia Balloons, Ephesus Ruins, Hagia Sophia & Pamukkale Pools',
    description: 'Discover ancient Greco-Roman wonders, Turkish Riviera coastal castles, Byzantine monuments, and sunrise hot air balloon flights over Cappadocia.',
    spots: [
      { name: 'Cappadocia Hot Air Balloons', image: encodeURI('/images/Cappadocia Hot Air Balloons , Turkey.jpg'), desc: 'Magical sunrise hot air balloon flights soaring above Cappadocia’s volcanic fairy chimneys and cave valleys.' },
      { name: 'Ephesus Ancient City', image: encodeURI('/images/Ephesus Ancient City , Turkey.jpg'), desc: 'Ancient Greco-Roman metropolis featuring the grand Library of Celsus, Temple of Artemis, and marble streets.' },
      { name: 'Antalya (Kaleiçi Old Town & Coast)', image: encodeURI('/images/Antalya , Turkey.jpg'), desc: 'Turkish Riviera jewel with historic Old Town Kaleiçi, Red Tower castle, and turquoise Mediterranean beaches.' },
      { name: 'Hagia Sophia, Istanbul', image: encodeURI('/images/Hagia Sophia , Istanbul , Turkey.jpg'), desc: 'World-famous architectural wonder in Istanbul bridging Byzantine and Ottoman heritage with colossal domes and minarets.' },
      { name: 'Pamukkale Thermal Pools', image: encodeURI('/images/Pamukkale Thermal Pools , Turkey.jpg'), desc: 'Surreal natural wonder of gleaming white travertine terraces and cascading mineral-rich turquoise thermal pools.' },
      { name: 'Blue Mosque (Sultanahmet)', image: encodeURI('/images/Blue Mosque , Turkey.jpg'), desc: 'The Sultanahmet Mosque in Istanbul famed for six soaring minarets, grand cascading domes, and blue Iznik tilework.' }
    ]
  },
  'seychelles': {
    id: 'seychelles',
    name: 'Seychelles',
    category: 'International',
    heroImage: encodeURI('/images/La Digue, Seychelles.jpg.jpeg'),
    tagline: 'Anse Source d’Argent, Granite Boulders & Turquoise Atolls',
    description: 'Escape to an idyllic Indian Ocean archipelago renowned for powder-soft white sand beaches, iconic giant granite boulders, lush rainforests, and coral sanctuaries.',
    spots: [
      { name: 'Anse Source d’Argent (La Digue)', image: encodeURI('/images/La Digue, Seychelles.jpg.jpeg'), desc: 'World’s most photographed tropical beach featuring iconic sculpted pink granite boulders, shallow calm lagoons, and coconut palms.' },
      { name: 'Beau Vallon Beach', image: encodeURI('/images/Beau Vallon, Seychelles.jpg.jpeg'), desc: 'Lively sweeping white-sand bay in northwest Mahé famous for crystal-clear waters, watersports, and stunning sunset views.' },
      { name: 'Anse Royale Beach', image: encodeURI('/images/Anse Royale Beach , Seychelles.webp'), desc: 'Enchanting bay with calm turquoise waters, sheltered coral reef snorkeling, and dramatic coastal granite rock formations.' },
      { name: 'Praslin National Park & Vallée de Mai', image: encodeURI('/images 2/Praslin  National Park.webp'), desc: 'UNESCO World Heritage prehistoric palm forest and national park on Praslin home to the legendary Coco de Mer palm and rare Seychelles black parrots.' },
      { name: 'Moyenne Island', image: encodeURI('/images/Ile Moyenne , Seychelles.jpg.jpeg'), desc: 'Protected flora and fauna sanctuary in Sainte Anne Marine National Park with giant Aldabra tortoises roaming freely and pristine nature trails.' },
      { name: 'Mahé Island Viewpoint & Coast', image: encodeURI('/images/Mahe . seychelles.jpg.jpeg'), desc: 'Panoramic granite mountain lookout over lush tropical rainforests, hidden coves, and the sparkling turquoise Indian Ocean.' }
    ]
  },
  'south-korea': {
    id: 'south-korea',
    name: 'South Korea',
    category: 'International',
    heroImage: encodeURI('/images/N Seoul Tower , South Korea.jpg'),
    tagline: 'N Seoul Tower, Joseon Palaces, Hanok Villages & Jeju Island',
    description: 'Immerse in K-pop culture, Hanok traditional villages, futuristic Starfield libraries, and volcanic island scenery.',
    spots: [
      { name: 'N Seoul Tower', image: encodeURI('/images/N Seoul Tower , South Korea.jpg'), desc: 'Iconic Namsan mountain communication tower surrounded by vibrant seasonal foliage with 360-degree views over Seoul.' },
      { name: 'Jeju Island', image: encodeURI('/images/Jeju Island , South Korea.jpg'), desc: 'World Natural Heritage volcanic paradise featuring dramatic black basalt shorelines, emerald coastal trails, and sunrise peaks.' },
      { name: 'Gyeongbokgung Palace, Seoul', image: encodeURI('/images/Gyeongbokgung Palace , Seoul , South Korea.jpg'), desc: 'Grand Joseon Dynasty royal palace featuring the magnificent Geunjeongjeon throne hall, stone courtyards, and guard ceremonies.' },
      { name: 'Bukchon Hanok Village, Seoul', image: encodeURI('/images/Bukchon Hanok Village , Seoul , South Korea.jpg'), desc: 'Picturesque historic Seoul neighborhood preserving hundreds of traditional tiled-roof Hanok residences and artisan alleys.' },
      { name: 'Starfield Library (COEX Mall)', image: encodeURI('/images/Starfield Library (COEX Mall) , Seoul , South Korea.jpg'), desc: 'Spectacular futuristic multi-level public library in Gangnam with soaring 13-meter book towers and art installations.' },
      { name: 'Busan Harbor & Gwangan Bridge', image: encodeURI('/images/Busan Harbor & Gwangan Bridge , South Korea.jpg'), desc: 'Vibrant coastal metropolis illuminated at dusk featuring the iconic suspension bridge over the East Sea.' }
    ]
  },
  'kenya': {
    id: 'kenya',
    name: 'Kenya',
    category: 'International',
    heroImage: encodeURI('/images/Maasai Mara National Reserve , Kenya.jpg.jpeg'),
    tagline: 'Maasai Mara Migration, Kilimanjaro Views & Pink Flamingos',
    description: 'Experience Africa’s ultimate wildlife safari adventure during the Great Migration of wildebeest and Big 5 game.',
    spots: [
      { name: 'Maasai Mara National Reserve', image: encodeURI('/images/Maasai Mara National Reserve , Kenya.jpg.jpeg'), desc: 'World-famous game reserve witnessing the Great Migration of millions of wildebeest, zebras, and Big Five safari predators across golden savannahs.' },
      { name: 'Mount Kilimanjaro View', image: encodeURI('/images/Mount Kilimanjaro , Kenya.jpg.jpeg'), desc: 'Awe-inspiring views of free-ranging elephant herds roaming the plains against the majestic backdrop of snow-capped Mount Kilimanjaro.' },
      { name: 'Lake Nakuru', image: encodeURI('/images/Lake Nakuru , kenya.webp'), desc: 'Famous Great Rift Valley alkaline lake lined with thousands of vibrant pink flamingos, white rhinos, and endangered Rothschild giraffes.' },
      { name: 'Mombasa Beach', image: encodeURI('/images/Mombasa beach , Kenya.jpg.jpeg'), desc: 'Tropical Indian Ocean coastline featuring powdery white sand beaches, swaying coconut palms, coral reefs, and traditional dhow boat cruises.' },
      { name: 'Nairobi National Park', image: encodeURI('/images/Nairobi National Park , Kenya.jpg.jpeg'), desc: 'Unique wilderness wildlife sanctuary where lions, black rhinos, and leopards roam freely right against the backdrop of the modern city skyline.' },
      { name: "Hell's Gate National Park", image: encodeURI('/images/Hells Gate National Park , kenya.webp'), desc: 'Dramatic volcanic scenery featuring towering red rock gorges, geothermal steam pillars, rock climbing towers, and cycling amongst wildlife.' }
    ]
  },
  'egypt': {
    id: 'egypt',
    name: 'Egypt',
    category: 'International',
    heroImage: encodeURI('/images/Pyramids of Giza , Egypt.jpg'),
    tagline: 'Pyramids of Giza, Citadel Mosque & Nile River Temples',
    description: 'Journey back to antiquity admiring the Great Pyramids, historic Cairo mosques, Valley of the Kings, and timeless Nile river temples.',
    spots: [
      { name: 'Pyramids of Giza', image: encodeURI('/images/Pyramids of Giza , Egypt.jpg'), desc: 'Ancient Wonder of the World rising above desert sands with monumental stone pyramids and royal pharaoh history.' },
      { name: 'Mosque of Muhammad Ali (Cairo Citadel)', image: encodeURI('/images/Mosque of Muhammad Ali , Egypt.jpg'), desc: 'The Alabaster Mosque situated on the summit of Cairo Citadel with striking Ottoman domes and soaring minarets.' },
      { name: 'Valley of the Kings, Luxor', image: encodeURI('/images/Valley of the Kings , Egypt.jpg'), desc: 'Legendary mortuary temples and royal pharaonic rock-cut tombs carved into the towering limestone cliffs of Luxor.' },
      { name: 'Abu Simbel Temples', image: encodeURI('/images/Abu Simbel Temples , Egypt.jpg'), desc: 'Monumental rock-cut temples of Pharaoh Ramesses II and Queen Nefertari carved into the sandstone mountains of Nubia.' },
      { name: 'Philae Temple on the Nile River', image: encodeURI('/images/Philae Temple on the Nile River , Egypt.jpg'), desc: 'Sacred island temple sanctuary dedicated to Goddess Isis rising gracefully from the blue waters of the Nile.' },
      { name: 'Great Sphinx of Giza', image: encodeURI('/images 2/Great Sphinx of Giza - egypt.jpg.jpeg'), desc: 'Monumental ancient limestone statue with the body of a lion and head of a pharaoh standing guard on the Giza plateau.' }
    ]
  },
  'mauritius': {
    id: 'mauritius',
    name: 'Mauritius',
    category: 'International',
    heroImage: encodeURI('/images/Caudan Waterfront , Port Louis , Mauritius.jpg'),
    tagline: 'Caudan Waterfront, Seven Coloured Earths & Tropical Lagoons',
    description: 'Escape to an Indian Ocean island paradise featuring multi-colored volcanic sands, pristine turquoise lagoons, and botanical wonders.',
    spots: [
      { name: 'Caudan Waterfront (Port Louis)', image: encodeURI('/images/Caudan Waterfront , Port Louis , Mauritius.jpg'), desc: 'Vibrant commercial and cultural waterfront hub in Port Louis featuring umbrella streets, duty-free shopping, and harbor views.' },
      { name: 'Tamarin Falls', image: encodeURI('/images/Tamarin Falls , Mauritius.jpg'), desc: 'Spectacular series of cascading waterfalls tumbling down lush volcanic canyons into deep natural pools.' },
      { name: 'Pamplemousses Botanical Garden', image: encodeURI('/images/Pamplemousses Botanical Garden , Mauritius.jpg'), desc: 'World-renowned historic garden famous for giant Victoria amazonica water lilies and exotic tropical spice trees.' },
      { name: 'Seven Coloured Earths (Chamarel)', image: encodeURI('/images/Mauritius Seven coloured earths , Chamarel.jpg'), desc: 'Mesmerizing geological formation of undulating sand dunes in seven distinct vibrant rainbow hues.' },
      { name: 'Île aux Cerfs Island', image: encodeURI('/images/Île aux Cerfs Island , Mauritius.jpg'), desc: 'Breathtaking offshore island with powder-white sandbars, shallow turquoise channels, and parasailing.' },
      { name: 'Le Morne Brabant', image: encodeURI('/images/Le Morne Brabant , Mauritius.jpg'), desc: 'Majestic UNESCO World Heritage basalt mountain rising over crystal lagoons and underwater waterfall illusions.' }
    ]
  },
  'nepal': {
    id: 'nepal',
    name: 'Nepal',
    category: 'International',
    heroImage: encodeURI('/images/Mount Everest , nepal.jpg.jpeg'),
    tagline: 'Everest Treks, Pokhara Lakes & Ancient Stupas',
    description: 'Stand in awe of the highest peaks on Earth, tranquil mountain lakes, sacred stupas, and ancient Newari durbar squares.',
    spots: [
      { name: 'Mount Everest', image: encodeURI('/images/Mount Everest , nepal.jpg.jpeg'), desc: "World's highest peak soaring 8,848 meters into the sky, offering legendary mountain flight tours and Himalayan trekking vistas." },
      { name: 'Phewa Lake', image: encodeURI('/images/Phewa Lake ,nepal.jpg.jpeg'), desc: 'Tranquil freshwater lake in Pokhara reflecting the snow-capped Annapurna range, famous for colorful wooden rowboats and Tal Barahi temple.' },
      { name: 'Swayambhunath Stupa', image: encodeURI('/images/Swayambhunath Stupa  , nepal.jpg.jpeg'), desc: 'Ancient hilltop Buddhist complex in the Kathmandu Valley crowned with a golden spire, painted eyes of Buddha, and fluttering prayer flags.' },
      { name: 'Patan Durbar Square', image: encodeURI('/images/Patan Durbar Square, Nepal.jpg.jpeg'), desc: 'UNESCO World Heritage plaza in Lalitpur showcasing marvels of Newar architecture, royal courtyards, and stone carving temples.' },
      { name: 'Muktinath Temple', image: encodeURI('/images/Muktinath Temple , nepal.webp'), desc: 'Sacred high-altitude pilgrimage sanctuary at 3,710 meters at the foot of the Thorong La mountain pass, revered by Hindus and Buddhists.' },
      { name: 'Pashupatinath Temple', image: encodeURI('/images 2/Pashupatinath temple , nepal.jpg.jpeg'), desc: 'Sacred UNESCO World Heritage Hindu temple complex dedicated to Lord Shiva, located on the banks of the Bagmati River in Kathmandu.' }
    ]
  },
  'bhutan': {
    id: 'bhutan',
    name: 'Bhutan',
    category: 'International',
    heroImage: encodeURI('/images 2/Paro Taktsang , bhutan (2).jpg.jpeg'),
    tagline: "Tiger's Nest Monastery, Punakha Dzongs & Dochula Passes",
    description: 'Journey to the Last Shangri-La, famed for Gross National Happiness, cliffside monasteries, and Himalayan valleys.',
    spots: [
      { name: "Paro Taktsang (Tiger's Nest)", image: encodeURI('/images 2/Paro Taktsang , bhutan (2).jpg.jpeg'), desc: 'Sacred Buddhist cliffside monastery perched dramatically on a sheer 900-meter granite cliff above the Paro Valley.' },
      { name: 'Punakha Dzong', image: encodeURI('/images/Punakha Dzong , Bhutann.webp'), desc: 'Majestic 17th-century palace and fortress at the confluence of the sacred Pho Chhu and Mo Chhu rivers.' },
      { name: 'Buddha Dordenma', image: encodeURI('/images/Buddha Dordenma , Bhutan.webp'), desc: 'Colossal 51.5-meter gilded bronze statue of Shakyamuni Buddha seated atop a hill overlooking the capital of Thimphu.' },
      { name: 'Dochula Pass', image: encodeURI('/images/Dochula Pass , Bhutan.jpg.jpeg'), desc: 'Panoramic 3,100-meter mountain pass crowned with 108 Druk Wangyal Chortens and spectacular views of the snow-capped Himalayas.' },
      { name: 'Punakha Valley', image: encodeURI('/images/Punakha valley in Bhutan.jpg.jpeg'), desc: 'Lush subtropical river valley filled with golden terraced rice paddies, suspension bridges, and traditional Bhutanese farmhouses.' },
      { name: 'Gangtey Monastery', image: encodeURI('/images/Gangtey Monastery , Bhutan.webp'), desc: 'Prominent 17th-century Nyingma Buddhist monastery overlooking the wide glacial Phobjikha Valley.' }
    ]
  },
  'hong-kong': {
    id: 'hong-kong',
    name: 'Hong Kong',
    category: 'International',
    heroImage: encodeURI('/images 2/Victoria Harbour Skyline & Red Junk Boat - Hong kong.jpg.jpeg'),
    tagline: 'Victoria Harbour Skyline, Disneyland & Tian Tan Big Buddha',
    description: 'Experience the electric fusion of modern skyscrapers, traditional red-sail junk boats, magical Disneyland adventures, and sacred hillside temples.',
    spots: [
      { name: 'Victoria Harbour Skyline & Red Junk Boat', image: encodeURI('/images 2/Victoria Harbour Skyline & Red Junk Boat - Hong kong.jpg.jpeg'), desc: 'Iconic Victoria Harbour skyline framed by traditional red-sail Chinese junk boats sailing past illuminated skyscrapers.' },
      { name: 'Hong Kong Disneyland', image: encodeURI('/images/Hong Kong Disneyland.jpg.jpeg'), desc: 'Magical theme park kingdom on Lantau Island featuring Castle of Magical Dreams, World of Frozen, and Disney attractions.' },
      { name: 'Tian Tan Big Buddha', image: encodeURI('/images/Tian Tan Buddha , Hong Kong.jpg.jpeg'), desc: 'Monumental 34-meter bronze Buddha statue seated atop Mount Muk Yue beside Po Lin Monastery on Lantau Island.' },
      { name: 'Nan Lian Garden & Chi Lin Nunnery', image: encodeURI('/images/Nan Lian Garden Hongkong.jpg.jpeg'), desc: 'Serene Tang Dynasty-style classical Chinese botanical garden featuring the golden Pavilion of Absolute Perfection and lotus ponds.' },
      { name: 'Wong Tai Sin Temple', image: encodeURI('/images/Wong Tai Sin Temple in Hong Kong.jpg.jpeg'), desc: 'Famous Taoist, Buddhist, and Confucian temple known for claiming to make every wish come true through Kau Chim fortune telling.' },
      { name: 'Hong Kong Space Museum & Museum of Art', image: encodeURI('/images/Hong Kong Space Museum dome and Hong Kong Museum of Art.jpg.jpeg'), desc: 'Prominent Tsim Sha Tsui waterfront cultural landmarks featuring the iconic egg-shaped planetarium dome and art exhibitions.' }
    ]
  },
  'china': {
    id: 'china',
    name: 'China',
    category: 'International',
    heroImage: encodeURI('/images/Great Wall of China.jpg.jpeg'),
    tagline: 'Great Wall, Forbidden City & Giant Panda Reserves',
    description: 'Traverse thousands of years of imperial history, ancient wonder fortifications, terracotta armies, giant panda sanctuaries, and magical Disney parks.',
    spots: [
      { name: 'Great Wall of China', image: encodeURI('/images/Great Wall of China.jpg.jpeg'), desc: 'Legendary ancient stone wonder winding across dramatic green mountain ridges and watchtowers.' },
      { name: 'Forbidden City, Beijing', image: encodeURI('/images/Forbidden City in Beijing , China.jpg.jpeg'), desc: 'Colossal imperial palace complex of the Ming and Qing dynasties featuring golden-roofed halls and grand courtyards.' },
      { name: 'Temple of Heaven, Beijing', image: encodeURI('/images/China , Temple of Heaven.jpg.jpeg'), desc: 'Magnificent circular wooden temple complex where imperial emperors performed solemn prayer rituals for harvest.' },
      { name: 'Terracotta Army, Xi’an', image: encodeURI('/images/Terracotta Army China.jpg.jpeg'), desc: 'Incredible archaeological discovery of thousands of life-sized terracotta soldiers, chariots, and horses guarding Emperor Qin Shi Huang’s tomb.' },
      { name: 'Chengdu Giant Panda Breeding Research Base', image: encodeURI('/images/China , Chengdu Research Base of Giant Panda Breeding.jpg.jpeg'), desc: 'World-renowned conservation sanctuary where visitors observe playful giant pandas and red pandas in lush bamboo forests.' },
      { name: 'Shanghai Disneyland Park', image: encodeURI('/images/China , Shanghai Disneyland Park.webp'), desc: 'Spectacular Disney theme park featuring the Enchanted Storybook Castle, TRON Lightcycle Power Run, and themed lands.' }
    ]
  },

  // --- DOMESTIC (EXPLORE BHARAT - 8 DESTINATIONS) ---
  'kashmir': {
    id: 'kashmir',
    name: 'Kashmir',
    category: 'Domestic',
    heroImage: encodeURI('/images/Kashmir.jpg.jpeg'),
    tagline: 'Paradise on Earth with Dal Lake Houseboats & Gulmarg Gondolas',
    description: 'Experience pristine snow valleys, traditional houseboats, pine forests, and flower gardens in Paradise on Earth.',
    spots: [
      { name: 'Kashmir', image: encodeURI('/images/Kashmir.jpg.jpeg'), desc: 'Experience pristine snow valleys, traditional houseboats, pine forests, and flower gardens in Paradise on Earth.' },
      { name: 'Kashmir', image: encodeURI('/images/Kashmir (2).jpg.jpeg'), desc: 'Experience pristine snow valleys, traditional houseboats, pine forests, and flower gardens in Paradise on Earth.' },
      { name: 'Kashmir', image: encodeURI('/images/kashmir 3.jpg.jpeg'), desc: 'Experience pristine snow valleys, traditional houseboats, pine forests, and flower gardens in Paradise on Earth.' },
      { name: 'Kashmir', image: encodeURI('/images/Kashmir 4.jpg.jpeg'), desc: 'Experience pristine snow valleys, traditional houseboats, pine forests, and flower gardens in Paradise on Earth.' },
      { name: 'Kashmir', image: encodeURI('/images/Kashmir 5.jpg.jpeg'), desc: 'Experience pristine snow valleys, traditional houseboats, pine forests, and flower gardens in Paradise on Earth.' },
      { name: 'Kashmir', image: encodeURI('/images/Kashmir 6.jpg.jpeg'), desc: 'Experience pristine snow valleys, traditional houseboats, pine forests, and flower gardens in Paradise on Earth.' }
    ]
  },
  'andaman': {
    id: 'andaman',
    name: 'Andaman & Nicobar',
    category: 'Domestic',
    heroImage: encodeURI('/images/Andaman.jpg.jpeg'),
    tagline: 'Radhanagar Beaches, Cellular Jail History & Scuba Coral Reefs',
    description: 'Discover crystal clear turquoise waters, white sand beaches, coral reefs, and historic freedom struggle heritage.',
    spots: [
      { name: 'Andaman & Nicobar', image: encodeURI('/images/Andaman.jpg.jpeg'), desc: 'Discover crystal clear turquoise waters, white sand beaches, coral reefs, and historic freedom struggle heritage.' },
      { name: 'Andaman & Nicobar', image: encodeURI('/images/Andaman 2.jpg.jpeg'), desc: 'Discover crystal clear turquoise waters, white sand beaches, coral reefs, and historic freedom struggle heritage.' },
      { name: 'Andaman & Nicobar', image: encodeURI('/images/Andaman 3.avif'), desc: 'Discover crystal clear turquoise waters, white sand beaches, coral reefs, and historic freedom struggle heritage.' },
      { name: 'Andaman & Nicobar', image: encodeURI('/images/Andaman 4.JPG.jpeg'), desc: 'Discover crystal clear turquoise waters, white sand beaches, coral reefs, and historic freedom struggle heritage.' },
      { name: 'Andaman & Nicobar', image: encodeURI('/images/Andaman 5.jpg.jpeg'), desc: 'Discover crystal clear turquoise waters, white sand beaches, coral reefs, and historic freedom struggle heritage.' },
      { name: 'Andaman & Nicobar', image: encodeURI('/images/Andaman 6.webp'), desc: 'Discover crystal clear turquoise waters, white sand beaches, coral reefs, and historic freedom struggle heritage.' }
    ]
  },
  'leh-ladakh': {
    id: 'leh-ladakh',
    name: 'Leh Ladakh',
    category: 'Domestic',
    heroImage: encodeURI('/images/leh ladakh.jpg.jpeg'),
    tagline: 'Pangong Lake, Nubra Sand Dunes & Magnetic Hill',
    description: 'Conquer high mountain passes, changing color lakes, double-humped camel dunes, and ancient cliff monasteries.',
    spots: [
      { name: 'Leh Ladakh', image: encodeURI('/images/leh ladakh.jpg.jpeg'), desc: 'Conquer high mountain passes, changing color lakes, double-humped camel dunes, and ancient cliff monasteries.' },
      { name: 'Leh Ladakh', image: encodeURI('/images/leh ladakh 2.jpg.jpeg'), desc: 'Conquer high mountain passes, changing color lakes, double-humped camel dunes, and ancient cliff monasteries.' },
      { name: 'Leh Ladakh', image: encodeURI('/images/leh ladakh 3.jpg.jpeg'), desc: 'Conquer high mountain passes, changing color lakes, double-humped camel dunes, and ancient cliff monasteries.' },
      { name: 'Leh Ladakh', image: encodeURI('/images/leh ladakh 4.jpg.jpeg'), desc: 'Conquer high mountain passes, changing color lakes, double-humped camel dunes, and ancient cliff monasteries.' },
      { name: 'Leh Ladakh', image: encodeURI('/images/leh ladakh 5.jpg.jpeg'), desc: 'Conquer high mountain passes, changing color lakes, double-humped camel dunes, and ancient cliff monasteries.' },
      { name: 'Leh Ladakh', image: encodeURI('/images/leh ladakh 6.jpg.jpeg'), desc: 'Conquer high mountain passes, changing color lakes, double-humped camel dunes, and ancient cliff monasteries.' }
    ]
  },
  'rajasthan': {
    id: 'rajasthan',
    name: 'Rajasthan',
    category: 'Domestic',
    heroImage: encodeURI('/images/Rajasthan.jpg.jpeg'),
    tagline: 'Amber Fort, Lake Pichola & Jaisalmer Desert Safaris',
    description: 'Step into royal heritage featuring grand golden forts, lake palaces, camel desert safaris, and vibrant folk music.',
    spots: [
      { name: 'Rajasthan', image: encodeURI('/images/Rajasthan.jpg.jpeg'), desc: 'Step into royal heritage featuring grand golden forts, lake palaces, camel desert safaris, and vibrant folk music.' },
      { name: 'Rajasthan', image: encodeURI('/images/Rajasthan (2).jpg.jpeg'), desc: 'Step into royal heritage featuring grand golden forts, lake palaces, camel desert safaris, and vibrant folk music.' },
      { name: 'Rajasthan', image: encodeURI('/images/Rajasthan (3).jpg.jpeg'), desc: 'Step into royal heritage featuring grand golden forts, lake palaces, camel desert safaris, and vibrant folk music.' },
      { name: 'Rajasthan', image: encodeURI('/images/Rajasthan (4).jpg.jpeg'), desc: 'Step into royal heritage featuring grand golden forts, lake palaces, camel desert safaris, and vibrant folk music.' },
      { name: 'Rajasthan', image: encodeURI('/images/Rajasthan 5.jpg.jpeg'), desc: 'Step into royal heritage featuring grand golden forts, lake palaces, camel desert safaris, and vibrant folk music.' },
      { name: 'Rajasthan', image: encodeURI('/images/Rajasthan 6.jpg.jpeg'), desc: 'Step into royal heritage featuring grand golden forts, lake palaces, camel desert safaris, and vibrant folk music.' }
    ]
  },
  'goa': {
    id: 'goa',
    name: 'Goa',
    category: 'Domestic',
    heroImage: encodeURI('/images/goaa.avif'),
    tagline: 'Baga Beaches, Dudhsagar Waterfalls & Portuguese Forts',
    description: 'Relax on golden beaches, explore Portuguese UNESCO cathedrals, experience watersports, and watch sunset cruises.',
    spots: [
      { name: 'Goa', image: encodeURI('/images/goaa.avif'), desc: 'Relax on golden beaches, explore Portuguese UNESCO cathedrals, experience watersports, and watch sunset cruises.' },
      { name: 'Goa', image: encodeURI('/images/Goa (2).avif'), desc: 'Relax on golden beaches, explore Portuguese UNESCO cathedrals, experience watersports, and watch sunset cruises.' },
      { name: 'Goa', image: encodeURI('/images/goa 3.webp'), desc: 'Relax on golden beaches, explore Portuguese UNESCO cathedrals, experience watersports, and watch sunset cruises.' },
      { name: 'Goa', image: encodeURI('/images/goaaa.webp'), desc: 'Relax on golden beaches, explore Portuguese UNESCO cathedrals, experience watersports, and watch sunset cruises.' },
      { name: 'Goa', image: encodeURI('/images/goa 5.avif'), desc: 'Relax on golden beaches, explore Portuguese UNESCO cathedrals, experience watersports, and watch sunset cruises.' },
      { name: 'Goa', image: encodeURI('/images/goa 1.avif'), desc: 'Relax on golden beaches, explore Portuguese UNESCO cathedrals, experience watersports, and watch sunset cruises.' }
    ]
  },
  'meghalaya': {
    id: 'meghalaya',
    name: 'Meghalaya',
    category: 'Domestic',
    heroImage: encodeURI('/images/meghalaya.jpg.jpeg'),
    tagline: 'Living Root Bridges, Dawki Crystal River & Nohkalikai Falls',
    description: 'Discover the Abode of Clouds featuring double-decker living root bridges, crystal clear rivers, and deep limestone caves.',
    spots: [
      { name: 'Meghalaya', image: encodeURI('/images/meghalaya.jpg.jpeg'), desc: 'Discover the Abode of Clouds featuring double-decker living root bridges, crystal clear rivers, and deep limestone caves.' },
      { name: 'Meghalaya', image: encodeURI('/images/meghalaya 2.jpg.jpeg'), desc: 'Discover the Abode of Clouds featuring double-decker living root bridges, crystal clear rivers, and deep limestone caves.' },
      { name: 'Meghalaya', image: encodeURI('/images/Meghalaya 3.jpg.jpeg'), desc: 'Discover the Abode of Clouds featuring double-decker living root bridges, crystal clear rivers, and deep limestone caves.' },
      { name: 'Meghalaya', image: encodeURI('/images/Meghalaya 4.jpg.jpeg'), desc: 'Discover the Abode of Clouds featuring double-decker living root bridges, crystal clear rivers, and deep limestone caves.' },
      { name: 'Meghalaya', image: encodeURI('/images/Meghalaya 5.jpg.jpeg'), desc: 'Discover the Abode of Clouds featuring double-decker living root bridges, crystal clear rivers, and deep limestone caves.' },
      { name: 'Meghalaya', image: encodeURI('/images/Medhalaya 6.jpg.jpeg'), desc: 'Discover the Abode of Clouds featuring double-decker living root bridges, crystal clear rivers, and deep limestone caves.' }
    ]
  },
  'sikkim': {
    id: 'sikkim',
    name: 'Sikkim',
    category: 'Domestic',
    heroImage: encodeURI('/images/sikkim.jpg.jpeg'),
    tagline: 'Tsomgo Lake, Nathula Pass & Kanchenjunga Views',
    description: 'Immerse in Himalayan tranquility, sacred high-altitude lakes, ancient Buddhist monasteries, and rhododendron valleys.',
    spots: [
      { name: 'Sikkim', image: encodeURI('/images/sikkim.jpg.jpeg'), desc: 'Immerse in Himalayan tranquility, sacred high-altitude lakes, ancient Buddhist monasteries, and rhododendron valleys.' },
      { name: 'Sikkim', image: encodeURI('/images/sikkim 2.jpg.jpeg'), desc: 'Immerse in Himalayan tranquility, sacred high-altitude lakes, ancient Buddhist monasteries, and rhododendron valleys.' },
      { name: 'Sikkim', image: encodeURI('/images/sikkim 3.jpg.jpeg'), desc: 'Immerse in Himalayan tranquility, sacred high-altitude lakes, ancient Buddhist monasteries, and rhododendron valleys.' },
      { name: 'Sikkim', image: encodeURI('/images/sikkim 4.jpg.jpeg'), desc: 'Immerse in Himalayan tranquility, sacred high-altitude lakes, ancient Buddhist monasteries, and rhododendron valleys.' },
      { name: 'Sikkim', image: encodeURI('/images/sikkim 5.jpg.jpeg'), desc: 'Immerse in Himalayan tranquility, sacred high-altitude lakes, ancient Buddhist monasteries, and rhododendron valleys.' },
      { name: 'Sikkim', image: encodeURI('/images/sikkim 6.jpg.jpeg'), desc: 'Immerse in Himalayan tranquility, sacred high-altitude lakes, ancient Buddhist monasteries, and rhododendron valleys.' }
    ]
  },
  'kerala': {
    id: 'kerala',
    name: 'Kerala',
    category: 'Domestic',
    heroImage: encodeURI('/images/kerala.jpg.jpeg'),
    tagline: 'Alleppey Houseboats, Munnar Tea Gardens & Kovalam Beaches',
    description: 'Relax in God’s Own Country featuring palm-fringed backwater cruises, mist-covered tea gardens, and Kathakali art.',
    spots: [
      { name: 'Kerala', image: encodeURI('/images/kerala.jpg.jpeg'), desc: 'Relax in God’s Own Country featuring palm-fringed backwater cruises, mist-covered tea gardens, and Kathakali art.' },
      { name: 'Kerala', image: encodeURI('/images/kerala 2.jpg.jpeg'), desc: 'Relax in God’s Own Country featuring palm-fringed backwater cruises, mist-covered tea gardens, and Kathakali art.' },
      { name: 'Kerala', image: encodeURI('/images/kerala 3.jpg.jpeg'), desc: 'Relax in God’s Own Country featuring palm-fringed backwater cruises, mist-covered tea gardens, and Kathakali art.' },
      { name: 'Kerala', image: encodeURI('/images/kerala 4.jpg.jpeg'), desc: 'Relax in God’s Own Country featuring palm-fringed backwater cruises, mist-covered tea gardens, and Kathakali art.' },
      { name: 'Kerala', image: encodeURI('/images/kerala 5.jpg.jpeg'), desc: 'Relax in God’s Own Country featuring palm-fringed backwater cruises, mist-covered tea gardens, and Kathakali art.' },
      { name: 'Kerala', image: encodeURI('/images/kerala 6.jpg.jpeg'), desc: 'Relax in God’s Own Country featuring palm-fringed backwater cruises, mist-covered tea gardens, and Kathakali art.' }
    ]
  }
};
