import store from '../store/store';
import { userHadToken } from '../reducers/logReducer';
import { tokenError } from '../reducers/errorReducer';

export default async function getToken(email, password) {
   console.log( email, password);
    const requestOptions = {

        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    };

    try {
        const response = await fetch('http://localhost:3001/api/v1/user/login', requestOptions);
        const data = await response.json();

        console.log('API Response:', data); // Log de la réponse de l'API

        if (response.ok) {
            const { token } = data.body;
            localStorage.setItem("token", token);
            
            // Envoyer une action pour indiquer que l'utilisateur a un token
            store.dispatch(userHadToken());
        } else {
            // Envoyer une action d'erreur si la connexion échoue
            store.dispatch(tokenError());
        }
    } catch (error) {
        console.error('Error in API Token:', error);
        // Envoyer une action d'erreur en cas d'erreur dans la requête
        store.dispatch(tokenError());
    }
}

/* 
{
    "status": 200,
    "message": "User successfully logged in",
    "body": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTdhN2NlYTIwYjkyMzY0Y2Q2NTNhZiIsImlhdCI6MTcxMTM5NjcxNCwiZXhwIjoxNzExNDgzMTE0fQ.R8oq8f4BG0QLAWurswmrl4ch7Emt46W1gfvcJsFZ6P4"
    }
}
 */