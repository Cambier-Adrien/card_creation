import { createContext, useState, ReactNode } from "react";

interface AddCardContextProps {
  addCard: boolean;
  setAddCard: (addCard: boolean) => void;
}

interface ErrorAddCardContextProps {
  errorAddCard: boolean;
  setErrorAddCard: (errorAddCard: boolean) => void;
}

interface ContextProviderProps {
  children: ReactNode;
}

export const AddCardContext = createContext<AddCardContextProps>(undefined!);
export const ErrorAddCardContext = createContext<ErrorAddCardContextProps>(
  undefined!
);

export const AddProvider = ({ children }: ContextProviderProps) => {
  const [addCard, setAddCard] = useState(false);
  const [errorAddCard, setErrorAddCard] = useState(false);

  return (
    <AddCardContext.Provider value={{ addCard, setAddCard }}>
      <ErrorAddCardContext.Provider value={{ errorAddCard, setErrorAddCard }}>
        {children}
      </ErrorAddCardContext.Provider>
    </AddCardContext.Provider>
  );
};
