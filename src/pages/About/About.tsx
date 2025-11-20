import { mockEducationData } from '../../data/education';
import { mockAchievementsData } from '../../data/achievements';
import type { EducationItem } from '../../data/education';
import type { AchievementItem } from '../../data/achievements';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useState, useEffect } from 'react';

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
    <div className="container mx-auto px-4 py-12">
      {/* Section 1: Carousel with Bio */}
      <section className="mb-20">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/3 flex flex-col items-center">
            <div className="w-64 h-80">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                className="rounded-xl shadow-lg overflow-hidden border-4 border-white dark:border-gray-700"
              >
                <SwiperSlide>
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-700 h-80 flex items-center justify-center">
                    <span className="text-white text-6xl">👨‍💻</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-gradient-to-br from-purple-500 to-pink-600 h-80 flex items-center justify-center">
                    <span className="text-white text-6xl">🎯</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-gradient-to-br from-amber-500 to-orange-600 h-80 flex items-center justify-center">
                    <span className="text-white text-6xl">🎨</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-gradient-to-br from-emerald-500 to-teal-600 h-80 flex items-center justify-center">
                    <span className="text-white text-6xl">🚀</span>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div className="lg:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white text-center lg:text-left">About Me</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-700 dark:to-gray-800 rounded-xl shadow p-5 text-center border border-indigo-100 dark:border-gray-700">
                <h3 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                  <AnimatedCounter end={5} duration={2} suffix="+" />
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">Years Experience</p>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-700 dark:to-gray-800 rounded-xl shadow p-5 text-center border border-indigo-100 dark:border-gray-700">
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
      </section>

      {/* Section 2: Education Timeline */}
      <section className="mb-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 dark:text-white text-center relative z-0">Education</h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-400 to-purple-500 transform -translate-x-1/2 hidden md:block z-0"></div>

          <div className="space-y-12 md:space-y-16 relative z-0">
            {mockEducationData.map((edu: EducationItem, index: number) => (
              <div
                key={edu.id}
                className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 top-6 w-10 h-10 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white transform -translate-x-1/2 z-10 md:top-0">
                  <span className="text-xs font-bold">{edu.date.split('-')[0]}</span>
                </div>

                {/* Date label for mobile */}
                <div className="md:hidden text-center mb-4 z-10">
                  <span className="inline-block px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 rounded-full font-medium">
                    {edu.date}
                  </span>
                </div>

                <div className={`w-full md:w-2/5 p-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 relative z-10">
                    <div className="flex items-start mb-4">
                      <div className="mr-4 flex-shrink-0">
                        <div className="bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-gray-700 dark:to-gray-800 border-2 border-indigo-200 dark:border-gray-600 rounded-xl w-16 h-16 flex items-center justify-center">
                          <span className="text-indigo-600 dark:text-indigo-300 font-bold text-xl">{edu.institution.charAt(0)}</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">{edu.degree}</h3>
                        <p className="text-indigo-600 dark:text-indigo-400 font-semibold">{edu.institution}</p>
                        {edu.field && <p className="text-gray-600 dark:text-gray-400">{edu.field}</p>}
                        {edu.gpa && <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">GPA: {edu.gpa}</p>}
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>
                    <span className="hidden md:inline-block mt-4 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium">
                      {edu.date}
                    </span>
                  </div>
                </div>

                {/* Empty space for alternate items to maintain spacing */}
                <div className="hidden md:block w-1/5"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Achievements and Certifications */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 dark:text-white text-center relative z-0">Achievements & Certifications</h2>
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
      </section>
    </div>
  );
};

export default About;