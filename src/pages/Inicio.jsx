import React, { useEffect, useState } from 'react'
import Cartas from '../components/Cartas';
const API="https://www.thesportsdb.com/api/v2/json/3/all/sports"

const Inicio = () => {
  const [datos, setDatos] = useState([]);
  const getDatos = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      console.log(data);
      setDatos(data.sports);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getDatos();
  }, []);
  return (
    <>
    <div className="container">
       <h3 className="text-center py-4">Todos Los Deportes</h3>
           <div className="row">
            {Array.isArray(datos) && datos.length >0 ? (
              <>
               {datos.map((item, index)=>(
                 <Cartas key={index} index={index} item={item}/>
                 
               ))}
               </>
            ):(
              <h3>no hay datos</h3>

             )}
           </div>
       </div>
   
   
   
   
   </>
  )
}

export default Inicio