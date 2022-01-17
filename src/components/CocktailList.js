import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCocktail } from "../redux/action";
import { Link } from "react-router-dom";
const CocktailList = () => {
  const { cocktails, loading } = useSelector((state) => ({ ...state.data }));
  const [modifiedCocktail, setModifiedCocktail] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCocktail());
  }, []);
  useEffect(() => {
    if (cocktails) {
      const newCocktails = cocktails.map((item) => {
        const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
          item;
        return {
          id: idDrink,
          name: strDrink,
          image: strDrinkThumb,
          info: strAlcoholic,
          glass: strGlass,
        };
      });
      setModifiedCocktail(newCocktails);
    } else {
      setModifiedCocktail([]);
    }
  }, [cocktails]);
  if (loading) {
    return (
      <div className="spinner-grow" role="status">
        <span className="visually-hidden">Loading ...</span>
      </div>
    );
  }
  if (!cocktails) {
    return <h2> No Cocktails matched your search criteria</h2>;
  }
  return (
    <div className="container">
      {/* <div className='row row-cols-1 row-ols-md-3 g-4'> */}
      <div className="d-flex justify-content-around flex-wrap">
        {modifiedCocktail.map((item) => {
          const { id, name, image, glass, info } = item;
          return (
            <div className="col" key={id}>
            
              <div className="card h-2 m-3" style={{width:"200px" ,height:"450px"}}>
                <img src={image} alt={name} className="card-img-top" />
                <div className="card-body" style={{ textAlign: "left" }}>
                  <h5 className="card-title">{name}</h5>
                  <h5 className="card-title">{glass}</h5>
                  <p className="card-text">{info}</p>
                  <Link to={`/cocktail/${id}`}>
                    <button className="btn btn-info">Details</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CocktailList;
