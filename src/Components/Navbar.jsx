import React from 'react';
import logo from '../assets/logo.png';
import avatar from '../assets/image-avatar.jpg';
import sun from '../assets/icon-sun.svg';

const Navbar = () => {
  return (
    <div>
        <div className='bg-[#373B53] w-[100px] min-h-screen fixed flex flex-col justify-start 
        items-center'>
            <div>
                <img src={logo} alt="logo" />
            </div>
            <div className='absolute bottom-3 flex flex-col justify-center items-center '>
                <div className='mb-3'>
                    <img src={sun} alt="sun" />
                </div>


                <div  className='h-[2px] -mb-4 w-full bg-slate-400'/>


                <div>
                    <img src={avatar} alt="avatar"className='h-[50px] rounded-full'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar