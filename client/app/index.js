import React from "react";
import {render} from "react-dom";
import TestLabel from "./label";


const containerEl = document.getElementById("container");

render(
  <TestLabel name="test name"/>,
  containerEl
);