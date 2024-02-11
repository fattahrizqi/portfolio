import React from "react";
import { motion } from "framer-motion";

function HeroProjects() {
  return (
    <>
      <section className="flex max-h-[599px] bg-whiteRadial overflow-hidden">
        <motion.div initial={{ opacity: 0, bottom: -500 }} animate={{ opacity: 1, bottom: 0 }} transition={{ duration: 0.3 }} className="window-wrapper relative w-full my-[200px] p-8">
          <div className="window bg-semitransparent rounded-2xl max-w-[860px] mx-auto p-2">
            <div className="window-top-bezel bg-whiteLinear3 border-[1px] border-neutral-500 flex justify-center rounded-t-xl p-1">
              <div className="bg-neutral-800 xs:hidden w-3 h-3 rounded-full m-1"></div>
              <div className="bg-neutral-800 w-12 xs:w-4 h-3 xs:h-4 rounded-full m-1"></div>
              <div className="bg-neutral-800 xs:hidden w-3 h-3 rounded-full m-1"></div>
            </div>
            <div className="window-main bg-neutral-900 bg-whiteRadial min-h-[300px] border-[1px] border-neutral-500 flex">
              <h1
                className="text-3xl xs:text-4xl sm:text-5xl xm:text-[3.5rem] xl:text-6xl font-medium max-w-[740px] mx-10 sm:mx-12 mt-10 xs:mt-12 sm:mt-14 xm:mt-16 pt-2"
                style={{ textShadow: "0 5px 10px rgba(0, 87, 255, .15), 0 -5px 10px rgba(255, 90, 0, .1), 0 -5px 25px rgba(255, 255, 255, .3)" }}
              >
                I create designs and build website interfaces.
              </h1>
            </div>
          </div>
          <div className="w-full bg-smoothFadeLinear h-20 mt-[-4rem] z-10"></div>
        </motion.div>
      </section>
    </>
  );
}

export default HeroProjects;
