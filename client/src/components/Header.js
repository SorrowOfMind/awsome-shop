import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import Sidenav from './Sidenav';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        htmlFontSize: 10
    }
})

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <ThemeProvider theme={theme}>
            <AppBar position="fixed">
                <Toolbar>
                    <div className="container header">
                        <div className="logo">
                            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleNav}>
                                <MenuIcon className="menu-icon"/>
                            </IconButton>
                            
                                <Sidenav isOpen={isOpen} toggleNav={toggleNav} />
                            <h1 className="title-main">awsomeShop</h1>
                        </div>
                        <div className="utils">
                            <IconButton edge="start" color="inherit" aria-label="menu" className="cart-icon">
                                <Badge badgeContent={1} max={10} color="secondary" className="cart-badge">
                                    <ShoppingCartIcon className="cart-icon"/>
                                </Badge>
                            </IconButton>
                            <Button className= "btn btn-auth" color="inherit">Login</Button>
                            <Button className= "btn btn-auth" color="inherit">Sign in</Button>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
            </ThemeProvider>
        </div>
    )
}

export default Header
