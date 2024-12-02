import BlogPosts from "./components/BlogPosts";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import VideoSection from "./components/VideoSection";

const App: React.FC = () => {
  return (
    <>
      <HeroSection />
      <VideoSection />
      <FeaturesSection />
      <ProjectsSection />
      <BlogPosts />
      <Footer />
    </>
  );
};
export default App;
