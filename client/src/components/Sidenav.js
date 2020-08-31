import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import {SWITCH_CAT} from '../actions/types';

const Sidenav = ({isOpen, toggleNav}) => {
    const [subIsOpen,
        setSubIsOpen] = useState(false);

    const toggleSublist = () => {
        setSubIsOpen(!subIsOpen);
    };

    const dispatch = useDispatch();

    const changeCategory = cat => {
        dispatch({type: SWITCH_CAT, payload: cat});
        toggleNav();
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
                    <ListItemText primary="Categories" className="categories-txt"/> {subIsOpen
                        ? <ExpandLess/>
                        : <ExpandMore/>}
                </ListItem>
                <Collapse in={subIsOpen} timeout="auto" unmountOnExit>
                    <List component="div">
                        <Link to='/products'>
                            <ListItem button onClick={() => changeCategory(1)}>
                                <ListItemText primary="Category 1"/>
                            </ListItem>
                        </Link>
                    </List>
                    <List component="div">
                        <Link to='/products'>
                            <ListItem button onClick={() => changeCategory(2)}>
                                <ListItemText primary="Category 2"/>
                            </ListItem>
                        </Link>
                    </List>
                    <List component="div">
                        <Link to='/products'>
                            <ListItem button onClick={() => changeCategory(3)}>
                                <ListItemText primary="Category 3"/>
                            </ListItem>
                        </Link>
                    </List>
                </Collapse>
            </List>
        </Drawer>
    )
}

export default Sidenav;
