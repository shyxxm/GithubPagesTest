import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';

const Application = () => {
  const videoUrl = 'https://www.youtube.com/watch?v=ra9X4_mfd2k&ab_channel=ShyamPrasad';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: 'easeInOut',
        duration: 0.5,
        delay: 0.1,
      }}
      style={{
        height: '100vh', // Set the height of motion.div to 100% of the viewport height
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'white',
      }}
    >
      <ReactPlayer
        url={videoUrl}
        controls
        width="70%"
        height="100%" // Set the height of ReactPlayer to 100% of the parent element (motion.div)
        style={{
          border: '4px solid #000000', // Set the border styles for the video
          borderRadius: '8px', // Add some border radius for rounded corners
        }}
      />
    </motion.div>
  );
};

export default Application;
