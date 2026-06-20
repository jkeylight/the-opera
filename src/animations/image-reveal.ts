// THE OPERA™ — Image Reveal Animation
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function initRevealImages() {
  // Curtain reveal — image uncovers from top to bottom
  const reveals = document.querySelectorAll('.image-reveal')

  reveals.forEach(el => {
    const placeholder = el.querySelector('.image-reveal__placeholder')
    if (!placeholder) return

    gsap.to(placeholder, {
      scaleY: 1,
      duration: 1.5,
      ease: 'power4.inOut',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        end: 'top 25%',
        toggleActions: 'play none none reverse'
      }
    })
  })

  // Direct background-image elements (mirrors, corridors, glimpse, etc.)
  const directReveals = document.querySelectorAll('[data-reveal]')
  directReveals.forEach(el => {
    // Skip elements that use image-reveal__placeholder
    if (el.classList.contains('image-reveal')) return
    if (el.querySelector('.image-reveal__placeholder')) return

    gsap.fromTo(el,
      { opacity: 0, scale: 1.08 },
      {
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          end: 'top 40%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  })

  // Hero image special — blur to sharp
  const heroImage = document.querySelector('.hero__image')
  if (heroImage) {
    gsap.to(heroImage, {
      scale: 1,
      filter: 'blur(0px)',
      opacity: 1,
      duration: 2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.section--hero',
        start: 'top top',
        end: '30% top',
        scrub: 1
      }
    })
  }
}
