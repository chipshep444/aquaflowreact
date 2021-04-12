import React from 'react';
import Caro from './carouselcomponent';
import Center from 'react-center';
import M1content from './m1contentcomponent';
import M2content from './m2contentcomponent';
import M3content from './m3contentcomponent';
import M4content from './m4contentcomponent';
import M5content from './m5contentcomponent';
import Header from './headercomponent';
import MainNavBar from './navbarcomponent';
import Footer from './footercomponent';

function Main() {
    return (
        <div>
            <Header />
            <MainNavBar />
            <Center>
                <Caro />
            </Center>
            <M1content />
            <M2content />
            <M3content />
            <M4content />
            <M5content />
            <Footer />
        </div>
    );
}

export default Main;