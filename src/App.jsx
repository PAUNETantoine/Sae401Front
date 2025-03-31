import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil.jsx';



function App()
{
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Accueil />} />
        </Routes>
      </Router>
  );
}

export default App;
