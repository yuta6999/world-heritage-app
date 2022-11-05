import type { FC } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const Outline: FC<{ my?: number | string }> = ({ my = 0 }) => (
  <Box my={my}>
    <Heading as="h2" size="lg">
      概要
    </Heading>
    <Box mt={8}>
      <Text my={4}>世界遺産について学ぶ</Text>
    </Box>
  </Box>
);

export default Outline;
