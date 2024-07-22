import React, { useState } from 'react'
import '../css/Home.css'
import Header from '../componants/Header'
import Exploremenu from '../componants/Exploremenu'
import Fooddisplay from '../componants/Fooddisplay'
import Appdownload from '../componants/Appdownload'


const Home = () => {

  const[category,setcategory]=useState("all");
  return (
    <div>
      <Header/>
      <Exploremenu category={category} setcategory={setcategory}/>
      <Fooddisplay category={category}/>
      <Appdownload/>
    </div>
  )
}

export default Home