import firebase from "../firebase/firebaseClient"
import getStripe from "./initializeStripe"

export async function createCheckoutSession(uid: string) {
    const firestore = firebase.firestore();

    // New checkout session, fingers crossed
    const checkoutSessionRef = await firestore
    .collection("users")
    .doc(uid)
    .collection("checkout_sessions")
    .add({
        price: "price_1KATLsHEdKhKz496gc4Ikc3Y",
        success_url: window.location.origin,
        cancel_url: window.location.origin,
    });

    // should attach a session ID here that's attached by ext, listen for changes, check if session ID valid
    checkoutSessionRef.onSnapshot(async (snap) => {
        const { sessionId } = snap.data();
        if (sessionId) {
            // If you reach checkout, then everything has worked up to here
            const stripe = await getStripe();
            stripe.redirectToCheckout({ sessionId });
        }
    });
}