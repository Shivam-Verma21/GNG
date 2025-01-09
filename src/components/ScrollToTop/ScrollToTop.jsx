import React, { useState, useEffect } from 'react'
import "./ScrollToTop.css"

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div>
      <button
        id='scroll-top'
        className={isVisible ? 'show' : ''}
        onClick={scrollToTop}
      >
        <span>
          <i className="fa-solid fa-angles-up"></i>
        </span>
      </button>
    </div>
  )
}

export default ScrollToTop
