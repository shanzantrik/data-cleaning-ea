import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

// Initialize Stripe with publishable key
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

const PaymentForm = ({ onCancel }: { onCancel: () => void }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setProcessing(true);
    setError(null);

    try {
      const { error: submitError } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/payment-success`,
        },
      });

      if (submitError) {
        setError(submitError.message || 'An error occurred');
        setProcessing(false);
      }
    } catch {
      setError('An unexpected error occurred');
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto p-6">
      <PaymentElement />
      {error && (
        <div className="text-red-500 mt-4 text-sm">{error}</div>
      )}
      <div className="mt-6 flex gap-4">
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={!stripe || processing}
          className="flex-1 px-4 py-2 bg-[#dc1b36] text-white rounded-md hover:bg-[#a31225] disabled:opacity-50"
        >
          {processing ? 'Processing...' : 'Pay Now'}
        </button>
      </div>
    </form>
  );
};

export default function StripePaymentModal({
  isOpen,
  onClose
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isStripeReady, setIsStripeReady] = useState(false);

  useEffect(() => {
    // Check if Stripe is properly configured
    if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
      setError('Payment system is not properly configured');
      return;
    }
    setIsStripeReady(true);
  }, []);

  useEffect(() => {
    if (isOpen && isStripeReady) {
      setError(null);
      // Create PaymentIntent as soon as the modal opens
      fetch('/api/create-payment-intent', {
        method: 'POST',
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error('Failed to create payment intent');
          }
          return res.json();
        })
        .then((data) => {
          if (data.error) {
            throw new Error(data.error);
          }
          setClientSecret(data.clientSecret);
        })
        .catch((err) => {
          console.error('Error:', err);
          setError(err.message || 'Failed to initialize payment');
        });
    }
  }, [isOpen, isStripeReady]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Complete Your Payment</h2>
          {error ? (
            <div className="text-center py-8">
              <div className="text-red-500 text-6xl mb-4">×</div>
              <p className="text-gray-600 mb-4">{error}</p>
              <button
                onClick={onClose}
                className="px-4 py-2 bg-[#dc1b36] text-white rounded-md hover:bg-[#a31225]"
              >
                Close
              </button>
            </div>
          ) : clientSecret ? (
            <Elements stripe={stripePromise} options={{ clientSecret }}>
              <PaymentForm onCancel={onClose} />
            </Elements>
          ) : (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#dc1b36] mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading payment form...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
