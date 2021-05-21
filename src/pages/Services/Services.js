import React from "react";
import InfoSection from "../../Components/InfoSection/InfoSection";
import { homeObjTwo, homeObjThree, homeObjFour } from "./data";

const Services = () => {
  return (
    <>
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
    </>
  );
};

export default Services;
