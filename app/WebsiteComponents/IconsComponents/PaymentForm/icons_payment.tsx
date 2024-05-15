"use client";
import { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";
import OrderSuccess from "./OrderSuccess"; // Ensure correct path
import { Container, Button } from "react-bootstrap";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function IconsPayment() {
    const [donationAmount, setDonationAmount] = useState(0);
    const [showComponent, setShowComponent] = useState(false);

    const handleDisplayComponent = () => {
        setShowComponent(true);
    };

    const handleBack = () => {
        setShowComponent(false);
    };

    return (
        <Elements stripe={stripePromise}>
            <Container style={{ width: "100%" }}>
                {!showComponent && (
                    <>
                        <label>
                            Amount (CAD):
                            <input
                                type="number"
                                value={donationAmount}
                                onChange={(e) => setDonationAmount(Number(e.target.value))}
                                min="0.00"
                                required
                                style={{ margin: "0.5rem", borderRadius: "15px", border: "1px solid #AAA", padding: "5px" }}
                            />
                        </label>
                        <div>
                            <Button className="payment-button" onClick={handleDisplayComponent}>
                                Proceed
                            </Button>
                        </div>
                    </>
                )}

                {showComponent && (
                    <>
                        {donationAmount > 0 && (
                            <Button onClick={handleBack} className="payment-button">
                                Edit Payment Amount
                            </Button>
                        )}
                        {donationAmount > 0 ? (
                            <PaymentForm donationAmount={donationAmount} />
                        ) : (
                            <OrderSuccess />
                        )}
                    </>
                )}
            </Container>
        </Elements>
    );
}
