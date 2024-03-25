import store from '../store/store';
import { profileError } from '../reducers/errorReducer'
import { userIsLogged } from '../reducers/logReducer'
import { getUserProfileInfos } from '../reducers/userProfileReducer'

export default async function getProfile() {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    };

    try {
        const response = await fetch('http://localhost:3001/api/v1/user/profile', requestOptions);
        const data = await response.json();

        if (response.ok) {
            // Envoyer des actions pour mettre à jour l'état dans le magasin Redux
            store.dispatch(getUserProfileInfos(data.body));
            store.dispatch(userIsLogged());
        } else {
            // Envoyer une action d'erreur si la requête échoue
            store.dispatch(profileError());
        }
    } catch (error) {
        console.error('Error in get profile:', error);
        // Envoyer une action d'erreur en cas d'erreur dans la requête
        store.dispatch(profileError());
    }
}
