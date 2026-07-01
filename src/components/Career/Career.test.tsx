import { act } from 'react'
import { createRoot, type Root } from 'react-dom/client'
import { afterEach, describe, expect, it } from 'vitest'
import Career from './Career'

describe('Career accordion', () => {
  let container: HTMLDivElement
  let root: Root

  afterEach(() => {
    act(() => {
      root?.unmount()
    })
    container?.remove()
  })

  it('only opens the selected accordion panel', () => {
    container = document.createElement('div')
    document.body.appendChild(container)
    root = createRoot(container)

    act(() => {
      root.render(<Career />)
    })

    const firstButton = container.querySelector(
      'button[aria-controls="career__accordion-15gifts"]',
    ) as HTMLButtonElement
    const secondButton = container.querySelector(
      'button[aria-controls="career__accordion-nhs"]',
    ) as HTMLButtonElement
    const firstPanel = container.querySelector(
      '#career__accordion-15gifts',
    ) as HTMLDivElement
    const secondPanel = container.querySelector(
      '#career__accordion-nhs',
    ) as HTMLDivElement

    expect(
      firstPanel.classList.contains('career__accordion-panel--active'),
    ).toBe(false)
    expect(
      secondPanel.classList.contains('career__accordion-panel--active'),
    ).toBe(false)

    act(() => {
      firstButton.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })

    expect(
      firstPanel.classList.contains('career__accordion-panel--active'),
    ).toBe(true)
    expect(
      secondPanel.classList.contains('career__accordion-panel--active'),
    ).toBe(false)

    act(() => {
      secondButton.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })

    expect(
      firstPanel.classList.contains('career__accordion-panel--active'),
    ).toBe(false)
    expect(
      secondPanel.classList.contains('career__accordion-panel--active'),
    ).toBe(true)
  })
})
