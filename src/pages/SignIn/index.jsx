import { useState, useEffect } from 'react';
import { Input } from "../../components/atoms/Input";
import { Checkbox } from "../../components/atoms/Checkbox";
import getToken from "../../services/getToken";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

function SignIn() {

  
  const [inputData, setInputData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });


  const handleInput = (e, id) => {
    const value = e.target.value;
    setInputData(prevState => ({ ...prevState, [id]: value }));
  };

  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await getToken(inputData.email, inputData.password);
    console.log('API Response:', response);

    // Réinitialiser les valeurs des champs
    setInputData({ email: '', password: '', rememberMe: false });
    setRememberMe(false);
  };

  const hadToken = useSelector((state) => state.logged.hadToken);
  const tokenError = useSelector((state) => state.error.tokenError);
  const profileError = useSelector((state) => state.error.profileError);
  const navigate = useNavigate();

  useEffect(() => {
    if (hadToken) {
      navigate('/compte');
    }
  }, [navigate, hadToken]);

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <Input label="UserName" placeholder="username" onInput={(e) => handleInput(e, 'email')}  />
          </div>
          <div className="input-wrapper">
            <Input label="Password" type="password" placeholder="password" onInput={(e) => handleInput(e, 'password')} />
          </div>
          <div className="input-remember">
            <Checkbox label=" Remember me" checked={rememberMe} onChange={() => setRememberMe(prevState => !prevState)} />
          </div>
          <button type='submit' className="sign-in-button">Sign In</button>
        </form>
      </section>
      {tokenError && <p className='error'>Une erreur , veuillez remplir à nouveau les champs.</p>}
      {profileError && <p className='error'>Nous sommes désolés, votre profil est inaccessible.</p>}
    </main>
  )
}

export default SignIn;
