import type { FC } from 'react';
import { useState } from 'react';
import { Checkbox } from '@chakra-ui/react';
import { useStore } from 'stores/Store';

type Props = {
  id: number;
};

const FavoriteCheckBox: FC<Props> = ({ id }) => {
  const favoriteList = useStore((state) => state.favoriteList);
  const addFavorite = useStore((state) => state.addFavorite);
  const removeFavorite = useStore((state) => state.removeFavorite);

  const [isFavorite, setIsFavorite] = useState(favoriteList.includes(id));

  const handleChange = () => {
    isFavorite ? removeFavorite(id) : addFavorite(id);
    setIsFavorite(!isFavorite);
  };

  return <Checkbox isChecked={isFavorite} onChange={handleChange}></Checkbox>;
};

export default FavoriteCheckBox;
