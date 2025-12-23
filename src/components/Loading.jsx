import PropTypes from 'prop-types';

const Loading = ({ text = "Lädt...", fullScreen = false }) => {
  const containerClasses = fullScreen 
    ? "fixed inset-0 flex items-center justify-center bg-white bg-opacity-90 z-50" 
    : "flex items-center justify-center p-8";

  return (
    <div className={containerClasses}>
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-green-900 mb-4"></div>
        <p className="text-gray-600 font-medium">{text}</p>
      </div>
    </div>
  );
};

Loading.propTypes = {
  text: PropTypes.string,
  fullScreen: PropTypes.bool
};

export default Loading;

