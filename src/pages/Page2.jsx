import React from 'react'
import Card from '../components/projects/Card.jsx'
import idea1 from '../images/wireframing/idea1.jpg'
import idea2 from '../images/wireframing/idea2.jpg'
import idea30 from '../images/wireframing/idea3-0.jpg'
import idea31 from '../images/wireframing/idea3-1.jpg'
import wireframe01 from '../images/wireframing/wireframe01.jpg'
import wireframe02 from '../images/wireframing/wireframe02.jpg'
import wireframe03 from '../images/wireframing/wireframe03.jpg'
import userability01 from '../images/experiment/user01.jpeg'
import userability02 from '../images/experiment/user02.jpeg'
import userability03 from '../images/experiment/user03.jpeg'
import userability04 from '../images/experiment/user04.jpeg'
import userability05 from '../images/experiment/user05.jpeg'
import userability06 from '../images/experiment/user06.jpeg'
import userability07 from '../images/experiment/user07.jpeg'


const HomePage = () => {
	const cards = [
	  {
		id: 1,
		title: 'Idea 01 - Interactive Educational Entertainment Game',
		details: 'Minigames that targets younger kids between 11 to 14.',
		image: idea1,
	  },
	  {
		id: 2,
		title: 'Idea 02 - Treasure Hunterian Game',
		details: 'A game targeting younger kids between 11 to 14.',
		image: idea2,
	  },
	  {
		id: 3,
		title: 'Idea 03 - Object Recognition Visual Storytelling Game',
		details: 'A game targeting younger kid between 11 to 14.',
		image: idea30,
	  },
	]

	const cardIdea01 = [	
		{
			id: 1,
			title: 'The Brainstorming Process',
			details: 'The team wants to ensure while the kids are interacting with the application’s engaging games, they would still be cautious and aware of their surroundings. Hence, the mini games the team has brainstormed incorporates interactions of the artefacts while playing them. 3 main mini games that were idealised were a puzzle, a listening and a mining game. To have the proper interactions of the application, the children would have to go to the relevant locations to start the activity and engage with the artefact.',
			image: wireframe01,
		},
		{
			id: 2,
			title: 'How to Play?',
			details: 'Play it on your mobile phone. Walk around the museum to find the access codes, with a total of 3 minigames. Get rewarded when all games are completed! After completion, be part of the highscore board.',
			image: wireframe02,
		},
	]

	const cardIdea02 = [
		{
			id: 1,
			title: 'The Brainstorming Process',
			details: "With the educational aspect as the main highlight of this idea, the team designed the wireframing to be similiar to that of a treasure hunt game. The game would revolve a simple puzzle game where the children would have to seek for clues of the artifact's description within the museum to solve.",
			image: wireframe01,
		},
		{
			id: 2,
			title: 'How to Play?',
			details: 'The design concept allows the children to select multiple genres or topics relating to the artifacts within the museum. Each genre would require the children to fit puzzle pieces together, with each piece having clues to the artifact. This would additionally require the children to find clues to match the puzzle pieces with the artifacts itself. Upon completing the puzzle, a digital gift would be awarded to them and they would stand a chance to be featured in the leaderboard upon completion.',
			image: wireframe02,
			
		}
	]

	const cardIdea03 = [
		{
			id: 1,
			title: 'The Brainstorming Process ',
			details: 'The team have came up with an exciting way to introduce educational content to engage children during their visit in the museum. An interactive adventure along with a companion guide which would accompany the players throughout their journey would captivate their interest in interacting with the application. The quest provides informative clues and guides, allowing children to explore the museum in a fun way.',
			image: wireframe01,
		},
		{
			id: 2,
			title: 'How to Play? ',
			details: 'Simply get on the website and use your mobile phone as the camera. The game would be in Augmented Reality with a companion to guide you along, follow the instructions and dialogues throughout the play the game. At every quest, you would be required to find the artifact and scan it to unlock the next quest. Upon completion, you would be rewarded with a digital gift and a chance to be featured in the leaderboard.',
			image: wireframe02,
		}
	]

	// For Usability Testing
	const usabilityTestingCard01 = [
		{
			id: 1,
			title: 'Usability Testing -  ',
			details: 'Here we have a game that focuses on ',
			image: userability01,
		},
		{
			id: 2,
			title: 'Usability Testing - ',
			details: 'Lorem ipsum dolor sit amet.',
			image: userability02,
		},
		{
			id: 3,
			title: 'Usability Testing - ',
			details: 'Lorem ipsum dolor sit amet.',
			image: userability03,
		},
		{
			id: 4,
			title: 'Usability Testing - ',
			details: 'Lorem ipsum dolor sit amet.',
			image: userability04,
		},
		{
			id: 5,
			title: 'Usability Testing - ',
			details: 'Lorem ipsum dolor sit amet.',
			image: userability05,
		},
		{
			id: 6,
			title: 'Usability Testing - ',
			details: 'Lorem ipsum dolor sit amet.',
			image: userability06,
		},
		{
			id: 7,
			title: 'Usability Testing - ',
			details: 'Lorem ipsum dolor sit amet.',
			image: userability07,
		},
	]

  
	return (
	  <div style={{padding:"100px"}}className="flex justify-center items-center flex-col h-screen">
		<h1 style={{ fontSize: "80px" }} className="font-general-medium mb-1 text-ternary-dark dark:text-ternary-light">
			Wireframing and Usability Testing
		</h1>

		<div>
        <img src={require("../images/wireframing/work01.gif").default} alt="GIF" className="w-1/2 h-auto" />
      </div>

	  
		
		<p style={{ fontSize: "25px", textAlign:"center", paddingLeft:"200px", paddingRight:"200px"}} className="font-general-medium mb-1 text-ternary-dark dark:text-ternary-light">
		The intention of is to design a simple, fun to play yet simple web application through wire framing while meeting the client’s requirements.

		<br></br><br></br>This includes a brain storming session where team members bounce ideas off each other and start designing those ideas as a pair. 
		<br></br><br></br>The following are the team’s sketches of the ideas, with substantiating pointers of the team.
		</p>

	  <br></br>
	  <br></br>
	  <p style={{ fontSize: "60px"}} className="font-general-medium mb-1 text-ternary-dark dark:text-ternary-light">
		Wireframing
	  </p>
	  <br></br>

	  {/* GRIDS HERE! */}

		{/* For Idea 1 */}
		<div>
		<p style={{fontSize: "40px", textAlign: "left"}}className="font-general-medium mb-1 text-ternary-dark dark:text-ternary-light">
		<u>Idea 01</u>
		</p>
		</div>
	  
		<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
		{cards.map((card) => {
			if (card.id === 1) {
				return (
				  <Card
					key={card.id}
					title={card.title}
					details={card.details}
					image={card.image}
				  />
				);
			}
			})}

			{/* Idea 01 small grid */}
		<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
		{cardIdea01.map((card2) => {
				return (
				  <Card
					key={card2.id}
					title={card2.title}
					details={card2.details}
					image={card2.image}
				  />
				);
			})}
		</div>
		</div>
			<br></br>
			<br></br>


	{/* For Idea 2 */}
	<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
		<u>Idea 02 </u>
		</p>
		<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
		{cards.map((card) => {
			if (card.id === 2) {
				return (
				  <Card
					key={card.id}
					title={card.title}
					details={card.details}
					image={card.image}
				  />
				);
			}
			})}

			{/* Idea 01 small grid */}
		<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
		{cardIdea02.map((card2) => {
				return (
				  <Card
					key={card2.id}
					title={card2.title}
					details={card2.details}
					image={card2.image}
				  />
				);
			})}
		</div>
		</div>

	{/* For Idea 3 */}
	<br></br>
	<br></br>
	<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
		<u>Idea 03</u>
		</p>
		<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
		{cards.map((card) => {
			if (card.id === 3) {
				return (
				  <Card
					key={card.id}
					title={card.title}
					details={card.details}
					image={card.image}
				  />
				);
			}
			})}

			{/* Idea 01 small grid */}
		<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
		{cardIdea03.map((card) => {
				return (
				  <Card
					key={card.id}
					title={card.title}
					details={card.details}
					image={card.image}
				  />
				);
			})}
		</div>
		</div>
	
	

		<br></br>
		<br></br>
		<div>
		<p style={{ fontSize: "60px"}} className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light text-center">
		Usability Testing
	  </p>
	  <br></br>
	  <br></br>
	  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-4">
		{usabilityTestingCard01.map((card) => {
				return (
				  <Card
					key={card.id}
					title={card.title}
					details={card.details}
					image={card.image}
				  />
				);
			})}

		<p style={{ fontSize: "80px" }} className="font-general-medium mb-1 text-ternary-dark dark:text-ternary-light">
		We Learned Better By Actually Testing It Physically!
	  </p>
		</div>
		
		<br></br>
		<br></br>
		<br></br>
		<div>
			<p style={{ fontSize: "80px" }} className="font-general-medium mb-1 text-ternary-dark dark:text-ternary-light text-center">
				Want to learn our next stage?<br></br> Click the button below!
				</p>
				<br></br>
				<div className='text-center'>
				<a href="page3" class="bg-primary-light hover:bg-ternary-light text-black font-bold py-3 px-10 rounded shadow-md">
  					The Button
				</a>
				</div>
		</div>
		</div>
			</div>
		);
	};
	
	
	export default HomePage;