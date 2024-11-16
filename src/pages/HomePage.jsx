import { NavBar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { Footer } from "@/components/Footer";
import { ArticleSection } from "@/components/ArticleSection";

export default function HomePage() {
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
