import React from 'react'
import { Link } from 'react-router-dom'

const Cartas = ({item}) => {
  return (
    
            <div className="col-md-4 col-lg-3 mb-4" >
                <div className="card h-100" data-bs-theme="dark">
                    <div className="card-header p-0">
                        <img src={item.strSportThumb} alt="" className="img-fluid" />
                    </div>
                    <div className="card-body text-center">

                        <p className="text-success">{item.strsport}</p>
                        <h5 className="text-danger">{item.strSport}</h5>
                    </div>
                    <div className="card-footer text-center">
                        <Link to={`/resultados/${item.strSport}`} className="btn btn-outline-danger btn-sm mx-1"  >Ver ultimos resultados</Link>
                        
                    </div>
                </div>
                </div>

  )
}

export default Cartas