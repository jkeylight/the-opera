// THE OPERA™ — Hero Animation
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function initHero() {
  const hero = document.getElementById('hero')
  if (!hero) return

  // Hero content parallax
  const heroContent = hero.querySelector('.hero__content')
  if (heroContent) {
    gsap.to(heroContent, {
      y: -100,
      opacity: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: hero,
        start: '20% top',
        end: '60% top',
        scrub: 1
      }
    })
  }

  // Scroll line fade
  const scrollLine = hero.querySelector('.hero__scroll')
  if (scrollLine) {
    gsap.to(scrollLine, {
      opacity: 0,
      scrollTrigger: {
        trigger: hero,
        start: '5% top',
        end: '15% top',
        scrub: 1
      }
    })
  }
}
