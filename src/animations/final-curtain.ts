// THE OPERA™ — Final Curtain Animation
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function initFinalCurtain() {
  const section = document.getElementById('final-curtain')
  if (!section) return

  const leftCurtain = section.querySelector('.final-curtain__fabric--left')
  const rightCurtain = section.querySelector('.final-curtain__fabric--right')
  const content = section.querySelector('.final-curtain__content')

  if (!leftCurtain || !rightCurtain) return

  // Curtain closing animation
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'top center',
      end: 'bottom center',
      scrub: 2
    }
  })

  // Curtains start open
  gsap.set(leftCurtain, { x: '-100%' })
  gsap.set(rightCurtain, { x: '100%' })

  // Curtains close
  tl.to(leftCurtain, {
    x: '0%',
    duration: 2,
    ease: 'power3.inOut'
  })
  .to(rightCurtain, {
    x: '0%',
    duration: 2,
    ease: 'power3.inOut'
  }, '<')

  // Content appears
  if (content) {
    gsap.fromTo(content,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: '30% center',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }
}
