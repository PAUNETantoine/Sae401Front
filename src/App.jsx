import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil.jsx';
import Contact from './pages/Contact.jsx';
import Evenements from './pages/Evenements.jsx';
import Connexion from './pages/Connexion.jsx';
import Inscription from './pages/Inscription.jsx';
import Boutique from "./pages/Boutique";
import PageProduit from "./pages/PageProduit";
import Compte from "./pages/Compte";
import AccueilAdmin from "./pages/admin/AccueilAdmin";
import BoutiqueAdmin from "./pages/admin/BoutiqueAdmin";



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
            <Route path="/boutique" element={<Boutique />} />
            <Route path="/produit/:nom" element={<PageProduit />} />
            <Route path="/compte" element={<Compte />} />
            <Route path="/accueil-admin" element={<AccueilAdmin />} />
            <Route path="/boutique-admin" element={<BoutiqueAdmin />} />
        </Routes>
      </Router>
  );
}

export default App;
