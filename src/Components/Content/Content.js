
import  Axios  from 'axios';
import React, { useEffect, useState } from 'react';
import MyCard from './Card/MyCard';
import './content.css'

const Content = () => {

    const apiKey = 'AIzaSyBFrmHhARKEP7kM5Rb5pfrQUkr5t3Gd_t0'
    const [firstResult, setFirstResult] = useState('hindi song');
    const [data, setdata] = useState([]);

        useEffect(() => {
            Axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${apiKey}&maxResults=20&type=video&q=${firstResult}`)
            .then(data => setdata(data.data.items))
        }, [])



    return (
        <div id="contentSectionForCard" style={{margin: '10px'}}>
            {
            data.map(el =>  <MyCard videoId={el.id.videoId}> </MyCard>  )
            }    
           
        </div>
    );
};

export default Content;