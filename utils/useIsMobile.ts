import { useEffect, useState } from 'react'

/**
 * Calculate the viewport in base of query values.
 * @return {boolean} True if the viewport matches with mobile or tablets.
 */

function useIsMobile(): boolean {
  const query = '(max-width: 1023px)'
  const getMatches = (query: string): boolean => {
    // Prevents SSR issues
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches
    }
    return false
  }

  const [matches, setMatches] = useState<boolean>(getMatches(query))

  function handleChange() {
    setMatches(getMatches(query))
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(query)

    // Triggered at the first client-side load and if query changes
    handleChange()

    // Listen matchMedia
    if (typeof matchMedia.addEventListener !== 'undefined') {
      matchMedia.addEventListener
    } else {
      matchMedia.addEventListener('change', handleChange)
    }

    return () => {
      if (typeof matchMedia.removeEventListener !== 'undefined') {
        matchMedia.removeEventListener
      } else {
        matchMedia.removeEventListener('change', handleChange)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  return matches
}

export default useIsMobile;