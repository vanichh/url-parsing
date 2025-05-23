import type { CreateMainSlicetype } from "./types";

export const createMainSlice: CreateMainSlicetype = (set) => ({
  valueUrl: "",
  isError: false,
  url: null,
  errorValue: "",
  setIsError: (isError) => set(() => ({ isError })),
  setValueUrl: (value) => set(() => ({ valueUrl: value })),
  setUrl: (url) => set(() => ({ url })),
  setErrorValue: (errorValue) => set(() => ({ errorValue })),
});
