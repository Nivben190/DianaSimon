"use client";
import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
const ClickedPictured = (props) => {
  const router = useRouter();

  return (
    <div>
      {props.title}

      <Image src={props.src} alt={props.alt} />
    </div>
  );
};

export default ClickedPictured;
