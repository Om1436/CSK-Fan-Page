"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { getRandomQuestions, calculateFanLevel, type QuizQuestion, type QuizResult } from "@/lib/quiz-data"
import { Trophy, Clock, Target, Star, RotateCcw, CheckCircle, XCircle } from "lucide-react"

export default function QuizPage() {
  const [gameState, setGameState] = useState<"start" | "playing" | "finished">("start")
  const [questions, setQuestions] = useState<QuizQuestion[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [answers, setAnswers] = useState<{ questionId: string; selectedAnswer: number; isCorrect: boolean }[]>([])
  const [timeLeft, setTimeLeft] = useState(30)
  const [showExplanation, setShowExplanation] = useState(false)
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null)

  // Timer effect
  useEffect(() => {
    if (gameState === "playing" && timeLeft > 0 && !showExplanation) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else if (timeLeft === 0 && !showExplanation) {
      handleAnswerSubmit()
    }
  }, [timeLeft, gameState, showExplanation])

  const startQuiz = () => {
    const randomQuestions = getRandomQuestions(10)
    setQuestions(randomQuestions)
    setGameState("playing")
    setCurrentQuestionIndex(0)
    setAnswers([])
    setTimeLeft(30)
    setSelectedAnswer(null)
    setShowExplanation(false)
  }

  const handleAnswerSelect = (answerIndex: number) => {
    if (!showExplanation) {
      setSelectedAnswer(answerIndex)
    }
  }

  const handleAnswerSubmit = () => {
    const currentQuestion = questions[currentQuestionIndex]
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer

    const newAnswer = {
      questionId: currentQuestion.id,
      selectedAnswer: selectedAnswer ?? -1,
      isCorrect,
    }

    setAnswers([...answers, newAnswer])
    setShowExplanation(true)
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
      setTimeLeft(30)
    } else {
      finishQuiz()
    }
  }

  const finishQuiz = () => {
    const score =
      answers.filter((a) => a.isCorrect).length +
      (showExplanation && selectedAnswer === questions[currentQuestionIndex].correctAnswer ? 1 : 0)
    const percentage = Math.round((score / questions.length) * 100)
    const fanLevel = calculateFanLevel(percentage)

    const result: QuizResult = {
      score,
      totalQuestions: questions.length,
      percentage,
      fanLevel: fanLevel.level,
      badge: fanLevel.badge,
      answers: [
        ...answers,
        ...(showExplanation
          ? [
              {
                questionId: questions[currentQuestionIndex].id,
                selectedAnswer: selectedAnswer ?? -1,
                isCorrect: selectedAnswer === questions[currentQuestionIndex].correctAnswer,
              },
            ]
          : []),
      ],
    }

    setQuizResult(result)
    setGameState("finished")

    // Save to localStorage
    const savedResults = JSON.parse(localStorage.getItem("csk-quiz-results") || "[]")
    savedResults.push({ ...result, date: new Date().toISOString() })
    localStorage.setItem("csk-quiz-results", JSON.stringify(savedResults))
  }

  const resetQuiz = () => {
    setGameState("start")
    setQuizResult(null)
  }

  if (gameState === "start") {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />

        <div className="pt-16">
          <section className="py-20 bg-secondary">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">CSK KNOWLEDGE QUIZ</h1>
              <p className="text-xl text-secondary-foreground max-w-2xl mx-auto mb-8">
                Test your knowledge about Chennai Super Kings and earn your fan rating!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <Card className="text-center p-6">
                  <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">10 Questions</h3>
                  <p className="text-muted-foreground">Carefully selected questions about CSK</p>
                </Card>

                <Card className="text-center p-6">
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">30 Seconds</h3>
                  <p className="text-muted-foreground">Per question to keep it exciting</p>
                </Card>

                <Card className="text-center p-6">
                  <Trophy className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Fan Rating</h3>
                  <p className="text-muted-foreground">Earn your CSK fan level badge</p>
                </Card>
              </div>

              <Button onClick={startQuiz} size="lg" className="text-lg px-8 py-6">
                Start Quiz
              </Button>
            </div>
          </section>
        </div>
      </div>
    )
  }

  if (gameState === "playing") {
    const currentQuestion = questions[currentQuestionIndex]
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100

    return (
      <div className="min-h-screen bg-background">
        <Navigation />

        <div className="pt-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Progress and Timer */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold">
                  Question {currentQuestionIndex + 1} of {questions.length}
                </span>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className={`text-lg font-bold ${timeLeft <= 10 ? "text-destructive" : "text-primary"}`}>
                    {timeLeft}s
                  </span>
                </div>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            {/* Question Card */}
            <Card className="mb-8">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <Badge
                    variant={
                      currentQuestion.difficulty === "easy"
                        ? "secondary"
                        : currentQuestion.difficulty === "medium"
                          ? "default"
                          : "destructive"
                    }
                  >
                    {currentQuestion.difficulty.toUpperCase()}
                  </Badge>
                  <Badge variant="outline">{currentQuestion.category.toUpperCase()}</Badge>
                </div>
                <CardTitle className="text-2xl leading-relaxed">{currentQuestion.question}</CardTitle>
              </CardHeader>

              <CardContent>
                <div className="space-y-3">
                  {currentQuestion.options.map((option, index) => (
                    <Button
                      key={index}
                      variant={selectedAnswer === index ? "default" : "outline"}
                      className={`w-full text-left justify-start p-4 h-auto ${
                        showExplanation
                          ? index === currentQuestion.correctAnswer
                            ? "bg-green-500 hover:bg-green-600 text-white"
                            : selectedAnswer === index && index !== currentQuestion.correctAnswer
                              ? "bg-red-500 hover:bg-red-600 text-white"
                              : "bg-transparent"
                          : ""
                      }`}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={showExplanation}
                    >
                      <span className="mr-3 font-bold">{String.fromCharCode(65 + index)}.</span>
                      {option}
                      {showExplanation && index === currentQuestion.correctAnswer && (
                        <CheckCircle className="w-5 h-5 ml-auto" />
                      )}
                      {showExplanation && selectedAnswer === index && index !== currentQuestion.correctAnswer && (
                        <XCircle className="w-5 h-5 ml-auto" />
                      )}
                    </Button>
                  ))}
                </div>

                {showExplanation && (
                  <div className="mt-6 p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">Explanation:</h4>
                    <p className="text-muted-foreground">{currentQuestion.explanation}</p>
                  </div>
                )}

                <div className="mt-6 flex justify-between">
                  <div className="text-sm text-muted-foreground">
                    Score:{" "}
                    {answers.filter((a) => a.isCorrect).length +
                      (showExplanation && selectedAnswer === currentQuestion.correctAnswer ? 1 : 0)}{" "}
                    / {currentQuestionIndex + (showExplanation ? 1 : 0)}
                  </div>

                  {!showExplanation ? (
                    <Button onClick={handleAnswerSubmit} disabled={selectedAnswer === null}>
                      Submit Answer
                    </Button>
                  ) : (
                    <Button onClick={handleNextQuestion}>
                      {currentQuestionIndex < questions.length - 1 ? "Next Question" : "Finish Quiz"}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  if (gameState === "finished" && quizResult) {
    const fanLevel = calculateFanLevel(quizResult.percentage)

    return (
      <div className="min-h-screen bg-background">
        <Navigation />

        <div className="pt-16">
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="text-6xl mb-6">{fanLevel.badge}</div>
              <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">Quiz Complete!</h1>
              <h2 className="text-3xl font-bold text-foreground mb-6">You are a {quizResult.fanLevel}!</h2>
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">{fanLevel.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <Card className="text-center p-8">
                  <Trophy className="w-16 h-16 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">{quizResult.score}</div>
                  <div className="text-muted-foreground">Correct Answers</div>
                </Card>

                <Card className="text-center p-8">
                  <Target className="w-16 h-16 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">{quizResult.percentage}%</div>
                  <div className="text-muted-foreground">Accuracy</div>
                </Card>

                <Card className="text-center p-8">
                  <Star className="w-16 h-16 text-primary mx-auto mb-4" />
                  <div className="text-2xl font-bold text-primary mb-2">{quizResult.fanLevel}</div>
                  <div className="text-muted-foreground">Fan Level</div>
                </Card>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={resetQuiz} size="lg" className="text-lg px-8 py-6">
                  <RotateCcw className="w-5 h-5 mr-2" />
                  Take Quiz Again
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                  <a href="/dashboard">View Dashboard</a>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }

  return null
}
