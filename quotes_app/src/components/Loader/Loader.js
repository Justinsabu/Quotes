import React from 'react'
import { loader } from "../Loader/images";


function Loader() {
    return (
        <div>
            <div className='loader my-5'>
                <div className='container flex align-center justify-center'>
                    <img src={loader} alt="" style={{width:"70px"}} />
                </div>
            </div>
            
        </div>
    )
}

export default Loader