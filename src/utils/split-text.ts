// THE OPERA™ — Split Text Utility
import SplitType from 'split-type'

export function initSplitText() {
  // Split all elements with data-split attribute
  const splitElements = document.querySelectorAll('[data-split]')

  splitElements.forEach(el => {
    const split = new SplitType(el as HTMLElement, {
      types: 'lines',
      lineClass: 'line'
    })

    // Wrap each line inner content for animation
    split.lines?.forEach(line => {
      const inner = document.createElement('span')
      inner.className = 'line-inner'
      inner.innerHTML = line.innerHTML
      line.innerHTML = ''
      line.appendChild(inner)
    })
  })
}
