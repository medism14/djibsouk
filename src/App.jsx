/** @format */

import "./index.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { Header, Footer, NotFound, Loading } from "./components";
import {
  Accueil,
  Connexion,
  Recuperation_mot_de_passe,
  Inscription,
  Profil,
  Annonces,
  Informations_personnel,
  Historiques,
  Mes_annonces,
  Modifier_annonce,
  Gestion_categories,
  Gestion_notifications,
  Gestion_utilisateurs,
  Gestion_annonces,
  Recherche_produit,
  Annonce_detail,
  Messagerie,
  Qui_sommes_nous,
  Contact,
  Confidentialite,
  Conditions_utilisations,
} from "./pages";

import { useEffect, useState } from "react";

function App() {
  const [structure, setStructure] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const noHeaderPath = [
    "/connexion",
    "/recuperation_mot_de_passe",
    "/inscription",
    "/annonces",
  ];

  let location = useLocation();

  useEffect(() => {
    if (noHeaderPath.includes(location.pathname)) {
      setStructure(false);
    } else {
      setStructure(true);
    }
  }, [location.pathname]);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <section className="h-screen w-full flex flex-col justify-between">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          { structure && <Header /> }
          <Routes>
            {/* Page d'accueil */}
            <Route path="/" element={<Accueil />}></Route>
            <Route path="/connexion" element={<Connexion />}></Route>
            <Route
              path="/recuperation_mot_de_passe"
              element={<Recuperation_mot_de_passe />}
            ></Route>
            <Route path="/inscription" element={<Inscription />}></Route>
            <Route path="/profil" element={<Profil />}></Route>
            <Route path="/annonces" element={<Annonces />}></Route>
            <Route
              path="/informations_personnel"
              element={<Informations_personnel />}
            ></Route>
            <Route path="/historiques" element={<Historiques />}></Route>
            <Route path="/mes_annonces" element={<Mes_annonces />}></Route>
            <Route
              path="/modifier_annonce"
              element={<Modifier_annonce />}
            ></Route>
            <Route
              path="/gestion_categories"
              element={<Gestion_categories />}
            ></Route>
            <Route
              path="/gestion_notifications"
              element={<Gestion_notifications />}
            ></Route>
            <Route
              path="/gestion_utilisateurs"
              element={<Gestion_utilisateurs />}
            ></Route>
            <Route
              path="/gestion_annonces"
              element={<Gestion_annonces />}
            ></Route>
            <Route
              path="/recherche_produit"
              element={<Recherche_produit />}
            ></Route>
            <Route path="/annonce_detail" element={<Annonce_detail />}></Route>
            <Route path="/messagerie" element={<Messagerie />}></Route>
            <Route
              path="/qui_sommes_nous"
              element={<Qui_sommes_nous />}
            ></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route
              path="/confidentialite"
              element={<Confidentialite />}
            ></Route>
            <Route
              path="/conditions_utilisations"
              element={<Conditions_utilisations />}
            ></Route>

            {/* Page non trouvé */}
            <Route path="*" element={<NotFound />}></Route>
          </Routes>

          { structure && <Footer /> }
        </>
      )}
    </section>
  );
}

export default App;
