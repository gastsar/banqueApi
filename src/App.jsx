import { useRoutes } from 'react-router-dom';
import Layout from './routes/Layout';
import routes from './routes/Routes'; // Import routes

function App() {
  const content = useRoutes(routes);

  return <Layout>{content}</Layout>;
}

export default App;
