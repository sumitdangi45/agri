// Navbar Component
const navbarHTML = `
<div class="nav-blur fixed top-0 left-0 right-0 z-50 px-6 py-4">
  <div class="max-w-6xl mx-auto flex items-center justify-between">
    <!-- Logo -->
    <div class="flex items-center gap-2">
      <div class="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center" style="box-shadow: 0 0 15px rgba(16,185,129,0.5)">
        <svg width="18" height="18" viewbox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5">
          <path d="M12 2a9 9 0 0 1 9 9c0 3.5-2 6.5-5 8.3V22H8v-2.7C5 17.5 3 14.5 3 11a9 9 0 0 1 9-9z" />
          <path d="M12 6v6l4 2" />
        </svg>
      </div>
      <span class="font-bold text-lg tracking-tight" style="font-family:'Plus Jakarta Sans',sans-serif;">
        <span class="text-emerald-400">Kisan</span><span class="text-white">Saathi</span>
      </span>
    </div>

    <!-- Nav links (desktop) -->
    <ul class="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
      <li><a href="#features" class="hover:text-emerald-400 transition-colors">Suvidhaein</a></li>
      <li><a href="#weather" class="hover:text-emerald-400 transition-colors">Mausam</a></li>
      <li><a href="#demo" class="hover:text-emerald-400 transition-colors">Demo</a></li>
      <li><a href="#gallery" class="hover:text-emerald-400 transition-colors">Gallery</a></li>
      <li><a href="#contact" class="hover:text-emerald-400 transition-colors">Sampark</a></li>
    </ul>

    <button class="btn-glow text-white text-sm font-semibold px-5 py-2.5 rounded-full" id="nav-cta">
      Shuru Karen →
    </button>
  </div>
</div>
`;

document.getElementById('navbar-container').innerHTML = navbarHTML;
