import React, { useState, useEffect }from "react";
import { useParams } from "react-router-dom";

function MealInfo() {

  // Corrected component name to MealInfo
  const [info, setInfo]= useState();
  const { mealid } = useParams();
  console.log(mealid);

  function getInfo() {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
      .then((result) => result.json())
      .then((res) => {
        console.log(res.meals[0]);
        setInfo(res.meals[0]);
      });
  }

  useEffect(()=>{
    getInfo()
  },[]);
 
  if(info !== ""){
    getInfo();
  }

  return (
    <div>
    { 
      !info ? "Deta is not fount." : 
              <div className="mealInfo">
              <img src={info.strMealThumb}></img>
                <div className="info">
                  <h1>Recipe detail</h1>
                  <button>{info.strMeal}</button>
                  <h3>Intruction's</h3>
                  <p>{info.strInstructions}</p>
                </div>
              </div>
    }
    </div>
      
  ) 
}

export default MealInfo; // Corrected export name to MealInfo