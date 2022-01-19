import React from "react";
import {
  Buttonturquoise,
  ButtonTransparent,
  Cardproduct,
} from "../components/index";

const Home = function Home() {
  return (
    <div className="p-8 flex gap-4 flex-wrap bg-lightgrey text-darkblue ">
      <h1>Home page</h1>
      <Buttonturquoise />
      <ButtonTransparent />
      <Cardproduct />
      <Cardproduct />
      <Cardproduct />
      <Cardproduct />
    </div>
  );
};

export default Home;
