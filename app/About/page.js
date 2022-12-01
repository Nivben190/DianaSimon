import Image from "next/image";
import React from "react";
import styles from "./index.module.css";
import leftPic from "../../assets/images/leftpic.png";
import rightPic from "../../assets/images/rightpic.jpg";
export default function AboutPage() {
  return (
    <div className={styles.aboutPageDiv}>
      <Image className={styles.leftPic} alt="picture of drawing" width={300} height={400} src={leftPic} />
      <div className={styles.mainDiv}>
        <h3>About</h3>
        <p>
         Hi! My name is Diana Shimon.
          <br />
          I am an artist, illustrator and book designer from Rechovot, Israel
          Please contact me for cooperation; dianashimon@gmail.com
        </p>
        <h3>Short Biography</h3>
        <p>
         1967 - Was born in Tbilisi, Georgia
          <br />
          1990 - Immigrated to Israel
          <br />
          1993 - 1996 Graduate of Avni Institute of fine Art in Old Jaffa, Israel
          <br />
          2006- Graphic designer course in Mentor, School of Graphic Design., Tel Aviv.
        </p>
        <h3>Exhibitions</h3>
        <p>
        2019 -  Solo exhibition, Tel Aviv. Israel.
          <br />
          2021 – Arte Padova Fiere, Italy
          <br />
          2022 – Art one piece collection, Galleria &ldquo;Il Collezionosta&ldquo;, Rome, Italy
          <br />
          2022 – &ldquo;Touching colors&ldquo;, ZOA House, Israel
          <br />
          2022 Mini Print, Lessedra Gallery, Bulgaria
        </p>
        <h3>Awards</h3>
        <p>
        2010 – St. Gabriel Award and first place for the most beautiful stamp in the religion category (Verona, Italy)
        </p>
      </div>
      <Image  className={styles.rightPic}  alt="picture of drawing" width={300} height={400} src={rightPic} />
    </div>
  );
}
