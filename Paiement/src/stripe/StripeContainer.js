import React from "react";
import { loadStripe } from "@stripe/stripe-js"; //With this we can configurate our Stripe system (here with public key)
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51LvknSDCtxfGNy9L7EZRxAgPo6b9cVlR9JPGXAmPr00XQTQUzRrIEaIQSY04rQ8knMTYK4A6qQTbSWlpCa9PyCT400Y1oHMlRw";
const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = ()=>{
    return(
        <Elements stripe={stripeTestPromise}>
            <CheckoutForm />
        </Elements>
    );
};

export default Stripe;