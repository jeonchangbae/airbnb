import React from 'react';
import Banner from './Banner';
import Card from './Card';
import './Home.css'

// ES7 snippets to do 'rfce
function Home() {
    return ( 
        <div className='home'>
            <Banner />
            <div className='home__section'>
                <Card src='images/card1.jpg' title="Online Experiences" 
                description="Comfortable private place, with room for friends or family"/>
                <Card src='images/card2.jpg' title="Unique styas"
                description="Space that are more than just a place to sleep"/>
                <Card src='images/card3.jpg' title="Entire homes"
                description="Comfortable private places, with room for friends or family" />
            </div>
            <div className='home__section'>
                <Card src='images/choo1.png' title="3 Bedroom flat in"
                description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                price="$130/night"/>
                <Card src='images/choo2.png' title="Penthouse in London"
                description="Enjoy the amazing sights of London with this stunning penthouse"
                price="$350/night"/>
                <Card src='images/choo3.png' title='1 Bedroom apartment' 
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="$270/night"/>
            </div>
        </div>
     );
}

export default Home;