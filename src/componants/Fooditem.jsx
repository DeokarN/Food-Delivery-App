import React, { useContext  } from 'react'
import '../css/Fooditem.css'
import { assets } from '../assets/assets'
import { Storecontext } from '../componants/Storecontext'

const Fooditem = ({id,name,price,description,image}) => {

    const {cartitems,Addtocart,Removefromcart}=useContext(Storecontext);

  return (
    <div className='food-item'>
        
        <div className="food-item-img-container">
            <img className='food-item-image' src={image} alt="" />
            {!cartitems[id]
             ?<img className='add' onClick={()=>Addtocart(id)} src={assets.add_icon_white}/>
             :<div className='food-item-counter'>
                    <img onClick={()=>Removefromcart(id)} src={assets.remove_icon_red}/>
                    <p>{cartitems[id]}</p>
                    <img onClick={()=>Addtocart(id)} src={assets.add_icon_green}/>
             </div>
            }
        </div>
        <div className="food-item-info">
           <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
            </div> 
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">${price}</p>
        </div>
    </div>
  )
}

export default Fooditem