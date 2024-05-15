"use client";
import { Elements, ElementsConsumer, PaymentElement } from "@stripe/react-stripe-js";
import { loadStripe, Stripe, StripeElements } from "@stripe/stripe-js";
import React, { useState, useEffect } from "react";
import axios from "axios";
import OrderSuccess from "./OrderSuccess";
import { Container } from "react-bootstrap";

// Load the Stripe.js script
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

interface CheckoutFormProps {
    stripe: Stripe | null;
    elements: StripeElements | null;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    setPaymentSucceeded: React.Dispatch<React.SetStateAction<boolean>>;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ stripe, elements, loading, setLoading, setPaymentSucceeded }) => {
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setLoading(true);
        const result = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: "https://rajveersodhi.com/icons/order-complete",
            },
        });

        if (result.error) {
            console.log(result.error.message);
            setLoading(false);
        } else {
            setPaymentSucceeded(true);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <PaymentElement />
            <button disabled={!stripe || loading} className="lead" style={{ backgroundColor: "#FFF", color: "#000", borderRadius: "15px", padding: "0.5rem 2rem", border: "none", marginTop: "1rem" }}>
                {loading ? "Processing..." : "Submit"}
            </button>
        </form>
    );
};

interface InjectedCheckoutFormProps {
    donationAmount: number;
}

const InjectedCheckoutForm: React.FC<InjectedCheckoutFormProps> = ({ donationAmount }) => {
    const [loading, setLoading] = useState(false);
    const [paymentSucceeded, setPaymentSucceeded] = useState(false);
    const [clientSecret, setClientSecret] = useState<string | null>(null);

    useEffect(() => {
        const createPaymentIntent = async () => {
            try {
                const { data } = await axios.post('/api/create-payment-intent', { amount: donationAmount });
                setClientSecret(data.clientSecret);
            } catch (error) {
                console.error('Failed to create payment intent:', error);
            }
        };

        createPaymentIntent();
    }, [donationAmount]);

    if (paymentSucceeded) {
        return <OrderSuccess />;
    }

    return (
        clientSecret && (
            <Elements stripe={stripePromise} options={{ clientSecret }}>
                <ElementsConsumer>
                    {({ stripe, elements }) => (
                        <Container style={{ backgroundColor: "#E0E0E0", borderRadius: "20px", marginTop: "0.5rem", padding: "2rem" }}>
                            <p className="lead">Amount: ${donationAmount.toFixed(2)}</p>
                            <p className="lead">Enter your payment information:</p>
                            <hr />
                            <CheckoutForm
                                stripe={stripe}
                                elements={elements}
                                loading={loading}
                                setLoading={setLoading}
                                setPaymentSucceeded={setPaymentSucceeded}
                            />
                        </Container>
                    )}
                </ElementsConsumer>
            </Elements>
        )
    );
};

export default InjectedCheckoutForm;
