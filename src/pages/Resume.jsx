import Navigation from "../components/Navigation";
import "../styles/Resume.css";

const Resume = () => {
  return (
    <div>
      <Navigation />
      <div>
        <h1 className="has-text-centered mb-6 is-size-3 has-text-white">
          Resume
        </h1>
       
      </div>
      <section className="list">
        <div>
          <ul className="has-text-white is-size-4 fa-ul">
            Front-End Proficiencies:
          </ul>
          <li>
            <span>
              <i class="fa-solid fa-bug-slash" style={{ color: "#2ce2ac" }}></i>
            </span>
            HTML
          </li>
          <li>
            <span>
              <i class="fa-solid fa-bug-slash" style={{ color: "#2ce2ac" }}></i>
            </span>
            CSS(Bulma, Tailwind)
          </li>
          <li>
            <span>
              <i class="fa-solid fa-bug-slash" style={{ color: "#2ce2ac" }}></i>
            </span>
            JAVASCRIPT
          </li>
          <li>
            <span>
              <i class="fa-solid fa-bug-slash" style={{ color: "#2ce2ac" }}></i>
            </span>
            JQUERY
          </li>
          <li>
            <span>
              <i class="fa-solid fa-bug-slash" style={{ color: "#2ce2ac" }}></i>
            </span>
            NODE.JS
          </li>
          <li>
            <span>
              <i class="fa-solid fa-bug-slash" style={{ color: "#2ce2ac" }}></i>
            </span>
            HANDLEBARS
          </li>
          <li>
            <span>
              <i class="fa-solid fa-bug-slash" style={{ color: "#2ce2ac" }}></i>
            </span>
            REACT
          </li>
        </div>

        <div>
          <ul className="has-text-white is-size-4">Back-end Proficiencies:</ul>

          <li>
            <span>
              <i class="fa-solid fa-bug-slash" style={{ color: "#2ce2ac" }}></i>
            </span>
            EXPRESS.JS
          </li>
          <li>
            <span>
              <i class="fa-solid fa-bug-slash" style={{ color: "#2ce2ac" }}></i>
            </span>
            MYSQL
          </li>
          <li>
            <span>
              <i class="fa-solid fa-bug-slash" style={{ color: "#2ce2ac" }}></i>
            </span>
            MONGODB
          </li>
          <li>
            <span>
              <i class="fa-solid fa-bug-slash" style={{ color: "#2ce2ac" }}></i>
            </span>
            APOLLO GRAPHQL
          </li>
        </div>
       
       
      </section>
      <div className="download">
        <button className=" button has-background-success">
          <a
            className="has-text-link-dark gap-is-2"
            href="public/resume/Resume-Salvador-Mejia.pdf"
            download
          >
            Download Resume
          </a>
          <i className="icon fa-solid fa-circle-down"></i>
        </button>
        </div>
    </div>
  );
};

export default Resume;
