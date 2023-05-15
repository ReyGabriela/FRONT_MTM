import { Routes, Route } from 'react-router-dom';
import Home from '../client/components/Home';

const ClientRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default ClientRoutes;
