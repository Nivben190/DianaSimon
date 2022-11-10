"use client";
import React, { useEffect } from "react";
import styles from "./index.module.css";
import { Grid } from "@mui/material";
import Image from "next/image";
const Works = ({ data }) => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.worksDiv}>
        <Grid
          container
          spacing={2}
          align="center"
          alignContent={"center"}
          alignSelf={"center"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          {data&&Array.from(data).map((work, index) => {
            return (
              <Grid item xs={6} sm={6} md={4} lg={4} key={index}>
                <Image
                  className={styles.img}
                  src={work.imgUrl}
                  width={276}
                  height={272}
                  alt="work of diana shimon"
                />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default Works;
