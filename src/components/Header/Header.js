import React, { useState } from 'react';
import CustomLink from '../utlity/CustomLink';
import './Header.css';
import { BeakerIcon, MenuIcon, XIcon } from '@heroicons/react/solid'



const Header = () => {

    const [open,setOpen] = useState(true);


    return (

        <div className='text-center header-container mb-10 pb-10'>

            <div onClick={()=> setOpen(!open)} className="w-6 h-6 md:hidden">
                { open? <XIcon> </XIcon> :  <MenuIcon> </MenuIcon> }
            </div>

            <nav className={`md:flex justify-center sm:bg-green-200 duration-200 ease-in absolute w-full ${open ?"top-8" :"top-[-150px]"} `}>
                <CustomLink to='/'> HOME </CustomLink>
                <CustomLink to='/reviews'> REVIEWS </CustomLink>
                <CustomLink to='/dashboard'> DASHBOARD </CustomLink>
                <CustomLink to='/blogs'> BLOGS </CustomLink>
                <CustomLink to='/about'> ABOUT </CustomLink>
            </nav>
            <br />
            <br />
            <br />
        </div>
    );
};

export default Header;