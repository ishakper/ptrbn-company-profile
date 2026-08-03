import { useEffect, useState } from 'react'

interface ScrollPosition {
  x: number
  y: number
  isScrolled: boolean
  isScrollingDown: boolean
  scrollPercent: number
}

export function useScrollPosition(threshold = 80): ScrollPosition {
  const [position, setPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
    isScrolled: false,
    isScrollingDown: false,
    scrollPercent: 0,
  })

  useEffect(() => {
    let prevY = window.scrollY

    function onScroll() {
      const currentY = window.scrollY
      const maxScrollY = document.documentElement.scrollHeight - window.innerHeight
      setPosition({
        x: window.scrollX,
        y: currentY,
        isScrolled: currentY > threshold,
        isScrollingDown: currentY > prevY,
        scrollPercent: maxScrollY > 0 ? Math.round((currentY / maxScrollY) * 100) : 0,
      })
      prevY = currentY
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return position
}
