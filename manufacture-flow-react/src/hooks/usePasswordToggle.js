import { useState, useCallback } from 'react'

export function usePasswordToggle() {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = useCallback(() => {
    setShowPassword((prev) => !prev)
  }, [])

  return [showPassword, togglePasswordVisibility]
}
