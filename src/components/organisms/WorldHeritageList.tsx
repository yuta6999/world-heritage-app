import type { FC } from 'react';
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
import FavoriteCheckBox from 'components/organisms/FavoriteCheckBox';

type Props = {
  worldHeritages: WorldHeritage[];
  color?: string;
  isLoading?: boolean;
};

const favoriteList = JSON.parse(
  localStorage.getItem('world_heritage_app') as string
) as number[];

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
              {/* <StarIcon /> */}
              <Box ml={3}>
                <Text>・{worldHeritage.name}</Text>
                <Text as="span" ml={2}>
                  登録年：{worldHeritage.year}
                </Text>
                <Text as="span" ml={2}>
                  登録基準：{worldHeritage.registrationCriteria}
                </Text>
                <Text as="span" ml={2}>
                  国：{worldHeritage.countryID}
                </Text>
              </Box>
              <FavoriteCheckBox
                id={worldHeritage.id}
                isFavorite={favoriteList.includes(worldHeritage.id)}
              />
            </Flex>
          </ListItem>
        ))}
      </List>
    )}
  </>
);

export default WorldHeritageList;
