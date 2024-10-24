import React from 'react';
import profile from '../../../public/images/profile.png'

const Header = () => {
    return (
        <header className='container mx-auto flex justify-between items-center border-b-2  p-2'>
             <h1 className='text-3xl font-semibold'>Knowledge cafe</h1>
             <img className='w-11' src={profile} alt="" />
        </header>
    );
};

export default Header;