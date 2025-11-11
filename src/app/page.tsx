import Carousel from "@/components/Carousel";
import partners from "@/data/partners";

const Home = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      Home
      <Carousel data={partners} />
    </div>
  );
};

export default Home;
