import React, {useState} from 'react'
import {Button, Logo} from '../index.js'
import {Link, useNavigate} from 'react-router-dom'
import headerLogo from '../../assets/logo.png'
import { Navigate } from 'react-router-dom'

const Header = () => {
    const [activeLink, setActiveLink] = useState(1);
    const navigate = useNavigate();
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
            name: "History",
            path: "/#",
        },
        {
            id: 4,
            name: "Centers",
            path: "/#",
        },
        {
            id: 5,
            name: "Feedback",
            path: "/#",
        },
        
        
    ]

    
    
  return (
    <div className='w-full p-3 sticky top-0 backdrop-blur-sm'>
        <div className='flex justify-around items-center'>
        <div className=''>
            <Logo className={'w-28 h-24'} imgUrl={headerLogo}/>
        </div>
        <div className='flex'>
            <ul className='flex gap-10 justify-center items-center font-medium text-xl'>
                {
                    navLink.map(({id, name, path}) => {
                        return (
                            <li key={id} className={`text-[#06a751] 
                                ${activeLink === id ? 'underline decoration-4 underline-offset-8 text-[#06a751] transition-all' : ' hover:text-[#1ba84a] text-black'} 
                                `}><Link to={path}  onClick={() => handleActive(id)}>{name}</Link></li>
                        )
                    })
                }
            </ul>
        </div>
        <div>
            <Button btnName="Login" className={'bg-[#0b6836] rounded-full border-none px-8 py-3 text-xl flex items-center justify-center font-medium text-white hover:bg-[#034633FF] '} onClickHandler={() => navigate("/login")}/>
        </div>
        </div>
    </div>
  )
}

export default Header

