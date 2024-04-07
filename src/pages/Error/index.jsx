import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
function Error({ errorMessage }) {
  return (
    
    <main className='main'>

   
    <div className='error'>
      <h1 className='error__title'>Erreur</h1>
      <p className='error__descript'>{errorMessage || "Une erreur s'est produite."}</p>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </div>
     </main>
  );
}

Error.propTypes = {
  errorMessage: PropTypes.string, 
};

export default Error;