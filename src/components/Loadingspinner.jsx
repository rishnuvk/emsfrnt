import React from 'react'
import Spinner from 'react-bootstrap/Spinner';


function Loadingspinner() {
  return (
    <>

       <div className='d-flex justify-content-center align-items-center m-5 fw-bolder'>

       <Spinner animation="grow" variant="dark" />Loading.......



       </div>
    
    </>
  )
}

export default Loadingspinner