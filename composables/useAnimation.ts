export const useAnimation = () => {
  /**
   * @param { IntersectionObserverEntry[] } entries
   * @param { string } animation - The type of animation to be applied, e.g. 'fade-in'
   */
  const observerCallback = (
    entries: IntersectionObserverEntry[],
    animation: string
  ) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(`animate-${animation}`)
      } else {
        entry.target.classList.remove(`animate-${animation}`)
      }
    })
  }

  /**
   *
   * @param { number } times - The number of times the element should move slower than the window
   * @param { ref } element - The element to be animated
   */
  const slowScroll = (times: number, element: Ref) => {
    onMounted(() => {
      window.addEventListener('scroll', () => {
        const windowScrolled =
          window.pageYOffset || document.documentElement.scrollTop
        element.value.style.transform = `translateY(${
          windowScrolled / times
        }px)`
      })
    })
  }
  return {
    observerCallback,
    slowScroll,
  }
}
