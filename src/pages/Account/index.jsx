import { useSelector } from 'react-redux';
import Welcome from '../../components/Utils/Welcome';
import CardAccount from '../../components/cards/CardAccount';
import Error from '../Error';

function Account() {
  const isConnected = useSelector(state => state.token.isConnected); // Utiliser le store Redux pour vérifier si l'utilisateur est connecté

  if (!isConnected) {
    return <Error errorMessage='Vous devez être connecté pour accéder à cette page.' />;
  }

  return (
    <main className="main bg-dark">
      <>
        <Welcome />
        <h2 className="sr-only">Accounts</h2>
        <CardAccount />
        <CardAccount />
        <CardAccount />
        <CardAccount />
      </>
    </main>
  );
}

export default Account;
