import {
  createContext,
  useState,
  ReactNode,
  useContext,
  Dispatch,
  SetStateAction,
} from 'react';

import { Tool } from '../types/Tool';

interface ToolFilteredProviderProps {
  children: ReactNode;
}

interface ToolsFilteredContextData {
  toolsFiltered: Tool[];
  setToolsFiltered: Dispatch<SetStateAction<Tool[]>>;
  isFiltered: boolean;
  isNoData: boolean;
  setIsNoData: Dispatch<SetStateAction<boolean>>;
}

const ToolsFilteredContext = createContext<ToolsFilteredContextData>(
  {} as ToolsFilteredContextData,
);

export function ToolFilteredProvider({
  children,
}: ToolFilteredProviderProps): JSX.Element {
  const [toolsFiltered, setToolsFiltered] = useState<Tool[]>([]);
  const [isNoData, setIsNoData] = useState(false);
  const isFiltered = Boolean(toolsFiltered.length);

  return (
    <ToolsFilteredContext.Provider
      value={{
        toolsFiltered,
        setToolsFiltered,
        isFiltered,
        isNoData,
        setIsNoData,
      }}
    >
      {children}
    </ToolsFilteredContext.Provider>
  );
}

export function useToolsFiltered(): ToolsFilteredContextData {
  const context = useContext(ToolsFilteredContext);
  return context;
}
