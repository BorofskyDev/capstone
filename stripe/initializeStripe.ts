import { Stripe, loadStripe } from "@stripe/stripe-js";

let stripePromise: Stripe | null;

const initializeStripe = async () => {
    if (!stripePromise) {
        stripePromise = await loadStripe (
            "pk_test_51KAFhRHEdKhKz496451Lc1h0kufNlrUN0UNGqG1WYMgeEBDKOiF0seTucAgtB59g8j2CteoFWnNV6EHhccGcaHSs00AIL4kunY"
        );
        }
        return stripePromise;
    }

export default initializeStripe;