import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  "React & Next.js",
  "Python",
  "C/C++",
  "MySQL / Oracle",
  "Git & GitHub",

];

export default function About() {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">About Me</h1>
        <p className="text-muted-foreground mt-1">
          A bit about my background, passion, and technical skillset.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>My Story</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
          <p>I am an IT student at Naga College Foundation, Inc. with a background in Business (ABM Strand), bridging the gap between clean code and business logic. My journey into tech started with curiosity about how software works under the hood, which quickly turned into a passion for building full-stack web applications with Next.js, React, and modern databases. When I’m not writing code or reviewing, you can usually find me cycling scenic routes, photographing mountain sunsets, or exploring fantasy world-building in anime and RPGs.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Skills & Technologies</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-sm px-3 py-1">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}