
import React from 'react';
import MyCard from './Card/MyCard'
import './content.css'

const Content = () => {
    return (
        <div id="contentSectionForCard" style={{margin: '10px'}}>
            <MyCard> </MyCard>
            <MyCard> </MyCard>
            <MyCard> </MyCard>
            <MyCard> </MyCard>
            <MyCard> </MyCard>
            <MyCard> </MyCard>
        </div>
    );
};

export default Content;