import React, { useState } from "react";
import classes from "./footer.module.css";
import About from "../About/About";
import Modal from "../Modal/Modal";
import { useLanguage } from "../../utils/LanguageContext";
const Footer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { getTranslation } = useLanguage();

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
      ) : null}
      <div className={classes.footerContent}>
        <button className={classes.footerAboutButton} onClick={openAboutModal}>
          {getTranslation("aboutLink")}
        </button>
        <div className={classes.footerAboutApp}>
          <p className={classes.footerAboutAppName}>BJJ-Scorekeeper</p>
          <p className={classes.footerAboutAppVersion}>v1.0.0</p>
          <p className={classes.footerAboutAppYear}>2025</p>
        </div>
        <div className={classes.footerLicense}>
          <p className={classes.footerLicenseText}>
            {getTranslation("license")}
            <a
              className={classes.footerLicenseTextLink}
              href="https://opensource.org/licenses/MIT"
              target="_blank"
            >
              {getTranslation("licenseMore")}
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
