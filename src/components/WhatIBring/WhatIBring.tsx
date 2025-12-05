import Container from "../Layout/Container";
import Heading from "../Layout/Heading";
import Section from "../Layout/Section";

const WhatIBring = () => {
  return (
    <Section>
      <Container>
        <div className="max-w-4xl mx-auto">
          <Heading title="What I Bring" center/>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-blue-500">
              <h4 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                Modern Web Apps
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Crafting responsive, accessible experiences with latest tech. built for everyone,
                everywhere.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-purple-500">
              <h4 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                UI/UX Excellence
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                I create interfaces that don’t just look good. They feel right,
                with UX best practices at heart.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-green-500">
              <h4 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                Performance
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Optimizing apps for speed, efficiency, and interactions so smooth
                they feel effortless.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default WhatIBring;