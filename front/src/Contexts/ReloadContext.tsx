import { createContext, useState, ReactNode } from "react";

interface ReloadContextProps {
  reload: boolean;
  setReload: (reload: boolean) => void;
}

interface ReloadProviderProps {
  children: ReactNode;
}

export const ReloadContext = createContext<ReloadContextProps>(undefined!);
export const ReloadProvider = ({ children }: ReloadProviderProps) => {
  const [reload, setReload] = useState(false);

  return (
    <ReloadContext.Provider value={{ reload, setReload }}>
      {children}
    </ReloadContext.Provider>
  );
};
