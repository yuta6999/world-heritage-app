import create from 'zustand';
import { LOCAL_STORAGE_KEY } from 'domains/constants';

interface FavoriteState {
  favoriteList: number[];
  addFavorite: (id: number) => void;
  removeFavorite: (id: number) => void;
}

if (localStorage.getItem(LOCAL_STORAGE_KEY) == null) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([]));
}

export const useStore = create<FavoriteState>((set) => ({
  favoriteList: JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_KEY) as string
  ) as number[],
  addFavorite: (id: number) =>
    set((state) => {
      state.favoriteList.push(id);
      localStorage.setItem(
        LOCAL_STORAGE_KEY,
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
        LOCAL_STORAGE_KEY,
        JSON.stringify(state.favoriteList)
      );

      return { favoriteList: state.favoriteList };
    }),
}));
