import { CheckCircleIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full mx-auto p-8 bg-white rounded-lg shadow-lg text-center">
        <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-6" />
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Payment Successful!</h1>
        <p className="text-gray-600 mb-8">
          Thank you for choosing Express Analytics. We&apos;ll start processing your data right away.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#dc1b36] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#b3152d] transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </div>
  )
}
