import type { FC } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { worldHeritageData } from 'data';
import { Helmet } from 'react-helmet-async';
import WorldHeritageList from 'components/organisms/WorldHeritageList';

const WorldHeritageListByFavorite: FC<{ my?: number | string }> = ({
  my = 0,
}) => {
  const favoriteList: number[] = [744, 745];
  localStorage.setItem('world_heritage_app', JSON.stringify(favoriteList));
  const values = JSON.parse(
    localStorage.getItem('world_heritage_app') as string
  ) as number[];

  console.log(values);

  const worldHeritages = worldHeritageData.filter((worldHeritage) =>
    values.includes(worldHeritage.id)
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
};

export default WorldHeritageListByFavorite;
