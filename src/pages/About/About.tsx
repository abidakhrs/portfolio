import { mockEducationData } from '../../data/education';
import { mockAchievementsData } from '../../data/achievements';
import type { AchievementItem } from '../../data/achievements';
import Timeline from '../../components/Timeline/Timeline';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useState, useEffect } from 'react';
import Section from '../../components/Layout/Section';
import Container from '../../components/Layout/Container';
import Heading from '../../components/Layout/Heading';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const AnimatedCounter = ({ end, duration, suffix = "" }: { end: number; duration: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 30); // assuming ~30fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 1000 / 30);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <>{count}{suffix}</>;
};

const About = () => {
  return (
    <>
      {/* Main About Page Heading */}
      <Section >
        <Container>
          <Heading
            title="About Me"
            center={true}
          />
        </Container>
      </Section>

      {/* Section 1: Carousel with Bio */}
      <Section>
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/3 flex flex-col items-center">
              <div className="w-full h-80 max-w-xs">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={10}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  loop={true}
                  className="w-full h-full rounded-xl shadow-lg overflow-hidden border-4 border-white dark:border-gray-700"
                >
                  <SwiperSlide>
                    <div className="bg-gradient-to-br from-blue-500 to-indigo-700 w-full h-full flex items-center justify-center">
                      <span className="text-white text-6xl">👨‍💻</span>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-full h-full flex items-center justify-center">
                      <span className="text-white text-6xl">🎯</span>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="bg-gradient-to-br from-amber-500 to-orange-600 w-full h-full flex items-center justify-center">
                      <span className="text-white text-6xl">🎨</span>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="bg-gradient-to-br from-emerald-500 to-teal-600 w-full h-full flex items-center justify-center">
                      <span className="text-white text-6xl">🚀</span>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>

            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-700 dark:to-gray-800 rounded-xl shadow p-5 text-center border border-indigo-100 dark:border-gray-700">
                  <h3 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                    <AnimatedCounter end={5} duration={2} suffix="+" />
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">Years Experience</p>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-700 dark:to-gray-900 rounded-xl shadow p-5 text-center border border-indigo-100 dark:border-gray-700">
                  <h3 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                    <AnimatedCounter end={50} duration={2} suffix="+" />
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">Projects Completed</p>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-700 dark:to-gray-800 rounded-xl shadow p-5 text-center border border-indigo-100 dark:border-gray-700">
                  <h3 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                    <AnimatedCounter end={12} duration={2} suffix="+" />
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">Technologies</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg p-7 border border-gray-200 dark:border-gray-700">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                  I'm a passionate developer with experience in creating modern web applications.
                  I love turning complex problems into simple, beautiful designs.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  My journey in web development started several years ago, and I've been hooked ever since.
                  I specialize in React, TypeScript, and building responsive user interfaces that provide
                  exceptional user experiences.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  When I'm not coding, you can find me exploring new technologies, contributing to open source projects,
                  or sharing my knowledge through technical writing and mentoring.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Section 2: Education Timeline */}
      <Section hasTopMargin={true}>
        <Container>
          <Heading
            title="Education"
            center={true}
          />
          <Timeline items={mockEducationData.map(edu => ({
            id: edu.id,
            date: edu.date,
            title: edu.degree,
            subtitle: edu.institution,
            description: `${edu.description}${edu.field ? `\n\nField: ${edu.field}` : ''}${edu.gpa ? `\nGPA: ${edu.gpa}` : ''}`,
            companyInitials: edu.institution.substring(0, 2).toUpperCase(),
            companyColor: 'bg-gradient-to-r from-indigo-500 to-purple-600',
            image: edu.logo
          }))} />
        </Container>
      </Section>

      {/* Section 3: Achievements and Certifications */}
      <Section hasTopMargin={true}>
        <Container>
          <Heading
            title="Achievements & Certifications"
            center={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-0">
            {mockAchievementsData.map((achievement: AchievementItem) => (
              <div
                key={achievement.id}
                className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative z-10"
              >
                <div className="p-7">
                  <div className="flex items-start mb-5">
                    <div className="mr-4 flex-shrink-0">
                      <div className="bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-gray-700 dark:to-gray-800 border-2 border-indigo-200 dark:border-gray-600 rounded-xl w-14 h-14 flex items-center justify-center">
                        <span className="text-indigo-600 dark:text-indigo-300 font-bold text-xl">{achievement.issuer.charAt(0)}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white">{achievement.title}</h3>
                      <p className="text-indigo-600 dark:text-indigo-400 font-medium">{achievement.issuer}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-5">{achievement.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {achievement.skillTags?.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-gray-700 dark:to-gray-800 text-indigo-800 dark:text-indigo-200 text-sm rounded-full border border-indigo-200 dark:border-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                        {achievement.date}
                      </span>
                      {achievement.credentialId && (
                        <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                          ID: {achievement.credentialId}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
};

export default About;