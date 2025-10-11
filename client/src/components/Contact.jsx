"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { ContactModal } from "@/components/ContactModal";
import { LazyLoadImage } from "react-lazy-load-image-component";
import GradientText from "./gradientText";
import { Mail } from "lucide-react";
import { Github, Linkedin, Download } from "lucide-react";
import Particles from './Particles';

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="contact" className="relative py-20 px-4 bg-black">
      {/* Particles Background */}
      <div className="absolute inset-0 w-full h-full">
        <Particles
          particleColors={['#ffffff', '#7e22ce']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-6">
          <GradientText
            colors={["#6b7280", "#FFFF", "#a21caf", "#FFFF", "#6b7280"]}
            animationSpeed={3}
            showBorder={false}
            className="text-4xl md:text-4xl font-bold"
          >
            Let's Work Together
          </GradientText>
          <p className="text-lg text-white max-w-2xl mx-auto leading-relaxed">
            I'm always interested in hearing about new projects and
            opportunities. Whether you have a question or just want to say hi,
            feel free to reach out!
          </p>

          <Button 
            size="lg" 
            className="text-white underline hover:text-purple-700 text-xl" 
            onClick={() => setIsModalOpen(true)}
          >
            Get In Touch
          </Button>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 py-8">
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative h-80 w-64 rounded-lg shadow-lg">
              <LazyLoadImage
                src="/profile2.jpg"
                alt="Ashley Brooks"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 space-y-6 text-white text-center">
            <div>
              <h3 className="text-3xl font-bold mb-2">Ashley Brooks</h3>
              <p className="text-xl text-gray-400">Full Stack Web Developer</p>
            </div>
            
            <div className="space-y-3">
              <a 
                href="mailto:a.brooks9385@gmail.com" 
                className="flex items-center justify-center gap-3 text-gray-300 hover:text-white transition-colors group"
              >
                <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span className="text-lg">a.brooks9385@gmail.com</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button size="lg" variant="outlineWhite" asChild>
                <a href="/AshleyBrooksTechResume.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>

              <div className="flex items-center gap-3">
                <Button size="lg" variant="outlineWhite" asChild>
                  <a
                    href="https://github.com/ashleyCodie"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>

                <Button size="lg" variant="outlineWhite" asChild>
                  <a
                    href="https://www.linkedin.com/in/ashley-brooks-257778362"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>

            <p className="text-white leading-relaxed">
              Based in Gilbert, Arizona. Available for freelance projects and full-time opportunities.
            </p>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-white text-white">
          <p className="text-sm text-white">
            © {new Date().getFullYear()} Ashley Brooks. Built with React, JavaScript, and
            Tailwind CSS.
          </p>
        </div>
      </div>

      <ContactModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </section>
  );
};

export default Contact;