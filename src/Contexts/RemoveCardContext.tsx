import { createContext, useState, ReactNode } from "react";

interface RemoveCardContextProps {
  removeCard: boolean;
  setRemoveCard: (removeCard: boolean) => void;
}

interface RemoveCardProviderProps {
  children: ReactNode;
}

export const RemoveCardContext = createContext<RemoveCardContextProps>(
  undefined!
);
export const RemoveCardProvider = ({ children }: RemoveCardProviderProps) => {
  const [removeCard, setRemoveCard] = useState(false);

  return (
    <RemoveCardContext.Provider value={{ removeCard, setRemoveCard }}>
      {children}
    </RemoveCardContext.Provider>
  );
};
