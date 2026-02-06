"use client"

import { useEffect, useState } from "react"

const navLinks = [
  { href: "#profile", label: "Profile" },
  { href: "#expertise", label: "Expertise" },
  { href: "#experience", label: "Experience" },
  { href: "#certifications", label: "Certifications" },
  { href: "#education", label: "Education" },
  { href: "#research", label: "Research" },
  { href: "#skills", label: "Skills" },
  { href: "#languages", label: "Languages" },
]

export function Navbar() {
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setVisible(currentScrollY < lastScrollY || currentScrollY < 100)
      setLastScrollY(currentScrollY)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-primary shadow-md transition-transform duration-200 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <ul className="flex justify-center flex-wrap gap-1 p-2">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="block px-3 py-2 text-sm font-semibold text-primary-foreground rounded bg-gradient-to-br from-accent to-blue-500 hover:opacity-90 transition-all hover:-translate-y-0.5"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
