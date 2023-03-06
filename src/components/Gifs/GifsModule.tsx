import React from "react";
import TrendingComponent from "../Trendings/TrendingComponent";
import { useParams } from "react-router-dom";
import Gifs from "./Gifs";

function GifsModule({ value }: any) {
  const { keyword } = useParams();
  if (value) {
    return (
      <>
        <TrendingComponent />
        <Gifs keyword={value} />;
      </>
    );
  }

  return (
    <>
      <TrendingComponent />
      <Gifs keyword={keyword} />;
    </>
  );
}

export default GifsModule;
