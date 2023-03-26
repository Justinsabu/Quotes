import React from 'react'
import { tagAction } from '../actions/quotes';
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';



function Searchquotes() {
    const dispatch = useDispatch()
    const result = useSelector(state => state.quoteReducer)





    const handleSearchResult = (e) => {
        e.preventDefault();
        tagAction(dispatch, e.target.value);

    }

    return (
        <div className='p-4'>
            <Form.Select aria-label="Default select example"  onChange={(e) => handleSearchResult(e)} >
                <option></option>
                <option value="technology">technology</option>
                <option value="business">business</option>
                <option value="change">change</option>
                <option value="faith">faith</option>
                <option value="family">family</option>
                <option value="film">film</option>
                <option value="happiness">happiness</option>
                <option value="history">history</option>
                <option value="honor">honor</option>
                <option value="humorous">humorous</option>
                <option value="inspirational">inspirational</option>
                <option value="motivational">motivational</option>
                <option value="nature">nature</option>
                <option value="success">success</option>
            </Form.Select>
        </div>
    )
}

export default Searchquotes