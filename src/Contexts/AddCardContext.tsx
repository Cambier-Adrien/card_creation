import { createContext, useState, ReactNode } from "react";

interface AddCardContextProps {
  addCard: boolean;
  setAddCard: (addCard: boolean) => void;
}

interface AddCardProviderProps {
  children: ReactNode;
}

export const AddCardContext = createContext<AddCardContextProps>(undefined!);
export const AddCardProvider = ({ children }: AddCardProviderProps) => {
  const [addCard, setAddCard] = useState(false);

  return (
    <AddCardContext.Provider value={{ addCard, setAddCard }}>
      {children}
    </AddCardContext.Provider>
  );
};
