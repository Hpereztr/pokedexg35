import { useEffect, useState } from "react"
import PokeCard from "./PokeCard"
import '../style/PokedexPage.css'

const ListPokemons = ({pokemons, startIndex, enIndex, quantityPages, setPage, page}) => {

  const [blockPage, setBlockPage] = useState(1)
  const [pagesPerBlock, setPagesPerBlock] = useState(8)

  //logica de bloques
   const initialPageBlock = (blockPage - 1) * pagesPerBlock
   const endPageBlock = initialPageBlock + pagesPerBlock

   useEffect(() => {
    setBlockPage(Math.ceil(page / pagesPerBlock))
   },[page])

  const arrPages = []
    for(let i = 1; i <= quantityPages; i++){
      arrPages.push(i)
    }
    
    const changePage = (pageNumber) => setPage(pageNumber)

    const handlePrev = () => {
      setPage(page - 1)
    }
    const handleNext = () => {
      setPage(page + 1)
    }

  return (
    <div>
      <ul className="pokedex__card gap-page">
        <button disabled={page === 1 && true} onClick={handlePrev}>&lt;</button>
        {
          arrPages.slice(initialPageBlock, endPageBlock).map(pageNumber =>(
            <li className={`${pageNumber === page && 'active-page'}`} onClick={() => changePage(pageNumber)} key={pageNumber}>{pageNumber}</li>
          ))
        }
        <button disabled={page === quantityPages && true}  onClick={handleNext}>&gt;</button>
      </ul>
    <div className="pokedex__card">
      {
        pokemons?.slice(startIndex, enIndex).map(PokeInfo => (
          <PokeCard
           key={PokeInfo.url}
           pokeInfo={PokeInfo}
          />
          
        ))
      }
    </div>
    </div>
  )
}

export default ListPokemons