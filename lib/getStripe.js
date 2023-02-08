import { loadStripe } from '@stripe/stripe-js';

const getStripe = () => {
    // Make sure to call `loadStripe` outside of a component’s render to avoid
    // recreating the `Stripe` object on every render.
    const stripePromise = loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
    );

    return stripePromise;
}

export default getStripe;