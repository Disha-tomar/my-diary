import classes from "./Footer.module.css";
import linkedInIcon from "../../images/icon-linkedin.svg";
import githubIcon from "../../images/icon-github.svg";

const Footer = () => {
  return (
    <footer className={classes.footer} id="footer">
      <div className={classes["footer-container"]}>
        <h6>Contact Me</h6>
        <div className={classes["image-container"]}>
          <a href="https://www.linkedin.com/in/disha-tomar-714541100/">
            <img
              className={classes["linkedIn-icon"]}
              src={linkedInIcon}
              alt="ln icon"
            />
          </a>
          <a href="https://github.com/Disha-tomar/my-diary">
            <img
              className={classes["linkedIn-icon"]}
              src={githubIcon}
              alt="ln icon"
            />
          </a>
        </div>
        <div className={classes["copyright"]}>© 2022 Disha Tomar</div>
      </div>
    </footer>
  );
};

export default Footer;
