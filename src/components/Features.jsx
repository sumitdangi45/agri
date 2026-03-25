import { Sprout, Search, Mic, Home, ArrowRight } from 'lucide-react'

const features = [
  {
    icon: Sprout,
    title: 'Fasal Salah',
    desc: 'AI se pata karo kaunsi fasal kab lagani hai, kitna paani chahiye',
    cta: 'Abhi Poochhen',
    color: '#10b981',
    bgColor: 'rgba(16,185,129,0.15)',
    borderColor: 'rgba(16,185,129,0.3)',
    ctaColor: 'text-emerald-400'
  },
  {
    icon: Search,
    title: 'Keeda Pehchaan',
    desc: 'Photo kheincho, AI turant bata dega kaun sa rog hai aur ilaaj kya hai',
    cta: 'Photo Upload Karen',
    color: '#f59e0b',
    bgColor: 'rgba(245,158,11,0.12)',
    borderColor: 'rgba(245,158,11,0.3)',
    ctaColor: 'text-amber-400'
  },
  {
    icon: Mic,
    title: 'Awaaz Se Poochhen',
    desc: 'Hindi mein bolein — AI samjhega aur jawab bhi Hindi mein dega',
    cta: 'Bolna Shuru Karen',
    color: '#3b82f6',
    bgColor: 'rgba(59,130,246,0.12)',
    borderColor: 'rgba(59,130,246,0.3)',
    ctaColor: 'text-blue-400'
  },
  {
    icon: Home,
    title: 'Sarkari Yojnaein',
    desc: 'PM Kisan, KCC loan, aur sabhi subsidy ki jankari ek click mein',
    cta: 'Yojana Khojein',
    color: '#a78bfa',
    bgColor: 'rgba(167,139,250,0.12)',
    borderColor: 'rgba(167,139,250,0.3)',
    ctaColor: 'text-violet-400'
  }
]

export default function Features() {
  return (
    <section className="section-reveal py-24 px-6" id="features">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-emerald-400 mb-4" style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)' }}>
            Hamari Khaas Suvidhaein
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">
            Khet se leke <span className="grad-text">Mandi tak</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Ek hi platform par sab kuch — technology aur pakka gyan milake
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div key={idx} className="glass-card p-6 cursor-pointer hover:scale-105 transition-transform" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: feature.bgColor, border: `1px solid ${feature.borderColor}` }}>
                  <Icon size={24} style={{ color: feature.color }} />
                </div>
                <h3 className="font-bold text-lg text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{feature.desc}</p>
                <div className={`flex items-center gap-2 text-xs font-semibold ${feature.ctaColor}`}>
                  <span>{feature.cta}</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
