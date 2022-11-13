import type { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { Helmet } from 'react-helmet-async';
import FirebaseTest from './FirebaseTest';

const WorldHeritageDetail: FC<{ my?: number | string }> = ({ my = 0 }) => {
  const worldHeritageID: string = useParams().id as string;

  return (
    <Box my={my} w="">
      <Helmet>
        <title>世界遺産一覧｜{worldHeritageID}｜世界遺産</title>
      </Helmet>
      {/* <Heading as="h2" size="lg">
        ID:{worldHeritageID} の詳細
      </Heading> */}
      <FirebaseTest worldHeritageID={worldHeritageID}></FirebaseTest>
    </Box>
  );
};

export default WorldHeritageDetail;
