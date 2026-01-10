export const metadata = {
  title: 'Terms & Conditions | Maa Aashapura Homestay',
  description:
    'Read the Terms & Conditions of Maa Aashapura Homestay for booking, cancellation and stay policies.',
}

export default function TermsConditionsPage() {
  return (
    <main className="bg-gradient-to-b from-blue-50 to-white py-20 mt-20">
      <div className="max-w-5xl mx-auto px-6 bg-white rounded-xl p-8
      shadow-[0_25px_50px_rgba(30,58,138,0.18)] border border-blue-100">

        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Terms & <span className="text-blue-700">Conditions</span>
        </h1>

        <div className="space-y-5 text-gray-700 text-sm leading-relaxed">
          <p>
            Welcome to Maa Aashapura Homestay. By accessing or using our website
            and services, you agree to the following Terms & Conditions.
          </p>

          <h2 className="text-lg font-semibold text-gray-800">1. Booking Policy</h2>
          <p>
            All booking requests submitted through the website are enquiry-based.
            Confirmation is subject to availability and will be communicated via call/WhatsApp/email.
          </p>

          <h2 className="text-lg font-semibold text-gray-800">2. Check-In / Check-Out</h2>
          <p>
            Check-in and check-out timings may vary. Guests must present valid ID proof at check-in.
          </p>

          <h2 className="text-lg font-semibold text-gray-800">3. Cancellation Policy</h2>
          <p>
            Cancellation rules depend on booking type and dates. Please contact us for cancellation related queries.
          </p>

          <h2 className="text-lg font-semibold text-gray-800">4. Guest Behaviour</h2>
          <p>
            Guests are expected to maintain cleanliness and follow homestay rules.
            Any damage to property may result in additional charges.
          </p>

          <h2 className="text-lg font-semibold text-gray-800">5. Payments</h2>
          <p>
            Payments (if applicable) must be made as per agreed terms. For now, this website collects booking enquiries.
          </p>

          <h2 className="text-lg font-semibold text-gray-800">6. Contact</h2>
          <p>
            If you have any questions about Terms & Conditions, you can contact us at:
            <br />
            <strong>Email:</strong> aashapurahomestay@gmail.com
            <br />
            <strong>Phone:</strong> +91 7014538182
          </p>
        </div>
      </div>
    </main>
  )
}
