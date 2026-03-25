import { useEffect } from 'react'

export default function Particles() {
  useEffect(() => {
    const container = document.getElementById('particles')
    if (!container) return

    const colors = ['#10b981', '#3b82f6', '#a3e635', '#6ee7b7']

    for (let i = 0; i < 18; i++) {
      const p = document.createElement('div')
      p.className = 'particle'
      const size = Math.random() * 5 + 2
      p.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        left: ${Math.random() * 100}%;
        animation-duration: ${Math.random() * 8 + 6}s;
        animation-delay: ${Math.random() * 8}s;
      `
      container.appendChild(p)
    }
  }, [])

  return <div id="particles"></div>
}
