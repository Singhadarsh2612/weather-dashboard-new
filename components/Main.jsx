import React from "react";
import TypingEffect from "../components/TypingEffect";
import LeftText from "../components/LeftText";
import RightText from "../components/RightText";
import RightButton from "./RightButton";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Weather from "./Weather";
function Main() {
  return (
    <div className="parent">
      <div className="Left moving-background">
        <TypingEffect
          text="WWelcome to the Weather Dashboard!"
          speed={100}
          pauseDuration={10000}
        />
        <LeftText />
      </div>
      <div className="Right">
        <RightText />
        <RightButton />
      </div>
    </div>
  );
}

export default Main;
