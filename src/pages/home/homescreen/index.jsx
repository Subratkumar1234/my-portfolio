import React from 'react'
import Herosection from '../Herosection'
import MySkill from '../MySkill'
import Aboutme from '../Aboutme'
import Myportfolio from '../Myportfolio'
import Testimonial from '../Testimonial'
import Contactme from '../Contactme'
import Footer from '../footer'



function index() {
  return (
    <div>
        <Herosection />
        <MySkill />
        <Aboutme />
        <Myportfolio />
        <Testimonial />
        <Contactme />
        <Footer />
        

    </div>
  )
}

export default index