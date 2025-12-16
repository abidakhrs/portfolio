import type { JSX } from 'react';
import type { Project } from '../../data/projects';
import { FaReact, FaNodeJs, FaPython, FaPhp, FaJs, FaJava, FaAngular, FaVuejs, FaDatabase, FaFigma, FaGit, FaGithub, FaDocker, FaAws, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiPostgresql, SiFirebase, SiRedux, SiSocketdotio, SiDjango, SiChartdotjs, SiPwa } from 'react-icons/si';
import Card from '../UI/Card';
import IconTag from '../UI/IconTag';
import Button from '../UI/Button';
import Section from '../Layout/Section';
import Container from '../Layout/Container';
import Heading from '../Layout/Heading';
import { useState, useEffect, useMemo } from 'react';

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
  // Memoize the projects to avoid recreation on each render
  const allProjects = useMemo(() => {
    // Show only the first 3 projects if onSeeMore is provided (Home page)
    // Show all projects if onSeeMore is not provided (Projects page)
    return onSeeMore ? projects.slice(0, 3) : projects;
  }, [projects, onSeeMore]);

  // Memoize categories to avoid recreation on each render
  const categories = useMemo(() => {
    return ['All', ...Array.from(new Set(projects.map(project => project.category)))];
  }, [projects]);

  // State for filtering
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(allProjects);

  // Apply filtering
  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProjects(allProjects);
    } else {
      setFilteredProjects(allProjects.filter(project => project.category === selectedCategory));
    }
  }, [selectedCategory, allProjects]);

  return (
    <Section>
      <Container>
        {/* Show Featured Projects title when on home page */}
        {onSeeMore && (
          <div className="mb-3">
            <Heading
              title="Featured Projects"
              center={true}
            />
          </div>
        )}

        {/* Category Filter - Only show on projects page (not on home page) */}
        {!onSeeMore && (
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-4">
              {/* Showing result text for filter at top left, opposite of dropdown */}
              {selectedCategory !== 'All' && (
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">
                  Showing: {selectedCategory}
                </h3>
              )}
            </div>
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              {/* Single Dropdown arrow */}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        )}

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {filteredProjects.map((project) => (
    <Card key={project.id} className="flex flex-col h-full">
      <div className="h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
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
                <IconTag
                  key={index}
                  icon={icon}
                  text={tech}
                  color={color}
                />
              );
            })}
          </div>
        </div>

        {/* View Project Button */}
        <button
          onClick={() => project.url && window.open(project.url, "_blank")}
          disabled={!project.url}
          className={`mt-4 px-4 py-2 rounded font-medium text-white transition-colors duration-300
            ${project.url 
              ? "bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 cursor-pointer" 
              : "bg-gray-400 cursor-not-allowed"}`
          }
        >
          View Project
        </button>
      </div>
    </Card>
  ))}
</div>


        {/* See More Button - only show on home page */}
        {onSeeMore && (
          <div className="text-center mt-12">
            <Button onClick={onSeeMore}>
              See More Projects
            </Button>
          </div>
        )}
      </Container>
    </Section>
  );
};

export default Projects;