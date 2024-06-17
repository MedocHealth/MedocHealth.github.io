import React, { useEffect } from 'react';
import styles from '../css/faq.css';

const FAQ = () => {

  useEffect(() => {
    const faqs = document.querySelectorAll(".faq");

    faqs.forEach((faq) => {
      faq.addEventListener("click", () => {
        faq.classList.toggle("active");
      });
    });


    return () => {
      faqs.forEach((faq) => {
        faq.removeEventListener("click", () => {
          faq.classList.toggle("active");
        });
      });
    };
  }, []);

  return (
    <section>
      <h2 className='title'>FAQs</h2>

      <div className='faq'>
        <div className='question'>
          <h3>1. What is Medoc+?</h3>
          <svg width="15" height="10" viewBox="0 0 42 25">
            <path d='M3 3L21 21L39 3' stroke='white' strokeWidth="3" strokeLinecap='round'/>
          </svg>
        </div>
        <div className="answer">
          <p>Medoc+ is a comprehensive healthcare management solution for nurses, paramedics, and pharmaceutical professionals. It simplifies nursing tasks, medication orders, inventory management, and emergency response protocols.
          </p>
        </div>
      </div>
      
      <div className='faq'>
        <div className='question'>
          <h3>2. How can Medoc+ help nurses?
          </h3>
          <svg width="15" height="10" viewBox="0 0 42 25">
            <path d='M3 3L21 21L39 3' stroke='white' strokeWidth="3" strokeLinecap='round'/>
          </svg>
        </div>
        <div className="answer">
          <p>The Nursing Module helps nurses manage tasks and patient data efficiently with customizable settings for a smooth workflow.
          </p>
        </div>
      </div>
      <div className='faq'>
        <div className='question'>
          <h3>3. What makes Medoc+ unique?
          </h3>
          <svg width="15" height="10" viewBox="0 0 42 25">
            <path d='M3 3L21 21L39 3' stroke='white' strokeWidth="3" strokeLinecap='round'/>
          </svg>
        </div>
        <div className="answer">
          <p>Medoc+ combines efficiency, customization, and rapid response, streamlining healthcare management and prioritizing health.
          </p>
        </div>
      </div>
      <div className='faq'>
        <div className='question'>
          <h3>4. What is the ME App?
          </h3>
          <svg width="15" height="10" viewBox="0 0 42 25">
            <path d='M3 3L21 21L39 3' stroke='white' strokeWidth="3" strokeLinecap='round'/>
          </svg>
        </div>
        <div className="answer">
          <p>The ME App is your all-in-one healthcare companion, designed to simplify your medical journey and help you live your healthiest life.
          </p>
        </div>
      </div>
      <div className='faq'>
        <div className='question'>
          <h3>5. What are the key features of the ME App?
          </h3>
          <svg width="15" height="10" viewBox="0 0 42 25">
            <path d='M3 3L21 21L39 3' stroke='white' strokeWidth="3" strokeLinecap='round'/>
          </svg>
        </div>
        <div className="answer">
          <p>Key features include appointment scheduling, prescription management, secure chat with healthcare professionals, access to lab reports, and financial services for managing healthcare expenses.
          </p>
        </div>
      </div>
      <div className='faq'>
        <div className='question'>
          <h3>6. How does the ME App integrate with Ayushman Bharat?
          </h3>
          <svg width="15" height="10" viewBox="0 0 42 25">
            <path d='M3 3L21 21L39 3' stroke='white' strokeWidth="3" strokeLinecap='round'/>
          </svg>
        </div>
        <div className="answer">
          <p>The ME App integrates seamlessly with the Ayushman Bharat scheme, offering insurance coverage, access to wellness centers, and essential healthcare services.
          </p>
        </div>
      </div>
      <div className='faq'>
        <div className='question'>
          <h3>7. What is DocAssist?
          </h3>
          <svg width="15" height="10" viewBox="0 0 42 25">
            <path d='M3 3L21 21L39 3' stroke='white' strokeWidth="3" strokeLinecap='round'/>
          </svg>
        </div>
        <div className="answer">
          <p>DocAssist is a digital tool that simplifies traditional medical tasks with efficient digital systems, allowing doctors to focus more on patient care.
          </p>
        </div>
      </div>
      <div className='faq'>
        <div className='question'>
          <h3>8. What are the key features of DocAssist?
          </h3>
          <svg width="15" height="10" viewBox="0 0 42 25">
            <path d='M3 3L21 21L39 3' stroke='white' strokeWidth="3" strokeLinecap='round'/>
          </svg>
        </div>
        <div className="answer">
          <p>Key features include smart prescriptions, appointment management, scheduling, and hospital connectivity.
          </p>
        </div>
      </div>
      <div className='faq'>
        <div className='question'>
          <h3>9. How do smart prescriptions work in DocAssist?
          </h3>
          <svg width="15" height="10" viewBox="0 0 42 25">
            <path d='M3 3L21 21L39 3' stroke='white' strokeWidth="3" strokeLinecap='round'/>
          </svg>
        </div>
        <div className="answer">
          <p> Smart prescriptions use AI to manage prescriptions, allergies, and genetic markers, allowing customization of medication plans with MedPad templates.
          </p>
        </div>
      </div>
      <div className='faq'>
        <div className='question'>
          <h3>10. What is the MED Card?
          </h3>
          <svg width="15" height="10" viewBox="0 0 42 25">
            <path d='M3 3L21 21L39 3' stroke='white' strokeWidth="3" strokeLinecap='round'/>
          </svg>
        </div>
        <div className="answer">
          <p>The MED Card provides full healthcare access using advanced QR and NFC technology, even without a smartphone.</p>
        </div>
      </div>
      <div className='faq'>
        <div className='question'>
          <h3>11. How does the MED Card provide seamless healthcare access?
          </h3>
          <svg width="15" height="10" viewBox="0 0 42 25">
            <path d='M3 3L21 21L39 3' stroke='white' strokeWidth="3" strokeLinecap='round'/>
          </svg>
        </div>
        <div className="answer">
          <p>The MED Card enables hassle-free healthcare services with a simple scan or tap.
          </p>
        </div>
      </div>
      <div className='faq'>
        <div className='question'>
          <h3>12. What technology does the MED Card use?
          </h3>
          <svg width="15" height="10" viewBox="0 0 42 25">
            <path d='M3 3L21 21L39 3' stroke='white' strokeWidth="3" strokeLinecap='round'/>
          </svg>
        </div>
        <div className="answer">
          <p>It uses innovative QR and NFC technology to manage healthcare needs effortlessly.
          </p>
        </div>
      </div>

    </section>
  );
};

export default FAQ;
