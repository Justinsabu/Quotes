import React from 'react'
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';






function Bookmark() {

  const [allQuotes,setallQuotes]=useState([])
  const [id,setid]=useState('')
  const [content,setcontent]=useState('')
  const [author,setauthor]=useState('')


const fetchData=async()=>{


  


  const result= await axios.get('http://localhost:8000/allquotes')
  console.log(result);
  setallQuotes(result.data.quotes)
}
useEffect(()=>{
  fetchData()
},[])

const history=useNavigate()

const handleDelete=async(id)=>{
  const result= await axios.delete('http://localhost:8000/delquote'+id)
  alert((await result).data.message)
  history(0)


 }

  return (
    <div>
      {
        allQuotes.map((item)=>(

          <Card style={{ width: 'auto', background: "#e46d40",marginBottom:"15px" }}>
              <Card.Body>
                      {item.content}
                  <Card.Text>
                  -{item.author}
                  </Card.Text >
                  <Button variant='secondary' onClick={()=>{if(window.confirm('Delete the item?')){handleDelete(item.id)};}} >Delete</Button>

              </Card.Body>
          </Card>
        ))
              
      }

    </div>
  )
}

export default Bookmark