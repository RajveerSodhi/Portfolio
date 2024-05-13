"use client";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm/PaymentForm";
import { Container } from "react-bootstrap";

const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export default function IconsPayment() {
    return (
        <Elements stripe={stripePromise}>
            <Container style={{ width: "100%" }}>
                <PaymentForm />
            </Container>
        </Elements>
    );
}