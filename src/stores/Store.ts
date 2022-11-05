import create from 'zustand';

interface FavoriteState {
  favoriteList: number[];
  addFavorite: (id: number) => void;
  removeFavorite: (id: number) => void;
}

export const useStore = create<FavoriteState>((set) => ({
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
