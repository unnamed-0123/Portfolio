import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, GraduationCap, Heart, Mail, User } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-12 py-4 max-w-4xl mx-auto">
      {/* Hero Section */}
      <section className="text-center space-y-4 py-8 sm:py-12">
        <div className="inline-flex items-center gap-2 rounded-full border bg-muted/50 px-4 py-1.5 text-xs font-semibold text-muted-foreground">
          <Code2 className="h-3.5 w-3.5 text-primary" /> Full-Stack Developer
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          Reynan J. De Las Herras
        </h1>
        <p className="max-w-2xl mx-auto text-muted-foreground sm:text-lg leading-relaxed">
          Building clean, performant web applications using Next.js.
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <Link href="/contact">
            <Button size="lg">Contact Me</Button>
          </Link>
          <Link href="/about">
            <Button variant="outline" size="lg">About Me</Button>
          </Link>
        </div>
      </section>

      {/* Navigation Quick Links Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link href="/about" className="group">
          <Card className="h-full transition-all group-hover:border-primary/50 group-hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-bold">About Me</CardTitle>
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <User className="h-5 w-5" />
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Learn more about my background, passion for coding, and technical skillset.
              </CardDescription>
            </CardContent>
          </Card>
        </Link>

        <Link href="/education" className="group">
          <Card className="h-full transition-all group-hover:border-primary/50 group-hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-bold">Education</CardTitle>
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <GraduationCap className="h-5 w-5" />
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                View my academic history and key technical highlights.
              </CardDescription>
            </CardContent>
          </Card>
        </Link>

        <Link href="/hobbies" className="group">
          <Card className="h-full transition-all group-hover:border-primary/50 group-hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-bold">Hobbies & Interests</CardTitle>
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <Heart className="h-5 w-5" />
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Discover what I enjoy doing outside of programming.
              </CardDescription>
            </CardContent>
          </Card>
        </Link>

        <Link href="/contact" className="group">
          <Card className="h-full transition-all group-hover:border-primary/50 group-hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-bold">Get In Touch</CardTitle>
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <Mail className="h-5 w-5" />
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Send me a message for project inquiries, collaborations, or general questions.
              </CardDescription>
            </CardContent>
          </Card>
        </Link>
      </section>
    </div>
  );
}