import ProjectCard from "../components/ProjectCard";
import ProjectList from "../components/ProjectList";
import Navigation from "../components/Navigation";

import "../styles/Portfolio.css";

const Portfolio = () => {
  console.log(ProjectList);

  const projectData = ProjectList.map((project) => (
    <ProjectCard
      key={project.id}
      imageSrc={project.imageSrc}
      title={project.title}
      deployedLink={project.deployedLink}
      githubRepo={project.githubRepo}
    />
  ));

  return (
    <>
      <Navigation />
    <h1 className="has-text-centered mb-6 is-size-3 has-text-white">Projects</h1>
    <div className="columns projects-layout">
    {projectData}
      </div>
      </>
  );
};

export default Portfolio;
