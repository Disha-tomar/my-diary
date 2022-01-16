import classes from "./Footer.module.css";
import linkedInIcon from "../../images/icon-linkedin.svg";
import githubIcon from "../../images/icon-github.svg";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes["footer-container"]}>
        <h6>Contact Me</h6>
        <div className={classes["image-container"]}>
          <img
            className={classes["linkedIn-icon"]}
            src={linkedInIcon}
            alt="ln icon"
          />
          <img
            className={classes["linkedIn-icon"]}
            src={githubIcon}
            alt="ln icon"
          />
        </div>
        <div className={classes["copyright"]}>© 2021 Disha Tomar</div>
      </div>
    </footer>
  );
};

export default Footer;

<img />;
