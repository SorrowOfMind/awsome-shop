import React, {useState} from 'react';
import Drawer from '@material-ui/core/Drawer';
import {motion} from 'framer-motion';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import Collapse from '@material-ui/core/Collapse';
import StarBorder from '@material-ui/icons/StarBorder';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';

const Sidenav = ({isOpen, toggleNav}) => {
    const [subIsOpen,
        setSubIsOpen] = useState(false);

    const toggleSublist = () => {
        setSubIsOpen(!subIsOpen);
    };

    return (
        <Drawer className="sidenav" open={isOpen} onClose={toggleNav}>
            <List component="ul">
                <ListItem button className="category">
                    <ListItemIcon>
                        <HomeOutlinedIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Home"/>
                </ListItem>
                <ListItem button className="category" onClick={toggleSublist}>
                    <ListItemIcon>
                        <ShoppingBasketOutlinedIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Categories" className="categories-txt"/> 
                    {subIsOpen ? <ExpandLess/>: <ExpandMore/>}
                </ListItem>
                <Collapse in={subIsOpen} timeout="auto" unmountOnExit>
                    <List component="div">
                        <ListItem button>
                            <ListItemText primary="Category 1"/>
                        </ListItem>
                    </List>
                    <List component="div">
                        <ListItem button>
                            <ListItemText primary="Category 2"/>
                        </ListItem>
                    </List>
                    <List component="div">
                        <ListItem button>
                            <ListItemText primary="Category 3"/>
                        </ListItem>
                    </List>
                    <List component="div" >
                        <ListItem button>
                            <ListItemText primary="Category 4"/>
                        </ListItem>
                    </List>
                </Collapse>
            </List>
        </Drawer>
    )
}

export default Sidenav;
