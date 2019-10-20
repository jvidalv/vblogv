import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { THEMES } from "../constants/Themes";
import { Nav, Jumbotron } from "react-bootstrap";

export const HeroSectionStyled = styled.div`
  text-align: center;
  padding-top: 2em;
  background-color: #6bb756;
  background: linear-gradient(
    to right,
    ${props => THEMES[props.theme.style].header["1"]},
    ${props => THEMES[props.theme.style].header["2"]}
  );
  margin-bottom: 1em;
  padding-bottom: 6.5em;
  -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 65%, 50% 100%, 0 65%, 0 0);
  clip-path: polygon(50% 0%, 100% 0, 100% 65%, 50% 100%, 0 65%, 0 0);
`;

const rotateColors = keyframes`
    0% {
        filter: hue-rotate(0deg);
    }
    50% {
        filter: hue-rotate(360deg);
    }
`;

export const HeroImage = styled.img`
  animation: ${rotateColors} 15s linear infinite;
  @media (max-width: 992px) {
    width: 150px;
  }
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-family: "IBM Plex Mono";
  font-style: italic;
  text-shadow: 0 0 14px rgba(0, 0, 0, 0.28);
  @media (max-width: 600px) {
    font-size: 1.6rem;
  }
`;

export const HeroCategoryH1 = styled.h1`
  color: ${props => THEMES[props.theme.style].primary};
  font-family: "IBM Plex Mono";
  font-style: italic;
  font-size: 3.6rem;
`;

export const HeroP = styled.p`
  color: #fff;
  font-size: 1.2em;
`;
