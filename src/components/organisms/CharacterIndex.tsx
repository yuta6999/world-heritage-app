import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { Box, Heading, ListItem, UnorderedList } from '@chakra-ui/react';
import type { School } from 'domains';

type Props = { schools: School[]; my?: number | string };

const CharacterIndex: FC<Props> = ({ schools, my = 0 }) => (
  <Box my={my}>
    <Heading as="h2" size="lg">
      各国の世界遺産
    </Heading>
    <UnorderedList mt={8} spacing={2}>
      {schools.map((school) => (
        <ListItem key={school.id}>
          <Link to={`/characters/${school.id}`}>{school.name}の世界遺産</Link>
        </ListItem>
      ))}
      <ListItem>
        <Link to={`/characters`}>すべての世界遺産（登録順）</Link>
      </ListItem>
    </UnorderedList>
  </Box>
);

export default CharacterIndex;
