import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../css/PokemonDisplay.css';
import Axios from 'axios';


const PokemonDisplay = () => {
    const [types, setTypes] = useState([]);
    const [name, setName] = useState('');
    const [photo, setPhoto] = useState('');
    const location = useLocation();
    let url = location.state.url;

    const getPokeInfo = async () => {
        try {
            let pokeInfo = await Axios.get(url);
            setTypes(pokeInfo.data.types);
            setName(pokeInfo.data.species.name);
            setPhoto(pokeInfo.data.sprites.front_default)
        } catch(error) {
            setTypes([]);
            setName('');
            console.log(error);
        }
    }  

    useEffect(() => {
        getPokeInfo();
    }, )

    const showPokeType = types.map((el) => {
        return <li>{el.type.name}</li>
    })

    const handleComment = () => {

    }
    // see an individual Pokemon's types, sprites, and leave comments

    return(
        <div className='DisplayDiv'>
            <div className='split left'>
                <div className='centered'>
                    <h1>Name: <strong>{name}</strong></h1>
                    <p>Type: <strong>{showPokeType}</strong></p>
                    <img src={photo} alt=''/>
                </div>
            </div>
            <div className='split right'>
                <div className='centered'>
                    <form onSubmit={handleComment}>
                        <label>
                            Name:
                            <input id='name' type='text' placeholder='Name..'></input>
                        </label>
                        <label>
                            Comment:
                            <input id='comment' type='text' placeholder='Comment..'></input>
                        </label>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default PokemonDisplay;