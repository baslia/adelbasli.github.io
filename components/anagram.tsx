"use client"

import { useEffect, useRef, useState } from "react"

export function Anagram() {
  const [isAdel, setIsAdel] = useState(true)
  const [movingIndex, setMovingIndex] = useState<number | null>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Letter definitions: char and current position
  const adelOrder = [0, 1, 2, 3] // A d e l
  const leadOrder = [2, 3, 1, 0] // A->2, d->3, e->1, l->0

  const letters = ["A", "d", "e", "l"]
  const positions = isAdel ? adelOrder : leadOrder

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAdel(false)
    }, 1000)

    intervalRef.current = setInterval(() => {
      setIsAdel((prev) => !prev)
    }, 4000)

    return () => {
      clearTimeout(timeout)
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  useEffect(() => {
    const sequence = [3, 2, 0, 1]
    const timeouts: ReturnType<typeof setTimeout>[] = []

    sequence.forEach((idx, i) => {
      const t = setTimeout(() => setMovingIndex(idx), i * 200)
      timeouts.push(t)
    })

    const clearT = setTimeout(() => setMovingIndex(null), 1800)
    timeouts.push(clearT)

    return () => timeouts.forEach(clearTimeout)
  }, [isAdel])

  const positionLeft = ["0px", "80px", "160px", "240px"]

  return (
    <div className="bg-gradient-to-br from-primary to-[hsl(195,100%,31%)] p-4 text-center w-full relative overflow-hidden">
      <div className="relative z-10 w-[320px] h-[60px] mx-auto">
        {letters.map((char, index) => (
          <span
            key={char}
            className="absolute text-[2.5em] font-bold text-primary-foreground w-[60px] text-center transition-all duration-[1200ms] ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]"
            style={{
              left: positionLeft[positions[index]],
              top: "50%",
              transform:
                movingIndex === index
                  ? "translateY(calc(-50% - 20px)) scale(1.2)"
                  : "translateY(-50%)",
              color:
                movingIndex === index
                  ? "hsl(var(--secondary))"
                  : "hsl(var(--primary-foreground))",
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
            }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  )
}
