import PropTypes from 'prop-types';

const Section = ({ title, children, className = "" }) => {
  return (
    <section className={`mb-12 ${className}`}>
      {title && <h1 className="text-3xl font-bold mb-8">{title}</h1>}
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default Section;


