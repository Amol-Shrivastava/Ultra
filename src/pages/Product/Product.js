import React from "react";
import Pricing from "../../Components/Pricing/Pricing";
import { cardOne, cardTwo, cardThree } from "./data";

const Product = () => {
  const cardDetails = {
    card_One: cardOne,
    card_Two: cardTwo,
    card_Three: cardThree,
  };

  return (
    <>
      <Pricing cardDetails={cardDetails} />
    </>
  );
};

export default Product;
