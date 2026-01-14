import BookingForm from "@/components/BookingForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Melbourne Taxi Booking | Book a Taxi Online",
  description: "Book a reliable Melbourne taxi online. Fast local pickups, airport transfers, and 24/7 taxi service across Melbourne.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function MelbourneTaxiAdPage() {
  return (
    <main className="min-h-screen bg-black text-gray-400 flex items-center justify-center px-4 py-8 md:py-0">
        <div className="w-full max-w-xl bg-gray-900 shadow-lg rounded-lg p-4 md:p-6">
          
          {/* Headline */}
          <h1 className="text-xl md:text-2xl font-bold text-center mb-2 text-gray-300">
            Melbourne Taxi - Book Online in Seconds
          </h1>

          {/* Subheading */}
          <p className="text-center text-gray-400 mb-4 md:mb-6 text-sm md:text-base">
            Fast local pickups & airport transfers • Available 24/7
          </p>

          {/* Trust Signals */}
          <ul className="text-xs md:text-sm text-gray-300 mb-4 md:mb-6 space-y-1 text-center">
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
  );
}
