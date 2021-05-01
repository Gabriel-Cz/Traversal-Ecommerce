 import { validateCartItems } from 'use-shopping-cart/src/serverUtil';
import Stripe from 'stripe';
import inventory from '../../public/productsData.json'

const stripe = new Stripe("sk_test_51IcujzEZ6RTsruQylOd6Sz2jYm3nOiBmzvdmhDvDUmHxZ9xU0w5WUUePt4U7B1pBjMqy2a9zJMLiBkiaSjjS0bNw003vxECv4X", {
    apiVersion: "2020-08-27"
})

const CHECKOUT_DOMAIN = "http://localhost:3000/products/checkout"

export default async function handler(req, res) {
    if (req.method === 'POST') {
      console.log('hi')
        try {
            /* const cartDetails = req.body;
            const line_items = validateCartItems(inventory, cartDetails); */
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items: [
                    {
                      price_data: {
                        currency: 'usd',
                        product_data: {
                          name: 'Stubborn Attachments',
                          images: ['https://i.imgur.com/EHyR2nP.png'],
                        },
                        unit_amount: 2000,
                      },
                      quantity: 1,
                    },
                  ],
                mode: 'payment',
                success_url: `${CHECKOUT_DOMAIN}?success=true`,
                cancel_url: `${CHECKOUT_DOMAIN}?canceled=true`
            })
            res.json({ id: session.id })
        } catch (err) {
            console.log('error from server:', err);
        }
    }
}