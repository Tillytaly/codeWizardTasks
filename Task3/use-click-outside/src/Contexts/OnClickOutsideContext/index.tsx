import { useContext, createContext, useCallback } from "react";
import { IOnClickOutsideContext, PropsWithChildren } from "./types";
import { useClickOutside } from "../../Hooks/useClickOutside";

const OnClickOutsideContext = createContext<null | IOnClickOutsideContext>(
  null
);

export const OnClickOutsideProvider = ({ children }: PropsWithChildren) => {
  const onClickOutside = useCallback((event: MouseEvent) => {
    alert("Clicked outside of the container.");
  }, []);

  const { containerRef } = useClickOutside(onClickOutside);

  return (
    <OnClickOutsideContext.Provider value={{ containerRef }}>
      {children}
    </OnClickOutsideContext.Provider>
  );
};

export const useOnClickOutsideContext = () => {
  const context = useContext(OnClickOutsideContext);

  if (!context) throw new Error("No context provided.");

  return context;
};
