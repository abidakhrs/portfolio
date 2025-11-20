import ProjectsComponent from '../../components/Projects/Projects';
import { mockProjects } from '../../data/projects';

const ProjectsPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800 dark:text-white text-center">My Projects</h1>
        <ProjectsComponent projects={mockProjects} />
      </div>
    </div>
  );
};

export default ProjectsPage;