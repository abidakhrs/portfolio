import type { JSX } from 'react';
import type { Project } from '../../data/projects';
import { FaReact, FaNodeJs, FaPython, FaPhp, FaJs, FaJava, FaAngular, FaVuejs, FaDatabase, FaFigma, FaGit, FaGithub, FaDocker, FaAws, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiPostgresql, SiFirebase, SiRedux, SiSocketdotio, SiDjango, SiChartdotjs, SiPwa } from 'react-icons/si';

interface ProjectsProps {
  projects: Project[];
  onSeeMore?: () => void; // Optional function to handle "See More" click
}

// Function to get the appropriate icon and color for each technology
const getTechIcon = (tech: string) => {
  const techLower = tech.toLowerCase();

  // Define icon and color mappings
  const iconMap: Record<string, { icon: JSX.Element; color: string }> = {
    'react': {
      icon: <FaReact className="text-xl" />,
      color: 'text-blue-500'
    },
    'typescript': {
      icon: <SiTypescript className="text-xl" />,
      color: 'text-blue-600'
    },
    'javascript': {
      icon: <FaJs className="text-xl" />,
      color: 'text-yellow-500'
    },
    'node.js': {
      icon: <FaNodeJs className="text-xl" />,
      color: 'text-green-600'
    },
    'nodejs': {
      icon: <FaNodeJs className="text-xl" />,
      color: 'text-green-600'
    },
    'python': {
      icon: <FaPython className="text-xl" />,
      color: 'text-blue-500'
    },
    'php': {
      icon: <FaPhp className="text-xl" />,
      color: 'text-indigo-600'
    },
    'mongodb': {
      icon: <SiMongodb className="text-xl" />,
      color: 'text-green-500'
    },
    'postgresql': {
      icon: <SiPostgresql className="text-xl" />,
      color: 'text-blue-400'
    },
    'firebase': {
      icon: <SiFirebase className="text-xl" />,
      color: 'text-yellow-500'
    },
    'redux': {
      icon: <SiRedux className="text-xl" />,
      color: 'text-purple-500'
    },
    'express': {
      icon: <FaNodeJs className="text-xl" />,
      color: 'text-gray-700'
    },
    'socket.io': {
      icon: <SiSocketdotio className="text-xl" />,
      color: 'text-gray-700'
    },
    'socketio': {
      icon: <SiSocketdotio className="text-xl" />,
      color: 'text-gray-700'
    },
    'd3.js': {
      icon: <FaJs className="text-xl" />,
      color: 'text-orange-600'
    },
    'd3js': {
      icon: <FaJs className="text-xl" />,
      color: 'text-orange-600'
    },
    'django': {
      icon: <SiDjango className="text-xl" />,
      color: 'text-green-700'
    },
    'chart.js': {
      icon: <SiChartdotjs className="text-xl" />,
      color: 'text-blue-400'
    },
    'chartjs': {
      icon: <SiChartdotjs className="text-xl" />,
      color: 'text-blue-400'
    },
    'pwa': {
      icon: <SiPwa className="text-xl" />,
      color: 'text-blue-700'
    },
    'vue.js': {
      icon: <FaVuejs className="text-xl" />,
      color: 'text-green-500'
    },
    'vuejs': {
      icon: <FaVuejs className="text-xl" />,
      color: 'text-green-500'
    },
    'angular': {
      icon: <FaAngular className="text-xl" />,
      color: 'text-red-500'
    },
    'java': {
      icon: <FaJava className="text-xl" />,
      color: 'text-red-600'
    },
    'html': {
      icon: <FaHtml5 className="text-xl" />,
      color: 'text-orange-500'
    },
    'css': {
      icon: <FaCss3Alt className="text-xl" />,
      color: 'text-blue-500'
    },
    'sql': {
      icon: <FaDatabase className="text-xl" />,
      color: 'text-blue-400'
    },
    'figma': {
      icon: <FaFigma className="text-xl" />,
      color: 'text-purple-500'
    },
    'git': {
      icon: <FaGit className="text-xl" />,
      color: 'text-orange-700'
    },
    'github': {
      icon: <FaGithub className="text-xl" />,
      color: 'text-gray-800 dark:text-gray-300'
    },
    'docker': {
      icon: <FaDocker className="text-xl" />,
      color: 'text-blue-400'
    },
    'aws': {
      icon: <FaAws className="text-xl" />,
      color: 'text-orange-400'
    },
    'jwt': {
      icon: <FaDatabase className="text-xl" />,
      color: 'text-gray-600'
    },
    'react native': {
      icon: <FaReact className="text-xl" />,
      color: 'text-blue-500'
    },
  };

  // Check if we have a specific icon for this technology
  if (iconMap[techLower]) {
    return iconMap[techLower];
  }

  // Default icon if we don't have a specific one
  return {
    icon: <FaDatabase className="text-xl" />,
    color: 'text-gray-500'
  };
};

const Projects = ({ projects, onSeeMore }: ProjectsProps) => {
  // Show only the first 3 projects if onSeeMore is provided (Home page)
  // Show all projects if onSeeMore is not provided (Projects page)
  const displayedProjects = onSeeMore ? projects.slice(0, 3) : projects;

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            {onSeeMore ? 'Featured Projects' : 'All Projects'}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{project.title}</h3>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold px-2.5 py-0.5 rounded">
                    {project.category}
                  </span>
                </div>
                <h4 className="text-blue-600 dark:text-blue-400 font-medium mb-3">{project.subtitle}</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

                {/* Technology tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => {
                    const { icon, color } = getTechIcon(tech);
                    return (
                      <div
                        key={index}
                        className={`${color} flex items-center gap-1 bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded-full text-sm`}
                      >
                        {icon}
                        <span className="text-gray-700 dark:text-gray-200">{tech}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button - only show on home page */}
        {onSeeMore ? (
          <div className="text-center mt-12">
            <button
              onClick={onSeeMore}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg"
            >
              See More Projects
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default Projects;