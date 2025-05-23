import { create } from "zustand";
import { createMainSlice } from "./slices/main";
import { createNotificationSlice } from "./slices/notification";
import type { UseStoreType } from "./types";
import { devtools } from "zustand/middleware";

export const useStore = create<UseStoreType>()(
  devtools((...store) => ({
    ...createMainSlice(...store),
    ...createNotificationSlice(...store),
  }))
);
