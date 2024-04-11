import header from '../Utils/Group 216.png'
import './style/PokedexPage.css'
import name from '../Utils/Name.pnj.png'

const Header = () => {
  return (
    <header className="pekedex__header">
        <img className='pokedex_img_name' src={name} alt="" />
        <img className="pokedex_img_header" src={header}  />
      </header>
  )
}

export default Header