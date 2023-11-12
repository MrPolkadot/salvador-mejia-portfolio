import "../styles/Portfolio.css";

const ProjectCard = ({ imageSrc, title, deployedLink, githubRepo }) => {
  return (
    <div className="column is-5 is-8-mobile project-card">
      <div className="card cardz">
        <a href={deployedLink} target="_blank">
        <div className="card-image">
          <figure>
            <img className="project-img" src={imageSrc} alt="project-img" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media-content">
            <h2 className="title is-4 has-text-centered">{title}</h2>
          </div>
        </div>
          <div className="content has-text-centered is-flex is-justify-content-space-around pb-2">
            <button className="button is-success">
          <a className="has-text-white is-size-6 has-text-weight-bold" href={deployedLink} target="_blank">View project</a></button>
          <a href={githubRepo} alt="Github repo link"><i className="fa-brands fa-github fa-2xl" style={{color: "#b8c5db"}}></i></a>
          </div>
          </a>
      </div>
      </div>
  );
};

export default ProjectCard;
