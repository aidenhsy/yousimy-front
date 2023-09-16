// SideNavContext.tsx
import { createContext, useState, ReactNode, useContext } from 'react';

interface SideNavContextType {
  isOpen: boolean;
  toggleSideNav: () => void;
}

export const SideNavContext = createContext<SideNavContextType>({
  isOpen: false,
  toggleSideNav: () => {},
});

export const useSideNav = () => {
  return useContext(SideNavContext);
};

export const SideNavProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideNav = () => {
    setIsOpen(!isOpen);
  };

  const value = {
    isOpen,
    toggleSideNav,
  };

  return (
    <SideNavContext.Provider value={value}>{children}</SideNavContext.Provider>
  );
};
