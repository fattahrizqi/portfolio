import { React, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { fattah } from "../assets";

function Education() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.5], [1200, 0]);
  return (
    <>
      <section ref={targetRef} className=" relative w-full h-[150vh]">
        <div className="wrapper sticky top-[30vh] max-w-[860px] flex gap-8 m-auto">
          <div className="image rounded-xl overflow-hidden self-start">
            <img src={fattah} alt="fattah" className="w-full h-full object-cover object-center" />
          </div>

          <motion.div style={{ y }} className="text relative">
            <h2>My background</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique a sed dolor dicta vitae aliquam, incidunt inventore nam fuga nulla, distinctio ullam et consequatur nostrum cum quia natus recusandae vel quos cumque possimus
              dignissimos, numquam molestias ipsum? Quibusdam qui vero quisquam maxime, doloribus atque illo ad! Iure non doloremque error tempore obcaecati, veniam mollitia itaque libero a quibusdam recusandae.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Education;