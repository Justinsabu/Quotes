const db=require('./db')


const addQuote=(id,content,author)=>{
    console.log({id});
    console.log({content});
    console.log({author});
    return db.Quote.findOne({id}).then(
        (result)=>{
            if(result){
                return{
                    statusCode:404,
                    message:"Quotes already exist"
                }
            }
            else{

                const newQuote= new db.Quote({id,content,author})
                newQuote.save()
                return{
                    statusCode:200,
                    message:"Quotes added successfully"
                }
            }
        }
    )
}

const allQuotes=()=>{
    return db.Quote.find().then(
        (result)=>{
            if(result){
                return{
                    statusCode:200,
                    quotes:result
                }
            }
            else{
                return{
                    statusCode:404,
                    message:"Quotes not found"
                }
            }
        }
    )
}

const delquote=(id)=>{
    return db.Quote.deleteOne({id}).then(
        (result)=>{
            if(result){
                return{
                    statusCode:200,
                    message:"Deleted successfully"
                }
            }
            else{
                return{
                    statusCode:404,
                    message:"No data found"
                }
            }
        }
    )
}


module.exports={
    addQuote,
    allQuotes,
    delquote
   
}
