import { Box, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const Logo = ({ size, short, animate = true, color, secondaryColor, onAnimationEnd, sx }) => {
    const theme = useTheme()
    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", ...sx }}>
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 260 280"
                width={size}
                height={size}


            >
                <motion.path


                    transition={animate ? {
                        duration: 2,
                        ease: 'easeInOut',
                    } : null}
                    fill={color ? color : "#FFF"}
                    initial={animate ? {
                        opacity: 0,
                        pathLength: 0,

                    } : null}
                    animate={{
                        opacity: 1,
                        pathLength: 1,

                    }}
                    d="M 118.7 246.6 C 118.7 246.6 117.6 252.5 116.3 259 C 115.7 262 115.2 264.4 114.9 265.9 L 32.7 257.8 C 38.9 237.2 51.2 196 51.2 196 L 118.7 246.6 Z M 221.4 159.2 C 230.7 191.3 240 223.4 249.3 255.5 L 169.4 265.8 C 167.6 256.7 165.8 247.6 164.1 238.5 C 183.1 212.1 202.3 185.6 221.4 159.2 Z M 146.5 148.8 L 141.7 124 L 133.1 170.3 L 73.1 122.8 C 73.1 122.8 89 69.7 96.9 43.1 L 186.5 38.6 L 197.2 75.4 L 146.5 148.8 Z"
                />
                <motion.path

                    strokeWidth="47"
                    stroke={secondaryColor ? secondaryColor : theme.palette.primary.main}
                    strokeLinecap="butt"
                    strokeLinejoin="butt"
                    onAnimationComplete={onAnimationEnd}
                    transition={animate ? {
                        delay: 2,
                        duration: 1,
                        ease: 'easeOut',
                    } : null}
                    initial={animate ? {
                        opacity: 0,
                        pathLength: 0,
                        pathOffset: 1
                    } : null}
                    animate={{
                        opacity: 1,
                        pathLength: 1,
                        pathOffset: 0

                    }}
                    // onAnimationComplete={() => setInitialAnimFinished(true)}

                    d="M241.7,71l-94.5,137l-18.7,2.5l-86.3-68.3"
                />
            </motion.svg >
            {!short && <motion.div
                transition={{
                    duration: animate ? 2 : 0,
                    ease: 'easeInOut',
                }}
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
            >
                <Typography color={color ? color : "#FFF"}
                    sx={{ letterSpacing: "3px", lineHeight: "50%" }} fontSize={115} fontFamily={"'Luckiest Guy', cursive"}>PPED</Typography>
            </motion.div>}
        </Box>
    )
}
export default Logo