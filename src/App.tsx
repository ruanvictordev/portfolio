import Home from "./components/layout/Home";
import Header from "./components/layout/Header";
import About from "./components/layout/About";
import Projects from "./components/layout/Projects";
import CommunityEvents from "./components/layout/Events";
import Organizers from "./components/layout/Organizers";
import CommunityFooter from "./components/layout/Footer";
import Join from "./components/layout/Join";

export default function App() {
  return (
    <>
      <Header></Header>
      <main className="flex flex-col gap-14">
        <Home />
        <About />
        <Projects />
        <CommunityEvents />
        <Join />
        <Organizers />
        <CommunityFooter />
      </main>
    </>
  );
}
