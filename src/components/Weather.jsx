export default function Weather() {
  return (
    <section className="section-reveal py-24 px-6" id="weather">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-blue-400 mb-4" style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.25)' }}>
            🌤️ Mausam Saath
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">
            Mausam Ka <span className="grad-text">Poora Hisaab</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Real-time weather alerts aur kisan ke liye actionable advice — taaki aap sahi faisla kar saken
          </p>
        </div>

        {/* Weather grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Main weather card */}
          <div className="lg:col-span-2 glass-card p-8 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-40 h-40 opacity-5" style={{ background: 'radial-gradient(circle, #3b82f6, transparent 70%)' }}></div>
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <div className="text-gray-400 text-sm mb-2">Aaj ka Mausam</div>
                  <div className="flex items-baseline gap-3 mb-4">
                    <div className="text-6xl font-extrabold text-blue-300">32°C</div>
                    <div className="text-lg text-gray-400">Partly Cloudy</div>
                  </div>
                  <div className="flex gap-6 text-sm">
                    <div>
                      <span className="text-gray-500">Humidity</span>
                      <div className="text-emerald-400 font-semibold text-lg">68%</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Wind Speed</span>
                      <div className="text-blue-400 font-semibold text-lg">12 km/h</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Rainfall</span>
                      <div className="text-violet-400 font-semibold text-lg">0 mm</div>
                    </div>
                  </div>
                </div>
                <div style={{ fontSize: '80px', lineHeight: 1 }}>⛅</div>
              </div>

              {/* Alert boxes */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="px-4 py-3 rounded-lg flex items-start gap-3" style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)' }}>
                  <div style={{ fontSize: '18px' }}>✅</div>
                  <div>
                    <div className="text-white font-semibold text-xs">Sahi Waqt</div>
                    <div className="text-emerald-300 text-xs">Aaj 6-9 AM mein paani dein — subah cool ho</div>
                  </div>
                </div>
                <div className="px-4 py-3 rounded-lg flex items-start gap-3" style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.3)' }}>
                  <div style={{ fontSize: '18px' }}>⚠️</div>
                  <div>
                    <div className="text-white font-semibold text-xs">68% Humidity</div>
                    <div className="text-amber-300 text-xs">Fungal disease ka khatra — Neem spray kar lo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 5-day forecast */}
          <div className="glass-card p-8">
            <div className="text-white font-bold text-sm mb-5">5-Din ka Pূrvavaani</div>
            <div className="space-y-3">
              {[
                { emoji: '🌤️', day: 'Kal (Guruvar)', desc: 'Mostly sunny', temp: '34° / 26°', rain: '0% rain' },
                { emoji: '🌧️', day: 'Shukravar', desc: 'Scattered showers', temp: '30° / 24°', rain: '45% rain', rainColor: 'text-amber-300' },
                { emoji: '🌦️', day: 'Shanivar', desc: 'Cloudy & warm', temp: '33° / 25°', rain: '15% rain' },
                { emoji: '⛈️', day: 'Ravivar', desc: 'Heavy rain expected', temp: '28° / 22°', rain: '80% rain', rainColor: 'text-red-400' },
                { emoji: '🌤️', day: 'Somvar', desc: 'Clear skies', temp: '35° / 27°', rain: '5% rain' }
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between items-center pb-3" style={{ borderBottom: idx < 4 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                  <div className="flex items-center gap-3">
                    <span style={{ fontSize: '20px' }}>{item.emoji}</span>
                    <div>
                      <div className="text-white text-xs font-semibold">{item.day}</div>
                      <div className="text-gray-400 text-xs">{item.desc}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-gray-300 text-xs font-semibold">{item.temp}</div>
                    <div className={`text-xs font-semibold ${item.rainColor || 'text-gray-500'}`}>{item.rain}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Smart recommendations */}
        <div className="glass-card p-8">
          <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
            <span style={{ fontSize: '24px' }}>💡</span> Kisan Ke Liye Smart Salah
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { emoji: '🌾', title: 'Fasal ke Liye Best Time', desc: 'Subah 6-9 AM mein irrigation karo. Dhoop ke waqt nahi, varna paani bhi lagti hai aur nutrients bhi nahi milta.', bg: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(34,197,94,0.05))', border: 'rgba(16,185,129,0.2)', color: 'text-emerald-300' },
              { emoji: '🚜', title: 'Agle 3 Din ke Liye', desc: 'Ravivar ko heavy rain hai — iska matlab turant harvesting ki tayyari karo. Fasal ko nuqsan hone se bacha lo.', bg: 'linear-gradient(135deg, rgba(59,130,246,0.1), rgba(96,165,250,0.05))', border: 'rgba(59,130,246,0.2)', color: 'text-blue-300' },
              { emoji: '🐛', title: 'Pest Management', desc: '68% humidity mein Leaf Spot fungus ka khatra hai. Carbendazim spray kar lo aaj raat 5 baje. Kal subah mat karna.', bg: 'linear-gradient(135deg, rgba(245,158,11,0.1), rgba(251,146,60,0.05))', border: 'rgba(245,158,11,0.2)', color: 'text-amber-300' },
              { emoji: '💧', title: 'Water Management', desc: 'Aaj paani mat dena — rainfall waala din aa raha hai. Pani ki bachat karo aur Ravivar tak ruko.', bg: 'linear-gradient(135deg, rgba(167,139,250,0.1), rgba(196,181,253,0.05))', border: 'rgba(167,139,250,0.2)', color: 'text-violet-300' },
              { emoji: '🎯', title: 'Fertilizer Schedule', desc: '32°C par temperature high hai. Nitrogen ka istemal thoda kamm karo — Phosphorus badha do, strength ke liye.', bg: 'linear-gradient(135deg, rgba(236,72,153,0.1), rgba(244,114,182,0.05))', border: 'rgba(236,72,153,0.2)', color: 'text-pink-300' },
              { emoji: '📍', title: 'Mandi Bhav', desc: 'Gehu ka bhav aaj ₹2,450/quintal hai — Kal ₹50 badhne ke chances hain. Thakk ke baithna, jaldi mat becho.', bg: 'linear-gradient(135deg, rgba(34,197,94,0.1), rgba(74,222,128,0.05))', border: 'rgba(34,197,94,0.2)', color: 'text-green-300' }
            ].map((item, idx) => (
              <div key={idx} className="px-6 py-5 rounded-xl flex items-start gap-4" style={{ background: item.bg, border: `1px solid ${item.border}` }}>
                <div style={{ fontSize: '28px' }}>{item.emoji}</div>
                <div>
                  <div className="text-white font-semibold text-sm mb-1">{item.title}</div>
                  <div className={`${item.color} text-xs leading-relaxed`}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
