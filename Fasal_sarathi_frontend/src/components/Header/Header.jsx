import React, {useState} from 'react'
import {Button, Logo} from '../index.js'
import {Link} from 'react-router-dom'

const Header = () => {
    const [activeLink, setActiveLink] = useState(1);

    const handleActive = (id) => {
        setActiveLink(id);
      };


    const navLink = [
        {
            id: 1,
            name: "Home",
            path: "/", 
           
        },
        {
            id: 2,
            name: "Blog",
            path: "/#",
        },
        {
            id: 3,
            name: "About",
            path: "/#",
        },
        {
            id: 4,
            name: "Contact",
            path: "/#",
        },
        
    ]

    
  return (
    <div className='w-full p-3'>
        <div className='flex justify-around items-center'>
        <div className=''>
            <Logo className={'w-28 h-24'}/>
        </div>
        <div className='flex'>
            <ul className='flex gap-10 justify-center items-center font-semibold text-xl'>
                {
                    navLink.map(({id, name, path}) => {
                        return (
                            <li key={id} className={`text-black 
                                ${activeLink === id ? 'underline decoration-4 underline-offset-8 text-[#06a751] transition-all' : ' hover:text-[#1ba84a]'} 
                                `}><Link to={path}  onClick={() => handleActive(id)}>{name}</Link></li>
                        )
                    })
                }
            </ul>
        </div>
        <div>
            <Button btnName="Login" className={'bg-[#0b6836] rounded-full border-none px-8 py-3 text-xl flex items-center justify-center font-medium text-white hover:bg-[#034633FF] '}/>
        </div>
        </div>
    </div>
  )
}

export default Header

