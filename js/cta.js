// CTA Banner Component
const ctaHTML = `
<section class="section-reveal py-20 px-6" id="contact">
  <div class="max-w-4xl mx-auto">
    <div class="glass-card p-12 text-center relative overflow-hidden" style="border-color:rgba(16,185,129,0.25)">
      <div class="absolute inset-0 pointer-events-none" style="background:radial-gradient(ellipse at 50% 0%, rgba(16,185,129,0.1), transparent 60%)"></div>
      <div style="font-size:56px" class="mb-4">🚜</div>
      <h2 class="text-4xl font-extrabold mb-4">Tayaar hain aap?</h2>
      <p class="text-gray-400 text-lg mb-8 max-w-md mx-auto" id="footer-tagline-display">
        Kisan ka saathi, hamesha saath. Aaj hi join karein aur apni fasal ko smarter banaaein.
      </p>
      <div class="flex flex-wrap gap-4 justify-center">
        <button class="btn-glow text-white font-bold px-10 py-4 rounded-full text-base">
          Abhi Register Karen — Free!
        </button>
        <button class="text-emerald-400 font-semibold px-8 py-4 rounded-full text-base" style="border:1px solid rgba(16,185,129,0.35);background:rgba(16,185,129,0.05)">
          Aur Jaanein
        </button>
      </div>
    </div>
  </div>
</section>
`;

document.getElementById('cta-container').innerHTML = ctaHTML;
