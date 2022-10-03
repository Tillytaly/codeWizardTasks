import React, { useRef, useCallback, useEffect } from "react";
function useClickOutside(callback: any) {
  const containerRef = useRef<null | HTMLDivElement>(null);

  const onClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        callback(event);
      }
    },
    [callback]
  );

  useEffect(() => {
    document.addEventListener("click", onClickOutside);

    return () => document.removeEventListener("click", onClickOutside);
  }, [onClickOutside]);

  return { containerRef };
}

export { useClickOutside };
