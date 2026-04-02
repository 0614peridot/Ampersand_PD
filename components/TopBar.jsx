'use client'

import { useEffect, useRef } from 'react'

export default function TopBar() {
  const topBarRef = useRef(null)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 72) {
        topBarRef.current?.classList.add('hidden')
      } else {
        topBarRef.current?.classList.remove('hidden')
      }
      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="top-bar" ref={topBarRef}>
      <div className="top-bar-menu">
        <a className="logo" href="#">Ampersand</a>
        <div className="auth-buttons">
          <button className="btn btn-light auth-btn">로그인</button>
          <button className="btn btn-dark auth-btn">회원가입</button>
        </div>
      </div>
    </header>
  )
}
