import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const Header = () => {
    return (
        <div>
            <AppBar position="fixed">
                <Toolbar>
                    <div className="container header">
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon className="menu-icon"/>
                        </IconButton>
                        <h1 className="title-main">awsomeShop</h1>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
