import Gifs from "../Gifs/Gifs";
import Trending from "../Trendings/TrendingComponent";

function Home() {
  return (
    <>
      <Trending />
      <Gifs keyword="" />;
    </>
  );
}

export default Home;
