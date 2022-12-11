import Stripe from 'stripe';
import stripeModel from '../../../utils/product-stripe-format'

const stripe = new Stripe(process.env.STRIPE_SK, {
	apiVersion: "2020-08-27"
});
const CHECKOUT_DOMAIN = process.env.CHECKOUT_DOMAIN || '';

export default async function handler(req, res) {
	if (req.method === 'POST') {
		try {
			const product = req.body;
			const productsFormated = stripeModel([...product]);
			const session = await stripe.checkout.sessions.create({
				payment_method_types: ['card'],
				line_items: productsFormated as any[],
				mode: 'payment',
				success_url: `${CHECKOUT_DOMAIN}?success=true`,
				cancel_url: `${CHECKOUT_DOMAIN}?canceled=true`
			})
			res.json({ id: session.id })
		} catch (err) {
			console.log('error from server:', err);
		}
	} else {
		res.setHeader('Allow', 'POST');
		res.status(405).end('Method Not Allowed');
	}
}