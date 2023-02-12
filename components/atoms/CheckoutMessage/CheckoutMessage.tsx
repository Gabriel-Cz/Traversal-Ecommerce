
import { MessageVariantType } from "@/types";
import styles from './CheckoutMessage.module.scss'

interface CheckoutMessageProps {
	message: string;
	variant: MessageVariantType;
}

export const CheckoutMessage: React.FC<CheckoutMessageProps> = ({ message, variant }) => {
	return (
		<div className="d-flex flex-column justify-content-center align-items-center py-4">
			<h1 className={styles.messageHeader}>
				<span style={{ color: typeof variant }}>
					{message}
				</span>
				Continue shopping.
			</h1>
		</div>
	);
}