const express=require('express')

const cors=require('cors')

const logic=require('./services/logic')

const server=express()


server.use(cors({
    origin:'http://localhost:3000'
}))


server.use(express.json());

server.listen(8000,()=>{
    console.log('listening on the port 8000');
})


server.post('/addquote',(req,res)=>{
    logic.addQuote(req.body.id,req.body.content,req.body.author).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )

})

server.get('/allquotes',(req,res)=>{
    logic.allQuotes().then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )

})
server.delete('/delquote:id',(req,res)=>{
    logic.delquote(req.params.id).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )

})