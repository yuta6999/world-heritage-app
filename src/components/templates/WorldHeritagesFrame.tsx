import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import HomeButton from 'components/organisms/HomeButton';

const WorldHeritagesFrame: FC = () => (
  <Box>
    <Outlet />
    <HomeButton my={16} />
  </Box>
);

export default WorldHeritagesFrame;
