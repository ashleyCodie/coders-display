import React from "react";
import { useState } from "react";
import BlurText from "./blurText";

const About = () => {
  const [key, setKey] = useState(0);

  const handleAnimationComplete = () => {
    // Wait a bit, then restart the animation
    setTimeout(() => {
      setKey((prevKey) => prevKey + 1);
    }, 1000); // 1 second pause before restarting
  };



  return (
    <section id="about" className="py-20  px-4 bg-purple-200">
      <div className="max-w-6xl mx-auto">
        <BlurText
          key={key}
          text="About Me"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-3xl md:text-4xl font-bold mb-8"
        />

        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            Hi! I'm Ashley Brooks A.K.A Ashley Codie in the Tech World. I am a
            dedicated full-stack web developer with a unique journey that has
            shaped my resilience, determination, and commitment to excellence.
            As a mother of three, I understand the importance of balance, time
            management, and delivering results under pressure—skills that
            translate seamlessly into my professional work.{" "}
          </p>
          <p>
            My path to software development began during a transformative period
            in my life. While navigating personal challenges and rebuilding my
            foundation, I discovered my passion for coding and technology. What
            started as curiosity evolved into expertise as I immersed myself in
            learning programming languages, frameworks, and development best
            practices. This journey taught me that with dedication and
            perseverance, it's possible to completely reinvent yourself and
            create meaningful change.
          </p>
          <p>
            As a full-stack developer, I bring proficiency in both front-end and
            back-end technologies, allowing me to see the complete picture of
            any project and contribute at every level. My experience overcoming
            adversity has instilled in me a problem-solving mindset that proves
            invaluable when debugging code, optimizing performance, or finding
            creative solutions to complex technical challenges.
          </p>
          <p>
            What sets me apart is my combination of technical skills and life
            experience. I bring authenticity, grit, and a deep appreciation for
            second chances to every team I join. I understand the value of
            opportunity and approach each project with genuine enthusiasm and
            commitment. My colleagues often note my collaborative spirit,
            reliability, and ability to remain calm and focused under pressure.
          </p>
          <p>
            I'm passionate about using technology to create positive impact and
            build solutions that matter. My personal transformation has given me
            perspective on the power of growth and change, which I channel into
            writing clean, efficient code and contributing to projects that can
            make a difference in people's lives.
          </p>
          <p>
            I'm excited to bring my skills, dedication, and unique perspective
            to a forward-thinking team that values diverse experiences and
            recognizes that the best developers come from all walks of life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
