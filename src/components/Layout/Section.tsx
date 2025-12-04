import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'light' | 'dark' | 'gradient';
  hasTopMargin?: boolean;
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  background = 'light',
}) => {
  const backgroundClass = {
    light: 'bg-white dark:bg-gray-900 mt-16 lg:mt-20',
    dark: 'bg-gray-50 dark:bg-gray-950 mt-3 sm:mt-4 md:mt-6 lg:mt-8',
    gradient: 'bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 mt-3 sm:mt-4 md:mt-6 lg:mt-8'
  }[background];  

  return (
    <section
      id={id}
      className={`${backgroundClass} ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;