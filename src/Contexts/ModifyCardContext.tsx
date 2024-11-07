import { createContext, useState, ReactNode } from "react";

interface ModifyCardContextProps {
  modifyCard: boolean;
  setModifyCard: (modifyCard: boolean) => void;
}

interface ErrorModifyContextProps {
  errorModify: boolean;
  setErrorModify: (errorModify: boolean) => void;
}

interface ContextProviderProps {
  children: ReactNode;
}

export const ModifyCardContext = createContext<ModifyCardContextProps>(
  undefined!
);
export const ErrorModifyContext = createContext<ErrorModifyContextProps>(
  undefined!
);

export const ModifyProvider = ({ children }: ContextProviderProps) => {
  const [modifyCard, setModifyCard] = useState(false);
  const [errorModify, setErrorModify] = useState(false);

  return (
    <ModifyCardContext.Provider value={{ modifyCard, setModifyCard }}>
      <ErrorModifyContext.Provider value={{ errorModify, setErrorModify }}>
        {children}
      </ErrorModifyContext.Provider>
    </ModifyCardContext.Provider>
  );
};
