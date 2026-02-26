import React from 'react'
import '../../styles/users/UserLp.css'
import Navbar from './Navbar'
import Hero from './Hero'
import SportPreview from './SportPreview'
import HighlightsSection from './HighlightsSection'
import CTA from './CTA'
import Footer from './Footer'

function UserLp() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <SportPreview/>
      <HighlightsSection/>
      <CTA/>
      <Footer/>
    </div>
  )
}

export default UserLp