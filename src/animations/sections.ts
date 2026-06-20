// THE OPERA™ — Section Animations
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function initSections() {
  // Animate all split text elements
  const splitElements = document.querySelectorAll('[data-split]')
  splitElements.forEach(el => {
    const lines = el.querySelectorAll('.line-inner')
    if (lines.length === 0) return

    gsap.fromTo(lines,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          end: 'top 50%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  })

  // Section labels
  const labels = document.querySelectorAll('.section-label')
  labels.forEach(label => {
    gsap.fromTo(label,
      { x: -30, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: label,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  })

  // Parallax elements
  const parallaxElements = document.querySelectorAll('[data-parallax]')
  parallaxElements.forEach(el => {
    const speed = parseFloat(el.getAttribute('data-parallax') || '0.1')
    gsap.to(el, {
      y: () => window.innerHeight * speed * -1,
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    })
  })
}
