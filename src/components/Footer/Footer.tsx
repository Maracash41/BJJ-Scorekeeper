import React, { useState } from "react";
import classes from "./footer.module.css";
import githubLogo from "../../assets/github_logo.png";
import About from "../About/About";
import Modal from "../Modal/Modal";
const Footer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const openAboutModal = () => {
    setIsModalOpen(true);
  };

  return (
    <footer className={classes.footer}>
      {isModalOpen ? (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <About />
        </Modal>
      ) : (
        ""
      )}
      <div className={classes.footerContent}>
        <div className={classes.footerAuthor}>
          <a
            href="https://github.com/Maracash41"
            className={classes.footerAuthorLink}
          >
            <img src={githubLogo} alt="" className={classes.footerAuthorIcon} />
          </a>
        </div>
        <button className={classes.footerAboutButton} onClick={openAboutModal}>
          About App
        </button>
        <div className={classes.footerAboutApp}>
          <p className={classes.footerAboutAppName}>BJJ-Scorekeeper</p>
          <p className={classes.footerAboutAppVersion}>v1.0.0</p>
          <p className={classes.footerAboutAppYear}>2024</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
