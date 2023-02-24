import React, { useState } from 'react';
import { GiHamburgerMenu, GiCancel } from 'react-icons/gi';

type Props = {}

const Navbar = (props: Props) => {
    const flexBetween = 'flex justify-between items-center'
    return (
        <nav className='bg-warm-100'>
            <div className={`${flexBetween} fixed top-0 z-30 w-full`}>
                Nav Bar
            </div>
        </nav>
    )
}

export default Navbar