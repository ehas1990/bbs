import React,{useEffect} from 'react'
import AOS from 'aos'
import'aos/dist/aos.css'
import { FaPhoneAlt } from "react-icons/fa";
function Contact() {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div className='Contact'>
        <div className="container">
            <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"  data-aos="fade-right">
                         <form>
                             <div className="row ">
                                    <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 g-3">
                                        <input type='text' name='text' className='form-control' placeholder='Name'/>
                                    </div>
                                    
                             </div>
                             <div className="row ">
                                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 g-3">
                                               <input type='email' name='text' className='form-control' placeholder='Email'/>
                                        </div>
                                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 g-3">
                                               <input type='text' name='text' className='form-control' placeholder='Contact Number'/>
                                        </div>
                             </div>
                             <div className="row">
                                    <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 g-3">
                                        <textarea className='form-control' rows={4} ></textarea>
                                    </div>
                                    
                             </div>
                             <div className="row">
                                    <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 g-3">
                                    <input type='submit' value='SUBMIT' className='btn btn-outline-warning'/>
                                    </div>
                                    
                             </div>
                         </form>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"  data-aos="fade-left">
                         <div className="contact-box">
                               <h4 className='content-title'>
                                CONTACT WITH US
                               </h4>
                               <ul>
                                <li><a><FaPhoneAlt/><span className='me-2'>+91 9629813469</span></a></li>
                                <li><a></a></li>
                               </ul>
                         </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Contact