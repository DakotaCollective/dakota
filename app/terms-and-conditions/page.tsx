export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-[#03060b] text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">

        <div className="mb-12">
          <h1 className="text-5xl font-black tracking-tight">
            Terms & Conditions
          </h1>
        </div>

        <div className="space-y-8 rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.4)]">

          <section>
            <h2 className="text-2xl font-bold mb-2">Service</h2>
            <p className="text-white/60">
              Dakota Collective provides lead generation services and business data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">SMS Program</h2>
            <p className="text-white/60">
              You may receive SMS messages related to your account and orders.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">Opt-Out</h2>
            <p className="text-white/60">
              Reply <strong>STOP</strong> to unsubscribe. Reply <strong>HELP</strong> for assistance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">Liability</h2>
            <p className="text-white/60">
              We are not responsible for results from the use of leads.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}