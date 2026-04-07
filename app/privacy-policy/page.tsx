export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#03060b] text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="mb-12">
          <h1 className="text-5xl font-black tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-white/50 mt-3">
            Last updated: 2026
          </p>
        </div>

        {/* CARD */}
        <div className="space-y-8 rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.4)]">

          <section>
            <h2 className="text-2xl font-bold mb-2">Information We Collect</h2>
            <p className="text-white/60">
              We collect your name, email, phone number, and business information when you interact with our platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">How We Use Data</h2>
            <p className="text-white/60">
              Your data is used to deliver leads, provide updates, and improve our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">SMS Communication</h2>
            <ul className="list-disc ml-6 text-white/60 space-y-1">
              <li>Message frequency may vary</li>
              <li>Message & data rates may apply</li>
              <li>Reply STOP to unsubscribe</li>
              <li>Reply HELP for support</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">Data Sharing</h2>
            <p className="text-white/60">
              We do not sell or share your data for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">Contact</h2>
            <p className="text-white/60">support@dakotacollectivellc.com</p>
          </section>

        </div>
      </div>
    </main>
  );
}