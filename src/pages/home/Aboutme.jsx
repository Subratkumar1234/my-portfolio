import React from 'react'
import data from "../../data/index.json"
import index  from './homescreen'

function Aboutme() {

//   import React from 'react'
// import data from "../../data/index.json"
// import index from './homescreen'

  return (

     <section className='about-section' id='aboutme'>
        <div className='aboutsection-image'>
        <img src='image/MY_PHOTO-edit.png'  alt='' />
        </div>
        <div className='hero-section-about-sectionbox'>
            <div className='hero-section-content'>
                <p className='section-title'>About</p>
                <h1 className='skill-section-heading'>About me</h1>
                <p className='hero-section-description'>I am passionate about learning and expanding my skillset, and I am always looking for new challenges to tackle. In my free time, I enjoy reading about the latest developments in technology and experimenting with new programming languages and tools. I am particularly interested in the field of web developments, and I am always looking for ways to apply these concepts to real-world problems. I believe that my curiosity and eagerness to learn make me a valuable asset to any team, and I am excited to bring my passion for learning and growth to this role."</p>



                   <p className='hero-section-description'>I am a results-oriented individual and am committed to achieving my goals and objectives.
I am a flexible and adaptable individual who is able to handle multiple tasks and priorities.
I am a positive and enthusiastic individual who is motivated by a desire to succeed and make a meaningful contribution..
                   </p>
            </div>
        </div>
     </section>

  )
}

export default Aboutme