export interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  difficulty: "easy" | "medium" | "hard"
  category: "players" | "history" | "records" | "moments"
  explanation: string
}

export interface QuizResult {
  score: number
  totalQuestions: number
  percentage: number
  fanLevel: string
  badge: string
  answers: { questionId: string; selectedAnswer: number; isCorrect: boolean }[]
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    question: "Who is the captain of Chennai Super Kings known as 'Captain Cool'?",
    options: ["Suresh Raina", "MS Dhoni", "Ravindra Jadeja", "Faf du Plessis"],
    correctAnswer: 1,
    difficulty: "easy",
    category: "players",
    explanation:
      "MS Dhoni is famously known as 'Captain Cool' for his calm demeanor under pressure and has been CSK's most successful captain.",
  },
  {
    id: "q2",
    question: "How many IPL titles has CSK won as of 2023?",
    options: ["3", "4", "5", "6"],
    correctAnswer: 2,
    difficulty: "easy",
    category: "history",
    explanation:
      "CSK has won 5 IPL titles in 2010, 2011, 2018, 2021, and 2023, making them one of the most successful franchises.",
  },
  {
    id: "q3",
    question: "Which player is known as 'Mr. IPL' and was CSK's highest run-scorer?",
    options: ["MS Dhoni", "Suresh Raina", "Murali Vijay", "Shane Watson"],
    correctAnswer: 1,
    difficulty: "easy",
    category: "players",
    explanation:
      "Suresh Raina is called 'Mr. IPL' and is CSK's highest run-scorer with over 5,500 runs for the franchise.",
  },
  {
    id: "q4",
    question: "In which year did CSK make their comeback after a 2-year suspension?",
    options: ["2017", "2018", "2019", "2020"],
    correctAnswer: 1,
    difficulty: "medium",
    category: "history",
    explanation:
      "CSK returned in 2018 after a 2-year suspension and remarkably won the IPL title in their comeback season.",
  },
  {
    id: "q5",
    question: "Who scored a century in the 2018 IPL final for CSK?",
    options: ["MS Dhoni", "Suresh Raina", "Shane Watson", "Faf du Plessis"],
    correctAnswer: 2,
    difficulty: "medium",
    category: "moments",
    explanation:
      "Shane Watson scored a magnificent 117* off 57 balls in the 2018 IPL final against SRH, leading CSK to their third title.",
  },
  {
    id: "q6",
    question: "What is the home ground of Chennai Super Kings?",
    options: ["Wankhede Stadium", "Eden Gardens", "MA Chidambaram Stadium", "Chinnaswamy Stadium"],
    correctAnswer: 2,
    difficulty: "easy",
    category: "history",
    explanation: "MA Chidambaram Stadium (also known as Chepauk Stadium) in Chennai is the home ground of CSK.",
  },
  {
    id: "q7",
    question: "Which CSK player is known for the 'Helicopter Shot'?",
    options: ["Suresh Raina", "MS Dhoni", "Ravindra Jadeja", "Dwayne Bravo"],
    correctAnswer: 1,
    difficulty: "easy",
    category: "players",
    explanation:
      "MS Dhoni is famous for his signature 'Helicopter Shot', a unique batting technique that became synonymous with his finishing abilities.",
  },
  {
    id: "q8",
    question: "Who is known as 'Sir Jadeja' in the CSK team?",
    options: ["Ravindra Jadeja", "Suresh Raina", "Dwayne Bravo", "Deepak Chahar"],
    correctAnswer: 0,
    difficulty: "easy",
    category: "players",
    explanation:
      "Ravindra Jadeja is affectionately called 'Sir Jadeja' by fans and teammates for his exceptional all-round skills and fielding.",
  },
  {
    id: "q9",
    question: "In which year did CSK win their first IPL title?",
    options: ["2008", "2009", "2010", "2011"],
    correctAnswer: 2,
    difficulty: "medium",
    category: "history",
    explanation: "CSK won their first IPL title in 2010, defeating Mumbai Indians in the final at DY Patil Stadium.",
  },
  {
    id: "q10",
    question: "Who holds the record for most wickets taken for CSK?",
    options: ["Dwayne Bravo", "Ravindra Jadeja", "Deepak Chahar", "Harbhajan Singh"],
    correctAnswer: 1,
    difficulty: "hard",
    category: "records",
    explanation:
      "Ravindra Jadeja holds the record for most wickets taken for CSK with over 150 wickets in his CSK career.",
  },
  {
    id: "q11",
    question: "What is the team slogan/chant of CSK fans?",
    options: ["Korbo Lorbo Jeetbo", "Whistle Podu", "Duniya Hila Denge", "Halla Bol"],
    correctAnswer: 1,
    difficulty: "easy",
    category: "history",
    explanation: "'Whistle Podu' is the famous battle cry of CSK fans, meaning 'blow the whistle' in Tamil.",
  },
  {
    id: "q12",
    question: "Who was the Orange Cap winner for CSK in 2021?",
    options: ["MS Dhoni", "Faf du Plessis", "Ruturaj Gaikwad", "Suresh Raina"],
    correctAnswer: 2,
    difficulty: "hard",
    category: "records",
    explanation:
      "Ruturaj Gaikwad won the Orange Cap in 2021 with 635 runs, becoming the youngest player to achieve this feat.",
  },
  {
    id: "q13",
    question: "Which bowler is known as 'DJ Bravo' in CSK?",
    options: ["Dwayne Bravo", "Deepak Chahar", "Shardul Thakur", "Imran Tahir"],
    correctAnswer: 0,
    difficulty: "easy",
    category: "players",
    explanation:
      "Dwayne Bravo is known as 'DJ Bravo' for his entertaining personality and his song 'Champion' that became popular among CSK fans.",
  },
  {
    id: "q14",
    question: "How many times has CSK reached the IPL finals?",
    options: ["8", "9", "10", "11"],
    correctAnswer: 2,
    difficulty: "hard",
    category: "records",
    explanation:
      "CSK has reached the IPL finals 10 times, the most by any team, winning 5 and finishing as runners-up 5 times.",
  },
  {
    id: "q15",
    question: "Who is the current captain of CSK (as of 2024)?",
    options: ["MS Dhoni", "Ravindra Jadeja", "Ruturaj Gaikwad", "Moeen Ali"],
    correctAnswer: 2,
    difficulty: "medium",
    category: "players",
    explanation: "Ruturaj Gaikwad was appointed as the captain of CSK for the 2024 season, taking over from MS Dhoni.",
  },
]

export function getRandomQuestions(count = 10): QuizQuestion[] {
  const shuffled = [...quizQuestions].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

export function calculateFanLevel(percentage: number): { level: string; badge: string; description: string } {
  if (percentage >= 90) {
    return {
      level: "CSK Legend",
      badge: "🏆",
      description: "You are a true CSK legend! Your knowledge is unmatched.",
    }
  } else if (percentage >= 80) {
    return {
      level: "Super Fan",
      badge: "⭐",
      description: "Excellent! You're a dedicated CSK super fan.",
    }
  } else if (percentage >= 70) {
    return {
      level: "True Fan",
      badge: "💛",
      description: "Great job! You're a true CSK supporter.",
    }
  } else if (percentage >= 60) {
    return {
      level: "Fan",
      badge: "👏",
      description: "Good effort! You know your CSK basics.",
    }
  } else if (percentage >= 40) {
    return {
      level: "Casual Fan",
      badge: "📚",
      description: "Not bad! Time to learn more about CSK.",
    }
  } else {
    return {
      level: "Beginner",
      badge: "🌱",
      description: "Keep learning! Every CSK fan starts somewhere.",
    }
  }
}

export function getQuestionsByDifficulty(difficulty: "easy" | "medium" | "hard"): QuizQuestion[] {
  return quizQuestions.filter((q) => q.difficulty === difficulty)
}

export function getQuestionsByCategory(category: "players" | "history" | "records" | "moments"): QuizQuestion[] {
  return quizQuestions.filter((q) => q.category === category)
}
