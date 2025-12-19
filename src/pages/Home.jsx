// import Header from "../components/Header";
// import Intro from "../components/Intro";
// import Avatar from "../components/Avatar";
// import IntroVideo from "../components/IntroVideo";
// import ActionCards from "../components/ActionCards";
// import BackgroundEffects from "../components/BackgroundEffects";

// export default function Home() {
//   return (
//     <main className="relative min-h-screen overflow-hidden
//                      bg-white dark:bg-gray-900
//                      text-gray-900 dark:text-gray-100
//                      transition-colors">

//       <Header />
//       <Intro />
//       <IntroVideo/>
//       <ActionCards />
//       <BackgroundEffects />
//     </main>
//   );
// }

import { useEffect, useRef, useState } from "react";

import Header from "../components/Header";
import Intro from "../components/Intro";
import IntroVideo from "../components/IntroVideo";
import ActionCards from "../components/ActionCards";

import About from "../sections/About";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import Contact from "../sections/Contact";

export default function Home() {
  // which tab is active (null by default)
  const [active, setActive] = useState(null);

  // scroll target for all sections
  const sectionRef = useRef(null);

  // scroll when a tab becomes active
  useEffect(() => {
    if (active && sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [active]);

  return (
    <main className="relative min-h-screen bg-white dark:bg-gray-900 transition-colors">
      
      {/* Header */}
      <Header />

      {/* Hero */}
      <section className="flex flex-col items-center text-center px-6">
        <Intro />
        <IntroVideo />
      </section>

      {/* Action Cards (Tabs) */}
      <ActionCards active={active} onSelect={setActive} />

      {/* Scroll Target + Conditional Content */}
      <div
        ref={sectionRef}
        className="scroll-mt-24 mt-24 pb-24"
      >
        {active === "me" && <About />}
        {active === "experience" && <Experience />}
        {active === "projects" && <Projects />}
        {active === "skills" && <Skills />}
        {/* {active === "fun" && <Fun />} */}
        {active === "contact" && <Contact />}
      </div>
    </main>
  );
}
