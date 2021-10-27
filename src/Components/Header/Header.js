
import React from 'react';
import './Header.css';
import YoutubeSvg from './YoutubeSvg';
import { Button } from '@mui/material';


const Header = () => {


    return (
        <div id="HeaderSection">
            <div className="beforeSearchicon">
                    <div className="icon">
                       <YoutubeSvg></YoutubeSvg>
                    </div>
            </div>

            <div className="searchInputFild">

                <input id="inputFild" placeholder="Search videos" type="text" name="input" />

                <Button id="searchButton" variant="contained" size="large" color="secondary"> <i className="fas fa-search"></i> </Button>

       
            </div>

            <div className="afterSearchIcon">  

                    <div className="rightSideIconSection">
                        <div className="singleIcons">
                           <i className="fas fa-microphone"> </i>
                        </div>

                        <div className="singleIcons">
                           <i className="fas fa-home"> </i>
                        </div>

                        <div className="singleIcons">
                           <i className="fas fa-video"> </i>
                        </div>


                        <div className="singleIcons">
                           <i className="fas fa-user-alt"> </i>
                        </div>



                    </div>
            </div>
        </div>
    );
};

export default Header;