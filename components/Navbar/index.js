'use client'
import Image from "next/image";
import React from "react";
import styles from "./index.module.css";
import logo from "../../assets/images/dianalogo.png";
import Link from "next/link";
import { Navbar ,Container,Nav} from "react-bootstrap";
const MyNavbar = () => {
  return (
     <Navbar className={styles.navbar} expand="sm">
  <Container>
    <Navbar.Brand href="/" className={styles.logo}>
      <Image className={styles.imgLogo} src={logo} width={500} alt="diana shimon logo" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.manu} />
    <Navbar.Collapse  id="basic-navbar-nav" >
 <Nav className={styles.navlinks} >
        <div className={styles.border}></div>
        <Link  className={styles.link} href="/">Home</Link>
        <Link className={styles.link} href="/About">About</Link>
        </Nav>        
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
};

export default MyNavbar;
