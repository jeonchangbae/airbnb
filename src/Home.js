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
                <Card src="https://pds.joongang.co.kr/news/component/tong/201604/02/movingshelter_thumb.jpg" title="Online Experiences" 
                description="Comfortable private place, with room for friends or family"
                data-cursor="images/selter_cursor.png"/>
                <Card src="http://www.gynews.co.kr/news/photo/202103/10626_9801_1139.jpg" title="Unique styas"
                description="Space that are more than just a place to sleep"/>
                <Card src="https://i.ytimg.com/vi/qT8NcGI_BTk/maxresdefault.jpg" title="Entire homes"
                description="Comfortable private places, with room for friends or family" />
            </div>
            <div className='home__section'>
                <Card src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg?im_w=720 " title="3 Bedroom flat in"
                description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                price="$130/night"/>
                <Card src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg" title="Penthouse in London"
                description="Enjoy the amazing sights of London with this stunning penthouse"
                price="$350/night"/>
                <Card src="https://media.nomadicmatt.com/2018/apartment.jpg" title='1 Bedroom apartment' 
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="$270/night"/>
            </div>
        </div>
     );
}

export default Home;