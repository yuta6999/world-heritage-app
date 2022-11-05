import create from 'zustand';

interface BearState {
  bears: number;
  increaseBear: () => void;
  removeAllBears: () => void;
}

export const useBearStore = create<BearState>((set) => ({
  bears: 0,
  increaseBear: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));
