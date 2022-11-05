import type { FC } from 'react';
import { useBearStore } from 'stores/BearStore';
import BearCountButtons from './BearCountButtons';

const BearCounter: FC = () => {
  const bears = useBearStore((state) => state.bears);

  return (
    <div>
      <BearCountButtons />
      {[...Array(bears).keys()].map((n) => (
        <span key={n} role="img" aria-label="bear">
          🐻
        </span>
      ))}
    </div>
  );
};

export default BearCounter;
