import type { FC } from 'react';
import create from 'zustand';
import Providers from './Providers';
import IndexRoutes from './routes';

interface BearState {
  bears: number;
  increaseBear: () => void;
  removeAllBears: () => void;
}

interface FavoriteState {
  favoriteList: number[];
  addFavorite: (id: number) => void;
  removeFavorite: (id: number) => void;
}

const useBearStore = create<BearState>((set) => ({
  bears: 0,
  increaseBear: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

const useFavoriteStore = create<FavoriteState>((set) => ({
  favoriteList: JSON.parse(
    localStorage.getItem('world_heritage_app') as string
  ) as number[],
  addFavorite: (id: number) =>
    set((state) => {
      state.favoriteList.push(id);
      localStorage.setItem(
        'world_heritage_app',
        JSON.stringify(state.favoriteList)
      );

      return { favoriteList: state.favoriteList };
    }),
  removeFavorite: (id: number) =>
    set((state) => {
      state.favoriteList = state.favoriteList.filter(
        (favorite) => favorite !== id
      );
      localStorage.setItem(
        'world_heritage_app',
        JSON.stringify(state.favoriteList)
      );

      return { favoriteList: state.favoriteList };
    }),
}));

const BearCounter: FC = () => {
  const bears = useBearStore((state) => state.bears);

  return (
    <div>
      {[...Array(bears).keys()].map((n) => (
        <span key={n} role="img" aria-label="bear">
          🐻
        </span>
      ))}
    </div>
  );
};

const Fav: FC = () => {
  const favoriteList = useFavoriteStore((state) => state.favoriteList);
  const addFavorite = useFavoriteStore((state) => state.addFavorite);
  const removeFavorite = useFavoriteStore((state) => state.removeFavorite);

  return (
    <div>
      {favoriteList.map((favorite: number, index) => (
        <div key={index}>
          {favorite}
          <button onClick={() => addFavorite(favorite)}>Add</button>
          <button onClick={() => removeFavorite(favorite)}>Remove</button>
        </div>
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
      <div></div>
    </div>
  );
};

const App: FC = () => (
  <Providers>
    <h1>Hello Bears!</h1>
    <CountButtons />
    <BearCounter />
    <Fav />
    <IndexRoutes />
  </Providers>
);

export default App;
