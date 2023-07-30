import { motion } from 'framer-motion';
import ContactDetails from '../components/contact/ContactDetails';
import ContactForm from '../components/contact/ContactForm';

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

	  </>
	);
  };

export default Prototyping;
// export default Contact;
