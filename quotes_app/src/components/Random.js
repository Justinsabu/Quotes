import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import { randomAction } from '../actions/quotes';
import { useDispatch, useSelector } from 'react-redux';



function Random() {

    const dispatch = useDispatch()
    const result = useSelector(state => state.quoteReducer)

    const handleSearchResult = (e) => {
        e.preventDefault();
        randomAction(dispatch);

    }


    return (
        <div>
            <Button onClick={(e) => handleSearchResult(e)}  variant="success" size="lg" active>
                Next Quotes
            </Button>
        </div>
    )
}

export default Random