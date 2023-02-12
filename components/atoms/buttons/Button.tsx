import type { ButtonBaseType } from 'types/Base';
import styles from './Buttons.module.scss';

export interface ButtonProps extends ButtonBaseType {
	children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
	children,
	className,
	...rest
}) => {
	return (
		<button className={[styles.default, className].join(' ')} {...rest}>
			{children && children}
		</button>
	)
}

Button.defaultProps = {
	className: ''
}