export interface Destination {
  id:          string;
  name:        string;
  description: string;
  highlights:  string[];
  image:       string;
  badge?:      string;
  gradient:    string; // fallback gradient when image is missing
}

export const destinations: Destination[] = [
  {
    id:          "dambulla",
    name:        "Dambulla Cave Temple",
    description:
      "A UNESCO World Heritage Site housing over 150 Buddha statues and vivid 2,100-year-old murals inside five magnificent cave sanctuaries.",
    highlights:  ["UNESCO Heritage", "Ancient Murals", "Rock Fortress Views"],
    image:       "/images/destinations/dambulla.jpg",
    badge:       "UNESCO",
    gradient:    "from-amber-900 via-amber-700 to-yellow-600",
  },
  {
    id:          "temple-of-tooth",
    name:        "Temple of the Tooth",
    description:
      "Sri Lanka's most sacred Buddhist site in Kandy, enshrining the relic of the Buddha's tooth in a gilded royal palace complex.",
    highlights:  ["Sacred Relic", "Nightly Puja Ceremony", "Kandyan Culture"],
    image:       "/images/destinations/temple-of-tooth.jpg",
    badge:       "Sacred Site",
    gradient:    "from-red-900 via-red-700 to-orange-600",
  },
  {
    id:          "sigiriya",
    name:        "Sigiriya Rock Fortress",
    description:
      "An awe-inspiring 5th-century rock citadel rising 200 m above the jungle, adorned with frescoes and surrounded by legendary water gardens.",
    highlights:  ["8th Wonder", "Ancient Frescoes", "Jungle Panorama"],
    image:       "/images/destinations/sigiriya.jpg",
    badge:       "Must Visit",
    gradient:    "from-jungle-900 via-jungle-700 to-jungle-500",
  },
  {
    id:          "anuradhapura",
    name:        "Anuradhapura",
    description:
      "One of the ancient capitals of Sri Lanka, brimming with millennia-old stupas, royal palaces, and the sacred 2,300-year-old Bodhi tree.",
    highlights:  ["Ancient Stupas", "Sacred Bodhi Tree", "Royal Ruins"],
    image:       "/images/destinations/anuradhapura.jpg",
    badge:       "Ancient Kingdom",
    gradient:    "from-stone-800 via-stone-600 to-amber-700",
  },
];
