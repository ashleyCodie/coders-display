import { useState } from "react";
import BlurText from "./components/blurText";
import "./App.css";

function App() {
  const [key, setKey] = useState(0);

  const handleAnimationComplete = () => {
    // Wait a bit, then restart the animation
    setTimeout(() => {
      setKey(prevKey => prevKey + 1);
    }, 1000); // 1 second pause before restarting
  };

  return (
    <>
      <div className="bg-black h-screen flex items-center justify-center">
        <BlurText
          key={key} // This forces React to remount the component
          text="Full Stack Web Developer"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-7xl mb-8 text-white"
        />
      </div>
    </>
  );
}

export default App;
