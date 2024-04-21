import React from 'react'
import data from "../../data/index.json";
import index from './homescreen'; 


function Testimonial() {
  return (
    <section className='testiomonial-section' id='testimonial'>
        <div className='portfolio-container-box'>
            <div className='portfolio-container'>
                <p className='sub-title'>Client Feedback</p>
                <h2 className='Section-heading'>Customer Feedback</h2>
            </div>
        </div>
        <div className='testimonial-section-container'>
            {
               data.testimonial.map((item,index)=> (
                <div key={index}
                className='testimonial-section-card'>
                    
                    <div className='testmonial-section-card-content'>
                        <h3 className='testimonial-section-title'>{item.title}
    
                        </h3>
                        <p className='text-md'>{item.description}</p>
                        
                    </div>
                    <div className='testiomonial-image'>
                    <img src={item.src} height="100px" width='130px' alt='placeholder' />
                    
                    
                    <div className='testimonial-auther-name'>
                        <p className='text-testimonial-auth-rname'>{item.auther_name}</p>
                        <p className='text-testimonial-auth-rname'>{item.auther_designation}</p>

                    </div>
                    </div>
                
                </div>
            ))   
            }
        </div>

    </section>
   
  )
}

export default Testimonial