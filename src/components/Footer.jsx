import { Leaf } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-emerald-500 flex items-center justify-center">
            <Leaf size={12} className="text-white" />
          </div>
          <span className="font-bold text-sm">
            <span className="text-emerald-400">Kisan</span>
            <span className="text-white">Saathi</span>
          </span>
        </div>
        <p className="text-gray-500 text-sm">© 2024 KisanSaathi. Jai Kisan 🙏</p>
        <div className="flex gap-6 text-sm text-gray-500">
          <a href="#" className="hover:text-emerald-400 transition-colors">Privacy</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">Terms</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  )
}
