import PropTypes from 'prop-types';
import { useState } from 'react';

const TimelineItem = ({ date, title, company, description, icon, isLast }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Check if description is longer than 3 lines (approximately 250 characters)
  const isLongText = description.length > 250;
  const displayText = isExpanded || !isLongText 
    ? description 
    : description.substring(0, 250) + '...';
  
  return (
    <div className="relative flex gap-6 pb-12">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-6 top-14 w-0.5 h-full bg-gradient-to-b from-primary-400 to-primary-200"></div>
      )}
      
      {/* Icon Circle */}
      <div className="relative z-10 flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-accent-500 flex items-center justify-center text-white text-xl shadow-lg ring-4 ring-primary-50 hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>
      
      {/* Content Card */}
      <div className="flex-grow group">
        <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-primary-100 hover:border-primary-300 hover:-translate-y-1">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
              {date}
            </span>
          </div>
          <h3 className="text-xl font-bold text-neutral-900 mb-1 group-hover:text-primary-600 transition-colors">
            {title}
          </h3>
          {company && (
            <p className="text-md text-primary-600 font-medium mb-3">{company}</p>
          )}
          <p className="text-neutral-700 leading-relaxed">{displayText}</p>
          
          {/* Mehr anzeigen Button */}
          {isLongText && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-3 text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center gap-1 transition-colors"
            >
              {isExpanded ? (
                <>
                  Weniger anzeigen
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </>
              ) : (
                <>
                  Mehr anzeigen
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

TimelineItem.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  company: PropTypes.string,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  isLast: PropTypes.bool
};

const Timeline = ({ items }) => {
  return (
    <div className="max-w-4xl mx-auto">
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          {...item}
          isLast={index === items.length - 1}
        />
      ))}
    </div>
  );
};

Timeline.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    company: PropTypes.string,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  })).isRequired
};

export default Timeline;

