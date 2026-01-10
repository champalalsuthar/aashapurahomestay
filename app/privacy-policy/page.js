export const metadata = {
  title: 'Privacy Policy | Maa Aashapura Homestay',
  description:
    'Privacy Policy of Maa Aashapura Homestay. Learn how we collect and use customer data for booking enquiries.',
}

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-gradient-to-b from-blue-50 to-white py-20 mt-20">
      <div className="max-w-5xl mx-auto px-6 bg-white rounded-xl p-8
      shadow-[0_25px_50px_rgba(30,58,138,0.18)] border border-blue-100">

        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Privacy <span className="text-blue-700">Policy</span>
        </h1>

        <div className="space-y-5 text-gray-700 text-sm leading-relaxed">
          <p>
            Maa Aashapura Homestay respects your privacy. This Privacy Policy describes
            how we collect, use and protect your information when you visit our website.
          </p>

          <h2 className="text-lg font-semibold text-gray-800">1. Information We Collect</h2>
          <p>
            We may collect your name, email, phone number, booking enquiry details
            (check-in/check-out), and message submitted through forms.
          </p>

          <h2 className="text-lg font-semibold text-gray-800">2. How We Use Your Information</h2>
          <p>
            Your information is used only to respond to your enquiry, confirm availability,
            and provide support regarding booking.
          </p>

          <h2 className="text-lg font-semibold text-gray-800">3. Data Protection</h2>
          <p>
            We do not sell or share your personal data with third parties.
            We take reasonable measures to protect your submitted information.
          </p>

          <h2 className="text-lg font-semibold text-gray-800">4. Cookies</h2>
          <p>
            We may use cookies to improve user experience. You can disable cookies in your browser settings.
          </p>

          <h2 className="text-lg font-semibold text-gray-800">5. Third-party Services</h2>
          <p>
            For contact enquiry emails, we may use EmailJS or email service providers.
            Your information is only used for enquiry communication.
          </p>

          <h2 className="text-lg font-semibold text-gray-800">6. Contact</h2>
          <p>
            For privacy-related questions, contact:
            <br />
            <strong>Email:</strong> aashapurahomestay@gmail.com
            <br />
            <strong>Phone:</strong> +91 70145 38182
          </p>
        </div>
      </div>
    </main>
  )
}
