// THE OPERA™ — Chandelier Parallax
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function initChandelier() {
  const chandeliers = document.querySelectorAll('.hero__chandelier')
  if (chandeliers.length === 0) return

  chandeliers.forEach((chandelier, i) => {
    // Slow floating animation
    gsap.to(chandelier, {
      y: `${i % 2 === 0 ? -25 : 25}%`,
      duration: 15 + i * 5,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true
    })

    // Parallax on scroll
    gsap.to(chandelier, {
      y: '10%',
      opacity: 0.5,
      ease: 'none',
      scrollTrigger: {
        trigger: '.section--hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 2
      }
    })
  })
}
