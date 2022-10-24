import React from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios"; //With Axios we can send some request


export const CheckoutForm=()=>{ //to obtain the information of the card
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async(event)=>{
        event.preventDefault();
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement), //Here we get all elements of our card
        });
        if(!error){
        console.log("Your token has been generated:", paymentMethod);
        // send a token to the backend on Stripe website
            try{
                const { id } = paymentMethod;
                const response = await axios.post("http://localhost:8080/stripe/charge", //send a request to our localhost
                {
                    amount: 5000, //In cents so here we have 50$
                    id: id,
                });
                if (response.data.success)
                    console.log("Accepted Payment");
            }
            catch (error){
                console.log("Error!", error);
            }
        }
        else{
            console.log(error.message);
        }
    } 

    //Submit our payment
    return(
        <form onSubmit={handleSubmit} style={{maxWidth: 400}}> 
            <button>Pay</button>
        </form>
    );
};