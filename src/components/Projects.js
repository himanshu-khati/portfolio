import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { PROJECT_DATA } from "../utils/constants";
const Projects = () => {
  const ref = useRef(null);

  return (
    <section ref={ref} id="projects">
      <div className=" py-4 px-4 md:p-16">
        <h2 className="text-center text-4xl font-bold text-gray-200 mt-4 mb-8 md:mb-12 ">
          My Projects
        </h2>
        <ul className="w-full flex flex-wrap">
          {PROJECT_DATA.map((data) => (
            <ProjectCard
              key={data.id}
              imgUrl={data.image}
              title={data.title}
              description={data.description}
              gitUrl={data.gitUrl}
              previewUrl={data.previewUrl}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
