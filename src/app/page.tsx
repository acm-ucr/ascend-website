import Landing from "@/components/home/Landing";
import AboutUs from "@/components/home/AboutUs";
import Partners from "@/components/home/Partners";

const Home = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center">
      <Landing />
      <AboutUs />
      <Partners />
    </div>
  );
};

export default Home;
