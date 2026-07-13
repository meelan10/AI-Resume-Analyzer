import Navbar from "../components/layouts/Navbar";
import Hero from "../components/home/Hero";
import Trusted from "../components/home/Trusted";
import Features from "../components/home/Features";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Trusted />
      <Features />
    </>
  );
}

export default Home;