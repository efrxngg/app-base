import {createContext, ReactNode} from 'react';

export type AppContextArgs = {
  title: string;
};

export const AppContext = createContext<AppContextArgs>({title: 'default'});

interface AppContextProviderProps {
  children: ReactNode;
}

export function AppContextProvider({children}: AppContextProviderProps) {
  //Estado global a mantener
  //funciones para modificar el estado global a mantener
  return (<AppContext.Provider value={{
    title: 'Custom'
  }}>
    {children}
  </AppContext.Provider>);
}
