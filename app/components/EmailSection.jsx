'use client'
import React, { useState } from 'react'
import { SocialIcon } from 'react-social-icons'

const EmailSection = () => {
  // State to hold the form data
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    // 1. Prevent the default form submission behavior
    e.preventDefault();

    // 2. Your email address where you want to receive emails
    const recipientEmail = "eklavyanath172004@gmail.com";

    // 3. Encode the subject and body to handle special characters
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(
      `From: ${email}\n\nMessage:\n${message}`
    );

    // 4. Construct the mailto link
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodedSubject}&body=${encodedBody}`;

    // 5. Open the user's default email client
    window.location.href = mailtoLink;
  };

  return (
    <section className='grid md:grid-cols-2 grid-cols-1 my-12 md:my-12 py-24 gap-4 text-white '>
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>

      <div className='z-10'>
        <h2 className='text-xl font-bold text-white my-2'>
          Let's Connect
        </h2>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
          {" "}
          lorem ipsum dolor set dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div className='social-links flex flex-row gap-2'>
          <SocialIcon target='_blank' url="https://github.com/eklavya172004" />
          <SocialIcon target='_blank' url="https://twitter.com/eklavya172004" />
          <SocialIcon target='_blank' url="https://instagram.com/eklavya172004" />
        </div>
      </div>

      <div>
        {/* Attach the handleSubmit function to the form's onSubmit event */}
        <form className='flex flex-col' onSubmit={handleSubmit}>
          <div className='mb-6'>
            <label htmlFor="email" className='text-white block mb-2 text-sm font-medium'>Your email</label>
            <input
              type="email"
              id='email'
              required
              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm block w-full p-3 rounded-lg'
              placeholder='your-email@google.com'
              // Connect input to state
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='mb-6'>
            <label htmlFor="subject" className='text-white block mb-2 text-sm font-medium'>Subject</label>
            <input
              type="text"
              id='subject'
              required
              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm block w-full p-3 rounded-lg'
              placeholder='Subject'
              // Connect input to state
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>

          <div className='mb-6'>
            <label htmlFor="message" className='text-white block text-sm mb-2 font-medium'>
              Your message
            </label>
            <textarea
              name="message"
              id="message"
              required
              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm block w-full p-3 rounded-lg'
              placeholder='Let me know your thoughts'
              // Connect input to state
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button type='submit' className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 px-5 rounded-lg w-full '>
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default EmailSection