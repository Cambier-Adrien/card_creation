import { createContext, useState, ReactNode } from "react";

interface ModifyCardContextProps {
  modifyCard: boolean;
  setModifyCard: (modifyCard: boolean) => void;
}

interface ModifyCardProviderProps {
  children: ReactNode;
}

export const ModifyCardContext = createContext<ModifyCardContextProps>(
  undefined!
);
export const ModifyCardProvider = ({ children }: ModifyCardProviderProps) => {
  const [modifyCard, setModifyCard] = useState(false);

  return (
    <ModifyCardContext.Provider value={{ modifyCard, setModifyCard }}>
      {children}
    </ModifyCardContext.Provider>
  );
};
