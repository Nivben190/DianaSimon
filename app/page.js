import styles from "./index.module.css";
import Works from "./Works/page";
import Content from "../components/Content";
import { prisma } from "../server/client/db";
import { use } from "react";
const HomePage = () => {
  const getDatabase = async () => {
    const works = await prisma.workImage.findMany();
    return works;
  };
  const works = use(getDatabase());
  
  return <Works data={works} />;
};

export default HomePage;
