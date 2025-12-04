import ProjectsComponent from '../../components/Projects/Projects';
import { mockProjects } from '../../data/projects';
import Section from '../../components/Layout/Section';
import Container from '../../components/Layout/Container';
import Heading from '../../components/Layout/Heading';

const ProjectsPage = () => {
  return (
    <Section >
      <Container>
        <Heading title="Projects" center></Heading>
        <ProjectsComponent projects={mockProjects} />
      </Container>
    </Section>
  );
};

export default ProjectsPage;