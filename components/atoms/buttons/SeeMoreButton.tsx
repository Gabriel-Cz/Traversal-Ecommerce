import Link from "next/link";
import styles from "./Buttons.module.scss";

export const SeeMoreButton: React.FC = () => {
  return (
    <Link href="/about" passHref className={styles.seeMore}>
      <a>
        <span>See More</span>
      </a>
    </Link>
  );
}