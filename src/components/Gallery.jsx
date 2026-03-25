export default function Gallery() {
  return (
    <section className="section-reveal py-24 px-6" id="gallery">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-amber-400 mb-4" style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.25)' }}>
            📸 Field Research
          </div>
          <h2 className="text-4xl font-extrabold mb-4">
            Zameen par <span className="grad-text">hamare kadam</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Rajasthan se Punjab, hum ne 200+ gaaon mein field research ki hai
          </p>
        </div>

        {/* Bento grid */}
        <div className="bento-grid">
          {/* Large card */}
          <div className="bento-1 glass-card overflow-hidden relative group" style={{ minHeight: '280px' }}>
            <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(59,130,246,0.1))' }}>
              <div className="text-center p-8">
                <div style={{ fontSize: '64px', lineHeight: 1 }} className="mb-4">🌾</div>
                <div className="text-white font-bold text-xl mb-2">Wheat Fields, Punjab</div>
                <div className="text-gray-400 text-sm">March 2024 Survey</div>
                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 rounded-full text-xs text-emerald-300" style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.25)' }}>342 Farmers</span>
                  <span className="px-3 py-1 rounded-full text-xs text-blue-300" style={{ background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(59,130,246,0.25)' }}>Gehu Fasal</span>
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="px-3 py-1.5 rounded-full text-xs text-white font-semibold" style={{ background: 'rgba(16,185,129,0.8)' }}>Dekhein →</div>
            </div>
          </div>

          {/* Small card 2 */}
          <div className="bento-2 glass-card overflow-hidden relative" style={{ minHeight: '130px' }}>
            <div className="absolute inset-0 flex flex-col justify-end p-5" style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(239,68,68,0.08))' }}>
              <div style={{ fontSize: '36px' }} className="mb-2">🌽</div>
              <div className="text-white font-bold text-sm">Maize, MP</div>
              <div className="text-gray-400 text-xs">128 Kisan</div>
            </div>
          </div>

          {/* Small card 3 */}
          <div className="bento-3 glass-card overflow-hidden relative" style={{ minHeight: '130px' }}>
            <div className="absolute inset-0 flex flex-col justify-end p-5" style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.12), rgba(16,185,129,0.08))' }}>
              <div style={{ fontSize: '36px' }} className="mb-2">🥬</div>
              <div className="text-white font-bold text-sm">Vegetables, UP</div>
              <div className="text-gray-400 text-xs">89 Kisan</div>
            </div>
          </div>

          {/* Medium cards */}
          <div className="bento-4 glass-card overflow-hidden relative" style={{ minHeight: '160px' }}>
            <div className="absolute inset-0 flex items-center gap-5 p-6" style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.12), rgba(59,130,246,0.08))' }}>
              <div style={{ fontSize: '48px' }}>💧</div>
              <div>
                <div className="text-white font-bold text-base mb-1">Irrigation Survey</div>
                <div className="text-gray-400 text-sm mb-3">Rajasthan Desert Villages</div>
                <div className="w-full rounded-full h-1.5" style={{ background: 'rgba(255,255,255,0.1)' }}>
                  <div className="rounded-full h-1.5" style={{ width: '67%', background: 'linear-gradient(90deg,#10b981,#3b82f6)' }}></div>
                </div>
                <div className="text-xs text-gray-400 mt-1">67% villages covered</div>
              </div>
            </div>
          </div>

          <div className="bento-5 glass-card overflow-hidden relative" style={{ minHeight: '160px' }}>
            <div className="absolute inset-0 flex items-center gap-5 p-6" style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.12), rgba(245,158,11,0.08))' }}>
              <div style={{ fontSize: '48px' }}>📱</div>
              <div>
                <div className="text-white font-bold text-base mb-1">Tech Adoption Rate</div>
                <div className="text-gray-400 text-sm mb-3">Smartphone usage survey</div>
                <div className="flex gap-3">
                  <div className="text-center">
                    <div className="text-2xl font-extrabold text-emerald-400">78%</div>
                    <div className="text-xs text-gray-500">Android</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-extrabold text-blue-400">22%</div>
                    <div className="text-xs text-gray-500">Feature</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
