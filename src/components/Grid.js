import React from 'react';
import { Row, Col,Image } from 'react-bootstrap';
import AOS from 'aos';
import { useEffect } from 'react';
export default function Grid()
{
    useEffect(() => {
        AOS.init({
          duration: 2000, // Set the animation duration (in ms)
          easing: 'ease-in-out', // Set the animation easing
        });
      }, []);
    return(
        
        <>
        <br/>
     <Row data-aos="fade-out" data-aos-delay="500" data-aos-duration="2000">
      <Col md={6} className='col1'>

    <br/>
    <div className='text-center' data-aos="fade-out" data-aos-delay="500" data-aos-duration="2000">
        <h3>Apple BKC</h3>
        <h5>India's first apple Store</h5>
        <h5>is arriving soon at Mumbai</h5>
        <Image src="https://www.apple.com/in/home/promos/mumbai-store-announce/images/promo_endframe_large.jpg" fluid/>
        </div>
      </Col>
      <Col md={6} className='col2'>
      <div className='text-center text-white' data-aos="fade-out" data-aos-delay="500" data-aos-duration="2000">
        <Image src="https://www.apple.com/v/home/az/images/promos/wwdc23-announce/promo_wwdc23__b68ptht3mro2_small_2x.jpg" fluid/>
        <h2>WWDC23</h2>
        <h5>Apple WorldWide Develope rConference.</h5>
       
        </div>
      </Col>
    </Row>


<br/>





    <Row data-aos="fade-out" data-aos-delay="500" data-aos-duration="2000">
      <Col md={6} className='col3'>

    <br/>
    <div className='text-center' data-aos="fade-out" data-aos-delay="500" data-aos-duration="2000">
        <h3>WATCH</h3>
        <h6 style={{color:'gold'}}>ULTRA</h6>
        <h5>Adventure Awaits</h5>
        <Image src="https://www.apple.com/in/home/promos/apple-watch-ultra/images/promo_apple_watch_ultra__gnsqulvdc4a6_small_2x.jpg" fluid/>
        </div>
      </Col>
      <Col md={6} className='col4'><br/>
      <div className='text-center text-white' data-aos="fade-out" data-aos-delay="500" data-aos-duration="2000">
       <h3>MacBook Pro</h3>
       <h5>SuperCharged by M2 Pro and M2 Max.</h5>
       <Image src="https://www.apple.com/v/home/az/images/promos/macbook-pro-14-and-16/promo_mbp__ek7p477bkp6q_small_2x.jpg" fluid/>
       
        </div>
      </Col>
    </Row>



<br/>

    <Row data-aos="fade-out" data-aos-delay="500" data-aos-duration="2000">
      <Col md={6} className='col5'>

    <br/>
    <div className='text-center'>
        <h2>iPad</h2>
       
        <h5>Loveable.Drawable.Magical.</h5>
        <h5>Go ahead.</h5>
        <Image src="https://www.apple.com/v/home/az/images/promos/ipad/promo_ipad__fioegapg12qi_small_2x.jpg" fluid/>
        </div>
      </Col>
      <Col md={6} className='col6'><br/>
      <div className='text-center text-white'>
       <h3>AirPods Pro</h3>
       <h5>Rebuild from the sound up.</h5>
       <Image src="https://www.apple.com/v/home/az/images/promos/airpods-pro/promo_airpods_pro_avail__gaxggskofx6y_small_2x.jpg" fluid/>
       
        </div>
      </Col>
    </Row>



        </>
    )
}