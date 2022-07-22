import React from 'react'

export default function Contact() {
  return (
    <>
      <div id='about' className='about flex flex-col items-center gap-6'>
        <h1 className='text-4xl font-bold'>Contact me</h1>
        <p className='w-3/5 text-center font-nunito font-thin'>
          If you want contact with me, use this form
        </p>
        <div className="form-container">
          <div className="form-item flex flex-col gap-3">
            <label htmlFor="fullname" className='flex flex-col'>
              <span>Name:</span>
              <input type="text" name="fullname" id="fullname" className='px-2 py-2 rounded-lg text-black' placeholder='John Titor'/>
            </label>
            <label htmlFor="fullname" className='flex flex-col'>
              <span>Email:</span>
              <input type="email" name="fullname" id="fullname" className='px-2 py-2 rounded-lg text-black' placeholder='john@example.com'/>
            </label>
            <label htmlFor="fullname" className='flex flex-col'>
              <span>Message:</span>
              <textarea type="text" name="fullname" id="fullname" className='px-2 py-2 rounded-lg w-80 h-64 text-black' placeholder='Enter a message...'/>
            </label>
            <input type="submit" value="Contact!" className='hover:cursor-pointer hover:bg-slate-200 bg-white text-blue-600 my-4 px-6 py-1 rounded-lg text-xl font-bold'/>
          </div>
        </div>
      </div>
    </>
  )
}
