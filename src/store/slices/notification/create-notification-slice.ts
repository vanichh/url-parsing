import type { CreateNotificationSlice } from "./types";

export const createNotificationSlice: CreateNotificationSlice = (set) => ({
  valueNotification: "",
  typeNotification: "info",
  setValueNotification: (valueNotification) => set(() => ({ valueNotification })),
  setTypeNotification: (typeNotification) => set(() => ({ typeNotification })),
});
