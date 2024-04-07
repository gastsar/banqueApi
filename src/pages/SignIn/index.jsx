import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { SET_TOKEN } from '../../reducers/tokenSlice';
import { loginUser } from '../../services/AuthTokenAPI';
import { useNavigate } from 'react-router-dom';

function SignIn() {
    const [error, setError] = useState(null);
    const formRef = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate(); 

    const isConnected = localStorage.getItem('token');

    useEffect(() => {
        if (isConnected) {
            navigate('/compte'); 
        }
    }, [isConnected, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password, rememberMe } = formRef.current;

        try {
            const data = await loginUser({ email: email.value, password: password.value });
            if (data.body && data.body.token) {
                dispatch(SET_TOKEN(data.body.token));
                
                if (rememberMe.checked) {
                    localStorage.setItem('token', data.body.token);
                }
                navigate('/compte');
            }
        } catch (error) {
            setError('Nom d\'utilisateur ou mot de passe incorrect.');
        }
    };


    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <div className="header-form">
                    <span className="sign-in-icon">
                        <FontAwesomeIcon icon={faCircleUser} />
                    </span>
                    <h1>Sign In</h1>
                </div>

                <form ref={formRef} onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="rememberMe" name="rememberMe" />
                        <label htmlFor="rememberMe">Remember me</label>
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit" className="sign-in-button">
                        Sign In
                    </button>
                </form>
            </section>
            
        </main>
    );
}

export default SignIn;
