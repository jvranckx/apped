import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo-apped-only-icon-white.svg'
import { motion } from 'framer-motion';

// material-ui
import { Grid, Slide, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';

// project import
// import AuthWrapper from './AuthWrapper';

// ================================|| LOGIN ||================================ //

const SignIn = () => {
    const [initialAnimFinished, setInitialAnimFinished] = useState(false)
    const [whiteCircleLoading, setWhiteCircleLoading] = useState(true)


    return (
        <Box sx={{width:"100vw",height:"100vh",overflow:"hidden"}}>


       
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", backgroundColor: "#59DA65" }}>

            {!initialAnimFinished &&
               
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
                            onAnimationComplete={() => setInitialAnimFinished(true)}

                            d="M241.7,71l-94.5,137l-18.7,2.5l-86.3-68.3"
                        />
                    </motion.svg>}
            {initialAnimFinished &&

                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 280 280"
                    width="150"
                    height="150"
                    transition={{
                        times:[0,0.5,1],
                        duration: 5,
                        ease: 'linear',
                        repeat: Infinity,
                    }}
                   
                    animate={{
                        opacity: [1,0.5,1]
                        

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
                        d="M241.7,71l-94.5,137l-18.7,2.5l-86.3-68.3"
                    />

                </motion.svg>}
            {initialAnimFinished && whiteCircleLoading &&
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 200 200"
                    width="350"
                    height="350"
                    style={{ position: "absolute" }}

                >
                    <motion.path strokeWidth="5"
                        stroke="white" d="
                M 100, 100
                m -75, 0
                a 75,75 0 1,0 150,0
                a 75,75 0 1,0 -150,0
                "
                        onAnimationComplete={() => setWhiteCircleLoading(false)}

                        transition={{
                            duration: 3,
                            ease: 'easeInOut',

                        }}
                        initial={{
                            pathLength: 0,
                        }}
                        animate={{
                            pathLength: 1,
                        }}
                    >
                    </motion.path></motion.svg>
            }

            {initialAnimFinished && whiteCircleLoading===false &&
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 200 200"
                    width="350"
                    height="350"
                    style={{ position: "absolute" }}

                >
                    <motion.path strokeWidth="5"
                    stroke="white" d="
                            M 100, 100
                            m -75, 0
                            a 75,75 0 1,0 150,0
                            a 75,75 0 1,0 -150,0
                            "
                    
                >
                    </motion.path>

                    <motion.path strokeWidth="6"
                        stroke="#59DA65" d="
                M 100, 100
                m -75, 0
                a 75,75 0 1,0 150,0
                a 75,75 0 1,0 -150,0
                "
                        onAnimationComplete={() => setWhiteCircleLoading("t")}

                        transition={{
                            duration: 3,
                            ease: 'easeInOut',
                        }}
                        initial={{
                            pathLength: 0,
                        }}
                        animate={{
                            pathLength: 1,
                        }}
                    >
                    </motion.path>

                </motion.svg>

            }
           
        </Box>
        
            <Box sx={{position:"absolute",bottom:100,width:"100%",justifyContent:"center" ,display:"flex"   }}>
            <Slide direction="up" in={true}  >

            <Typography  variant="h2" color="white">
            Website in production
        </Typography>
        </Slide>
            </Box>
        </Box>
        
        )


}



export default SignIn;
