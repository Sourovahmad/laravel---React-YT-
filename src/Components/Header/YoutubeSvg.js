import React from 'react';
import { Icon } from '@iconify/react';


const YoutubeSvg = () => {

    const iconStyle = {
        display:'flex',
        alignItems:'center'
    }

    const PStyle = {
    fontSize:'21px',
    fontWeight: 'bold',
    }

    return (
        <div id="youtubeIconSection" style={iconStyle}>
           {/* <span style={{ margin:'10px'}}> <Icon icon="simple-line-icons:menu" /> </span>  */}
            <span> <i style={{fontSize:'50px', marginLeft:'10px'}} className="fab fa-youtube"></i>  </span>
            <p style={PStyle}> KhanTube</p>
        </div>
    );
};

export default YoutubeSvg;