export interface ItineraryDay {
  day:           number;
  title:         string;
  from:          string;
  to:            string;
  activities:    string[];
  accommodation: string;
  meals?:        string;
}

export interface TourPackage {
  id:           string;
  slug:         string;
  name:         string;
  duration:     number;         // days
  durationNight:number;         // nights
  theme:        string;
  tagline:      string;
  description:  string;
  highlights:   string[];
  includes:     string[];
  excludes:     string[];
  priceFrom:    string;         // demo starting price
  groupSize:    string;
  image:        string;
  gradient:     string;         // fallback gradient
  badge:        string;
  itinerary:    ItineraryDay[];
}

export const packages: TourPackage[] = [
  /* ═══════════════════════════════════════════════════
     PACKAGE 1 — HERITAGE OF THE ISLAND  (11 Days)
  ═══════════════════════════════════════════════════ */
  {
    id:            "heritage-of-the-island",
    slug:          "heritage-of-the-island",
    name:          "Heritage of the Island",
    duration:      11,
    durationNight: 10,
    theme:         "Cultural & Historical",
    tagline:       "Walk through 2,500 years of living history",
    description:
      "Journey through Sri Lanka's extraordinary cultural triangle, colonial coastlines, and misty hill country. From ancient kingdoms to colonial tea estates, this 11-day odyssey reveals the island's soul.",
    highlights: [
      "Explore Anuradhapura's Sacred City — one of the world's oldest civilizations",
      "Climb the legendary Sigiriya Rock Fortress (UNESCO)",
      "Scenic train ride from Nanu Oya through emerald tea country",
      "Witness the evening Puja ceremony at Dambulla Cave Temple",
      "Walk the cobblestone lanes of Galle Dutch Fort (UNESCO)",
      "Private sunset in Kandy — cultural dance & Temple of the Tooth",
    ],
    includes: [
      "10 nights accommodation (3-star & 4-star hotels)",
      "Daily breakfast",
      "Air-conditioned private vehicle & driver",
      "English-speaking tour guide throughout",
      "All transfers (airport, hotels, attractions)",
    ],
    excludes: [
      "Meals (lunch & dinner)",
      "Entry tickets to sites & national parks",
      "Personal expenses & tips",
      "Travel insurance",
      "International airfare",
    ],
    priceFrom:  "USD 850",
    groupSize:  "1 – 15 pax",
    image:      "/images/packages/heritage.jpg",
    gradient:   "from-amber-900 via-jungle-900 to-jungle-700",
    badge:      "Best Seller",
    itinerary: [
      {
        day:           1,
        title:         "Arrival in Negombo",
        from:          "Airport (BIA)",
        to:            "Negombo",
        activities: [
          "Welcome at Bandaranaike International Airport",
          "Transfer to Negombo (~30 min from airport)",
          "Explore Negombo's old town & Dutch canal by tuk-tuk",
          "Optional fish market & boat tour on the lagoon",
          "Welcome dinner at beachside restaurant",
        ],
        accommodation: "Negombo Beach Hotel",
      },
      {
        day:           2,
        title:         "Negombo → Anuradhapura (Puja Nagaraya)",
        from:          "Negombo",
        to:            "Anuradhapura",
        activities: [
          "Drive north (~3.5 hrs) to the ancient sacred city",
          "Visit the Sri Maha Bodhi — the world's oldest living tree (planted 288 BC)",
          "Explore Ruwanwelisaya Stupa (1st century BC)",
          "See Thuparama Dagoba, Sri Lanka's oldest stupa",
          "Cycle among the ruins at sunset",
        ],
        accommodation: "Heritage Hotel Anuradhapura",
      },
      {
        day:           3,
        title:         "Anuradhapura → Polonnaruwa",
        from:          "Anuradhapura",
        to:            "Polonnaruwa",
        activities: [
          "Morning visit to Abhayagiri Monastery complex",
          "Drive to Polonnaruwa — Sri Lanka's medieval capital",
          "Explore the Royal Palace ruins of King Parakramabahu",
          "See the magnificent Gal Vihara rock-carved Buddhas",
          "Visit Parakrama Samudra — a vast ancient reservoir",
        ],
        accommodation: "Hotel Sudu Araliya",
      },
      {
        day:           4,
        title:         "Polonnaruwa → Trincomalee",
        from:          "Polonnaruwa",
        to:            "Trincomalee",
        activities: [
          "Drive to the east coast (~3 hrs)",
          "Visit Koneswaram Kovil — a magnificent clifftop Hindu temple",
          "Swim at Fort Frederick beach or Uppuveli Beach",
          "Explore Trincomalee Fort — a Dutch colonial fortification",
          "Watch the sunset from Swami Rock over the Indian Ocean",
        ],
        accommodation: "French Garden Tourist Rest",
      },
      {
        day:           5,
        title:         "Trincomalee → Sigiriya (via Dambulla)",
        from:          "Trincomalee",
        to:            "Sigiriya",
        activities: [
          "Morning drive west (~3 hrs) through the cultural triangle",
          "Visit Dambulla Royal Cave Temple (UNESCO World Heritage)",
          "Explore five caves with 150+ Buddha statues & ancient frescoes",
          "Afternoon: ascend the iconic Sigiriya Rock Fortress (200 m)",
          "See the famous Apsara frescoes and the Lion Paws entrance",
        ],
        accommodation: "Jetwing Vil Uyana (eco-lodge)",
      },
      {
        day:           6,
        title:         "Sigiriya → Kandy",
        from:          "Sigiriya",
        to:            "Kandy",
        activities: [
          "Morning visit to a traditional spice & herb garden in Matale",
          "Drive to Kandy — Sri Lanka's cultural capital (~3 hrs)",
          "Visit the sacred Temple of the Tooth Relic",
          "Witness the nightly Puja ceremony (drum & flute offering)",
          "Evening Kandyan cultural dance performance",
          "Evening stroll around picturesque Kandy Lake",
        ],
        accommodation: "Cinnamon Citadel Kandy",
      },
      {
        day:           7,
        title:         "Kandy → Ella (Scenic Train Ride)",
        from:          "Kandy",
        to:            "Ella",
        activities: [
          "Transfer to Nanu Oya train station (~2 hrs drive)",
          "Board the legendary hill-country train to Ella",
          "Pass through misty tea plantations, waterfalls, and tunnel views",
          "Arrive Ella — charming mountain village at 1,000 m elevation",
          "Visit a tea factory and learn about Ceylon tea production",
          "Evening at leisure in Ella village",
        ],
        accommodation: "Ella Flower Garden Resort",
      },
      {
        day:           8,
        title:         "Ella — Three Peaks",
        from:          "Ella",
        to:            "Ella",
        activities: [
          "Morning hike to the iconic Nine Arch Bridge (best at 8am–9am for trains)",
          "Hike up Little Adam's Peak (easy 45-min hike, panoramic views)",
          "Afternoon: trek to Ella Rock (1,041 m) for spectacular valley vistas",
          "Visit Ravana Waterfall on the way back",
          "Free evening to explore local restaurants",
        ],
        accommodation: "Ella Flower Garden Resort",
      },
      {
        day:           9,
        title:         "Ella → Mirissa Beach",
        from:          "Ella",
        to:            "Mirissa",
        activities: [
          "Drive via Rawana Waterfall for a morning photo stop",
          "Pass through Wellawaya and the Hambantota plains",
          "Arrive Mirissa — a golden crescent beach on the south coast",
          "Afternoon: relax on the beach, swim in the Indian Ocean",
          "Sunset from Parrot Rock — a small island at the bay's edge",
          "Fresh seafood dinner at a beachfront restaurant",
        ],
        accommodation: "Mirissa Hills Resort",
      },
      {
        day:           10,
        title:         "Mirissa → Galle → Colombo → Negombo",
        from:          "Mirissa",
        to:            "Negombo",
        activities: [
          "Morning stroll on Mirissa beach at sunrise",
          "Drive to Galle (~30 min) — visit Galle Dutch Fort (UNESCO)",
          "Explore the fort ramparts, lighthouse, and colonial architecture",
          "Lunch in the fort area at a heritage cafe",
          "Continue to Colombo (~2.5 hrs) — city tour",
          "See Gangaramaya Temple, Independence Square, Galle Face Green",
          "Transfer to Negombo for final night",
        ],
        accommodation: "Negombo Beach Hotel",
      },
      {
        day:           11,
        title:         "Negombo → Airport Departure",
        from:          "Negombo",
        to:            "Airport (BIA)",
        activities: [
          "Morning at leisure for last-minute shopping or beach walk",
          "Transfer to Bandaranaike International Airport",
          "Departure — take the memories of Sri Lanka home",
        ],
        accommodation: "Departure day",
      },
    ],
  },

  /* ═══════════════════════════════════════════════════
     PACKAGE 2 — ISLAND ODYSSEY  (6 Days)
  ═══════════════════════════════════════════════════ */
  {
    id:            "island-odyssey",
    slug:          "island-odyssey",
    name:          "Island Odyssey",
    duration:      6,
    durationNight: 5,
    theme:         "Culture & Landscape",
    tagline:       "Six days, a lifetime of memories",
    description:
      "A perfectly curated 6-day tapestry weaving vibrant cultures, ancient ruins, misty highlands, and wild jungles. The ideal Sri Lanka first-timer's journey, rich in every sense.",
    highlights: [
      "Magical Pinnawala Elephant Orphanage — up-close with rescued elephants",
      "Kandy's sacred Temple of the Tooth and evening cultural dance",
      "Conquer Sigiriya Rock — the 8th Wonder of the World",
      "Scenic train journey through Sri Lanka's famous hill country",
      "Walk the famous Nine Arch Bridge at sunrise",
      "Yala National Park jeep safari — spot leopards & wild elephants",
    ],
    includes: [
      "5 nights accommodation (3-star & 4-star hotels)",
      "Daily breakfast",
      "Air-conditioned private vehicle & driver",
      "English-speaking tour guide throughout",
      "All transfers (airport, hotels, attractions)",
    ],
    excludes: [
      "Meals (lunch & dinner)",
      "Entry tickets to sites & national parks",
      "Personal expenses & tips",
      "Travel insurance",
      "International airfare",
    ],
    priceFrom:  "USD 450",
    groupSize:  "1 – 12 pax",
    image:      "/images/packages/odyssey.jpg",
    gradient:   "from-jungle-900 via-teal-800 to-emerald-700",
    badge:      "Popular",
    itinerary: [
      {
        day:           1,
        title:         "Arrival → Pinnawala Elephant Orphanage",
        from:          "Airport (BIA)",
        to:            "Pinnawala",
        activities: [
          "Welcome drink on arrival at Bandaranaike International Airport",
          "Drive to Pinnawala (~2.5 hrs) through coconut palm-lined roads",
          "Visit the world-famous Pinnawala Elephant Orphanage",
          "Watch the elephant bathing ceremony in the Maha Oya River",
          "Check-in and evening stroll along the village",
        ],
        accommodation: "Elephant Bay Hotel Pinnawala",
      },
      {
        day:           2,
        title:         "Pinnawala → Kandy",
        from:          "Pinnawala",
        to:            "Kandy",
        activities: [
          "Morning drive to Kandy through scenic highlands (~2 hrs)",
          "Stop at a traditional craft village (batik, gem cutting)",
          "Kandy city tour — independence square, Kandy Lake, city market",
          "Visit the sacred Temple of the Tooth Relic",
          "Evening Kandyan cultural dance show",
        ],
        accommodation: "Cinnamon Citadel Kandy",
      },
      {
        day:           3,
        title:         "Kandy → Sigiriya (via Dambulla)",
        from:          "Kandy",
        to:            "Sigiriya",
        activities: [
          "Early morning visit to the Temple of the Tooth for the Puja ceremony",
          "Drive to Dambulla Cave Temple (~3 hrs via Matale spice garden)",
          "Explore five UNESCO-listed cave sanctuaries with ancient frescoes",
          "Afternoon: Climb the legendary Sigiriya Rock Fortress",
          "Watch the sun set over the jungle from the summit",
        ],
        accommodation: "Aliya Resort & Spa (elephant-view rooms)",
      },
      {
        day:           4,
        title:         "Sigiriya → Nuwara Eliya (via Spice Garden & Tea Country)",
        from:          "Sigiriya",
        to:            "Nuwara Eliya",
        activities: [
          "Visit a spice & herbal garden — cinnamon, cardamom, pepper demonstrations",
          "Drive into the misty Hill Country (~4 hrs)",
          "Stop at a working tea mountain estate — tour and tasting",
          "Board the historic hill train to Ella (from Nanu Oya station)",
          "Arrive Ella in the late afternoon — settle in and enjoy village life",
        ],
        accommodation: "Ella Flower Garden Resort",
      },
      {
        day:           5,
        title:         "Ella Adventures",
        from:          "Ella",
        to:            "Ella",
        activities: [
          "Sunrise walk to the Nine Arch Bridge (iconic colonial viaduct)",
          "Hike Ella Rock for sweeping hill country views",
          "Afternoon: visit Ravana Waterfall — legendary 25 m cascade",
          "Explore Ella's boutique cafes, organic shops, and local markets",
          "Optional: cooking class with a local family",
        ],
        accommodation: "Ella Flower Garden Resort",
      },
      {
        day:           6,
        title:         "Ella → Yala National Park Safari",
        from:          "Ella",
        to:            "Yala",
        activities: [
          "Morning drive to Yala (~2 hrs through southern plains)",
          "Afternoon jeep safari in Yala National Park Block 1",
          "Spot Sri Lankan leopards, wild elephants, sloth bears & exotic birds",
          "Evening campfire dinner at eco-lodge",
          "Overnight in the park or transfer to airport next morning",
        ],
        accommodation: "Yala Safari Camp / Airport drop (flexible)",
      },
    ],
  },

  /* ═══════════════════════════════════════════════════
     PACKAGE 3 — NATURE PARADISE  (14 Days)
  ═══════════════════════════════════════════════════ */
  {
    id:            "nature-paradise",
    slug:          "nature-paradise",
    name:          "Nature Paradise",
    duration:      14,
    durationNight: 13,
    theme:         "Wildlife & Natural Wonders",
    tagline:       "From rainforests to open ocean — Sri Lanka's wild heart",
    description:
      "The ultimate 14-day immersion in Sri Lanka's breathtaking natural diversity. Ancient forests, cloud-shrouded highlands, UNESCO biospheres, elephant safaris, whale watching, and pristine coastlines — nature in its purest form.",
    highlights: [
      "Pinnawala Elephant Orphanage — bathe with rescued elephants",
      "Sigiriya Rock Fortress above the jungle canopy",
      "Horton Plains World's End — a sheer 880 m cliff-edge viewpoint",
      "Trek Sinharaja — Sri Lanka's last pristine rainforest (UNESCO)",
      "Udawalawe elephant safari — over 200 wild elephants in one park",
      "Blue whale watching expedition off Mirissa coast",
      "Galle Dutch Fort and Kosgoda turtle hatchery",
      "Colombo city highlights before departure",
    ],
    includes: [
      "13 nights accommodation (eco-lodges, 3-star & 4-star hotels)",
      "Daily breakfast",
      "Air-conditioned private vehicle & driver",
      "English-speaking naturalist guide throughout",
      "Jeep safari at Udawalawe National Park",
      "All transfers (airport, hotels, attractions)",
    ],
    excludes: [
      "Meals (lunch & dinner)",
      "Entry tickets to sites & national parks",
      "Whale watching boat ticket",
      "Personal expenses & tips",
      "Travel insurance",
      "International airfare",
    ],
    priceFrom:  "USD 1,250",
    groupSize:  "1 – 10 pax",
    image:      "/images/packages/nature.jpg",
    gradient:   "from-emerald-900 via-jungle-800 to-teal-700",
    badge:      "Flagship",
    itinerary: [
      {
        day:           1,
        title:         "Arrival → Pinnawala Elephant Orphanage",
        from:          "Airport (BIA)",
        to:            "Pinnawala",
        activities: [
          "Welcome drink on arrival at Bandaranaike International Airport",
          "Drive to Pinnawala (~2.5 hrs) through coconut palm-lined roads",
          "Visit the world-famous Pinnawala Elephant Orphanage",
          "Watch the elephant bathing ceremony in the Maha Oya River",
          "Evening stroll along the village & welcome dinner",
        ],
        accommodation: "Elephant Bay Hotel Pinnawala",
      },
      {
        day:           2,
        title:         "Pinnawala → Kandy",
        from:          "Pinnawala",
        to:            "Kandy",
        activities: [
          "Drive to Kandy — Sri Lanka's last royal capital (~2 hrs)",
          "Kandy city tour: Independence Square, Kandy Lake, Natha Devale",
          "Visit the sacred Temple of the Tooth Relic",
          "Evening Kandyan cultural dance show (fire dancing finale!)",
        ],
        accommodation: "Cinnamon Citadel Kandy",
      },
      {
        day:           3,
        title:         "Kandy → Sigiriya (via Dambulla)",
        from:          "Kandy",
        to:            "Sigiriya",
        activities: [
          "Dawn visit to the Temple of the Tooth Puja ceremony",
          "Drive via Matale spice & herbal garden",
          "Dambulla Cave Temple — five UNESCO cave sanctuaries",
          "Climb the legendary Sigiriya Rock Fortress (200 m)",
          "Explore the ancient water gardens and Lion Paws",
        ],
        accommodation: "Aliya Resort & Spa (eco-luxury)",
      },
      {
        day:           4,
        title:         "Sigiriya → Nuwara Eliya (Tea Country)",
        from:          "Sigiriya",
        to:            "Nuwara Eliya",
        activities: [
          "Spice & herbal garden demonstration",
          "Drive into the misty Hill Country (~4 hrs)",
          "Tea estate tour and tasting at a working factory",
          "Board the scenic hill train (Nanu Oya → Ella rail stretch)",
          "Arrive Ella — settle in and explore the village at dusk",
        ],
        accommodation: "Ella Flower Garden Resort",
      },
      {
        day:           5,
        title:         "Ella — Three Peaks Day",
        from:          "Ella",
        to:            "Ella",
        activities: [
          "Sunrise hike to the Nine Arch Bridge (colonial viaduct)",
          "Hike Ella Rock (1,041 m) for panoramic valley views",
          "Ravana Waterfall visit",
          "Optional: cooking class or evening yoga session",
        ],
        accommodation: "Ella Flower Garden Resort",
      },
      {
        day:           6,
        title:         "Ella → Yala Safari (Transition Day)",
        from:          "Ella",
        to:            "Yala",
        activities: [
          "Drive to Yala National Park (~2 hrs through southern plains)",
          "Afternoon jeep safari in Yala Block 1 — spot leopards, elephants",
          "Sloth bears, painted storks, mugger crocodiles & peacocks",
          "Sundowner at the park perimeter with expert naturalist guide",
        ],
        accommodation: "Yala Safari Camp",
      },
      {
        day:           7,
        title:         "Yala → Nuwara Eliya & Horton Plains",
        from:          "Yala",
        to:            "Nuwara Eliya",
        activities: [
          "Early morning second safari in Yala (optional, best leopard sightings at dawn)",
          "Drive north to Nuwara Eliya — 'Little England' at 1,868 m elevation",
          "En route: stop at Buduruwagala rock carvings (7th-century Mahayana)",
          "Check-in at a heritage estate bungalow",
          "Afternoon walk around Gregory Lake & Victoria Park gardens",
        ],
        accommodation: "Tea Trails Heritage Bungalow",
      },
      {
        day:           8,
        title:         "Horton Plains — World's End Hike",
        from:          "Nuwara Eliya",
        to:            "Nuwara Eliya",
        activities: [
          "Early departure (5:30am) to Horton Plains National Park (~1 hr drive)",
          "Guided 9 km loop hike: World's End cliff (880 m sheer drop!)",
          "Baker's Falls — a stunning 20 m waterfall in cloud forest",
          "Spot sambar deer, purple-faced langurs & endemic birds",
          "Afternoon: Hakgala Botanical Garden — orchids & roses at altitude",
          "Evening: explore Nuwara Eliya town & colonial post office",
        ],
        accommodation: "Tea Trails Heritage Bungalow",
      },
      {
        day:           9,
        title:         "Nuwara Eliya → Sinharaja Rainforest",
        from:          "Nuwara Eliya",
        to:            "Sinharaja",
        activities: [
          "Drive to Sinharaja Biosphere Reserve (~4 hrs through lower hills)",
          "Check-in at eco-lodge on the forest edge",
          "Afternoon guided forest walk: identify endemic plants, butterflies, birds",
          "Hear the rainforest awakening — evening soundscape walk",
        ],
        accommodation: "Rainforest Eco Lodge Sinharaja",
      },
      {
        day:           10,
        title:         "Sinharaja Deep Forest Trek",
        from:          "Sinharaja",
        to:            "Sinharaja",
        activities: [
          "Full-day guided trek into the UNESCO Biosphere Reserve",
          "Spot Sri Lanka's endemic Purple-faced Langur & rare bird species",
          "Giant ferns, carnivorous pitcher plants & ancient dipterocarps",
          "Learn about traditional forest conservation from local guides",
          "Evening: nature journaling session at the lodge",
        ],
        accommodation: "Rainforest Eco Lodge Sinharaja",
      },
      {
        day:           11,
        title:         "Sinharaja → Udawalawe Elephant Safari",
        from:          "Sinharaja",
        to:            "Udawalawe",
        activities: [
          "Drive to Udawalawe National Park (~2 hrs)",
          "Afternoon full jeep safari — Udawalawe has 200+ wild elephants!",
          "Spot water buffalo, crocodiles, golden jackals & rare endemic birds",
          "Visit the Udawalawe Elephant Transit Home (baby elephant feeding)",
          "Sundowner by the reservoir",
        ],
        accommodation: "Centauria Wild Hotel Udawalawe",
      },
      {
        day:           12,
        title:         "Udawalawe → Mirissa (Whale Watching)",
        from:          "Udawalawe",
        to:            "Mirissa",
        activities: [
          "Drive to Mirissa on the southern coast (~2.5 hrs)",
          "Afternoon at leisure on Mirissa's golden beach",
          "Sunset from Parrot Rock — magical Indian Ocean views",
          "Evening: briefing for tomorrow's whale watching expedition",
        ],
        accommodation: "Mirissa Hills Resort",
      },
      {
        day:           13,
        title:         "Mirissa → Galle Fort → Colombo",
        from:          "Mirissa",
        to:            "Colombo",
        activities: [
          "Dawn whale watching boat expedition (blue whales, sperm whales, dolphins!)",
          "Drive to Galle (~45 min) — explore the UNESCO Dutch Fort",
          "Visit Kosgoda sea turtle hatchery (release baby turtles!)",
          "Drive to Colombo (~2.5 hrs) — visit Gangaramaya Temple",
          "Colombo city tour: Pettah Market, Dutch Hospital, Galle Face Green",
          "Final farewell dinner in Colombo",
        ],
        accommodation: "Cinnamon Grand Colombo",
      },
      {
        day:           14,
        title:         "Colombo → Negombo → Airport Departure",
        from:          "Colombo",
        to:            "Airport (BIA)",
        activities: [
          "Morning at leisure — visit Colombo National Museum or Barefoot Gallery",
          "Transfer to Negombo for airport proximity (optional fish market visit)",
          "Transfer to Bandaranaike International Airport",
          "Departure — carrying the wild heart of Sri Lanka within you",
        ],
        accommodation: "Departure day",
      },
    ],
  },
];

export function getPackageById(id: string): TourPackage | undefined {
  return packages.find((p) => p.id === id);
}

export const customPackageDestinations = [
  "Negombo", "Pinnawala", "Kandy", "Dambulla", "Sigiriya",
  "Anuradhapura", "Polonnaruwa", "Trincomalee", "Nuwara Eliya",
  "Ella", "Horton Plains", "Sinharaja Rainforest", "Udawalawe",
  "Yala", "Mirissa", "Galle", "Colombo",
];

export const travelStyles = ["Cultural & Heritage", "Wildlife & Nature", "Adventure & Hiking", "Beach & Relaxation", "Mixed / All-Inclusive"];
export const accommodationTypes = ["Budget (2-star)", "Comfort (3-star)", "Premium (4-star)", "Luxury (5-star)", "Eco-Lodges"];
export const specialInterests = ["Wildlife Photography", "Bird Watching", "Ayurveda & Wellness", "Water Sports", "Cooking Classes", "Tea Plantation Visits", "Whale Watching", "Cycling Tours", "Temple & Religious Sites", "Local Village Experiences"];
export const budgetRanges = ["USD 300 – 600", "USD 600 – 1,000", "USD 1,000 – 1,500", "USD 1,500 – 2,500", "USD 2,500+"];
