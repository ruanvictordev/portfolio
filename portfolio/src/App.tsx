import Home from "./components/layout/Home";
import Header from "./components/layout/Header";
import About from "./components/layout/About";
import Projects from "./components/layout/Projects";
import CommunityFooter from "./components/layout/Footer";
import Journey from "./components/layout/Journey";
import DevToBlog from "./components/layout/Blog";

export default function App() {
  return (
    <>
      <Header></Header>
      <main className="w-full flex flex-col gap-48 px-40 py-32 max-lg:px-11 max-md:px-4">
        <Home />
        <About />
        <Projects />
        <DevToBlog username="ruanvictordevblog" />
        <Journey />
      </main>
      <CommunityFooter />
    </>
  );
}
