import type { FC } from 'react';
import { Checkbox } from '@chakra-ui/react';
import { useStore } from 'stores/Store';

type Props = {
  id: number;
  isFavorite: boolean;
};

const FavoriteCheckBox: FC<Props> = ({ id, isFavorite }) => {
  const addFavorite = useStore((state) => state.addFavorite);
  const removeFavorite = useStore((state) => state.removeFavorite);

  const handleChange = () => {
    isFavorite ? removeFavorite(id) : addFavorite(id);
  };

  return <Checkbox isChecked={isFavorite} onChange={handleChange}></Checkbox>;
};

export default FavoriteCheckBox;
