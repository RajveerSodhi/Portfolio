import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    typescript: true,
    apiVersion: "2024-04-10",
});

export async function POST(req: NextRequest) {
    const { data } = await req.json();
    const { amount } = data;

    try {
        // Validate that the amount is a positive number
        if (!amount || amount <= 0) {
            return new NextResponse("Invalid amount provided.", { status: 400 });
        }

        // Create a payment intent
        const paymentIntent = await stripe.paymentIntents.create({
            amount: Math.floor(Number(amount) * 100), // Convert to cents
            currency: "CAD",
        });

        return NextResponse.json(paymentIntent.client_secret, { status: 200 });
    } catch (error: any) {
        console.error(error);
        return new NextResponse(error.message, { status: 400 });
    }
}
