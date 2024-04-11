import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import useFecth from "../hooks/useFecth";
import ListPokemons from "../components/pokedexPage/ListPokemons";
import SelectType from "../components/pokedexPage/SelectType";
import '../components/style/PokedexPage.css'
import Header from "../components/Header";




const PokedexPage = () => {
  const [pokeSearch, setPokeSearch] = useState('');
  const [typeSelected, setTypeSelected] = useState('allPokemons')
  const [page , setPage] = useState(1)
  const [pokePerPage, setPokePerPage] = useState(12)

  const inputSearch = useRef();

  const trainer = useSelector(states => states.trainer);
  const url = "https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0";

  const [pokemons, getPokemons, getPokeByType] = useFecth(url);



  useEffect(() => {
    if(typeSelected === 'allPokemons') {
      getPokemons()
    }else {
      getPokeByType(typeSelected)
    }
    setPage(1)
  }, [typeSelected])

  const handleSubmit = (e) => {
    e.preventDefault()
    setPokeSearch(inputSearch.current.value.trim().toLowerCase())
    setPage(1)

  }

  const pokemonsFiltered = pokemons?.results.filter(poke => {
    return poke.name.includes(pokeSearch)
  })
  
  //Logica de paginación
  const startIndex = ( page - 1 )* pokePerPage
  const enIndex = startIndex + pokePerPage
  const quantityPokes = pokemonsFiltered ? pokemonsFiltered.length : 0
  const quantityPages = Math.ceil(quantityPokes / pokePerPage)
  

  return (
   
    <div className="pokedex__container">
      <Header/>
      <article className="pokedex__info">
      <p className="pokedex__p">
        Welcom <span className="pokedex__trainer"> {trainer},</span> here you can find your favorite pokemon
      </p>
      <form className="poxedex__form" onSubmit={handleSubmit}>
        <input className='pokedex__input' ref={inputSearch} type="text" />
        <button className='pokedex__button'>Search</button>
      </form>
      <SelectType
      setTypeSelected={setTypeSelected} />
      </article>
      
      <ListPokemons 
      pokemons={pokemonsFiltered}
      startIndex={startIndex}
      enIndex={enIndex}
      quantityPages={quantityPages}
      setPage={setPage}
      page={page}
       />
    </div>
    
  );
};

export default PokedexPage;
