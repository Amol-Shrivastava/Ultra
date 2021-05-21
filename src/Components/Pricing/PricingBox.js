import React from "react";
import {
  PricingBoxCont,
  BoxIcon,
  BoxHeading,
  BoxPrice,
  BoxPriceDuration,
  BoxDescription,
  BoxDetails,
  PriceButton,
} from "./Pricing.elements";

import { GiStoneBlock, GiGoldBar, GiCutDiamond } from "react-icons/gi";

const PricingBox = ({
  cardId,
  cardTitle,
  cardPrice,
  cardDuration,
  cardUsers,
  cardBudget,
  cardAnalytics,
}) => {
  return (
    <>
      <PricingBoxCont>
        <BoxIcon>
          {cardId === 1 ? (
            <GiStoneBlock />
          ) : cardId === 2 ? (
            <GiGoldBar />
          ) : cardId === 3 ? (
            <GiCutDiamond />
          ) : (
            ""
          )}
        </BoxIcon>
        <BoxHeading>{cardTitle}</BoxHeading>
        <BoxPrice>{cardPrice}</BoxPrice>
        <BoxPriceDuration>{cardDuration}</BoxPriceDuration>
        <BoxDescription>
          <BoxDetails>{cardUsers}</BoxDetails>
          <BoxDetails>{cardBudget}</BoxDetails>
          <BoxDetails>{cardAnalytics}</BoxDetails>
        </BoxDescription>
        <PriceButton>Choose Plan</PriceButton>
      </PricingBoxCont>
    </>
  );
};

export default PricingBox;
