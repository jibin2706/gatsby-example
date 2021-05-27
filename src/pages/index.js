import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'

// markup
const IndexPage = () => {
  return (
    <main>
      <h1>test</h1>
      <StaticImage src="https://loremflickr.com/640/360" alt="test" />
    </main>
  )
}

export default IndexPage
