import styled from "styled-components";
import { Link } from "react-router-dom";

import { FaMagento } from "react-icons/fa";

export const FooterContainer = styled.footer`
  background: #101522;
  padding: 4rem 0 0 0;
  display: flex;
  flex-direction: column;
  /*justify-content: center;
  align-items: center; */
`;
export const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 2rem;
  padding: 2rem;
  margin-right: 0.3rem;
  color: #eee;
  /* border: 2px solid green; */
`;
export const FooterSubHeading = styled.p`
  margin-bottom: 2rem;
  font-size: 1.4rem;
  /* border: 2px solid green; */
`;

export const FooterSubText = styled.p`
  color: #a8a7a7;
  margin-bottom: 2rem;
  font-size: 0.8rem;
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  max-width: 900px;
  justify-content: center;
  align-items: center;
  /* border: 2px solid yellow; */

  @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 80%;
  }
`;

export const FormInput = styled.input`
  padding: 10px 20px;
  border-radius: 2px;
  margin-right: 10px;
  outline: none;
  font-size: 1.2rem;
  border: 1px solid #eee;
  width: 100%;
  &::placeholder {
    color: #242424;
  }

  @media (max-width: 960px) {
    margin: 0 0 16px 0;
  }
`;

export const FooterLinksContainer = styled.div`
  width: 100%;
  margin: 3rem 0 0;
  /* justify-content: center; */
  /* border: 2px solid yellow; */

  @media (max-width: 820px) {
    padding-top: 2.5rem;
  }
`;
export const FooterLinksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1rem;
  text-align: center;
  margin-bottom: 2rem;
  @media (max-width: 850px) {
    padding-top: 4rem;
    border-top: 2px solid #8d8686;
  }
`;

export const FooterLinksItems = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  margin-bottom: 1.1rem;
  color: #eee;
  /* border: 1px solid green; */
  @media (min-width: 900px) {
    &:not(:last-child) {
      border-right: 1px solid #797575;
    }
  }

  @media (max-width: 600px) {
    margin: 0;
    padding: 10px;
    text-align: center;
    border-bottom: 1px solid #797575;
  }
`;
export const FooterLinkTitle = styled.h2`
  margin-bottom: 1.1rem;
  font-weight: bold;
  font-size: 1.2rem;
`;

export const FooterLinks = styled(Link)`
  color: #9e9c9c;
  text-decoration: none;
  font-size: 0.72rem;
  margin-bottom: 0.5rem;
  display: inline-block;

  &:hover {
    color: #0467fb;
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1200px;
  border-top: 1px solid #9c9c9c;
  /* border: 2px solid yellow; */
  width: 100%;
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1200px;
  margin: 50px auto 0;
  /* border: 2px solid blue; */

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #eee;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  align-items: center;
  /* margin-bottom: 1.1rem; */
  @media (max-width: 960px) {
    margin-bottom: 2rem;
  }
`;

export const SocialIcon = styled(FaMagento)`
  font-size: 1.4rem;
  margin-right: 0.2rem;
`;

export const CompName = styled.span`
  font-size: 1.4rem;
`;

export const SocialIconLink = styled.div`
  /* border: 2px solid orange; */
  font-size: 1.22rem;
  color: #aaa9a9;
  cursor: pointer;

  &:hover {
    color: #eee;
  }
`;

export const WebsiteRights = styled.small`
  color: #969191;
  /* margin-bottom: 1.1rem; */
  @media (max-width: 960px) {
    margin-bottom: 2rem;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  /* border: 2px solid green; */
`;
