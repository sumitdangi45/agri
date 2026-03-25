import { Leaf } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="nav-blur fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center" style={{ boxShadow: '0 0 15px rgba(16,185,129,0.5)' }}>
            <Leaf size={18} className="text-white" />
          </div>
          <span className="font-bold text-lg tracking-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            <span className="text-emerald-400">Kisan</span>
            <span className="text-white">Saathi</span>
          </span>
        </div>

        {/* Nav links (desktop) */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <li><a href="#features" className="hover:text-emerald-400 transition-colors">Suvidhaein</a></li>
          <li><a href="#weather" className="hover:text-emerald-400 transition-colors">Mausam</a></li>
          <li><a href="#demo" className="hover:text-emerald-400 transition-colors">Demo</a></li>
          <li><a href="#gallery" className="hover:text-emerald-400 transition-colors">Gallery</a></li>
          <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Sampark</a></li>
        </ul>

        <button className="btn-glow text-white text-sm font-semibold px-5 py-2.5 rounded-full">
          Shuru Karen →
        </button>
      </div>
    </nav>
  )
}
