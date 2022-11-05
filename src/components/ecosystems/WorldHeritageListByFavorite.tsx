import type { FC } from 'react';
// import { Navigate, useParams } from 'react-router-dom';
import { Box, Heading } from '@chakra-ui/react';
import { worldHeritageData } from 'data';
// import { COUNTRY_CODE } from 'domains';
import { Helmet } from 'react-helmet-async';
import WorldHeritageList from 'components/organisms/WorldHeritageList';

const WorldHeritageListByFavorite: FC<{ my?: number | string }> = ({
  my = 0,
}) => {
  const worldHeritages = worldHeritageData.filter(
    (worldHeritage) => worldHeritage.id === 745 // 仮置き
  );

  return (
    <Box my={my} w="2xl">
      <Helmet>
        <title>世界遺産一覧｜お気に入り｜世界遺産</title>
      </Helmet>
      <Heading as="h2" size="lg">
        お気に入り
      </Heading>
      <WorldHeritageList worldHeritages={worldHeritages} />
    </Box>
  );

  // return <Navigate to="/" replace />;
};

export default WorldHeritageListByFavorite;
