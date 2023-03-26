import axios from "axios"
import {Q_SUCCESS,Q_FAILURE, Q_BEGIN} from "../constants/quotesconst"



export const quotesListAction=()=>async(dispatch)=>{
    try{
        // dispatch({
        //     type:Q_BEGIN,
        // })
        const result=await axios.get('https://api.quotable.io/random')
        console.log(result.data);
        dispatch({
            type:Q_SUCCESS,
            payload:result.data
        })
    
    }
    catch(error){
        dispatch({
            type:Q_FAILURE,
            error:error
        })

    }
} 
export const tagAction = async(dispatch,searchTerm)=>{
    try{
        dispatch({
            type:Q_BEGIN,
        })
        const result=await axios.get(`https://api.quotable.io/random?tags=${searchTerm}`)
        console.log(result.data);
        dispatch({
            type:Q_SUCCESS,
            payload:result.data
        })
    
    }
    catch(error){
        dispatch({
            type:Q_FAILURE,
            error:error
        })

    }
} 
export const randomAction = async(dispatch)=>{
    try{
        dispatch({
            type:Q_BEGIN,
        })
        const result=await axios.get(`https://api.quotable.io/random`)
        console.log(result.data);
        dispatch({
            type:Q_SUCCESS,
            payload:result.data
        })
    
    }
    catch(error){
        dispatch({
            type:Q_FAILURE,
            error:error
        })

    }
} 
