import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { FooterButton } from "../createGlobalStyles";
import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  FooterSubText,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterLinksItems,
  FooterLinks,
  SocialMedia,
  SocialMediaWrapper,
  SocialLogo,
  SocialIcon,
  SocialIconLink,
  WebsiteRights,
  SocialIcons,
  CompName,
} from "./Footer.elements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Join our exclusive membership to receive the latest news and trends
        </FooterSubHeading>
        <FooterSubText>You can unsubscribe at any time.</FooterSubText>

        <Form>
          <FormInput
            name="email"
            type="email"
            placeholder="Your email address"
          />
          <FooterButton fontBig>Subscribe</FooterButton>
        </Form>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLinks to="/sign-up">How it works</FooterLinks>
              <FooterLinks to="/">Testimonials</FooterLinks>
              <FooterLinks to="/">Careers</FooterLinks>
              <FooterLinks to="/">Investors</FooterLinks>
              <FooterLinks to="/">Terms of Service</FooterLinks>
            </FooterLinksItems>

            <FooterLinksItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLinks to="/sign-up">How it works</FooterLinks>
              <FooterLinks to="/">Testimonials</FooterLinks>
              <FooterLinks to="/">Careers</FooterLinks>
              <FooterLinks to="/">Investors</FooterLinks>
              <FooterLinks to="/">Terms of Service</FooterLinks>
            </FooterLinksItems>

            <FooterLinksItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLinks to="/sign-up">How it works</FooterLinks>
              <FooterLinks to="/">Testimonials</FooterLinks>
              <FooterLinks to="/">Careers</FooterLinks>
              <FooterLinks to="/">Investors</FooterLinks>
              <FooterLinks to="/">Terms of Service</FooterLinks>
            </FooterLinksItems>

            <FooterLinksItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLinks to="/sign-up">How it works</FooterLinks>
              <FooterLinks to="/">Testimonials</FooterLinks>
              <FooterLinks to="/">Careers</FooterLinks>
              <FooterLinks to="/">Investors</FooterLinks>
              <FooterLinks to="/">Terms of Service</FooterLinks>
            </FooterLinksItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrapper>
            <SocialLogo to="/">
              <SocialIcon />
              <CompName>ULTRA</CompName>
            </SocialLogo>

            <WebsiteRights>ULTRA &copy; 2021</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebookF />
              </SocialIconLink>

              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>

              <SocialIconLink
                href="/"
                target="_blank"
                aria-label="Youtube"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </SocialIconLink>

              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrapper>
        </SocialMedia>
      </FooterSubscription>
    </FooterContainer>
  );
};

export default Footer;
