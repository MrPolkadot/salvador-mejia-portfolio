const Footer = () => {
  return (
    <footer className="has-text-centered mt-auto">
      <div className="">
       
        <div className="is-flex is-justify-content-space-evenly">
        <a href="https://github.com/MrPolkadot" target="_blank">
          <i className="fa-brands fa-github fa-2xl"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/salvador-mejia-579785231/"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin fa-2xl"></i>
        </a>
        <a href="mailto:ceballos93@gmail.com">
          <i className="fa-solid fa-envelope fa-2xl"></i>
        </a>
        </div>
        <p className="is-size-7 mt-4">Powered with <strong>React</strong> </p>
        <a href="https://bulma.io">
  <img
    src="https://bulma.io/images/made-with-bulma.png"
    alt="Made with Bulma"
    width="100"
    height="24" />
</a>
      </div>
    </footer>
  );
};

export default Footer;
