const Footer = () => {
  return (
    <footer className="has-text-centered is-flex-align-items-flex-end mt-auto">
      <div>
        <p>Powered with React and styled with Bulma</p>
        <a href="https://github.com/MrPolkadot" target="_blank">
          <i className="fa-brands fa-github fa-2xl"></i>
        </a>&nbsp;
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
    </footer>
  );
};

export default Footer;
