import type { FC } from 'react';
import { Button } from '@chakra-ui/react';
import { useBearStore } from 'stores/BearStore';

const BearCountButtons: FC = () => {
  const increaseBear = useBearStore((state) => state.increaseBear);
  const removeAllBears = useBearStore((state) => state.removeAllBears);

  return (
    <div>
      <Button onClick={increaseBear}>One Up</Button>
      <Button ml={2} onClick={removeAllBears}>
        Clear
      </Button>
    </div>
  );
};

export default BearCountButtons;
