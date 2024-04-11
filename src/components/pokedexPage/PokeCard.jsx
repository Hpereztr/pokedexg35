import React, { useEffect } from "react";
import useFecth from "../../hooks/useFecth";
import { useNavigate } from "react-router-dom";
import '../style/PokeCard.css'

const PokeCard = ({ pokeInfo }) => {
  const [pokemon, getPokemon] = useFecth(pokeInfo.url);

  useEffect(() => {
    getPokemon();
  }, []);

  const navigate = useNavigate()

  const handlePokeDetail = () => {
    navigate(`/pokedex/${pokeInfo.name}`)
  }

  return (
    <div className={`card__border ${pokemon?.types[0].type.name}`}onClick={handlePokeDetail}>
    <article className='card'>
      <header className='card__header'>
        <img className="card__img"
          src={pokemon?.sprites.other["official-artwork"].front_default}
          alt=""
        />
      </header>
      <section className="card__principal">
        <h3 className='card__name'>{pokemon?.name}</h3>
        <ul className="card__types">
          {pokemon?.types.map((typeInfo) => (
            <li className="card__type" key={typeInfo.type.url}>{typeInfo.type.name}</li>
          ))}
        </ul>
      </section>
      <hr className="card__hr" />
      <section className="card__stats">
        <ul className="card__list">
        {pokemon?.stats.map((statInfo) => (
          <li className="card__stat" key={statInfo.stat.url}>
            <span className="card__stat__label">{statInfo.stat.name}</span>
            <span className="card__stat__value">{statInfo.base_stat}</span>
          </li>
          
        ))}
        </ul>
      </section>
    </article>
    </div>
  );
};

export default PokeCard;
