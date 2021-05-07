import Stripe from 'stripe';
import stripeModel from '../../../utils/product-stripe-format'
const stripe = new Stripe("sk_test_51IcujzEZ6RTsruQylOd6Sz2jYm3nOiBmzvdmhDvDUmHxZ9xU0w5WUUePt4U7B1pBjMqy2a9zJMLiBkiaSjjS0bNw003vxECv4X", {
    apiVersion: "2020-08-27"
})

const CHECKOUT_DOMAIN = "https://traversal.vercel.app/products/checkout"

export default async function handler(req, res) {
  const product = req.body;
  const products = [product];
  const productsFormated = stripeModel(products);
    if (req.method === 'POST') {
        try {
          console.log(productsFormated);
          const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items: productsFormated,
                mode: 'payment',
                success_url: `${CHECKOUT_DOMAIN}?success=true`,
                cancel_url: `${CHECKOUT_DOMAIN}?canceled=true`
            })
            res.json({ id: session.id })
        } catch (err) {
            console.log('error from server:', err);
        }
    } /* else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    } */
}