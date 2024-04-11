import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFecth from "../hooks/useFecth";
import "../components/style/DetailiCard.css";
import "./style/PokeCard.css";

const DetailisCard = () => {
  const { name } = useParams();

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const [pokemon, getPokemon] = useFecth(url);

  useEffect(() => {
    getPokemon();
  }, [name]);
  console.log(pokemon)
  return (
    <div className={`detail__container ${pokemon?.types[0].type.name}`}>
      <div className="card__detail">
        <header className="card__detail__header">
          <img
            className="card__detail__img"
            src={pokemon?.sprites.other["official-artwork"].front_default}
            alt=""
          />
        </header>
        <article className="card_principal__detail">
          <h1 className="card__detail__id">#{pokemon?.id}</h1>
          <h2 className="card__detail__name">{pokemon?.name}</h2>
          <ul className="card__detail__list">
            <li>
              <span>
                <p>Weight</p>
                {pokemon?.weight}
              </span>
            </li>
            <li>
              <span>
                <p>Height</p>
                {pokemon?.height}
              </span>
            </li>
          </ul>
        </article>
        <article className="card__detail__info">
          <section className="card__detail__">
          <p className="card__detail__p">Tipo</p>
            <ul className="detail__list">
              {pokemon?.types.map((typeInfo) => (
                <li
                  className="card__detail__item__list"
                  key={typeInfo.type.url}
                >
                  {typeInfo.type.name}
                </li>
              ))}
            </ul>
          </section>
          <section className="card__detail__">
          <p className="card__detail__p">Habilidades</p>
            <ul className="detail__list">
              {pokemon?.abilities.map((abilInfo) => (
                <li
                  className="card__detail__item__list"
                  key={abilInfo.ability.url}
                >
                  {abilInfo.ability.name}
                </li>
              ))}
            </ul>
          </section>
        </article>
        <hr className="card__detail__hr" />
        <section className="card__datail_stats">
          <ul className="card__detail__list__stats">
            <h2 className="card__detail__h2__stats">Stats</h2>
            {pokemon?.stats.map((statInfo) => (
              <li className="card__detail__stats__item" key={statInfo.stat.url}>
              <span>{statInfo.stat.name}</span>
              <section className="space_detail_container"><span className="space_dtail html">{statInfo.base_stat}%</span></section>
              </li>
            ))}
            
          </ul>
        </section>
        </div>
      <article className="card__detail">
        <ul className="card__detail__list">
          <h2 className="card__detail__h2">Movements</h2>
          {pokemon?.moves.map((movesInfo) => (
            <li className="card__detail__item_move" key={movesInfo.move.url}>
              {movesInfo.move.name}
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
};

export default DetailisCard;
