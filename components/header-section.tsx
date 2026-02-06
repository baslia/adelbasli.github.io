"use client"

import { useState } from "react"
import Image from "next/image"

export function HeaderSection() {
  const [contactsRevealed, setContactsRevealed] = useState(false)

  return (
    <header className="bg-primary text-primary-foreground py-6 text-center">
      <h1 className="text-3xl font-bold text-balance">Adel Basli</h1>
      <p className="text-lg mt-1">Team Lead Data Science & AI</p>

      <p className="mt-2 flex items-center justify-center gap-2 flex-wrap">
        {contactsRevealed ? (
          <>
            <span className="flex items-center gap-1">
              <Image
                src="/images/phone-call.png"
                alt="Phone"
                width={16}
                height={16}
              />
              +1 312-315-0909
            </span>
            <span>|</span>
            <a
              href="mailto:adel.basli@centraliens.net"
              className="flex items-center gap-1 text-primary-foreground hover:underline"
            >
              <Image
                src="/images/gmail.png"
                alt="Email"
                width={16}
                height={16}
              />
              Email Me
            </a>
          </>
        ) : (
          <button
            onClick={() => setContactsRevealed(true)}
            className="px-4 py-2 bg-gradient-to-br from-accent to-blue-500 text-primary-foreground rounded-lg font-semibold shadow hover:shadow-md transition-all hover:-translate-y-0.5"
          >
            Reveal Contacts
          </button>
        )}
      </p>

      <p className="mt-3 flex items-center justify-center gap-3 flex-wrap">
        <a
          href="https://github.com/baslia"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-primary-foreground hover:underline"
        >
          <Image
            src="/images/github-sign.png"
            alt="GitHub"
            width={16}
            height={16}
          />
          GitHub
        </a>
        <span>|</span>
        <a
          href="https://www.linkedin.com/in/adelbasli"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-primary-foreground hover:underline"
        >
          <Image
            src="/images/linkedin.png"
            alt="LinkedIn"
            width={16}
            height={16}
          />
          LinkedIn
        </a>
        <span>|</span>
        <a
          href="https://medium.com/@adelbasli"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-primary-foreground hover:underline"
        >
          <Image
            src="/images/medium.png"
            alt="Medium"
            width={16}
            height={16}
          />
          My Articles
        </a>
      </p>
    </header>
  )
}
