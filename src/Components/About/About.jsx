import React,{useEffect} from 'react'
import AOS from 'aos'
import'aos/dist/aos.css'
import Image1 from '../../assets/img/About.jpg'
function About() {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div className='About '>
         <div className="container">
             <div className="row"  data-aos="zoom-in">
                   <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12" data-aos="fade-right" > 
                      <div className='content-box'>
                        <h4 className='content-title'>About</h4>
                      <p className='content-para'>
                              BasicBrush Studios is a creative powerhouse dedicated to enhancing your brand’s presence and performance. With a team of experts in various fields, we offer a comprehensive suite of services designed to meet the dynamic needs of businesses today. 


                              </p>
                      </div>
                      <div className='content-box mb-2'>
                        <h4 className='content-title1'>OUR MISSION</h4>
                      <p className='content-para'>
                      Our mission is to provide innovative and effective solutions that drive growth, engagement, and success.





                              </p>
                      </div>        
                   </div>
                   <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12" data-aos="fade-left">
                    <img src={Image1} alt='BasicBrush Studio' className='img-rounded rounded'/>
                   </div>
             </div>
         </div>
    </div>
  )
}

export default About