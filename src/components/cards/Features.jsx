import PropTypes from 'prop-types';

const Features = ({alt, title,description, image}) => {
  return (
    <>
     <img src={image} alt={alt} className="feature-icon" />
    <h3 className="feature-item-title">{title}</h3>
    <p>
     {description}
    </p>
    </>
   
 
  )
}

Features.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  alt: PropTypes.string,
};

export default Features

