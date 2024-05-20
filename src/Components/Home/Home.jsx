import React from 'react'
// import Carousel from 'react-bootstrap/Carousel';

import Image7 from '../../assets/img/logo.png'


function Home() {
  return (
    <div className='Home'>
        

   <div className="container">
       <div className="row">
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" id='row'>
                  <img src={Image7} alt='logo' className='brandlogo'/>
              </div>
       </div>
   </div>
    </div>
  )
}

export default Home
