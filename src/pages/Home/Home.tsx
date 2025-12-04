import Greeting from "../../components/Greeting/Greeting";
import Projects from "../../components/Projects/Projects";
import WhatIBring from "../../components/WhatIBring/WhatIBring";
import Technologies from "../../components/Technologies/Technologies";
import { mockProjects } from "../../data/projects";
import { useNavigate } from "react-router-dom";
import Section from "../../components/Layout/Section";
import Container from "../../components/Layout/Container";

const Home = () => {
  const navigate = useNavigate();

  const handleSeeMore = () => {
    navigate("/projects");
  };

  return (
    <>
      <Section padding="lg">
        <Container>
          <Greeting
            name="Abid"
            description="I’ve carried meals through storms , now I’m ready to carry your projects to success. Let me code for you. And hey, let's grab a coffee to chat !"
          />
        </Container>
      </Section>
      <Projects projects={mockProjects} onSeeMore={handleSeeMore} />
      <Technologies />
      <WhatIBring />
    </>
  );
};

export default Home;
