import { useState, useEffect, useRef, useCallback } from 'react'

export function useDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null)

  const toggle = useCallback((e) => {
    e?.stopPropagation()
    setIsOpen(prev => !prev)
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
  }, [])

  const open = useCallback(() => {
    setIsOpen(true)
  }, [])

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  return { isOpen, toggle, close, open, ref }
}
