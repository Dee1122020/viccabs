import Head from "next/head";
import BookingForm from "@/components/BookingForm";

export default function MelbourneTaxiAdPage() {
  return (
    <>
      <Head>
        <title>Melbourne Taxi Booking | Book a Taxi Online</title>
        <meta
          name="description"
          content="Book a reliable Melbourne taxi online. Fast local pickups, airport transfers, and 24/7 taxi service across Melbourne."
        />
        {/* Prevent indexing until you want SEO */}
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="w-full max-w-xl bg-white shadow-lg rounded-lg p-6">
          
          {/* Headline */}
          <h1 className="text-2xl font-bold text-center mb-2">
            Melbourne Taxi - Book Online in Seconds
          </h1>

          {/* Subheading */}
          <p className="text-center text-gray-600 mb-6">
            Fast local pickups & airport transfers • Available 24/7
          </p>

          {/* Trust Signals */}
          <ul className="text-sm text-gray-700 mb-6 space-y-1 text-center">
            <li>✔ Melbourne-based taxi service</li>
            <li>✔ Instant booking confirmation</li>
            <li>✔ Safe & reliable local drivers</li>
          </ul>

          {/* Booking Form */}
          <BookingForm />

          {/* Footer reassurance */}
          <p className="text-xs text-gray-500 text-center mt-4">
            Serving Melbourne CBD and surrounding suburbs
          </p>
        </div>
      </main>
    </>
  );
}
