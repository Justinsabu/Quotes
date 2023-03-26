import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { quotesListAction } from '../actions/quotes';
import Button from 'react-bootstrap/Button';
import axios from 'axios';




function Viewquotes() {
    // const [Randomquotes,setRandomquotes]= useState([])

    const dispatch = useDispatch()
    useEffect(() => {

            dispatch(quotesListAction())

    },[])









    const result = useSelector(state => state.quoteReducer)
    let { quotesList } = result


    let id=quotesList?._id
    let content=quotesList?.content
    let author=quotesList?.author

    // console.log(id);
    // console.log(content);
    // console.log(author);


    const body={
        id,
        content,
        author
      }

      const handleAdd=async(e)=>{
        e.preventDefault();//avoid refreshing

        localStorage.setItem('id',id)
        localStorage.setItem('content',content)
        localStorage.setItem('author',author)


        const result= await axios.post('http://localhost:8000/addquote',body)
        console.log(result);
        alert(result.data.message)



 
      }

    


    return (
        <div>
            <Card style={{ width: 'auto', background: "#e46d40" }}>
                <Card.Body>
                        {quotesList?.content}
                    <Card.Text>
                    -{quotesList?.author}
                    </Card.Text >
                    <Button variant='secondary' onClick={(e)=>handleAdd(e)} >Add to Bookmark</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Viewquotes