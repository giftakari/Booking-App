import React from 'react'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'

function SingleHotel(props) {
   console.log(props)
   const params = useParams();
   console.log(params)
    return (
        <div>
            <h2>Single Hotel</h2>
            <h4>{params.id}</h4>

        </div>
    )
}

export default SingleHotel
