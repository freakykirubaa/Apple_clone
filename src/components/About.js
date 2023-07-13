import React from 'react';
import { Container } from 'react-bootstrap';
import {Image} from 'react-bootstrap';
import AOS from 'aos';
import { useEffect } from 'react';
export default function About()
{
    useEffect(() => {
        AOS.init({
          duration: 2000, // Set the animation duration (in ms)
          easing: 'ease-in-out', // Set the animation easing
        });
      }, []);
    return(
    <>
    <Container>
        <div className="about text-center" data-aos="fade-out" data-aos-delay="500" data-aos-duration="2000">
            <h1 className='display-5'>iPhone 14</h1>
            <h4>Two great sizes.</h4>
            <h4>Now with a splash of yellow.</h4>
          <p>

Trade in your current phone for credit towards iPhone 14. Get ₹20000.00–₹57800.00 in credit when you trade in iPhone 11 or higher.7</p>

           <Image src="https://www.apple.com/in/home/heroes/iphone-14/images/hero_iphone14_yellow__eun20sn4imi6_small.jpg" fluid/>
        </div>


 
    </Container>

    
<div className='watch text-white text-center' data-aos="fade-out" data-aos-delay="500" data-aos-duration="2000"><br/>
    <h2 className='display-5 '>WATCH</h2>
    <h4 style={{color:'red'}}>SERIES 8</h4>
    <h4>A healthy leap ahead</h4>
   <p>Your essential companion is even more powerful. Temperature sensing for deeper insights into women’s health.1 Crash Detection to get help in an emergency.</p>
    <Image src="https://www.apple.com/in/home/images/heroes/apple-watch-series-8/hero_apple_watch_series_8_spring__b1y8wb7xjc9y_small.jpg" fluid/>
   
   </div>
 
    </>

    )
}