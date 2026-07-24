// Comprehensive Destination & Famous Spots Data from User Document
export const destinationsData = {
  // --- INTERNATIONAL (22 DESTINATIONS) ---
  'bali': {
    id: 'bali',
    name: 'Indonesia (Bali)',
    category: 'International',
    heroImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Island of Gods with Sacred Temples, Terraces & Beach Clubs',
    description: 'Explore Bali’s iconic sea temples, lush green rice terraces, active volcanic treks, and world-famous beach clubs.',
    spots: [
      { name: 'Tanah Lot Temple', image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=600&q=80', desc: 'Ancient Hindu offshore rock shrine with spectacular sunset views.' },
      { name: 'Ubud Rice Terraces (Tegallalang)', image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80', desc: 'Famous emerald terraced valley with jungle swings and traditional irrigation.' },
      { name: 'Uluwatu Temple & Kecak Fire Dance', image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=600&q=80', desc: 'Cliffside sea temple hosting hypnotic traditional Kecak dance performances at dusk.' },
      { name: 'Nusa Penida (Kelingking Beach)', image: 'https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=600&q=80', desc: 'Iconic T-Rex shaped cliff overlooking secluded white sand beach & azure water.' },
      { name: 'Mount Batur Sunrise Trek', image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=600&q=80', desc: 'Early morning hike up an active volcano to watch sunrise over Lake Batur.' },
      { name: 'Seminyak / Kuta Beach Clubs', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80', desc: 'Vibrant beachfront lounges, infinity pools, and world-class oceanfront dining.' }
    ]
  },
  'uae': {
    id: 'uae',
    name: 'UAE (Dubai & Abu Dhabi)',
    category: 'International',
    heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Futuristic Skyscrapers, Luxury Desert Safaris & Grand Mosques',
    description: 'Experience record-breaking architectural marvels, golden sand dunes, luxury shopping, and family theme parks.',
    spots: [
      { name: 'Burj Khalifa', image: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=600&q=80', desc: 'World tallest building with breathtaking observation decks.' },
      { name: 'Dubai Desert Safari', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80', desc: 'Thrilling dune bashing, camel riding, quad biking, and Bedouin BBQ dinner.' },
      { name: 'Palm Jumeirah & Atlantis', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80', desc: 'Man-made palm island featuring luxury resorts and Aquaventure Waterpark.' },
      { name: 'Sheikh Zayed Grand Mosque (Abu Dhabi)', image: 'https://images.unsplash.com/photo-1548625361-185d2ebc17e6?auto=format&fit=crop&w=600&q=80', desc: 'Architectural masterpiece crafted with white marble, gold, and Swarovski crystals.' },
      { name: 'Dubai Marina & Global Village', image: 'https://images.unsplash.com/photo-1526495124232-a04e1849168c?auto=format&fit=crop&w=600&q=80', desc: 'Luxury yacht marina skyline and multicultural shopping & entertainment park.' },
      { name: 'Ferrari World / Yas Island', image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=600&q=80', desc: 'World’s fastest roller coaster at Formula Rossa on Yas Island Abu Dhabi.' }
    ]
  },
  'vietnam': {
    id: 'vietnam',
    name: 'Vietnam',
    category: 'International',
    heroImage: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Emerald Bays, Lantern-Lit Ancient Towns & Golden Bridges',
    description: 'Immerse in dramatic karst bay cruises, French colonial architecture, ancient heritage towns, and mountain rice terraces.',
    spots: [
      { name: 'Ha Long Bay Cruise', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80', desc: 'Overnight luxury cruise past thousands of towering limestone islets and sea caves.' },
      { name: 'Hoi An Ancient Town (Lantern Festival)', image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=600&q=80', desc: 'UNESCO town illuminated by thousands of colorful silk lanterns along the river.' },
      { name: 'Ba Na Hills Golden Bridge', image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=600&q=80', desc: 'Giant stone hands holding a golden pedestrian bridge 1,400 meters above sea level.' },
      { name: 'Cu Chi Tunnels', image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=600&q=80', desc: 'Historic underground military network used during the Vietnam War.' },
      { name: 'Sapa Rice Terraces', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80', desc: 'Lush green cascading mountain terraces and ethnic hill-tribe villages.' },
      { name: 'Phu Quoc', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80', desc: 'Tropical island paradise with white sandy beaches, resorts, and cable car rides.' }
    ]
  },
  'thailand': {
    id: 'thailand',
    name: 'Thailand',
    category: 'International',
    heroImage: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Land of Smiles with Turquoise Islands, Temples & Elephant Sanctuaries',
    description: 'Discover crystal clear island lagoons, ornate royal temples, vibrant night markets, and ethical elephant sanctuaries.',
    spots: [
      { name: 'Phi Phi Islands', image: 'https://images.unsplash.com/photo-1537956965359-7573183d1f57?auto=format&fit=crop&w=600&q=80', desc: 'Famous Maya Bay limestone cliffs, snorkeling reefs, and speedboat excursions.' },
      { name: 'Grand Palace, Bangkok', image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=600&q=80', desc: 'Ornate former royal residence housing the revered Emerald Buddha.' },
      { name: 'Phuket Beaches', image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=600&q=80', desc: 'Patong, Kata & Karon beaches with watersports, beach clubs, and nightlife.' },
      { name: 'Chiang Mai Elephant Sanctuary', image: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=600&q=80', desc: 'Ethical sanctuary experience feeding and bathing rescued Asian elephants.' },
      { name: 'Wat Arun Temple', image: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&w=600&q=80', desc: 'Temple of Dawn on the Chao Phraya River decorated with porcelain mosaic tiles.' },
      { name: 'Krabi Railay Beach', image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=600&q=80', desc: 'Secluded peninsula accessible only by boat, famous for rock climbing and lagoons.' }
    ]
  },
  'singapore': {
    id: 'singapore',
    name: 'Singapore',
    category: 'International',
    heroImage: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Garden City of the Future with Supertrees & SkyParks',
    description: 'Experience futuristic urban nature, world-class theme parks, rooftop infinity pools, and diverse culinary night markets.',
    spots: [
      { name: 'Gardens by the Bay (Supertree Grove)', image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=600&q=80', desc: 'Avatar-like giant Supertrees featuring night light & sound shows and Flower Dome.' },
      { name: 'Marina Bay Sands SkyPark', image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=600&q=80', desc: 'Iconic 57th floor observation deck and world’s largest rooftop infinity pool.' },
      { name: 'Universal Studios Sentosa', image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=600&q=80', desc: 'Southeast Asia’s top movie theme park with Transformer & Jurassic Park rides.' },
      { name: 'Singapore Zoo & Night Safari', image: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=600&q=80', desc: 'Open-concept wildlife park and nocturnal animal safari tour.' },
      { name: 'Merlion Park', image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=600&q=80', desc: 'Iconic half-lion, half-fish statue spouting water into Marina Bay.' },
      { name: 'Sentosa Island Beaches', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80', desc: 'Siloso & Tanjong beaches with cable car rides and beachfront dining.' }
    ]
  },
  'malaysia': {
    id: 'malaysia',
    name: 'Malaysia',
    category: 'International',
    heroImage: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Twin Towers, Rainforests & Langkawi Sky Bridges',
    description: 'Explore futuristic architectural landmarks, colorful rainbow cave steps, island sky bridges, and cool tea plantations.',
    spots: [
      { name: 'Petronas Twin Towers', image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=600&q=80', desc: 'World’s tallest twin towers with double-deck Skybridge and observation floor.' },
      { name: 'Langkawi Sky Bridge', image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=600&q=80', desc: 'Curved pedestrian cable bridge suspended 660 meters above Machincang mountain.' },
      { name: 'Batu Caves', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80', desc: '272 colorful stairs leading up to limestone cave temples guarded by Lord Murugan.' },
      { name: 'Genting Highlands', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80', desc: 'Hill station resort featuring cable cars, indoor theme parks, and casino.' },
      { name: 'Penang Street Art & George Town', image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=600&q=80', desc: 'UNESCO heritage city renowned for interactive street murals and street food.' },
      { name: 'Cameron Highlands Tea Gardens', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80', desc: 'Cool mountain climate with rolling Boh tea plantations and strawberry farms.' }
    ]
  },
  'japan': {
    id: 'japan',
    name: 'Japan',
    category: 'International',
    heroImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Mount Fuji, Shrine Torii Gates & Cherry Blossoms',
    description: 'Step into a land where ancient shinto shrines meet bullet trains, neon cityscapes, and serene bamboo groves.',
    spots: [
      { name: 'Mount Fuji', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80', desc: 'Japan’s iconic snow-capped volcano, best viewed from Lake Kawaguchiko.' },
      { name: 'Kyoto Fushimi Inari Shrine', image: 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?auto=format&fit=crop&w=600&q=80', desc: 'Path of 10,000 vermilion Torii gates winding up Mount Inari in Kyoto.' },
      { name: 'Tokyo Shibuya Crossing & Skytree', image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80', desc: 'World’s busiest pedestrian scramble crossing and tallest broadcast tower.' },
      { name: 'Osaka Castle', image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=600&q=80', desc: 'Historic 16th-century samurai fortress surrounded by moats and cherry orchards.' },
      { name: 'Arashiyama Bamboo Grove', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=600&q=80', desc: 'Enchanting soaring green bamboo forest paths in western Kyoto.' },
      { name: 'Cherry Blossom Parks (seasonal)', image: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=600&q=80', desc: 'Pink Sakura blossom blooms in Shinjuku Gyoen and Ueno Park.' }
    ]
  },
  'schengen': {
    id: 'schengen',
    name: 'Schengen (Europe)',
    category: 'International',
    heroImage: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Eiffel Tower, Swiss Alps & Venetian Canals',
    description: 'Traverse 27 European countries seamlessly from romantic Paris landmarks to Alpine mountain peaks.',
    spots: [
      { name: 'Eiffel Tower, Paris', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80', desc: 'Iron lattice tower on the Champ de Mars in Paris, shimmering with evening lights.' },
      { name: 'Swiss Alps (Interlaken / Jungfrau)', image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=600&q=80', desc: 'Top of Europe Jungfraujoch cogwheel train rides and glacier panoramas.' },
      { name: 'Venice Canals', image: 'https://images.unsplash.com/photo-1514896856000-91cb6de818e0?auto=format&fit=crop&w=600&q=80', desc: 'Gondola rides through romantic waterways past Doge Palace & Rialto Bridge.' },
      { name: 'Santorini, Greece', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80', desc: 'White whitewashed cliffside villages with blue domed churches facing the caldera.' },
      { name: 'Neuschwanstein Castle, Germany', image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80', desc: 'Fairy-tale 19th-century palace perched atop Bavarian Alps mountains.' },
      { name: 'Amsterdam Canals', image: 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=600&q=80', desc: 'Historic 17th-century canal belt, gabled merchant houses, and bike tours.' }
    ]
  },
  'sri-lanka': {
    id: 'sri-lanka',
    name: 'Sri Lanka',
    category: 'International',
    heroImage: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Ancient Rock Fortresses, Nine Arch Bridges & Wildlife Safaris',
    description: 'Experience lush tea plantations, ancient Buddhist heritage sites, leopards in Yala, and coastal colonial forts.',
    spots: [
      { name: 'Sigiriya Rock Fortress', image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=600&q=80', desc: 'Ancient 200m high palace fortress with Mirror Wall and Lion Gate stairs.' },
      { name: 'Ella Nine Arch Bridge', image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=600&q=80', desc: 'Colonial stone bridge surrounded by dense tea hills and scenic train rides.' },
      { name: 'Yala National Park Safari', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=600&q=80', desc: 'Highest leopard density in the world along with wild elephants and sloth bears.' },
      { name: 'Galle Fort', image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=600&q=80', desc: 'Portuguese & Dutch colonial fortified city on Sri Lanka’s southern coast.' },
      { name: 'Kandy Temple of the Tooth', image: 'https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=600&q=80', desc: 'Sacred Buddhist temple complex housing the relic of the tooth of Buddha.' },
      { name: 'Nuwara Eliya Tea Plantations', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80', desc: 'Little England hill country with Ceylon tea factories and misty waterfalls.' }
    ]
  },
  'philippines': {
    id: 'philippines',
    name: 'Philippines',
    category: 'International',
    heroImage: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1200&q=80',
    tagline: 'El Nido Lagoons, Chocolate Hills & Boracay White Beaches',
    description: 'Explore 7,000+ island wonders from crystal clear karst lagoons to world-famous surf spots and rice terraces.',
    spots: [
      { name: 'Palawan / El Nido Lagoons', image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=600&q=80', desc: 'Secret Big & Small Lagoons with emerald waters framed by towering limestone.' },
      { name: 'Boracay White Beach', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80', desc: '4km powder-soft white sand beach with turquoise water and sunset sailing.' },
      { name: 'Chocolate Hills, Bohol', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80', desc: 'Geological formation of over 1,200 grass-covered symmetrical conical hills.' },
      { name: 'Banaue Rice Terraces', image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80', desc: '2,000-year-old mountain terraces carved into the Ifugao mountains.' },
      { name: 'Manila Intramuros', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80', desc: 'Historic 16th-century walled Spanish colonial city center in Manila.' },
      { name: 'Siargao Cloud 9 Surf Point', image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=600&q=80', desc: 'Surfing capital of the Philippines famous for wooden boardwalks and barreling waves.' }
    ]
  },
  'georgia': {
    id: 'georgia',
    name: 'Georgia',
    category: 'International',
    heroImage: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Caucasus Mountains, Trinity Church & Wine Valleys',
    description: 'Immerse in ancient Orthodox churches overlooking snow-capped Caucasus peaks and 8,000-year-old wine traditions.',
    spots: [
      { name: 'Tbilisi Old Town', image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=600&q=80', desc: 'Sulfur bath districts, Narikala Fortress cable car, and carved wooden balconies.' },
      { name: 'Kazbegi & Gergeti Trinity Church', image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=600&q=80', desc: '14th-century church situated under Mount Kazbek 2,170m above sea level.' },
      { name: 'Batumi Boulevard', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80', desc: 'Black Sea coastal promenade with modern towers and Ali & Nino moving statue.' },
      { name: 'Uplistsikhe Cave City', image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=600&q=80', desc: 'Ancient rock-hewn town dating back to the early Iron Age carved into sandstone.' },
      { name: 'Svaneti Mountains', image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=600&q=80', desc: 'High mountain medieval region with ancient stone defensive Svan towers.' },
      { name: 'Kakheti Wine Region', image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80', desc: 'Fertile valley home to traditional clay qvevri wine cellars and Sighnaghi town.' }
    ]
  },
  'kazakhstan': {
    id: 'kazakhstan',
    name: 'Kazakhstan (Almaty)',
    category: 'International',
    heroImage: 'https://images.unsplash.com/photo-1558588942-930faae5a389?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Charyn Canyons, Big Almaty Lake & Shymbulak Skiing',
    description: 'Discover Central Asia’s gem featuring dramatic red canyons, turquoise mountain lakes, and high-altitude ski slopes.',
    spots: [
      { name: 'Kok-Tobe Hill', image: 'https://images.unsplash.com/photo-1558588942-930faae5a389?auto=format&fit=crop&w=600&q=80', desc: 'Panoramic hill view over Almaty city reached by cable car with Beatles monument.' },
      { name: 'Charyn Canyon', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80', desc: 'Grand Canyon of Kazakhstan featuring 90-meter deep Valley of Castles rock pillars.' },
      { name: 'Big Almaty Lake', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', desc: 'Alpine turquoise lake 2,511m high in the Trans-Ili Alatau mountains.' },
      { name: 'Shymbulak Ski Resort', image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=600&q=80', desc: 'Modern winter resort with gondolas ascending to Talgar Pass peaks.' },
      { name: 'Medeu Ice Rink', image: 'https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&w=600&q=80', desc: 'World’s highest outdoor ice skating rink surrounded by pine-covered slopes.' },
      { name: 'Zenkov Cathedral', image: 'https://images.unsplash.com/photo-1548625361-185d2ebc17e6?auto=format&fit=crop&w=600&q=80', desc: 'Brightly painted wooden Russian Orthodox cathedral built without nails.' }
    ]
  },
  'maldives': {
    id: 'maldives',
    name: 'Maldives',
    category: 'International',
    heroImage: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Overwater Bungalows, Bioluminescent Beaches & Dolphin Cruises',
    description: 'Unwind in pure luxury on private coral atolls surrounded by crystal turquoise lagoons and vibrant marine reefs.',
    spots: [
      { name: 'Overwater Villas', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=600&q=80', desc: 'Luxury glass-floor villas with private pools and direct lagoon ocean access.' },
      { name: 'Snorkeling & Scuba Coral Reefs', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80', desc: 'Swim alongside manta rays, sea turtles, and reef sharks in crystal lagoons.' },
      { name: 'Bioluminescent Beach, Vaadhoo', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80', desc: 'Glowing Sea of Stars effect created by glowing blue plankton along night shorelines.' },
      { name: 'Sandbank Picnic Islands', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80', desc: 'Private dining experiences on tiny uninhabited white sandbanks in the ocean.' },
      { name: 'Male City Fish Market', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80', desc: 'Vibrant local capital market showcasing fresh yellowfin tuna catches.' },
      { name: 'Sunset Dolphin Cruise', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80', desc: 'Golden hour speedboat excursion tracking wild spinner dolphin pods.' }
    ]
  },
  'saudi-arabia': {
    id: 'saudi-arabia',
    name: 'Saudi Arabia',
    category: 'International',
    heroImage: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=1200&q=80',
    tagline: 'AlUla Hegra Rock Tombs, Edge of the World & Holy Shrines',
    description: 'Explore ancient Nabataean rock-cut tombs in AlUla, modern mega-developments, and sacred pilgrimage heritage.',
    spots: [
      { name: 'AlUla / Hegra Rock Tombs', image: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=600&q=80', desc: 'UNESCO site of 110 carved Nabataean monumental tombs in desert rocks.' },
      { name: 'Masjid al-Haram, Mecca (Umrah)', image: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=600&q=80', desc: 'Holy sanctuary housing the sacred Kaaba, destination for Umrah & Hajj.' },
      { name: 'Red Sea Coast', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80', desc: 'Pristine coral reefs and luxury sustainable island eco-resorts.' },
      { name: 'Riyadh Edge of the World', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80', desc: '300-meter high dramatic cliff precipice overlooking ancient ocean bed valley.' },
      { name: 'Diriyah Historic District', image: 'https://images.unsplash.com/photo-1548625361-185d2ebc17e6?auto=format&fit=crop&w=600&q=80', desc: 'Birthplace of the Saudi state built with mud-brick At-Turaif architecture.' },
      { name: 'NEOM & Modern Developments', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80', desc: 'Futuristic mega-projects including Sindalah Island and The Line.' }
    ]
  },
  'turkey': {
    id: 'turkey',
    name: 'Turkey',
    category: 'International',
    heroImage: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Cappadocia Balloons, Hagia Sophia & Pamukkale Cotton Castles',
    description: 'Marvel at hundreds of hot air balloons over fairy chimneys, Ottoman mosques, and white thermal travertines.',
    spots: [
      { name: 'Cappadocia Hot Air Balloons', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=600&q=80', desc: 'Sunrise balloon flights over volcanic fairy chimney cave valleys.' },
      { name: 'Hagia Sophia, Istanbul', image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=600&q=80', desc: 'Architectural masterpiece spanning Byzantine & Ottoman empire history.' },
      { name: 'Pamukkale Cotton Castle', image: 'https://images.unsplash.com/photo-1527838832700-548952f14cdb?auto=format&fit=crop&w=600&q=80', desc: 'Natural white travertine terraces filled with warm mineral spring waters.' },
      { name: 'Blue Mosque', image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=600&q=80', desc: 'Sultanahmet Mosque decorated with 20,000 hand-painted Iznik blue ceramic tiles.' },
      { name: 'Bosphorus Cruise', image: 'https://images.unsplash.com/photo-1527838832700-548952f14cdb?auto=format&fit=crop&w=600&q=80', desc: 'Boat journey separating European and Asian continents in Istanbul.' },
      { name: 'Ephesus Ancient Ruins', image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=600&q=80', desc: 'Ancient Greco-Roman city featuring the Library of Celsus and Great Theatre.' }
    ]
  },
  'russia': {
    id: 'russia',
    name: 'Russia',
    category: 'International',
    heroImage: 'https://images.unsplash.com/photo-1513326718677-b964603b136b?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Red Square Domes, Kremlin Palaces & Hermitage Museum',
    description: 'Experience imperial Russian palaces, colorful onion-domed cathedrals, winter wonderland parks, and ballet heritage.',
    spots: [
      { name: "Red Square & St. Basil's Cathedral", image: 'https://images.unsplash.com/photo-1513326718677-b964603b136b?auto=format&fit=crop&w=600&q=80', desc: 'Moscow’s iconic square with colorful flame-shaped onion cathedral domes.' },
      { name: 'Hermitage Museum, St. Petersburg', image: 'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=600&q=80', desc: 'Winter Palace housing 3 million works of art in Saint Petersburg.' },
      { name: 'The Kremlin', image: 'https://images.unsplash.com/photo-1513326718677-b964603b136b?auto=format&fit=crop&w=600&q=80', desc: 'Fortified central complex overlooking the Moskva river with grand cathedrals.' },
      { name: 'Peterhof Palace Fountains', image: 'https://images.unsplash.com/photo-1548625361-185d2ebc17e6?auto=format&fit=crop&w=600&q=80', desc: 'Russian Versailles featuring Grand Cascade golden fountains leading to the sea.' },
      { name: 'Trans-Siberian Railway', image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=600&q=80', desc: 'Legendary train journey linking Moscow to Vladivostok across Siberia.' },
      { name: 'Golden Ring Towns', image: 'https://images.unsplash.com/photo-1513326718677-b964603b136b?auto=format&fit=crop&w=600&q=80', desc: 'Ring of ancient cities northeast of Moscow preserved with traditional kremlins.' }
    ]
  },
  'south-korea': {
    id: 'south-korea',
    name: 'South Korea',
    category: 'International',
    heroImage: 'https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Seoul Palaces, N Tower Views & Jeju Island Beaches',
    description: 'Immerse in K-pop culture, Hanok traditional villages, futuristic tech, and volcanic island scenery.',
    spots: [
      { name: 'Gyeongbokgung Palace, Seoul', image: 'https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=600&q=80', desc: 'Main Joseon dynasty royal palace with royal guard changing ceremonies.' },
      { name: 'N Seoul Tower', image: 'https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=600&q=80', desc: 'Namsan mountain tower offering 360-degree night view over Seoul skyline.' },
      { name: 'Jeju Island', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80', desc: 'Volcanic island with Seongsan Sunrise Peak, waterfalls, and lava tubes.' },
      { name: 'Nami Island', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80', desc: 'Half-moon shaped island famous for Metasequoia tree-lined walking paths.' },
      { name: 'Busan Haeundae Beach', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80', desc: 'South Korea’s premier coastal beach city with seafood markets and sky capsules.' },
      { name: 'Bukchon Hanok Village', image: 'https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=600&q=80', desc: 'Traditional neighborhood of hundreds of preserved Hanok houses in Seoul.' }
    ]
  },
  'kenya': {
    id: 'kenya',
    name: 'Kenya',
    category: 'International',
    heroImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Maasai Mara Migration, Kilimanjaro Views & Pink Flamingos',
    description: 'Experience Africa’s ultimate wildlife safari adventure during the Great Migration of wildebeest and Big 5 game.',
    spots: [
      { name: 'Maasai Mara Safari (Great Migration)', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=600&q=80', desc: 'World-famous game reserve witnessing millions of wildebeest crossing Mara river.' },
      { name: 'Amboseli National Park (Mt. Kilimanjaro views)', image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=600&q=80', desc: 'Herds of free-ranging elephants against the backdrop of snow-capped Mt. Kilimanjaro.' },
      { name: 'Lake Nakuru Flamingos', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=600&q=80', desc: 'Rift Valley soda lake covered in thousands of pink lesser flamingos and rhinos.' },
      { name: 'Diani Beach', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80', desc: 'White sand Indian Ocean beach with coral reefs and dhow boat cruises.' },
      { name: 'Nairobi National Park', image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=600&q=80', desc: 'Unique wildlife reserve located right outside Kenya’s capital city skyline.' },
      { name: "Hell's Gate National Park", image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80', desc: 'Dramatic red rock gorges, geothermal towers, and cycling among wildlife.' }
    ]
  },
  'egypt': {
    id: 'egypt',
    name: 'Egypt',
    category: 'International',
    heroImage: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Pyramids of Giza, Nile River Cruises & Luxor Temples',
    description: 'Journey back to antiquity admiring the Great Pyramids, Sphinx, Valley of Kings tombs, and Red Sea coral reefs.',
    spots: [
      { name: 'Pyramids of Giza & Sphinx', image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=600&q=80', desc: 'Ancient Wonders of the World guarded by the limestone Great Sphinx.' },
      { name: 'Nile River Cruise', image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=600&q=80', desc: 'Sailing between Luxor and Aswan past riverbanks lined with ancient temples.' },
      { name: 'Valley of the Kings, Luxor', image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=600&q=80', desc: 'Royal rock-cut tombs of pharaohs including Tutankhamun.' },
      { name: 'Abu Simbel Temples', image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=600&q=80', desc: 'Colossal rock-cut temples of Ramesses II relocated above Lake Nasser.' },
      { name: 'Red Sea Diving, Hurghada', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80', desc: 'World-renowned diving and snorkeling along vibrant Egyptian reef walls.' },
      { name: 'Egyptian Museum, Cairo', image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=600&q=80', desc: 'Extensive collection of pharaonic antiquities and golden burial treasures.' }
    ]
  },
  'mauritius': {
    id: 'mauritius',
    name: 'Mauritius',
    category: 'International',
    heroImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Seven Coloured Earths, Le Morne Beaches & Underwater Walks',
    description: 'Escape to an Indian Ocean island paradise featuring multi-colored sands, coral reefs, and volcanic peaks.',
    spots: [
      { name: 'Le Morne Brabant Beach', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80', desc: 'UNESCO basaltic mountain peninsula flanked by turquoise lagoons.' },
      { name: 'Chamarel Seven Coloured Earths', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80', desc: 'Geological dunes comprising sand of seven distinct colors (red, brown, violet).' },
      { name: 'Black River Gorges', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80', desc: 'National park protecting native rainforests, waterfalls, and giant tortoises.' },
      { name: 'Ile aux Cerfs Island', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80', desc: 'Private island sandbar offering parasailing, glass-bottom boats, and golf.' },
      { name: 'Grand Baie', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80', desc: 'Lively resort village with shopping, seafood dining, and catamaran departures.' },
      { name: 'Underwater Sea Walk', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80', desc: 'Unique helmet walking tour on the ocean bed among tropical fish.' }
    ]
  },
  'nepal': {
    id: 'nepal',
    name: 'Nepal',
    category: 'International',
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Everest Treks, Pokhara Lakes & Pashupatinath Temples',
    description: 'Stand in awe of the highest peaks on Earth, ancient stupas, lakeside mountain reflections, and jungle safaris.',
    spots: [
      { name: 'Pashupatinath Temple', image: 'https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=600&q=80', desc: 'Sacred Hindu temple complex on the Bagmati River in Kathmandu.' },
      { name: 'Pokhara & Phewa Lake', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80', desc: 'Serene lake reflecting the Annapurna range with boating to Tal Barahi temple.' },
      { name: 'Everest Base Camp Trek', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80', desc: 'Bucket-list Himalayan trekking path through Sherpa villages to 5,364m.' },
      { name: 'Chitwan National Park Safari', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=600&q=80', desc: 'Jungle safaris tracking one-horned rhinoceros, Bengal tigers, and crocodiles.' },
      { name: 'Boudhanath Stupa', image: 'https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=600&q=80', desc: 'Massive spherical Buddhist stupa with painted eyes of Buddha watching over Kathmandu.' },
      { name: 'Kathmandu Durbar Square', image: 'https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=600&q=80', desc: 'Ancient royal palace plaza showcasing Newari wooden carving craftsmanship.' }
    ]
  },
  'bhutan': {
    id: 'bhutan',
    name: 'Bhutan',
    category: 'International',
    heroImage: 'https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=1200&q=80',
    tagline: "Tiger's Nest Monastery, Punakha Dzongs & Dochula Passes",
    description: 'Journey to the Last Shangri-La, famed for Gross National Happiness, cliffside monasteries, and Himalayan valleys.',
    spots: [
      { name: "Tiger's Nest Monastery (Paro Taktsang)", image: 'https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=600&q=80', desc: 'Sacred Buddhist cliffside monastery clinging to a 900m granite cliff above Paro.' },
      { name: 'Punakha Dzong', image: 'https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=600&q=80', desc: 'Majestic fortress at the confluence of Pho Chhu and Mo Chhu rivers.' },
      { name: 'Thimphu Buddha Dordenma', image: 'https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=600&q=80', desc: 'Gigantic 51.5m bronze statue of Buddha seated atop a hill overlooking Thimphu.' },
      { name: 'Dochula Pass', image: 'https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=600&q=80', desc: 'Mountain pass with 108 memorial chortens and panoramic Himalayan snow views.' },
      { name: 'Phobjikha Valley', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80', desc: 'Glacial valley home to endangered black-necked cranes and Gangtey Monastery.' },
      { name: 'Chele La Pass', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80', desc: 'Highest motorable pass in Bhutan at 3,988m offering views of Mt. Jhomolhari.' }
    ]
  },

  // --- DOMESTIC (EXPLORE BHARAT - 8 DESTINATIONS) ---
  'kashmir': {
    id: 'kashmir',
    name: 'Kashmir',
    category: 'Domestic',
    heroImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Paradise on Earth with Dal Lake Houseboats & Gulmarg Gondolas',
    description: 'Experience pristine snow valleys, traditional houseboats, pine forests, and flower gardens in Paradise on Earth.',
    spots: [
      { name: 'Dal Lake Shikara Ride', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=80', desc: 'Tranquil wooden Shikara boat cruises past floating vegetable markets and houseboats.' },
      { name: 'Gulmarg Gondola & Skiing', image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=600&q=80', desc: 'Asia’s highest cable car taking passengers to Apharwat Peak at 13,780 feet for skiing.' },
      { name: 'Pahalgam / Betaab Valley', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=80', desc: 'Picturesque valley with Lidder river streams, pine forests, and pony rides.' },
      { name: 'Sonmarg', image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=600&q=80', desc: 'Meadow of Gold featuring Thajiwas Glacier treks and alpine streams.' },
      { name: 'Mughal Gardens (Shalimar Bagh)', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=80', desc: 'Royal terraced gardens built by Emperor Jahangir with fountains & chinar trees.' },
      { name: 'Doodhpathri', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=80', desc: 'Valley of Milk featuring lush rolling meadows and gushing mountain rivers.' }
    ]
  },
  'andaman': {
    id: 'andaman',
    name: 'Andaman & Nicobar',
    category: 'Domestic',
    heroImage: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Radhanagar Beaches, Cellular Jail History & Scuba Coral Reefs',
    description: 'Discover crystal clear turquoise waters, white sand beaches, coral reefs, and historic freedom struggle heritage.',
    spots: [
      { name: 'Radhanagar Beach, Havelock', image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=600&q=80', desc: 'Asia’s best beach featuring powdery white sand and turquoise gentle waves.' },
      { name: 'Cellular Jail Light Show', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80', desc: 'Historic colonial prison in Port Blair hosting moving Sound & Light shows.' },
      { name: 'Scuba Diving, Neil Island', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80', desc: 'Vibrant marine life, sea turtles, and intact coral reefs at Bharatpur beach.' },
      { name: 'Ross Island', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80', desc: 'Ruins of British administrative headquarters reclaimed by banyan trees and deer.' },
      { name: 'Baratang Limestone Caves', image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=600&q=80', desc: 'Mangrove boat safari leading to fascinating natural stalactite cave formations.' },
      { name: 'Jolly Buoy Island', image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=600&q=80', desc: 'Uninhabited glass-bottom boat island sanctuary showcasing underwater corals.' }
    ]
  },
  'leh-ladakh': {
    id: 'leh-ladakh',
    name: 'Leh Ladakh',
    category: 'Domestic',
    heroImage: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Pangong Lake, Nubra Sand Dunes & Magnetic Hill',
    description: 'Conquer high mountain passes, changing color lakes, double-humped camel dunes, and ancient cliff monasteries.',
    spots: [
      { name: 'Pangong Lake', image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=600&q=80', desc: 'High altitude lake at 14,270 ft famous for changing colors from blue to green.' },
      { name: 'Nubra Valley Sand Dunes', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80', desc: 'High altitude desert dunes in Hunder featuring double-humped Bactrian camels.' },
      { name: 'Khardung La Pass', image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=600&q=80', desc: 'One of the world’s highest motorable mountain passes at 17,582 feet.' },
      { name: 'Magnetic Hill', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80', desc: 'Gravity-defying road where vehicles appear to roll uphill against gravity.' },
      { name: 'Thiksey Monastery', image: 'https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=600&q=80', desc: '12-story Tibetan monastery resembling Potala Palace with 49ft Maitreya Buddha.' },
      { name: 'Zanskar Valley / Chadar Trek', image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=600&q=80', desc: 'Frozen river trek across the Zanskar river gorge in peak winter.' }
    ]
  },
  'rajasthan': {
    id: 'rajasthan',
    name: 'Rajasthan',
    category: 'Domestic',
    heroImage: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Amber Fort, Lake Pichola & Jaisalmer Desert Safaris',
    description: 'Step into royal heritage featuring grand golden forts, lake palaces, camel desert safaris, and vibrant folk music.',
    spots: [
      { name: 'Amber Fort, Jaipur', image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=600&q=80', desc: 'Majestic hilltop palace featuring Sheesh Mahal mirror hall and elephant ramparts.' },
      { name: 'Udaipur City Palace & Lake Pichola', image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80', desc: 'Romantic lake floating palaces and grand marble royal courtyards.' },
      { name: 'Jaisalmer Desert Safari', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80', desc: 'Sam Sand Dunes camel rides, cultural Kalbeliya dance, and desert camping.' },
      { name: 'Mehrangarh Fort, Jodhpur', image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80', desc: 'Imposing cliffside fortress towering 410 feet over the Blue City of Jodhpur.' },
      { name: 'Hawa Mahal', image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=600&q=80', desc: 'Palace of Winds in Jaipur featuring 953 intricate honeycomb lattice windows.' },
      { name: 'Pushkar Camel Fair', image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=600&q=80', desc: 'Holy lake town hosting annual livestock fair and rare Lord Brahma Temple.' }
    ]
  },
  'goa': {
    id: 'goa',
    name: 'Goa',
    category: 'Domestic',
    heroImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Baga Beaches, Dudhsagar Waterfalls & Portuguese Forts',
    description: 'Relax on golden beaches, explore Portuguese UNESCO cathedrals, experience watersports, and watch sunset cruises.',
    spots: [
      { name: 'Baga / Calangute Beach', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=600&q=80', desc: 'Vibrant beach stretch offering parasailing, banana rides, and Tito’s lane nightlife.' },
      { name: 'Basilica of Bom Jesus', image: 'https://images.unsplash.com/photo-1548625361-185d2ebc17e6?auto=format&fit=crop&w=600&q=80', desc: 'UNESCO World Heritage church in Old Goa holding mortal remains of St. Francis Xavier.' },
      { name: 'Dudhsagar Waterfalls', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80', desc: 'Four-tiered 310m high sea of milk waterfall inside Bhagwan Mahavir Sanctuary.' },
      { name: 'Fort Aguada', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=600&q=80', desc: '17th-century Portuguese fortress and lighthouse facing Sinquerim beach.' },
      { name: 'Anjuna Flea Market & Nightlife', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80', desc: 'Famous Wednesday beach flea market and Curlies / Shiva Valley sunset shacks.' },
      { name: 'Palolem Beach', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80', desc: 'Scenic crescent-shaped beach in South Goa known for calm waters and silent discos.' }
    ]
  },
  'meghalaya': {
    id: 'meghalaya',
    name: 'Meghalaya',
    category: 'Domestic',
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Living Root Bridges, Dawki Crystal River & Nohkalikai Falls',
    description: 'Discover the Abode of Clouds featuring double-decker living root bridges, crystal clear rivers, and deep limestone caves.',
    spots: [
      { name: 'Living Root Bridges, Cherrapunji', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80', desc: 'Bio-engineered double-decker bridges grown from living rubber fig tree roots.' },
      { name: 'Dawki Crystal Clear River', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80', desc: 'Umngot River near Indo-Bangladesh border so clear boats appear floating in mid-air.' },
      { name: 'Mawlynnong (Cleanest Village)', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80', desc: 'Asia’s cleanest village showcasing bamboo dustbins and treehouse skywalks.' },
      { name: 'Nohkalikai Falls', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80', desc: 'India’s tallest 1,115 ft plunge waterfall descending into a turquoise plunge pool.' },
      { name: 'Shillong Peak', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80', desc: 'Highest viewpoint in Shillong offering 360-degree views over Scotland of the East.' },
      { name: 'Mawsmai Caves', image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=600&q=80', desc: 'Natural illuminated limestone cave system with fascinating stalactites in Cherrapunji.' }
    ]
  },
  'sikkim': {
    id: 'sikkim',
    name: 'Sikkim',
    category: 'Domestic',
    heroImage: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Tsomgo Lake, Nathula Pass & Kanchenjunga Views',
    description: 'Immerse in Himalayan tranquility, sacred high-altitude lakes, ancient Buddhist monasteries, and rhododendron valleys.',
    spots: [
      { name: 'Tsomgo Lake', image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80', desc: 'Glacial lake at 12,310 ft surrounded by snow mountains and decorated yaks.' },
      { name: 'Nathula Pass', image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=600&q=80', desc: 'Historic Silk Route pass on Indo-China border at 14,140 feet altitude.' },
      { name: 'Gangtok MG Marg', image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80', desc: 'Pedestrian boulevard in Gangtok with cafes, shopping, and mountain views.' },
      { name: 'Yumthang Valley (Flower Valley)', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80', desc: 'Valley of Flowers in North Sikkim surrounded by hot springs and snow peaks.' },
      { name: 'Rumtek Monastery', image: 'https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=600&q=80', desc: 'Seat of the Black Hat order of Tibetan Buddhism near Gangtok.' },
      { name: 'Pelling Kanchenjunga Viewpoint', image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80', desc: 'Unobstructed closest views of Mount Kanchenjunga and Glass Skywalk.' }
    ]
  },
  'kerala': {
    id: 'kerala',
    name: 'Kerala',
    category: 'Domestic',
    heroImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Alleppey Houseboats, Munnar Tea Gardens & Kovalam Beaches',
    description: 'Relax in God’s Own Country featuring palm-fringed backwater cruises, mist-covered tea gardens, and Kathakali art.',
    spots: [
      { name: 'Alleppey Backwater Houseboats', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=80', desc: 'Traditional Kettuvallam houseboat cruise along palm-fringed lagoon canals.' },
      { name: 'Munnar Tea Gardens', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80', desc: 'Rolling tea estate hills, Eravikulam National Park, and Nilgiri Tahr sightings.' },
      { name: 'Wayanad Wildlife & Waterfalls', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80', desc: 'Edakkal prehistoric caves, Chembra peak heart lake, and spice plantations.' },
      { name: 'Kovalam Beach', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80', desc: 'Famous red-and-white lighthouse beach with ayurvedic massage centers.' },
      { name: 'Periyar Wildlife Sanctuary', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=600&q=80', desc: 'Boat safari across Periyar lake tracking wild elephants and tigers in Thekkady.' },
      { name: 'Kathakali Show, Fort Kochi', image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=600&q=80', desc: 'Classical Kathakali dance performance and Chinese fishing nets at Fort Kochi.' }
    ]
  }
};
