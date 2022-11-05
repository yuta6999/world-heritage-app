import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { Box, Heading, ListItem, UnorderedList } from '@chakra-ui/react';
import type { Country } from 'domains';

type Props = { countries: Country[]; my?: number | string };

const WorldHeritageIndex: FC<Props> = ({ countries, my = 0 }) => (
  <Box my={my}>
    <Heading as="h2" size="lg">
      各国の世界遺産
    </Heading>
    <UnorderedList mt={8} spacing={2}>
      {countries.map((aaa) => (
        <ListItem key={aaa.id}>
          <Link to={`/worldHeritages/${aaa.id}`}>{aaa.name}の世界遺産</Link>
        </ListItem>
      ))}
      <ListItem>
        <Link to={`/worldHeritages`}>すべての世界遺産（登録順）</Link>
      </ListItem>
      <ListItem>
        <Link to={`/worldHeritages/favorite`}>
          お気に入りの世界遺産（登録順）
        </Link>
      </ListItem>
    </UnorderedList>
  </Box>
);

export default WorldHeritageIndex;
