import React from 'react';
import './Card.css';

const MyCard = (props) => {

 const videoId = props.videoId;
 const src = `https://www.youtube.com/embed/ ${videoId}`

    return (
    <div style={{margin:'10px'}}>
          <iframe width="300" height="220" src={src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    </div>
    );
};

export default MyCard;