import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillCloseSquare } from 'react-icons/ai';
import Logo from '@/assets/logo/Logo_transparent.png';
import Link from './Link';
import useMediaQuery from '@/hooks/useMediaQuery';

type Props = {
    selectedPage: string;
    setSelectedPage: (value: string) => void;
    isTop: boolean;
}

const Navbar = ({ selectedPage, setSelectedPage, isTop }: Props) => {
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const flexBetween = 'flex justify-between items-center';
    const isAboveMobile = useMediaQuery('(min-width: 768px)');
    const navBackground = isTop ? 'bg-transparent' : 'bg-cool-400 drop-shadow';
    
    return (
        <nav className='mb-28'>
            <div className={`${flexBetween} ${navBackground} fixed top-0 z-30 w-full py-6`}>
                <div className={`${flexBetween} w-5/6 mx-auto`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        {/** Left Side Logo */}
                        {isAboveMobile ? (
                            <img src={Logo} alt="logo" className="w-24 h-24 bg-cool-100 rounded-full" />
                        ) : (
                            <img src={Logo} alt="logo" className="w-24 h-24" />       
                        )}
                        {/** Right Side Menu */}
                        {isAboveMobile ? (
                            <div className={`${flexBetween} w-full text-text-primary`}>
                                <div className={`${flexBetween} gap-8 text-md`}>
                                    {/* {menu links} */}
                                    <Link page='Home' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                    <Link page='About' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                    <Link page='Events' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                    <Link page='Contact' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                </div>
                                <div className={`${flexBetween} gap-8`}>
                                    <button
                                        className='border-2 border-cool-100 p-2 hover:border-b-4 rounded bg-cool-400 text-white'>Log In Now!</button>
                                </div>
                            </div>
                        ) : (
                                <button
                                    className='rounded-full p-2 w-8 h-8 bg-cool-200'
                                    onClick={() => {
                                        setIsMenuToggled(!isMenuToggled);
                                    }
                                }>
                                    <GiHamburgerMenu className='text-cool-400'/>
                                </button>
                        )}
                    </div>
                </div>
            </div>
            {/** Mobile Menu */}
            {!isAboveMobile && isMenuToggled && (
                <div className='fixed right-0 top-0 z-40 h-full w-[300px] bg-warm-100'>
                    <div className='flex flex-col gap-6 p-10 ml-[25%]'>
                        <div className='flex justify-end mb-10'>
                            <button
                                className='text-cool-400 text-2xl'
                                onClick={() => {
                                        setIsMenuToggled(!isMenuToggled);
                                    }
                                }>
                                <AiFillCloseSquare />
                            </button>
                        </div>
                        <div className='flex flex-col gap-10 text-2xl text-cool-500 font-medium'>
                            {/* {menu links} */}
                            <Link page='Home' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page='About' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page='Events' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page='Contact' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        </div>
                    </div>
                </div>
            ) 
            }
        </nav>
    )
}

export default Navbar