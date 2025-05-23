import type { MainSliceType } from "./slices/main/types";
import type { NotificationSlice } from "./slices/notification/types";

export type UseStoreType = MainSliceType & NotificationSlice;
