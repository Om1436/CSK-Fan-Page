import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Users, Star, Target } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/90 to-background"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-primary mb-6 text-balance">
              WHISTLE
              <br />
              PODU
            </h1>
            <p className="text-xl md:text-2xl text-secondary-foreground mb-8 max-w-3xl mx-auto text-pretty">
              The ultimate destination for Chennai Super Kings fans. Dive deep into player stats, relive championship
              moments, and test your CSK knowledge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href="/players">Explore Players</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                <Link href="/quiz">Test Your Knowledge</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Everything CSK</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From legendary players to championship moments, explore the complete CSK universe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group hover:scale-105 transition-transform duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Player Stats</h3>
                <p className="text-muted-foreground mb-6">
                  Comprehensive statistics and career journeys of all CSK legends
                </p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/players">View Players</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-transform duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Trophy className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Championship Moments</h3>
                <p className="text-muted-foreground mb-6">Relive the glory of CSK's IPL victories and iconic moments</p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/moments">Explore Moments</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-transform duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Knowledge Quiz</h3>
                <p className="text-muted-foreground mb-6">Test your CSK knowledge and earn your fan rating</p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/quiz">Take Quiz</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-transform duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Fan Dashboard</h3>
                <p className="text-muted-foreground mb-6">Track your quiz scores and fan level achievements</p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/dashboard">View Dashboard</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">5</div>
              <div className="text-secondary-foreground">IPL Titles</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">200+</div>
              <div className="text-secondary-foreground">Matches Won</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
              <div className="text-secondary-foreground">Legendary Players</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">15+</div>
              <div className="text-secondary-foreground">Years of Glory</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-2xl font-bold text-primary mb-4">CSK FAN HUB</div>
          <p className="text-muted-foreground">Made with ❤️ for all Chennai Super Kings fans worldwide</p>
        </div>
      </footer>
    </div>
  )
}
