import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Meal Db</h1>
      <Meals></Meals>
    </div>
  );
};

// ** meals component

const Meals = ()=>{
  const [meals,setMeals]= useState([]);

  useEffect(()=>{
    const dataLoader = async()=>{
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`);
        response.ok ? console.log('Successfull') : console.log('failed')
      } catch (error) {
        console.log(error)
      }
    };

    dataLoader()
  },[])

  return(
    <div className="grid grid-cols-4 gap-4">
      
    </div>
  )
}

export default App;
