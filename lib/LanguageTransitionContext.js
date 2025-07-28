import { createContext, useContext, useState } from 'react';

const LanguageTransitionContext = createContext();

export const LanguageTransitionProvider = ({ children }) => {
  const [isSwitchingLang, setIsSwitchingLang] = useState(false);

  return (
    <LanguageTransitionContext.Provider value={{ isSwitchingLang, setIsSwitchingLang }}>
      {children}
    </LanguageTransitionContext.Provider>
  );
};

export const useLangTransition = () => useContext(LanguageTransitionContext);