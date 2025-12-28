import { useState } from 'react';
import PropTypes from 'prop-types';

const ExpandableText = ({ children, maxLines = 4, expandText = "Mehr anzeigen", collapseText = "Weniger anzeigen" }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {/* Desktop: Immer voller Text */}
      <div className="hidden md:block">
        {children}
      </div>

      {/* Mobile: Mit "Mehr anzeigen" wenn länger als maxLines */}
      <div className="md:hidden">
        <div 
          className={`${!isExpanded ? 'line-clamp-' + maxLines : ''} transition-all duration-300`}
          style={!isExpanded ? {
            display: '-webkit-box',
            WebkitLineClamp: maxLines,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          } : {}}
        >
          {children}
        </div>
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 text-primary-600 hover:text-primary-700 font-medium text-sm underline transition-colors"
          aria-expanded={isExpanded}
        >
          {isExpanded ? collapseText : expandText}
        </button>
      </div>
    </>
  );
};

ExpandableText.propTypes = {
  children: PropTypes.node.isRequired,
  maxLines: PropTypes.number,
  expandText: PropTypes.string,
  collapseText: PropTypes.string
};

export default ExpandableText;

