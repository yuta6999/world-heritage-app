import type { FC, ChangeEvent } from 'react';
import { useState } from 'react';
import { Checkbox } from '@chakra-ui/react';

type Props = {
  id: number;
};

const favoriteList = JSON.parse(
  localStorage.getItem('world_heritage_app') as string
) as number[];

const FavoriteCheckBox: FC<Props> = ({ id = 0 }) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(
    favoriteList.includes(id)
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(id);
    console.log(event.target.checked);
    setIsFavorite(!isFavorite);

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
