import { useState, useEffect } from 'react'
import { Check, Mic, Send } from 'lucide-react'

const chatMessages = [
  { type: 'user', text: 'Aaj moong ko paani dena hai?' },
  { type: 'bot', text: 'Haan bhai! Aaj ka mausam dekh ke lagta hai — subah 6 baje ya shaam 5 baje paani dein. Dhoop mein mat dena. 🌱', delay: 1200 },
  { type: 'user', text: 'Koi keeda to nahi lagega?' },
  { type: 'bot', text: 'Is mausam mein Aphid ka khatra ho sakta hai. Neem oil spray kar lo — 2 ml per litre paani. Bilkul safe hai. 🌿', delay: 2800 },
  { type: 'user', text: 'Shukriya bhai! 🙏' },
  { type: 'bot', text: 'Khushi se! Koi bhi sawaal ho, main hamesha yahan hoon. Jai Kisan! 🚜', delay: 4000 },
]

export default function Demo() {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const renderChat = () => {
      const newMessages = []
      let msgDelay = 0

      chatMessages.forEach((msg, idx) => {
        msgDelay = msg.delay || idx * 700
        setTimeout(() => {
          newMessages.push(msg)
          setMessages([...newMessages])
        }, msgDelay)
      })

      // Show typing indicator
      setTimeout(() => {
        newMessages.push({ type: 'typing' })
        setMessages([...newMessages])
      }, msgDelay + 500)
    }

    renderChat()
    const interval = setInterval(renderChat, 7500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="section-reveal py-24 px-6" id="demo">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Info */}
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-blue-400 mb-4" style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.25)' }}>
              🤖 AI Chat Interface
            </div>
            <h2 className="text-4xl font-extrabold mb-4">
              Seedha baat karo <span className="grad-text">KisanSaathi</span> se
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Koi app download nahi, koi tech knowledge nahi. Bas apni baat Hindi mein likhein ya bolein — hum samjhenge.
            </p>

            {/* Feature bullets */}
            <ul className="space-y-4">
              {[
                { icon: '24/7', title: '24/7 Sahayata', desc: 'Raat ko bhi, subah bhi — hamesha available', color: 'bg-emerald-500' },
                { icon: '🌐', title: 'Hindi + 12 Bhashaaein', desc: 'Apni maatribhasha mein jawaab paein', color: 'bg-blue-500' },
                { icon: '✓', title: 'Expert Verified Jawab', desc: 'Krishi Vigyan Kendra ke experts se verified', color: 'bg-violet-500' }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className={`w-6 h-6 rounded-full ${item.color} flex-shrink-0 flex items-center justify-center mt-0.5`} style={{ boxShadow: `0 0 10px ${item.color}` }}>
                    <Check size={14} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{item.title}</div>
                    <div className="text-gray-400 text-sm">{item.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Phone mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow behind phone */}
              <div className="absolute inset-0 rounded-3xl" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(16,185,129,0.2), transparent 70%)', filter: 'blur(30px)', transform: 'scale(1.2)' }}></div>

              {/* Phone frame */}
              <div className="phone-frame relative rounded-3xl overflow-hidden scan-line" style={{ width: '280px', height: '560px' }}>
                {/* Status bar */}
                <div className="flex justify-between items-center px-5 pt-4 pb-2 text-xs text-gray-400" style={{ fontSize: '10px' }}>
                  <span>9:41</span>
                  <div className="flex gap-1 items-center">
                    <svg width="12" height="10" viewBox="0 0 12 10">
                      <rect x="0" y="4" width="2" height="6" fill="#10b981" />
                      <rect x="3" y="2" width="2" height="8" fill="#10b981" />
                      <rect x="6" y="0" width="2" height="10" fill="#10b981" />
                      <rect x="9" y="3" width="2" height="7" fill="#10b981" opacity="0.3" />
                    </svg>
                    <svg width="14" height="10" viewBox="0 0 14 10">
                      <rect x="0" y="1" width="12" height="8" rx="2" fill="none" stroke="#10b981" strokeWidth="1.2" />
                      <rect x="1" y="2" width="8" height="6" rx="1" fill="#10b981" />
                      <rect x="13" y="3" width="1" height="4" rx="0.5" fill="#10b981" />
                    </svg>
                  </div>
                </div>

                {/* App header */}
                <div className="flex items-center gap-3 px-4 py-3" style={{ background: 'rgba(16,185,129,0.1)', borderBottom: '1px solid rgba(16,185,129,0.15)' }}>
                  <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center" style={{ boxShadow: '0 0 12px rgba(16,185,129,0.5)' }}>
                    <span style={{ fontSize: '16px' }}>🌱</span>
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">KisanSaathi</div>
                    <div className="text-emerald-400 text-xs flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" style={{ animation: 'typingBounce 1.5s infinite' }}></span>
                      Online hai
                    </div>
                  </div>
                </div>

                {/* Chat messages */}
                <div className="chat-scroll flex flex-col gap-3 px-3 py-3" style={{ height: '380px' }}>
                  {messages.map((msg, idx) => (
                    msg.type === 'typing' ? (
                      <div key={idx} className="flex justify-start">
                        <div style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '16px 16px 16px 4px', padding: '10px 14px', display: 'flex', gap: '4px', alignItems: 'center' }}>
                          <span className="typing-dot"></span>
                          <span className="typing-dot"></span>
                          <span className="typing-dot"></span>
                        </div>
                      </div>
                    ) : (
                      <div key={idx} className={`chat-msg flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div style={{
                          maxWidth: '80%',
                          padding: '8px 12px',
                          borderRadius: msg.type === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                          fontSize: '12px',
                          lineHeight: '1.5',
                          fontFamily: "'Noto Sans Devanagari', 'Plus Jakarta Sans', sans-serif",
                          background: msg.type === 'user' ? 'linear-gradient(135deg, #10b981, #059669)' : 'rgba(255, 255, 255, 0.08)',
                          color: msg.type === 'user' ? 'white' : '#d1fae5',
                          border: msg.type === 'user' ? 'none' : '1px solid rgba(16, 185, 129, 0.2)'
                        }}>
                          {msg.text}
                        </div>
                      </div>
                    )
                  ))}
                </div>

                {/* Input bar */}
                <div className="absolute bottom-0 left-0 right-0 px-3 py-3" style={{ background: 'rgba(10,15,10,0.95)', borderTop: '1px solid rgba(16,185,129,0.15)' }}>
                  <div className="flex items-center gap-2 rounded-full px-3 py-2" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(16,185,129,0.2)' }}>
                    <Mic size={16} style={{ color: '#10b981', flexShrink: 0 }} />
                    <span className="text-gray-400 text-xs flex-1">Apna sawaal likhein...</span>
                    <Send size={16} style={{ color: '#10b981', flexShrink: 0 }} />
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
