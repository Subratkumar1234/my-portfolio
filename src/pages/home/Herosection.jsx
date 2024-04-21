import React from 'react'



function Herosection() {
  return (
    <section id='herosection' className='hero-section'>
        <div className='hero-section-content-box'>
            <div className='hero-section-content'>
            <p className='section-title'>Hello, its me I am {""}<br /> Subrat Kumar Sahoo</p>
                <h1 className='hero-section-title'>
                    <span className='hero-section-title-color'>Front End</span>{""}<br />Developer
                </h1>
                <p className='hero-section-description'>i am working as a web designer and Devloper in Canan Technologies Pvt Ltd, any ! <br />  query, please click the below bottom.
                      </p>
            </div>
            <button>
                <span><p className='ptn'>Please Contact</p></span>
                <select className="input-size">
                    <option>My Contact</option>
                    <option>My No:-7205310520</option>
                    <option>My Email:-subratkumar93plr@gmail.com</option>
                </select>
            </button>
        </div>
        <div className='hero-section-image'>
            {/* <img src='../../../image/portfolio logo.jpg' alt='' /> */}
            <img src='../../../image/MY_PHOTO-edit.png' alt='' />

        </div>

    </section>
  )
}

export default Herosection