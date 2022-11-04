import Image from "next/image";
import React from "react";
import styles from "./index.module.css";
import logo from "../../assets/images/dianalogo.png";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link className={styles.logo} href="/">
        <Image height={250} width={400} src={logo} alt="logo" />
      </Link>
      <div className={styles.navlinks}>
        <Link href="/">Home</Link>
        <Link href="/About">About</Link>
      </div>
    </div>
  );
};

export default Navbar;
