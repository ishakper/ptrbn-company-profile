import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark' | 'system'

function getSystemTheme(): 'light' | 'dark' {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function applyTheme(theme: 'light' | 'dark') {
  const root = document.documentElement
  if (theme === 'dark') {
    root.classList.add('dark')
  } else {
    root.classList.remove('dark')
  }
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() => {
    const stored = localStorage.getItem('rbn-theme') as Theme | null
    return stored ?? 'system'
  })

  const resolvedTheme: 'light' | 'dark' =
    theme === 'system' ? getSystemTheme() : theme

  useEffect(() => {
    applyTheme(resolvedTheme)
  }, [resolvedTheme])

  // Listen for OS preference changes when system theme selected
  useEffect(() => {
    if (theme !== 'system') return
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = () => applyTheme(mq.matches ? 'dark' : 'light')
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [theme])

  function setTheme(newTheme: Theme) {
    setThemeState(newTheme)
    localStorage.setItem('rbn-theme', newTheme)
    if (newTheme !== 'system') {
      applyTheme(newTheme)
    } else {
      applyTheme(getSystemTheme())
    }
  }

  function toggle() {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return { theme, resolvedTheme, setTheme, toggle, isDark: resolvedTheme === 'dark' }
}
