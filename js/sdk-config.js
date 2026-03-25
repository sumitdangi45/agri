// Element SDK Configuration
const defaultConfig = {
  hero_heading_text: 'Farming Ka Smart Saathi',
  hero_subtext: 'Apni fasal ki poori jaankari — kab paani dein, kaunsi khad daalein, sab kuch ek hi jagah.',
  cta_button_text: 'Shuru Karen',
  chat_title: 'Apna sawaal likhein...',
  footer_tagline: 'Kisan ka saathi, hamesha saath. Aaj hi join karein aur apni fasal ko smarter banaaein.',
  background_color: '#0a0f0a',
  surface_color: 'rgba(255,255,255,0.05)',
  text_color: '#f0fdf4',
  primary_action_color: '#10b981',
  accent_color: '#3b82f6',
  font_family: 'Plus Jakarta Sans',
  font_size: 16,
};

window.elementSdk.init({
  defaultConfig,
  onConfigChange: async (config) => {
    const ff = `${config.font_family || defaultConfig.font_family}, 'Noto Sans Devanagari', sans-serif`;
    const fs = config.font_size || defaultConfig.font_size;

    // Hero heading words
    const heroEl = document.getElementById('hero-heading');
    const headingWords = (config.hero_heading_text || defaultConfig.hero_heading_text).split(' ');
    heroEl.innerHTML = '';
    headingWords.forEach((w, i) => {
      const span = document.createElement('span');
      span.style.fontFamily = ff;
      span.style.fontSize = `${fs * 3.5}px`;
      if (i >= headingWords.length - 2) {
        span.innerHTML = `<span class="grad-text">${w}</span>`;
      } else {
        span.textContent = w;
      }
      heroEl.appendChild(span);
      if (i < headingWords.length - 1) heroEl.appendChild(document.createTextNode(' '));
    });

    // Hero subtext
    const heroSubEl = document.getElementById('hero-subtext');
    if (heroSubEl) heroSubEl.textContent = config.hero_subtext || defaultConfig.hero_subtext;

    // CTA buttons
    const ctaEl = document.getElementById('cta-text');
    if (ctaEl) ctaEl.textContent = config.cta_button_text || defaultConfig.cta_button_text;

    const navCta = document.getElementById('nav-cta');
    if (navCta) navCta.textContent = (config.cta_button_text || defaultConfig.cta_button_text) + ' →';

    // Demo chat title
    const demoChatTitle = document.getElementById('demo-chat-title');
    if (demoChatTitle) demoChatTitle.textContent = config.chat_title || defaultConfig.chat_title;

    // Footer tagline
    const footerEl = document.getElementById('footer-tagline-display');
    if (footerEl) footerEl.textContent = config.footer_tagline || defaultConfig.footer_tagline;

    // Colors
    const bg = config.background_color || defaultConfig.background_color;
    const primary = config.primary_action_color || defaultConfig.primary_action_color;
    const accent = config.accent_color || defaultConfig.accent_color;

    document.body.style.background = bg;
    document.querySelector('.bg-mesh').style.background = `
      radial-gradient(ellipse 80% 60% at 10% 0%, ${primary}22 0%, transparent 60%),
      radial-gradient(ellipse 60% 50% at 90% 100%, ${accent}1a 0%, transparent 55%),
      ${bg}
    `;

    // Glow buttons
    document.querySelectorAll('.btn-glow').forEach(btn => {
      btn.style.background = `linear-gradient(135deg, ${primary}, ${primary}cc)`;
    });

    // Font sizes
    document.querySelectorAll('.feature-card h3').forEach(el => {
      el.style.fontFamily = ff;
      el.style.fontSize = `${fs * 1.1}px`;
    });

    document.querySelectorAll('.feature-card p').forEach(el => {
      el.style.fontFamily = ff;
      el.style.fontSize = `${fs * 0.85}px`;
    });

    lucide.createIcons();
  },

  mapToCapabilities: (config) => ({
    recolorables: [
      {
        get: () => config.background_color || defaultConfig.background_color,
        set: (v) => {
          config.background_color = v;
          window.elementSdk.setConfig({ background_color: v });
        },
      },
      {
        get: () => config.surface_color || defaultConfig.surface_color,
        set: (v) => {
          config.surface_color = v;
          window.elementSdk.setConfig({ surface_color: v });
        },
      },
      {
        get: () => config.text_color || defaultConfig.text_color,
        set: (v) => {
          config.text_color = v;
          window.elementSdk.setConfig({ text_color: v });
        },
      },
      {
        get: () => config.primary_action_color || defaultConfig.primary_action_color,
        set: (v) => {
          config.primary_action_color = v;
          window.elementSdk.setConfig({ primary_action_color: v });
        },
      },
      {
        get: () => config.accent_color || defaultConfig.accent_color,
        set: (v) => {
          config.accent_color = v;
          window.elementSdk.setConfig({ accent_color: v });
        },
      },
    ],
    borderables: [],
    fontEditable: {
      get: () => config.font_family || defaultConfig.font_family,
      set: (v) => {
        config.font_family = v;
        window.elementSdk.setConfig({ font_family: v });
      },
    },
    fontSizeable: {
      get: () => config.font_size || defaultConfig.font_size,
      set: (v) => {
        config.font_size = v;
        window.elementSdk.setConfig({ font_size: v });
      },
    },
  }),

  mapToEditPanelValues: (config) =>
    new Map([
      ['hero_heading', config.hero_heading_text || defaultConfig.hero_heading_text],
      ['hero_subtext', config.hero_subtext || defaultConfig.hero_subtext],
      ['cta_button_text', config.cta_button_text || defaultConfig.cta_button_text],
      ['chat_title', config.chat_title || defaultConfig.chat_title],
      ['footer_tagline', config.footer_tagline || defaultConfig.footer_tagline],
    ]),
});
