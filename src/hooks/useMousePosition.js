import React, { useState, useEffect } from 'react';

// implement custom hook (as a function)
const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    console.log('Setting up event')
    const handleMouseMove = (e) => {
      setPosition({
        x: e.pageX,
        y: e.pageY
      })
    }

    document.addEventListener('mousemove', handleMouseMove)

    // componentWillUnmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return position
}

export default useMousePosition;