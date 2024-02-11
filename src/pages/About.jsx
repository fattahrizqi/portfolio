import { React, useRef } from "react";
import { Cursor, Education, Introduction } from "../components";
import { motion, useScroll, useTransform } from "framer-motion";

function About() {
  // framer motion
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 1 ? "relative" : "fixed";
  });

  return (
    <>
      {/* cursor */}
      <Cursor />
      {/* main */}
      <motion.section style={{ opacity }} ref={targetRef} className="relative h-screen w-full flex flex-col items-center bg-whiteRadial py-20 overflow-hidden">
        <motion.div initial={{ opacity: 0, scale: 0.3 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }} style={{ scale, x: "-50%", y: "-50%", position }} className="top-1/2 left-1/2">
          <h1>About me.</h1>
        </motion.div>
        <motion.div style={{ scale }} className="image fixed bottom-10 w-24 opacity-50">
          <img src="https://images.squarespace-cdn.com/content/v1/5edf2d43ee75f35231fdbea8/1591798673806-P7OQRYRY3Y9ZESJ7JDR0/Scroll-White-1.gif" className="w-full h-full" />
        </motion.div>
        {/* <div className="w-full bg-smoothFadeLinear h-20 mt-[-4rem]"></div> */}
      </motion.section>

      <Introduction />
      <Education />
    </>
  );
}

export default About;
