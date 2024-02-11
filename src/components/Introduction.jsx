import { React, useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { fattah } from "../assets";

function Introduction() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 0.5], [1500, 0]);

  return (
    <section ref={targetRef} className="relative w-full xm:h-[200vh]">
      <div className="wrapper sticky top-0 xm:top-[30vh] max-w-[860px] flex flex-col-reverse sm:flex-row sm:items-center gap-8 m-auto xm:mb-60 p-8">
        {/* framer motion on */}
        <motion.div id="text-intro" style={{ y }} className="text relative hidden xm:block">
          <span className="hidden sm:inline bg-semitransparent text-sm text-neutral-400 rounded-full border border-[rgba(255,255,255,0.1)] py-2 px-4">Who am I ?</span>
          <h2 className="mt-6">M Fattah Rizqi</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique a sed dolor dicta vitae aliquam, incidunt inventore nam fuga nulla, distinctio ullam et consequatur nostrum cum quia natus recusandae vel quos cumque possimus
            dignissimos, numquam.
          </p>
        </motion.div>

        {/* framer motion off */}
        <div id="text-intro" className="text relative flex-auto block xm:hidden">
          <span className="hidden sm:inline bg-semitransparent text-sm text-neutral-400 rounded-full border border-[rgba(255,255,255,0.1)] py-2 px-4">Who am I ?</span>
          <h2 className="text-[2.5rem] sm:text-3xl xm:text-5xl mt-0 sm:mt-6 mb-2">M Fattah Rizqi</h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique a sed dolor dicta vitae aliquam, incidunt inventore nam fuga nulla, distinctio ullam et consequatur nostrum cum quia natus recusandae vel quos cumque possimus
            dignissimos, numquam.
          </p>
        </div>

        <div className="image sm:max-w-[300px] xm:max-w-[350px] rounded-xl flex-auto overflow-hidden self-start">
          <img src={fattah} alt="fattah" className="w-full h-full object-cover object-center" />
        </div>
      </div>
    </section>
  );
}

export default Introduction;
