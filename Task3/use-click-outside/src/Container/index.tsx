import { useOnClickOutsideContext } from "../Contexts/OnClickOutsideContext";
import styles from "./Container.module.scss";

const { container } = styles;

const Container = () => {
  const { containerRef } = useOnClickOutsideContext();

  return <div ref={containerRef} className={container}></div>;
};
export { Container };
