export interface ChampionshipMoment {
  id: string
  year: number
  title: string
  description: string
  finalScore: string
  opponent: string
  venue: string
  heroPlayer: string
  heroPerformance: string
  image: string
  videoUrl?: string
  highlights: string[]
  matchSummary: string
  isIconic: boolean
}

export const championshipMoments: ChampionshipMoment[] = [
  {
    id: "ipl-2010-final",
    year: 2010,
    title: "First IPL Glory",
    description: "CSK's maiden IPL title victory against Mumbai Indians in a thrilling final",
    finalScore: "CSK 168/5 vs MI 146/9",
    opponent: "Mumbai Indians",
    venue: "DY Patil Stadium, Mumbai",
    heroPlayer: "MS Dhoni",
    heroPerformance: "73* off 38 balls",
    image: "/csk-celebrating-first-ipl-title-2010-trophy-lift.jpg",
    highlights: [
      "Dhoni's match-winning knock",
      "Suresh Raina's crucial 57*",
      "Albie Morkel's all-round performance",
      "First IPL title for CSK",
    ],
    matchSummary: "A dominant performance by CSK led by captain MS Dhoni's unbeaten 73 secured their first IPL title.",
    isIconic: true,
  },
  {
    id: "ipl-2011-final",
    year: 2011,
    title: "Back-to-Back Champions",
    description: "CSK successfully defended their title against Royal Challengers Bangalore",
    finalScore: "CSK 205/5 vs RCB 147/8",
    opponent: "Royal Challengers Bangalore",
    venue: "MA Chidambaram Stadium, Chennai",
    heroPlayer: "Murali Vijay",
    heroPerformance: "95 off 52 balls",
    image: "/csk-2011-ipl-final-celebration-home-ground-chennai.jpg",
    highlights: [
      "Murali Vijay's explosive 95",
      "Home ground advantage",
      "Dominant bowling performance",
      "Back-to-back IPL titles",
    ],
    matchSummary:
      "Playing at home, CSK put up a massive total and defended it comfortably to win their second consecutive title.",
    isIconic: true,
  },
  {
    id: "ipl-2018-comeback",
    year: 2018,
    title: "The Great Comeback",
    description: "CSK's emotional return after 2-year suspension, winning the title in comeback season",
    finalScore: "CSK 178/6 vs SRH 178/6 (CSK won by 8 wickets in Super Over)",
    opponent: "Sunrisers Hyderabad",
    venue: "Wankhede Stadium, Mumbai",
    heroPlayer: "Shane Watson",
    heroPerformance: "117* off 57 balls",
    image: "/shane-watson-century-csk-2018-ipl-final-comeback.jpg",
    highlights: [
      "Watson's century in final",
      "Comeback after 2-year ban",
      "Dhoni's tactical brilliance",
      "Emotional victory for fans",
    ],
    matchSummary: "Shane Watson's magnificent century powered CSK to their third IPL title in their comeback season.",
    isIconic: true,
  },
  {
    id: "ipl-2021-final",
    year: 2021,
    title: "Fourth Crown",
    description: "CSK's dominant campaign culminated in a comprehensive final victory",
    finalScore: "CSK 192/3 vs KKR 165/9",
    opponent: "Kolkata Knight Riders",
    venue: "Dubai International Stadium, UAE",
    heroPlayer: "Faf du Plessis",
    heroPerformance: "86* off 59 balls",
    image: "/csk-2021-ipl-final-dubai-faf-du-plessis-batting.jpg",
    highlights: [
      "Faf du Plessis' match-winning knock",
      "Ruturaj Gaikwad's consistent season",
      "Dhoni's captaincy masterclass",
      "Fourth IPL title",
    ],
    matchSummary:
      "A clinical performance in Dubai saw CSK claim their fourth IPL title with Faf leading from the front.",
    isIconic: true,
  },
  {
    id: "ipl-2023-final",
    year: 2023,
    title: "Fifth Star Achievement",
    description: "CSK's historic fifth IPL title, equaling Mumbai Indians' record",
    finalScore: "CSK 171/6 vs GT 214/4 (GT won by 5 wickets)",
    opponent: "Gujarat Titans",
    venue: "Narendra Modi Stadium, Ahmedabad",
    heroPlayer: "MS Dhoni",
    heroPerformance: "Captain's knock under pressure",
    image: "/csk-2023-ipl-final-fifth-title-celebration-dhoni.jpg",
    highlights: [
      "Fifth IPL title achievement",
      "Dhoni's leadership in final season",
      "Record-equaling performance",
      "Emotional farewell season",
    ],
    matchSummary:
      "CSK achieved their fifth IPL title, matching Mumbai Indians' record in what many thought was Dhoni's final season.",
    isIconic: true,
  },
]

export const iconicMoments = [
  {
    id: "dhoni-helicopter-shot",
    title: "The Helicopter Shot",
    description: "MS Dhoni's signature shot that became synonymous with CSK's finishing prowess",
    image: "/ms-dhoni-helicopter-shot-csk-yellow-jersey.jpg",
    year: "2008-2023",
  },
  {
    id: "whistle-podu-army",
    title: "Whistle Podu Army",
    description: "The birth of the most passionate fan base in IPL history",
    image: "/csk-fans-whistle-podu-army-yellow-jerseys-stadium.jpg",
    year: "2008-Present",
  },
  {
    id: "raina-mr-ipl",
    title: "Raina - Mr. IPL",
    description: "Suresh Raina becoming the first player to score 5000+ runs in IPL",
    image: "/suresh-raina-csk-batting-celebration-5000-runs-mil.jpg",
    year: "2019",
  },
  {
    id: "jadeja-sword-celebration",
    title: "Sir Jadeja's Sword",
    description: "Ravindra Jadeja's iconic sword celebration after match-winning performances",
    image: "/ravi.jpg",
    year: "2012-Present",
  },
]

export function getMomentById(id: string): ChampionshipMoment | undefined {
  return championshipMoments.find((moment) => moment.id === id)
}

export function getMomentsByYear(year: number): ChampionshipMoment[] {
  return championshipMoments.filter((moment) => moment.year === year)
}

export function getIconicMoments() {
  return iconicMoments
}
