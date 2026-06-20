// THE OPERA™ — Main Entry Point
import { initPreloader } from './animations/preloader'
import { initHero } from './animations/hero'
import { initSections } from './animations/sections'
import { initCursor } from './components/cursor'
import { initSmoothScroll } from './utils/smooth-scroll'
import { initSplitText } from './utils/split-text'
import { initRevealImages } from './animations/image-reveal'
import { initChandelier } from './animations/chandelier'
import { initOrchestra } from './animations/orchestra'
import { initApplause } from './animations/applause'
import { initFinalCurtain } from './animations/final-curtain'

function initAllAnimations() {
  initHero()
  initSections()
  initRevealImages()
  initChandelier()
  initOrchestra()
  initApplause()
  initFinalCurtain()
}

// Wait for DOM
document.addEventListener('DOMContentLoaded', () => {
  // Initialize smooth scroll first
  initSmoothScroll()

  // Initialize split text for all text elements
  initSplitText()

  // Initialize custom cursor
  initCursor()

  // Initialize preloader — all animations start when preloader completes
  initPreloader(initAllAnimations)
})
