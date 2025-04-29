import React, { useEffect, useState } from 'react';
import Mealcards from './mealcards';



function MainPage() { // Corrected function name: MainPage
  const [deta, setDeta] = useState([]);
  const [search, setSearch] = useState("");
  const [msg, setMsg] = useState("");

  // const inputsearch = async (e) => {
  //   setSearch(e.target.value);
  // };

  // // get data to serachs
  // const myfudname = async () => {
  //   const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
  //   const jsonData = await get.json();
  //   // console.log(jsonData.meals);
  //   setDeta(jsonData.meals);
  // };
//   console.log(deta);
useEffect(()=>{
  myfudname()
},[]) 

function myfudname() {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    .then((result)=> result.json())
    .then((res)=>{
        setDeta(res.meals);
        setSearch("")
    })
   }




  return (
    <>
    <h1 className='head'>Food Recipe App</h1>
      <div className="container">
        <div className="searchbar">
          <input type="text" placeholder="enter you dish name" onChange={(e)=>{setSearch(e.target.value)}}/>
          <button onClick={myfudname}>search</button>
        </div>
        <h4 className='error'>{msg}</h4>
        <div>
            <Mealcards detail={deta}/>
        </div>
      </div>
    </>
  );
}

export default MainPage; 