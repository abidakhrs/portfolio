import Section from '../../components/Layout/Section';
import Container from '../../components/Layout/Container';
import Heading from '../../components/Layout/Heading';

const Services = () => {
  return (
    <Section >
      <Container>
        <Heading
          title="Services"
          description="Explore the services I offer."
          center={true}
        />
      </Container>
    </Section>
  );
};

export default Services;