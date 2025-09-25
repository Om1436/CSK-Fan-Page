import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getPlayerById } from "@/lib/players-data"
import { Crown, ArrowLeft, TrendingUp, Target, Zap, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"

interface PlayerPageProps {
  params: {
    id: string
  }
}

export default function PlayerPage({ params }: PlayerPageProps) {
  const player = getPlayerById(params.id)

  if (!player) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-16">
        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Button asChild variant="ghost" className="mb-4">
            <Link href="/players">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Players
            </Link>
          </Button>
        </div>

        {/* Player Header */}
        <section className="py-12 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-1">
                <div className="relative w-full max-w-md mx-auto">
                  <Image
                    src={player.image || "/placeholder.svg"}
                    alt={player.name}
                    width={400}
                    height={500}
                    className="rounded-lg object-cover w-full"
                  />
                  {player.isLegend && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary text-primary-foreground">
                        <Crown className="w-4 h-4 mr-1" />
                        Legend
                      </Badge>
                    </div>
                  )}
                </div>
              </div>

              <div className="lg:col-span-2">
                <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">{player.name}</h1>
                <p className="text-2xl text-secondary-foreground mb-6">{player.role}</p>
                <p className="text-lg text-secondary-foreground/80 mb-8 leading-relaxed">{player.bio}</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div>
                    <div className="text-sm text-secondary-foreground/60 mb-1">Nationality</div>
                    <div className="font-semibold text-secondary-foreground">{player.nationality}</div>
                  </div>
                  <div>
                    <div className="text-sm text-secondary-foreground/60 mb-1">Age</div>
                    <div className="font-semibold text-secondary-foreground">{player.age}</div>
                  </div>
                  <div>
                    <div className="text-sm text-secondary-foreground/60 mb-1">Batting</div>
                    <div className="font-semibold text-secondary-foreground">{player.battingStyle}</div>
                  </div>
                  <div>
                    <div className="text-sm text-secondary-foreground/60 mb-1">Bowling</div>
                    <div className="font-semibold text-secondary-foreground">{player.bowlingStyle}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-12 text-center">Career Statistics</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="text-center p-6">
                <Zap className="w-10 h-10 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">{player.matches}</div>
                <div className="text-muted-foreground">Matches Played</div>
              </Card>

              <Card className="text-center p-6">
                <TrendingUp className="w-10 h-10 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">{player.runs.toLocaleString()}</div>
                <div className="text-muted-foreground">Runs Scored</div>
              </Card>

              <Card className="text-center p-6">
                <Target className="w-10 h-10 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">{player.wickets}</div>
                <div className="text-muted-foreground">Wickets Taken</div>
              </Card>

              <Card className="text-center p-6">
                <Award className="w-10 h-10 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">{player.average}</div>
                <div className="text-muted-foreground">Batting Average</div>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Detailed Stats */}
              <Card>
                <CardHeader>
                  <CardTitle>Detailed Statistics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Strike Rate</span>
                    <span className="font-semibold">{player.strikeRate}</span>
                  </div>
                  {player.economy && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Economy Rate</span>
                      <span className="font-semibold">{player.economy}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Seasons Played</span>
                    <span className="font-semibold">{player.seasons.join(", ")}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Achievements */}
              <Card>
                <CardHeader>
                  <CardTitle>Major Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {player.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Award className="w-5 h-5 text-primary flex-shrink-0" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
