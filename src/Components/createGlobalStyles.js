import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap');
        font-family: 'Inter', sans-serif !important;
        font-size: 62.5%;
        overflow-x:hidden;
    }

    img{
        max-width: 100%;
        display: inline-block;
    }

    li{
        list-style: none;
    }

    a{
        text-decoration:none;
    }

`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  margin: 0 auto;
  padding: 0 50px;

  @media screen and (max-width: 990px) {
    padding: 0 30px;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ bg }) => bg};
  white-space: nowrap;
  color: #eee;
  font-size: 0.8rem;
  font-family: "Inter", sans-serif;
  padding: ${({ big }) => (big ? "12px 64px" : "0.4rem 1rem")};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: ${({ odd }) => (odd ? "#073294" : "#eee")};
    color: ${({ bg, odd }) => (odd ? "#eee" : bg)};
  }

  @media screen and (max-width: 960px) {
    font-size: ${({ fontBig }) => (fontBig ? "1.3rem" : "1.2rem")};
    width: 100%;
  }
`;

export const FooterButton = styled(Button)`
  background: #2332d6;
  color: "#eee";

  &:hover {
    background: #eee;
    color: #2332d6;
  }
`;
