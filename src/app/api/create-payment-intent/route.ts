import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Validate environment variables
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
if (!stripeSecretKey) {
  throw new Error('STRIPE_SECRET_KEY is not configured');
}

// Initialize Stripe with validated key
const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2025-04-30.basil',
});

export async function POST() {
  try {
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 100000, // $1000.00 in cents
      currency: 'usd',
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        service: 'Data Cleaning - 200K Records',
      },
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error: unknown) {
    let message = 'Error creating payment intent';
    let statusCode = 500;
    if (error && typeof error === 'object' && error !== null && 'message' in error) {
      message = (error as { message?: string }).message || message;
    }
    if (error && typeof error === 'object' && error !== null && 'statusCode' in error) {
      statusCode = (error as { statusCode?: number }).statusCode || statusCode;
    }
    console.error('Error creating payment intent:', error);
    return NextResponse.json(
      { error: message },
      { status: statusCode }
    );
  }
}
