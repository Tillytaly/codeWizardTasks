import { ReactNode, RefObject } from "react";

export interface IOnClickOutsideContext {
  containerRef: RefObject<HTMLDivElement>;
}

export interface PropsWithChildren {
  children: ReactNode;
}
