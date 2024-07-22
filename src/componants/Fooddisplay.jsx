import React, { useContext } from 'react'
import '../css/Fooddisplay.css'
import { Storecontext } from '../componants/Storecontext'
import Fooditem from './Fooditem'

const Fooddisplay = ({category}) => {

const {food_list}=useContext(Storecontext)

  return (
    <div className='food-display' id='food-display'>
         <h2>Top dishes near you</h2>
         <div className="food-display-list">
            {food_list.map((item,index)=>{
              if(category==="all" || category===item.category){
                return  <Fooditem key={index} id={item._id} name={item.name}  description={item.description} price={item.price} image={item.image}/>
              }
            })}
         </div>
    </div>
  )
} 

export default Fooddisplay