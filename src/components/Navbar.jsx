import React, { useEffect, useState } from 'react'
import {FaPowerOff, FaSearch} from 'react-icons/fa'
import styled from 'styled-components';
import logo from '../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom';
import {onAuthStateChanged, signOut} from 'firebase/auth'
import {firebaseAuth} from '../utils/firebase-config'


export default function ({isScrolled}) {

    const [showSearch,setShowSearch] = useState(false);
    const [inputHover,setInputHover] = useState(false);
    const navigate=useNavigate();

useEffect(()=>{

    onAuthStateChanged(firebaseAuth,(currentuser)=>{
        if(!currentuser) navigate("/login");
    });
},[])
    
    

   

    const links=[
        {name:'Home',link:"/"},
        {name:'Movies',link:"/movies"},
        {name:'TV Shows',link:"/tvshows"},
        {name:'My List',link:"/mylist"},
    ];
  return (
    <Container>
      <nav className={`${isScrolled ? "scrolled" : ""} flex`}>
        <div className='left flex a-center'>
            <div className="brand flex a-center j-center">
                <img src={logo} alt="logo" />
            </div>
            <ul className='links flex'>
                {links.map(({name,link})=>{
                    return (
                        <li key={name}>
                            <Link to={link}>{name}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
        <div className="right flex a-center">
            <div className={`${showSearch?"show-search" : ""} search`}>
                <button onFocus={(()=>setShowSearch(true))}
                    onBlur={()=>{
                    if(!inputHover){
                        setShowSearch(false);
                    }
                    }}
                >
                    <FaSearch/>
                </button>
                <input type="text" placeholder='Search' 
                    onMouseEnter={()=>setInputHover(true)}
                    onMouseLeave={()=>setInputHover(false)}
                    onBlur={()=>{
                        setInputHover(false)
                        setShowSearch(false)
                    }}
                />
            </div>
           { useEffect(()=>{

            },[])}
            <button  onMouseEnter={()=>setInputHover(false)}
            onClick={()=>signOut(firebaseAuth)}>
                <FaPowerOff/>
            </button>
        </div>
      </nav>
    </Container>
  )
}

const Container = styled.div`
  .scrolled {
    background-color: black;
  }
  nav {
    position: sticky;
    top: 0;
    height: 6.5rem;
    width: 100%;
    justify-content: space-between;
    position: fixed;
    top: 0;
    z-index: 2;
    padding: 0 4rem;
    align-items: center;
    transition: 0.3s ease-in-out;
    .left {
      gap: 2rem;
      .brand {
        img {
          height: 4rem;
        }
      }
      .links {
        list-style-type: none;
        gap: 2rem;
        li {
          a {
            color: white;
            text-decoration: none;
          }
        }
      }
    }
    .right {
      gap: 4rem;
      button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        &:focus {
          outline: none;
        }
        svg {
          color: #f34242;
          font-size: 1.2rem;
        }
      }
      .search {
        display: flex;
        gap: 0.4rem;
        align-items: center;
        justify-content: center;
        padding: 0.2rem;
        padding-left: 0.5rem;
        button {
          background-color: transparent;
          border: none;
          &:focus {
            outline: none;
          }
          svg {
            color: white;
            font-size: 1.2rem;
          }
        }
        input {
          width: 0;
          opacity: 0;
          visibility: hidden;
          transition: 0.3s ease-in-out;
          background-color: transparent;
          border: none;
          color: white;
          &:focus {
            outline: none;
          }
        }
      }
      .show-search {
        border: 1px solid white;
        background-color: rgba(0, 0, 0, 0.6);
        input {
          width: 100%;
          opacity: 1;
          visibility: visible;
          padding: 0.3rem;
        }
      }
    }
  }
`;