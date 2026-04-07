// // import Header from "../components/Header";
// // import Intro from "../components/Intro";
// // import Avatar from "../components/Avatar";
// // import IntroVideo from "../components/IntroVideo";
// // import ActionCards from "../components/ActionCards";
// // import BackgroundEffects from "../components/BackgroundEffects";

// // export default function Home() {
// //   return (
// //     <main className="relative min-h-screen overflow-hidden
// //                      bg-white dark:bg-gray-900
// //                      text-gray-900 dark:text-gray-100
// //                      transition-colors">

// //       <Header />
// //       <Intro />
// //       <IntroVideo/>
// //       <ActionCards />
// //       <BackgroundEffects />
// //     </main>
// //   );
// // }

// import { useEffect, useRef, useState } from "react";

// import Header from "../components/Header";
// import Intro from "../components/Intro";
// import IntroVideo from "../components/IntroVideo";
// import ActionCards from "../components/ActionCards";
// import Objective from "../components/Objective";
// import About from "../sections/About";
// import Experience from "../sections/Experience";
// import Projects from "../sections/Projects";
// import Skills from "../sections/Skills";
// import Blogs from "../sections/Blogs";
// import Contact from "../sections/Contact";
// import Footer from "../components/Footer";
// export default function Home() {
//   // which tab is active (null by default)
//   const [active, setActive] = useState(null);

//   // scroll target for all sections
//   const sectionRef = useRef(null);

//   // scroll when a tab becomes active
//   useEffect(() => {
//     if (active && sectionRef.current) {
//       sectionRef.current.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//   }, [active]);

//   return (
//     <main className="relative min-h-screen bg-white dark:bg-gray-900 transition-colors">
      
//       {/* Header */}
//       {/* <Header /> */}

//       {/* Hero */}
//       <section className="flex flex-col items-center text-center px-6">
//         <Intro />
//         <IntroVideo />
//         <Objective/>
//       </section>

// <div className="relative">
//       {/* Action Cards (Tabs) */}
//       <div className="sticky top-4 z-50">
//         <ActionCards active={active} onSelect={setActive} />
//       </div>

//       {/* Scroll Target + Conditional Content */}
//   <div className="mt-6 h-[calc(100vh-240px)]">
//     <div className="h-full overflow-y-auto">
//         {active === "me" && <About />}
//         {active === "experience" && <Experience />}
//         {active === "projects" && <Projects />}
//         {active === "skills" && <Skills />}
//         {active === "blog" && <Blogs />}
//         {active === "contact" && <Contact />}
//       </div>
//       </div>
//       </div>
//       <Footer />
//     </main>
//   );
// }



import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Intro from "../components/Intro";
import IntroVideo from "../components/IntroVideo";
import ActionCards from "../components/ActionCards";
import Objective from "../components/Objective";

import About from "../sections/About";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import Blogs from "../sections/Blogs";
import Contact from "../sections/Contact";

import Footer from "../components/Footer";

export default function Home() {
  const [active, setActive] = useState(null);

  // 👇 track first click
  const hasScrolled = useRef(false);

  // 👇 container to scroll into view
  const contentRef = useRef(null);

  // 👇 inner scroll container
  const sectionRef = useRef(null);

  const handleTabChange = (tab) => {
    setActive(tab);

    // ✅ scroll only first time
    if (!hasScrolled.current && contentRef.current) {
      contentRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      hasScrolled.current = true;
    }
  };

  // reset inner scroll on tab change
  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [active]);

  const variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <main className="relative min-h-screen bg-white dark:bg-gray-900 transition-colors">
      
      {/* Hero */}
      <section className="flex flex-col items-center text-center px-6">
        <Intro />
        <IntroVideo />
        <Objective />
      </section>

      {/* Tabs */}
      <div className="sticky top-4 z-50">
        <ActionCards active={active} onSelect={handleTabChange} />
      </div>

      {/* 👇 SCROLL TARGET */}
      <div ref={contentRef} className="mt-6 h-[calc(100vh-240px)]">
        
        <div
          ref={sectionRef}
          className="h-full overflow-y-auto px-4"
        >
          <AnimatePresence mode="wait">
            {active && (
              <motion.div
                key={active}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.35 }}
              >
                {active === "me" && <About />}
                {active === "experience" && <Experience />}
                {active === "projects" && <Projects />}
                {active === "skills" && <Skills />}
                {active === "blog" && <Blogs />}
                {active === "contact" && <Contact />}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      <Footer />
    </main>
  );
}
