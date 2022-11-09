import { use } from "react";
import { getData } from "../db/db";
import Works from "./Works/page";
const HomePage = () => {
    const getDateFromDb = async () => {
        const data = await getData();
        return data;
    };
     const data = use(getDateFromDb());
  return <Works data={data} />;
};

export default HomePage;
