// import { Navigation } from "@/components/navigation"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { getMomentById } from "@/lib/moments-data"
// import { Trophy, ArrowLeft, Calendar, MapPin, Star } from "lucide-react"
// import Link from "next/link"
// import Image from "next/image"
// import { notFound } from "next/navigation"

// interface MomentPageProps {
//   params: {
//     id: string
//   }
// }

// export default function MomentPage({ params }: MomentPageProps) {
//   const moment = getMomentById(params.id)

//   if (!moment) {
//     notFound()
//   }

//   return (
//     <div className="min-h-screen bg-background">
//       <Navigation />

//       <div className="pt-16">
//         {/* Back Button */}
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//           <Button asChild variant="ghost" className="mb-4">
//             <Link href="/moments">
//               <ArrowLeft className="w-4 h-4 mr-2" />
//               Back to Moments
//             </Link>
//           </Button>
//         </div>

//         {/* Moment Header */}
//         <section className="py-12 bg-secondary">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//               <div>
//                 <div className="flex items-center gap-3 mb-4">
//                   <Badge className="bg-primary text-primary-foreground text-lg px-4 py-2">
//                     <Trophy className="w-4 h-4 mr-2" />
//                     {moment.year} Champion
//                   </Badge>
//                 </div>
//                 <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">{moment.title}</h1>
//                 <p className="text-xl text-secondary-foreground mb-8 leading-relaxed">{moment.description}</p>

//                 <div className="space-y-4">
//                   <div className="flex items-center gap-3">
//                     <Calendar className="w-5 h-5 text-primary" />
//                     <span className="text-lg font-semibold">{moment.finalScore}</span>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <MapPin className="w-5 h-5 text-primary" />
//                     <span className="text-lg">{moment.venue}</span>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <Star className="w-5 h-5 text-primary" />
//                     <span className="text-lg">
//                       {moment.heroPlayer} - {moment.heroPerformance}
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               <div className="relative">
//                 <Image
//                   src={moment.image || "/placeholder.svg"}
//                   alt={moment.title}
//                   width={600}
//                   height={400}
//                   className="rounded-lg object-cover w-full"
//                 />
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Match Summary */}
//         <section className="py-20">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//               {/* Main Summary */}
//               <div className="lg:col-span-2">
//                 <Card>
//                   <CardHeader>
//                     <CardTitle className="text-3xl">Match Summary</CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <p className="text-lg leading-relaxed mb-8">{moment.matchSummary}</p>

//                     <h3 className="text-2xl font-bold mb-6">Key Highlights</h3>
//                     <div className="space-y-4">
//                       {moment.highlights.map((highlight, index) => (
//                         <div key={index} className="flex items-start gap-3">
//                           <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
//                           <span className="text-lg">{highlight}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </CardContent>
//                 </Card>
//               </div>

//               {/* Match Details */}
//               <div className="space-y-6">
//                 <Card>
//                   <CardHeader>
//                     <CardTitle>Match Details</CardTitle>
//                   </CardHeader>
//                   <CardContent className="space-y-4">
//                     <div>
//                       <div className="text-sm text-muted-foreground mb-1">Year</div>
//                       <div className="font-semibold text-lg">{moment.year}</div>
//                     </div>
//                     <div>
//                       <div className="text-sm text-muted-foreground mb-1">Opponent</div>
//                       <div className="font-semibold">{moment.opponent}</div>
//                     </div>
//                     <div>
//                       <div className="text-sm text-muted-foreground mb-1">Venue</div>
//                       <div className="font-semibold">{moment.venue}</div>
//                     </div>
//                     <div>
//                       <div className="text-sm text-muted-foreground mb-1">Hero of the Match</div>
//                       <div className="font-semibold">{moment.heroPlayer}</div>
//                     </div>
//                   </CardContent>
//                 </Card>

//                 <Card>
//                   <CardHeader>
//                     <CardTitle>Championship Impact</CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="text-center">
//                       <Trophy className="w-16 h-16 text-primary mx-auto mb-4" />
//                       <div className="text-2xl font-bold text-primary mb-2">
//                         IPL Title #{championshipMoments.findIndex((m) => m.id === moment.id) + 1}
//                       </div>
//                       <div className="text-muted-foreground">
//                         This was CSK's{" "}
//                         {
//                           ["first", "second", "third", "fourth", "fifth"][
//                             championshipMoments.findIndex((m) => m.id === moment.id)
//                           ]
//                         }{" "}
//                         IPL championship
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Related Moments */}
//         <section className="py-20 bg-muted/30">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <h2 className="text-3xl font-bold mb-8">Other Championship Moments</h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {championshipMoments
//                 .filter((m) => m.id !== moment.id)
//                 .slice(0, 3)
//                 .map((relatedMoment) => (
//                   <Card
//                     key={relatedMoment.id}
//                     className="group hover:scale-105 transition-all duration-300 overflow-hidden"
//                   >
//                     <div className="relative h-48 overflow-hidden">
//                       <Image
//                         src={relatedMoment.image || "/placeholder.svg"}
//                         alt={relatedMoment.title}
//                         fill
//                         className="object-cover group-hover:scale-110 transition-transform duration-300"
//                       />
//                       <div className="absolute top-4 left-4">
//                         <Badge className="bg-primary text-primary-foreground">{relatedMoment.year}</Badge>
//                       </div>
//                     </div>
//                     <CardContent className="p-6">
//                       <h3 className="text-xl font-bold mb-2">{relatedMoment.title}</h3>
//                       <p className="text-muted-foreground mb-4 text-sm">{relatedMoment.description}</p>
//                       <Button asChild variant="outline" className="w-full bg-transparent">
//                         <Link href={`/moments/${relatedMoment.id}`}>View Details</Link>
//                       </Button>
//                     </CardContent>
//                   </Card>
//                 ))}
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   )
// }




import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getMomentById } from "@/lib/moments-data"
import { Trophy, ArrowLeft, Calendar, MapPin, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"

interface MomentPageProps {
  params: {
    id: string
  }
}

export default function MomentPage({ params }: MomentPageProps) {
  const moment = getMomentById(params.id)

  if (!moment) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-16">
        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Button asChild variant="ghost" className="mb-4">
            <Link href="/moments">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Moments
            </Link>
          </Button>
        </div>

        {/* Moment Header */}
        <section className="py-12 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Badge className="bg-primary text-primary-foreground text-lg px-4 py-2">
                    <Trophy className="w-4 h-4 mr-2" />
                    {moment.year} Champion
                  </Badge>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">{moment.title}</h1>
                <p className="text-xl text-secondary-foreground mb-8 leading-relaxed">{moment.description}</p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="text-lg font-semibold">{moment.finalScore}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-lg">{moment.venue}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-primary" />
                    <span className="text-lg">
                      {moment.heroPlayer} - {moment.heroPerformance}
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Image
                  src={moment.image || "/placeholder.svg"}
                  alt={moment.title}
                  width={600}
                  height={400}
                  className="rounded-lg object-cover w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Match Summary */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Summary */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-3xl">Match Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg leading-relaxed mb-8">{moment.matchSummary}</p>

                    <h3 className="text-2xl font-bold mb-6">Key Highlights</h3>
                    <div className="space-y-4">
                      {moment.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-lg">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Match Details */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Match Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Year</div>
                      <div className="font-semibold text-lg">{moment.year}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Opponent</div>
                      <div className="font-semibold">{moment.opponent}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Venue</div>
                      <div className="font-semibold">{moment.venue}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Hero of the Match</div>
                      <div className="font-semibold">{moment.heroPlayer}</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Related Moments */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Other Championship Moments</h2>
            <p className="text-muted-foreground">Related moments section removed as requested.</p>
          </div>
        </section>
      </div>
    </div>
  )
}
