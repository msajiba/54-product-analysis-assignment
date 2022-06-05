import React, { useState } from 'react';
import CustomLink from '../utlity/CustomLink';
import './Header.css';
import { BeakerIcon, MenuIcon, XIcon } from '@heroicons/react/solid'



const Header = () => {

    const [open,setOpen] = useState(true);


    return (

        <div className='text-center header-container'>
            <div onClick={()=> setOpen(!open)} className='w-8 h-8 md:hidden'>
                {open ? <XIcon> </XIcon> :<MenuIcon></MenuIcon>}
            </div>

            <nav className={`md:flex justify-center  absolute w-full ${open?"top-8px":"top-[-150px]"} `}>
                <CustomLink to='/'> HOME </CustomLink>
                <CustomLink to='/reviews'> REVIEWS </CustomLink>
                <CustomLink to='/dashboard'> DASHBOARD </CustomLink>
                <CustomLink to='/blogs'> BLOGS </CustomLink>
                <CustomLink to='/about'> ABOUT </CustomLink>
            </nav>
            <br />
            <br />
            <br />
            <br />
        </div>
    );
};

export default Header;