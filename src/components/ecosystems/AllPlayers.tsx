import type { FC } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { worldHeritageData } from 'data';
import { Helmet } from 'react-helmet-async';
import WorldHeritageList from 'components/organisms/WorldHeritageList';

const SORT = {
  year: '登録順',
  countryID: '国順',
};
type Props = { sortType?: keyof typeof SORT; my?: number | string };

const AllPlayers: FC<Props> = ({ sortType = 'year', my = 0 }) => {
  const worldHeritages = worldHeritageData.sort((p1, p2) =>
    Number(p1[sortType]) < Number(p2[sortType]) ? -1 : 1
  );

  return (
    <Box my={my} w="2xl">
      <Helmet>
        <title>登場人物｜{SORT[sortType]}</title>
      </Helmet>
      <Heading as="h2" size="lg">
        すべての選手｜{SORT[sortType]}
      </Heading>
      <WorldHeritageList worldHeritages={worldHeritages} />
    </Box>
  );
};

export default AllPlayers;
