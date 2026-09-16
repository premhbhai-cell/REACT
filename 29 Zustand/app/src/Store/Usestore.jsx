// to create globle store
import { persist } from "zustand/middleware";
import { create } from "zustand";

const useStore = create(
  persist((set) => ({
    count: 0,

    increase: () =>
      set((state) => ({
        count: state.count + 1,
      })),
  })),
);

export default useStore;
