import BookingForm from "@/components/BookingForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Melbourne Airport Taxi | Book Airport Transfer - Vic Cabs",
  description: "Book a Melbourne airport taxi online with Vic Cabs. Reliable airport pickups and drop-offs to Tullamarine with instant booking confirmation. 24/7 service, flight tracking, fixed rates.",
  keywords: [
    'melbourne airport taxi',
    'airport transfer melbourne',
    'tullamarine airport taxi',
    'book airport taxi',
    'melbourne airport transfer',
  ],
  robots: {
    index: false,
    follow: false,
  },
};

export default function AirportTransferAdPage() {
  return (
    <main className="min-h-screen bg-black text-gray-400 flex items-center justify-center px-4 py-8 md:py-0">
      <div className="w-full max-w-xl md:max-w-2xl lg:max-w-4xl bg-gray-900 shadow-lg rounded-lg p-4 md:p-6">
        
        {/* Headline */}
        <h1 className="text-xl md:text-2xl font-bold text-center mb-2 text-gray-300">
          Melbourne Airport Taxi Booking
        </h1>

        {/* Subheading */}
        <p className="text-center text-gray-400 mb-4 md:mb-6 text-sm md:text-base">
          Airport pickups & drop-offs • 24/7 availability
        </p>

        {/* Trust Signals */}
        <ul className="text-xs md:text-sm text-gray-300 space-y-1 text-center mb-4 md:mb-6">
          <li>✔ On-time airport transfers</li>
          <li>✔ Track flights & avoid delays</li>
          <li>✔ Instant online booking</li>
        </ul>

        {/* Booking Form */}
        <div className='mt-2'>
          <BookingForm />
        </div>

        {/* Footer reassurance */}
        <p className="text-xs text-gray-500 text-center mt-4">
          Melbourne Airport • Domestic & International
        </p>
      </div>
    </main>
  );
}