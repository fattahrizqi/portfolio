import React from "react";
import { ArrowRight } from "@phosphor-icons/react";
import { projects } from "../constants";
import { motion } from "framer-motion";

function ProjectLists() {
  return (
    <>
      <img src="https://images.squarespace-cdn.com/content/v1/5edf2d43ee75f35231fdbea8/1591798673806-P7OQRYRY3Y9ZESJ7JDR0/Scroll-White-1.gif" className="w-24 opacity-70 m-auto mt-[-5rem]" />
      <section className="projects my-20">
        <div className="projects-wrapper w-full flex flex-col items-center gap-14">
          {/* project */}
          {projects.map((project, id) => (
            <motion.div key={id} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }} className="project-bezel link bg-semitransparent rounded-3xl max-w-[860px] cursor-pointer p-2 mx-8">
              <div className="project relative group border-[1px] border-neutral-500 rounded-2xl overflow-hidden p-8 pb-0 ">
                <div className="bg-color absolute top-0 left-0 w-full h-full bg-cardHover opacity-0 hover:opacity-100 transition-all duration-200  ease-in"></div>
                {/* heading text */}
                <div className="text flex justify-between">
                  <div>
                    <h className="text-2xl font-semibold leading-10">{project.title}</h>
                    <p className="text-gray-400">
                      {project.year} - {project.desc}
                    </p>
                  </div>
                  <div className="arrow group-hover:mr-[-.4rem] mt-2 transition-all delay-200 duration-200 ease-in">
                    <ArrowRight size={28} />
                  </div>
                </div>

                {/* project image */}
                <div className="img max-h-[400px] group-hover:max-h-[424px] group-hover:mt-6 group-hover:shadow-2xl rounded-t-2xl overflow-hidden mt-12 mx-8 mb-0 transition-all delay-100 duration-300 ease-in">
                  <img src={project.image} alt="project preview" className="w-full object-cover" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

export default ProjectLists;
