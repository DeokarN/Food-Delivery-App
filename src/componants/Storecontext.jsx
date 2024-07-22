import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const Storecontext = createContext(null)


const StorecontextProvider = (props) => {

const [cartitems,setcartitems]=useState({});

const Addtocart=(itemId)=>{
    if(!cartitems[itemId]){

        setcartitems((prev)=>({...prev,[itemId]: 1}))

    }
    else
    {
        setcartitems((prev)=>({...prev,[itemId]: prev[itemId]+1}))
    }
}

const Removefromcart=(itemId)=>{
    setcartitems((prev)=>({...prev,[itemId]: prev[itemId]-1}))
}

const gettotalcartamount=()=>{
    let totalamount=0;
    for(const item in cartitems)
    {
        if(cartitems[item]>0){
            let iteminfo=food_list.find((product)=>product._id===item);
            totalamount+=iteminfo.price*cartitems[item];
        }   
    }
    return totalamount;
}

    const contextvalue = {
        food_list,
        cartitems,
        setcartitems,
        Addtocart,
        Removefromcart,
        gettotalcartamount

    }
    
     

    return (
       <Storecontext.Provider value = { contextvalue } >

        { props.children }
       
       </Storecontext.Provider >
    )
}

export default StorecontextProvider;