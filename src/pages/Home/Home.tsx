import Greeting from "../../components/Greeting/Greeting";
import Projects from "../../components/Projects/Projects";
import WhatIBring from "../../components/WhatIBring/WhatIBring";
import { mockProjects } from "../../data/projects";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleSeeMore = () => {
    navigate("/projects");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Greeting
        name="Abid"
        description="I’ve carried meals through storms , now I’m ready to carry your projects to success. Let me code for you. And hey, let's grab a coffee to chat !"
      />
      <Projects projects={mockProjects} onSeeMore={handleSeeMore} />
      <WhatIBring />
    </div>
  );
};

export default Home;
