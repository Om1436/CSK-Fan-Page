import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { playersData, getLegendaryPlayers } from "@/lib/players-data"
import { Crown, TrendingUp, Target, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PlayersPage() {
  const legends = getLegendaryPlayers()
  const currentPlayers = playersData.filter((player) => !player.isLegend)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-16">
        {/* Header */}
        <section className="py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">CSK LEGENDS</h1>
            <p className="text-xl text-secondary-foreground max-w-3xl mx-auto">
              Meet the heroes who made Chennai Super Kings the most successful franchise in IPL history
            </p>
          </div>
        </section>

        {/* Legends Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-12">
              <Crown className="w-8 h-8 text-primary" />
              <h2 className="text-4xl font-bold text-foreground">Hall of Fame</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {legends.map((player) => (
                <Card key={player.id} className="group hover:scale-105 transition-all duration-300 overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={player.image || "/placeholder.svg"}
                      alt={player.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary text-primary-foreground">
                        <Crown className="w-3 h-3 mr-1" />
                        Legend
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{player.name}</h3>
                    <p className="text-muted-foreground mb-4">{player.role}</p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{player.matches}</div>
                        <div className="text-sm text-muted-foreground">Matches</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{player.runs}</div>
                        <div className="text-sm text-muted-foreground">Runs</div>
                      </div>
                    </div>

                    <Button asChild className="w-full">
                      <Link href={`/players/${player.id}`}>View Profile</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Current Squad */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-12">
              <Zap className="w-8 h-8 text-primary" />
              <h2 className="text-4xl font-bold text-foreground">Current Squad</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPlayers.map((player) => (
                <Card key={player.id} className="group hover:scale-105 transition-all duration-300 overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={player.image || "/placeholder.svg"}
                      alt={player.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary">Active</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{player.name}</h3>
                    <p className="text-muted-foreground mb-4">{player.role}</p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{player.matches}</div>
                        <div className="text-sm text-muted-foreground">Matches</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{player.runs}</div>
                        <div className="text-sm text-muted-foreground">Runs</div>
                      </div>
                    </div>

                    <Button asChild variant="outline" className="w-full bg-transparent">
                      <Link href={`/players/${player.id}`}>View Profile</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Overview */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">Team Statistics</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <Card className="text-center p-8">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">
                  {playersData.reduce((sum, player) => sum + player.runs, 0).toLocaleString()}
                </div>
                <div className="text-muted-foreground">Total Runs</div>
              </Card>

              <Card className="text-center p-8">
                <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">
                  {playersData.reduce((sum, player) => sum + player.wickets, 0)}
                </div>
                <div className="text-muted-foreground">Total Wickets</div>
              </Card>

              <Card className="text-center p-8">
                <Crown className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">5</div>
                <div className="text-muted-foreground">Total Trophies</div>
              </Card>

              <Card className="text-center p-8">
                <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">10</div>
                <div className="text-muted-foreground">Total Finals</div>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
