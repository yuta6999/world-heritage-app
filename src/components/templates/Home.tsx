import type { FC } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { countryData } from 'data';
import { Helmet } from 'react-helmet-async';
import StoryOutline from 'components/organisms/AppOutline';
import CharacterIndex from 'components/organisms/WorldHeritageIndex';

const title = '世界遺産';

const Home: FC = () => (
  <Box maxW="3xl">
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <Heading as="h1" size="xl" my={4}>
      {title}
    </Heading>
    <StoryOutline my={10} />
    <CharacterIndex countries={countryData} my={16} />
  </Box>
);

export default Home;
