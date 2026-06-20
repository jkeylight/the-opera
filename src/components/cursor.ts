// THE OPERA™ — Cursor Component
export function initCursor() {
  const cursor = document.getElementById('cursor')
  if (!cursor) return

  // Check for touch device
  if ('ontouchstart' in window) {
    cursor.style.display = 'none'
    return
  }

  let mouseX = 0
  let mouseY = 0
  let cursorX = 0
  let cursorY = 0

  const text = cursor.querySelector('.cursor__text')

  // Mouse move
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
  })

  // Smooth cursor follow
  function animateCursor() {
    const dx = mouseX - cursorX
    const dy = mouseY - cursorY

    cursorX += dx * 0.15
    cursorY += dy * 0.15

    cursor!.style.transform = `translate(${cursorX}px, ${cursorY}px)`

    requestAnimationFrame(animateCursor)
  }
  animateCursor()

  // Hover effects
  const hoverElements = document.querySelectorAll('a, button, [data-cursor]')
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('cursor--hover')
      const cursorText = el.getAttribute('data-cursor')
      if (cursorText && text) {
        text.textContent = cursorText
      }
    })

    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('cursor--hover')
      if (text) {
        text.textContent = ''
      }
    })
  })

  // Click effect
  document.addEventListener('mousedown', () => {
    cursor.classList.add('cursor--click')
  })

  document.addEventListener('mouseup', () => {
    cursor.classList.remove('cursor--click')
  })

  // Add cursor hover to interactive elements
  addCursorHoverToSections()
}

function addCursorHoverToSections() {
  const sections = document.querySelectorAll('.section')
  sections.forEach(section => {
    section.addEventListener('mouseenter', () => {
      const cursor = document.getElementById('cursor')
      const text = cursor?.querySelector('.cursor__text')
      if (text) {
        const scene = section.getAttribute('data-scene')
        switch(scene) {
          case 'act-1':
          case 'act-2':
          case 'act-3':
          case 'act-4':
          case 'act-5':
          case 'act-6':
          case 'act-7':
            text.textContent = 'ENTER ACT'
            break
          default:
            text.textContent = ''
        }
      }
    })

    section.addEventListener('mouseleave', () => {
      const cursor = document.getElementById('cursor')
      const text = cursor?.querySelector('.cursor__text')
      if (text) {
        text.textContent = ''
      }
    })
  })
}
