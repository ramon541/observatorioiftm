import { useRef, useState, useEffect } from "react";
import { useBetween } from "use-between";
import { useSharedWindowHeight } from "../../../hooks";

const useLogicState = () => {
  const ref = useRef();
  const [height, setHeight] = useState(0);

  return {
    ref,
    height,
    setHeight,
  };
};
export const useSharedLogicState = () => useBetween(useLogicState);

export function useOnInit() {
  const { setHeight, ref } = useSharedLogicState();
  const { windowHeight } = useSharedWindowHeight();

  useEffect(() => {
    const currentHeight = ref.current ? ref.current.offsetHeight : 0;
    setHeight((100 * currentHeight) / window.innerHeight);
  }, [ref.offsetHeight, windowHeight]);
}
