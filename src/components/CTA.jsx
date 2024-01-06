import React from 'react'
import { Link } from 'react-router-dom'


const CTA = () => {
  return (
    <div>
      <section className='cta'>
        <p className='cta-text'> Have a project in mind? <br className='sm:block hidden'></br>
        Let's build something together!</p>
        <Link to="/contact" className='btn'>Contact</Link>
      </section>
    </div>
  )
}

export default CTA
