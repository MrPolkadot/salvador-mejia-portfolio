import "../styles/ProjectCard.css"


const ProjectCard = ({ imageSrc, title, deployedLink, githubRepo }) => {
  return (
    <>
      <div>
        <img className="project-img" src={imageSrc} alt="project-img" />
        <h2>{title}</h2>
        <a href={deployedLink}>View project</a>
        <a href={githubRepo}></a>
      </div>
    </>
  );
};

export default ProjectCard;
