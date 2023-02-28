import React, { useState } from 'react';
import { GiHamburgerMenu, GiCancel } from 'react-icons/gi';
import Logo from '@/assets/logo/Logo_transparent.png';
import Link from './Link';

type Props = {
    selectedPage: string;
    setSelectedPage: (value: string) => void;
}

const Navbar = ({selectedPage, setSelectedPage}: Props) => {

    const flexBetween = 'flex justify-between items-center'

    return (
        <nav className=''>
            <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
                <div className={`${flexBetween} w-5/6 mx-auto`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        {/** Left Side Logo */}
                        <img src={Logo} alt="logo" className="w-28 h-28" />
                        {/** Right Side Menu */}
                        <div className={`${flexBetween} w-full text-text-primary`}>
                            <div className={`${flexBetween} gap-8 text-sm`}>
                                {/* {menu links} */}
                                <Link page='Home' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                <Link page='About' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                                <Link page='Events' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                                <Link page='Contact' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            </div>
                            <div className={`${flexBetween} gap-8`}>
                                <p>Sign In</p>
                                <button>Explore Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar