import React, { useState } from 'react'; 
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
		<section style={{ marginLeft: '10%', marginRight: '10%', padding: '1rem 2rem' }} className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
        <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Hi-Fi Prototypes</h2>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Hi-Fi Prototype #Initial</h2>
		   {/* Carousel for Figma_Flow_Long */}
		   <section style={{ padding: '1rem 1rem' }}>        
        <Carousel
          responsive={responsive} // Use the responsive configuration
          swipeable={false} // Enable swipe gestures
          draggable={false} // Enable drag and swipe
          showDots={true} // Hide the navigation dots
          infinite={false} // Enable infinite scrolling
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
        {/* Sub-Headers */}
        <ul style={{ fontSize: '1.2rem' }}>
          <li style={{ textDecoration: 'underline'}}>App Design</li>
          <p style={{marginBottom: '1rem'}}>
			Upon drafting the hi-fi prototype of the initial wireframes, the team decided to enhance the Treasure Hunterian. 
			The design introduces a simple and intuitive interface with a clean and modern look. <br/><br/> To foster interactivity 
			with the application, the team incorporated a variety of visual elements, including a map, a storyline with a 
			mascot named Ms Monocles. Ms Monocles will guide the players through the application and provide hints to help
			them solve the puzzles. (Talk about ms monocles somewhere)
		  </p>
          <li style={{ textDecoration: 'underline' }}>Color Theme</li>
          <p style={{marginBottom: '1rem'}}>
			With the target audience in mind, light and pastel colors were used as the theme of the app. This caters to the age group 
			which would entice them in using the web-application and remain captivated towards the completion of the game.
		  </p>
          <li style={{ textDecoration: 'underline' }}>Assets</li>
          <p style={{marginBottom: '1rem'}}>
		  Our application incorporates a wide range of visual assets to enhance the user experience and provide a captivating interface. 
		  Several aspects of our design involves the usage of icons sourced from Flaticon (flaticons.com), and some were produced by the team. 
		  <br/><br/>In addition to the icons, the client has kindly provided us with images of artifacts in the museum. 
		  These images were used to create the puzzles in the application and used as digital gifts.
		  </p>
          <li style={{ textDecoration: 'underline' }}>Cartoon Style</li>
          <p style={{marginBottom: '1rem'}}>
			The team has decided that to entice the children with their spontaneous interactions with the web application, 
			the cartoon graphics would be simple and easy to understand. This would allow the children to have a sense of familiarity with catoon characters 
			and the interaction style, for instance, chat bubbles and 3 interactive games.
			</p>
        </ul>
      </section>

		<hr style={{ margin: '2rem 10%', border: '1px solid' }} className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light"/>		

		{/* Section - Feedbacks */}
		<section style={{ marginLeft: '10%', marginRight: '10%', padding: '1rem 2rem' }} className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">		
		  	<h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Client Feedback</h2>
			{/* Sub-Headers */}
			<ul style={{ fontSize: '1.2rem' }}>
				<li style={{ textDecoration: 'underline'}}>Age Group and Complexity</li>
				<p style={{marginBottom: '1rem'}}>
					The client suggested that the application may be better suited for an older age group due to the complexity and reading level required. 
					They proposed to consider a switch to align with the appropriate target audience</p>
				<li style={{ textDecoration: 'underline' }}>Clues and Interactivity</li>
				<p style={{marginBottom: '1rem'}}>
					The client appreciates the use of multiple-choice questions in the application but suggests adding clues with letters as hints to enhance the experience.
					Instead of using underscores in questions, they recommend using question marks to allow for more flexible and varied responses.
					<br/><br/>The application should ensure players are in the correct location to progress and to offer engaging visuals to attract attention.
				</p>
				<li style={{ textDecoration: 'underline' }}>Game Logic and Flow</li>
				<p style={{marginBottom: '1rem'}}>
					The logical flow and transition from one section to another need to be carefully designed to provide a seamless experience for players.					
					The client emphasizes the importance of proofreading and improving the linguistic wording throughout the application. It was also 
					mentioned that the storyline was lengthy, which may not entice the children to continue playing the game.				
				</p>
				<li style={{ textDecoration: 'underline' }}>Expectations</li>
				<p style={{marginBottom: '1rem'}}>
					The client requests a refined first quest leading to the second quest, focusing on a complete flow for one storyline.				
				</p>
			</ul>
		</section>

		<hr style={{ margin: '2rem 10%', border: '1px solid' }} className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light"/>

		{/* Section - Final Prototype */}
		<section style={{ marginLeft: '10%', marginRight: '10%', padding: '1rem 2rem' }} className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">		
		  	<h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Hi-Fi Prototype #Final</h2>
		{/* Carousel for Figma_Flow_Short */}
		<section style={{ padding: '1rem 1rem' }}>
			<Carousel
			responsive={responsive} // Use the responsive configuration
			swipeable={false} // Enable swipe gestures
			draggable={false} // Enable drag and swipe
			showDots={true} // Hide the navigation dots
			infinite={false} // Enable infinite scrolling
			containerClass="carousel-container" // Optional class for the carousel container
			itemClass="carousel-item" // Optional class for each carousel item
			>
			{shortImages.map((imageName, index) => (
			<div key={index} className="carousel-image-wrapper">
				<img
				src={require(`../images/Figma_Flow_Short/${imageName}`).default}
				alt={`Figma_Flow_Long_${index}`}
				style={{ maxWidth: '80%', height: 'auto' }}
				/>
			</div>
			))}
			</Carousel>
		</section>
			{/* Sub-Headers */}
			<ul style={{ fontSize: '1.2rem' }}>
				<li style={{ textDecoration: 'underline'}}>Redesigned Storyline</li>
				<p style={{marginBottom: '1rem'}}>
					With consideration to the lengthy storyline, the web application has been redesigned to be more concise and engaging for the children. 
					In addition, each storyline has been adjusted to link to the next quest to provide a more seamless experience for the players, 
					having a sense of continuity and a sequential achievement.
					</p>
				<li style={{ textDecoration: 'underline' }}>Intuitive Clues</li>
				<p style={{marginBottom: '1rem'}}>
					To promote interactivity with artifact in the museum, introductions of artifacts has been revised 
					to include intuitive clues to the answer while still maintaining the educational aspect of the application.
				</p>
				<li style={{ textDecoration: 'underline' }}>Target Audience</li>
				<p style={{marginBottom: '1rem'}}>
					In regards to the initial hi-fi prototype, the team catered the application to a younger age group, however, 
					the client suggested that the application may be better suited for an older age group due to the complexity and reading level required which the team has agreed. 
					The team has decided to switch the target audience to 11-14 years old, where the interactivity of the application is more suitable for the age group.
				</p>
        	</ul>
		</section>
	  </>
	);
  };

export default Prototyping;