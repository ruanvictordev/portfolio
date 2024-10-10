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
      <main className="w-full flex flex-col gap-48 px-36 py-32 max-md:px-2">
        <Home />
        <About />
        <Projects />
        <DevToBlog username="ruanvictordev" />
        <Journey />
      </main>
      <CommunityFooter />
    </>
  );
}
