import type { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Heading } from '@chakra-ui/react';
import { Helmet } from 'react-helmet-async';

const WorldHeritageDetail: FC<{ my?: number | string }> = ({ my = 0 }) => {
  const { worldHeritageID = '' } = useParams();

  return (
    <Box my={my} w="2xl">
      <Helmet>
        <title>世界遺産一覧｜{worldHeritageID}｜世界遺産</title>
      </Helmet>
      <Heading as="h2" size="lg">
        準備中...
      </Heading>
    </Box>
  );
};

export default WorldHeritageDetail;
