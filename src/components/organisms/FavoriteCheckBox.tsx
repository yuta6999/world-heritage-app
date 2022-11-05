import type { FC } from 'react';
// import { useState } from 'react';
import { Checkbox } from '@chakra-ui/react';

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

  const handleChange = () => {
    // setIsFavorite(!isFavorite);

    if (!isFavorite) {
      const favoriteList = JSON.parse(
        localStorage.getItem('world_heritage_app') as string
      ) as number[];

      favoriteList.push(id);

      localStorage.setItem('world_heritage_app', JSON.stringify(favoriteList));
    } else {
      let favoriteList = JSON.parse(
        localStorage.getItem('world_heritage_app') as string
      ) as number[];

      favoriteList = favoriteList.filter((item) => item !== id);

      localStorage.setItem('world_heritage_app', JSON.stringify(favoriteList));
    }
  };

  return <Checkbox isChecked={isFavorite} onChange={handleChange}></Checkbox>;
};

export default FavoriteCheckBox;
