import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download } from "lucide-react";
import BlurText from "./blurText";
import GradientText from "./gradientText";

const Hero = () => {
  const [key, setKey] = useState(0);

  const handleAnimationComplete = () => {
    // Wait a bit, then restart the animation
    setTimeout(() => {
      setKey((prevKey) => prevKey + 1);
    }, 1000); // 1 second pause before restarting
  };

  return (
    <div className="bg-black h-screen flex items-center justify-center">
      <div className="flex flex-col items-center px-4">
        <BlurText
          key={key}
          text="Full Stack Web Developer"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-5xl mb-8 text-white"
        />
        <GradientText
          colors={["#6b7280", "#FFFF", "#a21caf", "#FFFF", "#6b7280"]}
          animationSpeed={3}
          showBorder={false}
          className="text-7xl mb-6"
        >
          Ashley Brooks
        </GradientText>

        <p className="text-lg md:text-xl text-white max-w-2xl mx-auto text-balance leading-relaxed mb-8">
          I build accessible, pixel-perfect digital experiences for the web.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Button size="lg" variant="outline" className="text-white" asChild>
            <a href="/AshleyBrooksTechResume.pdf" download>
              <Download className="mr-2 h-5 w-5 bg-white text-black" />
              Download Resume
            </a>
          </Button>

          <div className="flex items-center gap-3">
            <Button size="lg" variant="outline" asChild>
              <a
                href="https://github.com/ashleyCodie"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5 text-white " />
              </a>
            </Button>

            <Button size="lg" variant="outline" asChild>
              <a
                href="www.linkedin.com/in/ashley-brooks-257778362"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        <div className="pt-12">
          <a
            href="#about"
            className="inline-block text-sm text-white hover:text-white transition-colors"
          >
            Scroll to explore ↓
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
