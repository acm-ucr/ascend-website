import Navbar from "@/components/NavBar";
import Landing from "@/components/Landing";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <Landing />
      </main>
    </div>
  );
}
