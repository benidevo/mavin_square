import React, {useState, useEffect } from 'react'
import SideDrawer from './SideDrawer';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'

const Header = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const [showHeader, setShowHeader] = useState(false)

    const toggleDrawer = (value) => {
        setOpenDrawer(value)
    }

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setShowHeader(true);
        } else {
            setShowHeader(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [])

    return (
        <AppBar
            position="fixed"
            style={{
                background: showHeader ? "transparent" : "#2f2f2f",
                boxShadow: "none",
                padding: "10px 0px"
            }}
        >
            <Toolbar>
                <div className="header_logo">
                    <div className="font_righteous header_logo_venue">Mavin Square</div>
                    <div className="header_logo_title">Musical Events</div>
                </div>
                
                <IconButton
                    arial-label="menu"
                    color="inherit"
                    onClick={() => toggleDrawer(true)}
                >
                    <MenuIcon />
                </IconButton>
                <SideDrawer open={openDrawer} onClose={toggleDrawer} />
            </Toolbar>
        </AppBar>
    )
}

export default Header
