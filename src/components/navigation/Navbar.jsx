import React, { useState, useEffect } from 'react'
import {
  CardMedia,
  Box,
  Grid,
  useMediaQuery,
  SwipeableDrawer,
  IconButton,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import useStyles from '../../theme/views/navbar.theme'
import Adaptive_logo from '../../assets/images/Adaptive_logo_WHITE_PINK.png'
import navbarHelper from '../../modules/navbarHelper'

const Navbar = () => {
  const isMobile = useMediaQuery('(max-width:1700px)')
  const classes = useStyles()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [tabs, setTabs] = useState([])

  useEffect(() => {
    setTabs(navbarHelper.buildTabs())
  }, [isMobile])

  return (
    <Box className={classes.section}>
      {isMobile ? (
        <Box data-cy='navbar' className={classes.container}>
          <img
            className={classes.logo}
            src={Adaptive_logo}
            data-cy='adaptive-logo'
            alt='The Adaptive Logo'
          />

          <SwipeableDrawer
            data-cy='navbar'
            PaperProps={{ className: classes.drawer }}
            anchor='right'
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            onOpen={() => setDrawerOpen(true)}
            onClick={() => setDrawerOpen(false)}>
            {tabs}
          </SwipeableDrawer>
          <IconButton
            className={classes.menuButton}
            onClick={() => setDrawerOpen(true)}>
            <MenuIcon data-cy='hamburger-menu' />
          </IconButton>
        </Box>
      ) : (
        <Box data-cy='navbar' className={classes.container}>
          <Grid item container lg={5} className={classes.tabsLeft}>
            {tabs.slice(0, 3)}
          </Grid>
          <Grid item container lg={2} className={classes.logoBox}>
            <CardMedia
              className={classes.logo}
              component='img'
              image={Adaptive_logo}
              data-cy='adaptive-logo'
              variant='contained'
            />
          </Grid>
          <Grid item container lg={5} className={classes.tabsRight}>
            {tabs.slice(3, 5)}
          </Grid>
        </Box>
      )}
    </Box>
  )
}

export default Navbar
