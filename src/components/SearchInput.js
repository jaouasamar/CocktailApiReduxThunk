import React,{useRef,useEffect} from 'react'
import {fetchSearchCocktail} from '../redux/action'
import { useDispatch } from 'react-redux'
import './SearchInput.css'

const SearchInput = () => {
    const searchValue=useRef();
    const dispatch=useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();


        
    }
    const searchCocktail = () => {
        dispatch(fetchSearchCocktail(searchValue.current.value))
    }
    
    
    return (
        <div>
            <section className='section-search'>
               <form className='search-form' onSubmit={handleSubmit}>
                   <div className='form-control'style={{textAlign:'center'}}>
                       <label htmlForm='name' style={{marginRight:"50px"}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   >
                           Search Cocktail
                       </label>
                       <input 
                       type="text"
                       name="name"
                       id="name"
                       style={{width:"500px"}}
                       onChange={searchCocktail}
                       ref={searchValue}
                       />
                   </div>

               </form>
                </section>
        </div>
    )
}

export default SearchInput
