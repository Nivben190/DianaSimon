import Image from "next/image";
import React from "react";
import styles from "./index.module.css";
import logo from "../../assets/images/dianalogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <a href="https://www.facebook.com/DianaShimonArtistAndIllustrator/">
        <FontAwesomeIcon
        className={styles.facebook}
          icon={faFacebook}
          style={{
            width: "30px",
            position: "absolute",
            right: "30px",
            marginTop: "4%",
            cursor: "pointer",
          }}
        />
      </a>
      <a href="https://www.instagram.com/shimon_diana/">
        <FontAwesomeIcon
          className={styles.instegram}
          icon={faInstagram}
          style={{
            width: "30px",
            position: "absolute",
            right: "100px",
            marginTop: "4%",
            cursor: "pointer",
          }}
        />
      </a>

      <Image
        src={logo}
        width={200}
        height={200}
        className={styles.logo}
        alt="Diana Shimon Logo "
      />
    </div>
  );
};

export default Footer;
