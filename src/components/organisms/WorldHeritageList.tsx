import type { FC } from 'react';
import { StarIcon } from '@chakra-ui/icons';
import {
  // Avatar,
  Box,
  Flex,
  List,
  ListItem,
  Spinner,
  Text,
} from '@chakra-ui/react';
import type { WorldHeritage } from 'domains';

type Props = {
  worldHeritages: WorldHeritage[];
  color?: string;
  isLoading?: boolean;
};

const WorldHeritageList: FC<Props> = ({
  worldHeritages = [],
  color = 'teal.500',
  isLoading = false,
}) => (
  <>
    {isLoading ? (
      <Flex my={14} h="20rem" justify="center" align="center">
        <Spinner size="xl" color={color} />
      </Flex>
    ) : (
      <List my={10}>
        {worldHeritages.map((worldHeritage) => (
          <ListItem key={worldHeritage.id} m={6}>
            <Flex>
              {/* <Avatar size="md" bg={color} /> */}
              <StarIcon />
              <Box ml={3}>
                <Text>{worldHeritage.name}</Text>
                {/* <Text as="span">{worldHeritage.grade}年生</Text> */}
                <Text as="span" ml={2}>
                  {worldHeritage.summary ?? ''}
                </Text>
              </Box>
            </Flex>
          </ListItem>
        ))}
      </List>
    )}
  </>
);

export default WorldHeritageList;
