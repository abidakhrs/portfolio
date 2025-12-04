import Timeline from '../../components/Timeline/Timeline';
import { mockTimelineData } from '../../data/timeline';
import Section from '../../components/Layout/Section';
import Container from '../../components/Layout/Container';
import Heading from '../../components/Layout/Heading';

const Experience = () => {
  return (
    <Section>
      <Container>
        <Heading
          title="My Experience"
          center={true}
        />
        <Timeline items={mockTimelineData} />
      </Container>
    </Section>
  );
};

export default Experience;