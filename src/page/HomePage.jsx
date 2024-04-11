import React from 'react'
import FormTrainer from '../components/FormTrainer'
import '../components/style/HomePage.css'
import name from '../Utils/Name.pnj.png'
import footer from '../Utils/footer.png'


const HomePage = () => {
  return (
    <div className='home'>
    <div className='home__container'>
      <header className='home__header'><img className='home__name' src={name} alt="" /></header>
      <h2 className='home__h2'>Hi Trainer!</h2>
      <p className='home__p'>To see the pokemon's information, tell me your trainer name</p>
      <FormTrainer/>
    </div>
    <footer><img className='home__img__footer'src={footer} alt="" /></footer>
  </div>
  )
}

export default HomePage