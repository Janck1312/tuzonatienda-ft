import { createContext, type Dispatch, type SetStateAction } from "react";

type AppContextType = {
  user: unknown;
  setUser: Dispatch<SetStateAction<unknown>>;
} | null;

export const AppContext = createContext<AppContextType>(null);