import styled from "styled-components";

export const PricingContainer = styled.section`
  /* border: 3px solid yellow; */
  background: hsla(225, 93%, 24%, 1);

  background: linear-gradient(
    90deg,
    hsla(225, 93%, 24%, 1) 0%,
    hsla(244, 70%, 51%, 1) 100%
  );

  background: -moz-linear-gradient(
    90deg,
    hsla(225, 93%, 24%, 1) 0%,
    hsla(244, 70%, 51%, 1) 100%
  );

  background: -webkit-linear-gradient(
    90deg,
    hsla(225, 93%, 24%, 1) 0%,
    hsla(244, 70%, 51%, 1) 100%
  );

  padding: 2.7rem 0 2rem;

  text-align: center;
`;

export const PricingTitle = styled.h2`
  font-size: 2rem;
  color: #eee;
  font-weight: normal;
`;

export const CardsContainer = styled.div`
  /* border: 2px solid orange; */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 320px));
  align-items: center;
  justify-content: center;
  grid-gap: 2.5rem;
  margin: 2rem;

  @media (max-width: 720px) {
    grid-gap: 0.8rem;
  }
`;

export const PricingBoxCont = styled.div`
  /* border: 2px solid green; */
  background: #101522;
  color: #eee;

  display: flex;
  flex-direction: column;

  padding: 2rem 0;

  transition: transform 0.3s ease;
  transform: scale(1);

  &:hover {
    transform: scale(1.05);
  }

  margin: 2rem 0;
`;

export const BoxIcon = styled.span`
  font-size: 4rem;
  color: #909191;
`;

export const BoxHeading = styled.h3`
  margin: 1.2rem 0 0.7rem;
  font-size: 0.8rem;
  font-weight: normal;

  @media (max-width: 860px) {
    font-size: 1rem;
  }
`;

export const BoxPrice = styled.p`
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: -140%;

  @media (max-width: 860px) {
    font-size: 2.2rem;
  }
`;

export const BoxPriceDuration = styled.small`
  margin: 0.2rem 0 1rem 0;
  font-size: 0.6rem;
  color: #eee;

  @media (max-width: 860px) {
    font-size: 0.8rem;
  }
`;

export const BoxDescription = styled.div`
  margin: 1.8rem 0 1.1rem;
`;

export const BoxDetails = styled.p`
  font-size: 0.7rem;
  color: #a3a1a1;
  line-height: 1.7rem;

  @media (max-width: 860px) {
    font-size: 0.76rem;
  }
`;

export const PriceButton = styled.button`
  display: inline-block;
  padding: 1.1rem 2.2rem;
  height: 1.2rem;
  margin: 2rem auto;
  border-radius: 7px;
  cursor: pointer;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  background: #2332d6;
  color: #eee;
  font-size: 1rem;

  transition: all 0.3s ease;

  &:hover {
    background: #eee;
    color: #2332d6;
  }
`;
