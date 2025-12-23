import PropTypes from 'prop-types';

const PrimaryButton = ({ 
  label, 
  onClick, 
  type = "button",
  disabled = false,
  className = "",
  fullWidth = false 
}) => {
  const baseClasses = "group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-medium rounded-full hover:from-primary-600 hover:to-accent-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 overflow-hidden";
  const widthClass = fullWidth ? "w-full" : "";
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${widthClass} ${className}`}
    >
      {/* Animated background effect */}
      <span className="absolute inset-0 bg-gradient-to-r from-accent-400 to-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      
      {/* Button text */}
      <span className="relative flex items-center justify-center gap-2">
        {label}
        <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
      </span>
    </button>
  );
};

PrimaryButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  fullWidth: PropTypes.bool
};

export default PrimaryButton;
