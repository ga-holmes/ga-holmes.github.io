import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const NoPage = () => {

    let navigate = useNavigate();
    let {example} = useParams();

  return (
    <div>
        404: Page {example}not found
        <button onClick={ () => { navigate("/"); } }>Go Back</button>
    </div>
  )
}

export default NoPage