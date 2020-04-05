import React, { useState, useEffect } from 'react';
import '../css/Pokemon.css';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Pokemon = () => {
    const [toggle, setToggle] = useState(false);
    const [allTypes, setAllTypes] = useState([]);
    const [typePokemon, setTypePokemon] = useState([]);
    let history = useHistory();

    const fetchAllTypes = async () => {
        try {
            let typeList = await axios.get('https://pokeapi.co/api/v2/type');
            setAllTypes(typeList.data.results);
        } catch (error) {
            setAllTypes([]);
            console.log(error);
        }
    }

    useEffect(() => {
        fetchAllTypes();
    }, []);

    const typeOptions = allTypes.map(type => {
        return <option value={type.url} key={type.name}>{type.name}</option>
    });

    const handleType = async (url) => {
        try {
            let pokeList = await axios.get(url)
            setTypePokemon(pokeList.data.pokemon)
            setToggle(true)
        } catch (error) {
            console.log(error);
        }
    }
    
    const pokeOptions = typePokemon.map((poke) => {
        return <button className='pokeBtn' type='button' value={poke.pokemon.name} key={poke.pokemon.name} id ={poke.pokemon.url} onClick={(e) => {
            history.push(`/pokemon/${poke.pokemon.name}`, {url: e.target.id});
        }}>{poke.pokemon.name}</button>
    })

    return(
        <div className='PokemonDiv'>
            <div className='directions'>
                <p>1. Choose a Pokemon Type from the Select Bar</p>
                <p>2. Choose a Pokemon Name from the List</p>
            </div>
            <select className='PokemonSelect' onChange={(e) => handleType(e.target.value)} >
                <option value={""} selected disabled>Select Pokemon Type</option>
                {typeOptions}
            </select>
            <div className='pokeBtnDiv'>
                {toggle ? pokeOptions : <h1 className='noResults'>No Results Found</h1>}
            </div>
        </div>
    )
};

export default Pokemon;