import Timeline from '../../components/Timeline/Timeline';
import { mockTimelineData } from '../../data/timeline';

const Experience = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800 dark:text-white text-center">My Experience</h1>
        <Timeline items={mockTimelineData} />
      </div>
    </div>
  );
};

export default Experience;