import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil.jsx';
import Contact from './pages/Contact.jsx';
import Evenements from './pages/Evenements.jsx';
import Connexion from './pages/Connexion.jsx';
import Inscription from './pages/Inscription.jsx';



function App()
{
  return (
      <Router>
        <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/evenements" element={<Evenements />} />
            <Route path="/connexion" element={<Connexion />} />
            <Route path="/inscription" element={<Inscription />} />
        </Routes>
      </Router>
  );
}

export default App;
