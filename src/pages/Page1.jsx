import { motion } from 'framer-motion';
import firstMeeting from '../images/first_meeting.jpg';
import styles from "../css/Picture.module.css";
import { BiMaleFemale } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
// import { Typography } from "../../@material-tailwind/react";





const Contact = () => {


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                ease: 'easeInOut',
                duration: 0.5,
                delay: 0.1,
            }}
            className="container mx-auto py-5 lg:py-10 lg:mt-10"
        >
	<div className="text-ternary-dark dark:text-ternary-light" >
	<h1 className={styles.header}>Requirement Gathering and Ideation</h1>
	</div>

	<figure className='figure'>
	<img
	className="h-96 w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50 mt-12"
	src={firstMeeting}
	alt="nature image"
	/>
		<div className="text-ternary-dark dark:text-ternary-light" >

	<figcaption className={styles.caption} >The team's first requirement gathering meeting with Ruth Fletcher, Education Manager at the Hunterian Museum.</figcaption>
	</div>
    </figure>


{/* <figure>
      <img
        className="h-96 w-full rounded-lg object-cover object-center"
        src={firstMeeting}
        alt="nature image"
      />
      <Typography as="caption" variant="small" className="mt-2 text-center font-normal">
        Image caption
      </Typography>
    </figure> */}

	<div className="text-ternary-dark dark:text-ternary-light" >
	<h1 className={styles.customheading}>Requirements Gathered</h1>
	</div>


    <div className="grid grid-cols-2 gap-10 flex-direction-row">

      {/* Top Left
	  <div className="flex flex-row items-center space-x-8">
 		<div className="bg-gray-500 p-4">
    <h1 style={{ fontSize: '2rem' }} className="text-white text-center">1.   Target Audience    </h1>
			<div className="flex items-center space-x-30" style={{ fontSize: '1.4rem' }}>
			<div className="text-white">Ages 8-11 & 11-14</div>
			</div>
			<div className="flex items-center space-x-30" style={{ fontSize: '1.4rem' }} >
				<div className="text-white">
				 
				</div>
			</div>
		</div>
		</div> */}


      {/* Top Right */}
	  {/* <div className="flex flex-row items-center space-x-4">
 		<div className="bg-gray-500 p-4">
    <h1 style={{ fontSize: '2rem' }} className="text-white text-center">2.  Screen Time</h1>
			<div className="flex items-center space-x-30" style={{ fontSize: '1.4rem' }}>
			<div className="text-white">Users shouldn't be</div>
			</div>
		</div>
		</div> */}




      {/* Bottom Left */}
	  {/* <div className="flex flex-row items-center space-x-4">
 		<div className="bg-gray-500 p-4">
    <h1 style={{ fontSize: '2rem' }} className="text-white text-center">3.   Interactive Experience    </h1>
			<div className="flex items-center space-x-30" style={{ fontSize: '1.4rem' }}>
			<div className="text-white">Should be able to interact</div>
			</div>
		</div>
		</div> */}

      {/* Bottom Right */}
	  {/* <div className="flex flex-row items-center space-x-4">
 		<div className="bg-gray-500 p-4">
    <h1 style={{ fontSize: '2rem' }} className="text-white text-center">4.   Non-Competitive</h1>
			<div className="flex items-center space-x-30" style={{ fontSize: '1.4rem' }}>
			<div className="text-white">Hello</div>
			</div>
		</div>
		</div> */}

    </div>

    <div style={hello.ridesFriends} className="text-ternary-dark dark:text-ternary-light">
      <div style={{ textAlign: 'center' }}>
        <span style={hello.numbers} className="text-ternary-dark dark:text-ternary-light">Target Audience </span>
        <br />
        <span style={hello.subText}>For Age Groups 8-11 and 11-14</span>
      </div>
      <div style={hello.verticalLine}>
        <span style={hello.line} className="text-ternary-dark dark:text-ternary-light" ></span>
      </div>
      <div style={{ textAlign: 'center' }}>
        <span style={hello.numbers}>Interactive Experience</span>
        <br />
        <span style={hello.subText}>Interactive Experience</span>
      </div>
      <div style={hello.verticalLine}>
        <span style={hello.line}></span>
      </div>
      <div style={{ textAlign: 'center' }}>
        <span style={hello.numbers}>Screen Time</span>
        <br />
        <span style={hello.subText}>Reduced Screen time</span>
      </div>
      <div style={hello.verticalLine}>
        <span style={hello.line}></span>
      </div>
      <div style={{ textAlign: 'center' }}>
        <span style={hello.numbers}>Non-competitive</span>
        <br />
        <span style={hello.subText}>Incase got kids start running around</span>
      </div>
    </div>

<div className=" text-ternary-dark dark:text-ternary-light" >
	<h1 className={styles.customheading}>Ideation</h1>
	</div>

	<div className=" text-ternary-dark dark:text-ternary-light" >
	<h1 className={styles.secheading}>Idea 1: Object Recognition Visual Storytelling</h1>
	</div>

	<div className=" text-ternary-dark dark:text-ternary-light" >
	<h1 className={styles.thirdheading}>The process involves using a camera to scan an artifact, triggering object recognition. Once the object is recognized, the system initiates appropriate animations that play out to convey a visual storytelling experience.</h1>
	</div>

	<div className=" text-ternary-dark dark:text-ternary-light" >
	<h1 className={styles.secheading}>Idea 2: Treature Hunterian</h1>
	</div>

	<div className=" text-ternary-dark dark:text-ternary-light" >
	<h1 className={styles.thirdheading}>The process involves using a camera to scan an artifact, triggering object recognition. Once the object is recognized, the system initiates appropriate animations that play out to convey a visual storytelling experience.</h1>
	</div>

	<div className=" text-ternary-dark dark:text-ternary-light" >
	<h1 className={styles.secheading}>Idea 3: Mini-Games</h1>
	</div>
	<div className=" text-ternary-dark dark:text-ternary-light" >

<h1 className={styles.thirdheading}>The process involves using a camera to scan an artifact, triggering object recognition. Once the object is recognized, the system initiates appropriate animations that play out to convey a visual storytelling experience.</h1>
</div>
        </motion.div>
    );
};



const hello = {
	ridesFriends: {
	  paddingTop: 20,
	  display: 'flex',
	  alignItems: 'left',
	  flexDirection: 'row',
	  justifyContent: 'space-evenly',
	  width: '100%',
	  marginBottom: 20,
	},
	numbers: {
	  fontSize: 30,
	  color: '#31C283',
	  fontWeight: 'bold',
	  marginRight: 20
	},
	subText: {
		fontSize: 14,
		fontWeight: 'normal',
	  },
	verticalLine: {
	  position: 'relative',
	  paddingLeft: 20,
	  flexGrow: 1,
	  marginLeft: 10,
	  alignItems: 'center'
	},
	line: {
	  content: '""',
	  position: 'absolute',
	  top: 0,
	  left: 0,
	  width: 1,
	  height: '100%',
	  backgroundColor: '#909090',
	  alignItems: 'center'
	},
  };
		

export default Contact;
