import Link from "next/link";
import styles from './BlockLink.module.scss';

interface BlockLinkProps {
  children: React.ReactNode;
  to: string;
}

export const BlockLink: React.FC<BlockLinkProps> = ({ to, children }) => {
	return (
		<div className={styles.imageContainer}>
			<Link href={to} passHref>
				<a>
					{children}
				</a>
			</Link>
		</div>
	);
}