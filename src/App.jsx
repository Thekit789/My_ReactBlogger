import "./App.css";
import { NavBar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { Footer } from "./components/Footer";
import { ArticleSection } from "./components/ArticleSection";

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <ArticleSection />
      <div>
        <br />
      </div>
      <Footer />
    </>
  );
}

export default App;
