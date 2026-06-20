// THE OPERA™ — Orchestra Visualizer
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function initOrchestra() {
  const orchestra = document.getElementById('orchestra')
  if (!orchestra) return

  const lines = orchestra.querySelectorAll('[data-orchestra]')
  if (lines.length === 0) return

  // Create conducting animation
  lines.forEach((line, i) => {
    const delay = i * 0.1
    const duration = 1.5 + (i * 0.2)

    gsap.to(line, {
      scaleY: () => 0.3 + Math.random() * 0.7,
      duration: duration,
      delay: delay,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
      scrollTrigger: {
        trigger: orchestra,
        start: 'top 70%',
        end: 'bottom 30%',
        toggleActions: 'play pause play pause'
      }
    })
  })

  // Fade in orchestra on scroll
  gsap.fromTo(orchestra.querySelector('.orchestra__visualizer'),
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: orchestra,
        start: 'top 70%',
        toggleActions: 'play none none reverse'
      }
    }
  )
}
