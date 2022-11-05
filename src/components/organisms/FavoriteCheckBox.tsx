import type { FC } from 'react';
// import { useState } from 'react';
import { Checkbox } from '@chakra-ui/react';
import { useStore } from 'stores/Store';

type Props = {
  id: number;
  isFavorite: boolean;
};

// const favoriteList = JSON.parse(
//   localStorage.getItem('world_heritage_app') as string
// ) as number[];

const FavoriteCheckBox: FC<Props> = ({ id, isFavorite }) => {
  // const [isFavorite, setIsFavorite] = useState<boolean>(
  //   favoriteList.includes(id)
  // );

  // const favoriteList = useStore((state) => state.favoriteList);
  const addFavorite = useStore((state) => state.addFavorite);
  const removeFavorite = useStore((state) => state.removeFavorite);

  const handleChange = () => {
    // setIsFavorite(!isFavorite);

    if (!isFavorite) {
      addFavorite(id);
    } else {
      removeFavorite(id);
    }
  };

  return <Checkbox isChecked={isFavorite} onChange={handleChange}></Checkbox>;
};

export default FavoriteCheckBox;
