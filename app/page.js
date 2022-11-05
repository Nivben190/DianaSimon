"use client";

import styles from "./index.module.css";
import React from "react";
import { useState } from "react";
import Works from "./Works/page";
import Content from "../components/Content";

const HomePage = () => {
  return (
    // <div className={styles.mainDiv}>
    //   <div className={styles.worksDiv}>
    //     <Grid container align="center">
    //       {Array.from(Array(50)).map((i,index) => {
    //         return (
    //           <Grid item sm={6} md={4} key={index}>
    //            <Link href={`/works/${index}`}>
    //            <div
    //               id={index}
    //               style={{
    //                 width: "276px",
    //                 height: "272px",
    //                 background: "red",
    //                 marginTop: "50px",
    //                 cursor: "pointer",
    //               }}
    //             ></div>
    //            </Link>
                
    //           </Grid>
    //         );
    //       })}
    //     </Grid>
    //   </div>
    // </div>
     <Works />
  );
};

export default HomePage;
