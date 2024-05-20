import React,{useEffect} from 'react'
import AOS from 'aos'
import'aos/dist/aos.css'
import Image1 from '../../assets/img/ADVERTISEMENT.jpg'
import Image2 from '../../assets/img/BUSINESSMANAGEMENT.jpg'
import Image3 from '../../assets/img/CONTENTWRITING.jpg'
import Image4 from '../../assets/img/DIGITALMARKETING.jpg'
import Image5 from '../../assets/img/GRAPHICSDESIGN.jpg'
import Image6 from '../../assets/img/HIRINGRECRUITMENT.png'
import Image7 from '../../assets/img/WEBDESIGN.jpg'
import Image8 from '../../assets/img/OURSERVICES.jpg'
function Services() {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div className='Services'>
        <div className='container-fluid'>
        <div className="row mt-5 ">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"  data-aos="fade-right">
                    <div className="content-box">
                        <h4 className='content-title1'>WHY CHOOSE</h4>
                        <h4 className='content-title'>OUR SERVICES?</h4>
                        <p className='content-para'>
                        We offer comprehensive solutions to meet all your business needs. From in-depth market research to inform your strategies, to seamless event planning and management, we cover every aspect of your business's growth journey. Our expert team also specializes in public relations to enhance your brand's reputation and visibility. Additionally, we provide top-notch customer support solutions to ensure customer satisfaction and loyalty, helping your business thrive in today's competitive landscape.








                        </p>
                    </div>
                </div>   
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"  data-aos="fade-right">
                    <img src={Image8} alt='OURSERVICES' className='img-rounded'/>
                </div>       
                    
            </div>
            <div className="row mt-5">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12" data-aos="fade-right">
                    <img src={Image1} alt='ADVERTISEMENT' className='img-rounded'/>
                </div>       
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12" data-aos="fade-left">
                    <div className="content-box">
                        <h4 className='content-title'>ADVERTISEMENT</h4>
                        <p className='content-para'>
                        We specialize in crafting impactful ad campaigns to elevate your visibility. Our comprehensive suite of services encompasses digital advertising, including PPC and social media ads, as well as print advertising. With strategic campaign planning and meticulous performance tracking, we ensure your advertisements resonate with your audience and drive tangible results for your business.



                        </p>
                    </div>
                </div>       
            </div>
            <div className="row mt-5 ">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"  data-aos="fade-right">
                    <div className="content-box">
                        <h4 className='content-title'>BUSINESSMANAGEMENT</h4>
                        <p className='content-para'>
                        We offer strategies and solutions for optimizing business operations. Our services encompass comprehensive business strategy development, operational consulting to streamline processes, meticulous process optimization, and in-depth performance analysis. Partner with us to enhance your business's efficiency and effectiveness, driving sustainable growth and success.






                        </p>
                    </div>
                </div>   
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"  data-aos="fade-right">
                    <img src={Image2} alt='BUSINESS MANAGEMENT' className='img-rounded'/>
                </div>       
                    
            </div>
            <div className="row mt-5">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12" data-aos="fade-right">
                    <img src={Image3} alt='CONTENT WRITING' className='img-rounded'/>
                </div>       
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12" data-aos="fade-left">
                    <div className="content-box">
                        <h4 className='content-title'>CONTENT WRITING</h4>
                        <p className='content-para'>
                        We craft compelling content that captivates and converts. Our services include creating engaging blog posts and articles, writing persuasive website copy, developing detailed product descriptions, and optimizing content for search engines (SEO writing) to enhance your online visibility and drive conversions.






                        </p>
                    </div>
                </div>       
            </div>
            <div className="row mt-5">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"  data-aos="fade-right">
                    <div className="content-box">
                        <h4 className='content-title'>DIGITAL MARKETING</h4>
                        <p className='content-para'>
                        We design engaging and responsive websites tailored to your specific needs. Our services include custom website design, robust e-commerce solutions, and meticulous user experience (UX) and user interface (UI) design. Additionally, we provide ongoing website maintenance and updates to ensure your online presence remains seamless and up-to-date.









                        </p>
                    </div>
                </div>   
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"  data-aos="fade-right">
                    <img src={Image4} alt='DIGITAL MARKETING' className='img-rounded'/>
                </div>       
                    
            </div>
            <div className="row mt-5">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12" data-aos="fade-right">
                    <img src={Image5} alt='GRAPHICS DESIGN' className='img-rounded'/>
                </div>       
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12" data-aos="fade-left">
                    <div className="content-box">
                        <h4 className='content-title'>GRAPHICS DESIGN</h4>
                        <p className='content-para'>
                        We create custom logos and a wide range of marketing materials such as flyers, brochures, and business cards. We also design digital graphics for social media posts and website banners, ensuring a cohesive and engaging brand presence. Our comprehensive branding packages tie all your visual elements together seamlessly.






                        </p>
                    </div>
                </div>       
            </div>
            <div className="row mt-5 ">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"  data-aos="fade-right">
                    <div className="content-box">
                        <h4 className='content-title'>HIRING AND RECRUITMENT</h4>
                        <p className='content-para'>
                        We specialize in finding the right talent to grow your team. Our services encompass every aspect of the recruitment process, from strategic job posting and promotion to thorough candidate screening and interviews. We provide comprehensive on boarding support to ensure a smooth transition for new hires and offer tailored talent management strategies to nurture and retain top talent within your organization.









                        </p>
                    </div>
                </div>   
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"  data-aos="fade-right">
                    <img src={Image6} alt='HIRING AND RECRUITMENT' className='img-rounded'/>
                </div>       
                    
            </div>
            <div className="row mt-5">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12" data-aos="fade-right">
                    <img src={Image7} alt='WEB DESIGN' className='img-rounded'/>
                </div>       
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12" data-aos="fade-left">
                    <div className="content-box">
                        <h4 className='content-title'>WEB DESIGN</h4>
                        <p className='content-para'>
                    
                        We create custom logos and a wide range of marketing materials such as flyers, brochures, and business cards. We also design digital graphics for social media posts and website banners, ensuring a cohesive and engaging brand presence. Our comprehensive branding packages tie all your visual elements together seamlessly.



                        </p>
                    </div>
                </div>       
            </div>
        </div>
    </div>
  )
}

export default Services