import React from "react";
import InfoSection from "../../Components/InfoSection/InfoSection";
import Product from "../Product/Product";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Product />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
    </>
  );
};

export default Home;
