import type { TimelineItem } from '../../data/timeline';

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline = ({ items }: TimelineProps) => {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="hidden md:block absolute left-1/2 top-0 h-full w-0.5 bg-gray-300 dark:bg-gray-600 transform -translate-x-1/2"></div>

      <div className="space-y-12">
        {items.map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-start md:items-center"
            >
              {/* On mobile, always show cards on the right */}
              <div className="md:hidden w-full mb-4">
                <div className="p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800 border border-blue-200 dark:border-gray-700">
                  {/* Company badge with colorful gradient */}
                  <div className={`${item.companyColor || 'bg-gradient-to-r from-blue-500 to-purple-600'} w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mb-3`}>
                    {item.companyInitials || item.subtitle.split(' ').map(word => word[0]).join('').substring(0, 2)}
                  </div>

                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">{item.title}</h3>
                    <span className="text-blue-600 dark:text-blue-400 font-medium bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full text-sm">
                      {item.date}
                    </span>
                  </div>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{item.subtitle}</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>

                  {/* Image section for mobile */}
                  {item.image && (
                    <div className="mt-4">
                      <img
                        src={item.image}
                        alt={item.subtitle}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* For desktop - alternating layout */}
              <div className="hidden md:flex w-full">
                {isLeft ? (
                  <>
                    {/* Image section for left items */}
                    {item.image && (
                      <div className="w-5/12 pr-8">
                        <img
                          src={item.image}
                          alt={item.subtitle}
                          className="w-full h-64 object-cover rounded-xl shadow-lg"
                        />
                      </div>
                    )}
                    <div className="w-2/12 flex justify-center items-center">
                      {/* Company badge with colorful gradient */}
                      <div className={`${item.companyColor || 'bg-gradient-to-r from-blue-500 to-purple-600'} w-12 h-12 rounded-full flex items-center justify-center text-white font-bold z-10 shadow-lg`}>
                        {item.companyInitials || item.subtitle.split(' ').map(word => word[0]).join('').substring(0, 2)}
                      </div>
                    </div>
                    <div className="w-5/12 pl-8">
                      <div className="p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800 border border-blue-200 dark:border-gray-700">
                        <div className="flex flex-wrap justify-between items-start mb-2">
                          <h3 className="text-xl font-bold text-gray-800 dark:text-white">{item.title}</h3>
                          <span className="text-blue-600 dark:text-blue-400 font-medium bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full text-sm">
                            {item.date}
                          </span>
                        </div>
                        <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{item.subtitle}</p>
                        <p className="text-gray-600 dark:text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-5/12 pr-8">
                      <div className="p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800 border border-blue-200 dark:border-gray-700">
                        <div className="flex flex-wrap justify-between items-start mb-2">
                          <h3 className="text-xl font-bold text-gray-800 dark:text-white">{item.title}</h3>
                          <span className="text-blue-600 dark:text-blue-400 font-medium bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full text-sm">
                            {item.date}
                          </span>
                        </div>
                        <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{item.subtitle}</p>
                        <p className="text-gray-600 dark:text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <div className="w-2/12 flex justify-center items-center">
                      {/* Company badge with colorful gradient */}
                      <div className={`${item.companyColor || 'bg-gradient-to-r from-blue-500 to-purple-600'} w-12 h-12 rounded-full flex items-center justify-center text-white font-bold z-10 shadow-lg`}>
                        {item.companyInitials || item.subtitle.split(' ').map(word => word[0]).join('').substring(0, 2)}
                      </div>
                    </div>
                    {/* Image section for right items */}
                    {item.image && (
                      <div className="w-5/12 pl-8">
                        <img
                          src={item.image}
                          alt={item.subtitle}
                          className="w-full h-64 object-cover rounded-xl shadow-lg"
                        />
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;