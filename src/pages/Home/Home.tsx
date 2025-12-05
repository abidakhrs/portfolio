import Greeting from "../../components/Greeting/Greeting";
import Projects from "../../components/Projects/Projects";
import WhatIBring from "../../components/WhatIBring/WhatIBring";
import Technologies from "../../components/Technologies/Technologies";
import { mockProjects } from "../../data/projects";
import { useNavigate } from "react-router-dom";
import Section from "../../components/Layout/Section";
import Container from "../../components/Layout/Container";
import { motion } from "motion/react";
import BlobbyBackground from "../../components/UI/BlobbyBackground";

const Home = () => {
  const navigate = useNavigate();

  const handleSeeMore = () => {
    navigate("/projects");
  };

  return (
    <BlobbyBackground>
      <Section>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Greeting
              name="Abid"
              image="homeimage.png"
              description="I've carried meals through storms , now I'm ready to carry your projects to success. Let me code for you. And hey, let's grab a coffee to chat !"
            />
          </motion.div>
        </Container>
      </Section>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Projects projects={mockProjects} onSeeMore={handleSeeMore} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Technologies />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <WhatIBring />
      </motion.div>
    </BlobbyBackground>
  );
};

export default Home;
