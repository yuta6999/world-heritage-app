import { useEffect } from 'react';
import type { FC } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import AllPlayers from 'components/ecosystems/AllWorldHeritages';
import WorldHeritageListByCountry from 'components/ecosystems/WorldHeritageListByCountry';
import Home from 'components/templates/Home';
import WorldHeritagesFrame from 'components/templates/WorldHeritagesFrame';

const IndexRoutes: FC = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return (
    <Routes>
      <Route path="characters" element={<WorldHeritagesFrame />}>
        <Route path="" element={<AllPlayers my={12} />} />
        <Route
          path=":countryID"
          element={<WorldHeritageListByCountry my={12} />}
        />
      </Route>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default IndexRoutes;
