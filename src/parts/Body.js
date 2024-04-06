/* eslint-disable */
import React from 'react';
//Images-Imports
import resumeBg from 'assets/images/Design.png' 
import coverLetterBg from 'assets/images/Mobile.png'
import statusCheck from 'assets/images/Web.png'
// Common Components
import Button from '../elements/Button'; 
// Toast Import
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Body = () => (
  <div className="container mx-auto py-8">
    {/* Resume Optimization Section */}
    <h2 className="text-2xl font-semibold mb-4 text-center">Resume Optimization</h2>
    <section className="mb-8 flex items-center">
      <div className="w-1/2 pl-8">
        <img src={resumeBg} alt="Resume" className="w-full" />
      </div>
      <div className="w-1/2 pr-20 flex justify-end">
        <Button href="/resume-optimization" type="link" className="flex w-71 h-18 items-center px-14 py-5 text-white text-xl bg-theme-purple rounded-lg shadow-2xl hover:bg-dark-theme-purple transition duration-200">
          Optimize Resume
          <svg className="ml-2 w-7 h-7 text-white animate-bounce-x" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Button>
      </div>
    </section>

    {/* Cover Letter Optimization Section */}
    <h2 className="text-2xl font-semibold mb-4 text-center">Cover Letter Optimization</h2>
    <section className="mb-8 flex items-center">
     <div className="w-1/2 pl-8">
        <Button href="/cover-letter-optimization" type="link" className="flex w-71 h-18 items-center px-14 py-5 text-white text-xl bg-theme-purple rounded-lg shadow-2xl hover:bg-dark-theme-purple transition duration-200">
          Optimize Cover Letter
          <svg className="ml-2 w-7 h-7 text-white animate-bounce-x" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Button>
      </div>
      <div className="w-1/2 pl-8">
        <img src={coverLetterBg} alt="Cover Letter" className="w-full" />
      </div>
     
    </section>

    {/* Document Status Section */}
    <h2 className="text-2xl font-semibold mb-4 text-center">Document Status</h2>
    <section className="flex items-center">
      <div className="w-1/2">
        <img src={statusCheck} alt="Document Status" className="w-full" />
      </div>
      <div className="w-1/2 pl-8 flex justify-end">
      <div className=''>
        <p className="mb-4">Check your documents status.</p>
          <input type="file" className="mr-4" />
          <Button onClick={()=>{toast.success('Status: Submitted')}} type="link" className="flex w-71 h-18 items-center px-14 py-5 text-white text-xl bg-theme-purple rounded-lg mt-4 shadow-2xl hover:bg-dark-theme-purple transition duration-200">
          Check Status
          <svg className="ml-2 w-7 h-7 text-white animate-bounce-x"fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Button>
        </div>
      </div>
    </section>
      <ToastContainer />
  </div>
);

export default Body;
