import React from 'react';
import styles from 'OverlayInfo.module.scss';

interface OverlayInfoProps {
	children: React.ReactNode;
}

export const OverlayInfo: React.FC<OverlayInfoProps> = ({ children }) => {
	return (
		<div className={styles.textOverflowWrapper}>
			<p className={styles.textOverflow}>
        {children}
      </p>
		</div>
	);
}