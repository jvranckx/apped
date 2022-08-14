import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo-apped-only-icon-white.svg'
import { motion } from 'framer-motion';

// material-ui
import { Grid, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';

// project import
// import AuthWrapper from './AuthWrapper';

// ================================|| LOGIN ||================================ //

const SignIn = () => (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#59DA65" }}>
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 280 280"
            width="150"
            height="150"

        >
            <motion.path
                transition={{
                    duration: 2,
                    ease: 'easeInOut',
                }}
                fill="white"
                initial={{
                    opacity: 0,
                    pathLength: 0,
                }}
                animate={{
                    opacity: 1,
                    pathLength: 1,
                }}
                d="M 118.7 246.6 C 118.7 246.6 117.6 252.5 116.3 259 C 115.7 262 115.2 264.4 114.9 265.9 L 32.7 257.8 C 38.9 237.2 51.2 196 51.2 196 L 118.7 246.6 Z M 221.4 159.2 C 230.7 191.3 240 223.4 249.3 255.5 L 169.4 265.8 C 167.6 256.7 165.8 247.6 164.1 238.5 C 183.1 212.1 202.3 185.6 221.4 159.2 Z M 146.5 148.8 L 141.7 124 L 133.1 170.3 L 73.1 122.8 C 73.1 122.8 89 69.7 96.9 43.1 L 186.5 38.6 L 197.2 75.4 L 146.5 148.8 Z"
            />
            <motion.path
                strokeWidth="47"
                stroke="white"
                strokeLinecap="butt"
                strokeLinejoin="butt"
                direction=""
                transition={{
                    delay: 2,
                    duration: 1,
                    ease: 'easeOut',
                }}
                initial={{
                    opacity: 1,
                    pathLength: 0,
                    pathOffset: 1
                }}
                animate={{
                    opacity: 1,
                    pathLength: 1,
                    pathOffset: 0

                }}
                d="M241.7,71l-94.5,137l-18.7,2.5l-86.3-68.3"
            />
        </motion.svg>
        {/* <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 250 250"
            width="150"
            height="150"
            animate={{
                scale: [1, 1.1, 1.1, 1, 1],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"]
            }}
            transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1
            }}
        >
            <motion.path

                fill="white"

                d="M 118.7 246.6 C 118.7 246.6 117.6 252.5 116.3 259 C 115.7 262 115.2 264.4 114.9 265.9 L 32.7 257.8 C 38.9 237.2 51.2 196 51.2 196 L 118.7 246.6 Z M 221.4 159.2 C 230.7 191.3 240 223.4 249.3 255.5 L 169.4 265.8 C 167.6 256.7 165.8 247.6 164.1 238.5 C 183.1 212.1 202.3 185.6 221.4 159.2 Z M 146.5 148.8 L 141.7 124 L 133.1 170.3 L 73.1 122.8 C 73.1 122.8 89 69.7 96.9 43.1 L 186.5 38.6 L 197.2 75.4 L 146.5 148.8 Z"
            />
            <motion.path
                strokeWidth="47"
                stroke="white"
                strokeLinecap="butt"
                strokeLinejoin="butt"
                direction=""

                d="M241.7,71l-94.5,137l-18.7,2.5l-86.3-68.3"
            />
        </motion.svg> */}
    </Box>

);

export default SignIn;
