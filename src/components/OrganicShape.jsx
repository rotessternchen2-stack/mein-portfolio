import PropTypes from 'prop-types';

const OrganicShape = ({ variant = 'blob1', className = '', animate = true }) => {
  const shapes = {
    blob1: (
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path 
          fill="currentColor" 
          d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.8,56.4,53.8,69,39.8,76.4C25.8,83.8,8.8,86,-7.5,83.8C-23.8,81.6,-39.4,75,-52.8,65.4C-66.2,55.8,-77.4,43.2,-83.8,28.2C-90.2,13.2,-91.8,-4.2,-87.6,-19.8C-83.4,-35.4,-73.4,-49.2,-60.4,-57C-47.4,-64.8,-31.4,-66.6,-16.2,-69.4C-1,-72.2,13.4,-76,26.8,-75.8C40.2,-75.6,30.6,-83.6,44.7,-76.4Z" 
          transform="translate(100 100)"
          className={animate ? "animate-blob" : ""}
        />
      </svg>
    ),
    blob2: (
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path 
          fill="currentColor" 
          d="M39.5,-65.7C51.4,-58.4,61.3,-48.3,68.4,-36.2C75.5,-24.1,79.8,-10,80.3,4.4C80.8,18.8,77.5,33.5,69.8,45.6C62.1,57.7,50,67.2,36.4,72.8C22.8,78.4,7.7,80.1,-7.2,78.3C-22.1,76.5,-36.8,71.2,-49.1,62.8C-61.4,54.4,-71.3,42.9,-76.8,29.4C-82.3,15.9,-83.4,0.4,-80.1,-13.9C-76.8,-28.2,-69.1,-41.3,-58.3,-49.2C-47.5,-57.1,-33.6,-59.8,-20.4,-66.7C-7.2,-73.6,5.3,-84.7,17.4,-88.4C29.5,-92.1,27.6,-72.9,39.5,-65.7Z" 
          transform="translate(100 100)"
          className={animate ? "animate-blob" : ""}
          style={{ animationDelay: '2s' }}
        />
      </svg>
    ),
    blob3: (
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path 
          fill="currentColor" 
          d="M47.1,-81.3C59.9,-73.2,68.5,-58.3,74.6,-43.2C80.7,-28.1,84.3,-12.8,83.6,2.3C82.9,17.4,77.9,32.3,69.7,44.8C61.5,57.3,50.1,67.4,37,73.2C23.9,79,9.1,80.5,-5.8,78.9C-20.7,77.3,-35.6,72.6,-48.3,64.8C-61,57,-71.5,46.1,-77.6,33.2C-83.7,20.3,-85.4,5.4,-82.9,-8.4C-80.4,-22.2,-73.7,-34.9,-64.5,-45.8C-55.3,-56.7,-43.6,-65.8,-30.8,-74C-18,-82.2,-4.2,-89.5,8.9,-87.6C22,-85.7,34.3,-89.4,47.1,-81.3Z" 
          transform="translate(100 100)"
          className={animate ? "animate-blob" : ""}
          style={{ animationDelay: '4s' }}
        />
      </svg>
    ),
    wave: (
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className={className}>
        <path 
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          fill="currentColor"
        />
      </svg>
    ),
    waveBottom: (
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className={className}>
        <path 
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          fill="currentColor"
        />
      </svg>
    ),
    leaf: (
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path
          fill="currentColor"
          d="M 100 20 Q 160 50 180 100 Q 160 150 100 180 Q 80 150 70 120 Q 60 90 80 60 Q 90 40 100 20 Z"
          className={animate ? "animate-float" : ""}
        />
      </svg>
    ),
    monsteraLeaf: (
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={className}>
        <g className={animate ? "animate-float-slow" : ""}>
          <path
            fill="currentColor"
            d="M100,20 Q140,40 150,70 L140,80 Q145,95 150,110 L140,120 Q145,135 145,150 Q130,170 100,180 Q70,170 55,150 Q55,135 60,120 L50,110 Q55,95 60,80 L50,70 Q60,40 100,20 Z"
          />
          {/* Monstera holes */}
          <ellipse cx="80" cy="90" rx="8" ry="15" fill="#f0fdf4" opacity="0.3"/>
          <ellipse cx="120" cy="90" rx="8" ry="15" fill="#f0fdf4" opacity="0.3"/>
          <ellipse cx="90" cy="130" rx="6" ry="12" fill="#f0fdf4" opacity="0.3"/>
          <ellipse cx="110" cy="130" rx="6" ry="12" fill="#f0fdf4" opacity="0.3"/>
        </g>
      </svg>
    )
  };

  return shapes[variant] || shapes.blob1;
};

OrganicShape.propTypes = {
  variant: PropTypes.oneOf(['blob1', 'blob2', 'blob3', 'wave', 'waveBottom', 'leaf', 'monsteraLeaf']),
  className: PropTypes.string,
  animate: PropTypes.bool
};

export default OrganicShape;



