// Footer Component
const footerHTML = `
<div class="py-10 px-6 border-t" style="border-color:rgba(255,255,255,0.06)">
  <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
    <div class="flex items-center gap-2">
      <div class="w-6 h-6 rounded-md bg-emerald-500 flex items-center justify-center">
        <svg width="12" height="12" viewbox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5">
          <path d="M12 2a9 9 0 0 1 9 9c0 3.5-2 6.5-5 8.3V22H8v-2.7C5 17.5 3 14.5 3 11a9 9 0 0 1 9-9z" />
        </svg>
      </div>
      <span class="font-bold text-sm">
        <span class="text-emerald-400">Kisan</span><span class="text-white">Saathi</span>
      </span>
    </div>
    <p class="text-gray-500 text-sm">© 2024 KisanSaathi. Jai Kisan 🙏</p>
    <div class="flex gap-6 text-sm text-gray-500">
      <a href="#" class="hover:text-emerald-400 transition-colors">Privacy</a>
      <a href="#" class="hover:text-emerald-400 transition-colors">Terms</a>
      <a href="#" class="hover:text-emerald-400 transition-colors">Contact</a>
    </div>
  </div>
</div>
`;

document.getElementById('footer-container').innerHTML = footerHTML;
