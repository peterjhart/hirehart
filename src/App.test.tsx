import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  describe('Snapshots', () => {
    it('matches snapshot', async () => {
      const { container } = render(<App />)
      expect(container).toMatchFileSnapshot('./__snapshots__/App.html')
    })
  })
})
