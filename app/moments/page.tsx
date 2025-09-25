import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { championshipMoments, iconicMoments } from "@/lib/moments-data"
import { Trophy, Calendar, MapPin, Star, Crown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function MomentsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-16">
        {/* Header */}
        <section className="py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">CHAMPIONSHIP MOMENTS</h1>
            <p className="text-xl text-secondary-foreground max-w-3xl mx-auto">
              Relive the glory of CSK's 5 IPL championships and the iconic moments that defined a dynasty
            </p>
          </div>
        </section>

        {/* Championship Timeline */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-12">
              <Trophy className="w-8 h-8 text-primary" />
              <h2 className="text-4xl font-bold text-foreground">Championship Timeline</h2>
            </div>

            <div className="space-y-12">
              {championshipMoments.map((moment, index) => (
                <div key={moment.id} className="relative">
                  {/* Timeline line */}
                  {index < championshipMoments.length - 1 && (
                    <div className="absolute left-8 top-24 w-0.5 h-32 bg-primary/30 hidden lg:block"></div>
                  )}

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Year indicator */}
                    <div className="lg:col-span-2 text-center lg:text-left">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full text-2xl font-bold">
                        {moment.year}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-10">
                      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                          <div className="relative h-64 md:h-full">
                            <Image
                              src={moment.image || "/placeholder.svg"}
                              alt={moment.title}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute top-4 left-4">
                              <Badge className="bg-primary text-primary-foreground">
                                <Crown className="w-3 h-3 mr-1" />
                                Champion
                              </Badge>
                            </div>
                          </div>

                          <CardContent className="p-8">
                            <h3 className="text-3xl font-bold mb-4">{moment.title}</h3>
                            <p className="text-muted-foreground mb-6">{moment.description}</p>

                            <div className="space-y-4 mb-6">
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-primary" />
                                <span className="font-semibold">{moment.finalScore}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-primary" />
                                <span>{moment.venue}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Star className="w-4 h-4 text-primary" />
                                <span>
                                  {moment.heroPlayer} - {moment.heroPerformance}
                                </span>
                              </div>
                            </div>

                            <Button asChild className="w-full">
                              <Link href={`/moments/${moment.id}`}>View Details</Link>
                            </Button>
                          </CardContent>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Iconic Moments */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-12">
              <Star className="w-8 h-8 text-primary" />
              <h2 className="text-4xl font-bold text-foreground">Iconic Moments</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {iconicMoments.map((moment) => (
                <Card key={moment.id} className="group hover:scale-105 transition-all duration-300 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={moment.image || "/placeholder.svg"}
                      alt={moment.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{moment.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm">{moment.description}</p>
                    <Badge variant="secondary">{moment.year}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Championship Stats */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">Championship Legacy</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center p-8">
                <Trophy className="w-16 h-16 text-primary mx-auto mb-6" />
                <div className="text-4xl font-bold text-primary mb-2">5</div>
                <div className="text-xl text-muted-foreground mb-2">IPL Titles</div>
                <div className="text-sm text-muted-foreground">2010, 2011, 2018, 2021, 2023</div>
              </Card>

              <Card className="text-center p-8">
                <Calendar className="w-16 h-16 text-primary mx-auto mb-6" />
                <div className="text-4xl font-bold text-primary mb-2">10</div>
                <div className="text-xl text-muted-foreground mb-2">Final Appearances</div>
                <div className="text-sm text-muted-foreground">Most finals reached by any team</div>
              </Card>

              <Card className="text-center p-8">
                <Crown className="w-16 h-16 text-primary mx-auto mb-6" />
                <div className="text-4xl font-bold text-primary mb-2">15</div>
                <div className="text-xl text-muted-foreground mb-2">Years of Excellence</div>
                <div className="text-sm text-muted-foreground">Consistent performance since 2008</div>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
