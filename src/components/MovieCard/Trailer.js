import React from 'react'
import {Link, useParams} from 'react-router-dom'
import {moviesArray} from '../../assets/mookData'
const Trailer =() =>{
    
    const {id} = useParams()
  
    

    return (
    <div className="page-content">
        <h1>Trailer Page</h1>
        <h2>Description</h2>
        <div>  
            {moviesArray[0].description}
        </div>

        <Link to="/" >  <button>Return</button> </Link>
    </div>
    )
}

export default Trailer;