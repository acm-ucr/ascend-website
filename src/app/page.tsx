import NavBar from "@/components/NavBar";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navbar */}
      <NavBar />

      {/* Main content */}
      <main className="flex flex-1 items-center justify-center">
        <h1 className="text-3xl font-semibold text-gray-800">
          Welcome to Ascend UC Riverside
        </h1>
      </main>
    </div>
  );
};

export default Home;
