import React, { useEffect, useState } from 'react'
import {Link, useParams} from "react-router-dom"
import { fetchSingleCocktail } from '../redux/action' 
import {useDispatch, useSelector} from "react-redux"
const SingleCocktail = () => {
    const {cocktail,loading} = useSelector((state) => ({...state.data}))
  
   const [modifiedCocktail,setModifiedCocktail]=useState(null);
   const {id}=useParams();
   console.log("id:",id);
   const dispatch = useDispatch()
   useEffect(()=>{
       dispatch(fetchSingleCocktail(id));
   },[id])
   useEffect(() => {
       if(cocktail.length>0){
           const{
               strDrink:name,
               strDrinkThumb:image,
               strAlcoholic:info,
               strCategory:category,
               strGlass:glass,
               strInstructions:instructions,
               strIngredients1,
               strIngredients2,
               strIngredients3,
               strIngredients4,
               strIngredients5,
           }=cocktail[0];
           const ingredients=[
               strIngredients1,
               strIngredients2,
               strIngredients3,
               strIngredients4,
               strIngredients5,
           ];
       const newCocktail={
        name,
           image,
           info,
           category,
           glass,
           instructions,
           ingredients,
       };
           

       
       setModifiedCocktail(newCocktail);
    }
       else{
           setModifiedCocktail(null);
       }
     
   }, [id,cocktail]);
   if(!modifiedCocktail){
       return <h2 className='section-title'>No cocktail to play </h2>
   }
   else{
       const{name,image,category,info,glass,instructions,ingredients}=modifiedCocktail;

   }
    return (
        <div>
            {loading?(
                <div className="spinner-grow" role='status'>
                    <span className='visually-hidden'>Loading...</span>
                </div>
            ):
            ( 
          
            <div>
                <section className='text-center'>
                    <Link to="/" >
                        <button className='btn btn-danger' style={{marginTop:"2rem", textAlign:"center"}}>
                            Go Back
                        </button>
                    </Link>
                </section>

                    <h2 className='section-title'>{modifiedCocktail.name}</h2>
                    <div className='drink'>
                        <img src={modifiedCocktail.image} alt={modifiedCocktail.name} width="200px"/>
                        <div className='drink-info'>
                            <p>
                                <span className='drink-data'>Name:</span>{modifiedCocktail.name}
                            </p>
                            <p>
                                <span className='drink-data'>Category:</span>{modifiedCocktail.category}
                            </p>
                            <p>
                                <span className='drink-data'>Info:</span>{modifiedCocktail.info}
                            </p>
                            <p>
                                <span className='drink-data'>Glass:</span>{modifiedCocktail.glass}
                            </p>
                            <p>
                                <span className='drink-data'>Instructions:</span>{modifiedCocktail.instructions}
                            </p>
                            <p>
                                <span className='drink-data'>ingredients:</span>{modifiedCocktail.ingredients.map((item,index)=>{
                                    return item?<span key={index} >{item}</span>:null;
                                })}
                            </p>
                        </div>
                    </div>
                  </div>
               
                
            )};
        </div>
         
    );
            
}

export default SingleCocktail
