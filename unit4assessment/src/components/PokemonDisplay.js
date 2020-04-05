import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../css/PokemonDisplay.css';
import axios from 'axios';
import Comments from './Comments';

const PokemonDisplay = () => {
    const [toggle, setToggle] = useState(true);
    const [types, setTypes] = useState([]);
    const [name, setName] = useState('');
    const [showPhoto, setShowPhoto] = useState({});
    const location = useLocation();
    let url = location.state.url;

    const getPokeInfo = async () => {
        try {
            let pokeInfo = await axios.get(url);
            setTypes(pokeInfo.data.types);
            setName(pokeInfo.data.species.name);
            setShowPhoto(pokeInfo.data.sprites);
        } catch(error) {
            setTypes([]);
            setName('');
            console.log(error);
        }
    }  

    useEffect(() => {
        getPokeInfo();
    })

    const showPokeType = types.map((el) => {
        return <li className='typeLi' key={el.type.name}>{el.type.name}</li>
    })

    const handleClick = (e) => {
        e.preventDefault();
        setToggle(!toggle);
    }

    return(
        <div className='DisplayDiv'>
            <div className='split left'>
                <div className='centered'>
                    <h1>Name: <strong>{name}</strong></h1>
                    <p className='leftP'>Type: <strong>{showPokeType}</strong></p>
                    {toggle ? <img className='leftImg' src={showPhoto.front_default} alt=''/> : <img className='leftImg' src={showPhoto.back_default} alt=''/>}
                    <form className='spriteForm'>
                        <button className='spriteBtn' type='click' onClick={handleClick}>Turn</button>
                    </form>
                </div>
            </div>
            <div className='split right'>
                <div className='centered'>
                    <Comments />
                </div>
            </div>
        </div>
    )
};

export default PokemonDisplay;