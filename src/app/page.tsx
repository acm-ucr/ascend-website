import Landing from "@/components/Landing";
import AboutUs from "@/components/home/AboutUs";

const Home = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center">
      <Landing />
      <AboutUs />
    </div>
  );
};

export default Home;
