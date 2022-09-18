import { INavbarProps } from "./types";
import styles from "./Navbar.module.scss";
const { navbar, navbarButton } = styles;
const Navbar = ({
  onPrevClick,
  onNextClick,
  isFirstPage,
  isLastPage,
}: INavbarProps) => {
  return (
    <div className={navbar}>
      <div>
        <button
          className={navbarButton}
          onClick={onPrevClick}
          disabled={isFirstPage}
        >
          Previous
        </button>
      </div>
      <div>
        <button
          className={navbarButton}
          onClick={onNextClick}
          disabled={isLastPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export { Navbar };
