import { About } from "src/components/About";
import { Home } from "src/components/Home";
import { Skills } from "src/components/Skills";
import { Works } from "src/components/Works";

const Index = () => {
  return (
    <div className="text-center">
      <Home />
      <About />
      <Skills />
      <Works />
    </div>
  );
};

export default Index;
