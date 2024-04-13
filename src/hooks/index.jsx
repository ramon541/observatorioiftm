import { useCallback, useState } from "react";
import { useBetween } from "use-between";

const useMenu = () => {
  const [menu, setMenu] = useState(false);
  const openMenu = useCallback(() => setMenu(true), []);
  const closeMenu = useCallback(() => setMenu(false), []);
  return {
    menu,
    openMenu,
    closeMenu,
  };
};

export const useSharedMenu = () => useBetween(useMenu);
