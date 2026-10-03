import { useState, useEffect } from "react"

export const useSidebar = (breakpoint: number = 768) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth >= breakpoint
    }
    return true
  })

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < breakpoint) {
        setIsSidebarOpen(false)
      } else {
        setIsSidebarOpen(true)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [breakpoint])

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev)

  return { isSidebarOpen, setIsSidebarOpen, toggleSidebar }
}