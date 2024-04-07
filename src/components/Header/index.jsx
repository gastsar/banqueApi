import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faArrowRightToBracket, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux'; // Import de useSelector pour accéder au state Redux
import { CLEAR_TOKEN } from '../../reducers/tokenSlice';
import store from '../../store/store';
import { useEffect } from 'react';
import { getUserData } from '../../services/userDataAPI';
import { GET_USER_PROFILE } from '../../reducers/getUserReducer';

const Header = () => {
  const navigate = useNavigate();
  const isConnected = localStorage.getItem('token');
  const userData = useSelector(state => state.getUser.data);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const fetchedUserData = await getUserData(dispatch);
      if (fetchedUserData) {
        dispatch(GET_USER_PROFILE(fetchedUserData.body));
        console.log('Données utilisateur:', fetchedUserData);
      }
    };

    fetchData();
  }, [dispatch]);


  const handleSignOut = (e) => {
    e.preventDefault();
    store.dispatch(CLEAR_TOKEN());
    navigate('/meconnecter');
  };

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src="./img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {isConnected ? (
          <div className="deconnexion">
            <Link to="/compte" className="main-nav-item">
              <span className="main-nav-icon">
                <FontAwesomeIcon icon={faCircleUser} />
              </span>
              {userData?.firstName} {/* Afficher le prénom de l'utilisateur */}
            </Link>
            <Link to="#" className="main-nav-item" onClick={handleSignOut}>
              <span className="main-nav-icon">
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
              </span>
              Sign Out
            </Link>
          </div>
        ) : (
          <div className="connexion">
            <Link to="/meconnecter" className="main-nav-item">
              <span className="main-nav-icon">
                <FontAwesomeIcon icon={faArrowRightToBracket} />
              </span>
              Sign In
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
