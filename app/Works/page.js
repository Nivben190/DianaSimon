"use client";
import React from 'react'
import styles from "./index.module.css";
import { Grid } from "@mui/material";
import Link from "next/link";
const Works = () => {
  const Works=Array.from(Array(50)).map((i,index) => {
    return (
      <Grid item sm={6} md={4} key={index}>
       <Link href={`/Works/${index}`}>
       <div
          id={index}
          style={{
            width: "276px",
            height: "272px",
            background: "red",
            marginTop: "50px",
            cursor: "pointer",
          }}
        ></div>
       </Link>
        
      </Grid>
    );
  
    
  }
  )
  return (
    <div className={styles.mainDiv}>
      <div className={styles.worksDiv}>
        <Grid container align="center">
          {Works}
        </Grid>
      </div>
    </div>
  )
}

export default Works
