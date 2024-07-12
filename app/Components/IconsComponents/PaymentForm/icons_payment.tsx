"use client";
import { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";
import OrderSuccess from "./OrderSuccess"; // Ensure correct path

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
            {!showComponent && (
                <>
                    <label className="text-xl text-center z-40">
                        Amount (CAD):
                        <input
                            type="number"
                            value={donationAmount}
                            onChange={(e) => setDonationAmount(Number(e.target.value))}
                            min="0.00"
                            required
                            className="m-2 z-40 py-2 px-3 text-myblack rounded-full bg-cardlightbg border border-solid border-cardlightborder dark:border-carddarkborder"
                        />
                    </label>
                    <button
                        className="my-4 z-40 px-16 py-3 text-xl rounded-full hover:scale-95 transition-transform card"
                        onClick={handleDisplayComponent}
                    >
                        Proceed
                    </button>
                </>
            )}

            {showComponent && (
                <>
                    {donationAmount > 0 && (
                        <button
                            onClick={handleBack}
                            className="my-4 z-40 px-16 py-3 text-xl hover:scale-95 transition-transform rounded-full card"
                        >
                            Edit Amount
                        </button>
                    )}
                    {donationAmount > 0 ? (
                        <PaymentForm donationAmount={donationAmount} />
                    ) : (
                        <OrderSuccess />
                    )}
                </>
            )}
        </Elements>
    );
}
