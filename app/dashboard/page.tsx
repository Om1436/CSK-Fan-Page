"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { calculateFanLevel, type QuizResult } from "@/lib/quiz-data"
import { Trophy, TrendingUp, Target, Star, Award, BarChart3, Zap } from "lucide-react"
import Link from "next/link"

interface SavedQuizResult extends QuizResult {
  date: string
}

export default function DashboardPage() {
  const [quizResults, setQuizResults] = useState<SavedQuizResult[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const savedResults = JSON.parse(localStorage.getItem("csk-quiz-results") || "[]")
    setQuizResults(
      savedResults.sort(
        (a: SavedQuizResult, b: SavedQuizResult) => new Date(b.date).getTime() - new Date(a.date).getTime(),
      ),
    )
    setLoading(false)
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-16 flex items-center justify-center min-h-[50vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading your dashboard...</p>
          </div>
        </div>
      </div>
    )
  }

  const bestScore = quizResults.length > 0 ? Math.max(...quizResults.map((r) => r.percentage)) : 0
  const averageScore =
    quizResults.length > 0 ? Math.round(quizResults.reduce((sum, r) => sum + r.percentage, 0) / quizResults.length) : 0
  const totalQuizzes = quizResults.length
  const currentFanLevel = calculateFanLevel(bestScore)

  const getStreakInfo = () => {
    if (quizResults.length === 0) return { current: 0, best: 0 }

    let currentStreak = 0
    let bestStreak = 0
    let tempStreak = 0

    for (let i = 0; i < quizResults.length; i++) {
      if (quizResults[i].percentage >= 70) {
        tempStreak++
        if (i === 0) currentStreak = tempStreak
      } else {
        if (i === 0) currentStreak = 0
        bestStreak = Math.max(bestStreak, tempStreak)
        tempStreak = 0
      }
    }
    bestStreak = Math.max(bestStreak, tempStreak)

    return { current: currentStreak, best: bestStreak }
  }

  const streakInfo = getStreakInfo()

  const getProgressToNextLevel = () => {
    const levels = [
      { name: "Beginner", min: 0, max: 39 },
      { name: "Casual Fan", min: 40, max: 59 },
      { name: "Fan", min: 60, max: 69 },
      { name: "True Fan", min: 70, max: 79 },
      { name: "Super Fan", min: 80, max: 89 },
      { name: "CSK Legend", min: 90, max: 100 },
    ]

    const currentLevel = levels.find((level) => bestScore >= level.min && bestScore <= level.max)
    const nextLevel = levels.find((level) => level.min > bestScore)

    if (!nextLevel) return { progress: 100, nextLevel: "CSK Legend", pointsNeeded: 0 }

    const progress = ((bestScore - (currentLevel?.min || 0)) / (nextLevel.min - (currentLevel?.min || 0))) * 100
    const pointsNeeded = nextLevel.min - bestScore

    return { progress, nextLevel: nextLevel.name, pointsNeeded }
  }

  const levelProgress = getProgressToNextLevel()

  if (quizResults.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />

        <div className="pt-16">
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="text-6xl mb-6">📊</div>
              <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">Your CSK Dashboard</h1>
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                Take your first quiz to start tracking your CSK knowledge and earn your fan rating!
              </p>

              <Card className="max-w-md mx-auto p-8">
                <Trophy className="w-16 h-16 text-muted-foreground mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">No Quiz Results Yet</h3>
                <p className="text-muted-foreground mb-6">
                  Start your CSK knowledge journey by taking your first quiz!
                </p>
                <Button asChild size="lg" className="w-full">
                  <Link href="/quiz">Take Your First Quiz</Link>
                </Button>
              </Card>
            </div>
          </section>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-16">
        {/* Header */}
        <section className="py-12 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">Your CSK Dashboard</h1>
                <p className="text-xl text-secondary-foreground">Track your CSK knowledge and fan level progress</p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-2">{currentFanLevel.badge}</div>
                <div className="text-2xl font-bold text-primary">{currentFanLevel.level}</div>
                <div className="text-sm text-secondary-foreground">Current Fan Level</div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Overview */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="text-center p-6">
                <Trophy className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">{bestScore}%</div>
                <div className="text-muted-foreground">Best Score</div>
              </Card>

              <Card className="text-center p-6">
                <BarChart3 className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">{averageScore}%</div>
                <div className="text-muted-foreground">Average Score</div>
              </Card>

              <Card className="text-center p-6">
                <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">{totalQuizzes}</div>
                <div className="text-muted-foreground">Quizzes Taken</div>
              </Card>

              <Card className="text-center p-6">
                <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">{streakInfo.best}</div>
                <div className="text-muted-foreground">Best Streak</div>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Level Progress */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5" />
                      Fan Level Progress
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold">Current Level: {currentFanLevel.level}</span>
                          <span className="text-sm text-muted-foreground">
                            {levelProgress.nextLevel !== "CSK Legend"
                              ? `${levelProgress.pointsNeeded}% to ${levelProgress.nextLevel}`
                              : "Max Level!"}
                          </span>
                        </div>
                        <Progress value={levelProgress.progress} className="h-3" />
                      </div>

                      <div className="text-sm text-muted-foreground">{currentFanLevel.description}</div>

                      {levelProgress.nextLevel !== "CSK Legend" && (
                        <div className="bg-muted p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">Next Level: {levelProgress.nextLevel}</h4>
                          <p className="text-sm text-muted-foreground">
                            Score {levelProgress.pointsNeeded}% higher to reach the next fan level!
                          </p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Current Streak */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="w-5 h-5" />
                    Current Streak
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{streakInfo.current}</div>
                  <div className="text-muted-foreground mb-4">Quiz Streak (70%+)</div>

                  {streakInfo.current > 0 ? (
                    <Badge className="bg-green-500 text-white">On Fire! 🔥</Badge>
                  ) : (
                    <Badge variant="secondary">Start a Streak!</Badge>
                  )}

                  <div className="mt-4 text-sm text-muted-foreground">Best Streak: {streakInfo.best} quizzes</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Recent Quiz Results */}
        <section className="py-12 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Recent Quiz Results</h2>
              <Button asChild>
                <Link href="/quiz">Take Another Quiz</Link>
              </Button>
            </div>

            <div className="space-y-4">
              {quizResults.slice(0, 10).map((result, index) => {
                const fanLevel = calculateFanLevel(result.percentage)
                const date = new Date(result.date).toLocaleDateString()

                return (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="text-2xl">{fanLevel.badge}</div>
                          <div>
                            <div className="font-semibold text-lg">
                              {result.percentage}% - {fanLevel.level}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {result.score}/{result.totalQuestions} correct • {date}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <div className="text-2xl font-bold text-primary">{result.score}</div>
                            <div className="text-sm text-muted-foreground">/{result.totalQuestions}</div>
                          </div>

                          {result.percentage >= 90 && <Award className="w-6 h-6 text-yellow-500" />}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {quizResults.length > 10 && (
              <div className="text-center mt-8">
                <p className="text-muted-foreground">Showing 10 most recent results</p>
              </div>
            )}
          </div>
        </section>

        {/* Achievements */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Achievements</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card
                className={`p-6 ${bestScore >= 90 ? "border-yellow-500 bg-yellow-50 dark:bg-yellow-950/20" : "opacity-50"}`}
              >
                <div className="text-center">
                  <Trophy className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">CSK Legend</h3>
                  <p className="text-sm text-muted-foreground">Score 90% or higher</p>
                  {bestScore >= 90 && <Badge className="mt-2 bg-yellow-500">Unlocked!</Badge>}
                </div>
              </Card>

              <Card
                className={`p-6 ${streakInfo.best >= 3 ? "border-green-500 bg-green-50 dark:bg-green-950/20" : "opacity-50"}`}
              >
                <div className="text-center">
                  <Zap className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Hot Streak</h3>
                  <p className="text-sm text-muted-foreground">3 consecutive 70%+ scores</p>
                  {streakInfo.best >= 3 && <Badge className="mt-2 bg-green-500">Unlocked!</Badge>}
                </div>
              </Card>

              <Card
                className={`p-6 ${totalQuizzes >= 10 ? "border-blue-500 bg-blue-50 dark:bg-blue-950/20" : "opacity-50"}`}
              >
                <div className="text-center">
                  <Target className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Quiz Master</h3>
                  <p className="text-sm text-muted-foreground">Complete 10 quizzes</p>
                  {totalQuizzes >= 10 && <Badge className="mt-2 bg-blue-500">Unlocked!</Badge>}
                </div>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
