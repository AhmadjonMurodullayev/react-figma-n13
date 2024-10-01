import React from 'react'
import style from './style.module.scss'
import logo from '../../assets/logo.svg'
import icon from '../../assets/icon.svg'
import icon2 from '../../assets/icon2.svg'
import icon3 from '../../assets/icon3.svg'
import icon4 from '../../assets/icon4.svg'
import Navbar from '../navbar/navbar'
import data from '../../data'
import Sorch from '../sorch/sorch'
const Header = () => {
  return (
<header className={style.container}>
   <div className={style.header}>
   <div className={style.header-logo}>
        <img src={logo} alt="" />
    </div>
      <div className={style.header_sorch}>
   <div className={style.div}>
    <h5 className={style.title}>Anywhere</h5>
   </div>
   <div className={style.div}>
    <h5 className={style.title}>Any week</h5>
   </div>
   <div className={style.div}>
    <h5 className={style.title}>Add guests</h5>
   </div>
   <div className={style.dumaloq}>
    <img src={icon} alt="" />
   </div>
    </div> 
    <div className={style.header_sing}>
      <h3 className={style.title}>Airbnb your home</h3>
      <img src={icon2} alt="" />
      <div className={style.icons}>
        <img src={icon3} alt="" />
        <img src={icon4} alt="" />
      </div>
    </div> 
   </div>
   <Navbar data={data.header.navbar}/>
   <Sorch/>
</header>
  )
}

export default Header