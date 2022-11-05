import { useEffect } from 'react';
import type { FC } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import AllWorldHeritages from 'components/ecosystems/AllWorldHeritages';
import WorldHeritageListByCountry from 'components/ecosystems/WorldHeritageListByCountry';
import WorldHeritageListByFavorite from 'components/ecosystems/WorldHeritageListByFavorite';
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
      <Route path="worldHeritages" element={<WorldHeritagesFrame />}>
        <Route path="" element={<AllWorldHeritages my={12} />} />
        <Route
          path="favorite"
          element={<WorldHeritageListByFavorite my={12} />}
        />
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
