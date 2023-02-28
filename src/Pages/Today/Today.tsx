import Gifs from "../../components/Gifs/Gifs";
import TrendingComponent from "../../components/Trendings/TrendingComponent";

function Today() {
  return (
    <>
      <TrendingComponent />
      <Gifs keyword="today" />;
    </>
  );
}

export default Today;
