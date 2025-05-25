'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';

export default function PaymentSuccessPageWrapper() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <PaymentSuccess />
    </Suspense>
  );
}

function PaymentSuccess() {
  const [status, setStatus] = useState<'processing' | 'succeeded' | 'failed'>('processing');
  const searchParams = useSearchParams();

  useEffect(() => {
    const redirect_status = searchParams.get('redirect_status');
    if (redirect_status === 'succeeded') {
      setStatus('succeeded');
    } else {
      setStatus('failed');
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-[#f5f6fa] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        {status === 'processing' && (
          <>
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#dc1b36] mx-auto"></div>
            <h1 className="text-2xl font-bold mt-4">Processing Payment</h1>
            <p className="text-gray-600 mt-2">Please wait while we confirm your payment...</p>
          </>
        )}

        {status === 'succeeded' && (
          <>
            <FaCheckCircle className="text-[#dc1b36] text-6xl mx-auto" />
            <h1 className="text-2xl font-bold mt-4">Payment Successful!</h1>
            <p className="text-gray-600 mt-2">
              Thank you for your payment. We&apos;ll start processing your data cleaning request right away.
            </p>
            <Link
              href="/"
              className="mt-6 inline-block bg-[#dc1b36] text-white px-6 py-3 rounded-lg hover:bg-[#a31225] transition-colors"
            >
              Return to Home
            </Link>
          </>
        )}

        {status === 'failed' && (
          <>
            <div className="text-red-500 text-6xl mx-auto">×</div>
            <h1 className="text-2xl font-bold mt-4">Payment Failed</h1>
            <p className="text-gray-600 mt-2">
              We couldn&apos;t process your payment. Please try again or contact support.
            </p>
            <Link
              href="/"
              className="mt-6 inline-block bg-[#dc1b36] text-white px-6 py-3 rounded-lg hover:bg-[#a31225] transition-colors"
            >
              Try Again
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
