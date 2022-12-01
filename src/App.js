import "./App.css";
import Footer from "./components/Footer/Footer.Component";
import Hero from "./components/Hero/Hero.Component";
import Join from "./components/Join/Join.Component";
import Plans from "./components/Plans/Plans.Component";
import Programs from "./components/Programs/Programs.Component";
import Reasons from "./components/Reasons/Reasons.Component";
import Testimonials from "./components/Testimonials/Testimonials.Component";
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
