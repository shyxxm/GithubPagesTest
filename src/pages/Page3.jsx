import { motion } from 'framer-motion';
import ContactDetails from '../components/contact/ContactDetails';
import ContactForm from '../components/contact/ContactForm';
import React, { useState } from 'react'; 
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


// const Contact = () => {
// 	return (
// 		<motion.div
// 			initial={{ opacity: 0 }}
// 			animate={{ opacity: 1 }}
// 			transition={{
// 				ease: 'easeInOut',
// 				duration: 0.5,
// 				delay: 0.1,
// 			}}
// 			className="container mx-auto flex flex-col-reverse lg:flex-row py-5 lg:py-10 lg:mt-10"
// 		>
// 			<ContactForm />
// 			<ContactDetails />
// 		</motion.div>
// 	);
// };

const Prototyping = () => {
	// array of image file names for initial
	const longImages = Array.from({ length: 34 }, (_, index) => `Flow_2.${index + 1}.png`);
   
	// array of image file names for final
	const shortImages = Array.from({ length: 26 }, (_, index) => `Flow_3.${index + 1}.png`);

	const responsive = {
		desktop: {
		  breakpoint: { max: 3000, min: 1024 },
		  items: 5,
		  slidesToSlide: 3, // Show 3 images at a time
		}
	  };

	return (
	  <>
		{/* Section - Hi-Fi Prototype #Initial */}
		<section style={{ marginLeft: '10%', marginRight: '10%', padding: '1rem 2rem' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Hi-Fi Prototypes</h2>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Hi-Fi Prototype #Initial</h2>
        {/* Sub-Headers */}
        <ul style={{ fontSize: '1.2rem' }}>
          <li style={{ textDecoration: 'underline'}}>App Design</li>
          <p style={{marginBottom: '1rem'}}>This is the placeholder text for App Design.</p>
          <li style={{ textDecoration: 'underline' }}>Color Theme</li>
          <p style={{marginBottom: '1rem'}}>This is the placeholder text for Color Theme.</p>
          <li style={{ textDecoration: 'underline' }}>Assets</li>
          <p style={{marginBottom: '1rem'}}>This is the placeholder text for Assets.</p>
          <li style={{ textDecoration: 'underline' }}>Cartoon Style</li>
          <p style={{marginBottom: '1rem'}}>This is the placeholder text for Cartoon Style.</p>
          <li style={{ textDecoration: 'underline' }}>Design Justification</li>
          <p style={{marginBottom: '1rem'}}>This is the placeholder text for Design Justification.</p>
        </ul>
      </section>

		<hr style={{ margin: '2rem 10%', border: '1px solid' }} className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light"/>		

		{/* Section - Feedbacks */}
		<section style={{ marginLeft: '10%', marginRight: '10%', padding: '1rem 2rem' }}>		
		  	<h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Client Feedback</h2>
			{/* Sub-Headers */}
			<ul style={{ fontSize: '1.2rem' }}>
				<li style={{ textDecoration: 'underline'}}>App Design</li>
				<p style={{marginBottom: '1rem'}}>This is the placeholder text for App Design.</p>
				<li style={{ textDecoration: 'underline' }}>Color Theme</li>
				<p style={{marginBottom: '1rem'}}>This is the placeholder text for Color Theme.</p>
				<li style={{ textDecoration: 'underline' }}>Assets</li>
				<p style={{marginBottom: '1rem'}}>This is the placeholder text for Assets.</p>
				<li style={{ textDecoration: 'underline' }}>Cartoon Style</li>
				<p style={{marginBottom: '1rem'}}>This is the placeholder text for Cartoon Style.</p>
				<li style={{ textDecoration: 'underline' }}>Design Justification</li>
				<p style={{marginBottom: '1rem'}}>This is the placeholder text for Design Justification.</p>
        	</ul>
		</section>

		<hr style={{ margin: '2rem 10%', border: '1px solid' }} className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light"/>

		{/* Section - Final Prototype */}
		<section style={{ marginLeft: '10%', marginRight: '10%', padding: '1rem 2rem' }}>		
		  	<h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Hi-Fi Prototype #Final</h2>
			{/* Sub-Headers */}
			<ul style={{ fontSize: '1.2rem' }}>
				<li style={{ textDecoration: 'underline'}}>App Design</li>
				<p style={{marginBottom: '1rem'}}>This is the placeholder text for App Design.</p>
				<li style={{ textDecoration: 'underline' }}>Color Theme</li>
				<p style={{marginBottom: '1rem'}}>This is the placeholder text for Color Theme.</p>
				<li style={{ textDecoration: 'underline' }}>Assets</li>
				<p style={{marginBottom: '1rem'}}>This is the placeholder text for Assets.</p>
				<li style={{ textDecoration: 'underline' }}>Cartoon Style</li>
				<p style={{marginBottom: '1rem'}}>This is the placeholder text for Cartoon Style.</p>
				<li style={{ textDecoration: 'underline' }}>Design Justification</li>
				<p style={{marginBottom: '1rem'}}>This is the placeholder text for Design Justification.</p>
        	</ul>
		</section>

   {/* Carousel for Figma_Flow_Long */}
   <section style={{ marginLeft: '10%', marginRight: '10%', padding: '1rem 2rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Figma_Flow_Long</h2>
        <Carousel
          responsive={responsive} // Use the responsive configuration
          swipeable={true} // Enable swipe gestures
          draggable={true} // Enable drag and swipe
          showDots={false} // Hide the navigation dots
          infinite={true} // Enable infinite scrolling
          containerClass="carousel-container" // Optional class for the carousel container
          itemClass="carousel-item" // Optional class for each carousel item
        >
          {longImages.map((imageName, index) => (
            <div key={index} className="carousel-image-wrapper">
              <img
                src={require(`../images/Figma_Flow_Long/${imageName}`).default}
                alt={`Figma_Flow_Long_${index}`}
                style={{ maxWidth: '80%', height: 'auto' }}
              />
            </div>
          ))}
        </Carousel>
      </section>

      {/* Carousel for Figma_Flow_Short */}
      {/* <section style={{ marginLeft: '10%', marginRight: '10%', padding: '1rem 2rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Figma_Flow_Short</h2>
        <Carousel showArrows={true} emulateTouch={true}>
          {shortImages.map((imageName, index) => (
            <div key={index}>
              <img src={require(`../images/Figma_Flow_Short/${imageName}`).default} alt={`Figma_Flow_Short_${index}`} style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
          ))}
        </Carousel>
      </section> */}
	  </>
	);
  };

export default Prototyping;
// export default Contact;
