import React, { useContext, useState } from 'react';
import {assets} from "../assets/assets";
import { Link, NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
const Navbar = () => {
    const [visible,setVisible]=useState(false);
    const {setShowSearch,getCartCount,navigate,token,setToken,setCartItems}=useContext(ShopContext);
    const logout=()=>{
        navigate('/login');
        localStorage.removeItem('token');
        setToken('');
        setCartItems({});
    }
  return (
    
        <nav className='flex items-center justify-between p-5 font-medium'>
            <Link to={'/'}>
                <img src={assets.logo} className='w-14'/>
            </Link>
            <div className='flex items-center justify-between gap-5'>
            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <NavLink to='/' className={'flex flex-col items-center gap-1'}>
                <p>HOME</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
                </NavLink>
            </ul>
            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <NavLink to='/collections' className={'flex flex-col items-center gap-1'}>
                <p>COLLECTIONS</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
                </NavLink>
            </ul>
            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <NavLink to='/about' className={'flex flex-col items-center gap-1'}>
                <p>ABOUT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
                </NavLink>
            </ul>
            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <NavLink to='/contact' className={'flex flex-col items-center gap-1'}>
                <p>CONTACT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
                </NavLink>
            </ul>
            </div>
            <div className='flex items-center gap-6'>
                <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer'/>
                <div className='group relative'>
                    <img onClick={()=>token?null:navigate('/login')} src={assets.profile_icon} className='w-5 cursor-pointer'/>
                    {/* Dropdown Menu */}
                    {token && <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 bg-slate-100 text-gray-500'>
                            <p className='cursor-pointer hover:text-black'>My Profile</p>
                            <p onClick={()=>navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
                            <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
                        </div>
                    </div>}
                </div>
                <Link to='/cart' className='relative'>
                    <img src={assets.cart_icon} className='w-5'></img>
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
                </Link>
                <img onClick={()=>setVisible(true)} src={assets.menu_icon} alt='' className='w-5 cursor-pointer sm:hidden'/>
                {/* Mobile side bar menu */}
                <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible?'w-full':'w-0'}` }>
                    <div className='flex flex-col text-gray-700'>
                        <div onClick={()=>setVisible(false)}className='flex items-center gap-4 p-3 cursor-pointer'>
                            <img className='rotate-180 h-4' src={assets.dropdown_icon}/>
                            <p>Back</p>
                        </div>
                        <NavLink onClick={()=>setVisible(false)} className={'py-3 pl-5 border'} to={'/'}>Home</NavLink>
                        <NavLink onClick={()=>setVisible(false)} className={'py-3 pl-5 border'} to={'/collections'}>Collections</NavLink>
                        <NavLink onClick={()=>setVisible(false)} className={'py-3 pl-5 border'} to={'/about'}>About</NavLink>
                        <NavLink onClick={()=>setVisible(false)} className={'py-3 pl-5 border'} to={'/contact'}>Contact</NavLink>
                    </div>
                </div>
            </div>
            
        
        
    </nav>
  )
}

export default Navbar