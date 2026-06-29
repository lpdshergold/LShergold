import { useEffect, useState } from 'react'
import isElementInViewport from '../../../utils/elementInView/isElementInView'
import scrollIntoView from '../../../utils/scrollIntoView/scrollIntoView'
import './ScrollToTop.scss'

const ScrollToTop = () => {
  const [isNavInView, setIsNavInView] = useState<boolean | undefined>(true)

  useEffect(() => {
    const interval = setInterval(() => {
      const checkNav = isElementInViewport('nav')
      setIsNavInView(checkNav)
    })

    return () => clearInterval(interval)
  }, [])

  const handleScroll = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    scrollIntoView('nav')
  }

  return (
    <button
      className={`scroll-container`}
      onClick={handleScroll}
      hidden={isNavInView}
    >
      <div className='scroll-border'>
        <i className='fa-solid fa-arrow-up scroll-arrow'></i>
      </div>
      <span className='scroll-copy'>Scroll to top</span>
    </button>
  )
}

export default ScrollToTop
