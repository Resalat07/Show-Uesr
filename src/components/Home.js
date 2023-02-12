import React from 'react';
import Lottie from 'lottie-react'
import user from '../image/user.json'

const Home = () => {
    return (
        <div className=' max-h-[800px] flex justify-center items-center m-10'>

            <Lottie animationData={user} loop={true} />

        </div>
    );
};

export default Home;