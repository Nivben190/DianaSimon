import Image from "next/image";
import React from "react";
import styles from "./index.module.css";
import leftPic from "../../assets/images/leftAboutPic.jpeg";
import rightPic from "../../assets/images/rightPic.jpeg";
export default function AboutPage () {
  return (
    <div className={styles.aboutPageDiv}>
       <Image alt="pic" width={300} height={400} src={leftPic}/>
      <div className={styles.mainDiv}>
        <h3>About</h3>
        <p>
          Hi! I am Diana, a Rehovot based illustrator and designer.
          <br />
          Email me at <strong>nuritillus.91@gmail.com</strong> for collaborations and projects.
        </p>
        <h3>Worked with</h3>
        <p>
          Dot Magazine, The Train Theatre, Adam Tzair magazine,
          <br />
          PLANSPONSOR magazine, Zeltner publishing house, Enayim magazine,
          Liberal,
          <br />
          Alefalefalef Magazine.
        </p>
        <h3>Exhibitions</h3>
        <p>
          2022 ‘follow the sun’, outline Jerusalem, Israel
          <br />
          2021 ‘Half of a Winning Horse‘, Israel.
          <br />
          2020 Tel Aviv Illustration Week, Israel.
          <br />
          2020 outline festival , Jerusalem, Israel.
        </p>
        <h3>Awards</h3>
        <p>
          2022 3x3 Merit, Profession show.
          <br />
          2019 Yossi Stern Award for High Achievement in Illustration.
        </p>
        <h3>Education</h3>
        <p>B.Des. Bezalel Academy.</p>
      </div>
      <Image alt="pic" width={300} height={300} src={rightPic}/>
    </div>
  );
};


