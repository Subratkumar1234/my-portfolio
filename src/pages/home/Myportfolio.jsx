import React from 'react'
import data from "../../data/index.json"
import index from './homescreen'

function Myportfolio() {
  return (
   <section className='portfolio-section' id='myportfolio'>
     <div className='portfolio-container-box'>
        <div className='portfolio-container'>
            <p className='sub-title'>Recent project

            </p>
            <h2 className='section-heading'>My Portfolio</h2>

        </div>
        <div>
            <button>
                <p>Visit my github</p>

            </button>
        </div>


     </div>
     <div className='portfolio-section-container'>
        {
          
        data.portfolio.map((item,index)=> (
            <div key={index}
            className='portfolio-section-card'>
                <div className='portfolio-section-img'>
                    <img src={item.src} height="30px" width='30px' alt='placeholder' />
                </div>
                <div className='portfolio-section-card-content'>
                    <h3 className='portfolio-section-title'>{item.title}

                    </h3>
                    <p className='text-md'>{item.description}</p>

                </div>
                <p className='text-sm-portfolio-link'>View my Github</p>
            
            </div>
        ))   
        }

     </div>

   </section>
  )
}

export default Myportfolio