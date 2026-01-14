import Head from "next/head";
import BookingForm from "@/components/BookingForm";

export default function AirportTransferAdPage() {
  return (
    <>
      <Head>
        <title>Melbourne Airport Taxi | Book Airport Transfer</title>
        <meta
          name="description"
          content="Book a Melbourne airport taxi online. Reliable airport pickups and drop-offs with instant booking confirmation."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="w-full max-w-xl bg-white shadow-lg rounded-lg p-6">
          
          {/* Headline */}
          <h1 className="text-2xl font-bold text-center mb-2">
            Melbourne Airport Taxi Booking
          </h1>

          {/* Subheading */}
          <p className="text-center text-gray-600 mb-6">
            Airport pickups & drop-offs • 24/7 availability
          </p>

          {/* Trust Signals */}
          <ul className="text-sm text-gray-700 mb-6 space-y-1 text-center">
            <li>✔ On-time airport transfers</li>
            <li>✔ Track flights & avoid delays</li>
            <li>✔ Instant online booking</li>
          </ul>

          {/* Booking Form */}
          <BookingForm />

          {/* Footer reassurance */}
          <p className="text-xs text-gray-500 text-center mt-4">
            Melbourne Airport • Domestic & International
          </p>
        </div>
      </main>
    </>
  );
}
