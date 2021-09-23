import React, { Suspense } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  section: {
    position: 'relative',
    height: '80vh',
    width: '100%',
    objectFit: 'cover',
    '& video': {
      objectFit: 'cover',
    },
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  backgroundGradient: {
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, #a43072 30%,  #574f8d 70%)',
  },
}))

const Hero = () => {
  const classes = useStyles()
  const BackgroundVideo = React.lazy(() => import('./hero/BackgroundVideo'))
  const BackgroundImage = React.lazy(() => import('./hero/BackgroundImage'))

  const backgroundGradient = <Box className={classes.backgroundGradient} />

  const backgroundImage = (
    <Suspense fallback={backgroundGradient}>
      <BackgroundImage />
    </Suspense>
  )

  return (
    <Box className={classes.section}>
      <Suspense fallback={backgroundImage}>
        <BackgroundVideo />
      </Suspense>

      <Box className={classes.overlay} component='div'>
        <Typography>Slogan</Typography>
        <Button>Contact</Button>
      </Box>
    </Box>
  )
}

export default Hero
