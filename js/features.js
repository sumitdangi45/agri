// Features Section Component
const featuresHTML = `
<section class="section-reveal py-24 px-6" id="features">
  <div class="max-w-6xl mx-auto">
    <div class="text-center mb-16">
      <div class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-emerald-400 mb-4" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.25)">
        Hamari Khaas Suvidhaein
      </div>
      <h2 class="text-4xl lg:text-5xl font-extrabold mb-4">
        Khet se leke <span class="grad-text">Mandi tak</span>
      </h2>
      <p class="text-gray-400 text-lg max-w-xl mx-auto">
        Ek hi platform par sab kuch — technology aur pakka gyan milake
      </p>
    </div>

    <!-- 4 Feature Cards -->
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <!-- Card 1: Crop Advisory -->
      <div class="glass-card p-6 cursor-pointer feature-card" data-color="#10b981">
        <div class="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style="background:rgba(16,185,129,0.15);border:1px solid rgba(16,185,129,0.3)">
          <svg width="24" height="24" viewbox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2">
            <path d="M12 2a9 9 0 0 1 9 9c0 3.5-2 6.5-5 8.3V22H8v-2.7C5 17.5 3 14.5 3 11a9 9 0 0 1 9-9z" />
            <path d="M9 12h6M12 9v6" />
          </svg>
        </div>
        <h3 class="font-bold text-lg text-white mb-2">Fasal Salah</h3>
        <p class="text-gray-400 text-sm leading-relaxed mb-4">
          AI se pata karo kaunsi fasal kab lagani hai, kitna paani chahiye
        </p>
        <div class="flex items-center gap-2 text-xs text-emerald-400 font-semibold">
          <span>Abhi Poochhen</span>
          <i data-lucide="arrow-right" style="width:14px;height:14px;"></i>
        </div>
      </div>

      <!-- Card 2: Pest Detection -->
      <div class="glass-card p-6 cursor-pointer feature-card" data-color="#f59e0b" style="animation-delay:0.1s">
        <div class="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style="background:rgba(245,158,11,0.12);border:1px solid rgba(245,158,11,0.3)">
          <svg width="24" height="24" viewbox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
            <path d="M11 8v6M8 11h6" />
          </svg>
        </div>
        <h3 class="font-bold text-lg text-white mb-2">Keeda Pehchaan</h3>
        <p class="text-gray-400 text-sm leading-relaxed mb-4">
          Photo kheincho, AI turant bata dega kaun sa rog hai aur ilaaj kya hai
        </p>
        <div class="flex items-center gap-2 text-xs text-amber-400 font-semibold">
          <span>Photo Upload Karen</span>
          <i data-lucide="arrow-right" style="width:14px;height:14px;"></i>
        </div>
      </div>

      <!-- Card 3: Voice Support -->
      <div class="glass-card p-6 cursor-pointer feature-card" data-color="#3b82f6" style="animation-delay:0.2s">
        <div class="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style="background:rgba(59,130,246,0.12);border:1px solid rgba(59,130,246,0.3)">
          <svg width="24" height="24" viewbox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2">
            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8" />
          </svg>
        </div>
        <h3 class="font-bold text-lg text-white mb-2">Awaaz Se Poochhen</h3>
        <p class="text-gray-400 text-sm leading-relaxed mb-4">
          Hindi mein bolein — AI samjhega aur jawab bhi Hindi mein dega
        </p>
        <div class="flex items-center gap-2 text-xs text-blue-400 font-semibold">
          <span>Bolna Shuru Karen</span>
          <i data-lucide="arrow-right" style="width:14px;height:14px;"></i>
        </div>
      </div>

      <!-- Card 4: Govt Schemes -->
      <div class="glass-card p-6 cursor-pointer feature-card" data-color="#a78bfa" style="animation-delay:0.3s">
        <div class="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style="background:rgba(167,139,250,0.12);border:1px solid rgba(167,139,250,0.3)">
          <svg width="24" height="24" viewbox="0 0 24 24" fill="none" stroke="#a78bfa" stroke-width="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        </div>
        <h3 class="font-bold text-lg text-white mb-2">Sarkari Yojnaein</h3>
        <p class="text-gray-400 text-sm leading-relaxed mb-4">
          PM Kisan, KCC loan, aur sabhi subsidy ki jankari ek click mein
        </p>
        <div class="flex items-center gap-2 text-xs text-violet-400 font-semibold">
          <span>Yojana Khojein</span>
          <i data-lucide="arrow-right" style="width:14px;height:14px;"></i>
        </div>
      </div>
    </div>
  </div>
</section>
`;

document.getElementById('features-container').innerHTML = featuresHTML;
