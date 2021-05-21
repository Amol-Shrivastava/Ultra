import styled from "styled-components";

export const InfoSec = styled.div`
  color: #eee;
  padding: 4rem 0;
  background: ${({ lightBg }) => (lightBg ? "#eee" : "#101522")};
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const InfoColumn = styled.div`
  margin: 0 15px 15px;
  flex: 1;
  max-width: 42%;
  flex-basis: 50%;
  /* border: 1px solid pink; */

  @media (min-width: 1000px) {
    /* border: ${({ odd }) =>
      odd ? "3px solid orange" : "3px solid yellow"}; */
    margin-right: ${({ odd }) => (odd ? "0" : "10rem")};
    margin-left: ${({ odd }) => (odd ? "10rem" : "0")};
    padding-left: ${({ odd }) => (odd ? "0" : "5rem")};
  }

  @media screen and (max-width: 960px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
  }
`;

export const TextWrapper = styled.div`
  padding: 0 0 60px;
  /* border: 1px solid red; */
  @media (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? "#a9b3c1" : "#4b59f7")};
  font-size: 0.9rem;
  line-height: 1.4;
  letter-spacing: 1.2px;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 2rem;
  font-size: 48px;
  line-height: 1.15;
  color: ${({ lightText }) => (lightText ? "#f7f8f8" : "#1c2237")};
  max-width: 800px;
  @media (max-width: 960px) {
    font-size: 40px;
    line-height: 1.4;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 3.1rem;
  font-size: 1rem;
  line-height: 1.5;
  /* border: 1px solid brown; */
  color: ${({ lightTextDesc }) => (lightTextDesc ? "#a9b3c1" : "#1c2237")};
  @media (max-width: 960px) {
    text-align: center;
    margin: 0 auto 3.1rem;
    max-width: 455px;
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
  align-items: center;
  /* border: 2px solid green; */
  width: 100%;
  max-width: 422px;

  @media (min-width: 1000px) {
    max-width: calc(50% - 7rem);
    /* border: 1px solid #020101; */
  }
  @media (max-width: 960px) {
    max-width: 500px;
    margin: 0 auto;
  }
`;

export const Img = styled.img`
  padding-right: 0;
  display: inline-block;
  vertical-align: middle;
  /* border: 1px solid yellow; */
`;
