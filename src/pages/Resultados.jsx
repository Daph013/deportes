import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const API="https://www.thesportsdb.com/api/v2/json/3/livescore/"
const Resultados = () => {
    const params = useParams()
    const [datos, setDatos] = useState([])
    let URI = API + params.deporte
    const getDatos = async () => {
        try {
            const response = await fetch(URI);
            const data = await response.json();
            console.log(data)
            setDatos(data.sport);
        } catch (error) {
            console.error(error)
        }
    };
    useEffect(() => {
        getDatos();
    }, []);

  return (
    <>
    <div className="container">
        <h3 className="text-center py-4">ULTIMOS RESULTADOS: {params.deporte} </h3>
        <div className="row">
            {datos && datos.map((item) => (
                <div className="row border-3 shadow mt-4 py-2">
                    <div className="col-md-5">
                    <img width={150} src={item.strHomeTeamBadge} alt="" />
                    
                    <img width={150} src={item.strAwayTeamBadge} alt="" />
                    <hr className='text-white' />

                    </div>
                    <div className="col-md-7">
                        <h3>{item.strSport}</h3>
                        <h4>Liga: <span className="fw-bold">{item.strLeague}</span></h4>
                        <h4>Equipo local: <span className="badge bg-info">{item.strHomeTeam}</span></h4>
                        <h4>Equipo Visitante: <span className="fw-bold">{item.strAwayTeam}</span></h4>
                        <h4>Fecha: <span className="fw-bold">{item.dateEvent}</span></h4>
                        <h4>Resultado: <span className="fw-bold">{item.strHomeTeam}:{item.intHomeScore} {item.strAwayTeam}:{item.intAwayScore}</span></h4>
                        <hr className='text-white' />




                    </div>
                </div>
                
            ))}
        </div>
    </div>

</>
  )
}

export default Resultados