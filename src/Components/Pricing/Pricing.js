import React from "react";
import PricingBox from "./PricingBox";
import {
  PricingContainer,
  PricingTitle,
  CardsContainer,
} from "./Pricing.elements";

const Pricing = ({ cardDetails }) => {
  const { card_One, card_Two, card_Three } = cardDetails;

  return (
    <PricingContainer>
      <PricingTitle>Our Services</PricingTitle>
      <CardsContainer>
        <PricingBox {...card_One} />
        <PricingBox {...card_Two} />
        <PricingBox {...card_Three} />
      </CardsContainer>
    </PricingContainer>
  );
};

export default Pricing;
