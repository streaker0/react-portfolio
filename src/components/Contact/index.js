import "./index.scss"
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { useEffect, useState } from 'react'
import resume from '../../assets/documents/Ayodeji_Resume.pdf'
import {pdfjs, Document, Page } from 'react-pdf'
import connection from '../../connections.json'


pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

function Contact(){
  
  const form = useRef()

const sendEmail = (e) => {
  e.preventDefault()

  emailjs
    .sendForm('service_ygcnn64', 'template_a55dwwp', form.current, 'eUJm02wB_pqfKYrwY')
    .then(
      () => {
        alert('Message successfully sent!')
        window.location.reload(false)
      },
      () => {
        alert('Failed to send the message, please try again')
      }
    )
}
  return(
    <>
    <div className='container contact-page'>
      <div className='text-zone'>
        <h1>Contact Me</h1>
        <p>
            I am interested in new development opportunities - especially with ambitious
            and large teams. However, if you have any inquiries or
            questions, don't hesitate to contact me using the form below.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
      </div>
      <div className='resume-zone'> 
        <Document file = {resume}>
          <Page pageNumber={1}/>
          </Document>


      </div>

    </div>
    </>
  )
}

export default Contact