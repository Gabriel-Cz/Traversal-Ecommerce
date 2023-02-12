import React from 'react'

interface CartFooterProps {
	children: React.ReactNode
}

export const CartFooter: React.FC<CartFooterProps> = ({ children }) => {
	return (
		<div className="my-2 py-2 d-flex justify-content-center align-items-center">
			{/* <div className="mx-2">
				<ClearCartButton />
			</div>
			<div className="mx-2">
				<CheckoutCartButton onCheckout={} />
			</div> */}
			{children}
		</div>
	);
}