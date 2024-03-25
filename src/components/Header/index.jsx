import  { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  // État pour suivre si l'utilisateur est connecté ou non
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

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
        {isUserLoggedIn ? (
          // Si l'utilisateur est connecté, affiche le contenu de déconnexion
          <div className="deconexion">
            <Link>
              <i className="fa fa-user-circle"></i>Tony
            </Link>
            <Link to="/meconnecter" className="main-nav-item">
              <i className="fa fa-sign-out"></i>Sign Out
            </Link>
          </div>
        ) : (
          // Si l'utilisateur n'est pas connecté, affiche le contenu de connexion
          <div className="connexion">
            <Link to="/meconnecter" className="main-nav-item">
              <i className="fa fa-user-circle"></i>Sign In
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
