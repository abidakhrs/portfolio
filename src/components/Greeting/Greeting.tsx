import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

interface GreetingProps {
  name: string;
  description: string;
  image?: string;
}

const Greeting = ({ name, description, image }: GreetingProps) => {
  const roles = [
    "Food Delivery Rider 🤡",
    "Fullstack Dev Wannabe 💯",
    "Design Copycat 😼",
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800 dark:text-white">
          Hi, I'm{" "}
          <span className="text-blue-600 dark:text-blue-400">{name}</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
          I hold position as <br />{" "}
          <span className="text-blue-600 dark:text-blue-400 font-bold">
            <Typewriter
              words={roles}
              loop
              cursor
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6 mx-auto md:mx-0"></div>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <Link
            to="/projects"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 shadow-lg"
          >
            View My Work
          </Link>
          <Link
            to="/contact"
            className="bg-transparent border-2 border-blue-500 text-blue-500 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-500 hover:text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105"
          >
            Contact Me
          </Link>
        </div>
        <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
          <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full">
            ✨ React Specialist
          </div>
          <div className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-4 py-2 rounded-full">
            🚀 Performance Focused
          </div>
          <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-full">
            💡 Problem Solver
          </div>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="relative">
          {/* Main profile image */}
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl">
            {image ? (
              <img
                src={image}
                alt={`${name}'s profile`}
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <div className="bg-gray-200 border-2 border-dashed rounded-full w-full h-full" />
            )}
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
            <span className="text-white text-2xl">🚀</span>
          </div>
          <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
            <span className="text-white text-2xl">💡</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
