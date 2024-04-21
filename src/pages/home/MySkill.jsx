import React from 'react'
import data from "../../data/index.json";
import index from './homescreen';

function MySkill() {
  return (
   <section className='skill-section' id='my skills'>
<div className='portfolio-container'>
    <p className='section-title'>My skills</p>
    <h2 className='skill-section-heading'>My Experties</h2>
</div>
<div className='skill-section-container'>
    {
        data.skills.map((item,index)=> (
            <div key={index}
            className='skill-section-card'>
                <div className='skills-section-img'>
                    <img src={item.src} height="30px" width='30px' alt='product chain' />
                </div>
                <div className='skills-section-card-content'>
                    <h3 className='skills-section-title'>{item.title}

                    </h3>
                    <p className='skills-section-description'>{item.description}</p>

                </div>
            
            </div>
        ))
    }

</div>
   </section>
  )
}

export default MySkill