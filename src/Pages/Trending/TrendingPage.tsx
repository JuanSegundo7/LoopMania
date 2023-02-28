import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Gifs from "../../components/Gifs/Gifs";
import TrendingComponent from "../../components/Trendings/TrendingComponent";

function Trending() {
  const { trending } = useParams();
  const [urlPath, setUrlPath] = useState(trending);

  useEffect(() => {
    setUrlPath(trending);
  }, [trending]);

  return (
    <>
      <TrendingComponent />
      <Gifs key={urlPath} keyword={urlPath} />;
    </>
  );
}

export default Trending;
