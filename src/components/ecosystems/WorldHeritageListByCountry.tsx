import type { FC } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Box, Heading } from '@chakra-ui/react';
import { worldHeritageData, countryData } from 'data';
import { COUNTRY_CODE } from 'domains';
import { Helmet } from 'react-helmet-async';
import WorldHeritageList from 'components/organisms/WorldHeritageList';

const WorldHeritageListByCountry: FC<{ my?: number | string }> = ({
  my = 0,
}) => {
  const { countryID = '' } = useParams();

  if (COUNTRY_CODE.includes(countryID as never)) {
    const worldHeritages = worldHeritageData.filter(
      (worldHeritage) => worldHeritage.countryID === countryID
    );
    const country = countryData.find((country) => country.id === countryID);

    return (
      <Box my={my} w="2xl">
        <Helmet>
          <title>世界遺産一覧｜{country?.name}｜世界遺産</title>
        </Helmet>
        <Heading as="h2" size="lg">
          {country?.name}
        </Heading>
        <WorldHeritageList worldHeritages={worldHeritages} />
      </Box>
    );
  }

  return <Navigate to="/" replace />;
};

export default WorldHeritageListByCountry;
