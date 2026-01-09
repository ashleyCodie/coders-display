import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ExternalLink } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import BlurText from "./blurText";
import LogoLoop from "./LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiRedux,
} from "react-icons/si";

const projects = [
  {
    title: "Upcurve",
    description:
      "This project is a comprehensive fundraiser creation platform built with Next.js, React, TypeScript, and Tailwind CSS that allows users to create detailed fundraising campaigns. The system includes a multi-section form for collecting organization details, fundraising goals, location information, campaign stories with rich text formatting, and multiple image uploads. It features a professional preview page that displays all submitted information in a donor-friendly layout with progress tracking, campaign statistics, and designated areas for widget integration.",
    image: "/upcurve.jpg",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Stripe",
      "PostgreSQL",
      "TailwindCSS",
    ],
    github: "https://github.com/Banyan-Labs/pass-it-on-sponsorhub",
    liveSite: "https://www.upcurve.life/",
  },
  {
    title: "Excel Floor Care",
    description: (
      <>
        This professional website for Excel Floor Care showcases their grout,
        tile, and carpet cleaning services in the Phoenix Metropolitan Area with
        stunning before/after photo galleries and customer testimonials. The
        modern, mobile-optimized design features animated elements, smooth
        scrolling, and a contact form that makes it easy for customers to
        request free demos and get quotes. Built with cutting-edge web
        technology, the site loads fast and works seamlessly across all devices.{" "}
        {/* <a
          href="https://www.excelfloorcare.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-600 hover:text-purple-800 underline font-medium"
        >
          Visit Live Site
        </a> */}
      </>
    ),
    image: "/excel.jpg",
    tags: ["React", "Vite", "Node.js", "TailwindCSS", "JavaScript"],
    github: "https://github.com/ashleyCodie/excel-floor-care",
  },
  {
    title: "Billy- Bill Management",
    description: (
      <>
        Billy is a modern bill management application that helps you track all
        your financial obligations in one place. Manage creditors, set up
        recurring bills, and never miss a payment with automatic reminders and
        calendar integration. The app features secure authentication, allowing
        you to safely store bill credentials and access your data from any
        device. Recurring bills automatically generate future instances,
        ensuring you always know what's coming up. Built with Next.js and
        Supabase for a fast, secure, and responsive experience across desktop
        and mobile devices.
        <a
          href="https://billy-woad.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-600 hover:text-purple-800 underline font-medium"
        >
          Visit Live Site
        </a>
      </>
    ),
    image: "/billy.jpg",
    tags: ["React", "Vite", "Node.js", "TailwindCSS", "TypeScript", "Supabase"],
    github: "https://github.com/ashleyCodie/billy",
  },
  {
    title: "ChaChing & Bling Shopping App",
    description:
      "ChaChing & Bling is a full-stack e-commerce web application that enables users to browse products, manage their shopping experience, and make purchases online. Users can create accounts, add items to their shopping cart for immediate purchase consideration, and save favorite products to a wishlist for future reference. The platform features secure authentication, a comprehensive product catalog with search and filtering capabilities, and persistent cart and favorites functionality across sessions.",
    image: "/ccb.jpg",
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "TailwindCSS",
      "JavaScript",
      "ReduxTK",
      "Axios",
    ],
    github: "https://github.com/ashleyCodie/ChaChing-And-Bling",
  },
  {
    title: "For Orange, By Orange",
    description:
      "For Orange, By Orange is a full stack web application that connects justice-impacted individuals with essential reentry resources like housing, employment, legal aid, and social services through a searchable, community-vetted directory. The platform enables peer-to-peer support through forums, mentorship matching, and private messaging, allowing users to build supportive networks with others who share similar experiences. Built with strong privacy protections and mobile-responsive design, it serves as both a practical resource hub and community space to reduce isolation and support successful reintegration.",
    image: "/fobo.jpg",
    tags: [
      "React",
      "JavaScript",
      "API Integration",
      "TailwindCSS",
      "Axios",
      "ReduxTK",
      "MongoDB",
    ],
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

  const techLogos = [
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    {
      node: <SiTypescript />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
    },
    {
      node: <SiTailwindcss />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
    {
      node: <SiJavascript />,
      title: "JavaScript",
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      node: <SiCss3 />,
      title: "CSS3",
      href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    {
      node: <SiHtml5 />,
      title: "HTML5",
      href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    { node: <SiRedux />, title: "Redux", href: "https://redux.js.org" },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div
        className="pt-12"
        style={{ height: "200px", position: "relative", overflow: "hidden" }}
      >
        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={48}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#d8b4fe"
          ariaLabel="Technology partners"
        />
      </div>
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
                {project.liveSite && (
                  <a
                    href={project.liveSite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-purple-600 hover:text-purple-800 underline mt-1"
                  >
                    {project.liveSite}
                  </a>
                )}
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

              <CardFooter className="flex flex-col gap-2">
                {project.liveSite && (
                  <Button
                    variant="outline"
                    className="w-full bg-transparent text-black"
                    asChild
                  >
                    <a
                      href={project.liveSite}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit Live Site
                    </a>
                  </Button>
                )}
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
