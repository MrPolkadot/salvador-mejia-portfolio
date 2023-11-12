import "../styles/About.css";
import Navigation from "../components/Navigation";


const About = () => {
  return (
    <>
    <Navigation />
    <div className="background-img">
      <section className="hero is-medium">
        <div className="hero-body is-flex is-flex-direction-column is-align-items-center">
          <figure className="image">
            <img
              className="profile-img is-rounded"
              src="/images/profile-image.jpeg"
              alt="profile-picture"
            />
          </figure>
          <div className="has-text-white about-box is-size-4">
          <h1 className="title has-text-white has-text-centered ">Welcome!</h1>
          <p>
            Greetings! I’m Salvador Mejia, a dedicated web developer on a
            mission to transform ideas into engaging online realities. With a
            knack for coding, I bring a blend of technical expertise to every
            project. Explore my portfolio to discover the digital landscapes
            I’ve shaped, and let’s embark on the next exciting web adventure
            together.
          </p>
        </div>
          
        </div>
      </section>
      <br />
      </div>
      </>
  );
};

export default About;
