import type { NextApiRequest, NextApiResponse } from 'next'
import type { ProductType } from 'types/Product';
import Stripe from 'stripe';
import stripeModel from '@/utils/product-stripe-format'

const stripe = new Stripe(process.env.STRIPE_SK, {
	apiVersion: "2020-08-27"
});
const CHECKOUT_DOMAIN = process.env.CHECKOUT_DOMAIN || '';

const handler = async (
	req: NextApiRequest,
	res: NextApiResponse
): Promise<void> => {
	if (req.method === 'POST') {
		try {
			const cartDetails = req.body;
			const products = Object.values<ProductType>(cartDetails)
			const productsFormated = stripeModel(products);
			const session = await stripe.checkout.sessions.create({
				payment_method_types: ['card'],
				line_items: productsFormated as any[],
				mode: 'payment',
				success_url: `${CHECKOUT_DOMAIN}?success=true`,
				cancel_url: `${CHECKOUT_DOMAIN}?canceled=true`
			});
			res.json({ id: session.id });
		} catch (err: unknown) {
			throw new Error(JSON.stringify(err));
		}
	} else {
		res.setHeader('Allow', 'POST');
		res.status(405).end('Method Not Allowed');
	}
}

export default handler;