 import { validateCartItems } from 'use-shopping-cart/src/serverUtil';
import stripe from 'stripe';
import inventory from '../../../public/productsData.json'

const stripe = stripe("pk_test_51IcujzEZ6RTsruQyD67ngSbKcBzZkwqOVptnHLgGW03YIsWf3kWwqipopF3soMKPJ4OFAg9ULLiQMLrTwHXg2Mz800FmGYz55w", {
    apiVersion: "2020-08-27"
})

const CHECKOUT_DOMAIN = "http://localhost:3000/chekout"

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const cartDetails = req.body;
            const line_items = validateCartItems(inventory, cartDetails);
            const session = await stripe.checkout.sessions.create({
                mode = "payment",
                payment_method_types: ['card'],
                line_items: line_items,
                success_url: `${CHECKOUT_DOMAIN}?success=true`,
                cancel_url: `${CHECKOUT_DOMAIN}?canceled=true`
            })
            res.json({ id: session.id })
        } catch (err) {
            console.log(err);
        }
    }
}