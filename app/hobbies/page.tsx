import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Gamepad2, Music, Bike, Utensils, Tv } from "lucide-react";

const hobbies = [
  {
    title: "Photography",
    icon: Camera,
    description: "Chasing golden sunsets and capturing mountain landscapes on late afternoon trails..",
  },
  {
    title: "Gaming",
    icon: Gamepad2,
    description: "Love Strategy, MMORPG, Open World, MOBA and Fantasy Games.",
  },
  {
    title: "Music",
    icon: Music,
    description: "Exploring Retrowave, Acoustic, Folk, and Post-Rock Music.",
  },
  {
    title: "Cycling",
    icon: Bike,
    description: "Exploring scenic routes and staying active through weekend rides.",
  },
  {
    title: "Food",
    icon: Utensils,
    description: "Exploring local food spots, trying new cuisines, and enjoying good meals",
  },
  {
    title: "Watching Anime",
    icon: Tv,
    description: "Enthusiast for fantasy, shonen, and slice-of-life anime series.",
  },
];

export default function Hobbies() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Hobbies & Interests</h1>
        <p className="text-muted-foreground mt-1">What I enjoy doing outside of coding.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hobbies.map((hobby) => {
          const Icon = hobby.icon;
          return (
            <Card key={hobby.title} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-primary/10 rounded-lg text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">{hobby.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{hobby.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}