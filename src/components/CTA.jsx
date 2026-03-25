export default function CTA() {
  return (
    <section className="section-reveal py-20 px-6" id="contact">
      <div className="max-w-4xl mx-auto">
        <div className="glass-card p-12 text-center relative overflow-hidden" style={{ borderColor: 'rgba(16,185,129,0.25)' }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(16,185,129,0.1), transparent 60%)' }}></div>
          <div style={{ fontSize: '56px' }} className="mb-4">🚜</div>
          <h2 className="text-4xl font-extrabold mb-4">Tayaar hain aap?</h2>
          <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
            Kisan ka saathi, hamesha saath. Aaj hi join karein aur apni fasal ko smarter banaaein.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="btn-glow text-white font-bold px-10 py-4 rounded-full text-base">
              Abhi Register Karen — Free!
            </button>
            <button className="text-emerald-400 font-semibold px-8 py-4 rounded-full text-base" style={{ border: '1px solid rgba(16,185,129,0.35)', background: 'rgba(16,185,129,0.05)' }}>
              Aur Jaanein
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
