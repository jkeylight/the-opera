// THE OPERA™ — Applause Animation
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function initApplause() {
  const applause = document.getElementById('applause')
  if (!applause) return

  const words = applause.querySelectorAll('.applause__word')
  if (words.length === 0) return

  // Create staggered reveal
  gsap.fromTo(words,
    { y: 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1.2,
      stagger: 0.3,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: applause,
        start: 'top 60%',
        end: 'top 20%',
        toggleActions: 'play none none reverse'
      }
    }
  )

  // Scale effect on scroll
  words.forEach((word, i) => {
    gsap.to(word, {
      scale: 1 + (i * 0.1),
      ease: 'none',
      scrollTrigger: {
        trigger: applause,
        start: 'top center',
        end: 'bottom center',
        scrub: 2
      }
    })
  })
}
