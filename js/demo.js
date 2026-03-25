// Demo Section Component
const demoHTML = `
<section class="section-reveal py-24 px-6" id="demo">
  <div class="max-w-6xl mx-auto">
    <div class="grid lg:grid-cols-2 gap-16 items-center">
      <!-- Left: Info -->
      <div>
        <div class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-blue-400 mb-4" style="background:rgba(59,130,246,0.1);border:1px solid rgba(59,130,246,0.25)">
          🤖 AI Chat Interface
        </div>
        <h2 class="text-4xl font-extrabold mb-4" id="chat-heading">
          Seedha baat karo <span class="grad-text">KisanSaathi</span> se
        </h2>
        <p class="text-gray-400 text-lg leading-relaxed mb-8">
          Koi app download nahi, koi tech knowledge nahi. Bas apni baat Hindi mein likhein ya bolein — hum samjhenge.
        </p>

        <!-- Feature bullets -->
        <ul class="space-y-4">
          <li class="flex items-start gap-3">
            <div class="w-6 h-6 rounded-full bg-emerald-500 flex-shrink-0 flex items-center justify-center mt-0.5" style="box-shadow:0 0 10px rgba(16,185,129,0.4)">
              <i data-lucide="check" style="width:14px;height:14px;color:white;"></i>
            </div>
            <div>
              <div class="font-semibold text-white text-sm">24/7 Sahayata</div>
              <div class="text-gray-400 text-sm">Raat ko bhi, subah bhi — hamesha available</div>
            </div>
          </li>
          <li class="flex items-start gap-3">
            <div class="w-6 h-6 rounded-full bg-blue-500 flex-shrink-0 flex items-center justify-center mt-0.5" style="box-shadow:0 0 10px rgba(59,130,246,0.4)">
              <i data-lucide="check" style="width:14px;height:14px;color:white;"></i>
            </div>
            <div>
              <div class="font-semibold text-white text-sm">Hindi + 12 Bhashaaein</div>
              <div class="text-gray-400 text-sm">Apni maatribhasha mein jawaab paein</div>
            </div>
          </li>
          <li class="flex items-start gap-3">
            <div class="w-6 h-6 rounded-full bg-violet-500 flex-shrink-0 flex items-center justify-center mt-0.5" style="box-shadow:0 0 10px rgba(139,92,246,0.4)">
              <i data-lucide="check" style="width:14px;height:14px;color:white;"></i>
            </div>
            <div>
              <div class="font-semibold text-white text-sm">Expert Verified Jawab</div>
              <div class="text-gray-400 text-sm">Krishi Vigyan Kendra ke experts se verified</div>
            </div>
          </li>
        </ul>
      </div>

      <!-- Right: Phone mockup -->
      <div class="flex justify-center lg:justify-end">
        <div class="relative">
          <!-- Glow behind phone -->
          <div class="absolute inset-0 rounded-3xl" style="background:radial-gradient(circle at 50% 50%, rgba(16,185,129,0.2), transparent 70%);filter:blur(30px);transform:scale(1.2)"></div>

          <!-- Phone frame -->
          <div class="phone-frame relative rounded-3xl overflow-hidden scan-line" style="width:280px;height:560px">
            <!-- Status bar -->
            <div class="flex justify-between items-center px-5 pt-4 pb-2 text-xs text-gray-400" style="font-size:10px">
              <span>9:41</span>
              <div class="flex gap-1 items-center">
                <svg width="12" height="10" viewbox="0 0 12 10">
                  <rect x="0" y="4" width="2" height="6" fill="#10b981" />
                  <rect x="3" y="2" width="2" height="8" fill="#10b981" />
                  <rect x="6" y="0" width="2" height="10" fill="#10b981" />
                  <rect x="9" y="3" width="2" height="7" fill="#10b981" opacity="0.3" />
                </svg>
                <svg width="14" height="10" viewbox="0 0 14 10">
                  <rect x="0" y="1" width="12" height="8" rx="2" fill="none" stroke="#10b981" stroke-width="1.2" />
                  <rect x="1" y="2" width="8" height="6" rx="1" fill="#10b981" />
                  <rect x="13" y="3" width="1" height="4" rx="0.5" fill="#10b981" />
                </svg>
              </div>
            </div>

            <!-- App header -->
            <div class="flex items-center gap-3 px-4 py-3" style="background:rgba(16,185,129,0.1);border-bottom:1px solid rgba(16,185,129,0.15)">
              <div class="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center" style="box-shadow:0 0 12px rgba(16,185,129,0.5)">
                <span style="font-size:16px">🌱</span>
              </div>
              <div>
                <div class="text-white font-bold text-sm">KisanSaathi</div>
                <div class="text-emerald-400 text-xs flex items-center gap-1">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" style="animation:typingBounce 1.5s infinite"></span>
                  Online hai
                </div>
              </div>
            </div>

            <!-- Chat messages -->
            <div class="chat-scroll flex flex-col gap-3 px-3 py-3" style="height:380px" id="chat-messages"></div>

            <!-- Input bar -->
            <div class="absolute bottom-0 left-0 right-0 px-3 py-3" style="background:rgba(10,15,10,0.95);border-top:1px solid rgba(16,185,129,0.15)">
              <div class="flex items-center gap-2 rounded-full px-3 py-2" style="background:rgba(255,255,255,0.06);border:1px solid rgba(16,185,129,0.2)">
                <i data-lucide="mic" style="width:16px;height:16px;color:#10b981;flex-shrink:0;"></i>
                <span class="text-gray-400 text-xs flex-1" id="demo-chat-title">Apna sawaal likhein...</span>
                <i data-lucide="send" style="width:16px;height:16px;color:#10b981;flex-shrink:0;"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;

document.getElementById('demo-container').innerHTML = demoHTML;

// Chat demo logic
const chatMessages = [
  { type: 'user', text: 'Aaj moong ko paani dena hai?' },
  { type: 'bot', text: 'Haan bhai! Aaj ka mausam dekh ke lagta hai — subah 6 baje ya shaam 5 baje paani dein. Dhoop mein mat dena. 🌱', delay: 1200 },
  { type: 'user', text: 'Koi keeda to nahi lagega?' },
  { type: 'bot', text: 'Is mausam mein Aphid ka khatra ho sakta hai. Neem oil spray kar lo — 2 ml per litre paani. Bilkul safe hai. 🌿', delay: 2800 },
  { type: 'user', text: 'Shukriya bhai! 🙏' },
  { type: 'bot', text: 'Khushi se! Koi bhi sawaal ho, main hamesha yahan hoon. Jai Kisan! 🚜', delay: 4000 },
];

const chatContainer = document.getElementById('chat-messages');

function renderChat() {
  chatContainer.innerHTML = '';
  let msgDelay = 0;

  chatMessages.forEach((msg, idx) => {
    msgDelay = msg.delay || idx * 700;
    setTimeout(() => {
      const wrap = document.createElement('div');
      wrap.className = 'chat-msg flex ' + (msg.type === 'user' ? 'justify-end' : 'justify-start');
      wrap.style.animationDelay = '0s';

      const bubble = document.createElement('div');
      bubble.style.cssText = `
        max-width: 80%;
        padding: 8px 12px;
        border-radius: ${msg.type === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px'};
        font-size: 12px;
        line-height: 1.5;
        font-family: 'Noto Sans Devanagari', 'Plus Jakarta Sans', sans-serif;
        ${msg.type === 'user'
          ? 'background: linear-gradient(135deg, #10b981, #059669); color: white;'
          : 'background: rgba(255, 255, 255, 0.08); color: #d1fae5; border: 1px solid rgba(16, 185, 129, 0.2);'
        }
      `;
      bubble.textContent = msg.text;
      wrap.appendChild(bubble);
      chatContainer.appendChild(wrap);
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }, msgDelay);
  });

  // Show typing indicator
  setTimeout(() => {
    const typingWrap = document.createElement('div');
    typingWrap.className = 'flex justify-start';
    typingWrap.innerHTML = `
      <div style="background:rgba(255,255,255,0.08);border:1px solid rgba(16,185,129,0.2);border-radius:16px 16px 16px 4px;padding:10px 14px;display:flex;gap:4px;align-items:center;">
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
      </div>
    `;
    chatContainer.appendChild(typingWrap);
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }, msgDelay + 500);
}

renderChat();

// Loop chat demo every 7 seconds
setInterval(() => {
  renderChat();
}, 7500);
