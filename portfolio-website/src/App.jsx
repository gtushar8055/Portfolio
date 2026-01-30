import Navbar from "./components/Navbar";
import Skills from "./pages/Skills";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <div className="flex flex-col lg:flex-col">
        <Navbar></Navbar>
        <Home></Home>
        <About></About>
        <Skills></Skills>
        <Resume></Resume>
        <Projects></Projects>
        <Contact></Contact>
      </div>
    </>
  );
}

export default App;
