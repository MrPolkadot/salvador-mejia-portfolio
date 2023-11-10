import "../styles/About.css";

const About = () => {
  return (
    <>
      <section className="hero is-medium is-info">
        <div className="hero-body">
          <figure className="image is-128x128">
            <img
              className="profile-img is-rounded"
              src="./images/profile-image.jpeg"
              alt="profile-picture"
            />
          </figure>

          <h1 className="title">Welcome!</h1>
          <h2 className="subtitle">Portfolio of Salvador Mejia</h2>
          <p>
            Greetings! I’m Salvador Mejia, a dedicated web developer on a
            mission to transform ideas into engaging online realities. With a
            knack for coding, I bring a blend of technical expertise to every
            project. Explore my portfolio to discover the digital landscapes
            I’ve shaped, and let’s embark on the next exciting web adventure
            together.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
