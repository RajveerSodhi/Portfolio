"use client";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useState } from "react";
import PaymentSuccess from "./PaymentSuccess"; // Import your custom PaymentSuccess component

export default function PaymentForm() {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false); // Track loading state
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [cardholderName, setCardholderName] = useState("");
    const [donationAmount, setDonationAmount] = useState(10); // Default donation value
    const [paymentSucceeded, setPaymentSucceeded] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage(null);
        const cardElement = elements?.getElement(CardElement);

        try {
            if (!stripe || !cardElement) {
                setLoading(false);
                return;
            }

            // Ensure the donation amount is valid
            if (donationAmount <= 0) {
                setErrorMessage("Please enter a valid donation amount.");
                setLoading(false);
                return;
            }

            // Create payment intent on the server using the donation amount
            const { data } = await axios.post("/api/create-payment-intent", {
                data: { amount: donationAmount },
            });
            const clientSecret = data;

            // Confirm payment, including cardholder name
            const { error } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: cardElement,
                    billing_details: {
                        name: cardholderName, // Include cardholder name
                    },
                },
            });

            if (error) {
                setErrorMessage(error.message || "Payment failed");
            } else {
                // Payment succeeded, set the success state
                setPaymentSucceeded(true);
            }
        } catch (error) {
            console.error(error);
            setErrorMessage("An unexpected error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    // If the payment has succeeded, render the custom component
    if (paymentSucceeded) {
        return <PaymentSuccess />;
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    value={cardholderName}
                    onChange={(e) => setCardholderName(e.target.value)}
                    required
                />
            </label>
            <label>
                Donation Amount (CAD):
                <input
                    type="number"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(Number(e.target.value))}
                    min="1"
                    required
                />
            </label>
            <CardElement />
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            <button type="submit" disabled={loading}>
                {loading ? "Processing..." : "Submit"}
            </button>
        </form>
    );
}
