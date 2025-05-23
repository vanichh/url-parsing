import type { StateCreator } from "zustand";

export interface NotificationSlice {
  typeNotification: "success" | "error" | "warning" | "info";
  valueNotification: string;
  setValueNotification: (value: string) => void;
  setTypeNotification: (type: NotificationSlice["typeNotification"]) => void;
}

export type CreateNotificationSlice = StateCreator<NotificationSlice, [], [], NotificationSlice>;
