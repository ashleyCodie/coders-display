import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import  {Button}  from "@/components/ui/Button";
import { ExternalLink } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import BlurText from "./blurText";

const projects = [
  {
    title: "PassItOn-Sponsorhub",
    description:
      "This project is a comprehensive fundraiser creation platform built with Next.js, React, TypeScript, and Tailwind CSS that allows users to create detailed fundraising campaigns. The system includes a multi-section form for collecting organization details, fundraising goals, location information, campaign stories with rich text formatting, and multiple image uploads. It features a professional preview page that displays all submitted information in a donor-friendly layout with progress tracking, campaign statistics, and designated areas for widget integration.",
    image: "/sponsorhub.jpg",
    tags: ["React", "Next.js", "TypeScript", "Stripe", "PostgreSQL", "TailwindCSS"],
    github: "https://github.com/Banyan-Labs/pass-it-on-sponsorhub",
  },
  {
    title: "ChaChing & Bling Shopping App",
    description:
      "ChaChing & Bling is a full-stack e-commerce web application that enables users to browse products, manage their shopping experience, and make purchases online. Users can create accounts, add items to their shopping cart for immediate purchase consideration, and save favorite products to a wishlist for future reference. The platform features secure authentication, a comprehensive product catalog with search and filtering capabilities, and persistent cart and favorites functionality across sessions.",
    image: "/ccb.jpg",
    tags: ["React", "Node.js", "MongoDB", "TailwindCSS", "JavaScript", "ReduxTK", "Axios"],
    github: "https://github.com/ashleyCodie/ChaChing-And-Bling",
  },
  {
    title: "For Orange, By Orange",
    description:
      "For Orange, By Orange is a full stack web application that connects justice-impacted individuals with essential reentry resources like housing, employment, legal aid, and social services through a searchable, community-vetted directory. The platform enables peer-to-peer support through forums, mentorship matching, and private messaging, allowing users to build supportive networks with others who share similar experiences. Built with strong privacy protections and mobile-responsive design, it serves as both a practical resource hub and community space to reduce isolation and support successful reintegration.",
    image: "/fobo.jpg",
    tags: ["React", "JavaScript", "API Integration", "TailwindCSS", "Axios", "ReduxTK", "MongoDB"],
    github: "https://github.com/ashleyCodie/For-Orange-By-Orange",
  },
];

const Projects = () => {
      const [key, setKey] = useState(0);

  const handleAnimationComplete = () => {
    // Wait a bit, then restart the animation
    setTimeout(() => {
      setKey((prevKey) => prevKey + 1);
    }, 1000); // 1 second pause before restarting
  };

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
         <BlurText
          key={key}
          text="Featured Projects"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-3xl md:text-4xl font-bold mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col">
              <div className="relative h-48 w-full bg-muted">
                <LazyLoadImage
                  src={project.image}
                  alt="description"
                  className="your-classes"
                />
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-md bg-purple-300 text-primary font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full bg-transparent text-black"
                  asChild
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Repository
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
