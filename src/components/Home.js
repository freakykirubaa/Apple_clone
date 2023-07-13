import React from 'react'
import { Container } from 'react-bootstrap'
import { Image } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import AOS from 'aos';
import { useEffect } from 'react';
export default function Home()
{
    useEffect(() => {
        AOS.init({
          duration: 2000, // Set the animation duration (in ms)
          easing: 'ease-in-out', // Set the animation easing
        });
      }, []);
    return(
    
    <>
    <Container fluid className="custom-container">
<br/>
<div className='heading text-white text-center' data-aos="fade-out" data-aos-delay="500" data-aos-duration="2000">
    <h1 className='display-4'> iphone 14 Pro</h1>
          <h4 className='text-white'>Pro Beyond</h4>
           <a href="#">Buy</a>

</div>

<div className='image text-center text-white' data-aos="fade-out" data-aos-delay="500" data-aos-duration="2000">
<Image src="https://www.apple.com/in/home/images/heroes/iphone-14-pro/hero_iphone14pro_spring__9xo85pm6sbmm_large.jpg" fluid/><br/><br/><br/>

<p>Trade in your current phone for credit towards iPhone 14.
Get ₹20000.00–₹57800.00 in credit when you trade in iPhone 11 or higher.7</p>
<Button variant="outline-primary" size="lg">
      View More
    </Button><br/><br/>
</div>
    </Container>
    </>
        
    )
}