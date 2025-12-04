import React from 'react';

interface IconTagProps {
  icon: React.ReactNode;
  text: string;
  color?: string;
  className?: string;
}

const IconTag: React.FC<IconTagProps> = ({
  icon,
  text,
  color = 'text-gray-700 dark:text-gray-200',
  className = ''
}) => {
  return (
    <div className={`flex items-center gap-1 ${color} bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded-full text-sm ${className}`}>
      {icon}
      <span className="text-gray-700 dark:text-gray-200">{text}</span>
    </div>
  );
};

export default IconTag;