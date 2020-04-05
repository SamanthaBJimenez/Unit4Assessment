import React from 'react';
import pokemonLogo from '../ImgFiles/PokemonLogo.png';
import '../css/Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return(
        <div className='NavbarDiv'>
            <nav>
                <ul className='NavUl'>
                    <NavLink exact to='/'><img className='NavImg' src={pokemonLogo} alt='pokemonLogo'/></NavLink>
                    <li className='NavLi'><NavLink exact to='/' activeClassName={"selected"} >Home</NavLink></li>
                    <li className='NavLi'><NavLink to='/pokemon/' activeClassName={"selected"} >Pokemon By Type</NavLink></li>
                </ul>
            </nav>
        </div>
    )
};

export default Navbar;