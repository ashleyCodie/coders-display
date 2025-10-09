"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { ContactModal } from "@/components/ContactModal";
import { LazyLoadImage } from "react-lazy-load-image-component";
import GradientText from "./gradientText";
import { Mail } from "lucide-react";

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="contact" className="py-20 px-4 bg-black">
      <div className="max-w-4xl mx-auto space-y-12">
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

          <Button size="lg" className="text-white underline hover:text-purple-700 text-xl" onClick={() => setIsModalOpen(true)}>
            Get In Touch
          </Button>
        </div>

        {/* Photo and Contact Info Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 py-8">
          {/* Photo - Half Size */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative h-80 w-64 rounded-lg overflow-hidden shadow-lg">
              <LazyLoadImage
                src="/profile2.jpg"
                alt="Ashley Brooks"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/2 space-y-6 text-white">
            <div>
              <h3 className="text-3xl font-bold mb-2">Ashley Brooks</h3>
              <p className="text-xl text-gray-400">Full Stack Web Developer</p>
            </div>
            
            <div className="space-y-3">
              <a 
                href="mailto:your.email@example.com" 
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
              >
                <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span className="text-lg">your.email@example.com</span>
              </a>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Based in Gilbert, Arizona. Available for freelance projects and full-time opportunities.
            </p>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-gray-800 text-white">
          <p className="text-sm text-gray-400">
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