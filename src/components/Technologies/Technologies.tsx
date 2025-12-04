import React from 'react';
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiSupabase,
  SiNpm,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiGit,
  SiGithub,
} from 'react-icons/si';
import Section from '../Layout/Section';
import Container from '../Layout/Container';
import Heading from '../Layout/Heading';

interface Technology {
  name: string;
  icon: React.ReactNode;
  color: string;
}

const Technologies: React.FC = () => {
  const technologies: Technology[] = [
    {
      name: 'React',
      icon: <SiReact size={40} />,
      color: 'text-blue-500'
    },
    {
      name: 'TypeScript',
      icon: <SiTypescript size={40} />,
      color: 'text-blue-600'
    },
    {
      name: 'JavaScript',
      icon: <SiJavascript size={40} />,
      color: 'text-yellow-500'
    },
    {
      name: 'Node.js',
      icon: <SiNodedotjs size={40} />,
      color: 'text-green-600'
    },
    {
      name: 'Express.js',
      icon: <SiExpress size={40} />,
      color: 'text-gray-800 dark:text-gray-200'
    },
    {
      name: 'MongoDB',
      icon: <SiMongodb size={40} />,
      color: 'text-green-700'
    },
    {
      name: 'MySQL',
      icon: <SiMysql size={40} />,
      color: 'text-blue-700'
    },
    {
      name: 'PostgreSQL',
      icon: <SiPostgresql size={40} />,
      color: 'text-blue-800'
    },
    {
      name: 'Supabase',
      icon: <SiSupabase size={40} />,
      color: 'text-purple-600'
    },
    {
      name: 'Git',
      icon: <SiGit size={40} />,
      color: 'text-orange-700'
    },
    {
      name: 'GitHub',
      icon: <SiGithub size={40} />,
      color: 'text-gray-800 dark:text-gray-200'
    },
    {
      name: 'HTML5',
      icon: <SiHtml5 size={40} />,
      color: 'text-orange-500'
    },
    {
      name: 'CSS3',
      icon: <SiCss3 size={40} />,
      color: 'text-blue-500'
    },
    {
      name: 'Tailwind CSS',
      icon: <SiTailwindcss size={40} />,
      color: 'text-sky-500'
    },
    {
      name: 'npm',
      icon: <SiNpm size={40} />,
      color: 'text-red-500'
    }
  ];

  return (
    <Section>
      <Container>
        <Heading
          title="Technologies I Work With"
          description="A collection of technologies, tools, and frameworks I have experience with"
          center={true}
        />

        <div className="flex flex-wrap justify-center gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-transparent rounded-xl w-28 h-32 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className={`${tech.color} mb-3`}>
                {tech.icon}
              </div>
              <h4 className="font-medium text-gray-800 dark:text-white text-sm text-center">{tech.name}</h4>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Technologies;