// THE OPERA™ — Preloader Animation
import gsap from 'gsap'

export function initPreloader(onComplete: () => void) {
  const preloader = document.getElementById('preloader')
  if (!preloader) {
    onComplete()
    return
  }

  const tl = gsap.timeline()

  // Phase 1: Orchestral swell - content appears
  tl.to('.preloader__content', {
    opacity: 1,
    duration: 1.5,
    ease: 'power2.out'
  })

  // Phase 2: Curtain begins opening
  .to('.preloader__curtain--left', {
    x: '-100%',
    duration: 2.5,
    ease: 'power4.inOut'
  }, '+=0.5')
  .to('.preloader__curtain--right', {
    x: '100%',
    duration: 2.5,
    ease: 'power4.inOut'
  }, '<')

  // Phase 3: Content fades as curtain opens
  .to('.preloader__content', {
    opacity: 0,
    scale: 0.95,
    duration: 1,
    ease: 'power2.in'
  }, '-=2')

  // Phase 4: Preloader fades out
  .to(preloader, {
    opacity: 0,
    duration: 0.5,
    ease: 'power2.in',
    onComplete: () => {
      preloader.style.display = 'none'
      onComplete()
    }
  })

  return tl
}
