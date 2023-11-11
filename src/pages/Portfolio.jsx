import ProjectCard from "../components/ProjectCard";
import ProjectList from "../components/ProjectList";
const Portfolio = () => {
  console.log(ProjectList)

  const projectData = ProjectList.map((project) =>
    <ProjectCard key={project.id}
    imageSrc={project.imageSrc}
    title={project.title}
    deployedLink={project.deployedLink}
    githubRepo={project.githubRepo}
    
    />
)


  return (
    <>
      <div>
        <h1>Projects</h1>

        <div>
          {projectData}
        </div>
       
      


        {/* {ProjectList.map((project) => {
          <ProjectCard
            imageUrl={project.imageUrl}
            title={project.title}
            deployedLink={project.deployedLink}
            githubRepo={project.githubRepo}
          />;
        })} */}
      </div>
    </>
  );
};

export default Portfolio;
