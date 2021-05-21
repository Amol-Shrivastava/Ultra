import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "../createGlobalStyles";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
} from "./InfoSection.elements";

const InfoSection = ({
  lightBg,
  imgStart,
  lightTopLine,
  lightTextDesc,
  buttonLabel,
  description,
  heading,
  lightText,
  topLine,
  img,
  alt,
  start,
  odd,
}) => {
  return (
    <InfoSec lightBg={lightBg}>
      <Container>
        <InfoRow imgStart={imgStart}>
          <InfoColumn odd={odd}>
            <TextWrapper>
              <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
              <Heading lightText={lightText}>{heading}</Heading>
              <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
              <Link to="/sign-up">
                <Button big fontBig bg="#4b59f7" odd={odd}>
                  {buttonLabel}
                </Button>
              </Link>
            </TextWrapper>
          </InfoColumn>
          <ImgWrapper start={start}>
            <Img src={img} alt={alt} />
          </ImgWrapper>
        </InfoRow>
      </Container>
    </InfoSec>
  );
};

export default InfoSection;
