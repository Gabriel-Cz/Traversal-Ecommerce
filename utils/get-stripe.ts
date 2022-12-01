import { loadStripe } from '@stripe/stripe-js/pure';

const getStripe = async () => {
  return loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
}

export default getStripe;
