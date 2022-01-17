import * as types from "./actionTypes";
import axios from "axios";

export const fetchCocktailStart = (payload) => ({
    type: types.FETCH_COCKTAIL_START,
    payload
})
export const fetchCocktailSuccess = (cocktails) => ({
    type: types.FETCH_COCKTAIL_SUCCESS,
    payload:cocktails,
})
export const fetchCocktailFail = (error) => ({
    type: types.FETCH_COCKTAIL_FAIL,
    payload:error,
})
export const fetchSearchCocktailStart = (payload) => ({
    type: types.SEARCH_COCKTAIL_START,
    payload
})
export const fetchSearchCocktailSuccess = (cocktails) => ({
    type: types.SEARCH_COCKTAIL_SUCCESS,
    payload:cocktails,
})
export const fetchSearchCocktailFail = (error) => ({
    type: types.SEARCH_COCKTAIL_FAIL,
    payload:error,
})
export const fetchSingleCocktailStart = (payload) => ({
    type: types.GET_SINGLE_COCKTAIL_START,
    payload
})
export const fetchSingleCocktailSuccess = (cocktail) => ({
    type: types.GET_SINGLE_COCKTAIL_SUCCESS,
    payload:cocktail,
})
export const fetchSingleCocktailFail = (error) => ({
    type: types.GET_SINGLE_COCKTAIL_FAIL,
    payload:error,
})


export function fetchCocktail(){
    return function(dispatch){
        dispatch(fetchCocktailStart());
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
        // axios.get("https://api.spoonacular.com/food/products/search?query=chocolate&apiKey=e6036f95ae1444df8872d26a0545d3d4")
        
        .then((response)=>
            {console.log(response);
            const cocktails = response.data.drinks;
            dispatch(fetchCocktailSuccess(cocktails))
            }
        ).catch((error)=>dispatch(fetchCocktailFail(error)))
    }
}
export function fetchSearchCocktail(searchText){
    return function(dispatch){
        dispatch(fetchSearchCocktailStart());
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`)
        .then((response)=>{
            const cocktails = response.data.drinks
            dispatch(fetchSearchCocktailSuccess(cocktails))
        }).catch((error)=>dispatch(fetchSearchCocktailFail(error)))
    }
}
export function fetchSingleCocktail(id){
    return function(dispatch){
        dispatch(fetchSingleCocktailStart());
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((response)=>{
            const cocktail = response.data.drinks
            dispatch(fetchSingleCocktailSuccess(cocktail))
        }).catch((error)=>dispatch(fetchSingleCocktailFail(error)))
    }
}