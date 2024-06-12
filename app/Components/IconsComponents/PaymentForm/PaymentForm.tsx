"use client";
import { Elements, ElementsConsumer, PaymentElement } from "@stripe/react-stripe-js";
import { loadStripe, Stripe, StripeElements } from "@stripe/stripe-js";
import React, { useState, useEffect } from "react";
import axios from "axios";
import OrderSuccess from "./OrderSuccess";

// Load the Stripe.js script
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

interface CheckoutFormProps {
    stripe: Stripe | null;
    elements: StripeElements | null;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    setPaymentSucceeded: React.Dispatch<React.SetStateAction<boolean>>;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({
    stripe,
    elements,
    loading,
    setLoading,
    setPaymentSucceeded,
}) => {
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setLoading(true);
        const result = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: "https://rajveersodhi.com/icons/order_complete",
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
            <button
                disabled={!stripe || loading}
                className="mt-4 rounded-full py-3 px-16 shadow-lg dark:bg-[#fefefe] bg-[#252525] border-1 border-solid dark:border-[#e7e7e7] border-[#454545] dark:text-myblack text-mywhite hover:scale-95 transition-configuration transition-transform"
            >
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
                const { data } = await axios.post("/api/create-payment-intent", {
                    amount: donationAmount,
                });
                setClientSecret(data.clientSecret);
            } catch (error) {
                console.error("Failed to create payment intent:", error);
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
                        <div className="p-8 mt-2 z-40 shadow-lg bg-[#fefefe] dark:bg-[#252525] border-1 border-solid border-[#e7e7e7] dark:border-[#454545] text-myblack dark:text-mywhite rounded-3xl md:w-[45rem] lg:w-[60rem] text-xl">
                            <p className="mb-2">Amount: ${donationAmount.toFixed(2)}</p>
                            <p className="mb-2">Enter your payment information:</p>
                            <hr className="mb-4" />
                            <CheckoutForm
                                stripe={stripe}
                                elements={elements}
                                loading={loading}
                                setLoading={setLoading}
                                setPaymentSucceeded={setPaymentSucceeded}
                            />
                        </div>
                    )}
                </ElementsConsumer>
            </Elements>
        )
    );
};

export default InjectedCheckoutForm;
