import type { StateCreator } from "zustand";

export interface MainSliceType {
  isError: boolean;
  valueUrl: string;
  url: URL | null;
  errorValue: string;
  setIsError: (value: boolean) => void;
  setValueUrl: (value: string) => void;
  setUrl: (value: URL) => void;
  setErrorValue: (value: string) => void;
}

export type CreateMainSlicetype = StateCreator<MainSliceType, [], [], MainSliceType>;
