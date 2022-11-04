import type { FC, SyntheticEvent } from 'react';
import { Navigate, useParams, useSearchParams } from 'react-router-dom';
import { SpinnerIcon } from '@chakra-ui/icons';
import { Box, IconButton, Heading } from '@chakra-ui/react';
import { worldHeritageData, countryData } from 'data';
import { COUNTRY_CODE } from 'domains';
import { Helmet } from 'react-helmet-async';
import WorldHeritageList from 'components/organisms/WorldHeritageList';

const WorldHeritageListByCountry: FC<{ my?: number | string }> = ({
  my = 0,
}) => {
  const { countryID = '' } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const isLoading = Boolean(searchParams.get('loading'));

  const handleLoading = (event: SyntheticEvent) => {
    event.stopPropagation();
    const loading = !isLoading ? 'true' : '';
    setSearchParams(`loading=${loading}`);
  };

  if (COUNTRY_CODE.includes(countryID as never)) {
    // if (COUNTRY_CODE.includes(countryID as 'shohoku')) {
    const worldHeritages = worldHeritageData.filter(
      (worldHeritage) => worldHeritage.countryID === countryID
    );
    const country = countryData.find((country) => country.id === countryID);

    return (
      <Box my={my} w="2xl">
        <Helmet>
          <title>登場人物｜{country?.name}｜SLAM DUNK</title>
        </Helmet>
        <Heading as="h2" size="lg">
          {country?.name}
        </Heading>
        <Box textAlign="right">
          <IconButton
            onClick={handleLoading}
            aria-label="ローディング切り替え"
            icon={<SpinnerIcon />}
          />
        </Box>
        <WorldHeritageList
          worldHeritages={worldHeritages}
          // color={school?.color}
          isLoading={isLoading}
        />
      </Box>
    );
  }

  return <Navigate to="/" replace />;
};

export default WorldHeritageListByCountry;
