// Weather Section Component
const weatherHTML = `
<section class="section-reveal py-24 px-6" id="weather">
  <div class="max-w-6xl mx-auto">
    <div class="text-center mb-16">
      <div class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-blue-400 mb-4" style="background:rgba(59,130,246,0.1);border:1px solid rgba(59,130,246,0.25)">
        🌤️ Mausam Saath
      </div>
      <h2 class="text-4xl lg:text-5xl font-extrabold mb-4">
        Mausam Ka <span class="grad-text">Poora Hisaab</span>
      </h2>
      <p class="text-gray-400 text-lg max-w-xl mx-auto">
        Real-time weather alerts aur kisan ke liye actionable advice — taaki aap sahi faisla kar saken
      </p>
    </div>

    <!-- Weather grid -->
    <div class="grid lg:grid-cols-3 gap-6 mb-8">
      <!-- Main weather card -->
      <div class="lg:col-span-2 glass-card p-8 overflow-hidden relative">
        <div class="absolute top-0 right-0 w-40 h-40 opacity-5" style="background:radial-gradient(circle, #3b82f6, transparent 70%)"></div>
        <div class="relative z-10">
          <div class="flex justify-between items-start mb-8">
            <div>
              <div class="text-gray-400 text-sm mb-2">Aaj ka Mausam</div>
              <div class="flex items-baseline gap-3 mb-4">
                <div class="text-6xl font-extrabold text-blue-300">32°C</div>
                <div class="text-lg text-gray-400">Partly Cloudy</div>
              </div>
              <div class="flex gap-6 text-sm">
                <div>
                  <span class="text-gray-500">Humidity</span>
                  <div class="text-emerald-400 font-semibold text-lg">68%</div>
                </div>
                <div>
                  <span class="text-gray-500">Wind Speed</span>
                  <div class="text-blue-400 font-semibold text-lg">12 km/h</div>
                </div>
                <div>
                  <span class="text-gray-500">Rainfall</span>
                  <div class="text-violet-400 font-semibold text-lg">0 mm</div>
                </div>
              </div>
            </div>
            <div style="font-size:80px;line-height:1;">⛅</div>
          </div>

          <!-- Alert boxes -->
          <div class="grid sm:grid-cols-2 gap-4">
            <div class="px-4 py-3 rounded-lg flex items-start gap-3" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3)">
              <div style="font-size:18px;">✅</div>
              <div>
                <div class="text-white font-semibold text-xs">Sahi Waqt</div>
                <div class="text-emerald-300 text-xs">Aaj 6-9 AM mein paani dein — subah cool ho</div>
              </div>
            </div>
            <div class="px-4 py-3 rounded-lg flex items-start gap-3" style="background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.3)">
              <div style="font-size:18px;">⚠️</div>
              <div>
                <div class="text-white font-semibold text-xs">68% Humidity</div>
                <div class="text-amber-300 text-xs">Fungal disease ka khatra — Neem spray kar lo</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 5-day forecast -->
      <div class="glass-card p-8">
        <div class="text-white font-bold text-sm mb-5">5-Din ka Pূrvavaani</div>
        <div class="space-y-3">
          <div class="flex justify-between items-center pb-3" style="border-bottom:1px solid rgba(255,255,255,0.06)">
            <div class="flex items-center gap-3">
              <span style="font-size:20px;">🌤️</span>
              <div>
                <div class="text-white text-xs font-semibold">Kal (Guruvar)</div>
                <div class="text-gray-400 text-xs">Mostly sunny</div>
              </div>
            </div>
            <div class="text-right">
              <div class="text-gray-300 text-xs font-semibold">34° / 26°</div>
              <div class="text-gray-500 text-xs">0% rain</div>
            </div>
          </div>
          <div class="flex justify-between items-center pb-3" style="border-bottom:1px solid rgba(255,255,255,0.06)">
            <div class="flex items-center gap-3">
              <span style="font-size:20px;">🌧️</span>
              <div>
                <div class="text-white text-xs font-semibold">Shukravar</div>
                <div class="text-gray-400 text-xs">Scattered showers</div>
              </div>
            </div>
            <div class="text-right">
              <div class="text-gray-300 text-xs font-semibold">30° / 24°</div>
              <div class="text-amber-300 text-xs font-semibold">45% rain</div>
            </div>
          </div>
          <div class="flex justify-between items-center pb-3" style="border-bottom:1px solid rgba(255,255,255,0.06)">
            <div class="flex items-center gap-3">
              <span style="font-size:20px;">🌦️</span>
              <div>
                <div class="text-white text-xs font-semibold">Shanivar</div>
                <div class="text-gray-400 text-xs">Cloudy & warm</div>
              </div>
            </div>
            <div class="text-right">
              <div class="text-gray-300 text-xs font-semibold">33° / 25°</div>
              <div class="text-gray-500 text-xs">15% rain</div>
            </div>
          </div>
          <div class="flex justify-between items-center pb-3" style="border-bottom:1px solid rgba(255,255,255,0.06)">
            <div class="flex items-center gap-3">
              <span style="font-size:20px;">⛈️</span>
              <div>
                <div class="text-white text-xs font-semibold">Ravivar</div>
                <div class="text-gray-400 text-xs">Heavy rain expected</div>
              </div>
            </div>
            <div class="text-right">
              <div class="text-gray-300 text-xs font-semibold">28° / 22°</div>
              <div class="text-red-400 text-xs font-semibold">80% rain</div>
            </div>
          </div>
          <div class="flex justify-between items-center">
            <div class="flex items-center gap-3">
              <span style="font-size:20px;">🌤️</span>
              <div>
                <div class="text-white text-xs font-semibold">Somvar</div>
                <div class="text-gray-400 text-xs">Clear skies</div>
              </div>
            </div>
            <div class="text-right">
              <div class="text-gray-300 text-xs font-semibold">35° / 27°</div>
              <div class="text-gray-500 text-xs">5% rain</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Smart recommendations -->
    <div class="glass-card p-8">
      <h3 class="text-white font-bold text-lg mb-6 flex items-center gap-2">
        <span style="font-size:24px;">💡</span> Kisan Ke Liye Smart Salah
      </h3>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="px-6 py-5 rounded-xl flex items-start gap-4" style="background:linear-gradient(135deg, rgba(16,185,129,0.1), rgba(34,197,94,0.05));border:1px solid rgba(16,185,129,0.2)">
          <div style="font-size:28px;">🌾</div>
          <div>
            <div class="text-white font-semibold text-sm mb-1">Fasal ke Liye Best Time</div>
            <div class="text-emerald-300 text-xs leading-relaxed">Subah 6-9 AM mein irrigation karo. Dhoop ke waqt nahi, varna paani bhi lagti hai aur nutrients bhi nahi milta.</div>
          </div>
        </div>
        <div class="px-6 py-5 rounded-xl flex items-start gap-4" style="background:linear-gradient(135deg, rgba(59,130,246,0.1), rgba(96,165,250,0.05));border:1px solid rgba(59,130,246,0.2)">
          <div style="font-size:28px;">🚜</div>
          <div>
            <div class="text-white font-semibold text-sm mb-1">Agle 3 Din ke Liye</div>
            <div class="text-blue-300 text-xs leading-relaxed">Ravivar ko heavy rain hai — iska matlab turant harvesting ki tayyari karo. Fasal ko nuqsan hone se bacha lo.</div>
          </div>
        </div>
        <div class="px-6 py-5 rounded-xl flex items-start gap-4" style="background:linear-gradient(135deg, rgba(245,158,11,0.1), rgba(251,146,60,0.05));border:1px solid rgba(245,158,11,0.2)">
          <div style="font-size:28px;">🐛</div>
          <div>
            <div class="text-white font-semibold text-sm mb-1">Pest Management</div>
            <div class="text-amber-300 text-xs leading-relaxed">68% humidity mein Leaf Spot fungus ka khatra hai. Carbendazim spray kar lo aaj raat 5 baje. Kal subah mat karna.</div>
          </div>
        </div>
        <div class="px-6 py-5 rounded-xl flex items-start gap-4" style="background:linear-gradient(135deg, rgba(167,139,250,0.1), rgba(196,181,253,0.05));border:1px solid rgba(167,139,250,0.2)">
          <div style="font-size:28px;">💧</div>
          <div>
            <div class="text-white font-semibold text-sm mb-1">Water Management</div>
            <div class="text-violet-300 text-xs leading-relaxed">Aaj paani mat dena — rainfall waala din aa raha hai. Pani ki bachat karo aur Ravivar tak ruko.</div>
          </div>
        </div>
        <div class="px-6 py-5 rounded-xl flex items-start gap-4" style="background:linear-gradient(135deg, rgba(236,72,153,0.1), rgba(244,114,182,0.05));border:1px solid rgba(236,72,153,0.2)">
          <div style="font-size:28px;">🎯</div>
          <div>
            <div class="text-white font-semibold text-sm mb-1">Fertilizer Schedule</div>
            <div class="text-pink-300 text-xs leading-relaxed">32°C par temperature high hai. Nitrogen ka istemal thoda kamm karo — Phosphorus badha do, strength ke liye.</div>
          </div>
        </div>
        <div class="px-6 py-5 rounded-xl flex items-start gap-4" style="background:linear-gradient(135deg, rgba(34,197,94,0.1), rgba(74,222,128,0.05));border:1px solid rgba(34,197,94,0.2)">
          <div style="font-size:28px;">📍</div>
          <div>
            <div class="text-white font-semibold text-sm mb-1">Mandi Bhav</div>
            <div class="text-green-300 text-xs leading-relaxed">Gehu ka bhav aaj ₹2,450/quintal hai — Kal ₹50 badhne ke chances hain. Thakk ke baithna, jaldi mat becho.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;

document.getElementById('weather-container').innerHTML = weatherHTML;
