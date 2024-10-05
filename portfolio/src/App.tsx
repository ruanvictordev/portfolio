import Home from "./components/layout/Home";
import Header from "./components/layout/Header";
import About from "./components/layout/About";
import Projects from "./components/layout/Projects";
import CommunityFooter from "./components/layout/Footer";
import Journey from "./components/layout/Journey";

export default function App() {
  return (
    <>
      <Header></Header>
      <main className="flex flex-col gap-14">
        <Home />
        <About />
        <Projects />
        <Journey />
        <CommunityFooter />
      </main>
    </>
  );
}
