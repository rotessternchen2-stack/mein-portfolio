import PropTypes from 'prop-types';
import OrganicShape from './OrganicShape';

const PlantOverlay = ({ position = 'top-right', opacity = 0.1, color = 'text-primary-200' }) => {
  const positions = {
    'top-right': 'top-0 right-0 translate-x-1/4 -translate-y-1/4',
    'top-left': 'top-0 left-0 -translate-x-1/4 -translate-y-1/4',
    'bottom-right': 'bottom-0 right-0 translate-x-1/4 translate-y-1/4',
    'bottom-left': 'bottom-0 left-0 -translate-x-1/4 translate-y-1/4',
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  };

  return (
    <div className={`absolute ${positions[position]} w-96 h-96 pointer-events-none -z-10`}
         style={{ opacity }}>
      <OrganicShape 
        variant="monsteraLeaf" 
        className={`w-full h-full ${color}`}
        animate={true}
      />
    </div>
  );
};

PlantOverlay.propTypes = {
  position: PropTypes.oneOf(['top-right', 'top-left', 'bottom-right', 'bottom-left', 'center']),
  opacity: PropTypes.number,
  color: PropTypes.string
};

export default PlantOverlay;



