import React from 'react'

const contact = () => {
  return (
    <>
    <section id='contact-section' className=' contact-page-container'>
      <div className='conatct-page'>
      <h2>Contact Us</h2>
      <form className='contact-form'>
        <label>First Name: <input type='text' required placeholder='Jane'/></label>
        <label>Last Name: <input type='text' required placeholder='Doe'/></label>
        <label>Email ID: <input type='email' required placeholder='janedoe@example.com'/></label>
        <label>Contact Number: <input type='tel' placeholder='+91 1234567890' /></label>
        <label>Message: <input type='text' placeholder='Let us know how can we help you..!' /></label>
        <button type='submit'>Submit</button>
      </form>
      </div>
    </section>
    </>
  )
}

export default contact;
