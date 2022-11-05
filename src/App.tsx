import type { FC } from 'react';
import create from 'zustand';
import Providers from './Providers';
import IndexRoutes from './routes';

interface BearState {
  bears: number;
  increaseBear: () => void;
  removeAllBears: () => void;
}
const useBearStore = create<BearState>((set) => ({
  bears: 0,
  increaseBear: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

const BearCounter: FC = () => {
  const bears = useBearStore((state) => state.bears);

  return (
    <div>
      {[...Array(bears).keys()].map((n) => (
        <span key={n} role="img" aria-label="bear">
          {' '}
        </span>
      ))}
    </div>
  );
};

const CountButtons: FC = () => {
  const increaseBear = useBearStore((state) => state.increaseBear);
  const removeAllBears = useBearStore((state) => state.removeAllBears);

  return (
    <div>
      <button onClick={increaseBear}>One Up</button>
      <button onClick={removeAllBears}>Clear</button>
    </div>
  );
};

const App: FC = () => (
  <Providers>
    <h1>Hello Bears!</h1>
    <CountButtons />
    <BearCounter />
    <IndexRoutes />
  </Providers>
);

export default App;
