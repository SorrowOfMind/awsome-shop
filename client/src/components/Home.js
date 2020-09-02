import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const Home = () => {
    return (
        <div className="home container">
            <Box  class="welcome-box clearfix">
                <p>From the people with passion to the people with passion</p>
                <p class="welcome-subtext">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, consectetur.</p>
                <Button variant="contained" color="primary" className="welcome-btn">
                    Read More
                </Button>
            </Box>
        </div>
    )
}

export default Home;
