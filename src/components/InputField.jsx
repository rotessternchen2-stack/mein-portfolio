import PropTypes from 'prop-types';

const InputField = ({ 
  type = "text",
  className = "w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition",
  placeholder = "",
  value,
  onChange,
  required = false,
  name,
  id,
  label,
  error,
  rows = 4
}) => {
  const inputClasses = `${className} ${error ? 'border-red-500' : 'border-gray-300'}`;
  
  return (
    <div className="w-full">
      {label && (
        <label 
          htmlFor={id} 
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      
      {type === 'textarea' ? (
        <textarea
          id={id}
          name={name}
          className={inputClasses}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          rows={rows}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${id}-error` : undefined}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          className={inputClasses}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${id}-error` : undefined}
        />
      )}
      
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
};

InputField.propTypes = {
  type: PropTypes.oneOf(['text', 'email', 'password', 'tel', 'textarea']),
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  name: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  rows: PropTypes.number
};

export default InputField;
