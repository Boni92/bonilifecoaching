"use client"

import { useState, useEffect, useRef } from "react"
import { Search, Code, Users, Lightbulb, BookOpen, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const menuItems = [
    {
      icon: <Code className="w-5 h-5 text-amber-700" strokeWidth={1.5} />,
      label: "Programming",//Programación
      action: "Build",//Crear
      shortcut: "⌘P",
      shortcutLabel: "Jobs",
      href: "https://boni92.github.io/",
    },
    {
      icon: <Users className="w-5 h-5 text-amber-700" strokeWidth={1.5} />,
      label: "Coaching",//Coaching
      action: "Evolve",//Evolucionar
      shortcut: "⌘C",
      shortcutLabel: "Sessions",
      href: "https://bonilifecoaching.com.au",
    },
    {
      icon: <Lightbulb className="w-5 h-5 text-amber-700" strokeWidth={1.5} />,
      label: "Ideas",//Ideas
      action: "Discover",//Descubrir
      shortcut: "⌘I",
      shortcutLabel: "Blog",
      href: "https://boniblog.vercel.app",
    },
    {
      icon: <BookOpen className="w-5 h-5 text-amber-700" strokeWidth={1.5} />,
      label: "Books",//Books
      action: "Read",//Leer
      shortcut: "⌘B",
      shortcutLabel: "Library",
      href: "https://tienda.vercel.app",
    },
  ]

  return (
    <>
      {/* Background image container */}
      <div className="fixed inset-0" >
      {/* <div className="fixed inset-0" style={{ backgroundColor: "rgba(45, 45, 45, 1)" }}> */}
        <div className="absolute bottom-[-190px] right-10">
          <Image
            src="/objetolistobg2.png"
            alt="Background decoration"
            width={700}
            height={700}
            className="object-contain w-[700px] h-auto"
            priority
            style={{
              transform: "perspective(1000px) rotateX(10deg) rotateY(15deg)",
              transformOrigin: "center",
              maxWidth: "none"
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative w-full max-w-md mx-auto z-10">
        <div
          ref={dropdownRef}
          className="w-full max-w-md rounded-lg overflow-hidden relative bg-transparent"
        >
          <div className="pb-2">
            <div className="text-white text-xs mb-2 px-1">What do you need?</div>
            <div
              className="flex items-center bg-gray-[#272727] rounded-md px-3 py-2 pointer-events-none" style={{ backgroundColor: "rgba(39,39,39,255)" }}
            >
              <div
                className="flex-1 text-white select-none text-sm" 
              >
                Programming, Coaching, ...?
              </div>
              <Search className="w-5 h-5 text-gray-100" />
            </div>
          </div>

          {/* Dropdown options that appear when clicked */}
          <div 
            id="div-dropdown-menu"
            className={`overflow-y-auto bg-white/25 backdrop-blur-lg transition-all duration-700 ease-in-out ${
              isOpen 
                ? 'opacity-100 max-h-[500px]' 
                : 'opacity-0 max-h-0'
            }`} 
            style={{
              backgroundColor: "rgba(39, 39, 39, 0.25)",
              backdropFilter: "blur(90px)"
            }}
          >
            {menuItems.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-4 py-3 hover:bg-gray-700 cursor-pointer  transition-colors duration-200"
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  <span className="text-gray-100 font-medium  text-sm">{item.label}</span>
                  <span className="text-gray-400  text-xs">{item.action}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-400 text-xs">
                  <span>{item.shortcut}</span>
                  <span>{item.shortcutLabel}</span>
                </div>
              </Link>
            ))}

            <div className="px-4 py-3 border-t border-gray-500">
              <div className="text-gray-300 text-sm mb-2">Follow for more:</div>
              <div className="flex flex-col gap-2">
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 text-xs hover:text-gray-300 transition-colors duration-200"
                >
                  <Instagram className="w-4 h-4" strokeWidth={1}/>
                  <span>Instagram</span>
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 text-xs hover:text-gray-300 transition-colors duration-200"
                >
                  <Linkedin className="w-4 h-4" strokeWidth={1}/>
                  <span>LinkedIn</span>
                </Link>
              </div>
            </div>

            <div className="flex justify-between items-center px-4 py-2 bg-[#272727] text-gray-400 text-xs h-9 border-t border-gray-500" style={{backgroundColor: "rgba(39, 39, 39, 0.25)",
              opacity: 1,
              backdropFilter: "blur(90px)"}}>
              <div>Press ⌘O to open commands</div>
              <div>ESC to cancel</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
