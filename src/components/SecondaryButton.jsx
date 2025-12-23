import PropTypes from 'prop-types';

const SecondaryButton = ({ 
  children, 
  onClick, 
  type = "button",
  disabled = false,
  className = "",
  fullWidth = false 
}) => {
  const baseClasses = "px-6 py-3 bg-transparent text-green-900 border-2 border-green-900 rounded-lg hover:bg-green-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  const widthClass = fullWidth ? "w-full" : "";
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${widthClass} ${className}`}
    >
      {children}
    </button>
  );
};

SecondaryButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  fullWidth: PropTypes.bool
};

export default SecondaryButton;
