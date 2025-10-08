import NavBar from "@/components/NavBar";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Da Navbar */}
      <NavBar />

      <div className="flex h-screen w-screen items-center justify-center"></div>
    </div>
  );
};

export default Home;
