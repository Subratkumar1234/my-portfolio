import React from 'react'

function Contactme() {
  return (
    <section className='contact-section' id='contact'>
        <div className='sub-title'>
            <p className='sub-title'>Get in Touch --> Made with 💖 by Subrat</p>
            <h2>Contact me</h2>
            <p className='text-tg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime tempora nostrum unde eaque distinctio exercitationem, minus repellendus, debitis, in esse ex ratione id illum delectu.</p>

        </div>
        <form className='contact-form-container'>
            <div className='container'>
                <label htmlFor='first-name' className='contact-label'>
                    <span className='text-md'>First Name</span>
                    <input type='text' className='contact-input text-md' name='first-name' id='first-name' required></input>
                </label>
                <label htmlFor='last-name' className='contact-label'>
                    <span className='text-md'>Last Name</span>
                    <input type='text' className='contact-input text-md' name='Last-name' id='Last-name' required></input>
                </label>
                <label htmlFor='email' className='contact-label'>
                    <span className='text-md'>Email</span>
                    <input type='email' className='contact-input text-md' name='email' id='email' required></input>
                </label>
                <label htmlFor='number' className='contact-label'>
                    <span className='text-md'>Mob Number</span>
                    <input type='number' className='contact-input text-md' name='number' id='number' required></input>
                </label>
                </div>
                
                <label htmlFor='choose-topic' className='contact-label'>
                    <span className='text-md'>Choose Topic</span>
                    <select id='choose-topic' className='contact-input text-md'>
                    <option>select one..</option>
                    <option>item-1</option>
                    <option>item-2</option>
                    <option>item-3</option>

                    </select>
                </label>

                <label htmlFor='message' className='contact-label'>
                    <span className='text-md'>Message</span>
                   <textarea className='contact-input text-md'id='message'rows={8} placeholder='Type your message' />
                </label>
                
                <label htmlFor='checkbox' className='checkbox-level'>
                    <input type='checkbox' name='checkbox' id='checkbox' required></input>
                    <span className='text-md'>I accept the terms</span>
                </label>
                <div>
                <button className='btn btn-primary'>Submit</button>

                </div>
        </form>

    </section>
  )
}

export default Contactme