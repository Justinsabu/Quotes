import {Q_SUCCESS,Q_FAILURE, Q_BEGIN} from "../constants/quotesconst"




export const quotesReducer=(state={quotesList:[],loading:false},action)=>{
    switch (action.type) {
        case Q_BEGIN:
            return{
                loading:true,
            }
            
            break;
        case Q_SUCCESS:
            return{
                loading:false,
                quotesList:action.payload
            }
            
            break;

        case Q_FAILURE:
            return{
                loading:false,
                quotesList:action.error
            }
            break;
            

        default:
            return{
                sate:action.state
            }
            break;
    }
}