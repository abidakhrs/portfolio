import ProjectsComponent from '../../components/Projects/Projects';
import { mockProjects } from '../../data/projects';
import Section from '../../components/Layout/Section';
import Container from '../../components/Layout/Container';
import Heading from '../../components/Layout/Heading';
import BlobbyBackground from '../../components/UI/BlobbyBackground';

const ProjectsPage = () => {
  return (
    <BlobbyBackground>
      <Section >
        <Container>
          <Heading title="Projects" center></Heading>
          <ProjectsComponent projects={mockProjects} />
        </Container>
      </Section>
    </BlobbyBackground>
  );
};

export default ProjectsPage;