'use client'

import { useEffect, useState } from 'react'

export default function SkipNavigation() {
  const [isVisible, setIsVisible] = useState(false)

  const handleSkipToMain = () => {
    const mainContent = document.getElementById('main-content')
    if (mainContent) {
      mainContent.focus()
      mainContent.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Tab' && !event.shiftKey) {
      setIsVisible(true)
    }
  }

  const handleBlur = () => {
    setIsVisible(false)
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <button
      onClick={handleSkipToMain}
      onBlur={handleBlur}
      className={`
        fixed top-4 left-4 z-50 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md
        transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        ${isVisible ? 'translate-y-0' : '-translate-y-16'}
      `}
      aria-label="Skip to main content"
    >
      Skip to main content
    </button>
  )
}