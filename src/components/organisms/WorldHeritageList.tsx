import type { FC } from 'react';
import { Box, Flex, List, ListItem, Text } from '@chakra-ui/react';
import type { WorldHeritage } from 'domains';
import FavoriteCheckBox from 'components/organisms/FavoriteCheckBox';

type Props = {
  worldHeritages: WorldHeritage[];
  color?: string;
  isLoading?: boolean;
};

const WorldHeritageList: FC<Props> = ({ worldHeritages = [] }) => {
  return (
    <List my={10}>
      {worldHeritages.map((worldHeritage) => (
        <ListItem key={worldHeritage.id} m={6}>
          <Flex>
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
            <FavoriteCheckBox id={worldHeritage.id} />
          </Flex>
        </ListItem>
      ))}
    </List>
  );
};

export default WorldHeritageList;
