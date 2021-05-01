import React from 'react';
import Banner from '../Banner/Banner';
import ContactMe from '../ContactMe/ContactMe';
import Footer from '../Footer/Footer';
import './Home.css'

const Home = () => {
    return (
        <main>
            <Banner />
            <ContactMe />
            <Footer />
        </main>
    );
};

export default Home;