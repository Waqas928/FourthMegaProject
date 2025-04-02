import React from 'react';
import reactLogo from '../assets/react.svg';

function Home() {
    return (
        <div className="text-center mt-10">
            <h2 className="text-2xl">Click on 'All Posts' to view all posts or create a new post using the 'Post' button.</h2>
            <img src={reactLogo} className="animate-spin-slow w-20 h-20 mx-auto mt-10 mb-12" alt="React logo" />
            </div>
    );
}

export default Home;
