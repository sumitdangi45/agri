import { ArrowRight, PlayCircle } from 'lucide-react'

export default function Hero() {
  const heroWords = ["Farming", "Ka", "Smart", "Saathi"]

  return (
    <section className="relative min-h-screen flex items-center pt-20" id="hero">
      <div className="max-w-6xl mx-auto px-6 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            {/* Badge */}
            <div className="fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6" style={{ background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.3)', color: '#6ee7b7', animationDelay: '0.1s' }}>
              <span className="w-2 h-2 rounded-full bg-emerald-400" style={{ animation: 'typingBounce 1.5s ease-in-out infinite' }}></span>
              AI-Powered • Hindi Supported • Free
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6" style={{ letterSpacing: '-1px' }}>
              {heroWords.map((word, i) => (
                <span key={i}>
                  <span className="hero-word" style={{ animationDelay: `${0.3 + i * 0.18}s` }}>
                    {word === 'Smart' || word === 'Saathi' ? (
                      <span className="grad-text">{word}</span>
                    ) : (
                      word
                    )}
                  </span>
                  {i < heroWords.length - 1 && ' '}
                </span>
              ))}
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed mb-8 fade-up" style={{ animationDelay: '0.9s' }}>
              Apni fasal ki poori jaankari — kab paani dein, kaunsi khad daalein, mandi ka bhav kya hai — sab kuch ek hi jagah par.
            </p>

            <div className="flex flex-wrap gap-4 fade-up" style={{ animationDelay: '1.1s' }}>
              <button className="btn-glow text-white font-bold px-8 py-4 rounded-full text-base flex items-center gap-2">
                <span>Shuru Karen</span>
                <ArrowRight size={18} />
              </button>
              <button className="flex items-center gap-2 text-gray-300 font-semibold px-6 py-4 rounded-full text-base" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', transition: 'all 0.2s' }} onMouseOver={(e) => e.target.style.borderColor = 'rgba(16,185,129,0.4)'} onMouseOut={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}>
                <PlayCircle size={18} style={{ color: '#10b981' }} />
                Demo Dekhein
              </button>
            </div>

            {/* Stats row */}
            <div className="flex gap-8 mt-10 fade-up" style={{ animationDelay: '1.3s' }}>
              <div>
                <div className="text-2xl font-extrabold grad-text">2.4L+</div>
                <div className="text-xs text-gray-500 mt-0.5">Registered Farmers</div>
              </div>
              <div style={{ width: '1px', background: 'rgba(255,255,255,0.08)' }}></div>
              <div>
                <div className="text-2xl font-extrabold grad-text">18</div>
                <div className="text-xs text-gray-500 mt-0.5">States Covered</div>
              </div>
              <div style={{ width: '1px', background: 'rgba(255,255,255,0.08)' }}></div>
              <div>
                <div className="text-2xl font-extrabold grad-text">98%</div>
                <div className="text-xs text-gray-500 mt-0.5">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          {/* Right: 3D Plant + Drone */}
          <div className="relative flex items-center justify-center lg:justify-end fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="relative w-72 h-72 lg:w-96 lg:h-96">
              {/* Glowing base circle */}
              <div className="absolute inset-0 rounded-full" style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)', filter: 'blur(20px)' }}></div>

              {/* Plant SVG */}
              <div className="absolute inset-0 flex items-center justify-center plant-pulse" style={{ zIndex: 2 }}>
                <svg width="220" height="260" viewBox="0 0 220 260" fill="none">
                  <path d="M70 220 L80 255 L140 255 L150 220 Z" fill="#1f2d1a" stroke="rgba(16,185,129,0.4)" strokeWidth="1.5" />
                  <ellipse cx="110" cy="220" rx="40" ry="8" fill="#2a3d20" stroke="rgba(16,185,129,0.3)" strokeWidth="1" />
                  <ellipse cx="110" cy="220" rx="35" ry="6" fill="#1a2e12" />
                  <path d="M110 220 Q108 190 105 160 Q102 130 108 100" stroke="#22c55e" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                  <path d="M108 160 Q70 140 55 110 Q80 115 108 145" fill="rgba(16,185,129,0.8)" stroke="#10b981" strokeWidth="1" />
                  <path d="M106 140 Q145 120 160 88 Q135 95 106 128" fill="rgba(34,197,94,0.7)" stroke="#22c55e" strokeWidth="1" />
                  <path d="M107 115 Q80 100 72 78 Q95 85 107 108" fill="rgba(16,185,129,0.6)" stroke="#10b981" strokeWidth="1" />
                  <path d="M108 100 Q138 80 148 55 Q125 66 108 93" fill="rgba(34,197,94,0.65)" stroke="#22c55e" strokeWidth="1" />
                  <circle cx="108" cy="95" r="12" fill="rgba(167,243,208,0.2)" stroke="#6ee7b7" strokeWidth="1.5" />
                  <circle cx="108" cy="95" r="6" fill="#10b981" opacity="0.9" />
                  <circle cx="108" cy="95" r="18" fill="none" stroke="rgba(16,185,129,0.3)" strokeWidth="2" />
                  <ellipse cx="88" cy="185" rx="3" ry="4" fill="rgba(59,130,246,0.7)" transform="rotate(-15 88 185)" />
                  <ellipse cx="130" cy="170" rx="2.5" ry="3.5" fill="rgba(59,130,246,0.5)" transform="rotate(10 130 170)" />
                </svg>
              </div>

              {/* Drone SVG */}
              <div className="absolute drone-float" style={{ top: '-10%', right: '-5%', zIndex: 3 }}>
                <svg width="90" height="70" viewBox="0 0 90 70" fill="none">
                  <rect x="32" y="28" width="26" height="16" rx="5" fill="#1a2e1a" stroke="rgba(16,185,129,0.6)" strokeWidth="1.5" />
                  <line x1="20" y1="36" x2="32" y2="36" stroke="rgba(16,185,129,0.5)" strokeWidth="2" />
                  <line x1="58" y1="36" x2="70" y2="36" stroke="rgba(16,185,129,0.5)" strokeWidth="2" />
                  <ellipse cx="18" cy="35" rx="14" ry="3" fill="none" stroke="rgba(16,185,129,0.7)" strokeWidth="1.5" opacity="0.6" />
                  <ellipse cx="72" cy="35" rx="14" ry="3" fill="none" stroke="rgba(16,185,129,0.7)" strokeWidth="1.5" opacity="0.6" />
                  <circle cx="45" cy="45" r="4" fill="#3b82f6" opacity="0.8" />
                  <circle cx="45" cy="45" r="2" fill="#60a5fa" />
                  <circle cx="45" cy="30" r="2.5" fill="#10b981" style={{ filter: 'drop-shadow(0 0 4px #10b981)' }} />
                  <path d="M38 22 Q45 18 52 22" stroke="rgba(59,130,246,0.5)" strokeWidth="1.5" fill="none" />
                  <path d="M34 17 Q45 11 56 17" stroke="rgba(59,130,246,0.3)" strokeWidth="1" fill="none" />
                </svg>
              </div>

              {/* Floating data chips */}
              <div className="absolute fade-up" style={{ bottom: '5%', left: '-5%', animationDelay: '1.5s' }}>
                <div className="glass-card px-3 py-2 text-xs font-semibold text-emerald-300 flex items-center gap-2" style={{ whiteSpace: 'nowrap' }}>
                  <span style={{ color: '#10b981' }}>📊</span> Soil pH: 6.8 ✓
                </div>
              </div>
              <div className="absolute fade-up" style={{ top: '10%', right: '-8%', animationDelay: '1.7s' }}>
                <div className="glass-card px-3 py-2 text-xs font-semibold text-blue-300 flex items-center gap-2" style={{ whiteSpace: 'nowrap' }}>
                  <span>🌡️</span> 34°C • Clear
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
