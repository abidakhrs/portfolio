import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'light' | 'dark' | 'gradient';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  background = 'light',
  padding = 'xl'
}) => {
  const backgroundClass = {
    light: 'bg-transparent',
    dark: 'bg-transparent',
    gradient: 'bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950'
  }[background];

  const paddingClass = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-20'
  }[padding];

  return (
    <section
      id={id}
      className={`${backgroundClass} ${paddingClass} ${className} relative`}
    >
      {children}
    </section>
  );
};

export default Section;