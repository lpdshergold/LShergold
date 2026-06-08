import scrollIntoView from './scrollIntoView'
import { expect, describe, beforeEach, test, vi } from 'vitest'

describe('scrollIntoView', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="about">About Section</div>
    `
  })

  test('should scroll the element into view when it exists', () => {
    const scrollIntoViewMock = vi.fn()
    Element.prototype.scrollIntoView = scrollIntoViewMock

    scrollIntoView('about')
    expect(scrollIntoViewMock).toHaveBeenCalled()
  })

  test('should not throw an error when the element does not exist', () => {
    expect(() => scrollIntoView('nonexistent')).not.toThrow()
  })
})
