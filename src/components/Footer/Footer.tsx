import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 py-12 border-t border-gray-200 dark:border-gray-700 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-8">
          <a
            href="https://github.com/abidakhrs"
            className="text-blue-600 dark:text-blue-400 hover:text-purple-600 dark:hover:text-purple-400 text-2xl transition-all duration-300 transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/abidakhras/"
            className="text-blue-600 dark:text-blue-400 hover:text-purple-600 dark:hover:text-purple-400 text-2xl transition-all duration-300 transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
        </div>
        <div className="text-center mt-8 text-gray-600 dark:text-gray-400">
          <p className="text-lg">&copy; 2025 Abidakhras Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;