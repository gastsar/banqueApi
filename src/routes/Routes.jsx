import Home from '../pages/Home';
import Account from '../pages/Account';
import SignIn from '../pages/SignIn';
import Transaction from '../pages/Transaction';
import Error from '../pages/Error';

export default [
  { path: '/', element: <Home/> },
  { path: '/compte', element: <Account /> },
  { path: '/transaction', element: <Transaction/> },
  { path: '/meconnecter', element: <SignIn /> },
  { path: '*', element: <Error/> }

];
