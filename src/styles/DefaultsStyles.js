import React from "react";
import styled from "styled-components";
import { THEMES } from "../constants/Colors";

/**
 * -------
 * In this file we define group of rules that are common on many styled components classes
 * -------
 */

export const fontsDefaults = props => {
  let stylesString = "";
  stylesString += "italic" in props ? "font-style : italic;" : "";
  stylesString += "fontPlex" in props ? "font-family : 'IBM Plex Mono';" : "";
  stylesString +=
    "fontSize" in props ? "font-size : " + props.fontSize + ";" : "";

  return stylesString;
};

export const afterBottomBar = props => {
  let stylesString = "";
  if ("bottomBar" in props) {
    stylesString += `
    width: 2.5rem;
    height: 2px;
    background: ${THEMES[props.theme.style].secondary};
    content: " ";
    display: block;
    margin: 0px auto;
    position: relative;
    top: 1rem;
    `;
  }
  return stylesString;
};
