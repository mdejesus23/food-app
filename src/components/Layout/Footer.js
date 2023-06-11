import React from "react";

import classes from "./Footer.module.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <p>
        <span>&copy;</span>
        <span>melnerdz.com</span>
      </p>
    </footer>
  );
};

export default Footer;
